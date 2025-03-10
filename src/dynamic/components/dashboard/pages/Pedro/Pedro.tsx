import React, { useState, useEffect, useRef, Suspense, useCallback, createContext, useContext, useMemo } from 'react';
import { Text, Button, Alert, Box, Group, Title, Loader, Tabs, Select, NumberInput, Switch, Stack, Code } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { ThreeEvent } from '@react-three/fiber/dist/declarations/src/core/events';
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
  useHelper,
  Text as DreiText,
  useProgress
} from '@react-three/drei';
import { IconUpload, IconPlus, IconAdjustments, IconList, IconBraces } from '@tabler/icons-react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import PageLayout from '../../components/PageLayout/PageLayout';
import { v4 as uuidv4 } from 'uuid';
import AttachmentPointHelper, { AttachmentPoint } from './components/AttachmentPointHelper';
import MeshExplorer from './components/MeshExplorer';
import SnapPointControl from './components/SnapPointControl';
import './Pedro.css';

// Create DRACOLoader outside of component to reuse
const createDRACOLoader = () => {
  const dracoLoader = new DRACOLoader();
  // Use the original path that worked before
  dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.5/');
  // Explicitly use JS decoder rather than WASM to avoid some CSP issues
  dracoLoader.setDecoderConfig({ type: 'js' });
  return dracoLoader;
};

