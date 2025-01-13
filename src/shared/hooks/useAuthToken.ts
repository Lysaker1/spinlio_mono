import { useEffect, useCallback } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { jwtDecode } from "jwt-decode"; 

interface TokenData {
  exp: number;  // Expiration timestamp
  iat: number;  // Issued at timestamp
}

export const useAuthToken = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const isTokenExpired = useCallback((token: string): boolean => {
    try {
      const decoded = jwtDecode<TokenData>(token);
      // Check if token expires in less than 5 minutes
      const fiveMinutes = 5 * 60 * 1000;
      return Date.now() >= (decoded.exp * 1000) - fiveMinutes;
    } catch (error) {
      console.error('Error decoding token:', error);
      return true;
    }
  }, []);

  const refreshToken = useCallback(async () => {
    try {
      const token = await getAccessTokenSilently();
      localStorage.setItem('auth_token', token);
      return token;
    } catch (error) {
      console.error('Error refreshing token:', error);
      throw error;
    }
  }, [getAccessTokenSilently]);

  useEffect(() => {
    const manageToken = async () => {
      if (isAuthenticated) {
        try {
          const currentToken = localStorage.getItem('auth_token');
          
          // If no token or token is expired, get a new one
          if (!currentToken || isTokenExpired(currentToken)) {
            await refreshToken();
          }

          // Set up refresh interval (every 30 minutes)
          const refreshInterval = setInterval(async () => {
            const token = localStorage.getItem('auth_token');
            if (token && isTokenExpired(token)) {
              await refreshToken();
            }
          }, 30 * 60 * 1000);

          return () => clearInterval(refreshInterval);
        } catch (error) {
          console.error('Error in token management:', error);
        }
      }
    };

    manageToken();
  }, [isAuthenticated, refreshToken, isTokenExpired]);
}; 