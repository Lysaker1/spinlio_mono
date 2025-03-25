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
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
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
declare global {
  interface Window {
    auth0Client?: {
      getTokenSilently(): Promise<string>;
    };
  }
}

/**
 * Browser-friendly file upload implementation
 * Completely avoids AWS SDK streaming issues by using direct uploads for binary files
 */
export const uploadFileToS3 = async (params: any): Promise<any> => {
  try {
    const file = params.Body;
    const bucket = params.Bucket || BUCKET_NAME;
    const key = params.Key;
    const contentType = params.ContentType || 'application/octet-stream';
    const useDirectXhr = params.useDirectXhrUpload === true;
    
    console.log(`Starting S3 upload: ${key} to bucket: ${bucket}`);
    
    // For string content (simplest case)
    if (typeof file === 'string') {
      return await uploadStringContent(bucket, key, file);
    }
    
    // For File/Blob objects, check if we should use direct XHR method
    if (file instanceof Blob || file instanceof File) {
      // Use XHR for large files or when explicitly requested 
      if (useDirectXhr || file.size > 5 * 1024 * 1024) {
        console.log(`Using direct XHR upload for ${key} (${(file.size / (1024 * 1024)).toFixed(2)}MB)`);
        return await uploadBlobWithXHR(bucket, key, file, contentType);
      } else {
        // For smaller files, try AWS SDK with ArrayBuffer approach first
        try {
          const buffer = await blobToArrayBuffer(file);
          
          const command = new PutObjectCommand({
            Bucket: bucket,
            Key: key,
            Body: new Uint8Array(buffer),
            ContentType: contentType
          });
          
          return await s3Client.send(command);  
        } catch (error) {
          // If SDK method fails, fall back to XHR method
          console.warn(`AWS SDK upload failed, falling back to XHR method: ${error instanceof Error ? error.message : 'Unknown error'}`);
          return await uploadBlobWithXHR(bucket, key, file, contentType);
        }
      }
    }
    
    // For any other data type, try direct upload
    return await uploadDirectContent(bucket, key, file, contentType);
    
  } catch (error) {
    console.error('Error in uploadFileToS3:', error);
    throw error;
  }
};

/**
 * Helper for uploading string content
 */
const uploadStringContent = async (bucket: string, key: string, content: string): Promise<any> => {
  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    Body: content,
    ContentType: 'text/plain'
  });
  
  return await s3Client.send(command);
};

/**
 * Upload a file using XMLHttpRequest directly to S3
 * This bypasses the AWS SDK completely to avoid streaming issues
 */
const uploadBlobWithXHR = (bucket: string, key: string, blob: Blob, contentType: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    // Create XHR request
    const xhr = new XMLHttpRequest();
    
    // Generate signed URL for PUT operation
    const getSignedUrlForPut = async () => {
      try {
        // Create a presigned URL for PUT
        // We use AWS SDK just for the signing, not for the actual upload
        const command = new PutObjectCommand({
          Bucket: bucket,
          Key: key,
          ContentType: contentType,
        });
        
        // Generate URL with short expiration
        const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 900 }); // 15 minutes
        return signedUrl;
      } catch (err) {
        console.error('Error generating signed URL:', err);
        throw err;
      }
    };
    
    // Handle XHR progress and completion
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        console.log(`Upload progress: ${percentComplete.toFixed(2)}%`);
      }
    };
    
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        // S3 responds with empty 200 response on success
        resolve({
          ETag: xhr.getResponseHeader('ETag'),
          $metadata: {
            httpStatusCode: xhr.status,
          }
        });
      } else {
        reject(new Error(`XHR upload failed with status: ${xhr.status}, response: ${xhr.responseText}`));
      }
    };
    
    xhr.onerror = () => {
      reject(new Error('XHR upload failed with network error'));
    };
    
    xhr.onabort = () => {
      reject(new Error('XHR upload was aborted'));
    };
    
    // Start the upload process
    getSignedUrlForPut()
      .then(signedUrl => {
        console.log(`Using direct XHR upload with presigned URL for ${key}`);
        xhr.open('PUT', signedUrl, true);
        xhr.setRequestHeader('Content-Type', contentType);
        xhr.send(blob);
      })
      .catch(err => {
        reject(err);
      });
  });
};

