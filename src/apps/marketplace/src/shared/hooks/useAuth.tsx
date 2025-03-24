import { useEffect, useState, useCallback, createContext, useContext, ReactNode } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// Define the Auth context type
interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  userId?: string;
  error?: string;
  user: any;
  refreshToken: () => Promise<string>;
  getToken: () => string | null;
  getAuthHeader: () => { Authorization: string } | undefined;
  login: () => void;
  logout: () => void;
}

// Define our auth state type
interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  userId?: string;
  error?: string;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { 
    isAuthenticated: auth0IsAuthenticated, 
    isLoading: auth0IsLoading, 
    getAccessTokenSilently,
    loginWithRedirect,
    logout: auth0Logout,
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
  }, [auth0IsAuthenticated, auth0IsLoading, user]);

  // Listen for Auth0 authentication changes
  useEffect(() => {
    setupAuth();
  }, [setupAuth]);

  // Refresh token method
  const refreshToken = useCallback(async () => {
    try {
      const token = await getAccessTokenSilently();
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

  const getToken = useCallback(() => {
    // This is a placeholder implementation - in a real app, you would
    // access the token from localStorage or another secure storage
    return localStorage.getItem('auth_token');
  }, []);

  const getAuthHeader = useCallback(() => {
    const token = getToken();
    if (!token) return undefined;
    return { Authorization: `Bearer ${token}` };
  }, [getToken]);

  const login = useCallback(() => {
    // Store the current path in localStorage before redirecting
    const currentPath = window.location.pathname;
    localStorage.setItem('auth_redirect_path', currentPath);
    
    // Redirect to login
    loginWithRedirect();
  }, [loginWithRedirect]);
  
  const logout = useCallback(() => {
    // Call Auth0 logout
    auth0Logout();
  }, [auth0Logout]);

  // Provide auth context
  const contextValue: AuthContextType = {
    isAuthenticated: auth0IsAuthenticated,
    isLoading: auth0IsLoading,
    userId: user?.sub,
    error: authState.error,
    user,
    refreshToken,
    getToken,
    getAuthHeader,
    login,
    logout
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