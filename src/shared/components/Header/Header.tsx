import React from 'react';
import './Header.css';
import AuthButton from '../AuthButton/AuthButton';

const Header: React.FC = () => {
  // Define base URLs
  const MAIN_URL = 'https://www.spinlio.com';
  const DESIGN_URL = 'https://design.spinlio.com';

  // Get current hostname to determine if we're on design or main site
  const isDesignSite = window.location.hostname.includes('design');

  // Handle logo click - always go to main site when clicked
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default behavior
    window.location.href = MAIN_URL; // Always redirect to main site
  };

  return (
    <header className="header">
      <div className="header-content">
        <a
          href={MAIN_URL}  // Always set to main URL
          className="logo"
          onClick={handleLogoClick}
        >
          spinlio
        </a>
        <nav className="nav-links">
          <a href={`${MAIN_URL}/about`}>About</a>
          <a href={`${MAIN_URL}/contact1`}>Contact us</a>
          <AuthButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
