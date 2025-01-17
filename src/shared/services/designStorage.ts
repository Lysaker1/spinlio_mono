import { SavedDesign } from '../types/SavedDesign';
import axios from 'axios';

// Rename the axios instance to avoid conflict with the import
const apiClient = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? process.env.REACT_APP_API_URL || 'https://api.spinlio.com'
    : 'http://localhost:3003',
  withCredentials: true
});

export class DesignStorageService {
  static async saveDesign(design: Omit<SavedDesign, 'id' | 'created_at'>, token: string): Promise<SavedDesign> {
    try {
      const response = await apiClient.post('/api/designs', design, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error in saveDesign:', error);
      throw error;
    }
  }

  static async getDesignsByUser(userId: string, token: string): Promise<SavedDesign[]> {
    try {
      const response = await apiClient.get(`/api/designs/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching designs:', error);
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
    } catch (error) {
      console.error('Error deleting design:', error);
      throw error;
    }
  }

  static async updateDesign(designId: string, updates: Partial<SavedDesign>, token: string): Promise<SavedDesign> {
    try {
      const response = await apiClient.patch(`/api/designs/${designId}`, updates, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error updating design:', error);
      throw error;
    }
  }
} 