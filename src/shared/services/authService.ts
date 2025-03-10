import { getApiUrl } from '../config/api';
import { DesignStorageService } from './designStorage';
import { CONFIGURATOR_TYPES } from '../constants/configuratorTypes';
import { SavedDesign, NewDesign } from '../types/SavedDesign';
import { ErrorService } from './errorService';
import { ApiResponse, SaveDesignResponse } from '../types/api';

export const AuthService = {
  testProtectedRoute: async (token: string): Promise<ApiResponse<any>> => {
    try {
      const apiUrl = getApiUrl();
      const response = await fetch(`${apiUrl}/api/test`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw response;
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      const errorDetails = await ErrorService.handleError(error, 'AuthService.testProtectedRoute');
      
      if (ErrorService.isNetworkError(error)) {
        console.error('Network error detected');
      }

      if (ErrorService.isAuthError(error)) {
        console.error('Auth error detected');
      }

      return {
        success: false,
        error: errorDetails
      };
    }
  },

  testDesignsAPI: async (token: string, userId: string): Promise<SaveDesignResponse> => {
    try {
      const testDesign: Omit<SavedDesign, 'id' | 'created_at' | 'thumbnail_url'> = {
        user_id: userId,
        name: "Test Design",
        description: "Testing API",
        parameters: { test: "value" },
        configurator_type: CONFIGURATOR_TYPES.DEFAULT,
        is_public: false
      };
      
      const result = await DesignStorageService.saveDesign(testDesign as NewDesign, token);
      return { success: true, data: result };
    } catch (error) {
      const errorDetails = await ErrorService.handleError(error, 'AuthService.testDesignsAPI');
      return {
        success: false,
        error: errorDetails
      };
    }
  }
};