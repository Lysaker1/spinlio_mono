import { 
  S3Client, 
  PutObjectCommand, 
  S3ClientConfig
} from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';

// For React apps, we need to use REACT_APP_ prefix for environment variables
const ACCESS_KEY_ID = process.env.REACT_APP_AWS_ACCESS_KEY_ID || process.env.AWS_ACCESS_KEY_ID || '';
const SECRET_ACCESS_KEY = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY || process.env.AWS_SECRET_ACCESS_KEY || '';
const REGION = process.env.REACT_APP_AWS_REGION || 'eu-north-1';

console.log('S3 Configuration:', {
  region: REGION,
  bucket: process.env.REACT_APP_S3_BUCKET_NAME || '3d-models-spinlio',
  // Don't log credentials directly
  hasCredentials: Boolean(ACCESS_KEY_ID && SECRET_ACCESS_KEY)
});

// Browser-focused configuration for S3Client that avoids streaming issues
const s3Config: S3ClientConfig = {
  region: REGION,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
  // Browser compatibility settings
  forcePathStyle: false,
  customUserAgent: 'Spinlio-3D-Platform/1.0',
  maxAttempts: 3,
  // CRITICAL: Disable HTTP/2 which causes stream issues in browsers
  requestHandler: {
    http2: false
  }
};

// Initialize the client with our browser-compatible settings
const s3Client = new S3Client(s3Config);

// S3 bucket name
export const BUCKET_NAME = process.env.REACT_APP_S3_BUCKET_NAME || '3d-models-spinlio';

/**
 * Upload a file to S3, with browser compatibility in mind
 * This implementation avoids using the checksum middleware that causes
 * the readableStream.getReader error in browsers
 */
export const uploadFileToS3 = async (params: any): Promise<any> => {
  try {
    const file = params.Body;
    console.log(`Starting upload of ${params.Key} (${file?.size || 'unknown'} bytes)`);
    
    // Handle strings directly - these don't need conversion
    if (typeof file === 'string') {
      const command = new PutObjectCommand({
        ...params,
        ChecksumAlgorithm: undefined
      });
      
      const result = await s3Client.send(command);
      console.log('String upload successful with result:', result);
      return result;
    }
    
    // For all File/Blob objects, use the ArrayBuffer approach that we know works
    if (file instanceof Blob || file instanceof File) {
      try {
        // Convert file to ArrayBuffer to avoid streaming issues completely
        const fileBuffer = await new Promise<ArrayBuffer>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as ArrayBuffer);
          reader.onerror = reject;
          reader.readAsArrayBuffer(file);
        });
        
        // Create and send the command with the buffer (this avoids stream handling)
        const command = new PutObjectCommand({
          ...params,
          Body: fileBuffer,  // Use ArrayBuffer instead of File/Blob
          ChecksumAlgorithm: undefined
        });
        
        const result = await s3Client.send(command);
        console.log('File upload successful with result:', result);
        return result;
      } catch (error) {
        console.error('File upload failed, error details:', error);
        if (error instanceof Error) {
          console.error('Error name:', error.name);
          console.error('Error message:', error.message);
          console.error('Error stack:', error.stack);
        }
        throw new Error('Cannot upload file to S3. There was an error processing your file.');
      }
    }
    
    // Fallback for any other data types
    try {
      const command = new PutObjectCommand({
        ...params,
        ChecksumAlgorithm: undefined
      });
      
      const result = await s3Client.send(command);
      console.log('Upload successful with result:', result);
      return result;
    } catch (error) {
      console.error('Upload failed, error details:', error);
      if (error instanceof Error) {
        console.error('Error name:', error.name);
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
      }
      throw new Error('Cannot connect to S3. Please check your credentials and network connection.');
    }
  } catch (error) {
    console.error('Error in uploadFileToS3:', error);
    throw error;
  }
};

/**
 * Test S3 connectivity by uploading a small string
 * This avoids using File/Blob objects which can trigger streaming issues
 */
export const testS3Connection = async (): Promise<boolean> => {
  try {
    // Instead of using File/Blob objects which might trigger stream handling,
    // use a simple string which should bypass those code paths
    const testContent = 'This is a connectivity test';
    
    const testKey = `test/connectivity-test-${Date.now()}.txt`;
    console.log(`Testing S3 connectivity with key: ${testKey}`);
    
    // Create a simpler command that doesn't use File/Blob objects
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: testKey,
      Body: testContent,  // Use string instead of File/Blob
      ContentType: 'text/plain',
      // Explicitly disable checksum calculation
      ChecksumAlgorithm: undefined
    });
    
    const result = await s3Client.send(command);
    console.log('S3 connection test successful with result:', result);
    return true;
  } catch (error) {
    console.error('S3 connection test failed, details:', error);
    
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    return false;
  }
};

export { s3Client }; 