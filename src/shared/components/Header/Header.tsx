import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <a href="/" className="logo">
          spinlio
        </a>
        <nav className="nav-links">
          <a href="/about">About</a>
          <a href="https://contact.spinlio.com">Contact us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
