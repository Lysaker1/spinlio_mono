import React, { useEffect } from 'react';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  const configuratorUrl = 'https://design.spinlio.com';

  useEffect(() => {
    // Prefetch critical configurator resources when landing page is idle
    const prefetchConfigurator = () => {
      const criticalBundles = [
        '/vendors.bundle.js',
        '/framework.bundle.js',
        '/main.bundle.js',
        '/shapediver.chunk.js',
        '/three.chunk.js'
      ];
      
      criticalBundles.forEach(bundle => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'script';
        link.href = `${configuratorUrl}${bundle}`;  // Add configurator URL
        document.head.appendChild(link);
      });
    };

    // Use requestIdleCallback to not impact landing page performance
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => prefetchConfigurator());
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(prefetchConfigurator, 1000);
    }
  }, []);

  const handleDesignClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Store a flag that we're coming from landing
    sessionStorage.setItem('from_landing', 'true');
    window.location.href = configuratorUrl;
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="text-container">
          <h1 className="main-title">3D Design - Made Simple</h1>
          <div className="subtitle-container">
            <span className="subtitle">Beta V0.1</span>
          </div>
        </div>
        <a href={configuratorUrl} 
           onClick={handleDesignClick} 
           className="design-button">
          Design Now
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
