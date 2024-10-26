import React, { useState } from 'react';
import ShapeDiverViewer from './components/ShapeDiverViewer';
import ParameterPanel from './components/ParameterPanel';
import ExportMenu from './components/ExportMenu';
import { Modal } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { ISessionApi, IViewportApi, FLAG_TYPE } from '@shapediver/viewer';
import './ConfiguratorPage.css';


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
      {/* Share Button */}
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
          <ShapeDiverViewer
            session={session}
            setSession={setSession}
            setViewport={setViewport}
          />
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
