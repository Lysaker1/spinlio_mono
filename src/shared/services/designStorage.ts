import { api } from '../config/config';
import { SavedDesign } from '../types/SavedDesign';

export class DesignStorageService {
  static async saveDesign(design: Omit<SavedDesign, 'id' | 'created_at'>, token: string): Promise<SavedDesign> {
    try {
      if (!design.user_id.startsWith('auth0|') && design.user_id !== 'test-user-1') {
        console.error('Invalid user ID:', design.user_id);
        throw new Error('Invalid user ID format');
      }

      const response = await api.post('/api/designs', design, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error: any) {
      console.error('Error saving design:', error);
      throw error;
    }
  }

  static async getDesignsByUser(userId: string, token: string): Promise<SavedDesign[]> {
    if (!userId) {
      console.error('No userId provided to getDesignsByUser');
      return [];
    }

    try {
      console.log('Making API request to:', `${api.defaults.baseURL}/api/designs/${userId}`);
      const response = await api.get(`/api/designs/${userId}`, {
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
      await api.delete(`/api/designs/${designId}`, {
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