import { apiUrl } from '../config/api';
import { DesignStorageService } from './designStorage';
import { CONFIGURATOR_TYPES } from '../constants/configuratorTypes';
import { SavedDesign, NewDesign } from '../types/SavedDesign';
import { ErrorService } from './errorService';
import { ApiResponse, SaveDesignResponse } from '../types/api';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

// Token data structure from JWT
interface TokenData {
  exp: number;  // Expiration timestamp
  iat: number;  // Issued at timestamp
  sub: string;  // Subject (user ID)
}

// Type for token refresh function from Auth0
type TokenRefreshFunction = () => Promise<string>;

// Type for authentication state
export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  userId?: string;
  error?: string;
}

const TOKEN_STORAGE_KEY = 'auth_token';
const TOKEN_EXPIRY_BUFFER = 5 * 60 * 1000; // 5 minutes in milliseconds
const TOKEN_REFRESH_INTERVAL = 30 * 60 * 1000; // 30 minutes

let refreshInterval: number | null = null;
let authenticatedApiInstance: any = null;

// Static class for managing authentication
export class AuthService {
  private static TOKEN_KEY = 'auth_token';
  private static refreshTokenFunction: TokenRefreshFunction | null = null;
  private static refreshListenerAdded = false;

  // Check if a token is expired
  static isTokenExpired(token: string): boolean {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      const { exp } = JSON.parse(jsonPayload);
      
      // Check if token is expired (with 5 minute buffer)
      return Date.now() >= (exp * 1000) - (5 * 60 * 1000);
    } catch (error) {
      console.error('Error checking token expiration:', error);
      return true; // Assume expired if we can't parse it
    }
  }

  // Extract user ID from token
  static getUserIdFromToken(token: string): string | null {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      const { sub } = JSON.parse(jsonPayload);
      return sub;
    } catch (error) {
      console.error('Error extracting user ID from token:', error);
      return null;
    }
  }

  // Get token from storage
  static getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Set token in storage
  static setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  // Remove token from storage
  static removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  // Get authorization header
  static getAuthHeader(): { Authorization: string } | undefined {
    const token = this.getToken();
    if (!token) return undefined;
    
    return { Authorization: `Bearer ${token}` };
  }

  // Set up token refresh mechanism
  static setupTokenRefresh(refreshFunction: TokenRefreshFunction): Promise<void> {
    this.refreshTokenFunction = refreshFunction;
    
    // Get initial token
    return refreshFunction()
      .then(token => {
        this.setToken(token);
        
        // Set up refresh event listener if not already added
        if (!this.refreshListenerAdded) {
          window.addEventListener('auth:refresh-requested', this.handleRefreshRequest);
          this.refreshListenerAdded = true;
        }
      })
      .catch(error => {
        console.error('Failed to get initial token:', error);
        throw error;
      });
  }

  // Handle refresh request event
  private static handleRefreshRequest = async (): Promise<void> => {
    if (this.refreshTokenFunction) {
      try {
        const token = await this.refreshTokenFunction();
        this.setToken(token);
      } catch (error) {
        console.error('Error in refresh event handler:', error);
        // Dispatch refresh failed event
        const event = new CustomEvent('auth:refresh-failed');
        window.dispatchEvent(event);
      }
    } else {
      console.error('No refresh function available');
      // Dispatch refresh failed event
      const event = new CustomEvent('auth:refresh-failed');
      window.dispatchEvent(event);
    }
  };

  // Refresh token manually
  static async refreshToken(): Promise<string | null> {
    if (this.refreshTokenFunction) {
      try {
        const token = await this.refreshTokenFunction();
        this.setToken(token);
        return token;
      } catch (error) {
        console.error('Failed to refresh token:', error);
        // Dispatch refresh failed event
        const event = new CustomEvent('auth:refresh-failed');
        window.dispatchEvent(event);
        return null;
      }
    } else {
      console.error('No refresh function available');
      // Dispatch refresh failed event
      const event = new CustomEvent('auth:refresh-failed');
      window.dispatchEvent(event);
      return null;
    }
  }

  // Clean up resources
  static cleanup(): void {
    // Remove event listeners
    if (this.refreshListenerAdded) {
      window.removeEventListener('auth:refresh-requested', this.handleRefreshRequest);
      this.refreshListenerAdded = false;
    }
    
    // Clear refresh function
    this.refreshTokenFunction = null;
  }

  // Test API access with token
  static async testAPI(token: string): Promise<boolean> {
    try {
      const response = await fetch('http://localhost:3003/api/test', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      return response.ok;
    } catch (error) {
      console.error('API test failed:', error);
      return false;
    }
  }

  // Test designs API access with token and user ID
  static async testDesignsAPI(token: string, userId: string): Promise<{ success: boolean; data?: any; error?: string }> {
    try {
      const response = await fetch(`http://localhost:3003/api/designs/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        return { success: true, data };
      } else {
        return { 
          success: false, 
          error: `API error: ${response.status} ${response.statusText}` 
        };
      }
    } catch (error) {
      console.error('Designs API test failed:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }
}