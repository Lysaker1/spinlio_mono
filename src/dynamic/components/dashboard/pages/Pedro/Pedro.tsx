import React, { useState, useEffect, useRef, Suspense, useCallback } from 'react';
import { Text, Button, Alert, Box, Group, Title, Loader, Tabs, Select, NumberInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  Environment, 
  useGLTF, 
  PerspectiveCamera, 
  Grid, 
  Stats,
  Html,
  ContactShadows,
  Center,
  GizmoHelper,
  GizmoViewport,
  useHelper
} from '@react-three/drei';
import { IconUpload, IconPlus, IconAdjustments } from '@tabler/icons-react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import PageLayout from '../../components/PageLayout/PageLayout';
import { v4 as uuidv4 } from 'uuid';
import AttachmentPointHelper, { AttachmentPoint } from './components/AttachmentPointHelper';
import './Pedro.css';

// Create DRACOLoader outside of component to reuse
const createDRACOLoader = () => {
  const dracoLoader = new DRACOLoader();
  // Set the path to the Draco decoder (these files are included in node_modules/three/examples/js/libs/draco/)
  dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.5/');
  dracoLoader.setDecoderConfig({ type: 'js' }); // Use JavaScript decoder
  return dracoLoader;
};

// Helper function to create a configured GLTFLoader with DRACO support
const createGLTFLoader = () => {
  const loader = new GLTFLoader();
  const dracoLoader = createDRACOLoader();
  loader.setDRACOLoader(dracoLoader);
  return loader;
};

// Custom Box3Helper component since it's not exported from drei
const Box3Helper = ({ box, color }: { box: THREE.Box3, color: string }) => {
  const ref = useRef<THREE.Box3Helper>(null);
  
  useEffect(() => {
    if (ref.current) {
      ref.current.box = box;
      ref.current.updateMatrixWorld(true);
    }
  }, [box]);
  
  return <primitive ref={ref} object={new THREE.Box3Helper(box, new THREE.Color(color))} />;
};

// Debug box to always be visible in the scene
const DebugBox = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[0.2, 0.2, 0.2]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

// Axes helper to show X, Y, Z directions
const AxesHelper = () => {
  const axesRef = useRef<THREE.AxesHelper>(null);
  useEffect(() => {
    if (axesRef.current) {
      axesRef.current.visible = true;
    }
  }, []);
  return <primitive ref={axesRef} object={new THREE.AxesHelper(2)} />;
};

