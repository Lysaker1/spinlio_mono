import React, { ReactNode } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from '@emotion/styled';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  border: 1px solid black;
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
  children: ReactNode;
  fallback?: ReactNode;
}

export const AuthenticatedFeature = ({
  children,
  fallback,
}: AuthenticatedFeatureProps): JSX.Element | null => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return null;
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  if (fallback) {
    return <>{fallback}</>;
  }

  return null;
};