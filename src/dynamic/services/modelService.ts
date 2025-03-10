import { PutObjectCommand, GetObjectCommand, ListObjectsV2Command, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { s3Client, BUCKET_NAME, uploadFileToS3, testS3Connection } from '../utils/s3Client';
import { getFileExtension, getFileCategory, getMimeTypeFromExtension, isSupportedModelFormat } from '../utils/fileTypeUtils';
import { supabase } from '../utils/supabaseClient';
import { initiateModelConversion, checkConversionStatus } from './rhinoComputeService';
import { v4 as uuidv4 } from 'uuid';

// Model metadata type
export interface ModelMetadata {
  /**
   * Unique UUID identifier for the model
   * This should be a valid RFC 4122 UUID v4 string
   * Generated automatically if not provided
   */
  id?: string;
  name: string;
  filename: string;
  file_size: number;
  file_type: string;
  s3_key: string;
  url?: string;
  created_at?: string;
  category: string;
  subcategory?: string;
  price?: number;
  description?: string;
  manufacturer?: string;
  dimensions?: string;
  part_type?: string;
  material?: string;
  weight_kg?: number;
  attachment_points?: {
    name: string;
    position_x: number;
    position_y: number;
    position_z: number;
    rotation_x: number;
    rotation_y: number;
    rotation_z: number;
  }[];
  conversion_status?: 'pending' | 'processing' | 'completed' | 'failed';
  converted_formats?: string[];
  conversion_job_id?: string;
  color?: string;
  thumbnail_url?: string;
  is_public?: boolean;
}

// Organize files in S3 using a structured folder approach
const getS3KeyForFile = (file: File, userId?: string, metadata?: Partial<ModelMetadata>): string => {
  const fileExtension = getFileExtension(file.name);
  const timestamp = Date.now();
  const sanitizedFileName = file.name.replace(/[^a-z0-9.-]/gi, '_').toLowerCase();
  
  // Use component ID from metadata or generate a new random UUID
  // This ensures we have a proper UUID format for the database
  const componentId = metadata?.id || uuidv4();
  
  // Get category and subcategory from metadata or use defaults
  const category = metadata?.category || 'uncategorized';
  const subcategory = metadata?.subcategory || 'general';
  
  // Determine the base path based on file type
  let basePath = '';
  
  // Original models go in the models directory
  if (isSupportedModelFormat(file.name)) {
    basePath = `models/${category}/${subcategory}`;
  } 
  // Thumbnails and preview images
  else if (getFileCategory(file.name) === 'image') {
    basePath = 'thumbnails';
  } 
  // Converted models will be handled separately
  else {
    // For other file types, use a generic structure
    basePath = `other/${getFileCategory(file.name)}`;
  }
  
  // If userId is provided, include it in the path for user-specific storage
  const userPrefix = userId ? `users/${userId}/` : '';
  
  // Construct the final S3 key with timestamp and component ID for uniqueness
  return `${userPrefix}${basePath}/${componentId}-${sanitizedFileName}`;
};

// Generate S3 key for converted model formats
export const getConvertedModelS3Key = (
  originalS3Key: string,
  convertedFormat: string,
  modelId: string
): string => {
  // Use the provided modelId (which is now a UUID) directly
  const baseName = modelId;
  
  // Determine the category/subcategory from the original path
  let categoryPath = 'converted';
  
  // If original path follows our structure, extract category info
  if (originalS3Key.includes('/models/')) {
    const pathParts = originalS3Key.split('/');
    // Extract category and subcategory if available
    if (pathParts.length >= 3) {
      // Get category and subcategory
      const categoryIndex = pathParts.indexOf('models') + 1;
      if (categoryIndex < pathParts.length) {
        categoryPath = `converted/${pathParts[categoryIndex]}`;
        if (categoryIndex + 1 < pathParts.length) {
          categoryPath += `/${pathParts[categoryIndex + 1]}`;
        }
      }
    }
  }
  
  // Return path for converted model format
  return `${categoryPath}/${baseName}/${baseName}.${convertedFormat}`;
};

// Upload a model file to S3
export const uploadModelToS3 = async (
  file: File,
  metadata: Omit<ModelMetadata, 'file_size' | 'file_type' | 's3_key' | 'url'>,
  userId?: string
): Promise<ModelMetadata> => {
  try {
    // Generate a proper UUID for the model if not provided
    if (!metadata.id) {
      metadata.id = uuidv4();
    }
    
    // Test S3 connectivity first
    const isConnected = await testS3Connection();
    if (!isConnected) {
      throw new Error('Cannot connect to S3. Please check your credentials and network connection.');
    }
    
    // Generate S3 key using our new structured approach
    const s3Key = getS3KeyForFile(file, userId, metadata);
    
    console.log('Uploading file:', file.name, 'Size:', file.size, 'Type:', file.type || 'unknown');
    
    // Ensure file has a proper content type based on extension
    const contentType = file.type || getMimeTypeFromExtension(file.name);
    
    // S3 upload parameters with enhanced metadata
    const params = {
      Bucket: BUCKET_NAME,
      Key: s3Key,
      Body: file,
      ContentType: contentType,
      Metadata: {
        'x-amz-meta-name': metadata.name,
        'x-amz-meta-category': metadata.category,
        ...(metadata.subcategory && { 'x-amz-meta-subcategory': metadata.subcategory }),
        ...(metadata.manufacturer && { 'x-amz-meta-manufacturer': metadata.manufacturer }),
        ...(metadata.part_type && { 'x-amz-meta-part-type': metadata.part_type }),
        'x-amz-meta-original-filename': file.name,
      }
    };

    // Upload file to S3
    const uploadResult = await uploadFileToS3(params);
    console.log('Upload successful:', uploadResult);
    
    // Generate a temporary signed URL for the uploaded object
    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: s3Key
    });
    
    const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
    
    // We don't need to extract component ID from the S3 key anymore
    // Instead, use the UUID we generated or was provided in metadata
    
    // Prepare the complete metadata object
    const completeMetadata: ModelMetadata = {
      ...metadata,
      // id is already set correctly in metadata
      file_size: file.size,
      file_type: contentType,
      s3_key: s3Key,
      url: signedUrl,
      conversion_status: 'pending',
      converted_formats: [],
    };
    
    // Store metadata in your database
    const { data, error } = await supabase
      .from('models')
      .insert(completeMetadata)
      .select()
      .single();
      
    if (error) throw error;

    // Queue conversion job with Rhino Compute, using the structured path for converted models
    await queueRhinoModelConversion(data.id, s3Key, file.name);
    
    return data;
  } catch (error) {
    console.error('Error uploading model to S3:', error);
    throw error;
  }
};

