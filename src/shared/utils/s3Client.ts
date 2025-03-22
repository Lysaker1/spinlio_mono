import { 
  S3Client, 
  PutObjectCommand, 
  S3ClientConfig,
  CreateMultipartUploadCommand,
  UploadPartCommand,
  CompleteMultipartUploadCommand
} from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import { logger, truncateKey } from './logger';

// For React apps, we need to use REACT_APP_ prefix for environment variables
const ACCESS_KEY_ID = process.env.REACT_APP_AWS_ACCESS_KEY_ID || process.env.AWS_ACCESS_KEY_ID || '';
const SECRET_ACCESS_KEY = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY || process.env.AWS_SECRET_ACCESS_KEY || '';
const REGION = process.env.REACT_APP_AWS_REGION || 'eu-north-1';

// Avoid logging configuration details unless in development mode
if (process.env.NODE_ENV === 'development') {
  console.log('S3 Configuration:', {
    region: REGION,
    bucket: process.env.REACT_APP_S3_BUCKET_NAME || '3d-models-spinlio',
    hasCredentials: Boolean(ACCESS_KEY_ID && SECRET_ACCESS_KEY)
  });
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
    const bucket = params.Bucket || BUCKET_NAME;
    const key = params.Key;
    const contentType = params.ContentType || 'application/octet-stream';
    
    // For larger files (over 5MB), use our optimized large file upload
    if (file instanceof Blob && file.size > 5 * 1024 * 1024) {
      // For extremely large files (over 100MB), alert the user
      if (file.size > 100 * 1024 * 1024) {
        console.warn(`Very large file detected (${(file.size / (1024 * 1024)).toFixed(2)}MB). Upload may take some time.`);
      }
      return uploadLargeFile(bucket, key, file, contentType);
    }
    
    // Handle strings directly - these don't need conversion
    if (typeof file === 'string') {
      const command = new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: file,
        ContentType: 'text/plain',
        // Explicitly disable checksum
        ChecksumAlgorithm: undefined
      });
      
      try {
        const result = await s3Client.send(command);
        return result;
      } catch (error) {
        console.error('String upload failed:', error);
        throw error;
      }
    }
    
    // For all File/Blob objects, use the ArrayBuffer approach that we know works
    if (file instanceof Blob || file instanceof File) {
      try {
        // Convert file to ArrayBuffer to avoid streaming issues
        const fileBuffer = await new Promise<ArrayBuffer>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as ArrayBuffer);
          reader.onerror = reject;
          reader.readAsArrayBuffer(file);
        });
        
        // Create a minimal command with only the essential properties
        const command = new PutObjectCommand({
          Bucket: bucket,
          Key: key,
          Body: new Uint8Array(fileBuffer),
          ContentType: contentType,
          // Explicitly disable checksum
          ChecksumAlgorithm: undefined
        });
        
        const result = await s3Client.send(command);
        return result;
      } catch (error) {
        console.error('File upload failed, error details:', error);
        throw new Error('Cannot upload file to S3. There was an error processing your file.');
      }
    }
    
    // Fallback for any other data types
    try {
      const command = new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: file,
        ContentType: contentType,
        // Explicitly disable checksum
        ChecksumAlgorithm: undefined
      });
      
      const result = await s3Client.send(command);
      return result;
    } catch (error) {
      console.error('Upload failed, error details:', error);
      throw new Error('Cannot connect to S3. Please check your credentials and network connection.');
    }
  } catch (error) {
    console.error('Error in uploadFileToS3:', error);
    throw error;
  }
};

/**
 * Handle large file uploads using S3 multipart upload
 * This is a cleaner implementation that avoids the middleware issues
 */
const uploadLargeFile = async (
  bucket: string, 
  key: string, 
  file: Blob, 
  contentType = 'application/octet-stream'
): Promise<any> => {
  try {
    logger.info(`Uploading large file: ${truncateKey(key)} Size: ${file.size} Type: ${contentType}`);

    // For large files, convert to buffer first to avoid streaming issues
    const fileBuffer = await new Promise<ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as ArrayBuffer);
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });

    // Create a single PutObjectCommand instead of using multipart upload
    // This avoids the checksum issues completely
    const command = new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: new Uint8Array(fileBuffer),
      ContentType: contentType,
      // Explicitly disable checksum
      ChecksumAlgorithm: undefined
    });
    
    // Upload the file in a single request - this is more reliable for web browsers
    const result = await s3Client.send(command);
    return result;
  } catch (error) {
    console.error('Large file upload failed:', error);
    
    // Provide more details about the error
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      
      // Provide more user-friendly error messages for common S3 errors
      if (error.name === 'AccessDenied') {
        throw new Error('Access denied. Please check your S3 credentials and bucket permissions.');
      }
      
      if (error.name === 'NoSuchBucket') {
        throw new Error(`The bucket "${bucket}" does not exist. Please check your S3 configuration.`);
      }
      
      if (error.name === 'EntityTooLarge') {
        throw new Error(`File is too large (${(file.size / (1024 * 1024)).toFixed(2)}MB). Maximum file size allowed is 5GB.`);
      }
      
      if (error.name === 'SlowDown' || error.name === 'RequestTimeTooSkewed') {
        throw new Error('Upload throttled by S3. Please try again in a few moments.');
      }
    }
    
    throw new Error(`Cannot upload large file to S3. ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

/**
 * Test S3 connectivity by uploading a small string
 * This avoids using File/Blob objects which can trigger streaming issues
 */
export const testS3Connection = async (): Promise<boolean> => {
  try {
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