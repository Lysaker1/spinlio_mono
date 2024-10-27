import React, { lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { theme } from '../../../shared/theme';
import { Footer, Header } from '../../../shared/components';
import { AboutPage } from '../../../static/components';
import { ContactUsPage } from '../';
import ErrorBoundary from '../../../shared/components/ErrorBoundary/ErrorBoundary';

// Lazy load the main pages
const ConfiguratorPage = lazy(() => 
  import('../ConfiguratorPage').then(module => ({
    default: module.default
  }))
);

const App: React.FC = () => {
  const hostname = window.location.hostname;
  const isDevelopment = process.env.NODE_ENV === 'development';
  const port = window.location.port;
  
  // Helper function to determine which component to show
  const getMainComponent = () => {
    if (isDevelopment) {
      // In development, use port to determine component
      if (port === '3001') {
        const path = window.location.pathname;
        if (path.includes('/contact')) return <ContactUsPage />;
        return <ConfiguratorPage />;
      }
      return <Navigate to="http://localhost:3000" />;
    }
    
    // Production logic
    if (hostname === 'configurator.spinlio.com') return <ConfiguratorPage />;
    if (hostname === 'contact.spinlio.com') return <ContactUsPage />;
    return <Navigate to="https://spinlio.com" />;
  };

  // Prefetch critical ShapeDiver dependencies
  const prefetchShapeDiver = () => {
    // Prefetch ShapeDiver and Three.js dependencies
    import('@shapediver/viewer').catch(() => {});
    import('@shapediver/viewer.features.attribute-visualization').catch(() => {});
    import('three').catch(() => {});
  };

  useEffect(() => {
    // Remove initial loader once app is mounted
    const loader = document.getElementById('initial-loader');
    if (loader) {
      // Fade out loader
      loader.style.transition = 'opacity 0.5s';
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 500);
    }

    // Prefetch if we're on configurator
    if (window.location.hostname === 'configurator.spinlio.com' || 
        (process.env.NODE_ENV === 'development' && window.location.port === '3001')) {
      prefetchShapeDiver();
    }
  }, []);

  return (
    <ErrorBoundary>
      <MantineProvider theme={theme}>
        <Router>
          <div className="app">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={
                  <React.Suspense fallback={
                    <div className="loading-placeholder">
                      {/* Your custom loading GIF is already showing from index.html */}
                    </div>
                  }>
                    {getMainComponent()}
                  </React.Suspense>
                } />
                <Route path="/configurator" element={getMainComponent()} />
                <Route path="/contact" element={getMainComponent()} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </MantineProvider>
    </ErrorBoundary>
  );
};

export default App;
