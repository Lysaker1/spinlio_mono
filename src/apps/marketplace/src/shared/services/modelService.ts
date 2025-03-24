import { PutObjectCommand, GetObjectCommand, ListObjectsV2Command, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { s3Client, BUCKET_NAME, uploadFileToS3, testS3Connection as testS3ClientConnection } from '@shared/utils/s3Client';
import { getFileExtension, getFileCategory, getMimeTypeFromExtension, isSupportedModelFormat } from '@shared/utils/fileTypeUtils';
import { supabase } from '@shared/utils/supabaseClient';
import { initiateModelConversion, checkConversionStatus } from './rhinoComputeService';
import { v4 as uuidv4 } from 'uuid';
import { logger, truncateKey } from '@shared/utils/logger';
import { createClient } from '@supabase/supabase-js';
import toast from 'react-hot-toast';

// Define the uploadStringContent helper function since it's used but not imported
const uploadStringContent = async (bucket: string, key: string, content: string): Promise<any> => {
  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    Body: content,
    ContentType: 'text/plain'
  });
  
  return await s3Client.send(command);
};

// Model metadata type
export interface ModelMetadata {
  /**
   * Unique UUID identifier for the model
   * This should be a valid RFC 4122 UUID v4 string
   * Generated automatically if not provided
   */
  id?: string;
  user_id?: string;
  name: string;
  filename: string;
  file_size: number;
  file_type: string;
  s3_key: string;
  url?: string;
  created_at?: string;
  category: number;
  subcategory?: number;
  price?: number | null;
  price_on_request: boolean;
  minimum_order_quantity?: number | null;
  moq_on_request: boolean;
  lead_time?: number | null;
  lead_time_on_request: boolean;
  payment_terms?: string | null;
  payment_terms_on_request: boolean;
  description?: string | null;
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
  colors?: string;
  thumbnail_url?: string;
  is_public: boolean;
}

export interface ComponentGroup {
  id: number;
  name: string;
  description?: string;
}

export interface ComponentCategory {
  id: number;
  name: string;
  description?: string;
  component_group: number;
}

export interface ComponentSubcategory {
  id: number;
  name: string;
  description?: string;
  component_category: number;
}

export interface ParameterDefinition {
  id: number;
  name: string;
  type: 'number' | 'string' | 'boolean';
  suffix?: string;
  value?: string | number | boolean | null; // This is an attribute we add in the backend call
}

export interface ModelParameterValue {
  model_id: string;
  parameter_id: number;
  numeric_value?: number;
  string_value?: string;
  boolean_value?: boolean;
}

export interface CategoryParameter {
  category_id: number;
  parameter_id: number;
}

export interface SubcategoryParameter {
  subcategory_id: number;
  parameter_id: number;
}

/**
 * Get a category name by its ID
 * This function tries to find the category name from the database
 * If the name cannot be found, it returns the default name
 */
const getCategoryNameById = async (categoryId: number | string): Promise<string> => {
  if (!categoryId) return 'Uncategorized';
  
  try {
    // Convert categoryId to number if it's a string
    const id = typeof categoryId === 'string' ? parseInt(categoryId, 10) : categoryId;
    
    // Query the database for the category
    const { data, error } = await supabase
      .from('component_categories')
      .select('name')
      .eq('id', id)
      .single();
      
    if (error || !data) {
      console.error('Error fetching category name:', error);
      return `Category_${id}`;
    }
    
    return data.name;
  } catch (error) {
    console.error('Error in getCategoryNameById:', error);
    return `Category_${categoryId}`;
  }
};

/**
 * Get a subcategory name by its ID
 * This function tries to find the subcategory name from the database
 * If the name cannot be found, it returns the default name
 */
const getSubcategoryNameById = async (subcategoryId: number | string): Promise<string> => {
  if (!subcategoryId) return 'General';
  
  try {
    // Convert subcategoryId to number if it's a string
    const id = typeof subcategoryId === 'string' ? parseInt(subcategoryId, 10) : subcategoryId;
    
    // Query the database for the subcategory
    const { data, error } = await supabase
      .from('component_subcategories')
      .select('name')
      .eq('id', id)
      .single();
      
    if (error || !data) {
      console.error('Error fetching subcategory name:', error);
      return `Subcategory_${id}`;
    }
    
    return data.name;
  } catch (error) {
    console.error('Error in getSubcategoryNameById:', error);
    return `Subcategory_${subcategoryId}`;
  }
};

