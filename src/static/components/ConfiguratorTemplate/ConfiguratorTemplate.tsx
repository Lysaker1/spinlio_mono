// This lives in the STATIC build (Netlify)
import React, { useEffect } from 'react';
import './ConfiguratorTemplate.css';
import { Header, Footer } from '../../../shared/components';


const ConfiguratorTemplate: React.FC = () => {
  useEffect(() => {
    console.log('ConfiguratorTemplate: Mounted');
    return () => console.log('ConfiguratorTemplate: Unmounted');
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="configurator-template">
        <div className="share-button-container-configurator">
          <button className="share-button-configurator" disabled>
            Share
          </button>
        </div>

        <div className="configurator-content">
          <div className="viewer-container">
            <div className="viewer-placeholder">
              <img 
                src="https://res.cloudinary.com/da8qnqmmh/image/upload/e_make_transparent:10/v1729757636/BIKE_qa0p3v.gif" 
                alt="Loading" 
                className="loading-gif"
              />
            </div>
          </div>
          <div className="parameter-panel-placeholder">
            <div className="panel-skeleton" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConfiguratorTemplate;
