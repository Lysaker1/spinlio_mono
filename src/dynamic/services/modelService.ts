import { PutObjectCommand, GetObjectCommand, ListObjectsV2Command, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { s3Client, BUCKET_NAME, uploadFileToS3, testS3Connection } from '../utils/s3Client';
import { getFileExtension, getFileCategory, getMimeTypeFromExtension, isSupportedModelFormat } from '../utils/fileTypeUtils';
import { supabase } from '../utils/supabaseClient';
import { initiateModelConversion, checkConversionStatus } from './rhinoComputeService';
import { v4 as uuidv4 } from 'uuid';
import { logger, truncateKey } from '../../shared/utils/logger';

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
const getS3KeyForFile = async (file: File, userId?: string, metadata?: Partial<ModelMetadata>): Promise<string> => {
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
  
  // Organize by model format
  let basePath = '';
  
  if (isSupportedModelFormat(file.name)) {
    // Category/Subcategory/Format structure
    basePath = `models/${safeCategory}/${safeSubcategory}/${fileExtension}`;
  } else if (getFileCategory(file.name) === 'image') {
    // For thumbnails, keep them with the model they belong to
    basePath = `thumbnails/${safeCategory}/${safeSubcategory}`;
  } else {
    // Other files get their own organization
    basePath = `other/${getFileCategory(file.name)}/${safeCategory}`;
  }
  
  // Add user prefix if needed
  const userPrefix = userId ? `users/${userId}/` : '';
  
  // Final path that's both unique and logically organized
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
    const s3Key = await getS3KeyForFile(file, userId, metadata);
    
    console.log('Uploading file:', file.name, 'Size:', file.size, 'Type:', file.type || 'unknown');
    
    // Ensure file has a proper content type based on extension
    const contentType = file.type || getMimeTypeFromExtension(file.name);
    
    // Prepare the complete metadata object with temporary URL before actual upload
    // This allows for immediate redirection to edit page
    const completeMetadata: ModelMetadata = {
      ...metadata,
      id: metadata.id,
      file_size: file.size,
      file_type: contentType,
      s3_key: s3Key,
      url: URL.createObjectURL(file), // Create a temporary local URL
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

    // Start S3 upload in the background without blocking
    (async () => {
      try {
        // Remove any problematic headers or metadata properties that could be undefined
        const cleanedMetadata: Record<string, string> = {};
        
        // Only include metadata that is a string and not empty
        if (metadata.name) cleanedMetadata['x-amz-meta-name'] = metadata.name;
        if (metadata.category) cleanedMetadata['x-amz-meta-category'] = metadata.category.toString();
        if (metadata.subcategory) cleanedMetadata['x-amz-meta-subcategory'] = metadata.subcategory.toString();
        if (metadata.manufacturer) cleanedMetadata['x-amz-meta-manufacturer'] = metadata.manufacturer;
        if (metadata.part_type) cleanedMetadata['x-amz-meta-part-type'] = metadata.part_type;
        if (file.name) cleanedMetadata['x-amz-meta-original-filename'] = file.name;

        // S3 upload parameters with sanitized metadata
        const params = {
          Bucket: BUCKET_NAME,
          Key: s3Key,
          Body: file,
          ContentType: contentType,
          Metadata: cleanedMetadata
        };

        // Upload file to S3 using our improved uploadFileToS3 function
        const uploadResult = await uploadFileToS3(params);
        console.log('S3 upload successful');
        
        // Generate a signed URL for the uploaded object
        const command = new GetObjectCommand({
          Bucket: BUCKET_NAME,
          Key: s3Key
        });
        
        const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
        
        // Update the database with the new signed URL and mark upload as completed
        await supabase
          .from('models')
          .update({ 
            url: signedUrl,
            conversion_status: 'completed' // Mark as completed since we're not doing conversions yet
          })
          .eq('id', data.id);
      
        // COMMENTED OUT: Queue conversion job with Rhino Compute
        // The Rhino compute API is not working currently and costs money to run
        /*
        await queueRhinoModelConversion(data.id, s3Key, file.name);
        */
      } catch (uploadError) {
        console.error('Background S3 upload failed:', uploadError);
        // Update status in database to indicate failure
        await supabase
          .from('models')
          .update({ conversion_status: 'failed' })
          .eq('id', data.id);
      }
    })();
    
    // Return the model data immediately without waiting for S3 upload or conversion
    return data;
  } catch (error) {
    console.error('Error uploading model to S3:', error);
    throw error;
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
        category: 1,
        is_public: false,
        price: null,
        price_on_request: false,
        minimum_order_quantity: null,
        moq_on_request: false,
        lead_time: null,
        lead_time_on_request: false,
        payment_terms: null,
        payment_terms_on_request: false
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



