// Get all the tools we need to build our app
import React, { lazy, useEffect, useCallback, useMemo } from 'react';
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

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <MantineProvider theme={theme}>
        <Router>
          <AppContent />
        </Router>
      </MantineProvider>
    </ErrorBoundary>
  );
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const isMobile = window.innerWidth <= 768;
  const isConfiguratorRoute = location.pathname === '/' || 
                             location.pathname.includes('/configurator');

  useEffect(() => {
    pageView(location.pathname + location.search);
  }, [location]);

  // If on mobile and trying to access configurator, show warning
  if (isMobile && isConfiguratorRoute) {
    return <MobileWarning />;
  }

  // Figure out where we are on the internet
  const hostname = window.location.hostname;  // Like checking which building we're in
  const isDevelopment = process.env.NODE_ENV === 'development';  // Are we testing or for real?
  const port = window.location.port;  // Which door are we using?
  
  // Add this new function to check if we're on a configurator page
  const isConfiguratorPage = useMemo(() => {
    const isDesignDomain = hostname === 'design.spinlio.com';
    const isDesignLocal = isDevelopment && port === '3001';
    return isDesignDomain || isDesignLocal;
  }, [hostname, isDevelopment, port]);

  // Add this effect to handle scrolling
  useEffect(() => {
    if (isConfiguratorPage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isConfiguratorPage]);
  
  // This is like a bouncer that decides which room to let you into
  const getMainComponent = useCallback(() => {
    // If we're in testing mode (development)
    if (isDevelopment) {
      if (port === '3001') {
        // Check for vulz route first
        if (window.location.pathname.includes('/vulz')) {
          return <VulzConfigurator />;
        }
        // Check for supplier route
        if (window.location.pathname.includes('/supplier')) {
          return <SupplierConfigurator />;
        }
        // Then check for contact route
        if (window.location.pathname.includes('/contact')) {
          return <ContactUsPage />;
        }
        // Default to configurator
        return <ConfiguratorPage key="configurator" />;
      }
      return <Navigate to="http://localhost:3000" replace />;
    }
    
    // If we're live on the internet:
    if (hostname === 'design.spinlio.com') {
      if (window.location.pathname.includes('/vulz')) {
        return <VulzConfigurator />;
      }
      if (window.location.pathname.includes('/supplier')) {
        return <SupplierConfigurator />;
      }
      return <ConfiguratorPage key="configurator" />;
    }
    if (hostname === 'contact.spinlio.com') return <ContactUsPage />;
    return <Navigate to="https://spinlio.com" replace />;
  }, [isDevelopment, hostname, port]);

  // This is like pre-downloading stuff we know we'll need later
  const prefetchShapeDiver = () => {
    // Get the 3D viewer stuff ready in the background
    import('@shapediver/viewer').catch(() => {});
    import('@shapediver/viewer.features.attribute-visualization').catch(() => {});
    import('three').catch(() => {});
  };

  // When the app first opens:
  useEffect(() => {
    // Get rid of the loading screen
    const loader = document.getElementById('initial-loader');
    if (loader) {
      loader.style.transition = 'opacity 0.5s';  // Fade it out nicely
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 500);  // Remove after half a second
    }

    // If we're on the bike configurator page, get the 3D stuff ready
    if (window.location.hostname === 'design.spinlio.com' || 
        (process.env.NODE_ENV === 'development' && window.location.port === '3001')) {
      prefetchShapeDiver();
    }
  }, []);

  // Here's what actually shows on the screen
  return (
    <ErrorBoundary>  {/* This catches any oopsies */}
      <MantineProvider theme={theme}>  {/* This makes everything look pretty */}
        <div className="app">
          <Header />  {/* The top bar */}
          <main className="main-content">
            <Routes>  {/* This is like a map of our website */}
              <Route 
                path="/" 
                element={
                  <React.Suspense fallback={<div className="loading-placeholder" />}>
                    {getMainComponent()}  {/* Show the right page */}
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
              <Route path="/configurator" element={getMainComponent()} />
              <Route path="/contact" element={getMainComponent()} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<Navigate to="/" />} />  {/* If lost, go home */}
            </Routes>
          </main>
          {!isConfiguratorPage && <Footer />}
        </div>
      </MantineProvider>
      <Toaster position="top-right" />
    </ErrorBoundary>
  );
};

export default App;
