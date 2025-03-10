import React, { useState, useEffect } from 'react';
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
  const { scene } = useGLTF(url, true); // Added 'true' to enable detailed loading
  
  useEffect(() => {
    if (scene) {
      // Auto-center and scale model
      const box = new THREE.Box3().setFromObject(scene);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      
      // Center the model
      scene.position.set(-center.x, -center.y, -center.z);
      
      // Scale model to reasonable size
      const maxDim = Math.max(size.x, size.y, size.z);
      if (maxDim > 10 || maxDim < 0.5) {
        const scale = maxDim > 10 ? 5 / maxDim : 2 / maxDim;
        scene.scale.set(scale, scale, scale);
      }
      
      // Enhance materials for better rendering
      scene.traverse((child: any) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          
          if (child.material) {
            // Increase material quality
            if (child.material instanceof THREE.MeshStandardMaterial || 
                child.material instanceof THREE.MeshPhysicalMaterial || 
                child.material instanceof THREE.MeshBasicMaterial) {
              if (child.material.map) {
                child.material.map.anisotropy = 16;
              }
              
              // Enable transparency if material has opacity or alphaMap
              if (child.material.opacity < 1.0 || child.material.alphaMap) {
                child.material.transparent = true;
              }
            }
            
            // Enhance material rendering
            child.material.needsUpdate = true;
            
            // Apply to array of materials if needed
            if (Array.isArray(child.material)) {
              child.material.forEach((mat: THREE.Material) => {
                if (mat instanceof THREE.MeshStandardMaterial || 
                    mat instanceof THREE.MeshPhysicalMaterial || 
                    mat instanceof THREE.MeshBasicMaterial) {
                  if (mat.map) {
                    mat.map.anisotropy = 16;
                  }
                  if (mat.opacity < 1.0 || mat.alphaMap) {
                    mat.transparent = true;
                  }
                }
                mat.needsUpdate = true;
              });
            }
          }
        }
      });
      
      // Log mesh information for debugging
      console.log('Model structure:', getMeshInfo(scene));
      
      setLoading(false);
    }
  }, [scene]);
  
  // Helper function to get mesh information from the model
  const getMeshInfo = (model: THREE.Object3D) => {
    const meshes: any[] = [];
    
    model.traverse((child: THREE.Object3D) => {
      if (child instanceof THREE.Mesh) {
        meshes.push({
          name: child.name,
          type: 'Mesh',
          position: [child.position.x, child.position.y, child.position.z],
          materialType: child.material ? 
            (Array.isArray(child.material) ? 
              child.material.map((m: any) => m.type) : 
              child.material.type) : 
            'None'
        });
      }
    });
    
    return { 
      totalMeshes: meshes.length,
      meshes 
    };
  };
  
  if (loading) return null;
  
  return <primitive object={scene} />;
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
      <div className="flex flex-col items-center justify-center h-full bg-white">
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
  
  // Get loading sequence component and completion status
  const { element: loadingSequence, isComplete: loadingSequenceComplete } = LoadingSequence({ fileFormat });
  
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
      <div className="flex flex-col items-center justify-center h-full bg-white p-8">
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

  // Loading state while waiting for the model URL
  if (!url) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <Loader size="lg" />
        <Text className="mt-4">Loading model...</Text>
      </div>
    );
  }

  // Render the 3D model
  return (
    <div className="h-full relative">
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
        
        {/* Render the model */}
        <Model url={url} />
        
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