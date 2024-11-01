// Import necessary React hooks and components
import React, { useEffect, useRef, useState, useCallback } from 'react';
// Import ShapeDiver viewer types and constants
import {
  IViewportApi,
  ISessionApi,
  SPINNER_POSITIONING,
  VISIBILITY_MODE,
  BUSY_MODE_DISPLAY,
  FLAG_TYPE,
} from '@shapediver/viewer';
// Import Mantine UI components
import { Box, Modal, Overlay } from '@mantine/core';
// Import component styles
import './ShapeDiverViewer.css';

// Dynamic import function for ShapeDiver viewer
const loadShapeDiver = async () => {
  // Import the viewer module dynamically
  const viewer = await import('@shapediver/viewer');
  // Return necessary functions
  return {
    createViewport: viewer.createViewport,
    createSession: viewer.createSession
  };
};

// Check if device is mobile based on window width
const isMobile = window.innerWidth <= 768;

// Dynamic import function for Three.js RGBELoader
const loadThree = async () => {
  const { RGBELoader } = await import('three/examples/jsm/loaders/RGBELoader.js');
  return RGBELoader;
};

// Define component props interface
interface ShapeDiverViewerProps {
  session: ISessionApi | null;
  setSession: React.Dispatch<React.SetStateAction<ISessionApi | null>>;
  setViewport: React.Dispatch<React.SetStateAction<IViewportApi | null>>;
}

// Extend Window interface to include THREE property
declare global {
  interface Window {
    THREE: any;
  }
}

// URL for loading animation GIF
const LOADING_GIF_URL = 'https://res.cloudinary.com/da8qnqmmh/image/upload/e_make_transparent:10/v1729757636/BIKE_qa0p3v.gif';

