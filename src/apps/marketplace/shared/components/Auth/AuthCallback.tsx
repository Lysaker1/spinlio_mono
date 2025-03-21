import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

/**
 * AuthCallback component
 * 
 * This component handles the Auth0 callback and redirects the user
 * to the appropriate page without showing the root page first.
 */
const AuthCallback: React.FC = () => {
  const { isLoading, isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    // Log the current URL for debugging
    console.log('Auth callback - Current URL:', window.location.href);
    
    // Only proceed when Auth0 has finished loading
    if (!isLoading) {
      // Get the stored redirect path from localStorage
      const redirectPath = localStorage.getItem('auth_redirect_path');
      
      console.log('Auth callback - Redirect path:', redirectPath);
      console.log('Auth callback - Is authenticated:', isAuthenticated);
      
      if (redirectPath) {
        // Clear the stored path
        localStorage.removeItem('auth_redirect_path');
        
        // Navigate to the stored path
        console.log('Auth callback - Navigating to:', redirectPath);
        navigate(redirectPath, { replace: true });
      } else {
        // If no stored path, navigate to dashboard or home based on authentication
        const defaultPath = isAuthenticated ? '/dashboard' : '/';
        console.log('Auth callback - No stored path, navigating to default:', defaultPath);
        navigate(defaultPath, { replace: true });
      }
    }
  }, [isLoading, isAuthenticated, navigate, user]);

  // Show a loading indicator while Auth0 is processing
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      width: '100vw',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: '#f8f9fa',
      zIndex: 1000
    }}>
      <div style={{ 
        textAlign: 'center',
        padding: '2rem',
        borderRadius: '10px',
        backgroundColor: 'white',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '90%'
      }}>
        <h2 style={{ marginBottom: '1rem', color: '#333' }}>Completing login...</h2>
        <p style={{ color: '#666' }}>You'll be redirected in a moment</p>
        <div style={{ 
          marginTop: '1.5rem', 
          display: 'inline-block',
          width: '40px',
          height: '40px',
          border: '4px solid rgba(0, 0, 0, 0.1)',
          borderTopColor: '#3f51b5',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <style>
          {`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default AuthCallback; 