import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const TestComponent: React.FC = () => {
  const { 
    isLoading, 
    isAuthenticated, 
    error, 
    user, 
    loginWithRedirect, 
    logout 
  } = useAuth0();

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-6">Auth0 Test Component</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-semibold mb-3">Auth0 State</h2>
          <ul className="space-y-2">
            <li><strong>Loading:</strong> {isLoading.toString()}</li>
            <li><strong>Authenticated:</strong> {isAuthenticated.toString()}</li>
            <li><strong>Has Error:</strong> {(!!error).toString()}</li>
            {error && (
              <li className="text-red-600">
                <strong>Error:</strong> {error.message}
              </li>
            )}
          </ul>
          
          {user && (
            <div className="mt-4">
              <h3 className="font-medium mb-2">User Info</h3>
              <div className="bg-white p-3 rounded text-xs overflow-auto max-h-64">
                <pre>{JSON.stringify(user, null, 2)}</pre>
              </div>
            </div>
          )}
          
          <div className="flex space-x-4 mt-6">
            {!isAuthenticated && (
              <button
                onClick={() => loginWithRedirect()}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Log In
              </button>
            )}
            
            {isAuthenticated && (
              <button
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Log Out
              </button>
            )}
            
            {isAuthenticated && (
              <button
                onClick={() => window.location.href = '/dashboard'}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Go to Dashboard
              </button>
            )}
          </div>
        </div>
        
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-semibold mb-3">Environment Info</h2>
          <ul className="space-y-2">
            <li><strong>NODE_ENV:</strong> {process.env.NODE_ENV}</li>
            <li><strong>API URL:</strong> {process.env.REACT_APP_API_URL || 'Not set'}</li>
            <li><strong>Auth0 Domain:</strong> {process.env.REACT_APP_AUTH0_DOMAIN || 'Not set'}</li>
            <li><strong>Auth0 Audience:</strong> {process.env.REACT_APP_AUTH0_AUDIENCE || 'Not set'}</li>
            <li><strong>Current Origin:</strong> {window.location.origin}</li>
            <li><strong>Callback URL:</strong> {`${window.location.origin}/callback`}</li>
          </ul>
          
          <div className="mt-6">
            <h3 className="font-medium mb-2">API Health Check</h3>
            <ApiHealthCheck />
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-blue-50 p-4 rounded">
        <h2 className="text-xl font-semibold mb-3">Common Issues & Solutions</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Service not found: https://api.bazaar.it</strong>
            <p className="text-sm">This usually means the API is not running or Auth0 API settings are incorrect. Check that the API is running and CORS is properly configured.</p>
          </li>
          <li>
            <strong>access_denied error</strong>
            <p className="text-sm">This can happen if session cookies are stale. Try clearing cookies and local storage.</p>
          </li>
          <li>
            <strong>Blank page after login</strong>
            <p className="text-sm">Usually a redirect or callback issue. Check Auth0 callback URLs and browser console for errors.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

// API Health Check component
const ApiHealthCheck: React.FC = () => {
  const [status, setStatus] = React.useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = React.useState<string>('Checking API health...');
  
  React.useEffect(() => {
    const checkApiHealth = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3003';
        const response = await fetch(apiUrl);
        
        if (response.ok) {
          setStatus('success');
          setMessage(`API is reachable (${response.status})`);
        } else {
          setStatus('error');
          setMessage(`API returned error status: ${response.status}`);
        }
      } catch (error) {
        setStatus('error');
        setMessage(`API is unreachable: ${error instanceof Error ? error.message : String(error)}`);
      }
    };
    
    checkApiHealth();
  }, []);
  
  return (
    <div className={`p-3 rounded ${
      status === 'loading' ? 'bg-yellow-100 text-yellow-800' :
      status === 'success' ? 'bg-green-100 text-green-800' :
      'bg-red-100 text-red-800'
    }`}>
      <p>{message}</p>
    </div>
  );
};

export default TestComponent; 