import { useEffect, useState, useCallback, createContext, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { AuthService, AuthState } from '@shared/services/authService';

// Define the Auth context type
interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  userId?: string;
  error?: string;
  refreshToken: () => Promise<string>;
  getToken: () => string | null;
  getAuthHeader: () => { Authorization: string } | undefined;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth provider component
export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { 
    isAuthenticated: auth0IsAuthenticated, 
    isLoading: auth0IsLoading, 
    getAccessTokenSilently, 
    user 
  } = useAuth0();
  
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    isLoading: true,
  });

  // Set up token refresh
  const setupAuth = useCallback(async () => {
    if (auth0IsAuthenticated && !auth0IsLoading) {
      try {
        await AuthService.setupTokenRefresh(getAccessTokenSilently);
        
        // Get user ID from token or Auth0 user object
        const userId = user?.sub;
        
        setAuthState({
          isAuthenticated: true,
          isLoading: false,
          userId
        });
      } catch (error) {
        console.error('Failed to set up authentication:', error);
        setAuthState({
          isAuthenticated: false,
          isLoading: false,
          error: 'Authentication failed'
        });
      }
    } else if (!auth0IsLoading) {
      // Not authenticated and not loading
      setAuthState({
        isAuthenticated: false,
        isLoading: false
      });
    }
  }, [auth0IsAuthenticated, auth0IsLoading, getAccessTokenSilently, user]);

  // Clean up when component unmounts
  useEffect(() => {
    return () => {
      AuthService.cleanup();
    };
  }, []);

  // Listen for Auth0 authentication changes
  useEffect(() => {
    setupAuth();
  }, [setupAuth]);

  // Listen for auth events
  useEffect(() => {
    const handleUnauthenticated = () => {
      setAuthState(prev => ({
        ...prev,
        isAuthenticated: false,
        error: 'Authentication token expired'
      }));
    };

    const handleRefreshFailed = () => {
      setAuthState(prev => ({
        ...prev,
        isAuthenticated: false,
        error: 'Failed to refresh authentication token'
      }));
    };

    const handleRefreshRequested = async () => {
      try {
        const token = await getAccessTokenSilently();
        AuthService.setToken(token);
      } catch (error) {
        console.error('Error handling refresh request:', error);
        // Dispatch refresh failed event
        const event = new CustomEvent('auth:refresh-failed');
        window.dispatchEvent(event);
      }
    };

    // Add event listeners
    window.addEventListener('auth:unauthenticated', handleUnauthenticated);
    window.addEventListener('auth:refresh-failed', handleRefreshFailed);
    window.addEventListener('auth:refresh-requested', handleRefreshRequested);

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('auth:unauthenticated', handleUnauthenticated);
      window.removeEventListener('auth:refresh-failed', handleRefreshFailed);
      window.removeEventListener('auth:refresh-requested', handleRefreshRequested);
    };
  }, [getAccessTokenSilently]);

  // Refresh token method
  const refreshToken = useCallback(async () => {
    try {
      const token = await getAccessTokenSilently();
      AuthService.setToken(token);
      return token;
    } catch (error) {
      console.error('Error refreshing token:', error);
      setAuthState(prev => ({
        ...prev,
        isAuthenticated: false,
        error: 'Failed to refresh token'
      }));
      throw error;
    }
  }, [getAccessTokenSilently]);

  // Provide auth context
  const contextValue: AuthContextType = {
    isAuthenticated: authState.isAuthenticated,
    isLoading: authState.isLoading || auth0IsLoading,
    userId: authState.userId,
    error: authState.error,
    refreshToken,
    getToken: AuthService.getToken,
    getAuthHeader: AuthService.getAuthHeader
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 