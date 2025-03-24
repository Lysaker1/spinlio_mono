import { 
  S3Client, 
  PutObjectCommand, 
  S3ClientConfig,
  CreateMultipartUploadCommand,
  UploadPartCommand,
  CompleteMultipartUploadCommand
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
    const metadata = params.Metadata || {};
    const tagging = params.Tagging || '';
    
    console.log(`Preparing to upload file to S3 bucket '${bucket}', key: '${key}'`);
    
    // Create a minimal command with only the essential properties
    // Using direct upload without any file conversions to avoid FileReader errors
    const command = new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: file, // Use file directly without FileReader
      ContentType: contentType,
      Metadata: metadata,
      Tagging: tagging,
      // Explicitly disable checksum to avoid issues
      ChecksumAlgorithm: undefined
    });
    
    // Send the command with retry logic
    let attempt = 0;
    const maxAttempts = 3;
    let lastError = null;
    
    while (attempt < maxAttempts) {
      try {
        attempt++;
        console.log(`S3 upload attempt ${attempt}/${maxAttempts}`);
        
        const result = await s3Client.send(command);
        console.log('S3 upload successful');
        return result;
      } catch (error) {
        lastError = error;
        console.error(`S3 upload attempt ${attempt} failed:`, error);
        
        if (attempt < maxAttempts) {
          // Wait before retrying (exponential backoff)
          const delay = Math.pow(2, attempt) * 1000;
          console.log(`Retrying in ${delay}ms...`);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }
    
    // If we get here, all attempts failed
    throw lastError || new Error('Upload failed after all attempts');
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

export { s3Client }; 