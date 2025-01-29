import { Profile } from "@shared/types/Profile";
import axios from "axios";

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

export class ProfileStorageService {
  static async getProfile(userId: string): Promise<Profile> {
    try {
      const response = await apiClient.get(`/api/profile/${userId}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        throw new Error('Profile not found');
      }
      console.error('Error fetching profile:', error);
      throw error;
    }

  }

  static async createProfile(profile: Profile, token: string): Promise<Profile> {
    try {
      const response = await apiClient.post(`/api/profile`, profile, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error creating profile:', error);
      throw error;
    }
  }

  static async updateProfile(profile: Profile, token: string): Promise<Profile> {
    try {
      const response = await apiClient.patch(`/api/profile`, profile, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  }
}





