// This ensures identical layout across static and dynamic
import React from 'react';
import { Header, Footer } from '..';
import '../../../shared/styles/global.css';  // Use existing styles

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};
