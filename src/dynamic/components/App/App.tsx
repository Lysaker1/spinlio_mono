import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { theme } from '../../../shared/theme';
import { Footer, Header } from '../../../shared/components';
import { ConfiguratorPage, ContactUsPage } from '../';

const App: React.FC = () => {
  return (
    <MantineProvider theme={theme}>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/configurator" element={<ConfiguratorPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/" element={<Navigate to="/configurator" replace />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </MantineProvider>
  );
};

export default App;
