import React, { useState, Suspense, lazy, useRef, useEffect, useCallback } from 'react';
import { Modal } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { ISessionApi, IViewportApi, FLAG_TYPE } from '@shapediver/viewer';
import './ConfiguratorPage.css';

const ParameterPanel = lazy(() => import('./components/ParameterPanel'));
const ExportMenu = lazy(() => import('./components/ExportMenu'));


// Lazy load ShapeDiverViewer
const ShapeDiverViewer = React.lazy(() => 
  import('./components/ShapeDiverViewer').then(module => ({
    default: module.default
  }))
);

// Loading spinner component
const LoadingSpinner: React.FC = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
    <p>Loading 3D Viewer...</p>
  </div>
);

const ConfiguratorPage: React.FC = () => {
  const navigate = useNavigate();
const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);

  // These are like memory boxes that can hold and change values:
  const [selectedComponent, setSelectedComponent] = useState<string>('');
  const [session, setSession] = useState<ISessionApi | null>(null);     // Added proper typing
  const [viewport, setViewport] = useState<IViewportApi | null>(null);  // Added proper typing
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  
  // This is like a sticky note that remembers if our page is still showing
  const isMounted = useRef(true);

  // This is like a cleanup crew that runs when we leave the page
  useEffect(() => {
    // When leaving the page:
    return () => {
      isMounted.current = false;           // Mark that we're leaving
      if (session) {
        session.close();                   // Clean up the 3D viewer session
      }
    };
  }, [session]);

  // This is a function that handles clicking the export button
  const handleExportClick = useCallback(() => {
    setShowExportMenu(prev => !prev);
  }, []);

  return (
    <div className="configurator-page">
      <div className="share-button-container-configurator">
        <button className="share-button-configurator" onClick={handleExportClick}>
          Share
        </button>
        {showExportMenu && (
          <div className="export-menu-wrapper">
            <ExportMenu
              session={session}
              viewport={viewport}
              onClose={() => setShowExportMenu(false)}
            />
          </div>
        )}
      </div>

      <div className="configurator-content">
        <div className="viewer-container">
          <Suspense fallback={<LoadingSpinner />}>
            <ShapeDiverViewer
              session={session}
              setSession={setSession}
              setViewport={setViewport}
            />
          </Suspense>
        </div>
        <div className="parameter-panel-container">
          <ParameterPanel
            selectedComponent={selectedComponent}
            session={session}
            viewport={viewport}
          />
        </div>
      </div>

      <Modal
        opened={showQrModal}
        onClose={() => setShowQrModal(false)}
        title="AR QR Code"
      >
        {qrCodeUrl && <img src={qrCodeUrl} alt="AR QR Code" style={{ width: '100%' }} />}
      </Modal>
    </div>
  );
};

export default ConfiguratorPage;
