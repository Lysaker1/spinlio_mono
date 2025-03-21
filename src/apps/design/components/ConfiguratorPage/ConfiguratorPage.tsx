// Import required React hooks and components
import React, { useState, Suspense, lazy, useRef, useEffect, useCallback } from 'react';
// Import Modal component from Mantine UI library
import { Modal } from '@mantine/core';
// Import ShapeDiver viewer interfaces
import { ISessionApi, IViewportApi, FLAG_TYPE } from '@shapediver/viewer';

// Import error boundary component for error handling
import { ErrorBoundary } from 'react-error-boundary';
// Import navigate function from react-router-dom
import { useNavigate, useLocation } from 'react-router-dom';
// Import panel settings component

// Import main component dependencies
import { ParameterPanel } from './components/ParameterPanel';
import ShapeDiverViewer from './components/ShapeDiverViewer';
import Sidebar from './components/Sidebar/Sidebar';
import { BikeTemplate } from './components/Sidebar/bikeTemplates';
import MyDesigns from './components/Sidebar/Sections/MyDesigns';
import { CONFIGURATOR_TYPES } from '@shared/constants/configuratorTypes';
import Header from './components/Header/Header';
import { BuyButton } from '../BuyButton/BuyButton';
import LoginModal from './components/LoginModal/LoginModal';

// Main configurator component definition
const ConfiguratorPage: React.FC<{ isAuthenticated: boolean }> = ({ isAuthenticated }) => {
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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

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

  useEffect(() => {
    if (isTransitioning) {
      return () => {
        if (session) {
          session.close();
          setSession(null);
        }
        if (viewport) {
          viewport.close();
          setViewport(null);
        }
      };
    }
  }, [isTransitioning, session, viewport]);

  const handleConfiguratorClick = () => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
    } else {
      setShowLoginModal(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      setShowLoginModal(false);
    }
  }, [isAuthenticated]);

  // Component render
  return (
    // Wrap entire component in error boundary
    <ErrorBoundary fallbackRender={({ error }) => (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
          <h2 className="text-xl font-bold mb-4">Something went wrong</h2>
          <p className="text-gray-700 mb-4">{error.message}</p>
        </div>
      </div>
    )}>
      <Header session={session} viewport={viewport} configuratorType={CONFIGURATOR_TYPES.DEFAULT} />
      <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] grid-areas-[sidebar_header_sidebar_viewer_sidebar_panel] h-screen overflow-hidden fixed w-full top-0 left-0">
        <Sidebar
          onTemplateSelect={handleTemplateSelect}
          onDesignSelect={handleDesignSelect}
          session={session}
          setSession={setSession}
          viewport={viewport}
          setViewport={setViewport}
          configuratorType="default"
        >
          <MyDesigns 
            onSelect={handleDesignSelect} 
            currentConfiguratorType={CONFIGURATOR_TYPES.DEFAULT}
            showLoginModal={showLoginModal}
            setShowLoginModal={setShowLoginModal}
          />
        </Sidebar>
        
        {/* Main content container */}
        <div className="flex h-screen w-screen relative">
          {/* 3D viewer container */}
          <div className="w-full h-screen flex justify-center items-center overflow-hidden" onClick={() => handleConfiguratorClick()}>
            <Suspense fallback={null}>
              <LoginModal opened={showLoginModal} setOpened={setShowLoginModal} />
              <ShapeDiverViewer
                session={session}
                setSession={setSession}
                setViewport={setViewport} 
                isLoading={isLoading}
                isTransitioning={isTransitioning}
              />
            </Suspense>
          </div>
            {/* Parameter panel container */}
            {isAuthenticated && (
            <div className={`fixed flex flex-col gap-2 h-screen bottom-0 top-0 right-0 pr-2 pb-2 pt-20 w-80 rounded-3xl transition-transform duration-500 ease-in-out`}>
              <div className='flex-1 overflow-hidden'>
                <Suspense fallback={null}>
                  <ParameterPanel
                      key={JSON.stringify(session?.parameterValues)}
                      selectedComponent={selectedComponent}
                    session={session}
                    viewport={viewport}
                    configuratorType={CONFIGURATOR_TYPES.DEFAULT}
                  />
                </Suspense>
              </div>
              <div className='bg-white w-full h-32 rounded-3xl p-6 flex flex-col justify-between'>
                <div className='flex flex-row justify-between pb-2'>
                  <h1 className='text-md text-gray-500'>Total Price:</h1>
                  <h1 className='text-2xl text-black font-bold'>$550.00</h1>
                </div>
                <BuyButton configuratorType={CONFIGURATOR_TYPES.DEFAULT} />
              </div>
            </div>
          )}
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