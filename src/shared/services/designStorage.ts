import { SavedDesign } from '../types/SavedDesign';
import axios from 'axios';

// Rename the axios instance to avoid conflict with the import
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://api.spinlio.com',
  withCredentials: true
});

export class DesignStorageService {
  static async saveDesign(design: Omit<SavedDesign, 'id' | 'created_at'>, token: string): Promise<SavedDesign> {
    try {
      // Update validation to accept all Auth0 identity providers
      const validProviderPattern = /^(auth0|google-oauth2|apple|microsoft|github|facebook)\|/;
      
      if (!design.user_id.match(validProviderPattern) && design.user_id !== 'test-user-1') {
        console.error('Invalid user ID format:', {
          userId: design.user_id,
          matchesPattern: !!design.user_id.match(validProviderPattern),
          isTestUser: design.user_id === 'test-user-1',
          timestamp: new Date().toISOString()
        });
        throw new Error('Invalid user ID format');
      }

      const response = await apiClient.post('/api/designs', design, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error: any) {
      console.error('Error saving design:', {
        error: error.message,
        userId: design.user_id,
        timestamp: new Date().toISOString()
      });
      throw error;
    }
  }

  static async getDesignsByUser(userId: string, token: string): Promise<SavedDesign[]> {
    if (!userId) {
      console.error('No userId provided to getDesignsByUser');
      return [];
    }

    try {
      console.log('Making API request to:', `${apiClient.defaults.baseURL}/api/designs/${userId}`);
      const response = await apiClient.get(`/api/designs/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      console.log('API Response:', response);
      
      if (!response.data) {
        console.log('No data in response');
        return [];
      }

      return response.data;
    } catch (error: any) {
      console.error('Error fetching designs:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
      }
      throw error;
    }
  }

  static async deleteDesign(designId: string, token: string): Promise<void> {
    try {
      await apiClient.delete(`/api/designs/${designId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
    } catch (error: any) {
      console.error('Error deleting design:', error);
      throw error;
    }
  }
} 