// Main ShapeDiverViewer component
const ShapeDiverViewer: React.FC<ShapeDiverViewerProps> = ({
  session,
  setSession,
  setViewport,
}) => {
  // Refs for canvas and ShapeDiver APIs
  //What is a Ref? A ref is a reference to a DOM element. It is used to access the DOM element directly.
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const viewportRef = useRef<IViewportApi | null>(null);
  const sessionRef = useRef<ISessionApi | null>(null);
  
  // State for QR code and loading status
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  const [showQrModal, setShowQrModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Utility function to log camera details for debugging
  const logCameraDetails = (camera: any, label: string = 'Camera Details') => {
    console.log(`=== ${label} ===`);
    console.log('Position:', camera.position);
    console.log('Target:', camera.target);
    console.log('Field of View:', camera.fieldOfView);
    console.log('Zoom Level:', camera.zoom);
    console.log('Distance:', camera.distance);
    console.log('==================');
  };

  // Main initialization effect
  useEffect(() => {
    // Flag to prevent async operations after unmount
    let isActive = true;

    // Main initialization function
    const initShapeDiver = async () => {
      console.log('ShapeDiverViewer: Initializing...');

      // Check if canvas is ready and component is still mounted
      if (!canvasRef.current || !isActive) {
        console.log('ShapeDiverViewer: Initialization aborted - canvas not ready or component inactive');
        return;
      }

      try {
        // Load required dependencies
        console.log('ShapeDiverViewer: Loading dependencies...');
        const { createViewport, createSession } = await loadShapeDiver();
        const RGBELoader = await loadThree();
        console.log('ShapeDiverViewer: Dependencies loaded successfully');

        // Make RGBELoader available globally for Three.js
        if (typeof window !== 'undefined' && window.THREE) {
          window.THREE.RGBELoader = RGBELoader;
        }

        // Cleanup existing viewport and session
        if (viewportRef.current && isActive) {
          console.log('Closing existing viewport...');
          viewportRef.current.close();
          viewportRef.current = null;
        }
        if (sessionRef.current && isActive) {
          console.log('Closing existing session...');
          sessionRef.current.close();
          sessionRef.current = null;
          setSession(null);
        }

        try {
          if (!isActive) return;

          // Create new viewport
          console.log('Creating viewport...');
          const newViewport = await createViewport({
            canvas: canvasRef.current,
            visibility: VISIBILITY_MODE.MANUAL,
            branding: {
              backgroundColor: 'transparent',
              spinnerPositioning: SPINNER_POSITIONING.CENTER,
              busyModeSpinner: LOADING_GIF_URL,
              busyModeDisplay: BUSY_MODE_DISPLAY.SPINNER,
            }
          });

          // Configure viewport rendering settings
          newViewport.automaticResizing = true;
          newViewport.maximumRenderingSize = isMobile ? {
            width: 1280,
            height: 720
          } : {
            width: 1920,
            height: 1080
          };

          // Configure camera settings
          if (newViewport.camera) {
            // Set camera interaction properties
            newViewport.camera.enableZoom = true;
            newViewport.camera.zoomSpeed = isMobile ? 0.8 : 1;
            newViewport.camera.enablePan = !isMobile;
            newViewport.camera.enableRotation = true;
            newViewport.camera.rotationSpeed = isMobile ? 0.5 : 1;
            newViewport.camera.damping = 0.1;
            
            // Set camera zoom limits
            newViewport.camera.zoomRestriction = {
              minDistance: 2,
              maxDistance: isMobile ? 8 : 6
            };

            // Set initial camera position
            await newViewport.camera.set(
              [0, 0, isMobile ? 10 : 3], // position
              [0, 0, 0], // target
              { duration: 0 } // instant change
            );
            logCameraDetails(newViewport.camera, 'Initial Camera Setup');
          }

          // Check if component is still mounted
          if (!isActive) {
            newViewport.close();
            return;
          }

          // Store viewport reference
          viewportRef.current = newViewport;
          setViewport(newViewport);

          // Create new ShapeDiver session
          const newSession = await createSession({
            ticket: '4317c6cc440b2b4d17142b76504388ab583c15c380ada9a89e349dfd40f0181c93f282f7ddd226a2db3bfcbfb6483be7f2b98951598e133a6170a4d17afb47dcddce47721d8acf4b69fd6f6c851be1ecfbb47782ecbdcec201fdd1ab087627688d2077ee9fda5b-05de21814ced1070f220a9f07e440df9',
            modelViewUrl: 'https://sdr8euc1.eu-central-1.shapediver.com',
          });

          // Check if component is still mounted
          if (!isActive) {
            newSession.close();
            return;
          }

          // Store session reference
          sessionRef.current = newSession;
          setSession(newSession);

          // Customize session
          await newSession.customize();

          console.log('Session customized, parameters ready');

          // Update viewport with session node
          if (newSession.node && isActive) {
            console.log('ShapeDiverViewer: Updating viewport with session node...');
            await newViewport.updateNode(newSession.node);
            newViewport.update();
            newViewport.render();
            newViewport.show = true;
            setIsLoading(false);
            console.log('ShapeDiverViewer: Initialization completed successfully');
          }
        } catch (error) {
          console.error('Error initializing ShapeDiver:', error);
          if (isActive) {
            setIsLoading(false);
          }
        }
      } catch (error) {
        console.error('ShapeDiverViewer initialization failed:', error);
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    // Start initialization
    initShapeDiver();

    // Cleanup function
    return () => {
      isActive = false;
      console.log('Cleaning up...');
      if (sessionRef.current) {
        sessionRef.current.close();
        sessionRef.current = null;
        setSession(null);
      }
      if (viewportRef.current) {
        viewportRef.current.close();
        viewportRef.current = null;
      }
    };
  }, [setSession, setViewport, canvasRef.current]);

  // Handler for AR view functionality
  const handleARView = useCallback(async () => {
    if (viewportRef.current) {
      // Show busy indicator
      const token = viewportRef.current.addFlag(FLAG_TYPE.BUSY_MODE);
      if (viewportRef.current.viewableInAR()) {
        // Launch AR view if supported
        await viewportRef.current.viewInAR();
      } else {
        // Show QR code for AR viewing
        const qr = await viewportRef.current.createArSessionLink(undefined, true);
        setQrCodeUrl(qr);
        setShowQrModal(true);
      }
      // Remove busy indicator
      viewportRef.current.removeFlag(token);
    }
  }, [viewportRef.current]);

  // Render component
  return (
    <Box className="viewerContainer">
      {/* Main canvas for 3D viewer */}
      <canvas
        ref={canvasRef}
        className="viewerCanvas"
      />
      {/* Loading overlay */}
      {isLoading && (
        <Overlay className="loadingOverlay">
          <img src={LOADING_GIF_URL} alt="Loading" className="loadingGif" />
        </Overlay>
      )}
      {/* QR code modal for AR view */}
      <Modal opened={showQrModal} onClose={() => setShowQrModal(false)} title="AR QR Code">
        {qrCodeUrl && <img src={qrCodeUrl} alt="AR QR Code" style={{ width: '100%' }} />}
      </Modal>
    </Box>
  );
};

export default ShapeDiverViewer;
