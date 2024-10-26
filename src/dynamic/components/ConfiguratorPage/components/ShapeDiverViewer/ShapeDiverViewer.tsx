import React, { useEffect, useRef, useState } from 'react';
import {
  createViewport,
  createSession,
  IViewportApi,
  ISessionApi,
  SPINNER_POSITIONING,
  VISIBILITY_MODE,
  BUSY_MODE_DISPLAY,
  FLAG_TYPE,
} from '@shapediver/viewer';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { Box, Modal, Overlay } from '@mantine/core';
import './ShapeDiverViewer.css';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';


interface ShapeDiverViewerProps {
  selectedComponent: string;
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
  selectedComponent,
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

  // Initialize Cloudinary
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'da8qnqmmh'  // Your cloud name
    }
  });

  const loadingGif = cld
    .image('BIKE_qa0p3v')
    .format('auto')
    .quality('auto');

  useEffect(() => {
    const initShapeDiver = async () => {
      if (!canvasRef.current) return;

      // Make RGBELoader available globally
      if (typeof window !== 'undefined' && window.THREE) {
        window.THREE.RGBELoader = RGBELoader;
      }

      // Close existing viewport and session if they exist
      if (viewportRef.current) {
        console.log('Closing existing viewport...');
        viewportRef.current.close();
        viewportRef.current = null;
      }
      if (sessionRef.current) {
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
            branding: {
              backgroundColor: 'rgba(245, 240, 235, 0.2)',
              spinnerPositioning: SPINNER_POSITIONING.TOP_LEFT,
              busyModeSpinner: LOADING_GIF_URL,
              busyModeDisplay: BUSY_MODE_DISPLAY.SPINNER,
            },
        });
        viewportRef.current = newViewport;
        setViewport(newViewport); // Update the parent component's viewport state
        console.log('Viewport created successfully');

        console.log('Creating session...');
        const newSession = await createSession({
          ticket: '59cad840676b0591717e78763e3c0c3b0d33202f56aa63f2d7666bc4eaa188a0bc04e98da43bb3dccf157b51aeafff24fb916f42ae010f86d44abfd0f6032fb999543488136361296d94deae674d430cdc19a77e7e298bccd13f3c6e9987ce893146a78567df2e-22883dee92d748f3620cc5c385dc12fc',
          modelViewUrl: 'https://sdr8euc1.eu-central-1.shapediver.com',
        });
        sessionRef.current = newSession;
        setSession(newSession); // This line is already present
        console.log('Session created successfully');

        // Call customize to load the model
        await newSession.customize();
        console.log('Session customized successfully');

        // Manually update the viewport with the session's node
        if (newSession.node) {
          await newViewport.updateNode(newSession.node);
          newViewport.update();
          newViewport.render();
          newViewport.show = true;
          setIsLoading(false);
          console.log('Viewport updated and rendering started.');
        } else {
          console.error('Session node is missing');
        }

      } catch (error) {
        console.error('Error initializing ShapeDiver:', error);
        setIsLoading(false);
      }
    };

    initShapeDiver();

    return () => {
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

  useEffect(() => {
    if (session && viewportRef.current) {
      // Logic to update the 3D model based on selectedComponent
      console.log(`Updating model for component: ${selectedComponent}`);
      // Here you would add logic to update the ShapeDiver model
      // This might involve changing parameters or loading a different model
    }
  }, [selectedComponent, session]);

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
