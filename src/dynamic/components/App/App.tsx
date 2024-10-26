import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
            <Route path="/" element={<ConfiguratorPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </MantineProvider>
  );
};

export default App;
