import React, { useState, useEffect, useRef, Suspense, useCallback, createContext, useContext, useMemo } from 'react';
import { Text, Button, Alert, Box, Group, Title, Loader, Tabs, Select, NumberInput, Switch, Stack, Code, Divider, Paper, Accordion, Grid } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { ThreeEvent } from '@react-three/fiber/dist/declarations/src/core/events';
import { 
  OrbitControls, 
  Environment, 
  useGLTF, 
  PerspectiveCamera, 
  Grid as DreiGrid, 
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
import { IconUpload, IconPlus, IconAdjustments, IconList, IconBraces, IconInfoCircle, IconCodeDots } from '@tabler/icons-react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import SimplifiedPageLayout from './components/SimplifiedPageLayout';
import { v4 as uuidv4 } from 'uuid';
import AttachmentPointHelper, { AttachmentPoint } from './components/AttachmentPointHelper';
import MeshExplorer from './components/MeshExplorer';
import SnapPointControl from './components/SnapPointControl';
import UploadForm from './components/UploadForm';
import ConfigurationPanel from './components/ConfigurationPanel';
import ModelViewer from './three/ModelViewer';
import useModelLoader from './hooks/useModelLoader';
import useSnapPoints from './hooks/useSnapPoints';
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
  // Model Loader Hook
  const modelLoader = useModelLoader({
    normalizeModel: true,
    autoCenter: true, 
    computeBoundingBox: true,
    targetSize: 5
  });
  
  // Snap Points Hook
  const snapPoints = useSnapPoints({
    onPointAdded: (point) => console.log('Point added:', point),
    onPointRemoved: (pointId) => console.log('Point removed:', pointId),
    onPointUpdated: (point) => console.log('Point updated:', point)
  });
  
  // UI State
  const [activeTab, setActiveTab] = useState<string | null>('upload');
  const [activeConfigTab, setActiveConfigTab] = useState<string | null>('component');
  const [debugMode, setDebugMode] = useState(true);
  const [wireframe, setWireframe] = useState(false);
  const [componentType, setComponentType] = useState('other');
  const [componentCategory, setComponentCategory] = useState<string | null>(null);
  const [componentSubcategory, setComponentSubcategory] = useState<string | null>(null);
  const [measurements, setMeasurements] = useState({
    width: 0,
    height: 0,
    depth: 0
  });
  
  // Update measurements when model info changes
  useEffect(() => {
    if (modelLoader.modelInfo) {
      setMeasurements({
        width: parseFloat(modelLoader.modelInfo.dimensions.width),
        height: parseFloat(modelLoader.modelInfo.dimensions.height),
        depth: parseFloat(modelLoader.modelInfo.dimensions.depth)
      });
      
      // If not manually set, update component type based on detection
      if (modelLoader.modelInfo.suggestedComponentType && componentType === 'other') {
        setComponentType(modelLoader.modelInfo.suggestedComponentType);
      }
    }
  }, [modelLoader.modelInfo, componentType]);
  
  // Handle model file selection
  const handleFileSelect = useCallback((file: File) => {
    // Reset points when loading a new model
    snapPoints.clearPoints();
    
    // Reset component category and subcategory to prevent confusion
    setComponentCategory(null);
    setComponentSubcategory(null);
    
    // Reset component type to default
    setComponentType('other');
    
    // Load the model
    modelLoader.loadModel(file);
  }, [modelLoader, snapPoints, setComponentCategory, setComponentSubcategory, setComponentType]);
  
  // Handle measurement changes
  const handleMeasurementChange = useCallback((field: keyof typeof measurements, value: number) => {
    setMeasurements(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);
  
  // Handle attachment mode change
  const handleAttachmentModeChange = useCallback((mode: 'manual' | 'automatic' | 'mesh') => {
    snapPoints.setAttachmentMode(mode);
    
    // When switching to automatic or mesh mode, just clear existing points
    // Let the ModelViewer handle the actual generation
    if (mode === 'automatic' || mode === 'mesh') {
      // Clear existing points
      snapPoints.clearPoints();
      
      // Reset the auto generation flag to force regeneration
      if (modelLoader.modelObject) {
        console.log(`Switching to ${mode} attachment mode for ${componentType}`);
        // Don't generate points here - ModelViewer will handle this
      }
    }
  }, [modelLoader, snapPoints, componentType]);
  
  // Add manual attachment point
  const handleAddManualPoint = useCallback(() => {
    if (!modelLoader.modelLoaded) return;
    
    // Create a point at the center by default
    snapPoints.addPoint({
      position: [0, 0, 0],
      normal: [0, 1, 0],
      color: '#00a0ff',
      name: `Manual Point ${snapPoints.points.length + 1}`
    });
  }, [modelLoader.modelLoaded, snapPoints]);
  
  // Save model configuration
  const handleSaveConfiguration = useCallback(() => {
    // In a real application, this would save the model configuration 
    // and attachment points to a database or file
    console.log('Saving configuration:', {
      modelInfo: modelLoader.modelInfo,
      componentType,
      measurements,
      attachmentPoints: snapPoints.points
    });
    
    // For demonstration, show an alert
    alert('Configuration saved! Check console for details.');
  }, [modelLoader.modelInfo, componentType, measurements, snapPoints.points]);
  
  // Render the main 3D scene
  const renderCanvas = useCallback(() => {
    return (
      <Canvas
        camera={{ position: [0, 2, 5], fov: 50 }}
        shadows
        className="model-canvas"
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          {/* Environment and lighting */}
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1.5} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <hemisphereLight args={['#ffffff', '#ddddff', 0.5]} />
          <ContactShadows opacity={0.5} scale={10} blur={1} far={10} resolution={256} color="#000000" />
          
          {/* Model viewer with attachment points */}
          <ModelViewer 
            file={modelLoader.file}
            attachmentPoints={snapPoints.points}
            onAttachmentPointUpdated={snapPoints.updatePoint}
            selectedPoint={snapPoints.selectedPointId}
            onSelectPoint={snapPoints.setSelectedPointId}
            debugMode={debugMode}
            wireframe={wireframe}
            onModelInfoLoaded={(info) => console.log('Model info loaded:', info)}
            attachmentMode={snapPoints.attachmentMode}
            onAddAttachmentPoint={snapPoints.addPoint}
            componentType={componentType}
          />
          
          {/* Render attachment point helpers */}
          {modelLoader.modelLoaded && snapPoints.points.map(point => (
            <AttachmentPointHelper
              key={point.id}
              point={point}
              selected={snapPoints.selectedPointId === point.id}
              onSelect={() => snapPoints.setSelectedPointId(point.id)}
              onUpdate={snapPoints.updatePoint}
              onDelete={() => snapPoints.removePoint(point.id)}
              modelInfo={modelLoader.modelInfo}
            />
          ))}
          
          {/* Performance stats in debug mode */}
          {debugMode && <Stats />}
        </Suspense>
      </Canvas>
    );
  }, [
    modelLoader.file,
    modelLoader.modelLoaded,
    modelLoader.modelInfo,
    snapPoints.points,
    snapPoints.selectedPointId,
    snapPoints.addPoint,
    snapPoints.updatePoint,
    snapPoints.removePoint,
    snapPoints.setSelectedPointId,
    snapPoints.attachmentMode,
    debugMode,
    wireframe,
    componentType
  ]);
  
  return (
    <SimplifiedPageLayout title="3D Component Attachment Tool">
      <div className="pedro-container">
        <Grid>
          {/* Left sidebar */}
          <Grid.Col span={3}>
            <Stack gap="md">
              {/* Upload form in collapsible accordion */}
              <Accordion defaultValue="upload">
                <Accordion.Item value="upload">
                  <Accordion.Control>
                    <Title order={5}>Upload 3D Model</Title>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <UploadForm 
                      onFileSelected={handleFileSelect} 
                      loading={modelLoader.loading}
                      error={modelLoader.error}
                    />
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
              
              {/* Configuration panel in collapsible accordion (only visible when model is loaded) */}
              {modelLoader.modelLoaded && (
                <Accordion defaultValue="configuration">
                  <Accordion.Item value="configuration">
                    <Accordion.Control>
                      <Title order={5}>Component Configuration</Title>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <ConfigurationPanel
                        componentType={componentType}
                        onComponentTypeChange={setComponentType}
                        componentCategory={componentCategory}
                        onComponentCategoryChange={setComponentCategory}
                        componentSubcategory={componentSubcategory}
                        onComponentSubcategoryChange={setComponentSubcategory}
                        measurements={measurements}
                        onMeasurementChange={handleMeasurementChange}
                        debugMode={debugMode}
                        onDebugModeChange={setDebugMode}
                        wireframe={wireframe}
                        onWireframeChange={setWireframe}
                        meshCount={modelLoader.modelInfo?.meshCount || 0}
                        suggestedType={modelLoader.modelInfo?.suggestedComponentType}
                        typeConfidence={modelLoader.modelInfo?.typeConfidence}
                        typeReason={modelLoader.modelInfo?.typeReason}
                        onSaveConfiguration={handleSaveConfiguration}
                      />
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              )}
              
              {/* Attachment points panel in collapsible accordion (only visible when model is loaded) */}
              {modelLoader.modelLoaded && (
                <Accordion defaultValue="attachmentPoints">
                  <Accordion.Item value="attachmentPoints">
                    <Accordion.Control>
                      <Title order={5}>Attachment Points</Title>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Stack gap="md">
                        {/* Add attachment mode selector here instead of in ComponentConfiguration */}
                        <Box>
                          <Text size="sm" fw={500} mb={4} c="dimmed" tt="uppercase">
                            Attachment Mode
                          </Text>
                          <Select
                            data={[
                              { value: 'manual', label: 'Manual Placement' },
                              { value: 'automatic', label: 'Automatic Detection' },
                              { value: 'mesh', label: 'Mesh Selection' }
                            ]}
                            value={snapPoints.attachmentMode}
                            onChange={(value) => value && handleAttachmentModeChange(value as 'manual' | 'automatic' | 'mesh')}
                            style={{ marginBottom: 10 }}
                          />
                        </Box>
                        
                        <Divider />
                        
                        <Group justify="apart">
                          <Text size="sm" c="dimmed">
                            {snapPoints.points.length} points
                          </Text>
                        </Group>
                        
                        {/* Point list with improved focus handling */}
                        {snapPoints.points.length > 0 ? (
                          <Accordion defaultValue={snapPoints.points[0]?.id}>
                            {snapPoints.points.map((point) => (
                              <Accordion.Item 
                                key={point.id} 
                                value={point.id}
                              >
                                <Accordion.Control
                                  onClick={(e) => {
                                    // Stop event propagation to prevent accordion from toggling when selecting a point
                                    e.stopPropagation();
                                    // Select this point - this will trigger the camera focus via useEffect in ModelViewer
                                    snapPoints.setSelectedPointId(point.id);
                                  }}
                                  style={{ 
                                    backgroundColor: 
                                      snapPoints.selectedPointId === point.id ? 
                                      'rgba(0, 120, 255, 0.1)' : 'transparent',
                                    borderLeft: `3px solid ${point.color}`,
                                    cursor: 'pointer'
                                  }}
                                >
                                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <span>{point.name || 'Unnamed Point'}</span>
                                    {point.type && (
                                      <span style={{ 
                                        fontSize: '10px', 
                                        padding: '2px 6px', 
                                        background: 'rgba(0,0,0,0.1)', 
                                        borderRadius: '4px',
                                        color: 'rgba(0,0,0,0.6)'
                                      }}>
                                        {point.type.replace('_', ' ')}
                                      </span>
                                    )}
                                  </div>
                                </Accordion.Control>
                                <Accordion.Panel>
                                  <Stack gap="xs">
                                    <Text size="xs">
                                      Position: [{point.position.map(p => p.toFixed(2)).join(', ')}]
                                    </Text>
                                    <Text size="xs">
                                      Normal: [{point.normal.map(n => n.toFixed(2)).join(', ')}]
                                    </Text>
                                    <Group mt="xs" justify="apart">
                                      <Button 
                                        size="xs"
                                        variant="light"
                                        color="blue"
                                        onClick={() => snapPoints.setSelectedPointId(point.id)}
                                      >
                                        Select & Focus
                                      </Button>
                                      <Button 
                                        size="xs"
                                        variant="light"
                                        color="red"
                                        onClick={() => snapPoints.removePoint(point.id)}
                                      >
                                        Remove
                                      </Button>
                                    </Group>
                                  </Stack>
                                </Accordion.Panel>
                              </Accordion.Item>
                            ))}
                          </Accordion>
                        ) : (
                          <Text size="sm" c="dimmed" ta="center" py="md">
                            No attachment points yet
                          </Text>
                        )}
                        
                        {/* Add point button (only in manual mode) */}
                        {snapPoints.attachmentMode === 'manual' && (
                          <Group justify="center">
                            <button 
                              className="pedro-button"
                              onClick={handleAddManualPoint}
                            >
                              Add Attachment Point
                            </button>
                          </Group>
                        )}
                      </Stack>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              )}
            </Stack>
          </Grid.Col>
          
          {/* Main content area */}
          <Grid.Col span={9}>
            <div className="pedro-canvas-container">
              {renderCanvas()}
              
              {/* Loading overlay */}
              {modelLoader.loading && (
                <div className="pedro-loading-overlay">
                  <Loader size="lg" color="blue" />
                  <Text mt="md" c="white">Loading 3D Model...</Text>
                </div>
              )}
              
              {/* Error message */}
              {modelLoader.error && (
                <Alert 
                  title="Error Loading Model" 
                  color="red" 
                  className="pedro-error-message"
                >
                  {modelLoader.error}
                </Alert>
              )}
              
              {/* No model message */}
              {!modelLoader.file && !modelLoader.loading && !modelLoader.error && (
                <div className="pedro-no-model-message">
                  <IconUpload size={48} color="#aaa" />
                  <Text size="xl" mt="md" c="dimmed">
                    Upload a 3D model to get started
                  </Text>
                  <Text size="sm" mt="xs" c="dimmed">
                    Supported formats: GLB, GLTF, OBJ, STL, FBX, 3DM
                  </Text>
                </div>
              )}
            </div>
          </Grid.Col>
        </Grid>
        
        {/* Bottom panel with info tabs */}
        <Paper mt="md" p="md" shadow="sm">
          <Tabs value={activeTab} onChange={setActiveTab}>
            <Tabs.List>
              <Tabs.Tab value="upload" leftSection={<IconUpload size={14} />}>
                Upload Instructions
              </Tabs.Tab>
              <Tabs.Tab value="points" leftSection={<IconAdjustments size={14} />}>
                Attachment Points
              </Tabs.Tab>
              <Tabs.Tab value="info" leftSection={<IconInfoCircle size={14} />}>
                Component Info
              </Tabs.Tab>
              <Tabs.Tab value="debug" leftSection={<IconCodeDots size={14} />}>
                Debug Info
              </Tabs.Tab>
            </Tabs.List>
            
            <Tabs.Panel value="upload" pt="md">
              <Text>
                Upload a 3D model of a bike component to visualize it and add attachment points.
                You can add attachment points manually, automatically based on component type,
                or by clicking on specific meshes.
              </Text>
            </Tabs.Panel>
            
            <Tabs.Panel value="points" pt="md">
              <Text>
                Attachment points define how components connect to each other. For example, a 
                seatpost has attachment points where it connects to the frame and saddle.
                You can add, move, and delete attachment points using the tools provided.
              </Text>
            </Tabs.Panel>
            
            <Tabs.Panel value="info" pt="md">
              {modelLoader.modelInfo ? (
                <Stack gap="xs">
                  <Text>Component Type: {componentType}</Text>
                  <Text>Dimensions: {measurements.width} × {measurements.height} × {measurements.depth} units</Text>
                  <Text>Mesh Count: {modelLoader.modelInfo.meshCount}</Text>
                  <Text>Attachment Points: {snapPoints.points.length}</Text>
                </Stack>
              ) : (
                <Text c="dimmed">No model loaded</Text>
              )}
            </Tabs.Panel>
            
            <Tabs.Panel value="debug" pt="md">
              {modelLoader.modelInfo ? (
                <Code block>
                  {JSON.stringify({
                    modelFile: modelLoader.file?.name,
                    modelSize: modelLoader.file?.size,
                    modelInfo: {
                      dimensions: modelLoader.modelInfo.dimensions,
                      meshCount: modelLoader.modelInfo.meshCount,
                      suggestedType: modelLoader.modelInfo.suggestedComponentType,
                      confidence: modelLoader.modelInfo.typeConfidence
                    },
                    attachmentPoints: snapPoints.points.map(p => ({
                      id: p.id,
                      name: p.name,
                      position: p.position
                    }))
                  }, null, 2)}
                </Code>
              ) : (
                <Text c="dimmed">No debug information available</Text>
              )}
            </Tabs.Panel>
          </Tabs>
        </Paper>
      </div>
    </SimplifiedPageLayout>
  );
};

export default Pedro; 