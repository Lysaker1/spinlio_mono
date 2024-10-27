import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Title, Text, Button, Stack } from '@mantine/core';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleDesignClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = '/configurator';
  };

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
        <a href="/configurator" onClick={handleDesignClick} className="design-button">
          Design Now
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