// Direct Model component - doesn't use useGLTF hook but handles file loading directly
const DirectModel = ({ 
  file, 
  attachmentPoints, 
  onAttachmentPointUpdated, 
  selectedPoint, 
  onSelectPoint,
  debugMode = true
}: { 
  file: File | null; 
  attachmentPoints: AttachmentPoint[];
  onAttachmentPointUpdated: (point: AttachmentPoint) => void;
  selectedPoint: string | null;
  onSelectPoint: (id: string | null) => void;
  debugMode?: boolean;
}) => {
  const [modelLoaded, setModelLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [modelInfo, setModelInfo] = useState<{ size: THREE.Vector3, center: THREE.Vector3 } | null>(null);
  const modelRef = useRef<THREE.Group>(null);
  const { scene: three, camera } = useThree();
  
  // Handle direct file loading
  useEffect(() => {
    if (!file || !modelRef.current) return;
    
    console.log("Starting to load file directly:", file.name);
    
    // Determine if file is GLB or GLTF based on extension
    const extension = file.name.split('.').pop()?.toLowerCase();
    const isGLTF = extension === 'gltf';
    const isGLB = extension === 'glb';
    
    if (isGLTF) {
      // For GLTF (JSON) files, we need to read as text and parse
      const reader = new FileReader();
      
      reader.onload = async (event) => {
        try {
          if (!event.target?.result) {
            throw new Error("Failed to read file");
          }
          
          const jsonContent = event.target.result as string;
          
          // Validate that the file is valid JSON
          try {
            const gltfJson = JSON.parse(jsonContent);
            
            // Basic validation that it's a GLTF file
            if (!gltfJson.asset || !gltfJson.asset.version) {
              throw new Error("Invalid GLTF file: missing asset version");
            }
            
            // Check if it uses external references that we can't handle
            const hasExternalUris = 
              (gltfJson.buffers && gltfJson.buffers.some((buffer: any) => 
                buffer.uri && buffer.uri.startsWith('http'))) ||
              (gltfJson.images && gltfJson.images.some((image: any) => 
                image.uri && image.uri.startsWith('http')));
                
            if (hasExternalUris) {
              setError("This GLTF file contains external references which cannot be loaded. Please use a self-contained GLB file.");
              return;
            }
          } catch (jsonError) {
            console.error("Error parsing GLTF JSON:", jsonError);
            throw new Error("Invalid GLTF JSON format");
          }
          
          // Use the configured loader with DRACO support
          const loader = createGLTFLoader();
          
          // Create a Blob URL for the base path to load resources
          const directory = file.name.split('/').slice(0, -1).join('/');
          const baseUrl = directory ? `${directory}/` : '';
          
          // Load the GLTF model from JSON
          loader.parse(
            jsonContent, 
            baseUrl,
            (gltf) => {
              handleLoadedModel(gltf);
            },
            (error) => {
              console.error("Error parsing GLTF:", error);
              setError("Failed to parse GLTF file. Check file format.");
            }
          );
        } catch (err) {
          console.error("Error loading GLTF file:", err);
          setError("Failed to load GLTF file: " + (err instanceof Error ? err.message : String(err)));
        }
      };
      
      reader.onerror = (e) => {
        console.error("Error reading file:", e);
        setError("Failed to read GLTF file");
      };
      
      // Read as text for GLTF files
      reader.readAsText(file);
    } else if (isGLB) {
      // For GLB (binary) files, we read as ArrayBuffer
      const reader = new FileReader();
      
      reader.onload = async (event) => {
        try {
          if (!event.target?.result) {
            throw new Error("Failed to read file");
          }
          
          const arrayBuffer = event.target.result;
          // Use the configured loader with DRACO support
          const loader = createGLTFLoader();
          
          // Load the model from array buffer
          loader.parse(
            arrayBuffer as ArrayBuffer, 
            '',
            (gltf) => {
              handleLoadedModel(gltf);
            },
            (error) => {
              console.error("Error parsing GLB:", error);
              setError("Failed to parse GLB file. Check file format.");
            }
          );
        } catch (err) {
          console.error("Error loading GLB file:", err);
          setError("Failed to load GLB file: " + (err instanceof Error ? err.message : String(err)));
        }
      };
      
      reader.onerror = (e) => {
        console.error("Error reading file:", e);
        setError("Failed to read GLB file");
      };
      
      // Read as array buffer for GLB files
      reader.readAsArrayBuffer(file);
    } else {
      setError("Unsupported file format. Please use GLB or GLTF files.");
    }
  }, [file, camera, three.userData.controls]);
  
  // Helper function to process loaded models (common for both GLB and GLTF)
  const handleLoadedModel = (gltf: any) => {
    console.log("Successfully loaded model:", gltf);
    
    // Clear previous model if any
    if (modelRef.current) {
      while (modelRef.current.children.length > 0) {
        modelRef.current.remove(modelRef.current.children[0]);
      }
      
      // Clone the model and add to our ref
      const modelScene = gltf.scene.clone();
      modelRef.current.add(modelScene);
      
      // Ensure the model is centered perfectly at origin
      const box = new THREE.Box3().setFromObject(modelScene);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      
      setModelInfo({ size, center });
      
      // Reset position to center at origin (0,0,0)
      modelScene.position.set(-center.x, -center.y, -center.z);
      
      // Auto-scale the model to a reasonable size
      const maxDim = Math.max(size.x, size.y, size.z);
      let scale = 1.0;
      
      // If model is too large or too small, adjust its scale
      if (maxDim > 10) {
        scale = 5 / maxDim; // Scale down large models
      } else if (maxDim < 0.5) {
        scale = 2 / maxDim; // Scale up small models
      }
      
      // Apply scaling uniformly
      modelScene.scale.set(scale, scale, scale);
      
      console.log('Model dimensions:', size);
      console.log('Model center:', center);
      console.log('Applied scale:', scale);
      
      // Add rotation ability to ensure models can be moved
      modelScene.matrixAutoUpdate = true;
      
      // Ensure all mesh children have proper materials and can be modified
      modelScene.traverse((child: any) => {
        if (child instanceof THREE.Mesh) {
          // Make sure all meshes can receive shadows and cast them
          child.castShadow = true;
          child.receiveShadow = true;
          
          // Set the matrixAutoUpdate to ensure transformations work
          child.matrixAutoUpdate = true;
          
          // If material exists, enhance it for better visibility
          if (child.material) {
            // If it's an array of materials
            if (Array.isArray(child.material)) {
              child.material.forEach((mat: THREE.Material) => {
                enhanceMaterial(mat);
              });
            } else {
              // Single material
              enhanceMaterial(child.material);
            }
          }
        }
      });
      
      // Position camera to get a good view of the model
      if (camera) {
        const distance = Math.max(size.x, size.y, size.z) * 3;
        camera.position.set(distance, distance, distance);
        camera.lookAt(0, 0, 0);
        camera.updateProjectionMatrix();
      }
      
      // Update controls
      if (three.userData.controls) {
        three.userData.controls.target.set(0, 0, 0);
        three.userData.controls.update();
      }
      
      setModelLoaded(true);
    }
  };
  
  // Helper function to enhance materials for better visibility
  const enhanceMaterial = (material: THREE.Material) => {
    if ('isMeshStandardMaterial' in material || 'isMeshPhysicalMaterial' in material) {
      const mat = material as THREE.MeshStandardMaterial;
      // Add some emissive to make it more visible
      mat.emissive = new THREE.Color(0x222222);
      // Add some metalness for better light reflection
      mat.metalness = 0.3;
      // Increase roughness slightly to reduce glare
      mat.roughness = 0.7;
    }
  };
  
  // Position camera on frame (additional helper)
  useFrame(() => {
    if (modelLoaded && modelRef.current && camera && three.userData.controls) {
      // Ensure controls are looking at the model
      three.userData.controls.update();
    }
  });
  
  if (error) {
    return (
      <group>
        <DebugBox />
        <Html position={[0, 1, 0]} center>
          <div style={{ 
            background: 'rgba(255,0,0,0.2)', 
            padding: '15px', 
            borderRadius: '5px',
            color: 'white',
            maxWidth: '300px',
            textAlign: 'center',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>Error Loading Model</div>
            <div>{error}</div>
            <div style={{ fontSize: '12px', marginTop: '10px', opacity: 0.8 }}>
              Try using a GLB file instead of GLTF if you continue to have issues.
            </div>
          </div>
        </Html>
      </group>
    );
  }
  
  // Render the model
  return (
    <group>
      {/* Debug helpers */}
      <AxesHelper />
      
      {/* Origin indicator - always visible */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color="#ff0000" />
      </mesh>
      
      {/* Grid at the origin */}
      <gridHelper args={[10, 20, '#888888', '#444444']} />
      
      {/* Main model container */}
      <group ref={modelRef} />
      
      {/* Attachment points - always render these */}
      <AttachmentPointHelper 
        attachmentPoints={attachmentPoints}
        onAttachmentPointUpdated={onAttachmentPointUpdated}
        selectedPoint={selectedPoint}
        onSelectPoint={onSelectPoint}
        modelInfo={modelInfo}
      />
      
      {/* Debug labels */}
      {modelLoaded && (
        <>
          <Html position={[0, -1.5, 0]} center>
            <div style={{ background: 'rgba(0,255,0,0.2)', padding: '5px', borderRadius: '5px' }}>
              Model loaded
            </div>
          </Html>
          {modelInfo && (
            <Html position={[0, -2, 0]} center>
              <div style={{ background: 'rgba(0,0,0,0.5)', padding: '5px', borderRadius: '5px', color: 'white', fontSize: '12px' }}>
                Size: {modelInfo.size.x.toFixed(2)} x {modelInfo.size.y.toFixed(2)} x {modelInfo.size.z.toFixed(2)}
              </div>
            </Html>
          )}
          
          {/* Draw bounding box for debugging */}
          {modelInfo && debugMode && (
            <Box3Helper
              box={new THREE.Box3(
                new THREE.Vector3(
                  -modelInfo.size.x/2,
                  -modelInfo.size.y/2,
                  -modelInfo.size.z/2
                ),
                new THREE.Vector3(
                  modelInfo.size.x/2,
                  modelInfo.size.y/2,
                  modelInfo.size.z/2
                )
              )}
              color="yellow"
            />
          )}
        </>
      )}
      
      {/* Show loading state */}
      {!modelLoaded && !error && (
        <Html position={[0, 0, 0]} center>
          <div style={{ 
            background: 'rgba(0,0,0,0.7)', 
            padding: '10px', 
            borderRadius: '5px', 
            color: 'white',
            fontSize: '14px'
          }}>
            Processing model...
          </div>
        </Html>
      )}
    </group>
  );
};

/**
 * The different types of bike components that can be uploaded and have attachment points
 */
const COMPONENT_TYPES = [
  { value: 'seat_post', label: 'Seat Post' },
  { value: 'handlebar', label: 'Handlebar' },
  { value: 'wheel', label: 'Wheel' },
  { value: 'frame', label: 'Frame' },
  { value: 'other', label: 'Other Component' }
];

/**
 * Pedro Page Component
 * 
 * This component provides a 3D model upload and visualization interface for the
 * seat post attachment points task, but can be extended for other components.
 * 
 * Features include:
 * - File upload for GLB/GLTF models
 * - 3D viewer with orbit controls
 * - Attachment point management
 * - Component type selection
 * - Measurement input
 */
const Pedro: React.FC = () => {
  // We now store the actual File object, not the URL
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [opened, { open, close }] = useDisclosure(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<string | null>('upload');
  const [debugMode, setDebugMode] = useState(true); // Enable debug by default
  
  // Component type and measurements
  const [componentType, setComponentType] = useState<string>('seat_post');
  const [measurements, setMeasurements] = useState<{
    length: number;
    diameter: number;
    weight: number;
  }>({
    length: 350, // mm
    diameter: 31.6, // mm
    weight: 250 // grams
  });
  
  // Attachment points
  const [attachmentPoints, setAttachmentPoints] = useState<AttachmentPoint[]>([]);
  const [selectedPoint, setSelectedPoint] = useState<string | null>(null);

  /**
   * Handles file selection from the input
   * Validates file type and stores the File object
   */
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const files = event.target.files;
    if (!files || files.length === 0) {
      setLoading(false);
      return;
    }

    const file = files[0];
    const extension = file.name.split('.').pop()?.toLowerCase();

    if (extension !== 'glb' && extension !== 'gltf') {
      setError('Only GLB and GLTF files are supported.');
      setLoading(false);
      return;
    }

    setError(null);
    
    // We store the actual File object directly
    setUploadedFile(file);
    console.log('Loaded file:', file.name, 'type:', file.type, 'size:', file.size);
    
    // Reset attachment points for new model
    setAttachmentPoints([]);
    
    // Small delay to allow the UI to update before loading the model
    setTimeout(() => {
      setLoading(false);
      // Switch to the configure tab once the model is loaded
      setActiveTab('configure');
    }, 500);
  };

  /**
   * Triggers the file input click
   */
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  /**
   * Adds a new attachment point to the model
   */
  const handleAddAttachmentPoint = () => {
    const newPoint: AttachmentPoint = {
      id: uuidv4(),
      position: [0, 0, 0],
      rotation: [0, 0, 0, 1], // Default quaternion (no rotation)
      normal: [0, 1, 0], // Default normal (up)
      color: '#00a8ff'
    };
    
    setAttachmentPoints([...attachmentPoints, newPoint]);
    setSelectedPoint(newPoint.id);
    console.log('Added new attachment point:', newPoint);
  };

  /**
   * Updates an existing attachment point
   */
  const handleAttachmentPointUpdated = (updatedPoint: AttachmentPoint) => {
    setAttachmentPoints(
      attachmentPoints.map(point => 
        point.id === updatedPoint.id ? updatedPoint : point
      )
    );
    console.log('Updated attachment point:', updatedPoint);
  };

  /**
   * Removes an attachment point
   */
  const handleRemoveAttachmentPoint = (pointId: string) => {
    setAttachmentPoints(attachmentPoints.filter(point => point.id !== pointId));
    if (selectedPoint === pointId) {
      setSelectedPoint(null);
    }
    console.log('Removed attachment point:', pointId);
  };
  
  /**
   * Update a measurement value
   */
  const handleMeasurementChange = (field: keyof typeof measurements, value: number) => {
    setMeasurements({
      ...measurements,
      [field]: value
    });
  };

  /**
   * Handle search functionality (placeholder)
   */
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Implement actual search if needed
  };

  /**
   * Get the title based on the component type
   */
  const getComponentTitle = () => {
    const component = COMPONENT_TYPES.find(t => t.value === componentType);
    return component ? component.label : 'Component';
  };

  /**
   * Toggle debug mode
   */
  const toggleDebugMode = () => {
    setDebugMode(!debugMode);
  };

  return (
    <PageLayout
      title="Component Attachment Tool"
      totalPages={1}
      currentPage={1}
      onPageChange={() => {}}
      onSearch={handleSearch}
    >
      <div className="pedro-container">
        <div className="pedro-controls">
          <Tabs value={activeTab} onChange={setActiveTab}>
            <Tabs.List>
              <Tabs.Tab value="upload">
                <div className="tab-content">
                  <IconUpload size={14} />
                  <span style={{ marginLeft: '8px' }}>Upload</span>
                </div>
              </Tabs.Tab>
              <Tabs.Tab 
                value="configure" 
                disabled={!uploadedFile}
              >
                <div className="tab-content">
                  <IconAdjustments size={14} />
                  <span style={{ marginLeft: '8px' }}>Configure</span>
                </div>
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="upload" pt="xs">
              <Title order={2} mt="md" mb="md">{getComponentTitle()} Configuration</Title>
              
              <Select
                label="Component Type"
                placeholder="Select component type"
                data={COMPONENT_TYPES}
                value={componentType}
                onChange={(value) => setComponentType(value || 'seat_post')}
                mb="md"
              />
              
              <Text mb="xl">
                Upload a GLTF or GLB file of a {getComponentTitle().toLowerCase()} and define attachment points (planes) 
                to align with a predefined plane on a bike frame.
              </Text>

              {error && (
                <Alert color="red" mb="md">
                  {error}
                </Alert>
              )}

              <Box className="upload-button-container" mb="xl">
                <input
                  type="file"
                  id="model-upload"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileSelect}
                  accept=".glb,.gltf"
                />
                <Button 
                  onClick={handleUploadClick} 
                  size="lg" 
                  fullWidth 
                  color="blue" 
                  leftSection={<IconUpload size={20} />}
                >
                  Upload {getComponentTitle()} Model
                </Button>
                <Text size="xs" c="dimmed" ta="center" mt={5}>
                  Supported formats: GLB, GLTF (with DRACO compression)
                </Text>
                <Text size="xs" c="dimmed" ta="center" mt={2}>
                  Note: GLTF files must be self-contained or use DRACO compression
                </Text>
              </Box>

              {uploadedFile && (
                <Box mb="md" className="uploaded-file-info">
                  <Text fw={600}>Uploaded Model:</Text>
                  <Text>{uploadedFile.name}</Text>
                  <Text size="sm" c="dimmed">
                    Size: {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
                  </Text>
                  <Text size="sm" c="dimmed">
                    Format: {uploadedFile.name.endsWith('.glb') ? 'GLB (Binary)' : 'GLTF (Text)'}
                  </Text>
                </Box>
              )}
            </Tabs.Panel>

            <Tabs.Panel value="configure" pt="xs">
              <Title order={2} mt="md" mb="md">{getComponentTitle()} Attachment Points</Title>
              
              <Text mb="md">
                Define attachment points for your {getComponentTitle().toLowerCase()} to connect with a bike frame.
              </Text>
              
              <Button 
                onClick={handleAddAttachmentPoint}
                leftSection={<IconPlus size={14} />}
                mb="md"
                color="blue"
                variant="filled"
              >
                Add Attachment Point
              </Button>
              
              {attachmentPoints.length > 0 ? (
                <Box className="attachment-points-list">
                  {attachmentPoints.map(point => (
                    <Box 
                      key={point.id} 
                      className={`attachment-point-item ${selectedPoint === point.id ? 'selected' : ''}`}
                      onClick={() => setSelectedPoint(point.id)}
                    >
                      <Text fw={600}>Attachment Point {attachmentPoints.indexOf(point) + 1}</Text>
                      <Button 
                        variant="subtle" 
                        color="red" 
                        size="xs"
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          handleRemoveAttachmentPoint(point.id);
                        }}
                      >
                        Remove
                      </Button>
                    </Box>
                  ))}
                </Box>
              ) : (
                <Text c="dimmed" mb="md">
                  No attachment points added yet. Click the button above to add one.
                </Text>
              )}
              
              <Title order={3} mt="xl" mb="md">Measurements</Title>
              
              <NumberInput
                label="Length (mm)"
                description="The length of the component"
                value={measurements.length}
                onChange={(value) => handleMeasurementChange('length', value as number)}
                min={1}
                max={1000}
                mb="md"
              />
              
              <NumberInput
                label="Diameter (mm)"
                description="The diameter of the component"
                value={measurements.diameter}
                onChange={(value) => handleMeasurementChange('diameter', value as number)}
                min={1}
                max={100}
                step={0.1}
                decimalScale={1}
                mb="md"
              />
              
              <NumberInput
                label="Weight (g)"
                description="The weight of the component"
                value={measurements.weight}
                onChange={(value) => handleMeasurementChange('weight', value as number)}
                min={1}
                max={5000}
                mb="md"
              />
              
              <Button
                onClick={toggleDebugMode}
                variant="subtle"
                size="xs"
                color="gray"
                mt="md"
              >
                {debugMode ? 'Disable Debug Mode' : 'Enable Debug Mode'}
              </Button>
            </Tabs.Panel>
          </Tabs>
        </div>

        <div className="pedro-viewer">
          {loading ? (
            <div className="loading-container">
              <Loader size="lg" />
              <Text mt="md">Loading 3D model...</Text>
            </div>
          ) : uploadedFile ? (
            <Canvas 
              camera={{ position: [2, 2, 4], fov: 50 }}
              style={{ background: '#f0f0f0' }}
              shadows
            >
              {/* Lighting */}
              <ambientLight intensity={1.0} />
              <spotLight position={[5, 10, 5]} angle={0.3} penumbra={1} intensity={1.5} castShadow />
              <pointLight position={[-5, -5, -5]} intensity={0.7} />
              <directionalLight position={[0, 5, 5]} intensity={0.8} castShadow />
              <directionalLight position={[5, 5, -5]} intensity={0.5} />
              
              {/* Scene Content */}
              <Suspense fallback={<DebugBox />}>
                {/* Using our new DirectModel component that takes the File object directly */}
                <DirectModel 
                  file={uploadedFile} 
                  attachmentPoints={attachmentPoints}
                  onAttachmentPointUpdated={handleAttachmentPointUpdated}
                  selectedPoint={selectedPoint}
                  onSelectPoint={setSelectedPoint}
                  debugMode={debugMode}
                />
                
                {/* Helpers and environment - using city preset which is more reliable */}
                <Grid infiniteGrid fadeDistance={30} fadeStrength={5} cellSize={0.5} sectionSize={2} />
                <ContactShadows opacity={0.5} scale={10} blur={1} far={10} resolution={256} />
                {/* Skip environment to avoid HDR loading issues */}
              </Suspense>
              
              {/* Camera Controls */}
              <OrbitControls 
                makeDefault 
                enableDamping={true}
                dampingFactor={0.1}
                minDistance={0.1}
                maxDistance={100}
                maxPolarAngle={Math.PI / 1.5}
                enablePan={true}
              />
              
              {/* Debug Helpers */}
              {debugMode && (
                <>
                  <Stats />
                  <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
                    <GizmoViewport labelColor="white" axisColors={['red', 'green', 'blue']} />
                  </GizmoHelper>
                </>
              )}
            </Canvas>
          ) : (
            <div className="empty-viewer">
              <IconUpload size={48} stroke={1.5} color="#adb5bd" />
              <Text size="xl" c="dimmed" ta="center" mt="md">
                Upload a model to view it here
              </Text>
              <Text size="sm" c="dimmed" ta="center" mt="xs">
                Click the upload button on the left to select a GLB or GLTF file
              </Text>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Pedro; 