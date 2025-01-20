import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  border: 1px solid rgba(56, 189, 248, 0.2);
`;

const LoginText = styled.p`
  color: white;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const LoginButton = styled.button`
  background: black;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1rem;
  
`;

interface AuthenticatedFeatureProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const AuthenticatedFeature: React.FC<AuthenticatedFeatureProps> = ({ 
  children, 
  fallback 
}) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (!isAuthenticated) {
    if (fallback) return <>{fallback}</>;
    return (
      <LoginContainer>
        <LoginText>Login to access this feature</LoginText>
        <LoginButton onClick={() => loginWithRedirect()}>
          Log in
        </LoginButton>
      </LoginContainer>
    );
  }

  return <>{children}</>;
};