// Get all models from the database
export const getModels = async (): Promise<ModelMetadata[]> => {
  try {
    const { data, error } = await supabase
      .from('models')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (error) throw error;
    
    // Refresh signed URLs if they exist but might be expired
    const modelsWithRefreshedUrls = await Promise.all(
      (data || []).map(async (model) => {
        if (!model.s3_key) return model;
        
        const command = new GetObjectCommand({
          Bucket: BUCKET_NAME,
          Key: model.s3_key
        });
        
        const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
        
        // Check conversion status for models that are still processing
        if (model.conversion_status === 'processing' && model.conversion_job_id) {
          try {
            const statusResult = await checkConversionStatus(model.conversion_job_id);
            if (statusResult.status !== model.conversion_status) {
              // Update conversion status in database if it has changed
              await supabase
                .from('models')
                .update({ 
                  conversion_status: statusResult.status,
                  ...(statusResult.outputs && { converted_formats: statusResult.outputs.map(o => o.format) })
                })
                .eq('id', model.id);
                
              // Update the model object with new status
              model.conversion_status = statusResult.status;
              if (statusResult.outputs) {
                model.converted_formats = statusResult.outputs.map(o => o.format);
              }
            }
          } catch (error) {
            console.error('Error checking conversion status:', error);
          }
        }
        
        return { ...model, url: signedUrl };
      })
    );
    
    return modelsWithRefreshedUrls;
  } catch (error) {
    console.error('Error fetching models:', error);
    throw error;
  }
};

// Queue a model for conversion using Rhino
const queueRhinoModelConversion = async (modelId: string, s3Key: string, filename: string): Promise<void> => {
  console.log(`Queueing Rhino conversion for model ${modelId}, file: ${filename}, S3 key: ${s3Key}`);
  
  // Update model status in database
  await supabase
    .from('models')
    .update({ conversion_status: 'processing' })
    .eq('id', modelId);
    
  try {
    // Call the Rhino Compute service to initiate conversion
    const sourceFormat = getFileExtension(filename);
    
    // Add information about where converted files should be stored
    const conversionInfo = {
      outputs: {
        glb: getConvertedModelS3Key(s3Key, 'glb', modelId),
        gltf: getConvertedModelS3Key(s3Key, 'gltf', modelId),
        // Add more formats as needed
      }
    };
    
    const { jobId } = await initiateModelConversion(modelId, s3Key, sourceFormat);
    
    // Store the job ID in the database for status tracking
    await supabase
      .from('models')
      .update({ 
        conversion_job_id: jobId,
        // Store information about expected conversion outputs
        converted_formats: Object.keys(conversionInfo.outputs)
      })
      .eq('id', modelId);
      
    console.log(`Conversion job initiated with ID: ${jobId}`);
  } catch (error) {
    console.error('Error initiating model conversion:', error);
    
    // Update the model status to failed
    await supabase
      .from('models')
      .update({ conversion_status: 'failed' })
      .eq('id', modelId);
  }
};

