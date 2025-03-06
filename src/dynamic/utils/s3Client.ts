import { S3Client, PutObjectCommand, CompleteMultipartUploadCommand, CreateMultipartUploadCommand, UploadPartCommand } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';

// Configure the AWS S3 client with recommended settings
const s3Client = new S3Client({
  region: process.env.REACT_APP_AWS_REGION || 'eu-north-1', // Match your bucket region
  credentials: {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY || '',
  },
  forcePathStyle: true,
});

// S3 bucket name
export const BUCKET_NAME = process.env.REACT_APP_S3_BUCKET_NAME || '3d-models-spinlio';

// Size threshold - use direct upload for files smaller than this
const MULTIPART_THRESHOLD = 5 * 1024 * 1024; // 5MB

// Upload a file to S3, auto-selecting between direct upload and multipart based on size
export const uploadFileToS3 = async (params: any): Promise<void> => {
  const file = params.Body;
  
  // Use direct upload for small files
  if (!file || file.size < MULTIPART_THRESHOLD) {
    const command = new PutObjectCommand(params);
    await s3Client.send(command);
    return;
  }
  
  // For larger files, use the Upload utility but with careful configuration
  const upload = new Upload({
    client: s3Client,
    params,
    queueSize: 1, // Reduce concurrency to minimize issues
    partSize: 10 * 1024 * 1024, // Larger part size can help
    leavePartsOnError: false
  });

  await upload.done();
};

// Keep the original createUpload for backward compatibility
export const createUpload = (params: any) => {
  // Add Content-Type if not present
  if (params.Body instanceof File && !params.ContentType) {
    params.ContentType = params.Body.type || 'application/octet-stream';
  }
  
  return new Upload({
    client: s3Client,
    params,
    queueSize: 1, // Reduce concurrency
    partSize: 10 * 1024 * 1024, // Larger part size
    leavePartsOnError: false
  });
};

export { s3Client }; 