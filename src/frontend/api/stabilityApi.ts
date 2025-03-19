// src/frontend/api/stabilityApi.ts
import axios, { AxiosError } from 'axios';

const STABILITY_API_KEY = process.env.REACT_APP_STABILITY_API_KEY || '';
const STABILITY_API_URL = 'https://api.stability.ai/v2beta/3d/stable-fast-3d';

export const generate3DModel = async (
  imageFile: File,
  textureResolution: '512' | '1024' | '2048' = '1024',
  foregroundRatio: number = 0.85,
  remesh: 'none' | 'quad' | 'triangle' = 'none',
  vertexCount: number = -1
): Promise<Blob> => {
  if (!STABILITY_API_KEY) {
    throw new Error('Stability API key is missing');
  }

  console.log('Preparing to send request to Stability API');
  console.log('Image file:', imageFile.name, 'size:', imageFile.size);

  const formData = new FormData();
  formData.append('image', imageFile);
  formData.append('texture_resolution', textureResolution);
  formData.append('foreground_ratio', foregroundRatio.toString());
  formData.append('remesh', remesh);
  formData.append('vertex_count', vertexCount.toString());

  try {
    console.log('Sending request to:', STABILITY_API_URL);
    const response = await axios.post(STABILITY_API_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${STABILITY_API_KEY}`,
        'Accept': 'application/json',
      },
      responseType: 'blob',
    });

    console.log('Response received:', {
      status: response.status,
      contentType: response.headers['content-type'],
      dataSize: response.data.size,
    });

    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error('API Error Details:', {
        message: error.message,
        status: (error as any).response?.status,
        statusText: (error as any).response?.statusText,
        data: (error as any).response?.data,
      });

      // Try to read the error response body if it's a blob
      if ((error as any).response?.data instanceof Blob) {
        const text = await (error as any).response.data.text();
        console.error('Error response body:', text);
      }
    }
    throw error;
  }
};