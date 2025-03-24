// @ts-nocheck
import axios from 'axios';
import { AuthService } from '@shared/services/authService';

// Define base URL based on environment
export const apiUrl = process.env.NODE_ENV === 'production'
  ? 'https://api.bazaar.it'
  : 'http://localhost:3003';

console.log(`API URL configured as: ${apiUrl}`);

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

// Response interceptor for handling common errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    
    // Handle 401 errors (unauthorized) by attempting to refresh the token
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        // Attempt to refresh token if we have the refresh function
        if (AuthService.refreshTokenFunction) {
          console.log('Attempting to refresh expired token...');
          const newToken = await AuthService.refreshTokenFunction();
          
          if (newToken) {
            console.log('Token refreshed successfully');
            AuthService.setToken(newToken);
            
            // Update the Authorization header with the new token
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return api(originalRequest);
          }
        }
      } catch (refreshError) {
        console.error('Error refreshing token:', refreshError);
        // Handle refresh error (e.g., redirect to login)
        return Promise.reject(refreshError);
      }
    }
    
    // Network errors
    if (!error.response) {
      console.error('Network error occurred. Check your internet connection or API availability.');
    }
    
    return Promise.reject(error);
  }
);

export default api; 