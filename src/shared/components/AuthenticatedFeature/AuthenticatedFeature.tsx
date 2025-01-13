import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

interface AuthenticatedFeatureProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const AuthenticatedFeature = ({ children, fallback }: AuthenticatedFeatureProps) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (!isAuthenticated) {
    return fallback || (
      <button onClick={() => loginWithRedirect()}>
        Login to access this feature
      </button>
    );
  }

  return <>{children}</>;
};
