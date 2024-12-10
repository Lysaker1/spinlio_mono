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
// Import TypeScript import for WebGLRenderer
import { WebGLRenderer } from 'three';


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

import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { configuratorConfigs } from '../../config/configuratorConfig';
// Define component props interface
interface ShapeDiverViewerProps {
  session: ISessionApi | null;
  setSession: React.Dispatch<React.SetStateAction<ISessionApi | null>>;
  setViewport: React.Dispatch<React.SetStateAction<IViewportApi | null>>;
  isLoading: boolean;
  ticket?: string;
}

// Extend Window interface to include THREE property
declare global {
  interface Window {
    THREE: any;
  }
}


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


// URL for loading animation GIF
const LOADING_GIF_URL = 'https://res.cloudinary.com/da8qnqmmh/image/upload/e_make_transparent:10/v1729757636/BIKE_qa0p3v.gif';

// Main ShapeDiverViewer component
const ShapeDiverViewer: React.FC<ShapeDiverViewerProps> = ({
  session,
  setSession,
  setViewport,
  isLoading: externalLoading,
  ticket = 'fb56400eb88a6e3af0896d90b87ee69881c284ada493a0cc22023c7843443a1129d8e0ec8df7d6489976bae37c94b54c5fd1296134de1ea5bc52fb4fa92affa89e0c32f4e85ee71361521013e796a7679834f130144f49449a6b9d0fe2a2997b3eb1921ca2e614-3c83fa0e441a5e2c873f2b3f1cd9d237'
}) => {
  // Refs for canvas and ShapeDiver APIs
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const viewportRef = useRef<IViewportApi | null>(null);
  const sessionRef = useRef<ISessionApi | null>(null);
  
  // State for QR code and loading status
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  const [showQrModal, setShowQrModal] = useState(false);
  const [internalLoading, setInternalLoading] = useState(true);

  // Combine both loading states
  const isLoading = externalLoading || internalLoading;

  useEffect(() => {
    let isActive = true;

    const initShapeDiver = async () => {
      console.log('ShapeDiverViewer: Initializing...');

      if (!canvasRef.current || !isActive) {
        console.log('ShapeDiverViewer: Initialization aborted - canvas not ready or component inactive');
        return;
      }

      try {
        console.log('ShapeDiverViewer: Loading dependencies...');
        const { createViewport, createSession } = await loadShapeDiver();
        console.log('ShapeDiverViewer: Dependencies loaded successfully');

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
          console.log('Creating viewport...');
          const newViewport = await createViewport({
            canvas: canvasRef.current,
            visibility: VISIBILITY_MODE.MANUAL,
            // Only include valid creation properties
            branding: {
              backgroundColor: 'transparent',
              spinnerPositioning: SPINNER_POSITIONING.CENTER,
              busyModeSpinner: LOADING_GIF_URL,
              busyModeDisplay: BUSY_MODE_DISPLAY.SPINNER,
            }
          });

          // Set maximum rendering size after creation
          newViewport.maximumRenderingSize = isMobile ? {
            width: 1024,  // Reduced from 1280
            height: 576   // Reduced from 720
          } : {
            width: 1920,
            height: 1080
          };

          // Add rendering callback for memory management
          newViewport.preRenderingCallback = (renderer: WebGLRenderer) => {
            if (renderer.info && isMobile) {
              console.log('Memory:', renderer.info.memory);
              if (renderer.info.memory.geometries > 1000 || 
                  renderer.info.memory.textures > 100) {
                renderer.dispose();
              }
            }
          };

          // Configure camera for mobile
          if (newViewport.camera) {
            if (isMobile) {
              newViewport.camera.enablePan = false;
              newViewport.camera.zoomSpeed = 0.8;
              newViewport.camera.rotationSpeed = 0.5;
              newViewport.camera.damping = 0.2;
              newViewport.camera.zoomRestriction = {
                minDistance: 2,
                maxDistance: 8
              };
            }

            await newViewport.camera.set(
              [0, 0, isMobile ? 10 : 3],
              [0, 0, 0],
              { duration: 0 }
            );
            
            // Use your existing logCameraDetails function
            if (typeof logCameraDetails === 'function') {
              logCameraDetails(newViewport.camera, 'Initial Camera Setup');
            }
          }

          // Add context loss handling using canvas events
          const handleContextLoss = () => {
            console.log('WebGL context lost');
            setInternalLoading(true);
            // Pause rendering and show loading state
            newViewport.pauseRendering();
          };

          const handleContextRestore = () => {
            console.log('WebGL context restored');
            // Resume rendering and hide loading state
            newViewport.continueRendering();
            newViewport.render();
            setInternalLoading(false);
          };

          canvasRef.current?.addEventListener('webglcontextlost', handleContextLoss);
          canvasRef.current?.addEventListener('webglcontextrestored', handleContextRestore);

          if (!isActive) {
            newViewport.close();
            return;
          }

          // Store viewport reference
          viewportRef.current = newViewport;
          setViewport(newViewport);

          // Create new ShapeDiver session
          const newSession = await createSession({
            ticket: ticket,
            modelViewUrl: 'https://sdr8euc1.eu-central-1.shapediver.com',
            loadOutputs: true,
            waitForOutputs: true,
            allowOutputLoading: true,
            loadSdtf: true
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
            setInternalLoading(false);
            console.log('ShapeDiverViewer: Initialization completed successfully');
          }

          setInternalLoading(false); // Set to false when initialization completes

          return () => {
            isActive = false;
            canvasRef.current?.removeEventListener('webglcontextlost', handleContextLoss);
            canvasRef.current?.removeEventListener('webglcontextrestored', handleContextRestore);
            if (viewportRef.current) {
              viewportRef.current.close();
              viewportRef.current = null;
            }
            if (sessionRef.current) {
              sessionRef.current.close();
              sessionRef.current = null;
              setSession(null);
            }
          };

        } catch (error) {
          console.error('Error initializing ShapeDiver:', error);
          if (isActive) {
            setInternalLoading(false);
          }
        }
      } catch (error) {
        console.error('ShapeDiverViewer initialization failed:', error);
        if (isActive) {
          setInternalLoading(false);
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
  }, [setSession, setViewport, canvasRef.current, ticket]);

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
      {/*{isLoading && (*/}
      {/*  <Overlay className="loadingOverlay">*/}
      {/*    <img src={LOADING_GIF_URL} alt="Loading" className="loadingGif" />*/}
      {/*  </Overlay>*/}
      {/*)}*/}
      {/* QR code modal for AR view */}
      <Modal opened={showQrModal} onClose={() => setShowQrModal(false)} title="AR QR Code">
        {qrCodeUrl && <img src={qrCodeUrl} alt="AR QR Code" style={{ width: '100%' }} />}
      </Modal>
    </Box>
  );
};

export default ShapeDiverViewer;
