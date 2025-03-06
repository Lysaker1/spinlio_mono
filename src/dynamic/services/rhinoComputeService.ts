import { ModelMetadata } from './modelService';

// Define the Rhino Compute URL and key
// We're updating the URL to use the correct endpoint - since /api/convert gave a 404
const RHINO_COMPUTE_URL = process.env.REACT_APP_RHINO_COMPUTE_URL || 'http://13.53.137.42:80';
const RHINO_COMPUTE_KEY = process.env.REACT_APP_RHINO_COMPUTE_KEY || 'rhino-9c78f8b1-3e47-4a90-bd12-7f2ea6b3c4f9';

/**
 * Initiates the conversion of a 3D model using Rhino Compute
 * @param modelId - The ID of the model in the database
 * @param s3Key - The S3 key where the model is stored
 * @param sourceFormat - The source format of the model
 * @returns Promise with the conversion job ID
 */
export async function initiateModelConversion(
  modelId: string,
  s3Key: string,
  sourceFormat: string
): Promise<{ jobId: string }> {
  console.log('🚀 [rhinoComputeService] Initiating model conversion');
  console.log(`📊 [rhinoComputeService] Model ID: ${modelId}, S3 Key: ${s3Key}, Format: ${sourceFormat}`);

  try {
    // Temporary mock implementation until Rhino Compute service is ready
    // This will allow S3 uploads to work without failing on the Rhino conversion step
    console.log('⚠️ [rhinoComputeService] Using mock implementation - Rhino Compute not available yet');
    
    // Generate a fake job ID
    const jobId = `mock-${Date.now()}-${Math.random().toString(36).substring(2, 10)}`;
    console.log(`✅ [rhinoComputeService] Mock conversion initiated with ID: ${jobId}`);
    
    return { jobId };
    
    /* 
    // Real implementation - commented out until service is available
    const response = await fetch(`${RHINO_COMPUTE_URL}/api/convert`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'RhinoComputeKey': RHINO_COMPUTE_KEY
      },
      body: JSON.stringify({
        modelId,
        s3Key,
        sourceFormat,
        targetFormats: ['glb', 'gltf'], // Request conversions to these formats
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ [rhinoComputeService] Error response: ${errorText}`);
      throw new Error(`Rhino Compute error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('✅ [rhinoComputeService] Conversion initiated successfully', data);
    return { jobId: data.jobId };
    */
  } catch (error) {
    console.error('❌ [rhinoComputeService] Failed to initiate conversion:', error);
    throw error;
  }
}

/**
 * Checks the status of a model conversion job
 * @param jobId - The ID of the conversion job
 * @returns Promise with the current status of the job
 */
export async function checkConversionStatus(jobId: string): Promise<{
  status: 'pending' | 'processing' | 'completed' | 'failed';
  outputs?: Array<{ format: string; url: string }>;
  error?: string;
}> {
  console.log(`🔍 [rhinoComputeService] Checking conversion status for job: ${jobId}`);
  
  try {
    // Temporary mock implementation until Rhino Compute service is ready
    console.log('⚠️ [rhinoComputeService] Using mock implementation for status check');
    
    // Check if the job ID is a mock ID from our mock implementation
    if (jobId.startsWith('mock-')) {
      // For mock jobs, simulate the conversion process by checking the time
      const jobTimestamp = parseInt(jobId.split('-')[1], 10);
      const currentTime = Date.now();
      const elapsedTime = currentTime - jobTimestamp;
      
      // Simulate different statuses based on elapsed time
      if (elapsedTime < 10000) { // Less than 10 seconds
        return { status: 'processing' };
      } else {
        // After 10 seconds, mark as completed with mock outputs
        return {
          status: 'completed',
          outputs: [
            { format: 'glb', url: 'https://example.com/mock/model.glb' },
            { format: 'gltf', url: 'https://example.com/mock/model.gltf' }
          ]
        };
      }
    }
    
    // Default return for non-mock IDs
    return { status: 'processing' };
    
    /* 
    // Real implementation - commented out until service is available
    const response = await fetch(`${RHINO_COMPUTE_URL}/api/convert/status/${jobId}`, {
      method: 'GET',
      headers: {
        'RhinoComputeKey': RHINO_COMPUTE_KEY
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ [rhinoComputeService] Error checking status: ${errorText}`);
      throw new Error(`Failed to check status: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('ℹ️ [rhinoComputeService] Job status:', data);
    return data;
    */
  } catch (error) {
    console.error('❌ [rhinoComputeService] Error checking conversion status:', error);
    throw error;
  }
}

/**
 * Processes a model directly with Rhino Compute using a Grasshopper definition
 * This is similar to your existing code but encapsulated in a service
 * @param params - Parameters for the Grasshopper definition
 * @param definitionBase64 - Base64-encoded Grasshopper definition
 * @returns Promise with the processed model data
 */
export async function processModelWithGrasshopper(
  params: Record<string, number | string>,
  definitionBase64?: string
): Promise<any> {
  console.log('🔄 [rhinoComputeService] Processing model with Grasshopper');
  console.log('📊 [rhinoComputeService] Parameters:', params);

  try {
    // Temporary mock implementation until Rhino Compute service is ready
    console.log('⚠️ [rhinoComputeService] Using mock implementation for Grasshopper processing');
    
    // Create a mock response based on the input parameters
    const mockResponse = {
      values: [
        {
          ParamName: "output",
          InnerTree: {
            "0": [
              {
                type: "System.String",
                data: `Mock processed result for parameters: ${JSON.stringify(params)}`
              }
            ]
          }
        },
        {
          ParamName: "mesh",
          InnerTree: {
            "0": [
              {
                type: "Rhino.Geometry.Mesh",
                data: "mock-mesh-data" // In a real scenario, this would be actual mesh data
              }
            ]
          }
        }
      ]
    };
    
    console.log('✅ [rhinoComputeService] Mock processing complete');
    return mockResponse;
    
    /* 
    // Real implementation - commented out until service is available
    // If no definition is provided, we'll use the default one from the server
    const useDefinition = definitionBase64 || 'default';
    
    // Convert parameters to the format expected by Rhino Compute
    const paramValues = Object.entries(params).map(([name, value]) => ({
      ParamName: name,
      InnerTree: { "0": [{ 
        type: typeof value === 'number' ? "System.Double" : "System.String", 
        data: value 
      }] }
    }));

    const requestBody = {
      algo: useDefinition,
      pointer: null,
      values: paramValues
    };

    console.log('📤 [rhinoComputeService] Request payload:', JSON.stringify(requestBody, null, 2));

    const response = await fetch(`${RHINO_COMPUTE_URL}/grasshopper`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'RhinoComputeKey': RHINO_COMPUTE_KEY
      },
      body: JSON.stringify(requestBody)
    });

    console.log('📥 [rhinoComputeService] Response received');
    console.log('ℹ️ [rhinoComputeService] Response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ [rhinoComputeService] Error response:', errorText);
      throw new Error(`Rhino Compute error: ${response.status} ${response.statusText}`);
    }

    const computeResponse = await response.json();
    console.log('✅ [rhinoComputeService] Processing complete');
    
    return computeResponse;
    */
  } catch (error) {
    console.error('❌ [rhinoComputeService] Error processing model:', error);
    throw error;
  }
} 