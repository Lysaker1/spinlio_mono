import { 
  S3Client, 
  PutObjectCommand, 
  S3ClientConfig,
  CreateMultipartUploadCommand,
  UploadPartCommand,
  CompleteMultipartUploadCommand,
  PutObjectCommandInput,
  PutObjectCommandOutput
} from '@aws-sdk/client-s3';
import { logger, truncateKey } from './logger';

// For React apps, we need to use REACT_APP_ prefix for environment variables
const ACCESS_KEY_ID = process.env.REACT_APP_AWS_ACCESS_KEY_ID || process.env.AWS_ACCESS_KEY_ID || '';
const SECRET_ACCESS_KEY = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY || process.env.AWS_SECRET_ACCESS_KEY || '';
const REGION = process.env.REACT_APP_AWS_REGION || process.env.AWS_REGION || 'eu-north-1';

// Validate credentials are available
if (!ACCESS_KEY_ID || !SECRET_ACCESS_KEY) {
  console.error('AWS credentials are missing! S3 operations will fail.');
  console.error('Make sure REACT_APP_AWS_ACCESS_KEY_ID and REACT_APP_AWS_SECRET_ACCESS_KEY are defined in environment');
}

// Avoid logging configuration details unless in development mode
if (process.env.NODE_ENV === 'development') {
  console.log('S3 Configuration:', {
    region: REGION,
    bucket: process.env.REACT_APP_S3_BUCKET_NAME || process.env.BUCKET_NAME || '3d-models-spinlio',
    hasCredentials: Boolean(ACCESS_KEY_ID && SECRET_ACCESS_KEY)
  });
} else {
  // In production, just log that we're configured but without the details
  console.log('S3 client configured for production environment');
}

// Browser-focused configuration for S3Client that avoids streaming issues
const s3Config: S3ClientConfig = {
  region: REGION,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
  // Browser compatibility settings
  forcePathStyle: false,
  // CRITICAL: Disable HTTP/2 which causes stream issues in browsers
  requestHandler: {
    http2: false
  },
  // Add proper retry handling for better reliability
  maxAttempts: 3,
};

// Initialize the client with our browser-compatible settings
const s3Client = new S3Client(s3Config);

// S3 bucket name
export const BUCKET_NAME = process.env.REACT_APP_S3_BUCKET_NAME || process.env.BUCKET_NAME || '3d-models-spinlio';

// At the top, add this interface declaration
// Add this near the top of the file, after the other imports
declare global {
  interface Window {
    auth0Client?: {
      getTokenSilently(): Promise<string>;
    };
  }
}

/**
 * Upload a file to S3 with retries and error handling
 * This function will retry failed uploads 3 times with exponential backoff
 * @param params The S3 upload parameters including bucket, key, body, and metadata
 * @returns A promise that resolves to the upload result or rejects with an error
 */
export const uploadFileToS3 = async (params: PutObjectCommandInput): Promise<PutObjectCommandOutput> => {
  const MAX_RETRIES = 3;
  const INITIAL_RETRY_DELAY = 2000; // 2 seconds
  
  // Check if params include a flag to use direct XHR upload
  const useDirectXhrUpload = !!(params as any)._useDirectXhrUpload;
  
  // Always use XHR upload in browser environments due to streaming issues
  if (typeof window !== 'undefined' || useDirectXhrUpload) {
    console.log('Using direct XHR upload method for browser compatibility');
    return performDirectXhrUpload(params);
  }
  
  // Fall back to regular S3 client for Node.js environments
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      console.log(`S3 upload attempt ${attempt}/${MAX_RETRIES}`);
      const command = new PutObjectCommand(params);
      const result = await s3Client.send(command);
      return result;
    } catch (error) {
      console.error(`S3 upload attempt ${attempt} failed:`, error);
      
      // If we've reached max retries, throw the error
      if (attempt === MAX_RETRIES) {
        console.error('Error in uploadFileToS3:', error);
        
        // Check for browser streaming API issue
        if (error instanceof Error && 
            error.message.includes('readableStream.getReader')) {
          console.error('Browser streaming API compatibility issue detected.');
          console.log('Attempting direct XHR upload method...');
          return performDirectXhrUpload(params);
        }
        
        throw error;
      }
      
      // Otherwise, wait before retry
      const retryDelay = INITIAL_RETRY_DELAY * Math.pow(2, attempt - 1);
      console.log(`Retrying in ${retryDelay}ms...`);
      await new Promise(resolve => setTimeout(resolve, retryDelay));
    }
  }
  
  // This should never happen due to the error thrown in the loop
  throw new Error('Upload failed after maximum retries');
};

/**
 * Test S3 connectivity by uploading a small string
 * This avoids using File/Blob objects which can trigger streaming issues
 */
