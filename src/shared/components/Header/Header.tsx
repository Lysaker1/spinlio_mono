import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  // Remove all environment and hostname checks
  // Just hardcode all production URLs
  const getHomeUrl = () => 'https://spinlio.com';
  const getContactUrl = () => 'https://contact.spinlio.com';

  return (
    <header className="header">
      <div className="header-content">
        <a href={getHomeUrl()} className="logo">
          spinlio
        </a>
        <nav className="nav-links">
          <a href={`${getHomeUrl()}/about`}>About</a>
          <a href={getContactUrl()}>Contact us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
