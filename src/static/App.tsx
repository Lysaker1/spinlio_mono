import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { theme } from '../shared/theme';
import { Header, Footer } from '../shared/components';
import { LandingPage, AboutPage, ConfiguratorTemplate } from './components';
import ErrorBoundary from '../shared/components/ErrorBoundary/ErrorBoundary';

const AppContent: React.FC = () => {
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