// Create GLTFLoader outside of component to reuse
const createGLTFLoader = () => {
  const loader = new GLTFLoader();
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
  // File and model state
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [modelUrl, setModelUrl] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [opened, { open, close }] = useDisclosure(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<string | null>('upload');
  const [debugMode, setDebugMode] = useState(true);
  
  // New state for mesh exploration 
  const [meshes, setMeshes] = useState<any[]>([]);
  const [selectedMesh, setSelectedMesh] = useState<string | null>(null);
  const [modelInfo, setModelInfo] = useState<any>(null);
  const [showAdvancedControls, setShowAdvancedControls] = useState<boolean>(false);
  const [addMode, setAddMode] = useState<'manual' | 'auto' | 'mesh'>('manual');
  const [showWireframe, setShowWireframe] = useState<boolean>(false);
  const [showBoundingBoxes, setShowBoundingBoxes] = useState<boolean>(true);
  
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

  // Add attachment mode state
  const [attachmentMode, setAttachmentMode] = useState<'manual' | 'automatic' | 'mesh'>('manual');

  useEffect(() => {
    if (uploadedFile) {
      console.log("Pedro component: uploadedFile is set:", uploadedFile.name);
      console.log("Creating modelUrl from uploadedFile");
      
      // Create a new model URL from the uploaded file
      const newModelUrl = URL.createObjectURL(uploadedFile);
      setModelUrl(newModelUrl);
      console.log("ModelURL created:", newModelUrl);
      
      // Clean up function to revoke the URL when the component unmounts or when the file changes
      return () => {
        if (modelUrl) {
          console.log("Revoking old modelUrl");
          URL.revokeObjectURL(modelUrl);
        }
      };
    }
  }, [uploadedFile]); // Only re-run when uploadedFile changes

  /**
   * Handles file selection from the input
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

    console.log('Selected file:', file.name, 'type:', file.type, 'size:', file.size);
    setError(null);
    setUploadedFile(file);
    
    // Switch to the configure tab once the model is loaded
    setTimeout(() => {
      setLoading(false);
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
   * Adds a new attachment point to the model - now considers selected mesh
   */
  const handleAddAttachmentPoint = () => {
    // Create a position based on the selected mesh if one is selected
    let position: [number, number, number] = [0, 0, 0];
    let meshId: string | undefined = undefined;
    let normal: [number, number, number] = [0, 1, 0]; // Default normal (up)
    
    // Default quaternion (no rotation)
    let rotation: [number, number, number, number] = [0, 0, 0, 1];
    
    // Add the position logic here if we have a selected mesh
    // This will be dynamically populated in the DirectModel component when a mesh is selected
    
    if (selectedMesh) {
      const mesh = meshes.find(m => m.id === selectedMesh);
      if (mesh && Array.isArray(mesh.position) && mesh.position.length >= 3) {
        position = [mesh.position[0], mesh.position[1], mesh.position[2]];
        meshId = mesh.id;
      }
    }
    
    const newPoint: AttachmentPoint = {
      id: uuidv4(),
      position,
      rotation,
      normal,
      color: '#00a8ff',
      meshId
    };
    
    setAttachmentPoints([...attachmentPoints, newPoint]);
    setSelectedPoint(newPoint.id);
    console.log('Added new attachment point:', newPoint);
  };

  /**
   * Adds a snap point at a specific position
   */
  const handleAddSnapPoint = (point: any) => {
    const position: [number, number, number] = Array.isArray(point.position) && point.position.length >= 3 
      ? [point.position[0], point.position[1], point.position[2]]
      : [0, 0, 0];

    const newPoint: AttachmentPoint = {
      id: uuidv4(),
      position,
      rotation: point.rotation || [0, 0, 0, 1],
      normal: point.normal || [0, 1, 0],
      color: point.color || '#00a8ff',
      meshId: point.meshId
    };
    
    setAttachmentPoints([...attachmentPoints, newPoint]);
    setSelectedPoint(newPoint.id);
    console.log('Added new snap point:', newPoint);
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
   * Handle when meshes are loaded from MeshExplorer
   */
  const handleMeshesLoaded = (loadedMeshes: any[]) => {
    // Ensure we have valid mesh data
    if (!loadedMeshes || !Array.isArray(loadedMeshes)) {
      console.error('Invalid meshes data received:', loadedMeshes);
      return;
    }
    
    setMeshes(loadedMeshes);
    console.log('Loaded meshes:', loadedMeshes);
    
    // Calculate model statistics
    if (loadedMeshes.length > 0) {
      try {
        // Find model dimensions
        let minX = Infinity, minY = Infinity, minZ = Infinity;
        let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
        
        loadedMeshes.forEach(mesh => {
          // Check if mesh has position data in the expected format
          if (mesh.position) {
            // Handle different position formats (array or Vector3)
            const pos = Array.isArray(mesh.position) 
              ? mesh.position 
              : mesh.object?.position 
                ? [mesh.object.position.x, mesh.object.position.y, mesh.object.position.z]
                : [0, 0, 0];
            
            minX = Math.min(minX, pos[0]);
            minY = Math.min(minY, pos[1]);
            minZ = Math.min(minZ, pos[2]);
            maxX = Math.max(maxX, pos[0]);
            maxY = Math.max(maxY, pos[1]);
            maxZ = Math.max(maxZ, pos[2]);
          } else if (mesh.object && mesh.object.position) {
            // Handle when mesh has a Three.js object with position
            const pos = mesh.object.position;
            minX = Math.min(minX, pos.x);
            minY = Math.min(minY, pos.y);
            minZ = Math.min(minZ, pos.z);
            maxX = Math.max(maxX, pos.x);
            maxY = Math.max(maxY, pos.y);
            maxZ = Math.max(maxZ, pos.z);
          }
        });
        
        // Ensure we have valid min/max values
        if (minX === Infinity || minY === Infinity || minZ === Infinity ||
            maxX === -Infinity || maxY === -Infinity || maxZ === -Infinity) {
          console.log('Could not determine model dimensions from meshes');
          // Use fallback dimensions
          minX = minY = minZ = -1;
          maxX = maxY = maxZ = 1;
        }
        
        const width = maxX - minX;
        const height = maxY - minY;
        const depth = maxZ - minZ;
        
        setModelInfo({
          meshCount: loadedMeshes.length,
          dimensions: {
            width: width.toFixed(2),
            height: height.toFixed(2),
            depth: depth.toFixed(2)
          },
          bounds: {
            min: [minX.toFixed(2), minY.toFixed(2), minZ.toFixed(2)],
            max: [maxX.toFixed(2), maxY.toFixed(2), maxZ.toFixed(2)]
          }
        });
      } catch (error) {
        console.error('Error calculating model dimensions:', error);
        setModelInfo({
          meshCount: loadedMeshes.length,
          dimensions: { width: '0', height: '0', depth: '0' },
          bounds: { min: ['0', '0', '0'], max: ['0', '0', '0'] }
        });
      }
    }
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

  /**
   * Handle receiving an attachment point from the DirectModel component
   */
  const handleDirectModelAttachmentPoint = (point: AttachmentPoint) => {
    setAttachmentPoints([...attachmentPoints, point]);
    setSelectedPoint(point.id);
    console.log('Added attachment point from DirectModel:', point);
  };
  
  /**
   * Update attachment mode
   */
  const changeAttachmentMode = (mode: 'manual' | 'automatic' | 'mesh') => {
    setAttachmentMode(mode);
    console.log(`Attachment mode changed to: ${mode}`);
  };

  // Render the configure tab with attachment mode options
  const renderAttachmentOptions = () => {
    return (
      <Box mb="md">
        <Title order={3} mb="sm">Attachment Mode</Title>
        <Group>
          <Button 
            variant={attachmentMode === 'manual' ? 'filled' : 'outline'} 
            onClick={() => changeAttachmentMode('manual')}
            color="blue"
            size="sm"
          >
            Manual
          </Button>
          <Button 
            variant={attachmentMode === 'automatic' ? 'filled' : 'outline'} 
            onClick={() => changeAttachmentMode('automatic')}
            color="green"
            size="sm"
          >
            Automatic
          </Button>
          <Button 
            variant={attachmentMode === 'mesh' ? 'filled' : 'outline'} 
            onClick={() => changeAttachmentMode('mesh')}
            color="violet"
            size="sm"
          >
            Mesh Selection
          </Button>
        </Group>
        <Text size="sm" mt="xs" c="dimmed">
          {attachmentMode === 'manual' && 'Manually place attachment points in 3D space.'}
          {attachmentMode === 'automatic' && 'Automatically place attachment points based on model geometry.'}
          {attachmentMode === 'mesh' && 'Click on specific meshes to place attachment points.'}
        </Text>
      </Box>
    );
  };

  // Return statement in Pedro component to simplify rendering
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
              <Tabs.Tab value="configure" disabled={!uploadedFile}>
                <div className="tab-content">
                  <IconAdjustments size={14} />
                  <span style={{ marginLeft: '8px' }}>Configure</span>
                </div>
              </Tabs.Tab>
              <Tabs.Tab value="debug" disabled={!uploadedFile}>
                <div className="tab-content">
                  <IconBraces size={14} />
                  <span style={{ marginLeft: '8px' }}>Debug</span>
                </div>
              </Tabs.Tab>
            </Tabs.List>

            {/* Tab Panels */}
            <Tabs.Panel value="upload" pt="xs">
              <Title order={2} mt="md" mb="md">{getComponentTitle()} Configuration</Title>
              
              <Select
                label="Component Type"
                placeholder="Select component type"
                data={COMPONENT_TYPES}
                value={componentType}
                onChange={(value) => setComponentType(value || 'wheel')}
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
                  Supported formats: GLB, GLTF
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
              
              {renderAttachmentOptions()}
              
              <Group>
                <Button
                  onClick={toggleDebugMode}
                  variant="subtle"
                  size="xs"
                  color="gray"
                  mt="md"
                >
                  {debugMode ? 'Disable Debug Mode' : 'Enable Debug Mode'}
                </Button>
                <Button
                  onClick={() => setShowWireframe(!showWireframe)}
                  variant="subtle"
                  size="xs"
                  color="blue"
                  mt="md"
                >
                  {showWireframe ? 'Hide Wireframe' : 'Show Wireframe'}
                </Button>
              </Group>
            </Tabs.Panel>

            <Tabs.Panel value="debug" pt="xs">
              <Title order={2} mt="md" mb="md">Debug Information</Title>
              {modelInfo ? (
                <div>
                  <Text fw={600}>Model Dimensions:</Text>
                  <Code block>
                    {JSON.stringify(modelInfo.dimensions || {}, null, 2)}
                  </Code>
                  
                  <Text fw={600} mt="md">Mesh Count:</Text>
                  <Code>{modelInfo.meshCount || 0} meshes</Code>
                  
                  <Text fw={600} mt="md">Attachment Points:</Text>
                  <Code block>
                    {JSON.stringify(attachmentPoints, null, 2)}
                  </Code>
                </div>
              ) : (
                <Text c="dimmed">No model information available</Text>
              )}
            </Tabs.Panel>
          </Tabs>
        </div>

        <div className="pedro-viewer">
          {loading ? (
            <div className="loading-container">
              <Loader size="lg" />
              <Text mt="md">Loading 3D model...</Text>
            </div>
          ) : (
            // The 3D Viewer - ALWAYS render this if uploadedFile exists
            uploadedFile && (
              <Canvas 
                camera={{ 
                  position: [10, 10, 10], 
                  fov: 50,
                  near: 0.1,
                  far: 1000
                }}
                style={{ 
                  background: '#f5f7f9',
                  width: '100%',
                  height: '100%'
                }}
                shadows
                onCreated={({ gl, scene, camera }) => {
                  console.log("Canvas created, camera:", camera.position);
                  gl.setClearColor('#f5f7f9', 1);
                  gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                }}
              >
                <ambientLight intensity={0.8} />
                <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={1.5} castShadow />
                <directionalLight position={[-5, 10, -5]} intensity={0.5} castShadow />
                <color attach="background" args={['#f5f7f9']} />
                
                {/* SIMPLE, DIRECT APPROACH - Always render DirectModel */}
                <Suspense fallback={<group><LoadingIndicator message="Loading model..." /></group>}>
                  <DirectModel 
                    file={uploadedFile}
                    attachmentPoints={attachmentPoints}
                    onAttachmentPointUpdated={handleAttachmentPointUpdated}
                    selectedPoint={selectedPoint}
                    onSelectPoint={setSelectedPoint}
                    debugMode={debugMode}
                    wireframe={showWireframe}
                    onModelInfoLoaded={(info) => {
                      console.log("Model info received:", info);
                      handleMeshesLoaded(info.meshes || []);
                      setModelInfo(info);
                    }}
                    attachmentMode={attachmentMode}
                    onAddAttachmentPoint={handleDirectModelAttachmentPoint}
                  />
                  <Grid args={[20, 20]} position={[0, -0.01, 0]} />
                </Suspense>
                
                <OrbitControls 
                  makeDefault 
                  enableDamping={true}
                  dampingFactor={0.1}
                  minDistance={1}
                  maxDistance={100}
                />
                
                {debugMode && (
                  <>
                    <axesHelper args={[5]} />
                    <Stats />
                  </>
                )}
              </Canvas>
            )
          )}
          
          {!uploadedFile && !loading && (
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

// Direct Model component updated state
const DirectModel = ({ 
  file, 
  attachmentPoints, 
  onAttachmentPointUpdated, 
  selectedPoint, 
  onSelectPoint,
  debugMode = true,
  wireframe = false,
  onModelInfoLoaded,
  attachmentMode,
  onAddAttachmentPoint
}: { 
  file: File | null; 
  attachmentPoints: AttachmentPoint[];
  onAttachmentPointUpdated: (point: AttachmentPoint) => void;
  selectedPoint: string | null;
  onSelectPoint: (id: string | null) => void;
  debugMode?: boolean;
  wireframe?: boolean;
  onModelInfoLoaded?: (info: any) => void;
  attachmentMode: 'manual' | 'automatic' | 'mesh';
  onAddAttachmentPoint: (point: AttachmentPoint) => void;
}) => {
  const [modelLoaded, setModelLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [modelInfo, setModelInfo] = useState<{ 
    size: THREE.Vector3, 
    center: THREE.Vector3,
    meshes?: any[] 
  } | null>(null);
  const [hoveredMesh, setHoveredMesh] = useState<string | null>(null);
  const [selectedMeshId, setSelectedMeshId] = useState<string | null>(null);
  const [meshSelectionMode, setMeshSelectionMode] = useState(false);
  
  // Add a state to track which meshes are visible in the list
  const [visibleMeshes, setVisibleMeshes] = useState<{id: string, name: string}[]>([]);
  
  // Add refs to track state
  const modelRef = useRef<THREE.Group>(null);
  const loadingModelRef = useRef<File | null>(null);
  const meshesRef = useRef<{[key: string]: THREE.Mesh}>({});
  const autoPointsGeneratedRef = useRef<boolean>(false);
  const { scene: three, camera, size, raycaster } = useThree();

  // Reset auto points generated ref when file changes
  useEffect(() => {
    if (file !== loadingModelRef.current) {
      autoPointsGeneratedRef.current = false;
    }
  }, [file]);
  
  // Handle automatic attachment point generation
  useEffect(() => {
    // Only run when in automatic mode and model is loaded
    // Add check to ensure we only generate points once per model
    if (attachmentMode === 'automatic' && 
        modelLoaded && 
        modelInfo && 
        Object.keys(meshesRef.current).length > 0 && 
        !autoPointsGeneratedRef.current) {
      
      console.log("Automatically generating attachment points...");
      
      // Get all meshes
      const allMeshes = Object.values(meshesRef.current);
      
      // Find key points on the model (we'll use a simple algorithm for now)
      const autoPoints: AttachmentPoint[] = [];
      
      // Use the largest 2-3 meshes for attachment points
      const sortedMeshes = [...allMeshes].sort((a, b) => {
        const sizeA = new THREE.Box3().setFromObject(a).getSize(new THREE.Vector3()).length();
        const sizeB = new THREE.Box3().setFromObject(b).getSize(new THREE.Vector3()).length();
        return sizeB - sizeA; // Sort by size descending
      });
      
      // Take the top 3 meshes or fewer if not enough
      const topMeshes = sortedMeshes.slice(0, Math.min(3, sortedMeshes.length));
      
      // For each top mesh, create an attachment point
      topMeshes.forEach((mesh, index) => {
        // Get mesh bounding box and center
        const box = new THREE.Box3().setFromObject(mesh);
        const center = box.getCenter(new THREE.Vector3());
        
        // Create attachment point at the center of the mesh
        const newPoint: AttachmentPoint = {
          id: uuidv4(),
          position: [center.x, center.y, center.z],
          rotation: [0, 0, 0, 1], // Default quaternion
          normal: [0, 1, 0], // Default normal (up)
          color: '#22cc88', // Green for automatic points
          meshId: mesh.userData.id
        };
        
        autoPoints.push(newPoint);
      });
      
      // Add all automatic points
      console.log(`Created ${autoPoints.length} automatic attachment points`);
      autoPoints.forEach(point => {
        onAddAttachmentPoint(point);
      });
      
      // Mark that we've generated points for this model
      autoPointsGeneratedRef.current = true;
    }
  }, [attachmentMode, modelLoaded, modelInfo, onAddAttachmentPoint]);
  
  // After model is loaded, create a list of meshes for the UI
  useEffect(() => {
    if (modelLoaded && modelInfo?.meshes) {
      const meshList = modelInfo.meshes.map(mesh => ({
        id: mesh.id,
        name: mesh.name || `Mesh ${mesh.index}`
      }));
      setVisibleMeshes(meshList);
    } else {
      setVisibleMeshes([]);
    }
  }, [modelLoaded, modelInfo]);
  
  // Improve mesh hover and click interactions
  const handleMeshHover = (event: ThreeEvent<PointerEvent>) => {
    if (!meshSelectionMode) return;
    
    // Check if we're hovering over a mesh
    if (event.object instanceof THREE.Mesh && event.object.userData.selectable) {
      // Set hover state
      setHoveredMesh(event.object.userData.id);
      document.body.style.cursor = 'pointer';
    }
  };
  
  const handleMeshLeave = () => {
    if (meshSelectionMode) {
      setHoveredMesh(null);
      document.body.style.cursor = 'auto';
    }
  };
  
  // Handle mesh clicks to create attachment points
  const handleMeshClick = (event: ThreeEvent<MouseEvent>) => {
    if (!meshSelectionMode) return;
    
    // Check if we clicked on a mesh
    if (event.object instanceof THREE.Mesh && event.object.userData.selectable) {
      // Set selected mesh
      setSelectedMeshId(event.object.userData.id);
      
      // Create attachment point at hit position
      if (event.point) {
        const hitPosition: [number, number, number] = [event.point.x, event.point.y, event.point.z];
        
        // Calculate normal at intersection point
        const normal: [number, number, number] = [0, 1, 0]; // Default normal (up)
        if (event.face) {
          normal[0] = event.face.normal.x;
          normal[1] = event.face.normal.y;
          normal[2] = event.face.normal.z;
        }
        
        // Create a quaternion from the normal to orient the attachment point
        const quaternion = new THREE.Quaternion().setFromUnitVectors(
          new THREE.Vector3(0, 1, 0), // Default up vector
          new THREE.Vector3(normal[0], normal[1], normal[2])
        );
        
        // Create a new attachment point at the hit location
        const newPoint: AttachmentPoint = {
          id: uuidv4(),
          position: hitPosition,
          rotation: [quaternion.x, quaternion.y, quaternion.z, quaternion.w],
          normal,
          color: '#00b8ff',
          meshId: event.object.userData.id
        };
        
        // Add the attachment point using the callback
        onAddAttachmentPoint(newPoint);
      }
    }
  };
  
  // Toggle mesh selection mode (only used for manual toggling)
  const toggleMeshSelectionMode = () => {
    if (attachmentMode !== 'mesh') {
      // Only allow toggling when not in mesh selection mode already
      return;
    }
    
    setMeshSelectionMode(prev => !prev);
    if (!meshSelectionMode) {
      console.log("Mesh selection mode enabled - click on a mesh to add an attachment point");
    } else {
      setSelectedMeshId(null);
      setHoveredMesh(null);
    }
  };
  
  // Handle direct file loading using a simpler, more reliable method
  useEffect(() => {
    // Skip if no file or if we already loaded this exact file
    if (!file) {
      console.log("DirectModel: No file provided");
      return;
    }
    
    if (!modelRef.current) {
      console.log("DirectModel: modelRef is not available");
      return;
    }
    
    // Skip if this exact file is already being loaded
    if (loadingModelRef.current === file) {
      console.log("DirectModel: This file is already being loaded, skipping");
      return;
    }
    
    // Set loading state
    setLoading(true);
    setModelLoaded(false);
    setError(null);
    loadingModelRef.current = file;
    setSelectedMeshId(null);
    setHoveredMesh(null);
    
    // Clear any existing meshes
    meshesRef.current = {};
    
    console.log("DirectModel: Starting to load file directly:", file.name);
    
    // Create a URL for the file - simplest approach
    const objectUrl = URL.createObjectURL(file);
    console.log("DirectModel: Created objectUrl:", objectUrl);
    
    // Remove any existing model
    while (modelRef.current.children.length > 0) {
      modelRef.current.remove(modelRef.current.children[0]);
    }
    
    // Use the simplest possible approach with GLTFLoader
    const loader = new GLTFLoader();
    console.log("DirectModel: Created GLTFLoader");
    
    // Basic loading approach
    try {
      console.log("DirectModel: Starting load");
      
      loader.load(
        objectUrl,
        (gltf) => {
          // Ensure we're still working with the same file
          if (!file) {
            URL.revokeObjectURL(objectUrl);
            return;
          }
          
          console.log("DirectModel: Load succeeded!", gltf);
          console.log("DirectModel: Scene children count:", gltf.scene.children.length);
          
          if (modelRef.current) {
            // Add the model directly to our ref
            modelRef.current.add(gltf.scene);
            
            // Process model for view
            const meshes: any[] = [];
            let foundMeshes = 0;
            
            // First, let's get the bounding box of the original model
            const modelBox = new THREE.Box3().setFromObject(gltf.scene);
            const modelSize = modelBox.getSize(new THREE.Vector3());
            const modelCenter = modelBox.getCenter(new THREE.Vector3());
            
            console.log("DirectModel: Raw model size:", modelSize);
            console.log("DirectModel: Raw model center:", modelCenter);
            
            // Calculate proper scale - don't normalize
            const maxDim = Math.max(modelSize.x, modelSize.y, modelSize.z);
            let scale = 1.0;
            
            // Only scale very large or very small models
            if (maxDim > 10) {
              scale = 5 / maxDim; // Scale down large models
            } else if (maxDim < 0.1) {
              scale = 2 / maxDim; // Scale up tiny models
            }
            
            // Apply transformation to the whole model
            gltf.scene.position.set(-modelCenter.x, -modelCenter.y, -modelCenter.z);
            gltf.scene.scale.set(scale, scale, scale);
            
            console.log(`DirectModel: Applied scale: ${scale}`);
            
            // Traverse and prepare individual meshes
            gltf.scene.traverse((child: THREE.Object3D) => {
              // Make sure everything is visible
              child.visible = true;
              
              if (child instanceof THREE.Mesh) {
                foundMeshes++;
                const meshName = child.name || `unnamed_${foundMeshes}`;
                console.log("DirectModel: Found mesh:", meshName);
                
                // Set a unique id for this mesh
                child.userData.id = child.uuid;
                
                // Make mesh interactive
                child.userData.selectable = true;
                
                // Store in our meshes ref for quick access
                meshesRef.current[child.uuid] = child;
                
                // Basic mesh setup
                child.castShadow = true;
                child.receiveShadow = true;
                
                // Fix issues with materials
                if (child.material) {
                  if (Array.isArray(child.material)) {
                    child.material.forEach(mat => {
                      if (wireframe && 'wireframe' in mat) mat.wireframe = true;
                      mat.side = THREE.DoubleSide; // Ensure we see back faces too
                      mat.needsUpdate = true;
                    });
                  } else {
                    if (wireframe && 'wireframe' in child.material) child.material.wireframe = true;
                    child.material.side = THREE.DoubleSide;
                    child.material.needsUpdate = true;
                  }
                }
                
                // Add to meshes array
                meshes.push({
                  id: child.uuid,
                  name: meshName,
                  index: meshes.length,
                  object: child,
                  position: [child.position.x, child.position.y, child.position.z],
                  scale: [child.scale.x, child.scale.y, child.scale.z],
                  rotation: [child.quaternion.x, child.quaternion.y, child.quaternion.z, child.quaternion.w]
                });
              }
            });
            
            console.log(`DirectModel: Found ${foundMeshes} meshes`);
            
            // Update camera position based on the scaled model
            const scaledSize = modelSize.clone().multiplyScalar(scale);
            const distance = Math.max(scaledSize.x, scaledSize.y, scaledSize.z) * 2.5;
            
            if (camera && camera instanceof THREE.PerspectiveCamera) {
              // Position camera to see the entire model
              camera.position.set(distance, distance, distance);
              camera.lookAt(0, 0, 0);
              camera.updateProjectionMatrix();
              
              console.log(`DirectModel: Camera positioned at distance: ${distance}`);
            }
            
            // Store model information
            const modelInfoData = { 
              size: modelSize, 
              center: modelCenter, 
              meshes 
            };
            
            // Set state to indicate model is loaded - IMPORTANT: do this once and only once
            setModelInfo(modelInfoData);
            
            // Call callback if provided
            if (onModelInfoLoaded) {
              onModelInfoLoaded({ 
                size: modelSize, 
                center: modelCenter, 
                meshes,
                meshCount: meshes.length,
                dimensions: {
                  width: modelSize.x.toFixed(2),
                  height: modelSize.y.toFixed(2),
                  depth: modelSize.z.toFixed(2)
                }
              });
            }
            
            // Finally set loading states - AFTER everything else is done
            setLoading(false);
            setModelLoaded(true);
          }
        },
        (progress) => {
          if (progress.lengthComputable) {
            const percent = Math.round((progress.loaded / progress.total) * 100);
            console.log(`DirectModel: Loading progress: ${percent}%`);
          }
        },
        (error: any) => {
          console.error("DirectModel: Load failed:", error);
          setError(`Failed to load model: ${error.message || 'Unknown error'}`);
          setLoading(false);
          loadingModelRef.current = null; // Reset so we can try loading again
        }
      );
    } catch (err) {
      console.error("DirectModel: Error:", err);
      setError(`Error loading model: ${err instanceof Error ? err.message : String(err)}`);
      setLoading(false);
      loadingModelRef.current = null; // Reset so we can try loading again
    }
    
    // Return cleanup function
    return () => {
      // Only clean up the URL if we're unmounting or loading a different file
      URL.revokeObjectURL(objectUrl);
      console.log("DirectModel: Cleaned up objectUrl");
    };
  }, [file, camera, wireframe]);

  // Update the mesh selection mode based on attachment mode
  useEffect(() => {
    // Enable mesh selection mode when attachmentMode is 'mesh'
    setMeshSelectionMode(attachmentMode === 'mesh');
    
    // If we switch away from mesh selection mode, clear selection
    if (attachmentMode !== 'mesh') {
      setSelectedMeshId(null);
      setHoveredMesh(null);
    }
  }, [attachmentMode]);
  
  return (
    <>
      {/* Main model group */}
      <group ref={modelRef} position={[0, 0, 0]}>
        {/* Model will be loaded here via the useEffect */}
      </group>
      
      {/* Mesh interaction layer - handles hover and click events */}
      {modelLoaded && meshSelectionMode && (
        <group
          onClick={handleMeshClick}
          onPointerOver={handleMeshHover}
          onPointerOut={handleMeshLeave}
        >
          {Object.entries(meshesRef.current).map(([id, mesh]) => {
            const isSelected = id === selectedMeshId;
            const isHovered = id === hoveredMesh;
            
            // Create a clone of the mesh for highlighting
            if (isHovered || isSelected) {
              return (
                <mesh
                  key={`highlight-${id}`}
                  geometry={mesh.geometry}
                  position={mesh.position}
                  rotation={mesh.rotation}
                  scale={mesh.scale}
                >
                  <meshStandardMaterial
                    color={isSelected ? "#ff3366" : "#66aaff"}
                    transparent={true}
                    opacity={0.3}
                    depthWrite={false}
                  />
                </mesh>
              );
            }
            return null;
          })}
        </group>
      )}
      
      {/* Helper objects */}
      {debugMode && (
        <group>
          <AxesHelper />
          <gridHelper args={[20, 20, 0x888888, 0x444444]} />
          
          {/* Only show debug box if model is loaded */}
          {modelInfo && (
            <Box3Helper 
              box={new THREE.Box3().setFromCenterAndSize(
                new THREE.Vector3(0, 0, 0),
                modelInfo.size.clone()
              )} 
              color="yellow" 
            />
          )}
        </group>
      )}
      
      {/* Attachment points */}
      <AttachmentPointHelper 
        attachmentPoints={attachmentPoints}
        onAttachmentPointUpdated={onAttachmentPointUpdated}
        selectedPoint={selectedPoint}
        onSelectPoint={onSelectPoint}
        modelInfo={modelInfo}
      />
      
      {/* Show loading indicator when the model is loading */}
      {loading && !error && (
        <LoadingIndicator message="Loading model... Please wait" />
      )}
      
      {/* Show error message if there was a problem loading the model */}
      {error && (
        <group position={[0, 0, 0]}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="red" />
          </mesh>
          <DreiText
            position={[0, 1.5, 0]}
            fontSize={0.2}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Error Loading Model
          </DreiText>
          <DreiText
            position={[0, 1.2, 0]}
            fontSize={0.1}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {error}
          </DreiText>
        </group>
      )}
      
      {/* Mesh selection mode indicator - only show in mesh selection mode */}
      {modelLoaded && meshSelectionMode && (
        <DreiText
          position={[0, 2, 0]}
          fontSize={0.15}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          backgroundColor="rgba(0,0,0,0.5)"
          padding={0.05}
        >
          Click on a mesh to add an attachment point
        </DreiText>
      )}
      
      {/* Updated floating controls based on attachment mode */}
      {modelLoaded && (
        <Html position={[0, -2, 0]} center>
          <div style={{ 
            background: 'rgba(0,0,0,0.7)', 
            padding: '12px 16px', 
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            color: 'white',
            boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
            maxWidth: '350px'
          }}>
            <div style={{ 
              color: 'white', 
              fontSize: '14px', 
              fontWeight: 'bold',
              borderBottom: '1px solid rgba(255,255,255,0.2)',
              paddingBottom: '8px',
              marginBottom: '4px'
            }}>
              {attachmentMode === 'manual' && 'Manual Mode: Add points using controls panel'}
              {attachmentMode === 'automatic' && 'Auto Mode: Points added to key model areas'}
              {attachmentMode === 'mesh' && 'Mesh Mode: Click on a mesh to add a point'}
            </div>
            
            {/* Show mesh list when in mesh selection mode */}
            {attachmentMode === 'mesh' && visibleMeshes.length > 0 && (
              <div style={{ maxHeight: '150px', overflowY: 'auto' }}>
                <div style={{ marginBottom: '6px', fontSize: '13px' }}>Available Meshes:</div>
                {visibleMeshes.map(mesh => (
                  <div 
                    key={mesh.id}
                    onClick={() => setSelectedMeshId(mesh.id)}
                    style={{
                      padding: '4px 8px',
                      margin: '2px 0',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      backgroundColor: selectedMeshId === mesh.id ? '#2C7BE5' : 'rgba(255,255,255,0.1)',
                      fontSize: '12px'
                    }}
                  >
                    {mesh.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </Html>
      )}
    </>
  );
};

// Custom loading indicator that doesn't use HTML
const LoadingIndicator = ({ position = [0, 0, 0], message = "Loading model..." }: { 
  position?: [number, number, number],
  message?: string 
}) => {
  // Use useMemo to prevent recreating geometry and material on every render
  const geometry = useMemo(() => new THREE.TorusGeometry(0.5, 0.1, 16, 32), []);
  const material = useMemo(() => new THREE.MeshStandardMaterial({ color: "#4285F4" }), []);
  
  // Rotation state
  const [rotation, setRotation] = useState(0);
  
  // Simple dot animation without intensive calculations
  const [dots, setDots] = useState("");
  const frameCount = useRef(0);
  
  // Use a less intensive animation approach
  useFrame(() => {
    frameCount.current += 1;
    
    // Only update every 15 frames (approx 4 times per second at 60fps)
    if (frameCount.current % 15 === 0) {
      setRotation(prev => prev + Math.PI / 8);
      setDots(prev => prev.length >= 3 ? "" : prev + ".");
    }
  });
  
  return (
    <group position={position}>
      {/* Loading spinner */}
      <mesh rotation={[0, rotation, 0]} geometry={geometry} material={material} />
      
      {/* Text label */}
      <DreiText
        position={[0, -1, 0]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        backgroundColor="rgba(0,0,0,0.5)"
        padding={0.05}
      >
        {message + dots}
      </DreiText>
      
      {/* Help text */}
      <DreiText
        position={[0, -1.5, 0]}
        fontSize={0.12}
        color="#cccccc"
        anchorX="center"
        anchorY="middle"
        padding={0.05}
      >
        Check console (F12) for details
      </DreiText>
    </group>
  );
};

export default Pedro; 