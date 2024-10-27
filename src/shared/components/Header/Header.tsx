import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  const hostname = window.location.hostname;
  const port = window.location.port;
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  // Helper function to determine the correct home URL
  const getHomeUrl = () => {
    if (isDevelopment) {
      if (port === '3001') {
        return 'http://localhost:3000';
      }
      return '/';
    }
    
    // Production logic
    if (hostname.includes('configurator.') || hostname.includes('contact.')) {
      return 'https://spinlio.com';
    }
    return '/';
  };

  // Helper function to determine the correct contact URL
  const getContactUrl = () => {
    if (isDevelopment) {
      return 'http://localhost:3001/contact';
    }
    return 'https://contact.spinlio.com';
  };

  return (
    <header className="header">
      <div className="header-content">
        <a href={getHomeUrl()} className="logo">
          spinlio
        </a>
        <nav className="nav-links">
          <a href="/about">About</a>
          <a href={getContactUrl()}>Contact us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
