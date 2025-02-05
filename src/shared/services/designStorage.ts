import { SavedDesign } from '../types/SavedDesign';
import axios from 'axios';

const apiClient = axios.create({
  // If we're in production, use https://api.spinlio.com
  // If we're in development, use http://localhost:3003
  baseURL: process.env.NODE_ENV === 'production' 
    ? process.env.REACT_APP_API_URL || 'https://api.spinlio.com'
    : 'http://localhost:3003',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
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

  static async updateDesign(designId: string, updates: Partial<SavedDesign>, token: string): Promise<void> {
    try {
      await apiClient.patch(`/api/designs/${designId}`, updates, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.error('Error updating design:', error);
      throw error;
    }
  }

  static async duplicateDesign(design: SavedDesign, token: string): Promise<SavedDesign> {
    try {
      const duplicatedDesign: Omit<SavedDesign, 'id' | 'created_at'> = {
        name: `${design.name} (Copy)`,
        user_id: design.user_id,
        description: design.description,
        parameters: design.parameters,
        configurator_type: design.configurator_type,
        thumbnail_url: design.thumbnail_url,
        is_public: design.is_public
      };

      const savedDesign = await this.saveDesign(duplicatedDesign, token);
      if (design.thumbnail_url && !savedDesign.thumbnail_url) {
        await this.updateDesign(savedDesign.id, { thumbnail_url: design.thumbnail_url }, token);
        return { ...savedDesign, thumbnail_url: design.thumbnail_url };
      }
      return savedDesign;
    } catch (error) {
      console.error('Error duplicating design:', error);
      throw error;
    }
  }
} 