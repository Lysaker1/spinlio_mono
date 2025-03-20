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

import SnapPointControls3D from './components/SnapPointControls3D';
import { AttachmentPointType } from './constants/SnapPointConfigurations';
import UploadForm from './components/UploadForm';
import ConfigurationPanel from './components/ConfigurationPanel';
import AttachmentOptionsPanel from './components/AttachmentOptionsPanel';
import AttachmentModeSelector, { AttachmentMode } from './components/AttachmentModeSelector';
import ModelViewer from './three/ModelViewer';
import useModelLoader from './hooks/useModelLoader';
import useSnapPoints from './hooks/useSnapPoints';
import { useComponentOptions } from './hooks/useComponentOptions';
import { AnalyzerFactory } from './utils/analyzers/AnalyzerFactory';
import './Pedro.css';
import { useComponentIntegration } from './hooks/useComponentIntegration';
import AttachmentPointControls from './components/AttachmentPointControls';

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

// Convert between SnapPoint and AttachmentPoint types
const convertSnapPointToAttachmentPoint = (snapPoint: any): AttachmentPoint => {
  return {
    ...snapPoint,
    normal: [0, 1, 0], // Default normal if not provided
    type: AttachmentPointType.STANDARD,
    auto: false
  } as AttachmentPoint;
};

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
  
  // State to track if we're placing a point (shared between UI and 3D)
  const [isPlacingPoint, setIsPlacingPoint] = useState(false);
  
  // Component integration hook for managing component options
  const componentOptions = useComponentIntegration({
    componentType,
    modelBoundingBox: modelLoader.modelInfo ? new THREE.Box3(
      new THREE.Vector3(
        modelLoader.modelInfo.originalDimensions?.center.x - modelLoader.modelInfo.originalDimensions?.size.x / 2 || 0,
        modelLoader.modelInfo.originalDimensions?.center.y - modelLoader.modelInfo.originalDimensions?.size.y / 2 || 0,
        modelLoader.modelInfo.originalDimensions?.center.z - modelLoader.modelInfo.originalDimensions?.size.z / 2 || 0
      ),
      new THREE.Vector3(
        modelLoader.modelInfo.originalDimensions?.center.x + modelLoader.modelInfo.originalDimensions?.size.x / 2 || 0,
        modelLoader.modelInfo.originalDimensions?.center.y + modelLoader.modelInfo.originalDimensions?.size.y / 2 || 0,
        modelLoader.modelInfo.originalDimensions?.center.z + modelLoader.modelInfo.originalDimensions?.size.z / 2 || 0
      )
    ) : null,
    meshes: modelLoader.modelInfo?.meshes || [],
    modelCenter: modelLoader.modelInfo?.center 
      ? new THREE.Vector3(
          modelLoader.modelInfo.center.x,
          modelLoader.modelInfo.center.y,
          modelLoader.modelInfo.center.z
        ) 
      : null,
    onAttachmentPointsChange: (points) => {
      // Update the snap points system for backward compatibility
      snapPoints.setPoints(points);
    },
    attachmentMode: snapPoints.attachmentMode
  });
  
  // State for scene controls
  const [sceneLocked, setSceneLocked] = useState(false);
  const [editMode, setEditMode] = useState<'translate' | 'rotate' | 'scale'>('translate');
  const [verifiedPoints, setVerifiedPoints] = useState<string[]>([]);
  
  // Add state for axis locking
  const [lockedAxes, setLockedAxes] = useState<{x: boolean, y: boolean, z: boolean}>({
    x: false,
    y: false,
    z: false
  });
  
  // Add state for disabling auto focus
  const [disableAutoFocus, setDisableAutoFocus] = useState(true); // Default to true to improve user experience
  
  // Handle scene lock toggle
  const handleToggleSceneLock = useCallback(() => {
    setSceneLocked(prev => !prev);
  }, []);
  
  // Handle focusing on a specific attachment point
  const handleFocusPoint = useCallback((pointId: string, forceFocus = true) => {
    // First select the point
    snapPoints.setSelectedPointId(pointId);
    
    // We use ModelViewer's focusOnPoint indirectly through the selection effect
    // The forceFocus parameter will be handled by the useEffect in ModelViewer
    // To force focus even when disableAutoFocus is true, we set a temporary flag
    if (forceFocus) {
      // Create a reference to the ModelViewer
      const modelViewerElem = document.querySelector('.model-canvas');
      if (modelViewerElem) {
        // Use a custom event to signal that we want to force focus
        const event = new CustomEvent('forceFocus', { detail: { pointId } });
        modelViewerElem.dispatchEvent(event);
      }
    }
  }, [snapPoints]);
  
  // Handle verifying an attachment point position
  const handleVerifyPoint = useCallback((pointId: string) => {
    setVerifiedPoints(prev => {
      // If already verified, remove it
      if (prev.includes(pointId)) {
        return prev.filter(id => id !== pointId);
      }
      // Otherwise add it
      return [...prev, pointId];
    });
  }, []);
  
  // Handle toggling individual axis locks
  const handleToggleAxisLock = useCallback((axis: 'x' | 'y' | 'z') => {
    setLockedAxes(prev => ({
      ...prev,
      [axis]: !prev[axis]
    }));
  }, []);
  
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
  
  // Handle file upload - update to clear component options
  const handleFileSelect = useCallback((file: File) => {
    // Reset points when loading a new model
    snapPoints.clearPoints();
    
    // Reset component options
    componentOptions.clearAllPoints();
    
    // Reset component category and subcategory to prevent confusion
    setComponentCategory(null);
    setComponentSubcategory(null);
    
    // Reset component type to default
    setComponentType('other');
    
    // Load the model
    modelLoader.loadModel(file);
  }, [modelLoader, snapPoints, componentOptions, setComponentCategory, setComponentSubcategory, setComponentType]);
  
  // Handle measurement changes
  const handleMeasurementChange = useCallback((field: keyof typeof measurements, value: number) => {
    setMeasurements(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);
  
  // Handle attachment mode change
  const handleAttachmentModeChange = useCallback((mode: AttachmentMode) => {
    snapPoints.setAttachmentMode(mode);
    
    // When switching to automatic or mesh mode, clear existing points
    // and explicitly trigger new point generation
    if (mode === 'automatic' || mode === 'mesh') {
      // Clear existing points
      snapPoints.clearPoints();
      
      // Reset component options
      componentOptions.clearAllPoints();
      
      // If we have a model loaded, explicitly force regeneration once
      if (modelLoader.modelObject) {
        console.log(`Switching to ${mode} attachment mode for ${componentType} - explicitly triggering analysis`);
        // Wait a moment for state updates to propagate
        setTimeout(() => {
          componentOptions.forceRegeneratePoints();
        }, 200);
      }
    } else if (mode === 'manual') {
      // In manual mode, we preserve existing points and don't generate new ones
      console.log(`Switched to ${mode} mode - no auto-generation will occur`);
      
      // If there are no points yet, we might want to start with at least one
      if (componentOptions.attachmentPoints.length === 0) {
        console.log('No existing points found in manual mode - adding a default point');
        componentOptions.addCustomAttachmentPoint('custom');
      }
    } else {
      console.log(`Switched to ${mode} mode - no auto-generation will occur`);
    }
  }, [modelLoader.modelObject, snapPoints, componentOptions, componentType]);
  
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
  
  // Update the renderCanvas function to include SnapPointControls3D
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
            attachmentPoints={componentOptions.attachmentPoints}
            onAttachmentPointUpdated={componentOptions.updateAttachmentPoint}
            selectedPoint={snapPoints.selectedPointId}
            onSelectPoint={snapPoints.setSelectedPointId}
            debugMode={debugMode}
            wireframe={wireframe}
            onModelInfoLoaded={(info) => console.log('Model info loaded:', info)}
            attachmentMode={snapPoints.attachmentMode}
            onAddAttachmentPoint={(point) => {
              // If there's an optionId provided, use that
              if (point.optionId) {
                componentOptions.addCustomAttachmentPoint(
                  point.optionId, 
                  point.position as [number, number, number]
                );
              } else {
                // Otherwise fall back to legacy behavior
                snapPoints.addPoint(point);
              }
            }}
            componentType={componentType}
            sceneLocked={sceneLocked}
            onToggleSceneLock={handleToggleSceneLock}
            editMode={editMode}
            onChangeEditMode={setEditMode}
            lockedAxes={lockedAxes}
            disableAutoFocus={disableAutoFocus}
          />
          
          {/* 3D Controls for snap points (must be inside Canvas) */}
          {modelLoader.modelLoaded && (
            /* IMPORTANT: Only render SnapPointControls3D when there's no selected point
             * This prevents multiple TransformControls from being active simultaneously
             * which was causing the "must be part of the scene graph" errors
             */
            !snapPoints.selectedPointId && (
              <SnapPointControls3D
                meshes={modelLoader.modelInfo?.meshes.map((mesh, index) => ({
                  id: `mesh_${index}`,
                  name: `Mesh ${index}`,
                  position: [mesh.position?.x || 0, mesh.position?.y || 0, mesh.position?.z || 0]
                })) || []}
                snapPoints={componentOptions.attachmentPoints}
                selectedPointId={snapPoints.selectedPointId}
                addMode={snapPoints.attachmentMode}
                isPlacingPoint={isPlacingPoint}
                onAddPoint={(point) => componentOptions.addCustomAttachmentPoint(
                  'custom',
                  point.position
                )}
                onSelectPoint={snapPoints.setSelectedPointId}
                onUpdatePoint={(point) => {
                  // Convert SnapPoint to AttachmentPoint and update
                  componentOptions.updateAttachmentPoint(convertSnapPointToAttachmentPoint(point));
                }}
                onPointPlaced={() => setIsPlacingPoint(false)}
              />
            )
          )}
          
          {/* Render attachment point helpers */}
          {modelLoader.modelLoaded && componentOptions.attachmentPoints.map(point => {
            // Skip rendering points with invalid positions to prevent errors
            if (!point || !point.position || 
                point.position.some(val => isNaN(val) || !isFinite(val)) ||
                (point.rotation && point.rotation.some(val => isNaN(val) || !isFinite(val)))) {
              console.error('Skipping invalid attachment point:', point);
              return null;
            }
            
            try {
              return (
                <AttachmentPointHelper
                  key={point.id}
                  point={point}
                  selected={snapPoints.selectedPointId === point.id}
                  onSelect={() => snapPoints.setSelectedPointId(point.id)}
                  onUpdate={componentOptions.updateAttachmentPoint}
                  onDelete={() => componentOptions.deleteAttachmentPoint(point.id)}
                  modelInfo={modelLoader.modelInfo}
                  sceneLocked={sceneLocked}
                  lockedAxes={lockedAxes}
                />
              );
            } catch (error) {
              console.error('Error rendering attachment point:', error, point);
              return null;
            }
          })}
          
          {/* Performance stats in debug mode */}
          {debugMode && <Stats />}
        </Suspense>
      </Canvas>
    );
  }, [
    modelLoader.file,
    modelLoader.modelLoaded,
    modelLoader.modelInfo,
    componentOptions.attachmentPoints,
    componentOptions.updateAttachmentPoint,
    componentOptions.deleteAttachmentPoint,
    componentOptions.addCustomAttachmentPoint,
    snapPoints.selectedPointId,
    snapPoints.addPoint,
    snapPoints.setSelectedPointId,
    snapPoints.attachmentMode,
    debugMode,
    wireframe,
    componentType,
    isPlacingPoint,
    sceneLocked,
    editMode,
    lockedAxes,
    disableAutoFocus
  ]);
  
  // Update the SnapPointControl usage in the UI to pass isPlacingPoint
  const renderAttachmentOptions = () => {
    return (
      <Accordion defaultValue="attachmentPoints">
        <Accordion.Item value="attachmentPoints">
          <Accordion.Control>
            <Title order={5}>Attachment Points</Title>
          </Accordion.Control>
          <Accordion.Panel>
            <Stack gap="md">
              {/* Add attachment mode selector here instead of in ComponentConfiguration */}
              <AttachmentModeSelector
                value={snapPoints.attachmentMode}
                onChange={handleAttachmentModeChange}
              />
              
              {/* External UI controls for attachment points */}
              {modelLoader.modelLoaded && (
                <AttachmentPointControls
                  attachmentPoints={componentOptions.attachmentPoints}
                  selectedPoint={snapPoints.selectedPointId}
                  onSelectPoint={snapPoints.setSelectedPointId}
                  sceneLocked={sceneLocked}
                  onToggleSceneLock={handleToggleSceneLock}
                  editMode={editMode}
                  onChangeEditMode={setEditMode}
                  onFocusPoint={handleFocusPoint}
                  onVerifyPoint={handleVerifyPoint}
                  verifiedPoints={verifiedPoints}
                  lockedAxes={lockedAxes}
                  onToggleAxisLock={handleToggleAxisLock}
                />
              )}
              
              {/* Add additional settings */}
              <Paper p="sm" withBorder>
                <Title order={6} mb="xs">Editing Settings</Title>
                <Group>
                  <Switch
                    label="Disable Auto-Focus"
                    checked={disableAutoFocus}
                    onChange={() => setDisableAutoFocus(prev => !prev)}
                  />
                  <Text size="xs" c="dimmed">
                    When enabled, camera won't auto-focus when selecting points
                  </Text>
                </Group>
              </Paper>
              
              {/* Component options integrated with point management */}
              <AttachmentOptionsPanel
                componentConfig={componentOptions.componentConfig}
                availableOptions={componentOptions.availableOptions}
                enabledOptions={componentOptions.enabledOptions}
                optionPointsMap={componentOptions.optionPointsMap}
                onToggleOption={componentOptions.toggleOption}
                onAddCustomAttachmentPoint={componentOptions.addCustomAttachmentPoint}
                onResetOption={componentOptions.resetOption}
                onGenerateAttachmentPoints={componentOptions.generateAttachmentPoints}
              />
              
              {/* Manual point addition - only show if in manual mode */}
              {snapPoints.attachmentMode === 'manual' && (
                <Box mt="md">
                  <Text size="sm" fw={500} mb={4} c="dimmed">Manual Controls</Text>
                  <Group>
                    <Button
                      size="sm"
                      onClick={handleAddManualPoint}
                      leftSection={<IconPlus size={14} />}
                      disabled={!modelLoader.modelLoaded}
                    >
                      Add Manual Point
                    </Button>
                    <Button
                      size="sm"
                      color="red"
                      onClick={() => snapPoints.clearPoints()}
                      disabled={snapPoints.points.length === 0}
                    >
                      Clear All
                    </Button>
                  </Group>
                </Box>
              )}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  };
  
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
              
              {/* Attachment options panel (only visible when model is loaded) */}
              {modelLoader.modelLoaded && renderAttachmentOptions()}
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