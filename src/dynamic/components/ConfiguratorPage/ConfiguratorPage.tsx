import React, { useState, Suspense, lazy } from 'react';
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
  const [selectedComponent, setSelectedComponent] = useState<string>('');
  const [session, setSession] = useState<ISessionApi | null>(null);
  const [viewport, setViewport] = useState<IViewportApi | null>(null);
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  const [showQrModal, setShowQrModal] = useState(false);

  const handleExportClick = () => {
    setShowExportMenu(!showExportMenu);
  };

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