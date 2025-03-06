import { PutObjectCommand, GetObjectCommand, ListObjectsV2Command, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { s3Client, BUCKET_NAME, uploadFileToS3 } from '../utils/s3Client';
import { getFileExtension, getFileCategory } from '../utils/fileTypeUtils';
import { supabase } from '../utils/supabaseClient';
import { initiateModelConversion, checkConversionStatus } from './rhinoComputeService';

// Model metadata type
export interface ModelMetadata {
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
}

// Organize files in S3 by file type
const getS3KeyForFile = (file: File, userId?: string): string => {
  const fileCategory = getFileCategory(file.name);
  const timestamp = Date.now();
  const sanitizedFileName = file.name.replace(/[^a-z0-9.-]/gi, '_').toLowerCase();
  
  // If userId is provided, include it in the path for user-specific storage
  const userPrefix = userId ? `users/${userId}/` : '';
  
  return `${userPrefix}${fileCategory}/${timestamp}-${sanitizedFileName}`;
};

// Upload a model file to S3
export const uploadModelToS3 = async (
  file: File,
  metadata: Omit<ModelMetadata, 'file_size' | 'file_type' | 's3_key' | 'url'>,
  userId?: string
): Promise<ModelMetadata> => {
  try {
    const s3Key = getS3KeyForFile(file, userId);
    
    // S3 upload parameters
    const params = {
      Bucket: BUCKET_NAME,
      Key: s3Key,
      Body: file,
      ContentType: file.type || `model/${getFileExtension(file.name)}`,
      Metadata: {
        'x-amz-meta-name': metadata.name,
        'x-amz-meta-category': metadata.category,
        ...(metadata.subcategory && { 'x-amz-meta-subcategory': metadata.subcategory }),
        ...(metadata.manufacturer && { 'x-amz-meta-manufacturer': metadata.manufacturer }),
      }
    };

    // Use the new uploadFileToS3 function that handles both small and large files
    await uploadFileToS3(params);
    
    // Generate a temporary signed URL for the uploaded object
    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: s3Key
    });
    
    const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
    
    // Prepare the complete metadata object
    const completeMetadata: ModelMetadata = {
      ...metadata,
      file_size: file.size,
      file_type: file.type || `model/${getFileExtension(file.name)}`,
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
    
    // Queue conversion job with Rhino Compute
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
    const { jobId } = await initiateModelConversion(modelId, s3Key, sourceFormat);
    
    // Store the job ID in the database for status tracking
    await supabase
      .from('models')
      .update({ conversion_job_id: jobId })
      .eq('id', modelId);
      
    console.log(`Conversion job initiated with ID: ${jobId}`);
  } catch (error) {
    console.error('Error initiating conversion:', error);
    
    // Update model status to failed if conversion could not be initiated
    await supabase
      .from('models')
      .update({ conversion_status: 'failed' })
      .eq('id', modelId);
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