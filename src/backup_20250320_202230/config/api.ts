// @ts-nocheck
import axios from 'axios';
import { AuthService } from '@shared/services/authService';

// Define base URL based on environment
export const apiUrl = process.env.NODE_ENV === 'production'
  ? 'https://api.spinlio.com'
  : 'http://localhost:3003';

// Types for TS inference
interface RequestConfig {
  headers?: Record<string, string>;
  [key: string]: any;
}

// Create a base axios instance
const api = axios.create({
  baseURL: apiUrl,
  timeout: 30000, // 30 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for API calls
api.interceptors.request.use(
  (config) => {
    const authHeader = AuthService.getAuthHeader();
    
    if (authHeader && config.headers) {
      config.headers.Authorization = authHeader.Authorization;
    }
    
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for API calls
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    // If the error is due to an expired token (401) and we haven't tried to refresh yet
    if (error.response?.status === 401 && !(originalRequest as any)._retry) {
      try {
        // Mark that we've tried to refresh the token
        (originalRequest as any)._retry = true;
        
        // Try to refresh the token using the useAuth hook's refreshToken method
        // This is a workaround since we can't directly access the hook here
        // We'll dispatch an event to request token refresh
        const refreshEvent = new CustomEvent('auth:refresh-requested');
        window.dispatchEvent(refreshEvent);
        
        // Wait a moment for the token to be refreshed
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Update the authorization header
        const authHeader = AuthService.getAuthHeader();
        if (authHeader && originalRequest.headers) {
          originalRequest.headers.Authorization = authHeader.Authorization;
        }
        
        // Retry the original request
        return api(originalRequest);
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        
        // Dispatch an event to notify that authentication has failed
        const event = new CustomEvent('auth:refresh-failed');
        window.dispatchEvent(event);
        
        return Promise.reject(refreshError);
      }
    }
    
    return Promise.reject(error);
  }
);

export default api; 