// Organize files in S3 using a structured folder approach
const getS3KeyForFile = async (file: File, userId?: string, metadata?: Partial<ModelMetadata>, userEmail?: string): Promise<string> => {
  const fileExtension = getFileExtension(file.name);
  const sanitizedFileName = file.name.replace(/[^a-z0-9.-]/gi, '_').toLowerCase();
  
  // Ensure we have a UUID for the file
  const componentId = metadata?.id || uuidv4();
  
  // Get category and subcategory information
  const categoryId = metadata?.category || 0;
  const subcategoryId = metadata?.subcategory || 0;
  
  // Fetch readable names from our database 
  let categoryName, subcategoryName;
  
  try {
    // For better performance, fetch category and subcategory names in parallel
    [categoryName, subcategoryName] = await Promise.all([
      getCategoryNameById(categoryId),
      getSubcategoryNameById(subcategoryId)
    ]);
  } catch (error) {
    console.error('Error fetching category/subcategory names:', error);
    // Fallback to using IDs directly if names can't be fetched
    categoryName = `Category_${categoryId}`;
    subcategoryName = `Subcategory_${subcategoryId}`;
  }
  
  // Create folder-friendly versions of the names
  const safeCategory = `${categoryName.replace(/[^a-z0-9]/gi, '_')}_${categoryId}`;
  const safeSubcategory = `${subcategoryName.replace(/[^a-z0-9]/gi, '_')}_${subcategoryId}`;
  
  // Get user email or name for a more readable path
  let userIdentifier = 'anonymous';
  if (userEmail) {
    // Use email (removing special chars) as folder name
    userIdentifier = userEmail.replace(/[@.]/g, '_').toLowerCase();
  } else if (userId) {
    // Try to get user email from Supabase
    try {
      const { data } = await supabase
        .from('profiles')
        .select('email, name')
        .eq('id', userId)
        .single();
        
      if (data?.email) {
        userIdentifier = data.email.replace(/[@.]/g, '_').toLowerCase();
      } else if (data?.name) {
        userIdentifier = data.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
      } else {
        // Fallback to userId but make it path-friendly
        userIdentifier = `user_${userId.replace(/[|]/g, '_')}`;
      }
    } catch (error) {
      console.error('Error getting user email:', error);
      // Fallback to userId but make it path-friendly
      userIdentifier = `user_${userId.replace(/[|]/g, '_')}`;
    }
  }
  
  // Primary user path (always store under user ID for ownership)
  const userPath = `users/${userIdentifier}/${componentId}`;
  
  // Secondary categorical path (for organizational purposes)
  const categoryPath = `categories/${safeCategory}/${safeSubcategory}/${fileExtension}`;
  
  // Store files both by user ownership and by category
  if (isSupportedModelFormat(file.name)) {
    // Store primary copy under user's folder
    return `${userPath}/${fileExtension}/${componentId}-${sanitizedFileName}`;
  } else if (getFileCategory(file.name) === 'image') {
    // For thumbnails, keep them with the model they belong to
    return `${userPath}/thumbnails/${componentId}-${sanitizedFileName}`;
  } else {
    // Other files get their own organization
    return `${userPath}/other/${getFileCategory(file.name)}/${componentId}-${sanitizedFileName}`;
  }
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
  
  // If original path follows our structure, extract category and format info
  if (originalS3Key.includes('/models/')) {
    const pathParts = originalS3Key.split('/');
    
    // Extract category and subcategory if available
    const categoryIndex = pathParts.indexOf('models') + 1;
    if (categoryIndex < pathParts.length) {
      // Get category and subcategory folders (which include IDs now)
      const categoryFolder = pathParts[categoryIndex];
      categoryPath = `converted/${categoryFolder}`;
      
      if (categoryIndex + 1 < pathParts.length) {
        const subcategoryFolder = pathParts[categoryIndex + 1];
        categoryPath += `/${subcategoryFolder}`;
      }
    }
  }
  
  // Return path for converted model format, maintaining consistent structure with original
  return `${categoryPath}/${convertedFormat}/${baseName}-converted.${convertedFormat}`;
};

