import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { theme } from '../../../shared/theme';
import { Footer, Header } from '../../../shared/components';
import { AboutPage } from '../../../static/components';
import { ConfiguratorPage, ContactUsPage } from '../';

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

  return (
    <MantineProvider theme={theme}>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={getMainComponent()} />
            <Route path="/configurator" element={getMainComponent()} />
            <Route path="/contact" element={getMainComponent()} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </MantineProvider>
  );
};

export default App;
