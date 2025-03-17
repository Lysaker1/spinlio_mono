import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { logger } from '../../../shared/utils/logger';

// Reuse the same futuristic button styling
const FuturisticButton = styled.button`
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid rgba(56, 189, 248, 0.5);
  border-radius: 8px;
  padding: 16px 40px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(
      45deg,
      #00ffff,
      #ff00ff,
      #00ffff
    );
    z-index: -1;
    border-radius: 10px;
    filter: blur(8px);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      rgba(56, 189, 248, 0.1),
      rgba(168, 85, 247, 0.1)
    );
    border-radius: 8px;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: transparent;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
    
    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;

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
          logger.debug('Authentication successful, token received');
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

  const testDesignsAPI = async () => {
    if (!isAuthenticated || !user) return;
    
    try {
      const token = await getAccessTokenSilently();
      // Only create test design when explicitly requested
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
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center' }}>
        <p>Authentication error: {error.message}</p>
        <FuturisticButton onClick={() => loginWithRedirect()}>
          Try Again
        </FuturisticButton>
      </div>
    );
  }

  if (isAuthenticated && user) {
    return (
      <div style={{ textAlign: 'center' }}>
        <p>Successfully logged in as {user.name}</p>
        <p>Redirecting to configurator...</p>
        <FuturisticButton onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log out
        </FuturisticButton>
      </div>
    );
  }

  return (
    <FuturisticButton onClick={() => loginWithRedirect()}>
      Log in
    </FuturisticButton>
  );
}; 