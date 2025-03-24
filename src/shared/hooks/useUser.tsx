import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useAuth } from './useAuth';
import api from '@shared/config/api';

// User profile interface
export interface UserProfile {
  id: string;
  email: string;
  name?: string;
  picture?: string;
  avatar_url?: string; // Keep this for compatibility with existing profile data
  company?: string;
  role?: string;
  created_at?: string;
  updated_at?: string;
  last_login?: string;
  is_public?: boolean;
  preferences?: Record<string, any>;
}

// User context interface
interface UserContextType {
  user: UserProfile | null;
  isLoading: boolean;
  error: string | null;
  refreshUserProfile: () => Promise<void>;
  updateUserProfile: (data: Partial<UserProfile>) => Promise<boolean>;
  setProfile: (profile: UserProfile) => void;
}

// Create context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider component
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user: auth0User, isLoading: auth0Loading } = useAuth0();
  const { isAuthenticated, userId } = useAuth();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch user profile from API
  const fetchUserProfile = async (): Promise<void> => {
    if (!isAuthenticated || !userId) {
      setUser(null);
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      console.log(`Fetching user profile for ID: ${userId}`);
      const response = await api.get(`/api/users/${userId}`);
      setUser({
        ...response.data,
        // Ensure picture is set for components that might use it
        picture: response.data.avatar_url || response.data.picture
      });
      setError(null);
    } catch (err: any) {
      console.error('Error fetching user profile:', err);
      
      // Check if Axios error with response
      if (err.response) {
        console.log('Error response data:', err.response.data);
        const status = err.response.status;
        
        // Only try to create a profile if it doesn't exist and we have Auth0 user data
        if (status === 404 && auth0User) {
          try {
            console.log('User profile not found, attempting to create one');
            await createUserProfile();
          } catch (createErr: any) {
            const errorMessage = createErr.response?.data?.error || createErr.message || 'Unknown error';
            console.error('Error creating user profile:', createErr);
            setError(`Failed to create user profile: ${errorMessage}`);
          }
        } else {
          // For errors other than 404 (not found)
          const errorMessage = err.response.data?.error || err.message || 'Unknown error';
          setError(`Failed to load user profile: ${errorMessage}`);
        }
      } else {
        // Network error or other non-response error
        setError(`Network error loading profile: ${err.message || 'Unknown error'}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Create a new user profile
  const createUserProfile = async (): Promise<void> => {
    if (!auth0User || !userId) {
      console.error('Cannot create user profile: missing Auth0 user data or user ID');
      return;
    }

    try {
      const newUser = {
        id: userId,
        email: auth0User.email || '',
        name: auth0User.name || '',
        avatar_url: auth0User.picture || '',
        is_public: true // Make profiles public by default
      };

      console.log('Creating new user profile:', newUser);
      const response = await api.post('/api/users', newUser);
      setUser({
        ...response.data,
        picture: response.data.avatar_url || response.data.picture
      });
      setError(null);
    } catch (err: any) {
      console.error('Error creating user profile:', err);
      
      if (err.response && err.response.data) {
        const errorMessage = err.response.data.error || err.response.data.message || err.message;
        setError(`Failed to create user profile: ${errorMessage}`);
      } else {
        setError(`Failed to create user profile: ${err.message || 'Unknown error'}`);
      }
      
      throw err;
    }
  };

  // Update user profile
  const updateUserProfile = async (data: Partial<UserProfile>): Promise<boolean> => {
    if (!user || !userId) return false;

    try {
      setIsLoading(true);
      const response = await api.patch(`/api/users/${userId}`, data);
      setUser({
        ...response.data,
        picture: response.data.avatar_url || response.data.picture
      });
      setError(null);
      return true;
    } catch (err: any) {
      console.error('Error updating user profile:', err);
      
      if (err.response && err.response.data) {
        const errorMessage = err.response.data.error || err.response.data.message || err.message;
        setError(`Failed to update user profile: ${errorMessage}`);
      } else {
        setError(`Failed to update user profile: ${err.message || 'Unknown error'}`);
      }
      
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Refresh user profile
  const refreshUserProfile = async (): Promise<void> => {
    await fetchUserProfile();
  };

  // Fetch user profile when auth state changes
  useEffect(() => {
    if (!auth0Loading) {
      // Add a slight delay to ensure authentication is complete
      const timeoutId = setTimeout(() => {
        if (isAuthenticated && userId) {
          console.log('Auth state ready, fetching user profile');
          fetchUserProfile();
        } else if (!isAuthenticated) {
          setUser(null);
          setIsLoading(false);
        }
      }, 500);
      
      return () => clearTimeout(timeoutId);
    }
  }, [isAuthenticated, userId, auth0Loading]);

  // Context value
  const contextValue: UserContextType = {
    user,
    isLoading: isLoading || auth0Loading,
    error,
    refreshUserProfile,
    updateUserProfile,
    setProfile: (profile: UserProfile) => {
      setUser(profile);
    },
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

// Hook to use user context
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// Add this function to the file, near other authentication functions
const debugAuth0Token = async (token: string) => {
  console.log('Debugging Auth0 token...');
  
  // Check if token exists
  if (!token) {
    console.error('Token is undefined or empty');
    return;
  }
  
  // Basic token format check
  if (!token.includes('.') || token.split('.').length !== 3) {
    console.error('Token does not appear to be in valid JWT format');
    return;
  }
  
  try {
    // Basic decode to check the payload
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64).split('').map(c => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join('')
    );
    
    const payload = JSON.parse(jsonPayload);
    console.log('Token payload:', {
      sub: payload.sub,
      aud: payload.aud,
      iss: payload.iss,
      exp: new Date(payload.exp * 1000).toISOString(),
      iat: new Date(payload.iat * 1000).toISOString(),
      azp: payload.azp,
      scope: payload.scope
    });
    
    // Check critical fields
    if (!payload.sub) {
      console.error('Token is missing "sub" claim (user ID)');
    }
    
    if (!payload.aud) {
      console.error('Token is missing "aud" claim (audience)');
    } else if (Array.isArray(payload.aud) && !payload.aud.includes('http://localhost:3003')) {
      console.error('Token audience does not include API URL:', payload.aud);
    } else if (!Array.isArray(payload.aud) && payload.aud !== 'http://localhost:3003') {
      console.error('Token audience does not match API URL:', payload.aud);
    }
    
    // Check expiration
    const now = Date.now() / 1000;
    if (payload.exp < now) {
      console.error('Token is expired');
    }
    
    // Check the API with this token 
    try {
      const response = await fetch('http://localhost:3003/api/cors-test', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      console.log('API test response status:', response.status);
      
      if (response.ok) {
        const data = await response.json();
        console.log('API test response data:', data);
      } else {
        console.error('API test failed with status:', response.status);
      }
    } catch (error) {
      console.error('Error testing API with token:', error);
    }
    
  } catch (error) {
    console.error('Error decoding token:', error);
  }
};