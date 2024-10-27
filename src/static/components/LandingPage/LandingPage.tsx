import React, { useEffect } from 'react';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  const configuratorUrl = 'https://configurator.spinlio.com';

  useEffect(() => {
    // Keep landing page fast by loading configurator stuff AFTER page is ready
    window.addEventListener('load', () => {
      // Start preloading the configurator bundles in background
      const bundles = [
        '/main.bundle.js',
        '/vendor.react.bundle.js', 
        '/vendor.react-dom.bundle.js'
      ];
      
      bundles.forEach(bundle => {
        const link = document.createElement('link');
        link.rel = 'prefetch'; // Use prefetch instead of preload to not block
        link.as = 'script';
        link.href = bundle;
        document.head.appendChild(link);
      });
    });
  }, []);

  // Landing page renders instantly, preloading happens in background
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
        <div className="image-placeholder"></div>
        <a href={configuratorUrl} className="design-button">
          Design Now
        </a>
      </div>
    </div>
  );
};

export default LandingPage;