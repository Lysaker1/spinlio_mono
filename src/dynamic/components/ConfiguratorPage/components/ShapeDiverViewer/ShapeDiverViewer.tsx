import React, { useEffect, useRef, useState } from 'react';
import {
  IViewportApi,
  ISessionApi,
  SPINNER_POSITIONING,
  VISIBILITY_MODE,
  BUSY_MODE_DISPLAY,
  FLAG_TYPE,
} from '@shapediver/viewer';
import { Box, Modal, Overlay } from '@mantine/core';
import './ShapeDiverViewer.css';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { parameterDefinitions } from '../ParameterPanel/parameterDefinitions';

// Add dynamic imports
const loadShapeDiver = async () => {
  const viewer = await import('@shapediver/viewer');
  return {
    createViewport: viewer.createViewport,
    createSession: viewer.createSession
  };
};
const isMobile = window.innerWidth <= 768;

const loadThree = async () => {
  const { RGBELoader } = await import('three/examples/jsm/loaders/RGBELoader.js');
  return RGBELoader;
};

interface ShapeDiverViewerProps {
  session: ISessionApi | null;
  setSession: React.Dispatch<React.SetStateAction<ISessionApi | null>>;
  setViewport: React.Dispatch<React.SetStateAction<IViewportApi | null>>;
}

declare global {
  interface Window {
    THREE: any;
  }
}

const LOADING_GIF_URL = 'https://res.cloudinary.com/da8qnqmmh/image/upload/e_make_transparent:10/v1729757636/BIKE_qa0p3v.gif';

const ShapeDiverViewer: React.FC<ShapeDiverViewerProps> = ({
  session,
  setSession,
  setViewport,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const viewportRef = useRef<IViewportApi | null>(null);
  const sessionRef = useRef<ISessionApi | null>(null);
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  const [showQrModal, setShowQrModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    const initShapeDiver = async () => {
      if (!canvasRef.current || !isActive) return;

      // Load dependencies dynamically
      const { createViewport, createSession } = await loadShapeDiver();
      const RGBELoader = await loadThree();

      // Make RGBELoader available globally
      if (typeof window !== 'undefined' && window.THREE) {
        window.THREE.RGBELoader = RGBELoader;
      }

      // Only close existing if we're not already in cleanup
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
        if (!isActive) return; // Check flag before creating new instances

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

        // Set viewport properties after creation
        newViewport.automaticResizing = true;
        newViewport.maximumRenderingSize = isMobile ? {
          width: 1280,
          height: 720
        } : {
          width: 1920,
          height: 1080
        };

        // Configure camera
        if (newViewport.camera) {
          // Set camera properties for mobile
          newViewport.camera.enableZoom = true;
          newViewport.camera.zoomSpeed = isMobile ? 0.8 : 1;
          newViewport.camera.enablePan = !isMobile;
          newViewport.camera.enableRotation = true;
          newViewport.camera.rotationSpeed = isMobile ? 0.5 : 1;
          newViewport.camera.damping = 0.1;
          
          // Set zoom restrictions
          newViewport.camera.zoomRestriction = {
            minDistance: 2,
            maxDistance: isMobile ? 8 : 6
          };

          // Set initial position
          await newViewport.camera.set(
            [0, 0, isMobile ? 5 : 3], // position
            [0, 0, 0],  // target
            { duration: 0 } // instant change
          );
        }

        if (!isActive) {
          newViewport.close();
          return;
        }

        viewportRef.current = newViewport;
        setViewport(newViewport);

        const newSession = await createSession({
          ticket: '59cad840676b0591717e78763e3c0c3b0d33202f56aa63f2d7666bc4eaa188a0bc04e98da43bb3dccf157b51aeafff24fb916f42ae010f86d44abfd0f6032fb999543488136361296d94deae674d430cdc19a77e7e298bccd13f3c6e9987ce893146a78567df2e-22883dee92d748f3620cc5c385dc12fc',
          modelViewUrl: 'https://sdr8euc1.eu-central-1.shapediver.com',
        });

        if (!isActive) {
          newSession.close();
          return;
        }

        sessionRef.current = newSession;
        setSession(newSession);

        await newSession.customize();

        if (newSession.node && isActive) {
          await newViewport.updateNode(newSession.node);
          newViewport.update();
          newViewport.render();
          newViewport.show = true;
          setIsLoading(false);
        }

      } catch (error) {
        console.error('Error initializing ShapeDiver:', error);
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    initShapeDiver();

    return () => {
      isActive = false; // Set flag before cleanup
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
  }, [setSession, setViewport]);

  const handleARView = async () => {
    if (viewportRef.current) {
      const token = viewportRef.current.addFlag(FLAG_TYPE.BUSY_MODE);
      if (viewportRef.current.viewableInAR()) {
        await viewportRef.current.viewInAR();
      } else {
        const qr = await viewportRef.current.createArSessionLink(undefined, true);
        setQrCodeUrl(qr);
        setShowQrModal(true);
      }
      viewportRef.current.removeFlag(token);
    }
  };

  return (
    <Box className="viewerContainer">
      <canvas
        ref={canvasRef}
        className="viewerCanvas"
      />
      {isLoading && (
        <Overlay className="loadingOverlay">
          <img src={LOADING_GIF_URL} alt="Loading" className="loadingGif" />
        </Overlay>
      )}
      <Modal opened={showQrModal} onClose={() => setShowQrModal(false)} title="AR QR Code">
        {qrCodeUrl && <img src={qrCodeUrl} alt="AR QR Code" style={{ width: '100%' }} />}
      </Modal>
    </Box>
  );
};

export default ShapeDiverViewer;
