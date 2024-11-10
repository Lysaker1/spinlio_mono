// Get all the tools we need to build our app
import React, { lazy, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { theme } from '../../../shared/theme';
import { Footer, Header } from '../../../shared/components';
import { AboutPage } from '../../../static/components';
import { ContactUsPage } from '..';
import ErrorBoundary from '../../../shared/components/ErrorBoundary/ErrorBoundary';

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

const App: React.FC = () => {
  // Figure out where we are on the internet
  const hostname = window.location.hostname;  // Like checking which building we're in
  const isDevelopment = process.env.NODE_ENV === 'development';  // Are we testing or for real?
  const port = window.location.port;  // Which door are we using?
  
  // This is like a bouncer that decides which room to let you into
  const getMainComponent = useCallback(() => {
    // If we're in testing mode (development)
    if (isDevelopment) {
      if (port === '3001') {
        // Check for supplier route first
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
        <Router>  {/* This handles all the page navigation */}
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
                <Route path="/configurator" element={getMainComponent()} />
                <Route path="/contact" element={getMainComponent()} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<Navigate to="/" />} />  {/* If lost, go home */}
              </Routes>
            </main>
            <Footer />  {/* The bottom bar */}
          </div>
        </Router>
      </MantineProvider>
    </ErrorBoundary>
  );
};

export default App;
