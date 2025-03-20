import api from '../config/api';

// Design types
export interface SavedDesign {
  id: string;
  user_id: string;
  name: string;
  description?: string;
  parameters: Record<string, any>;
  configurator_type: string;
  created_at: string;
  updated_at?: string;
  thumbnail_url?: string;
  is_public: boolean;
}

export interface NewDesign {
  user_id: string;
  name: string;
  description?: string;
  parameters: Record<string, any>;
  configurator_type: string;
  is_public: boolean;
  thumbnail_url?: string;
}

export interface DesignUpdateData {
  name?: string;
  description?: string;
  parameters?: Record<string, any>;
  is_public?: boolean;
  thumbnail_url?: string;
}

export interface SaveDesignResponse {
  success: boolean;
  data?: SavedDesign;
  error?: string;
}

export interface DesignsResponse {
  success: boolean;
  designs?: SavedDesign[];
  error?: string;
}

// Service for managing designs
export class DesignStorageService {
  // Get all public designs
  static async getPublicDesigns(): Promise<DesignsResponse> {
    try {
      const response = await api.get('/api/designs/public');
      return { success: true, designs: response.data };
    } catch (error: any) {
      console.error('Error fetching public designs:', error);
      return { 
        success: false, 
        error: error.response?.data?.message || error.message || 'Failed to fetch public designs' 
      };
    }
  }

  // Get designs for a specific user
  static async getUserDesigns(userId: string): Promise<DesignsResponse> {
    try {
      const response = await api.get(`/api/designs/user/${userId}`);
      return { success: true, designs: response.data };
    } catch (error: any) {
      console.error(`Error fetching designs for user ${userId}:`, error);
      return { 
        success: false, 
        error: error.response?.data?.message || error.message || 'Failed to fetch user designs' 
      };
    }
  }

  // Get a specific design by ID
  static async getDesign(designId: string): Promise<SaveDesignResponse> {
    try {
      const response = await api.get(`/api/designs/${designId}`);
      return { success: true, data: response.data };
    } catch (error: any) {
      console.error(`Error fetching design ${designId}:`, error);
      return { 
        success: false, 
        error: error.response?.data?.message || error.message || 'Failed to fetch design' 
      };
    }
  }

  // Save a new design
  static async saveDesign(design: NewDesign): Promise<SaveDesignResponse> {
    try {
      const response = await api.post('/api/designs', design);
      return { success: true, data: response.data };
    } catch (error: any) {
      console.error('Error saving design:', error);
      return { 
        success: false, 
        error: error.response?.data?.message || error.message || 'Failed to save design' 
      };
    }
  }

  // Update an existing design
  static async updateDesign(designId: string, updateData: DesignUpdateData): Promise<SaveDesignResponse> {
    try {
      const response = await api.patch(`/api/designs/${designId}`, updateData);
      return { success: true, data: response.data };
    } catch (error: any) {
      console.error(`Error updating design ${designId}:`, error);
      return { 
        success: false, 
        error: error.response?.data?.message || error.message || 'Failed to update design' 
      };
    }
  }

  // Delete a design
  static async deleteDesign(designId: string): Promise<{ success: boolean; error?: string }> {
    try {
      await api.delete(`/api/designs/${designId}`);
      return { success: true };
    } catch (error: any) {
      console.error(`Error deleting design ${designId}:`, error);
      return { 
        success: false, 
        error: error.response?.data?.message || error.message || 'Failed to delete design' 
      };
    }
  }

  // Upload a thumbnail for a design
  static async uploadThumbnail(designId: string, file: File): Promise<SaveDesignResponse> {
    try {
      const formData = new FormData();
      formData.append('thumbnail', file);
      
      const response = await api.post(`/api/designs/${designId}/thumbnail`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      return { success: true, data: response.data };
    } catch (error: any) {
      console.error(`Error uploading thumbnail for design ${designId}:`, error);
      return { 
        success: false, 
        error: error.response?.data?.message || error.message || 'Failed to upload thumbnail' 
      };
    }
  }
} 