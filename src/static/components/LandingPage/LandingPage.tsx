import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Title, Text, Button, Stack } from '@mantine/core';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleDesignClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      // Always use Heroku URL in production
      const baseUrl = 'https://spinlio-dynamic-e31fcb8098e8.herokuapp.com';
      
      console.log('Fetching from:', baseUrl); // Debug log
      
      const response = await fetch(`${baseUrl}/configurator`, {
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      navigate('/configurator');
    } catch (error) {
      console.error('Failed to load configurator:', error);
    }
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
