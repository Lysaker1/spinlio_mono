import React, { useEffect } from 'react';
import './LandingPage.css';

// Polyfill for requestIdleCallback
const requestIdleCallbackPolyfill = window.requestIdleCallback || 
  ((cb) => setTimeout(cb, 1));

const LandingPage: React.FC = () => {
  const hostname = window.location.hostname;
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  // Fix the configurator URL logic
  const configuratorUrl = isDevelopment 
    ? 'http://localhost:3001/configurator'
    : 'https://configurator.spinlio.com';  // This is correct but not being used in production!

  useEffect(() => {
    let linkElement: HTMLLinkElement | null = null;

    window.addEventListener('load', () => {
      requestIdleCallbackPolyfill(() => {
        linkElement = document.createElement('link');
        linkElement.rel = 'preload';
        linkElement.as = 'fetch';
        linkElement.href = configuratorUrl;
        document.head.appendChild(linkElement);
      });
    });

    return () => {
      if (linkElement) {
        document.head.removeChild(linkElement);
      }
    };
  }, [configuratorUrl]);

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
        <a href={configuratorUrl} className="design-button">
          Design Now
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
