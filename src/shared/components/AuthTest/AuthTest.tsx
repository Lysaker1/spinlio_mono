import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mantine/core';

export const AuthTest = () => {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
    getAccessTokenSilently
  } = useAuth0();

  useEffect(() => {
    const checkAuth = async () => {
      if (isAuthenticated) {
        try {
          const token = await getAccessTokenSilently();
          console.log('Authentication successful, token received');
          localStorage.setItem('auth_token', token);
        } catch (e) {
          console.error('Error getting access token:', e);
        }
      }
    };

    checkAuth();
  }, [isAuthenticated, getAccessTokenSilently]);

  useEffect(() => {
    const testProtectedRoute = async () => {
      if (isAuthenticated) {
        try {
          const token = await getAccessTokenSilently();
          // Use environment-aware API URL
          const apiUrl = process.env.NODE_ENV === 'production' 
            ? 'https://api.spinlio.com/api/test'
            : 'http://localhost:3003/api/test';
          
          const response = await fetch(apiUrl, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          const data = await response.json();
          console.log('Protected route response:', data);
        } catch (error) {
          console.error('Error accessing protected route:', error);
        }
      }
    };

    testProtectedRoute();
  }, [isAuthenticated, getAccessTokenSilently]);

  useEffect(() => {
    const testDesignsAPI = async () => {
      if (isAuthenticated && user) {
        try {
          const token = await getAccessTokenSilently();
          // Test saving a design
          const testDesign = {
            user_id: user.sub,
            name: "Test Design",
            description: "Testing API",
            parameters: { test: "value" },
            configurator_type: "default"
          };
          
          const response = await fetch('http://localhost:3003/api/designs', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(testDesign)
          });
          
          const data = await response.json();
          console.log('Design saved:', data);
        } catch (error) {
          console.error('Error testing designs API:', error);
        }
      }
    };

    testDesignsAPI();
  }, [isAuthenticated, user, getAccessTokenSilently]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error('Auth error details:', error);
    return (
      <div style={{ textAlign: 'center' }}>
        <p>Authentication error: {error.message}</p>
        <Button 
          onClick={() => loginWithRedirect()}
          variant="filled"
          color="blue"
        >
          Try Again
        </Button>
      </div>
    );
  }

  if (isAuthenticated && user) {
    return (
      <div style={{ textAlign: 'center' }}>
        <p>Successfully logged in as {user.name}</p>
        <p>Redirecting to configurator...</p>
        <Button 
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          variant="light"
        >
          Log out
        </Button>
      </div>
    );
  }

  return (
    <Button 
      onClick={() => loginWithRedirect()}
      variant="filled"
      color="blue"
    >
      Log in
    </Button>
  );
}; 