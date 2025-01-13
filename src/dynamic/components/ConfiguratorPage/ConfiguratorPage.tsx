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
import { useNavigate, useLocation } from 'react-router-dom';
// Import panel settings component
// import { PanelSettings } from './components/ParameterPanel/components/PanelSettings/PanelSettings';

// Import main component dependencies
import { ParameterPanel } from './components/ParameterPanel';
import ShapeDiverViewer from './components/ShapeDiverViewer';
import ShareButton from './components/Share/ShareButton';
import SupplierButton from './components/SupplierButton/SupplierButton';
import Sidebar from './components/Sidebar/Sidebar';
import { bikeTemplates, BikeTemplate } from './components/Sidebar';
import { MODEL_ID } from './components/Sidebar/bikeTemplates';
import { SaveDesignButton } from '../../../shared/components/SaveDesignButton/SaveDesignButton';
import { DesignStorageService } from '@shared/services/designStorage';
import { MyDesigns } from '../../../shared/components/MyDesigns/MyDesigns';
import { CONFIGURATOR_TYPES } from '../../../shared/constants/configuratorTypes';


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
  // State for controlling frame visibility
  const [showOnlyFrame, setShowOnlyFrame] = useState(false);
  // State for controlling dimensions visibility
  const [showDimensions, setShowDimensions] = useState(false);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const [shareMenuHeight, setShareMenuHeight] = useState<number>(15);
  
  // Reference to track component mount state
  const isMounted = useRef(true);

  // Add navigate function
  const navigate = useNavigate();
  const location = useLocation();

  // Add new state for parameter values
  const [parameterValues, setParameterValues] = useState<Record<string, string>>({});

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

  // Update padding when share menu opens/closes
  useEffect(() => {
    const defaultPadding = 15; // vh units
    const menuHeight = isShareMenuOpen ? shareMenuHeight : 0;
    const padding = Math.min(defaultPadding + menuHeight, 30); // Cap maximum padding
    document.documentElement.style.setProperty('--panel-top-padding', `${padding}vh`);
  }, [isShareMenuOpen, shareMenuHeight]);

  // Handle template selection
  const handleTemplateSelect = useCallback(async (template: BikeTemplate) => {
    if (!session) return;

    try {
      setIsLoading(true);
      
      if (viewport) {
        const token = viewport.addFlag(FLAG_TYPE.BUSY_MODE);
        try {
          await session.customize(template.parameters, true);
          
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
      console.error('Template loading error:', error);
    } finally {
      setIsLoading(false);
    }
  }, [session, viewport]);



  // Effect hook for updating CSS custom property when height changes
  useEffect(() => {
    // Update CSS custom property when height changes
    document.documentElement.style.setProperty('--share-menu-height', `${shareMenuHeight}vh`);
  }, [shareMenuHeight]);

  const handlePrefabSelect = useCallback(async (prefab: BikeTemplate) => {
    if (!session) return;

    try {
      const token = viewport?.addFlag(FLAG_TYPE.BUSY_MODE);
      
      // Update all parameters at once instead of one by one
      await session.customize(prefab.parameters);
      
      if (session.node && viewport) {
        await viewport.updateNode(session.node);
        viewport.update();
        viewport.render();
      }
      
      if (token) viewport?.removeFlag(token);
    } catch (error) {
      console.error('Error applying prefab:', error);
    }
  }, [session, viewport]);

  const handleDesignSelect = useCallback(async (parameters: Record<string, any>) => {
    if (!session) return;

    try {
      const token = viewport?.addFlag(FLAG_TYPE.BUSY_MODE);
      
      // Update all parameters at once
      await session.customize(parameters);
      
      if (session.node && viewport) {
        await viewport.updateNode(session.node);
        viewport.update();
        viewport.render();
      }
      
      if (token) viewport?.removeFlag(token);
    } catch (error) {
      console.error('Error loading saved design:', error);
    }
  }, [session, viewport]);

  useEffect(() => {
    if (location.state?.designParameters && session && viewport) {
      handleDesignSelect(location.state.designParameters);
    }
  }, [session, viewport, location.state]);

  // Component render
  return (
    // Wrap entire component in error boundary
    <ErrorBoundary>
      <div className="configurator-page">
        <Sidebar
          onTemplateSelect={handleTemplateSelect}
          onDesignSelect={handleDesignSelect}
          session={session}
          configuratorType="default"
        >
          <MyDesigns 
            onSelect={handleDesignSelect} 
            currentConfiguratorType={CONFIGURATOR_TYPES.DEFAULT}
          />
        </Sidebar>
        
        {/* Share button container */}
        <div className="top-right-buttons">
          <SaveDesignButton 
            getCurrentParameters={() => session?.parameterValues || {}}
            configuratorType={CONFIGURATOR_TYPES.DEFAULT}
          />
          <ShareButton 
            session={session} 
            viewport={viewport}
            onMenuOpen={setIsShareMenuOpen}
            onMenuHeightChange={setShareMenuHeight}
          />
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
          <div className={`parameter-panel-container ${isShareMenuOpen ? 'share-open' : ''}`}>
            <Suspense fallback={null}>
              <ParameterPanel
                  key={JSON.stringify(session?.parameterValues)}
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