import React from 'react';
import './MobileWarning.css';

const MobileWarning: React.FC = () => {
  return (
    <div className="mobile-warning">
      <div className="mobile-warning-content">
        <h2>Desktop Version Recommended</h2>
        <p>
          If you are reading this, we are still working on optimizing our app for mobile devices. 
          For the best experience, please use a desktop computer or an Ipad or Vision Pro.
        </p>
        <p className="coming-soon">
          Mobile version coming soon!
        </p>
      </div>
    </div>
  );
};

export default MobileWarning;