/**
 * Helper for direct uploads of other data types
 */
const uploadDirectContent = async (bucket: string, key: string, data: any, contentType: string): Promise<any> => {
  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    Body: data,
    ContentType: contentType
  });
  
  return await s3Client.send(command);
};

/**
 * Convert a Blob to ArrayBuffer safely with timeout and progress tracking
 */
const blobToArrayBuffer = (blob: Blob): Promise<ArrayBuffer> => {
  return new Promise((resolve, reject) => {
    // Add a timeout for very large files
    const timeoutDuration = Math.max(30000, blob.size / 10000); // Min 30s, larger for bigger files
    const timeoutId = setTimeout(() => {
      reject(new Error(`File reading timed out after ${timeoutDuration/1000}s. File may be too large (${(blob.size/1024/1024).toFixed(2)}MB)`));
    }, timeoutDuration);
    
    console.log(`Converting file (${(blob.size/1024/1024).toFixed(2)}MB) to ArrayBuffer...`);
    
    const reader = new FileReader();
    
    reader.onload = () => {
      clearTimeout(timeoutId);
      if (!reader.result) {
        return reject(new Error('Empty result from FileReader'));
      }
      
      console.log(`Successfully converted ${(blob.size/1024/1024).toFixed(2)}MB file to ArrayBuffer`);
      resolve(reader.result as ArrayBuffer);
    };
    
    reader.onerror = () => {
      clearTimeout(timeoutId);
      reject(new Error(`FileReader error: ${reader.error?.message || 'Unknown error'}`));
    };
    
    reader.onabort = () => {
      clearTimeout(timeoutId);
      reject(new Error('File reading was aborted'));
    };
    
    // For very large files (>100MB), show a warning
    if (blob.size > 100 * 1024 * 1024) {
      console.warn(`Very large file (${(blob.size/1024/1024).toFixed(2)}MB) being processed. This may take some time and could fail with low memory.`);
    }
    
    try {
      // Start reading the file
      reader.readAsArrayBuffer(blob);
    } catch (err) {
      clearTimeout(timeoutId);
      reject(new Error(`Failed to start reading file: ${err instanceof Error ? err.message : String(err)}`));
    }
  });
};

/**
 * Send a command with retry logic
 */
const sendWithRetry = async (command: PutObjectCommand, maxRetries = 3): Promise<any> => {
  let attempt = 0;

  while (attempt < maxRetries) {
    try {
      console.log(`S3 upload attempt ${attempt + 1}/${maxRetries}`);
      const result = await s3Client.send(command);
      console.log('S3 upload successful');
      return result;
    } catch (error) {
      attempt++;
      console.error(`Upload attempt ${attempt} failed:`, error);

      if (attempt < maxRetries) {
        const delay = Math.pow(2, attempt) * 1000;
        console.log(`Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        throw error;
      }
    }
  }
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
    
    // Set up event handlers for the XHR request
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
    
    // Helper function to set auth header and send the request
    const setAuthHeaderAndSend = (token: string) => {
      console.log(`Setting Authorization header with token: ${token.substring(0, 15)}...`);
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      xhr.send(formData);
    };
    
    // Helper function to handle fallback auth and sending
    const fallbackAndSend = async () => {
      try {
        if (window.auth0Client) {
          console.log('Getting token from auth0Client...');
          const token = await window.auth0Client.getTokenSilently();
          if (token) {
            setAuthHeaderAndSend(token);
            // Also save for future use
            localStorage.setItem('auth0_access_token', token);
            return;
          }
        }
        console.warn('No token available, sending unauthenticated request');
        xhr.send(formData); // fallback unauthenticated (will likely fail with 401)
      } catch (err) {
        console.error('Auth token retrieval failed:', err);
        xhr.send(formData); // send anyway, will 401
      }
    };
    
    // Try to get token from localStorage first
    const authToken = localStorage.getItem('auth0_access_token');
    if (authToken) {
      setAuthHeaderAndSend(authToken);
    } else {
      // If no token in localStorage, try fallback methods
      fallbackAndSend();
    }
  });
};

export { s3Client }; 