// Get a model by ID
export const getModelById = async (modelId: string): Promise<ModelMetadata | null> => {
  try {
    const { data, error } = await supabase
      .from('models')
      .select('*')
      .eq('id', modelId)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching model by ID:', error);
    throw error;
  }
};

// Update a model
export const updateModel = async (modelId: string, model: Partial<ModelMetadata>): Promise<ModelMetadata | null> => {
  try {
    const { data, error } = await supabase
      .from('models')
      .select('*')
      .eq('id', modelId)
      .single();

    if (error) {
      console.error('Error updating model:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error updating model:', error);  
    throw error;
  }
};

// Delete a model from S3 and the database
export const deleteModel = async (modelId: string): Promise<void> => {
  try {
    // Get the model to retrieve the S3 key
    const { data: model, error: fetchError } = await supabase
      .from('models')
      .select('s3_key')
      .eq('id', modelId)
      .single();
      
    if (fetchError) throw fetchError;
    if (!model) throw new Error('Model not found');
    
    // Delete from S3
    await s3Client.send(new DeleteObjectCommand({
      Bucket: BUCKET_NAME,
      Key: model.s3_key
    }));
    
    // Delete from database
    const { error: deleteError } = await supabase
      .from('models')
      .delete()
      .eq('id', modelId);
      
    if (deleteError) throw deleteError;
  } catch (error) {
    console.error('Error deleting model:', error);
    throw error;
  }
};

// Get model conversion status
export const getModelConversionStatus = async (modelId: string): Promise<{
  status: 'pending' | 'processing' | 'completed' | 'failed';
  formats?: string[];
}> => {
  try {
    const { data, error } = await supabase
      .from('models')
      .select('conversion_status, converted_formats, conversion_job_id')
      .eq('id', modelId)
      .single();
      
    if (error) throw error;
    if (!data) throw new Error('Model not found');
    
    // If the model is still processing and has a job ID, check the current status
    if (data.conversion_status === 'processing' && data.conversion_job_id) {
      try {
        const statusResult = await checkConversionStatus(data.conversion_job_id);
        
        // Update the status in the database if it has changed
        if (statusResult.status !== data.conversion_status) {
          await supabase
            .from('models')
            .update({ 
              conversion_status: statusResult.status,
              ...(statusResult.outputs && { converted_formats: statusResult.outputs.map(o => o.format) })
            })
            .eq('id', modelId);
            
          return {
            status: statusResult.status,
            formats: statusResult.outputs?.map(o => o.format)
          };
        }
      } catch (error) {
        console.error('Error checking conversion status:', error);
      }
    }
    
    return {
      status: data.conversion_status,
      formats: data.converted_formats
    };
  } catch (error) {
    console.error('Error getting model conversion status:', error);
    throw error;
  }
};

/**
 * Test function to verify S3 connectivity and upload capabilities
 * This can be called from a button in the UI to check if S3 is working
 */
export const testS3Upload = async (): Promise<{success: boolean, message: string}> => {
  try {
    // Create a small test file
    const testContent = 'This is a test file to verify S3 upload functionality.';
    const testBlob = new Blob([testContent], { type: 'text/plain' });
    const testFile = new File([testBlob], 'test-upload.txt');
    
    console.log('Testing S3 upload with a small text file...');
    
    // Use our uploadModelToS3 function with minimal metadata
    await uploadModelToS3(
      testFile, 
      {
        name: 'Test Upload',
        filename: 'test-upload.txt',
        category: 'test'
      }
    );
    
    return {
      success: true,
      message: 'S3 upload test successful! Your S3 configuration is working correctly.'
    };
  } catch (error) {
    console.error('S3 upload test failed:', error);
    
    let errorMessage = 'Unknown error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    }
    
    return {
      success: false,
      message: `S3 upload test failed: ${errorMessage}`
    };
  }
}; 