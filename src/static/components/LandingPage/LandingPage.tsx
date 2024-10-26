import React from 'react';
import { Link } from 'react-router-dom';
import { Title, Text, Button, Stack } from '@mantine/core';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="text-container">
          <h1 className="main-title">3D design, made simple</h1>
          <div className="subtitle-container">
            <span className="subtitle">And ready for production - all in one platform</span>
          </div>
          <span className="version-text">Beta V0.1</span>
        </div>
        {/* Space for future image */}
        <div className="image-placeholder"></div>
        <Link to="/configurator" className="design-button">
          Design Now
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
