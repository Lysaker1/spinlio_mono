// Import required React hooks and components
import React, { useState, Suspense, lazy, useRef, useEffect, useCallback } from 'react';
// Import Modal component from Mantine UI library
import { Modal } from '@mantine/core';
// Import ShapeDiver viewer interfaces
import { ISessionApi, IViewportApi } from '@shapediver/viewer';
// Import component styles
import './ConfiguratorPage.css';
// Import error boundary component for error handling
import ErrorBoundary from '../../../shared/components/ErrorBoundary/ErrorBoundary';
// Import navigate function from react-router-dom
import { useNavigate } from 'react-router-dom';

// Import main component dependencies
import { ParameterPanel } from './components/ParameterPanel';
import ShapeDiverViewer from './components/ShapeDiverViewer';
import ShareButton from './components/Share/ShareButton';
import SupplierButton from './components/SupplierButton/SupplierButton';
import Sidebar from './components/Sidebar/Sidebar';

// Main configurator component definition
const ConfiguratorPage: React.FC = () => {
  // State for tracking selected component in the configurator
  const [selectedComponent, setSelectedComponent] = useState<string>('');
  // State for managing ShapeDiver session
  const [session, setSession] = useState<ISessionApi | null>(null);
  // State for managing ShapeDiver viewport
  const [viewport, setViewport] = useState<IViewportApi | null>(null);
  // State for storing QR code URL for AR view
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  // State for controlling QR modal visibility
  const [showQrModal, setShowQrModal] = useState(false);
  
  // Reference to track component mount state
  const isMounted = useRef(true);

  // Add navigate function
  const navigate = useNavigate();

  // Effect hook for debugging component lifecycle and state changes
  useEffect(() => {
    // Log when component mounts
    console.log('ConfiguratorPage: Mounting');
    
    // Create debug state object with current state values
    const debugState = {
      session: !!session,
      viewport: !!viewport,
      selectedComponent,
      isMobile: window.innerWidth <= 768
    };
    
    // Log current state for debugging
    console.log('ConfiguratorPage: Current State:', debugState);

    // Cleanup function when component unmounts
    return () => {
      console.log('ConfiguratorPage: Unmounting');
    };
  }, [session, viewport, selectedComponent]);


  // Add handler for template selection
  const handleTemplateSelect = useCallback((templateId: string) => {
    // This will be implemented later to load specific parameters
    console.log(`Loading template: ${templateId}`);
    // Example of what we might do:
    // if (session) {
    //   session.parameters.updateMany({
    //     'template1_param': templateId === 'bike1' ? 'value1' : 'default',
    //     'template2_param': templateId === 'bike2' ? 'value2' : 'default',
    //     // ... more parameters
    //   });
    // }
  }, [/* session */]);

  // Component render
  return (
    // Wrap entire component in error boundary
    <ErrorBoundary>
      <div className="configurator-page">
        <Sidebar onTemplateSelect={handleTemplateSelect} />
        
        {/* Share button container */}
        <div className="share-button-container-configurator">
          <ShareButton session={session} viewport={viewport} />
        </div>

        {/* Main content container */}
        <div className="configurator-content">
          {/* 3D viewer container */}
          <div className="viewer-container">
            <Suspense fallback={null}>
              <ShapeDiverViewer
                session={session}
                setSession={setSession}
                setViewport={setViewport}
              />
            </Suspense>
          </div>
          
          {/* Parameter panel container */}
          <div className="parameter-panel-container">
            <Suspense fallback={null}>
              <ParameterPanel
                selectedComponent={selectedComponent}
                session={session}
                viewport={viewport}
              />
            </Suspense>
          </div>
        </div>

        {/* QR Code Modal */}
        <Modal
          opened={showQrModal}
          onClose={() => setShowQrModal(false)}
          title="AR QR Code"
        >
          {/* Conditionally render QR code image when URL exists */}
          {qrCodeUrl && (
            <img 
              src={qrCodeUrl} 
              alt="AR QR Code" 
              style={{ width: '100%' }} 
            />
          )}
        </Modal>
      </div>
    </ErrorBoundary>
  );
};

// Export component as default
export default ConfiguratorPage;