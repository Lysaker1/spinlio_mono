import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { theme } from '../shared/theme';
import { Header, Footer } from '../shared/components';
import { LandingPage, AboutPage } from './components';

const AppContent: React.FC = () => {
  useEffect(() => {
    // Debug image loading
    const img = new Image();
    img.src = '/images/background_final_last.png';
    img.onload = () => console.log('Background loaded');
    img.onerror = (e) => console.error('Background failed to load:', e);
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <MantineProvider theme={theme}>
      <Router>
        <AppContent />
      </Router>
    </MantineProvider>
  );
};

export default App;