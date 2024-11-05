// Import required React hooks and components
import React, { useState, Suspense, lazy, useRef, useEffect, useCallback } from 'react';
// Import Modal component from Mantine UI library
import { Modal } from '@mantine/core';
// Import ShapeDiver viewer interfaces
import { ISessionApi, IViewportApi, FLAG_TYPE } from '@shapediver/viewer';
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
import { bikeTemplates, BikeTemplate } from './components/Sidebar';
import { MODEL_ID } from './components/Sidebar/bikeTemplates';


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
  // State for controlling loading state
  const [isLoading, setIsLoading] = useState(false);
  
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
  const handleTemplateSelect = useCallback(async (templateId: string) => {
    console.log('handleTemplateSelect called with:', templateId);
    
    const template = bikeTemplates.find(t => t.id === templateId);
    console.log('Found template:', template);
    
    if (!template || !session) {
      console.log('Early return - template or session missing:', { template, hasSession: !!session });
      return;
    }

    try {
      setIsLoading(true);
      console.log('Loading template:', {
        templateId,
        parameters: template.parameters
      });

      if (viewport) {
        const token = viewport.addFlag(FLAG_TYPE.BUSY_MODE);
        try {
          // Use customize() to update all parameters at once
          await session.customize(template.parameters, true);
          
          // Update the viewport
          if (session.node) {
            await viewport.updateNode(session.node);
            viewport.update();
            viewport.render();
          }
        } finally {
          viewport.removeFlag(token);
        }
      }
    } catch (error) {
      console.error('Template loading error:', {
        template,
        error: error instanceof Error ? error.message : error,
        currentParameters: session.parameterValues
      });
    } finally {
      setIsLoading(false);
    }
  }, [session, viewport]);

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
                isLoading={isLoading}
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

export default ConfiguratorPage;