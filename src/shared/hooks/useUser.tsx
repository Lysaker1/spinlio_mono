import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ProfileStorageService } from '@shared/services/profileStorage';
import { Profile } from '@shared/types/Profile';

interface UserContextType {
  profile: Profile | null;
  setProfile: (profile: Profile) => void;
  isAuthenticated: boolean;
  loginWithRedirect: () => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { user, isAuthenticated, getAccessTokenSilently, loginWithRedirect, logout } = useAuth0();
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const fetchOrCreateProfile = async () => {
      if (isAuthenticated && user && user.sub) {
        try {
          let fetchedProfile = await ProfileStorageService.getProfile(user.sub);
          setProfile(fetchedProfile);
        } catch (error: any) {
          if (error.message === 'Profile not found') {
            try {
              const token = await getAccessTokenSilently();
              const newProfile = await ProfileStorageService.createProfile({
                id: user.sub,
                name: user.name || '',
                avatar_url: user.picture,
                email: user.email,
                custom_url: user.nickname,
                location: user.locale,
                created_at: new Date().toISOString()
              }, token);
              setProfile(newProfile);
            } catch (createError) {
              console.error('Error creating profile:', createError);
            }
          } else {
            console.error('Error fetching or creating profile:', error);
          }
        }
      }
    };

    fetchOrCreateProfile();
  }, [isAuthenticated, user, getAccessTokenSilently]);

  return (
    <UserContext.Provider value={{ profile, setProfile, isAuthenticated, loginWithRedirect, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};