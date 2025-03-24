import { Profile } from "../types/Profile";
import { AuthService } from "./authService";
import api from '../config/api';

export class ProfileStorageService {
  static async getProfile(userId: string): Promise<Profile> {
    try {
      console.log(`Fetching profile for user ID: ${userId}`);
      // Use the axios instance which already handles auth headers
      const response = await api.get(`/api/users/${userId}`);
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
      console.log(`Creating or updating profile for user ID: ${profile.id}`);
      
      // Create headers if token is provided
      const config = token ? { headers: { Authorization: `Bearer ${token}` } } : undefined;
      
      // This endpoint now handles both creating new profiles and updating existing ones
      const response = await api.post(`/api/users`, profile, config);
      
      const status = response.status;
      console.log(`Profile ${status === 201 ? 'created' : 'updated'} successfully`);
      
      return response.data;
    } catch (error: any) {
      // Check if the error has a response (from the server)
      if (error.response) {
        // Handle 409 conflict errors - might not be an actual error in our case
        if (error.response.status === 409) {
          console.log('Profile already exists, treating as successful update');
          return profile; // Return the profile we tried to create
        }
        
        const errorMessage = error.response.data?.message || error.response.data?.error || error.message;
        console.error(`Error creating/updating profile: ${errorMessage}`);
        throw new Error(errorMessage || 'Failed to create or update profile');
      }
      
      console.error('Error creating/updating profile:', error);
      throw error;
    }
  }

  static async updateProfile(profile: Profile, token?: string): Promise<Profile> {
    try {
      console.log(`Updating profile for user ID: ${profile.id}`);
      
      // Create headers if token is provided
      const config = token ? { headers: { Authorization: `Bearer ${token}` } } : undefined;
      
      const response = await api.patch(`/api/users/${profile.id}`, profile, config);
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

  // Business Profile methods
  static async createBusinessProfile(businessProfile: any, token?: string): Promise<any> {
    try {
      console.log(`Creating business profile for user ID: ${businessProfile.id}`);
      
      // Create headers if token is provided
      const config = token ? { headers: { Authorization: `Bearer ${token}` } } : undefined;
      
      const response = await api.post(`/api/business-profiles`, businessProfile, config);
      return response.data;
    } catch (error: any) {
      // Check if the error has a response (from the server)
      if (error.response) {
        const errorMessage = error.response.data?.message || error.response.data?.error || error.message;
        console.error(`Error creating business profile: ${errorMessage}`);
        throw new Error(errorMessage || 'Failed to create business profile');
      }
      
      console.error('Error creating business profile:', error);
      throw error;
    }
  }

  static async getBusinessProfile(userId: string): Promise<any> {
    try {
      console.log(`Fetching business profile for user ID: ${userId}`);
      // Use the axios instance which already handles auth headers
      const response = await api.get(`/api/business-profiles/${userId}`);
      return response.data;
    } catch (error: any) {
      // Check if the error has a response (from the server)
      if (error.response) {
        if (error.response.status === 404) {
          console.error(`Business profile not found for user ID: ${userId}`);
          throw new Error('Business profile not found');
        }
        
        // Handle other response errors
        const errorMessage = error.response.data?.message || error.response.data?.error || error.message;
        console.error(`Error fetching business profile: ${errorMessage}`);
        throw new Error(errorMessage || 'Failed to fetch business profile');
      }
      
      // Handle network errors or other issues
      console.error('Error fetching business profile:', error);
      throw error;
    }
  }
}





