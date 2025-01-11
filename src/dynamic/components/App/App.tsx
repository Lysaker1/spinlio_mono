// Get all the tools we need to build our app
import React, { lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { theme } from '../../../shared/theme';
import { Footer, Header } from '../../../shared/components';
import { AboutPage } from '../../../static/components';
import { ContactUsPage } from '..';
import ErrorBoundary from '../../../shared/components/ErrorBoundary/ErrorBoundary';
import { pageView } from '../../../shared/utils/analytics';
import MobileWarning from '../../../shared/components/MobileWarning/MobileWarning';
import { Toaster } from 'react-hot-toast';
import { useAuth0 } from '@auth0/auth0-react';
import { Welcome } from '../../../shared/components/Welcome/Welcome';
import { Notifications } from '@mantine/notifications';
import { MyDesigns } from '@shared/components/MyDesigns/MyDesigns';

// Don't load the big 3D page right away - wait until we need it
const ConfiguratorPage = lazy(() => 
  import('../ConfiguratorPage').then(module => ({
    default: module.default
  }))
);

const SupplierConfigurator = lazy(() => 
  import('../ConfiguratorPage/variants/SupplierConfigurator/SupplierConfigurator').then(module => ({
    default: module.default
  }))
);

// Import the BetaPage component
const BetaPage = lazy(() => 
  import('../BetaPage/BetaPage').then(module => ({
    default: module.default
  }))
);

const VulzConfigurator = lazy(() => 
  import('../ConfiguratorPage/variants/VulzConfigurator/VulzConfigurator').then(module => ({
    default: module.default
  }))
);

// Create a protected route wrapper
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="loading-placeholder" />;
  }

  if (!isAuthenticated) {
    return (
      <div className="app">
        <Header />
        <Welcome />
        <Footer />
      </div>
    );
  }

  return children;
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const isMobile = window.innerWidth <= 768;
  const isConfiguratorRoute = location.pathname === '/' || 
                             location.pathname.includes('/configurator') ||
                             location.pathname.includes('/vulz');  // Add vulz to check

  useEffect(() => {
    pageView(location.pathname + location.search);
  }, [location]);

  if (isMobile && isConfiguratorRoute) {
    return <MobileWarning />;
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route 
            path="/" 
            element={
              <React.Suspense fallback={<div className="loading-placeholder" />}>
                <Welcome />
              </React.Suspense>
            } 
          />
          <Route 
            path="/configurator" 
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="loading-placeholder" />}>
                  <ConfiguratorPage />
                </React.Suspense>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/supplier" 
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="loading-placeholder" />}>
                  <SupplierConfigurator />
                </React.Suspense>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/beta" 
            element={
              <React.Suspense fallback={<div className="loading-placeholder" />}>
                <BetaPage />
              </React.Suspense>
            } 
          />
          <Route 
            path="/vulz" 
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="loading-placeholder" />}>
                  <VulzConfigurator />
                </React.Suspense>
              </ProtectedRoute>
            } 
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/callback" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

console.log('App: Runtime check:', {
  Welcome: Welcome,
  MyDesigns: MyDesigns,
  importedCorrectly: Welcome !== undefined && MyDesigns !== undefined,
  paths: {
    welcome: require.resolve('@shared/components/Welcome/Welcome'),
  }
});

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <MantineProvider theme={theme}>
        <Notifications />
        <Router>
          <AppContent />
        </Router>
      </MantineProvider>
      <Toaster position="top-right" />
    </ErrorBoundary>
  );
};

export default App;