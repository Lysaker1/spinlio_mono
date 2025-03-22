import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface ErrorState {
  type: string;
  message: string;
  description?: string;
}

const AuthCallback: React.FC = () => {
  const { isLoading, error, isAuthenticated, user, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();
  const [parsedError, setParsedError] = useState<ErrorState | null>(null);
  
  useEffect(() => {
    // Parse URL query parameters for error data
    const searchParams = new URLSearchParams(location.search);
    const errorParam = searchParams.get('error');
    const errorDescription = searchParams.get('error_description');
    
    if (errorParam) {
      setParsedError({
        type: errorParam,
        message: 'Authentication error occurred',
        description: errorDescription || undefined
      });
      
      console.error('Auth0 URL Error Parameters:', {
        error: errorParam,
        errorDescription: errorDescription,
        fullUrl: window.location.href
      });
    }
    
    // Debug logging
    console.log('AuthCallback state:', { 
      isLoading, 
      isAuthenticated, 
      errorFromAuth0: !!error,
      errorFromURL: !!errorParam,
      errorMessage: error?.message || errorParam || null,
      errorDescription: errorDescription || null,
      user: user ? 'present' : 'not present',
      pathname: location.pathname,
      search: location.search,
      fullUrl: window.location.href
    });

    if (!isLoading) {
      if (isAuthenticated && user) {
        console.log('Authentication successful, redirecting to dashboard');
        navigate('/dashboard');
      } else if (error || parsedError) {
        const errorData = error || parsedError;
        console.error('Authentication error details:', {
          message: errorData?.message,
          type: parsedError?.type || (error as any)?.name,
          description: parsedError?.description || (error as any)?.description,
          stack: error?.stack,
        });
        
        // Special handling for "access_denied" error
        if (parsedError?.type === 'access_denied' || (error as any)?.name === 'access_denied') {
          console.log('Detected access_denied error, will retry login with prompt=login');
          
          // For api.bazaar.it service not found errors, we need to check API health first
          if (parsedError?.description && parsedError.description.includes('api.bazaar.it')) {
            console.log('API service not found error detected, checking API health');
            
            // Try to fetch the API health endpoint to check if it's running
            fetch(process.env.REACT_APP_API_URL || 'http://localhost:3003')
              .then(response => {
                console.log('API health check response:', response.status);
                if (response.ok) {
                  // API is running, retry login with login prompt
                  retryLogin();
                } else {
                  // API is not responding properly
                  console.error('API is not responding correctly:', response.status);
                }
              })
              .catch(err => {
                console.error('API health check failed:', err);
                // API is down or unreachable, show error UI
              });
          } else {
            // Other access_denied errors, retry login
            retryLogin();
          }
        } else {
          navigate('/');
        }
      } else if (!isAuthenticated) {
        console.warn('Not authenticated after callback, redirecting to home');
        navigate('/');
      }
    }
  }, [isLoading, isAuthenticated, error, navigate, user, location, parsedError, loginWithRedirect]);
  
  // Helper function to retry login with prompt=login
  const retryLogin = () => {
    // Clear any local storage auth data
    localStorage.removeItem('auth0.is.authenticated');
    
    // Delay to prevent redirect loops
    setTimeout(() => {
      loginWithRedirect({
        authorizationParams: {
          // Force login screen to appear
          prompt: 'login',
          // Use a fresh state to avoid state conflicts
          state: `retry_${Date.now()}`
        }
      });
    }, 1000);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Completing authentication...</h2>
          <div className="inline-block w-8 h-8 border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (error || parsedError) {
    const errorData = error || parsedError;
    const isApiError = parsedError?.description?.includes('api.bazaar.it');
    
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center text-red-600 max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl mb-4">Authentication Error</h2>
          <p className="mb-2">{errorData?.message}</p>
          {parsedError?.description && (
            <p className="text-sm mb-4 bg-gray-100 p-3 rounded">{parsedError.description}</p>
          )}
          {isApiError && (
            <div className="bg-yellow-100 text-yellow-800 p-3 rounded mb-4">
              <p className="font-medium">API Service Issue Detected</p>
              <p className="text-sm">The API service appears to be unavailable or misconfigured.</p>
            </div>
          )}
          <div className="mt-6 space-y-3">
            <button 
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => retryLogin()}
            >
              Try Again
            </button>
            <button 
              className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100"
              onClick={() => navigate('/')}
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h2 className="text-2xl mb-4">Processing authentication...</h2>
        <p className="text-gray-600 mb-4">If you're not redirected automatically, please click below:</p>
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => navigate('/dashboard')}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default AuthCallback; 