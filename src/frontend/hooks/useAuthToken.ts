import { useEffect, useCallback } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { AuthService } from '../services/authService';

export const useAuthToken = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  // Use the getAccessTokenSilently from Auth0 as the token provider function
  const setupTokenRefresh = useCallback(async () => {
    await AuthService.setupTokenRefresh(getAccessTokenSilently);
  }, [getAccessTokenSilently]);

  useEffect(() => {
    if (isAuthenticated) {
      setupTokenRefresh().catch(error => {
        console.error('Failed to set up token refresh:', error);
      });

      // Clean up on unmount
      return () => {
        // No need to clear here, as the AuthService handles this internally
      };
    }
  }, [isAuthenticated, setupTokenRefresh]);

  return {
    getToken: AuthService.getToken,
    isAuthenticated: () => {
      const token = AuthService.getToken();
      return !!token && !AuthService.isTokenExpired(token);
    },
    getUserId: () => {
      const token = AuthService.getToken();
      return token ? AuthService.getUserIdFromToken(token) : null;
    }
  };
}; 