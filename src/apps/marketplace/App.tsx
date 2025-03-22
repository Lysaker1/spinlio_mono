import { useAuth0 } from '@auth0/auth0-react';
import { createTheme, Loader, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import React, { lazy, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { UserProvider } from '@shared/hooks/useUser';
import { AuthProvider } from '@shared/hooks/useAuth';

// Import the AuthCallback component
const AuthCallback = lazy(() => import('./components/Auth/AuthCallback'));
const TestComponent = lazy(() => import('./components/Auth/TestComponent'));

// Import Dashboard Routes
const DashboardRoutes = lazy(() => 
  import('./components/dashboard/routes/DashboardRoutes').then(module => ({
    default: module.default
  }))
);

const AppContent: React.FC = () => {
  const location = useLocation();

  // Analytics tracking
  useEffect(() => {
    // Implement analytics tracking if needed
  }, [location]);

  return (
    <div className="app">
      <main className="main-content">
        <Routes>
          <Route path="/*" element={
            <React.Suspense fallback={<div className="loading-placeholder" />}>
              <DashboardRoutes />
            </React.Suspense>
          } />
          <Route 
            path="/callback" 
            element={
              <React.Suspense fallback={<div className="loading-placeholder" />}>
                <AuthCallback />
              </React.Suspense>
            } 
          />
          <Route 
            path="/test" 
            element={
              <React.Suspense fallback={<div className="loading-placeholder">Loading test component...</div>}>
                <TestComponent />
              </React.Suspense>
            } 
          />
        </Routes>
      </main>
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Bazaar Marketplace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  const theme = createTheme({
    // Configure your theme if needed
  });
  
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <Toaster position="top-right" />
      <AuthProvider>
        <UserProvider>
          <AppContent />
        </UserProvider>
      </AuthProvider>
    </MantineProvider>
  );
};

export default App; 