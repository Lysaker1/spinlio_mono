// Import necessary components and utilities for the app
import React, { lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, Outlet } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { theme } from '../../../shared/theme';
import { Footer, Header } from '../../../shared/components';
import { AboutPage } from '../../../static/components';
import { ContactUsPage } from '..';
import ErrorBoundary from '../../../shared/components/ErrorBoundary/ErrorBoundary';
import { pageView } from '../../../shared/utils/analytics';
import MobileWarning from '../../../shared/components/MobileWarning/MobileWarning';
import { Toaster } from 'react-hot-toast';
import { Notifications } from '@mantine/notifications';
import { MyDesigns } from '@shared/components/MyDesigns/MyDesigns';
import { Success } from '@shared/components/CheckoutResult/Success';
import { Cancel } from '@shared/components/CheckoutResult/Cancel';

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

const DashboardRoutes = lazy(() => 
  import('../dashboard/routes/DashboardRoutes').then(module => ({
    default: module.default
  }))
);

const AppContent: React.FC = () => {
  const location = useLocation();
  const isMobile = window.innerWidth <= 768;
  const isConfiguratorRoute = location.pathname === '/' || 
                             location.pathname.includes('/configurator') ||
                             location.pathname.includes('/vulz');  // Add vulz to check
  const isDashboardRoute = location.pathname.startsWith('/dashboard');

  useEffect(() => {
    pageView(location.pathname + location.search);
  }, [location]);

  if (isMobile && isConfiguratorRoute) {
    return <MobileWarning />;
  }

  if (isDashboardRoute) {
    return (
      <Routes>
        <Route path="/dashboard/*" element={
          <React.Suspense fallback={<div className="loading-placeholder" />}>
            <DashboardRoutes />
          </React.Suspense>
        } />
      </Routes>
    )
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          {/* Default route - goes straight to configurator */}
          <Route 
            path="/" 
            element={
              <React.Suspense fallback={<div className="loading-placeholder" />}>
                <ConfiguratorPage />
              </React.Suspense>
            } 
          />
          
          {/* Other routes */}
          <Route 
            path="/configurator" 
            element={
              <React.Suspense fallback={<div className="loading-placeholder" />}>
                <ConfiguratorPage />
              </React.Suspense>
            } 
          />
          <Route 
            path="/supplier" 
            element={
              <React.Suspense fallback={<div className="loading-placeholder" />}>
                <SupplierConfigurator />
              </React.Suspense>
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
              <React.Suspense fallback={<div className="loading-placeholder" />}>
                <VulzConfigurator />
              </React.Suspense>
            } 
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route 
            path="/success" 
            element={
              <React.Suspense fallback={<div className="loading-placeholder" />}>
                <Success />
              </React.Suspense>
            } 
          />
          <Route 
            path="/cancel" 
            element={
              <React.Suspense fallback={<div className="loading-placeholder" />}>
                <Cancel />
              </React.Suspense>
            } 
          />
          <Route path="/callback" element={<Navigate to="/" replace />} />         
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

console.log('App: Runtime check:', {
  MyDesigns: MyDesigns,
  importedCorrectly: MyDesigns !== undefined,
  paths: {
    myDesigns: require.resolve('@shared/components/MyDesigns/MyDesigns'),
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