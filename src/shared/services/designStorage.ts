import { api } from '../config/config';
import { SavedDesign } from '../types/SavedDesign';

export class DesignStorageService {
  static async saveDesign(design: Omit<SavedDesign, 'id' | 'created_at'>): Promise<SavedDesign> {
    try {
      if (!design.user_id.startsWith('auth0|') && design.user_id !== 'test-user-1') {
        console.error('Invalid user ID:', design.user_id);
        throw new Error('Invalid user ID format');
      }

      const response = await api.post('/api/designs', design);
      return response.data;
    } catch (error) {
      console.error('Error saving design:', error);
      throw error;
    }
  }

  static async getDesignsByUser(userId: string): Promise<SavedDesign[]> {
    if (!userId) {
      console.error('No userId provided to getDesignsByUser');
      return [];
    }

    try {
      console.log('Making API request for designs, userId:', userId);
      const response = await api.get(`/api/designs/${userId}`);
      console.log('Raw API response:', response);
      
      if (!response.data) {
        console.log('No data in response');
        return [];
      }

      return response.data;
    } catch (error) {
      console.error('Error fetching designs:', error);
      throw error;
    }
  }

  static async deleteDesign(designId: string): Promise<void> {
    try {
      await api.delete(`/api/designs/${designId}`);
    } catch (error) {
      console.error('Error deleting design:', error);
      throw error;
    }
  }
} 