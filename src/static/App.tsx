import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { theme } from '../shared/theme';
import { Header, Footer } from '../shared/components';
import { LandingPage, AboutPage, ConfiguratorTemplate } from './components';
import ErrorBoundary from '../shared/components/ErrorBoundary/ErrorBoundary';

const AppContent: React.FC = () => {
  useEffect(() => {
    // Debug image loading
    const img = new Image();
    img.src = 'https://res.cloudinary.com/da8qnqmmh/image/upload/v1730055768/background_final_last_dm9bl2.pn';
    img.onload = () => console.log('Background loaded');
    img.onerror = (e) => console.error('Background failed to load:', e);
  }, []);

  useEffect(() => {
    console.log('Static App: Background should be loaded from cache');
    const img = new Image();
    img.src = 'https://res.cloudinary.com/da8qnqmmh/image/upload/v1730055768/background_final_last_dm9bl2.png';
    img.onload = () => console.log('Static App: Background loaded');
    img.onerror = (e) => console.error('Static App: Background failed:', e);
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/configurator" element={<ConfiguratorTemplate />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

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

export default App;
