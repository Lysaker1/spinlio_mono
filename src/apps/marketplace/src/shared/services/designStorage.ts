import { SavedDesign } from '../types/SavedDesign';
import { ConfiguratorType } from '../constants/configuratorTypes';
import { logger } from '../utils/logger';

const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://api.bazaar.it' 
  : 'http://localhost:3003';

export class DesignStorageService {
  static async saveDesign(
    design: Omit<SavedDesign, 'id' | 'created_at'>, 
    token: string
  ): Promise<SavedDesign> {
    try {
      const response = await fetch(`${API_BASE_URL}/designs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(design)
      });

      if (!response.ok) {
        throw new Error(`Failed to save design: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      logger.error('Error saving design:', error);
      throw error;
    }
  }

  static async getDesigns(token?: string): Promise<SavedDesign[] | null> {
    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };

      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`${API_BASE_URL}/designs`, {
        method: 'GET',
        headers
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      logger.error('Error getting designs:', error);
      return null;
    }
  }

  static async getDesignsByUser(userId: string, token?: string): Promise<SavedDesign[] | null> {
    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };

      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`${API_BASE_URL}/designs/${userId}`, {
        method: 'GET',
        headers
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      logger.error('Error getting designs by user:', error);
      return null;
    }
  }

  static async getDesignsByType(
    configuratorType: ConfiguratorType, 
    token: string
  ): Promise<SavedDesign[]> {
    try {
      const response = await fetch(
        `${API_BASE_URL}/designs/type/${configuratorType}`, 
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch designs by type: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      logger.error(`Error fetching ${configuratorType} designs:`, error);
      throw error;
    }
  }

  static async getDesignById(id: string, token: string): Promise<SavedDesign> {
    try {
      const response = await fetch(`${API_BASE_URL}/designs/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch design: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      logger.error(`Error fetching design with ID ${id}:`, error);
      throw error;
    }
  }

  static async deleteDesign(designId: string, token?: string): Promise<void> {
    try {
      await fetch(`${API_BASE_URL}/designs/${designId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    } catch (error) {
      logger.error('Error deleting design:', error);
      throw error;
    }
  }

  static async updateDesign(designId: string, updates: Partial<SavedDesign>, token?: string): Promise<void> {
    try {
      await fetch(`${API_BASE_URL}/designs/${designId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updates)
      });
    } catch (error) {
      logger.error('Error updating design:', error);
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

      if (!token) {
        throw new Error("Authentication token is required");
      }

      const savedDesign = await this.saveDesign(duplicatedDesign, token);
      if (design.thumbnail_url && !savedDesign.thumbnail_url) {
        await this.updateDesign(savedDesign.id, { thumbnail_url: design.thumbnail_url }, token);
        return { ...savedDesign, thumbnail_url: design.thumbnail_url };
      }
      return savedDesign;
    } catch (error) {
      logger.error('Error duplicating design:', error);
      throw error;
    }
  }
} 