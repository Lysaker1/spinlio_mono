import { Profile } from "@shared/types/Profile";
import { AuthService } from "./authService";
import api from '@shared/config/api';

export class ProfileStorageService {
  static async getProfile(userId: string): Promise<Profile> {
    try {
      console.log(`Fetching profile for user ID: ${userId}`);
      // Use the axios instance which already handles auth headers
      const response = await api.get(`/api/profile/${userId}`);
      return response.data;
    } catch (error: any) {
      // Check if the error has a response (from the server)
      if (error.response) {
        if (error.response.status === 404) {
          console.error(`Profile not found for user ID: ${userId}`);
          throw new Error('Profile not found');
        }
        
        // Handle other response errors
        const errorMessage = error.response.data?.message || error.response.data?.error || error.message;
        console.error(`Error fetching profile: ${errorMessage}`);
        throw new Error(errorMessage || 'Failed to fetch profile');
      }
      
      // Handle network errors or other issues
      console.error('Error fetching profile:', error);
      throw error;
    }
  }

  static async createProfile(profile: Profile, token?: string): Promise<Profile> {
    try {
      console.log(`Creating profile for user ID: ${profile.id}`);
      
      // Create headers if token is provided
      const config = token ? { headers: { Authorization: `Bearer ${token}` } } : undefined;
      
      const response = await api.post(`/api/profile`, profile, config);
      return response.data;
    } catch (error: any) {
      // Check if the error has a response (from the server)
      if (error.response) {
        const errorMessage = error.response.data?.message || error.response.data?.error || error.message;
        console.error(`Error creating profile: ${errorMessage}`);
        throw new Error(errorMessage || 'Failed to create profile');
      }
      
      console.error('Error creating profile:', error);
      throw error;
    }
  }

  static async updateProfile(profile: Profile, token?: string): Promise<Profile> {
    try {
      console.log(`Updating profile for user ID: ${profile.id}`);
      
      // Create headers if token is provided
      const config = token ? { headers: { Authorization: `Bearer ${token}` } } : undefined;
      
      const response = await api.patch(`/api/profile/${profile.id}`, profile, config);
      return response.data;
    } catch (error: any) {
      // Check if the error has a response (from the server)
      if (error.response) {
        const errorMessage = error.response.data?.message || error.response.data?.error || error.message;
        console.error(`Error updating profile: ${errorMessage}`);
        throw new Error(errorMessage || 'Failed to update profile');
      }
      
      console.error('Error updating profile:', error);
      throw error;
    }
  }
}





