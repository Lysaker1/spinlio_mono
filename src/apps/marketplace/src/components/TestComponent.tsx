import React, { useEffect } from 'react';
import { Text, Box, Button, Group, Code, Alert, Divider } from '@mantine/core';
import { useAuth0 } from '@auth0/auth0-react';

export const TestComponent: React.FC = () => {
  const { 
    isAuthenticated, 
    isLoading, 
    loginWithRedirect, 
    logout, 
    user, 
    error,
    getAccessTokenSilently
  } = useAuth0();

  useEffect(() => {
    // Log auth state to console for debugging
    console.log('Auth state:', { isAuthenticated, isLoading, user, error });

    // Try to get token if authenticated
    if (isAuthenticated && user) {
      getAccessTokenSilently()
        .then(token => console.log('Got token (first 20 chars):', token.substring(0, 20) + '...'))
        .catch(err => console.error('Error getting token:', err));
    }
  }, [isAuthenticated, isLoading, user, error, getAccessTokenSilently]);

  const handleLogin = () => {
    console.log('Initiating login redirect...');
    loginWithRedirect({
      authorizationParams: {
        prompt: 'login',
      },
      appState: { returnTo: window.location.pathname }
    });
  };

  const handleLogout = () => {
    console.log('Logging out...');
    logout({ 
      logoutParams: {
        returnTo: window.location.origin 
      }
    });
  };

  return (
    <Box p="xl" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Text size="xl" fw={700} mb="lg">Auth0 Diagnostic Tool</Text>
      
      {error && (
        <Alert color="red" title="Authentication Error" mb="lg">
          <Text>{error.message}</Text>
          <Code block mt="sm">
            {JSON.stringify(error, null, 2)}
          </Code>
        </Alert>
      )}
      
      <Box p="md" bg="gray.1" mb="lg" style={{ borderRadius: '8px' }}>
        <Text fw={600} size="lg">Auth0 Status:</Text>
        <Text>Loading: {isLoading ? 'Yes' : 'No'}</Text>
        <Text>Authenticated: {isAuthenticated ? 'Yes' : 'No'}</Text>
        <Text>Has Error: {error ? 'Yes' : 'No'}</Text>
      </Box>
      
      {isAuthenticated && user && (
        <Box p="md" bg="blue.0" style={{ borderRadius: '8px' }}>
          <Text fw={600} size="lg" mb="sm">User Info:</Text>
          <Text>Email: {user.email}</Text>
          <Text>Name: {user.name}</Text>
          <Divider my="md" />
          <Text fw={500} mb="xs">Raw User Data:</Text>
          <Code block>
            {JSON.stringify(user, null, 2)}
          </Code>
        </Box>
      )}
      
      <Group mt="xl">
        {!isAuthenticated ? (
          <Button 
            size="lg" 
            color="blue" 
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Log In with Auth0'}
          </Button>
        ) : (
          <Button 
            size="lg" 
            color="red" 
            onClick={handleLogout}
          >
            Log Out
          </Button>
        )}
      </Group>

      <Box mt="xl" p="md" bg="gray.1" style={{ borderRadius: '8px' }}>
        <Text fw={600}>Environment Info:</Text>
        <Text>Domain: {process.env.REACT_APP_AUTH0_DOMAIN || 'Using fallback'}</Text>
        <Text>Audience: {process.env.REACT_APP_AUTH0_AUDIENCE || 'Using fallback'}</Text>
        <Text>Client ID: {process.env.REACT_APP_AUTH0_CLIENT_ID ? 'Configured' : 'Using fallback'}</Text>
        <Text>Node Environment: {process.env.NODE_ENV}</Text>
        <Text>Origin: {window.location.origin}</Text>
      </Box>
    </Box>
  );
};

export default TestComponent; 