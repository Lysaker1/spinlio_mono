import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Grid, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { IconAlertCircle } from '@tabler/icons-react';
import { Loader, Text, Progress } from '@mantine/core';

/**
 * Model component that renders within the Canvas
 */
const Model = ({ url }: { url: string }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loadedScene, setLoadedScene] = useState<THREE.Group | null>(null);
  
  // Load the model with error handling
  useEffect(() => {
    let isMounted = true;
    
    const loadModel = async () => {
      try {
        // Direct error handling with try/catch instead of callback
        const gltf = await useGLTF.load(url);
        
        if (isMounted) {
          setLoadedScene(gltf.scene);
          setLoading(false);
        }
      } catch (err) {
        console.error('Error loading model:', err);
        if (isMounted) {
          setError(`Failed to load model: ${err instanceof Error ? err.message : 'Unknown error'}`);
          setLoading(false);
        }
      }
    };
    
    loadModel();
    
    return () => {
      isMounted = false;
    };
  }, [url]);
  
  // Process the loaded scene
  useEffect(() => {
    if (!loadedScene) return;
    
    try {
      // Auto-center and scale model
      const box = new THREE.Box3().setFromObject(loadedScene);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      
      // Center the model
      loadedScene.position.set(-center.x, -center.y, -center.z);
      
      // Scale model to reasonable size
      const maxDim = Math.max(size.x, size.y, size.z);
      if (maxDim > 10 || maxDim < 0.5) {
        const scale = maxDim > 10 ? 5 / maxDim : 2 / maxDim;
        loadedScene.scale.set(scale, scale, scale);
      }
      
      // Enhance materials for better rendering
      loadedScene.traverse((child: any) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          
          if (child.material) {
            // Enhance material rendering logic
            if (Array.isArray(child.material)) {
              child.material.forEach((mat: THREE.Material) => {
                // Use type assertion to handle material maps
                const standardMat = mat as THREE.MeshStandardMaterial;
                if (standardMat.map) standardMat.map.anisotropy = 16;
                mat.needsUpdate = true;
              });
            } else {
              // Use type assertion to handle material maps
              const standardMat = child.material as THREE.MeshStandardMaterial;
              if (standardMat.map) standardMat.map.anisotropy = 16;
              child.material.needsUpdate = true;
            }
          }
        }
      });
    } catch (err) {
      console.error('Error processing model:', err);
      setError(`Error processing model: ${(err as Error).message}`);
    }
  }, [loadedScene]);
  
  if (error) {
    return (
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
    );
  }
  
  if (loading || !loadedScene) {
    return (
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="gray" wireframe />
      </mesh>
    );
  }
  
  return <primitive object={loadedScene} />;
};

/**
 * Loading sequence component that shows a series of messages with progress
 */
const LoadingSequence = ({ fileFormat }: { fileFormat?: string }) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [sequenceComplete, setSequenceComplete] = useState(false);
  const [opacity, setOpacity] = useState(1);
  
  // Sequential messages for the upload process
  const messages = [
    `Processing your ${fileFormat?.toUpperCase() || 'model'}...`,
    `Auto converting your ${fileFormat?.toUpperCase() || 'model'}...`,
    "Adding some secret sauce..."
  ];
  
  // Initialize first message on mount
  useEffect(() => {
    setCurrentMessage(messages[0]);
  }, []);
  
  // Control the progress animation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        // Each message gets about 33% of the progress bar
        const targetProgress = (messageIndex + 1) * 33;
        // Slowly approach the target
        const next = Math.min(prev + 1, targetProgress);
        
        // If we've reached the final message and its target progress, complete the sequence
        if (messageIndex === messages.length - 1 && next >= 99) {
          setProgress(100);
          clearInterval(progressInterval);
          
          // Allow the 100% state to display for a moment before completing
          setTimeout(() => setSequenceComplete(true), 1000);
          return 100;
        }
        
        return next;
      });
    }, 50);
    
    return () => clearInterval(progressInterval);
  }, [messageIndex, messages.length]);
  
  // Handle message transitions
  useEffect(() => {
    // Define how long each message should stay visible
    const MESSAGE_DURATION = 2500; // 2.5 seconds per message
    
    if (messageIndex >= messages.length) return;
    
    // Schedule next message transition
    const transitionTimeout = setTimeout(() => {
      if (messageIndex < messages.length - 1) {
        // Start fade out
        setOpacity(0);
        
        // After fade out completes, change to next message and fade in
        setTimeout(() => {
          setMessageIndex(prev => prev + 1);
          setCurrentMessage(messages[messageIndex + 1]);
          
          // Start fade in after message change
          setTimeout(() => {
            setOpacity(1);
          }, 50);
        }, 400); // Match this with CSS transition duration
      }
    }, MESSAGE_DURATION);
    
    return () => clearTimeout(transitionTimeout);
  }, [messageIndex, messages]);
  
  return {
    element: (
      <div className="flex flex-col items-center justify-center h-full bg-white rounded-tl-lg rounded-bl-lg">
        <div className="w-4/5 max-w-lg">
          <div 
            style={{ 
              opacity, 
              transition: 'opacity 400ms ease-in-out',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}
          >
            <Text 
              size="xl" 
              fw={500} 
              className="text-center"
              style={{ fontSize: '24px', lineHeight: 1.4 }}
            >
              {currentMessage}
            </Text>
          </div>
          <Progress 
            value={progress} 
            color="dark" 
            size="md"
            animated
            styles={{
              root: { height: '8px' }
            }}
          />
        </div>
      </div>
    ),
    isComplete: sequenceComplete
  };
};

/**
 * Main ModelViewer component that conditionally renders either the 3D model or a simple message
 */
