import { Profile, BusinessProfile } from "../types/Profile";
import { AuthService } from "./authService";
import api from '../config/api';
import { supabase } from "../utils/supabaseClient";


export class ProfileStorageService {
  static async getProfile(userId: string): Promise<Profile> {
    try {
      console.log(`Fetching profile for user ID: ${userId}`);
      const response = await api.get(`/api/profile/${userId}`);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 404) {
          console.error(`Profile not found for user ID: ${userId}`);
          throw new Error('Profile not found');
        }
        const errorMessage = error.response.data?.message || error.response.data?.error || error.message;
        console.error(`Error fetching profile: ${errorMessage}`);
        throw new Error(errorMessage || 'Failed to fetch profile');
      }
      console.error('Error fetching profile:', error);
      throw error;
    }
  }

  static async getBusinessProfile(userId: string): Promise<BusinessProfile> {
    console.log(`Fetching business profile for user ID: ${userId}`);
    try {
      const response = await api.get(`/api/business-profile/${userId}`);
      return response.data;
    } catch (error: any) {
      console.error('Error fetching business profile:', error);
      throw error;
    }
  }

  static async updateBusinessProfile(userId: string, profile: BusinessProfile, imageUrls?: string[], token?: string): Promise<BusinessProfile> {
    try {
      const response = await api.patch(`/api/business-profile/${userId}`, { profile, imageUrls }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error: any) {
      console.error('Error updating business profile:', error);
      throw error;
    }
  }

  static async getBusinessImages(userId: string): Promise<string[]> {
    try {
      console.log(`Fetching business images for user ID: ${userId}`);
      const response = await api.get(`/api/business-profile/images/${userId}`);
      return response.data;
    } catch (error: any) {
      console.error('Error fetching business images:', error);
      throw error;
    }
  }

  static async createProfile(profile: Profile, token?: string): Promise<Profile> {
    try {
      console.log(`Creating profile for user ID: ${profile.id}`);
      const config = token ? { headers: { Authorization: `Bearer ${token}` } } : undefined;
      const response = await api.post(`/api/profile`, profile, config);
      return response.data;
    } catch (error: any) {
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
      const config = token ? { headers: { Authorization: `Bearer ${token}` } } : undefined;
      const response = await api.patch(`/api/profile`, profile, config);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        const errorMessage = error.response.data?.message || error.response.data?.error || error.message;
        console.error(`Error updating profile: ${errorMessage}`);
        throw new Error(errorMessage || 'Failed to update profile');
      }
      console.error('Error updating profile:', error);
      throw error;
    }
  }

  static async uploadBusinessLogo(file: File): Promise<string> {
    try {
      const uniqueId = crypto.randomUUID();
      const fileName = `${uniqueId}-${file.name}`;
      const { data, error } = await supabase.storage
        .from('business-images')
        .upload(fileName, file, { cacheControl: '3600', upsert: false });
      if (error) throw error;
      const { data: { publicUrl }} = supabase.storage.from('business-images').getPublicUrl(fileName);
      return publicUrl;
    } catch (error) {
      console.error('Error uploading business logo:', error);
      throw error;
    }
  }

  static async uploadProfilePicture(file: File): Promise<string> {
    try {
      const uniqueId = crypto.randomUUID();
      const fileName = `${uniqueId}-${file.name}`;
      const { data, error } = await supabase.storage
        .from('profile-pictures')
        .upload(fileName, file, { cacheControl: '3600', upsert: false });
      if (error) throw error;
      const { data: { publicUrl }} = supabase.storage.from('profile-pictures').getPublicUrl(fileName);
      return publicUrl;
    } catch (error) {
      console.error('Error uploading profile picture:', error);
      throw error;
    }
  }

  static async uploadBusinessImage(file: File): Promise<string> {
    try {
      const uniqueId = crypto.randomUUID();
      const fileName = `${uniqueId}-${file.name}`;
      const { data, error } = await supabase.storage
        .from('business-images')
        .upload(fileName, file, { cacheControl: '3600', upsert: false });
      if (error) throw error;
      const { data: { publicUrl }} = supabase.storage.from('business-images').getPublicUrl(fileName);
      return publicUrl;
    } catch (error) {
      console.error('Error uploading business image to Supabase:', error);
      throw error;
    }
  }

  static async createBusinessProfile(profile: BusinessProfile, token?: string): Promise<BusinessProfile> {
    try {
      const config = token ? { headers: { Authorization: `Bearer ${token}` } } : undefined;
      const response = await api.post(`/api/business-profile`, profile, config);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        const errorMessage = error.response.data?.message || error.response.data?.error || error.message;
        console.error(`Error creating business profile: ${errorMessage}`);
        throw new Error(errorMessage || 'Failed to create business profile');
      }
      console.error('Error creating business profile:', error);
      throw error;
    }
  }
}