// Improved background upload function with retry logic
const performBackgroundS3Upload = async (
  modelId: string,
  s3Key: string,
  file: File,
  contentType: string,
  metadata: Record<string, string> = {},
  tagging: string = ''
): Promise<{ success: boolean; url?: string; error?: string }> => {
  let uploadAttempt = 0;
  const maxAttempts = 3;
  
  while (uploadAttempt < maxAttempts) {
    uploadAttempt++;
    console.log(`Starting S3 upload to bucket: ${BUCKET_NAME} Attempt: ${uploadAttempt}`);
    
    try {
      // For binary file uploads, explicitly set a flag to use XHR method
      const useDirectXhrUpload = file.size > 1024 * 1024; // Use XHR for files larger than 1MB
      
      // Perform the upload with all needed parameters
      const params = {
        Bucket: BUCKET_NAME,
        Key: s3Key,
        Body: file,
        ContentType: contentType,
        Metadata: metadata,
        Tagging: tagging,
        useDirectXhrUpload // Custom flag to indicate we want to use XHR method
      };
      
      // Attempt the upload
      const uploadResult = await uploadFileToS3(params);
      console.log('S3 upload successful:', uploadResult);
      
      // If upload succeeds, generate a signed URL
      try {
        const command = new GetObjectCommand({
          Bucket: BUCKET_NAME,
          Key: s3Key
        });
        
        const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
        
        // Update the database with the signed URL and mark as completed
        await supabase
          .from('models')
          .update({ 
            url: signedUrl,
            conversion_status: 'completed'
          })
          .eq('id', modelId);
          
        console.log(`Model ${modelId} updated with signed URL and marked as completed`);
        return { success: true, url: signedUrl }; // Return success with URL
      } catch (urlError) {
        console.error('Error generating signed URL:', urlError);
        
        // Still mark as completed even if we fail to get a signed URL, since the file is uploaded
        await supabase
          .from('models')
          .update({ 
            conversion_status: 'completed'
          })
          .eq('id', modelId);
          
        console.log(`Model ${modelId} marked as completed (no signed URL)`);
        return { success: true }; // Return success without URL
      }
    } catch (error) {
      // Log specific error details
      console.error(`S3 upload attempt ${uploadAttempt} failed:`, error);
      
      if (error instanceof Error) {
        // Check for specific browser streaming error
        if (error.message.includes('readableStream.getReader')) {
          console.error('Browser streaming API compatibility issue detected.');
          
          // On streaming error, try the direct XHR method
          try {
            console.log("Attempting direct XHR upload method...");
            
            // Get a signed URL for direct PUT
            const command = new PutObjectCommand({
              Bucket: BUCKET_NAME,
              Key: s3Key,
              ContentType: contentType
            });
            
            const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 900 });
            
            // Perform direct browser upload using fetch
            const response = await fetch(signedUrl, {
              method: 'PUT',
              body: file,
              headers: {
                'Content-Type': contentType
              }
            });
            
            if (!response.ok) {
              throw new Error(`Direct upload failed with status: ${response.status}`);
            }
            
            console.log('Direct XHR upload successful');
            
            // Generate a signed URL for access
            const getCommand = new GetObjectCommand({
              Bucket: BUCKET_NAME,
              Key: s3Key
            });
            
            const accessUrl = await getSignedUrl(s3Client, getCommand, { expiresIn: 3600 });
            
            // Update the database
            await supabase
              .from('models')
              .update({ 
                url: accessUrl,
                conversion_status: 'completed'
              })
              .eq('id', modelId);
              
            console.log(`Model ${modelId} updated with signed URL after direct upload`);
            return { success: true, url: accessUrl };
          } catch (directError) {
            console.error('Direct XHR upload also failed:', directError);
            
            // Mark model as failed in database with specific error
            await supabase
              .from('models')
              .update({ 
                conversion_status: 'failed',
                conversion_message: 'Browser upload method failed. Try a different browser or smaller file.'
              })
              .eq('id', modelId);
              
            console.error(`Model ${modelId} marked as failed after direct upload attempt`);
            return { 
              success: false, 
              error: 'Browser upload compatibility issue. Try a different browser or smaller file.'
            };
          }
        }
        
        // Check for access denied errors
        if (error.message.includes('AccessDenied')) {
          console.error('AWS S3 access denied. Check credentials and bucket permissions.');
          
          await supabase
            .from('models')
            .update({ 
              conversion_status: 'failed',
              conversion_message: 'S3 access denied. Please contact support.'
            })
            .eq('id', modelId);
            
          console.error(`Model ${modelId} marked as failed due to S3 access denied`);
          return { 
            success: false, 
            error: 'Access denied to S3 bucket. Please check your credentials and permissions.'
          };
        }
      }
      
      // For all other errors, either retry or give up
      if (uploadAttempt >= maxAttempts) {
        console.error(`Maximum retry attempts (${maxAttempts}) reached. Giving up on upload.`);
        
        // Update database to reflect failed upload
        await supabase
          .from('models')
          .update({ 
            conversion_status: 'failed',
            conversion_message: error instanceof Error 
              ? `Upload failed: ${error.message}` 
              : 'Upload failed with unknown error'
          })
          .eq('id', modelId);
          
        console.error(`Model ${modelId} marked as failed after ${maxAttempts} attempts`);
        return { 
          success: false, 
          error: error instanceof Error ? error.message : 'Upload failed after multiple attempts'
        };
      } else {
        // Wait before retrying with exponential backoff
        const delay = Math.pow(2, uploadAttempt) * 1000;
        console.log(`Retrying upload in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  return { success: false, error: 'Upload failed after all attempts' };
};

// Upload a model file to S3
export const uploadModelToS3 = async (
  file: File,
  metadata: Omit<ModelMetadata, 'file_size' | 'file_type' | 's3_key' | 'url'> & { 
    _waitForUploadCompletion?: boolean,
    _createRecordFirst?: boolean,
    _backgroundUpload?: boolean
  },
  userId?: string
): Promise<ModelMetadata> => {
  try {
    // Check for special flags
    const waitForUploadCompletion = metadata._waitForUploadCompletion || false;
    const createRecordFirst = metadata._createRecordFirst || false;
    const backgroundUpload = metadata._backgroundUpload || false;
    
    // Remove the special flags from metadata before saving to database
    // Make a clean copy that removes underscore fields
    const cleanMetadata: any = {};
    Object.keys(metadata).forEach(key => {
      if (!key.startsWith('_')) {
        cleanMetadata[key] = metadata[key as keyof typeof metadata];
      }
    });
    
    // Generate a proper UUID for the model if not provided
    if (!cleanMetadata.id) {
      cleanMetadata.id = uuidv4();
    }

    // Test S3 connectivity first (skip if backgroundUpload is true since we'll handle errors there)
    if (!backgroundUpload) {
      const isConnected = await testS3ClientConnection();
      if (!isConnected) {
        throw new Error('Cannot connect to S3. Please check your credentials and network connection.');
      }
    }
    
    // Try to get user email for better path naming
    let userEmail;
    if (userId) {
      try {
        const { data } = await supabase
          .from('profiles')
          .select('email')
          .eq('id', userId)
          .single();
          
        userEmail = data?.email;
      } catch (error) {
        console.error('Error getting user email:', error);
      }
    }
    
    // Generate S3 key using our new structured approach
    const s3Key = await getS3KeyForFile(file, userId, cleanMetadata, userEmail);
    console.log('Generated S3 key:', s3Key);
    
    console.log('Uploading file:', file.name, 'Size:', file.size, 'Type:', file.type || 'unknown');
    
    // Ensure file has a proper content type based on extension
    const contentType = file.type || getMimeTypeFromExtension(file.name);
    
    // Instead of using blob URL, use a placeholder URL or generate a data URL for small files
    let tempUrl = '';
    
    // For small images (under 1MB), create a data URL for immediate preview
    if (file.type?.startsWith('image/') && file.size < 1024 * 1024) {
      try {
        tempUrl = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      } catch (error) {
        console.error('Failed to create data URL for preview:', error);
        tempUrl = '/assets/placeholder-thumbnails/default.jpg'; // Fallback to static placeholder
      }
    } else {
      // Use a placeholder for other files
      const fileExt = getFileExtension(file.name);
      tempUrl = `/assets/placeholder-thumbnails/${fileExt}.jpg`;
      
      // If placeholder doesn't exist, use default
      tempUrl = tempUrl || '/assets/placeholder-thumbnails/default.jpg';
    }
    
    // Prepare the complete metadata object with placeholder URL before actual upload
    const completeMetadata: ModelMetadata = {
      ...cleanMetadata,
      id: cleanMetadata.id,
      file_size: file.size,
      file_type: contentType,
      s3_key: s3Key,
      url: tempUrl, // Use placeholder instead of blob URL
      conversion_status: 'pending',
      converted_formats: [],
      user_id: userId,
    };
    
    // Store metadata in your database immediately
    const { data, error } = await supabase
      .from('models')
      .insert(completeMetadata)
      .select()
      .single();
      
    if (error) throw error;
    console.log('Model metadata saved to database with ID:', data.id);

    // Start S3 upload in the background
    const uploadPromise = performBackgroundS3Upload(
      data.id, 
      s3Key, 
      file, 
      contentType, 
      {}, 
      `modelId=${data.id}&category=${cleanMetadata.category || 0}&userId=${userId || 'public'}`
    );
    
    // If we're doing a background upload or just using database record, return immediately
    if (backgroundUpload || createRecordFirst) {
      console.log('Starting background upload and returning database record...');
      
      // Fire and forget - handle upload result in background
      uploadPromise.then(result => {
        if (result.success) {
          console.log(`Background upload completed for model ${data.id}:`, result);
          
          // Update the DB record with the actual S3 URL if upload succeeded
          if (result.url) {
            supabase
              .from('models')
              .update({ 
                url: result.url,
                conversion_status: 'completed' 
              })
              .eq('id', data.id)
              .then(() => console.log(`Updated model ${data.id} with final S3 URL`))
              .catch((err: Error) => console.error(`Failed to update model ${data.id} with S3 URL:`, err));
          }
        } else {
          console.error(`Background upload failed for model ${data.id}:`, result.error);
          
          // Update the DB record with failed status
          supabase
            .from('models')
            .update({ conversion_status: 'failed' })
            .eq('id', data.id)
            .then(() => console.log(`Updated model ${data.id} status to failed`))
            .catch((err: Error) => console.error(`Failed to update model ${data.id} status:`, err));
        }
      }).catch(err => {
        console.error(`Background upload process error for model ${data.id}:`, err);
      });
      
      // Return the database record immediately without waiting for upload
      return data;
    }
    
    // If we're waiting for upload to complete (legacy behavior), handle the result
    if (waitForUploadCompletion) {
      console.log('Waiting for upload to complete...');
      
      // Wait for upload to finish
      const uploadResult = await uploadPromise;
      
      // If upload failed, throw an error
      if (!uploadResult.success) {
        throw new Error(uploadResult.error || 'Upload failed');
      }
      
      // If upload succeeded and we have a URL, update the model data
      if (uploadResult.url) {
        data.url = uploadResult.url;
        data.conversion_status = 'completed';
      }
      
      console.log('Upload completed successfully:', uploadResult);
    }
    
    // Return the model data with or without waiting for upload
    return data;
  } catch (error) {
    console.error('Error uploading model to S3:', error);
    throw error;
  }
};

// Create a category reference for a model without duplicating the file
const createCategoryReference = async (
  modelId: string, 
  categoryId?: number, 
  subcategoryId?: number
): Promise<void> => {
  if (!categoryId) return;
  
  try {
    // Store a reference in the category_model_references table
    const { error } = await supabase
      .from('category_model_references')
      .insert({
        model_id: modelId,
        category_id: categoryId,
        subcategory_id: subcategoryId || null
      });
      
    if (error) {
      console.error('Error creating category reference:', error);
    } else {
      console.log(`Created category reference for model ${modelId} in category ${categoryId}`);
    }
  } catch (error) {
    console.error('Error in createCategoryReference:', error);
  }
};

// Get models by category using the references table
export const getModelsByCategory = async (categoryId: number): Promise<ModelMetadata[]> => {
  try {
    // Query the references table to get model IDs in this category
    const { data: references, error: refError } = await supabase
      .from('category_model_references')
      .select('model_id')
      .eq('category_id', categoryId);
      
    if (refError) throw refError;
    
    // If no models in this category, return empty array
    if (!references || references.length === 0) {
      return [];
    }
    
    // Extract the model IDs
    const modelIds = references.map(ref => ref.model_id);
    
    // Query the models table to get full model data
    const { data: models, error: modelError } = await supabase
      .from('models')
      .select('*')
      .in('id', modelIds)
      .order('created_at', { ascending: false });
      
    if (modelError) throw modelError;
    
    return models || [];
  } catch (error) {
    console.error('Error fetching models by category:', error);
    return [];
  }
};

export const uploadThumbnail = async (file: File, userId?: string): Promise<string> => {
  try {
    const uniqueId = uuidv4();
    const fileName = `${uniqueId}-${file.name}`;
    const { data, error } = await supabase.storage
      .from('model-thumbnails')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      throw error;
    }

    const { data: { publicUrl }} = supabase.storage
      .from('model-thumbnails')
      .getPublicUrl(fileName);

    return publicUrl;
    
  } catch (error) {
    console.error('Error uploading thumbnail to Supabase:', error);
    throw error;
  }
};

export const getModelsPerUser = async (userId: string): Promise<ModelMetadata[]> => {
  try {
    const { data, error } = await supabase
      .from('models')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return data;

  } catch (error) {
    console.error('Error fetching models for user:', error);
    throw error;
  }
};

// Get all models from the database
export const getModels = async (): Promise<ModelMetadata[]> => {
  try {
    const { data, error } = await supabase
      .from('models')
      .select('*')
      .eq('is_public', true)
      .order('created_at', { ascending: false });
      
    if (error) throw error;
    
    // Refresh signed URLs if they exist but might be expired
    const modelsWithRefreshedUrls = await Promise.all(
      (data || []).map(async (model: ModelMetadata) => {
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
  logger.info(`Queueing Rhino conversion for model ${modelId}, file: ${filename}, S3 key: ${truncateKey(s3Key)}`);
  
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

// Get all parameter values for a model
export const getModelParameterValues = async (modelId: string): Promise<ParameterDefinition[]> => {
  try {
    // Get model's category and subcategory
    const { data: model, error: modelError } = await supabase
      .from('models')
      .select('category, subcategory')
      .eq('id', modelId)
      .single();
    if (modelError) throw modelError;


    const categoryParametersPromise = model.category ? supabase.from('category_parameters').select('*').eq('category_id', model.category) : Promise.resolve({ data: [] });
    const subcategoryParametersPromise = model.subcategory ? supabase.from('subcategory_parameters').select('*').eq('subcategory_id', model.subcategory) : Promise.resolve({ data: [] });

    // Get all parameters for category and subcategory in parallel and existing model parameter values
    const [categoryParameters, subcategoryParameters, modelParameterValues] = await Promise.all([
      categoryParametersPromise,
      subcategoryParametersPromise,
      supabase.from('model_parameter_values').select('*').eq('model_id', modelId)
    ]);

    if ('error' in categoryParameters && categoryParameters.error) {
      console.error('Error fetching category parameters:', categoryParameters.error);
      throw categoryParameters.error;
    }
    if ('error' in subcategoryParameters && subcategoryParameters.error) {
      console.error('Error fetching subcategory parameters:', subcategoryParameters.error);
      throw subcategoryParameters.error;
    }
    if (modelParameterValues.error) {
      console.error('Error fetching model parameter values:', modelParameterValues.error);
      throw modelParameterValues.error;
    }

    // Combine all parameters
    const allParameterIds = [
      ...(categoryParameters.data || []).map(p => p.parameter_id),
      ...(subcategoryParameters.data || []).map(p => p.parameter_id)
    ];

    // Get parameter definitions
    const { data: parameterDefinitions, error: parameterDefinitionsError } = await supabase
      .from('parameter_definitions')
      .select('*')
      .in('id', allParameterIds);

    if (parameterDefinitionsError) {
      console.error('Error fetching parameter definitions:', parameterDefinitionsError);
      throw parameterDefinitionsError;
    }

    // Map parameter definitions to their values
    return parameterDefinitions.map(def => {
      let value;
      if (def.type === 'number') {
        value = modelParameterValues.data.find(mp => mp.parameter_id === def.id)?.numeric_value || null;
      } else {
        value = modelParameterValues.data.find(mp => mp.parameter_id === def.id)?.[`${def.type}_value`] || null;
      }
      return {
        ...def,
        value
      };
    });
    
  } catch (error) {
    console.error('Error fetching model parameter values:', error);
    throw error;
  }
};

// Update a model
export const updateModel = async (modelId: string, model: Partial<ModelMetadata>, parameterValues?: ModelParameterValue[]): Promise<ModelMetadata | null> => {
  try {
    const { data, error } = await supabase
      .from('models')
      .update(model)
      .eq('id', modelId)
      .select()
      .single();

    if (error) {
      console.error('Error updating model:', error);
      throw error;
    }

    if (parameterValues) {
      const { error: parameterError } = await supabase
        .from('model_parameter_values')
        .upsert(parameterValues, { onConflict: 'model_id,parameter_id' }); // Inserts if not exists, updates if exists
    
      if (parameterError) {
        console.error('Error updating/inserting model parameters:', parameterError);
        throw parameterError;
      }
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
 * Test S3 connectivity by uploading a small test file
 * Uses a more direct approach to avoid streaming issues
 */
export const testS3Upload = async (): Promise<{success: boolean, message: string}> => {
  try {
    console.log('Testing S3 upload with a small text file...');
    
    // First run a direct test on the S3 connection using strings only
    // This avoids using File/Blob objects which can trigger streaming issues
    const connectionResult = await testS3ClientConnection();
    if (!connectionResult) {
      return { 
        success: false, 
        message: 'Failed to connect to S3. Please check your network connection and credentials.' 
      };
    }
    
    // Create a unique test file key
    const testId = uuidv4();
    const s3Key = `users/anonymous/${testId}/other/document/${testId}-test-upload.txt`;
    console.log('Generated S3 key:', s3Key);
    
    // Create a small text file in the database
    const testFileMetadata: any = {
      id: testId,
      name: 'test-upload.txt',
      filename: 'test-upload.txt',
      file_size: 54,
      file_type: 'text/plain',
      s3_key: s3Key,
      url: '',
      conversion_status: 'pending',
      converted_formats: [],
    };
    
    // Store test metadata in database
    const { data, error } = await supabase
      .from('models')
      .insert(testFileMetadata)
      .select()
      .single();
      
    if (error) {
      console.error('Failed to create test record in database:', error);
      return { 
        success: false, 
        message: 'Database connection issue: ' + error.message 
      };
    }
    
    console.log('Model metadata saved to database with ID:', data.id);
    
    // Create a simple string content (avoids Blob/File streaming issues)
    const textContent = 'This is a test upload to verify S3 connectivity. Time: ' + new Date().toISOString();
    
    // Upload directly with a simple string
    try {
      const uploadResult = await uploadStringContent(BUCKET_NAME, s3Key, textContent);
      console.log('Test upload successful:', uploadResult);
      
      // Clean up the test file from the database
      await supabase
        .from('models')
        .delete()
        .eq('id', testId);
        
      return {
        success: true,
        message: 'S3 upload test successful! Your S3 configuration is working correctly.'
      };
    } catch (uploadError) {
      console.error('Test upload failed:', uploadError);
      
      let errorMessage = 'Unknown upload error';
      if (uploadError instanceof Error) {
        errorMessage = uploadError.message;
        
        // Check for specific errors
        if (errorMessage.includes('readableStream.getReader')) {
          errorMessage = 'Browser streaming compatibility issue detected. We are working on a fix.';
        } else if (errorMessage.includes('AccessDenied')) {
          errorMessage = 'Access denied to S3 bucket. Please check your credentials and permissions.';
        }
      }
      
      // Clean up the test record
      await supabase
        .from('models')
        .delete()
        .eq('id', testId);
        
      return {
        success: false,
        message: `Upload failed: ${errorMessage}`
      };
    }
  } catch (error) {
    console.error('Error in test upload:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error during test'
    };
  }
};

// Get all component groups
export const getComponentGroups = async (): Promise<ComponentGroup[]> => {
  try {
    console.log('fetching component groups backend');
    const { data, error } = await supabase
      .from('component_groups')
      .select('*');
    console.log('component groups fetched backend', data);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching component groups:', error);
    throw error;
  }
};

// Get all component categories within a group
export const getComponentCategories = async (groupId: number): Promise<ComponentCategory[]> => {
  try {
    const { data, error } = await supabase
      .from('component_categories')
      .select('*')
      .eq('component_group', groupId);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching component categories:', error); 
    throw error;
  }
};

// Get all component subcategories within a category
export const getComponentSubcategories = async (categoryId: number): Promise<ComponentSubcategory[]> => {
  try {
    const { data, error } = await supabase
      .from('component_subcategories')
      .select('*')
      .eq('component_category', categoryId);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching component subcategories:', error);
    throw error;
  }
};



