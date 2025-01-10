import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mantine/core';

export const AuthButton: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return null;
  }

  const buttonStyles = {
    background: '#181818',
    color: '#FFF',
    border: 'none',
    borderRadius: '2.125rem',
    padding: '0.5rem 1.25rem',
    fontSize: '0.875rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'background 0.2s ease',
    '&:hover': {
      background: '#2a2a2a'
    }
  };

  return isAuthenticated ? (
    <Button
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      variant="filled"
      styles={() => ({
        root: buttonStyles
      })}
    >
      Log Out
    </Button>
  ) : (
    <Button
      onClick={() => loginWithRedirect()}
      variant="filled"
      styles={() => ({
        root: buttonStyles
      })}
    >
      Log In
    </Button>
  );
};

export default AuthButton; 