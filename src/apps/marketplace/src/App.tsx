import { useAuth0 } from '@auth0/auth0-react';
import { createTheme, Loader, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import React, { lazy, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import ErrorBoundary from '@shared/components/ErrorBoundary/ErrorBoundary';
import { UserProvider } from '@shared/hooks/useUser';

// Import the AuthCallback component
const AuthCallback = lazy(() => import('./components/Auth/AuthCallback'));

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
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route 
            path="/dashboard/*" 
            element={
              <React.Suspense fallback={<div className="loading-placeholder" />}>
                <DashboardRoutes />
              </React.Suspense>
            } 
          />
          <Route 
            path="/callback" 
            element={
              <React.Suspense fallback={<div className="loading-placeholder" />}>
                <AuthCallback />
              </React.Suspense>
            } 
          />         
          <Route path="*" element={<Navigate to="/dashboard" />} />
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
    <ErrorBoundary>
      <MantineProvider theme={theme}>
        <Notifications />
        <Toaster position="top-right" />
        <UserProvider>
          <AppContent />
        </UserProvider>
      </MantineProvider>
    </ErrorBoundary>
  );
};

export default App; 