export const testS3Connection = async (): Promise<boolean> => {
  try {
    console.log('Testing S3 connection with credentials:', {
      hasAccessKey: Boolean(ACCESS_KEY_ID),
      hasSecretKey: Boolean(SECRET_ACCESS_KEY),
      region: REGION,
      bucket: BUCKET_NAME
    });
    
    const testContent = 'This is a connectivity test';
    const testKey = `test/connectivity-test-${Date.now()}.txt`;
    
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: testKey,
      Body: testContent,
      ContentType: 'text/plain',
      // Explicitly disable checksum
      ChecksumAlgorithm: undefined
    });
    
    await s3Client.send(command);
    console.log('S3 connection test successful!');
    return true;
  } catch (error) {
    console.error('S3 connection test failed, details:', error);
    
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      
      // Provide specific troubleshooting for common errors
      if (error.name === 'AuthorizationHeaderMalformed') {
        console.error('AWS credentials error: The authorization header is malformed. Check that AWS credentials are properly configured.');
        console.error('1. Verify REACT_APP_AWS_ACCESS_KEY_ID and REACT_APP_AWS_SECRET_ACCESS_KEY are set in .env files');
        console.error('2. Ensure environment variables are properly loaded at runtime');
        console.error('3. Check webpack.config.js DefinePlugin configuration');
      }
      
      if (error.name === 'AccessDenied') {
        console.error('AWS Access Denied: The credentials are valid but do not have permission to access the bucket or resource.');
      }
    }
    
    return false;
  }
};

/**
 * Perform a direct upload to S3 using XMLHttpRequest
 * This avoids issues with the AWS SDK's streaming implementation
 * @param params The S3 upload parameters
 * @returns A promise that resolves to a mock S3 response
 */
const performDirectXhrUpload = async (params: PutObjectCommandInput): Promise<PutObjectCommandOutput> => {
  return new Promise((resolve, reject) => {
    // Get the file from the params
    const file = params.Body as File;
    if (!file || !(file instanceof File)) {
      return reject(new Error('Invalid file object'));
    }
    
    // Get the API endpoint for direct uploads
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3003';
    const apiEndpoint = `${apiUrl}/api/s3/direct-upload`;
    
    // Create form data with the file and metadata
    const formData = new FormData();
    formData.append('file', file);
    formData.append('bucket', params.Bucket || BUCKET_NAME);
    formData.append('key', params.Key as string);
    formData.append('contentType', params.ContentType as string || 'application/octet-stream');
    
    // Add metadata as JSON
    if (params.Metadata) {
      formData.append('metadata', JSON.stringify(params.Metadata));
    }
    
    // Add tagging if available
    if (params.Tagging) {
      formData.append('tagging', params.Tagging as string);
    }
    
    // Create XHR request
    const xhr = new XMLHttpRequest();
    xhr.open('POST', apiEndpoint, true);
    
    // Get auth token from localStorage (this is where Auth0 typically stores it)
    const authToken = localStorage.getItem('auth0_access_token');
    if (authToken) {
      xhr.setRequestHeader('Authorization', `Bearer ${authToken}`);
    } else {
      // Try to get token from Auth0 object if available
      try {
        // If using Auth0, try to get the token from Auth0 object
        if (window.auth0Client) {
          window.auth0Client.getTokenSilently().then((token: string) => {
            xhr.setRequestHeader('Authorization', `Bearer ${token}`);
          }).catch((err: Error) => {
            console.error('Error getting auth token:', err);
          });
        }
      } catch (err: unknown) {
        console.error('Could not retrieve authentication token:', err);
      }
    }
    
    // Set up event handlers
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const response = JSON.parse(xhr.responseText);
          console.log('Direct XHR upload successful');
          
          // Return a mock S3 response object
          resolve({
            $metadata: {
              httpStatusCode: xhr.status,
              requestId: response.requestId || 'direct-xhr-upload',
              attempts: 1,
            },
            ETag: response.etag || `"${Math.random().toString(36).substring(2)}"`,
            // Add other properties as needed
            ...response
          });
        } catch (error) {
          reject(new Error(`Error parsing response: ${error instanceof Error ? error.message : String(error)}`));
        }
      } else {
        reject(new Error(`Upload failed with status ${xhr.status}: ${xhr.statusText}`));
      }
    };
    
    xhr.onerror = function() {
      reject(new Error('Network error during upload'));
    };
    
    xhr.upload.onprogress = function(event) {
      if (event.lengthComputable) {
        const percentComplete = Math.round((event.loaded / event.total) * 100);
        console.log(`Upload progress: ${percentComplete}%`);
      }
    };
    
    // Send the form data
    xhr.send(formData);
  });
};

export { s3Client }; 