import api from '@shared/config/api';
import { SavedDesign } from '@shared/types/SavedDesign';
import { AuthService } from './authService';

export class DesignStorageService {
  static async saveDesign(design: Omit<SavedDesign, 'id' | 'created_at'>, token?: string): Promise<SavedDesign> {
    try {
      const response = await api.post('/api/designs', design);
      return response.data;
    } catch (error) {
      console.error('Error in saveDesign:', error);
      throw error;
    }
  }

  static async getDesignsByUser(userId: string, token?: string): Promise<SavedDesign[]> {
    try {
      const response = await api.get(`/api/designs/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching designs:', error);
      throw error;
    }
  }

  static async deleteDesign(designId: string, token?: string): Promise<void> {
    try {
      await api.delete(`/api/designs/${designId}`);
    } catch (error) {
      console.error('Error deleting design:', error);
      throw error;
    }
  }

  static async updateDesign(designId: string, updates: Partial<SavedDesign>, token?: string): Promise<void> {
    try {
      await api.patch(`/api/designs/${designId}`, updates);
    } catch (error) {
      console.error('Error updating design:', error);
      throw error;
    }
  }

  static async duplicateDesign(design: SavedDesign, token?: string): Promise<SavedDesign> {
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

      const savedDesign = await this.saveDesign(duplicatedDesign);
      if (design.thumbnail_url && !savedDesign.thumbnail_url) {
        await this.updateDesign(savedDesign.id, { thumbnail_url: design.thumbnail_url });
        return { ...savedDesign, thumbnail_url: design.thumbnail_url };
      }
      return savedDesign;
    } catch (error) {
      console.error('Error duplicating design:', error);
      throw error;
    }
  }
} 