const ModelViewer = ({ 
  url, 
  fileFormat, 
  status,
  children 
}: { 
  url?: string; 
  fileFormat?: string;
  status?: 'pending' | 'processing' | 'completed' | 'failed';
  children?: React.ReactNode;
}) => {
  // Check if format is supported for 3D viewing
  const isSupported = fileFormat?.toLowerCase() === 'glb' || fileFormat?.toLowerCase() === 'gltf';
  
  // State to track if loading sequence has completed
  const [showLoadingSequence, setShowLoadingSequence] = useState(true);
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  
  // Get loading sequence component and completion status
  const { element: loadingSequence, isComplete: loadingSequenceComplete } = LoadingSequence({ fileFormat });
  
  // Process URL to handle blob URLs properly
  useEffect(() => {
    if (!url || !isSupported) {
      setProcessedUrl(null);
      return;
    }
    
    const handleUrl = async () => {
      try {
        console.log('Processing model URL:', url);
        
        // Better blob URL handling
        if (url.startsWith('blob:')) {
          try {
            // Test if the blob is accessible
            const response = await fetch(url, { method: 'HEAD' });
            if (!response.ok) {
              throw new Error(`Blob URL fetch failed with status: ${response.status}`);
            }
            setProcessedUrl(url);
          } catch (error) {
            console.error('Error accessing blob URL:', error);
            setLoadError(`Cannot access the model file. ${(error as Error).message}`);
            // Just set processed URL to null instead of trying to use a placeholder file
            setProcessedUrl(null);
          }
        } else if (url.startsWith('data:')) {
          // Handle data URLs directly
          setProcessedUrl(url);
        } else if (url.startsWith('/assets/')) {
          // Don't try to load static assets that might not exist
          setProcessedUrl(null);
          setLoadError('Missing model file');
        } else {
          // For regular URLs, check if they're accessible
          try {
            const response = await fetch(url, { method: 'HEAD' });
            if (!response.ok) {
              throw new Error(`URL fetch failed with status: ${response.status}`);
            }
            setProcessedUrl(url);
          } catch (error) {
            console.error('Error accessing URL:', error);
            setLoadError(`Cannot access the model file. ${(error as Error).message}`);
            // Just set processed URL to null instead of trying to use a placeholder file
            setProcessedUrl(null);
          }
        }
      } catch (error) {
        console.error('Error processing URL:', error);
        setLoadError(`Failed to process model URL: ${(error as Error).message}`);
        setProcessedUrl(null);
      }
    };
    
    handleUrl();
  }, [url, isSupported, fileFormat]);
  
  // When loading sequence completes, stop showing it
  useEffect(() => {
    if (loadingSequenceComplete) {
      const timer = setTimeout(() => {
        setShowLoadingSequence(false);
      }, 500); // Short delay after completion
      
      return () => clearTimeout(timer);
    }
  }, [loadingSequenceComplete]);
  
  // If we're still showing the loading sequence, show it regardless of other conditions
  if (showLoadingSequence && status !== 'completed') {
    return loadingSequence;
  }

  // Unsupported format message - only shown after loading sequence completes
  if (!isSupported) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-white p-8 rounded-tl-lg rounded-bl-lg">
        <p className="text-2xl text-center mb-4 font-medium">
          Upload successful!
        </p>
        <p className="text-xl text-center">
          We're converting your {fileFormat?.toUpperCase() || 'file'} behind the scenes.
          <br />
          Something cool is coming soon.
        </p>
      </div>
    );
  }

  // If there's a load error, show a friendly error message
  if (loadError) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-white p-8 rounded-tl-lg rounded-bl-lg">
        <IconAlertCircle size={48} color="red" />
        <p className="text-xl text-center mt-4 mb-2 font-medium text-red-600">
          Couldn't preview the 3D model
        </p>
        <p className="text-base text-center text-gray-700">
          Don't worry! Your model has been uploaded successfully.
          <br />
          You can still edit its properties.
        </p>
      </div>
    );
  }

  // Loading state while waiting for the model URL
  if (!processedUrl) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <Loader size="lg" />
        <Text className="mt-4">Processing model data...</Text>
      </div>
    );
  }

  // Render the 3D model
  return (
    <div className="h-full relative rounded-tl-lg rounded-bl-lg">
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 45 }}>
        {/* Better lighting for enhanced details */}
        <ambientLight intensity={0.3} />
        <hemisphereLight intensity={0.4} skyColor="#ffffff" groundColor="#bbbbff" />
        <directionalLight
          position={[5, 10, 5]} 
          intensity={1.0}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} />
        
        {/* Grid for spatial orientation */}
        <Grid 
          position={[0, -0.01, 0]}
          infiniteGrid
          cellSize={0.5}
          sectionSize={3}
          cellThickness={0.5}
          sectionThickness={1}
          cellColor="#6f6f6f"
          sectionColor="#9d4b4b"
          fadeStrength={1.5}
          fadeDistance={25}
        />
        
        {/* Environment map for better material rendering */}
        <Environment preset="studio" />
        
        {/* Render the model with error handling */}
        <Suspense fallback={
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.5, 16, 16]} />
            <meshStandardMaterial color="gray" wireframe />
          </mesh>
        }>
          <Model url={processedUrl} />
        </Suspense>
        
        {/* Controls */}
        <OrbitControls 
          makeDefault 
          enableDamping 
          dampingFactor={0.1} 
          rotateSpeed={0.7}
          minDistance={1}
          maxDistance={20}
        />
        
        {children} {/* Allow injecting additional 3D elements like snap points */}
      </Canvas>
    </div>
  );
};

export default ModelViewer; 