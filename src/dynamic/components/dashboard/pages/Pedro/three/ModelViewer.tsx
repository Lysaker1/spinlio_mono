import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import { useThree, useFrame, ThreeEvent } from '@react-three/fiber';
import { Text as DreiText, Html, useHelper, Center, PerspectiveCamera } from '@react-three/drei';
import { v4 as uuidv4 } from 'uuid';

import modelLoaderService from '../services/ModelLoaderService';
import snapPointService from '../services/SnapPointService';
import { AttachmentPoint } from '../components/AttachmentPointHelper';

interface ModelViewerProps {
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
  componentType: string;
}

/**
 * A component that loads and displays a 3D model with attachment point functionality
 */
export const ModelViewer: React.FC<ModelViewerProps> = ({
  file,
  attachmentPoints,
  onAttachmentPointUpdated,
  selectedPoint,
  onSelectPoint,
  debugMode = true,
  wireframe = false,
  onModelInfoLoaded,
  attachmentMode,
  onAddAttachmentPoint,
  componentType
}) => {
  // State for model and loading
  const [modelLoaded, setModelLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  // State for model data
  const [modelInfo, setModelInfo] = useState<any>(null);
  
  // State for mesh interaction
  const [hoveredMesh, setHoveredMesh] = useState<string | null>(null);
  const [selectedMeshId, setSelectedMeshId] = useState<string | null>(null);
  const [meshSelectionMode, setMeshSelectionMode] = useState(false);
  const [visibleMeshes, setVisibleMeshes] = useState<{id: string, name: string}[]>([]);
  const [viewMode, setViewMode] = useState<'normal' | 'wireframe' | 'x-ray'>('normal');
  
  // Refs
  const modelRef = useRef<THREE.Group>(null);
  const loadingModelRef = useRef<File | null>(null);
  const meshesRef = useRef<{[key: string]: THREE.Mesh}>({});
  const autoPointsGeneratedRef = useRef<boolean>(false);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  
  // Get THREE.js context
  const { camera, scene } = useThree();
  
  // Reset auto points generation flag when file changes
  useEffect(() => {
    if (file !== loadingModelRef.current) {
      autoPointsGeneratedRef.current = false;
    }
  }, [file]);
  
  // Set mesh selection mode based on attachment mode
  useEffect(() => {
    setMeshSelectionMode(attachmentMode === 'mesh');
    
    if (attachmentMode !== 'mesh') {
      setSelectedMeshId(null);
      setHoveredMesh(null);
    }
  }, [attachmentMode]);
  
  // Handle automatic attachment point generation
  useEffect(() => {
    if (
      attachmentMode === 'automatic' &&
      modelLoaded &&
      modelInfo &&
      Object.keys(meshesRef.current).length > 0 &&
      !autoPointsGeneratedRef.current
    ) {
      console.log("Generating automatic attachment points...");
      
      // Use the service to generate points based on component type
      const boundingBox = new THREE.Box3().setFromCenterAndSize(
        new THREE.Vector3(0, 0, 0),
        modelInfo.size
      );
      
      const autoPoints = snapPointService.generateAttachmentPoints(
        componentType,
        meshesRef.current,
        boundingBox
      );
      
      // Add all generated points
      autoPoints.forEach(point => {
        onAddAttachmentPoint(point);
      });
      
      // Mark that we've generated points for this model
      autoPointsGeneratedRef.current = true;
    }
  }, [attachmentMode, modelLoaded, modelInfo, onAddAttachmentPoint, componentType]);
  
  // Handle view mode changes (normal, wireframe, x-ray)
  useEffect(() => {
    if (!modelLoaded) return;
    
    Object.values(meshesRef.current).forEach(mesh => {
      if (mesh.material) {
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach(mat => updateMaterialViewMode(mat, viewMode, wireframe));
        } else {
          updateMaterialViewMode(mesh.material, viewMode, wireframe);
        }
      }
    });
  }, [viewMode, wireframe, modelLoaded]);
  
  // Helper function to update material view mode
  const updateMaterialViewMode = (
    material: THREE.Material,
    mode: 'normal' | 'wireframe' | 'x-ray',
    wireframeOverride: boolean
  ) => {
    // Reset material properties
    material.transparent = false;
    if ('wireframe' in material) {
      (material as THREE.MeshBasicMaterial).wireframe = false;
    }
    
    // Apply view mode
    switch (mode) {
      case 'wireframe':
        if ('wireframe' in material) {
          (material as THREE.MeshBasicMaterial).wireframe = true;
        }
        break;
      case 'x-ray':
        material.transparent = true;
        if ('opacity' in material) {
          (material as THREE.MeshBasicMaterial).opacity = 0.5;
        }
        break;
      case 'normal':
      default:
        // Apply wireframe override if specified
        if (wireframeOverride && 'wireframe' in material) {
          (material as THREE.MeshBasicMaterial).wireframe = true;
        }
        break;
    }
    
    material.needsUpdate = true;
  };
  
  // Smart camera position setup
  const setupCameraForModel = useCallback((dimensions: THREE.Vector3) => {
    if (!camera || !(camera instanceof THREE.PerspectiveCamera)) return;
    
    // Calculate the maximum dimension of the model
    const maxDim = Math.max(dimensions.x, dimensions.y, dimensions.z);
    
    // Calculate a good camera distance based on model size and FOV
    const fov = camera.fov * (Math.PI / 180);
    const distance = (maxDim / 2) / Math.tan(fov / 2) * 1.5; // 1.5x to give some margin
    
    // Position camera diagonally from the model for better perspective
    camera.position.set(distance, distance, distance);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
    
    console.log(`Camera positioned at distance: ${distance} for model size: ${maxDim}`);
  }, [camera]);
  
  // Load the model when file changes
  useEffect(() => {
    // Skip if no file or if we already loaded this exact file
    if (!file || loadingModelRef.current === file || !modelRef.current) {
      return;
    }
    
    // Set loading state
    setLoading(true);
    setLoadingProgress(0);
    setModelLoaded(false);
    setError(null);
    loadingModelRef.current = file;
    
    // Clear existing model and meshes
    while (modelRef.current.children.length > 0) {
      modelRef.current.remove(modelRef.current.children[0]);
    }
    meshesRef.current = {};
    
    console.log(`Loading model: ${file.name}`);
    
    // Load the model using the service
    modelLoaderService.loadModelFromFile(file, {
      normalizeModel: true,
      autoCenter: true,
      computeBoundingBox: true,
      wireframe: wireframe,
      targetSize: 5, // Target size of 5 units
      maintainAspectRatio: true
    }).then(result => {
      console.log('Model loaded successfully');
      
      // Add loaded model to scene
      if (modelRef.current) {
        modelRef.current.add(result.object);
      }
      
      // Store meshes in our ref
      result.object.traverse((child: THREE.Object3D) => {
        if (child instanceof THREE.Mesh) {
          meshesRef.current[child.uuid] = child;
          
          // Ensure the mesh can be raycast for interactions
          child.userData.selectable = true;
          child.userData.id = child.uuid;
        }
      });
      
      // Set model info
      const modelInfoData = {
        size: result.dimensions,
        center: result.center,
        scale: result.scale,
        meshes: result.meshes,
        originalDimensions: result.originalDimensions,
        normalizedMatrix: result.normalizedMatrix
      };
      
      setModelInfo(modelInfoData);
      
      // Create mesh list for UI
      const meshList = result.meshes
        .sort((a, b) => b.volume - a.volume) // Sort by size (largest first)
        .map(mesh => ({
          id: mesh.id,
          name: mesh.name || `Mesh ${mesh.index}`
        }));
      
      setVisibleMeshes(meshList);
      
      // Update camera position to show the entire model
      setupCameraForModel(result.dimensions);
      
      // Call callback if provided
      if (onModelInfoLoaded) {
        const typeDetection = modelLoaderService.detectComponentType(
          result.meshes,
          result.dimensions
        );
        
        onModelInfoLoaded({
          size: result.dimensions,
          center: result.center,
          scale: result.scale,
          meshes: result.meshes,
          meshCount: result.meshes.length,
          dimensions: {
            width: result.dimensions.x.toFixed(2),
            height: result.dimensions.y.toFixed(2),
            depth: result.dimensions.z.toFixed(2)
          },
          originalDimensions: result.originalDimensions,
          suggestedComponentType: typeDetection.type,
          typeConfidence: typeDetection.confidence,
          typeReason: typeDetection.reason
        });
      }
      
      // Finish loading
      setLoading(false);
      setModelLoaded(true);
    }).catch(err => {
      console.error("Error loading model:", err);
      setError(`Failed to load model: ${err.message || 'Unknown error'}`);
      setLoading(false);
      loadingModelRef.current = null;
    });
    
  }, [file, wireframe, setupCameraForModel, onModelInfoLoaded]);
  
  // Mesh interaction handlers
  const handleMeshHover = (event: ThreeEvent<PointerEvent>) => {
    if (!meshSelectionMode) return;
    
    if (event.object instanceof THREE.Mesh && event.object.userData.selectable) {
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
  
  const handleMeshClick = (event: ThreeEvent<MouseEvent>) => {
    if (!meshSelectionMode) return;
    
    if (event.object instanceof THREE.Mesh && event.object.userData.selectable) {
      setSelectedMeshId(event.object.userData.id);
      
      if (event.point && event.face) {
        // Create attachment point using the service
        const mesh = event.object;
        const point = event.point;
        const normal = event.face.normal.clone();
        
        // Convert the face normal from local to world space
        normal.transformDirection(mesh.matrixWorld);
        
        const attachmentPoint = snapPointService.createMeshAttachmentPoint(
          mesh,
          point,
          normal
        );
        
        onAddAttachmentPoint(attachmentPoint);
      }
    }
  };
  
  // Box3Helper component
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
  
  // AxesHelper component
  const AxesHelper = () => {
    const axesRef = useRef<THREE.AxesHelper>(null);
    useEffect(() => {
      if (axesRef.current) {
        axesRef.current.visible = true;
      }
    }, []);
    return <primitive ref={axesRef} object={new THREE.AxesHelper(5)} />;
  };
  
  // Grid helper component
  const GridHelper = () => {
    const gridRef = useRef<THREE.GridHelper>(null);
    return <primitive ref={gridRef} object={new THREE.GridHelper(10, 10)} />;
  };
  
  // Loading indicator component
  const LoadingIndicator = ({ position = [0, 0, 0], message = "Loading model..." }: {
    position?: [number, number, number],
    message?: string
  }) => {
    // Rotation state for animation
    const [rotation, setRotation] = useState(0);
    const [dots, setDots] = useState("");
    const frameCount = useRef(0);
    
    // Simple animation
    useFrame(() => {
      frameCount.current += 1;
      if (frameCount.current % 15 === 0) {
        setRotation(prev => prev + Math.PI / 8);
        setDots(prev => prev.length >= 3 ? "" : prev + ".");
      }
    });
    
    return (
      <group position={position}>
        <mesh rotation={[0, rotation, 0]}>
          <torusGeometry args={[0.5, 0.1, 16, 32]} />
          <meshStandardMaterial color="#4285F4" />
        </mesh>
        
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
        
        {loadingProgress > 0 && loadingProgress < 100 && (
          <group position={[0, -1.5, 0]}>
            {/* Progress bar background */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[2, 0.1, 0.01]} />
              <meshBasicMaterial color="#333333" />
            </mesh>
            
            {/* Progress bar fill */}
            <mesh position={[-(1 - loadingProgress/100), 0, 0.01]} scale={[loadingProgress/100, 1, 1]}>
              <boxGeometry args={[2, 0.1, 0.01]} />
              <meshBasicMaterial color="#4CAF50" />
            </mesh>
            
            {/* Progress text */}
            <DreiText
              position={[0, 0, 0.02]}
              fontSize={0.1}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
            >
              {`${Math.round(loadingProgress)}%`}
            </DreiText>
          </group>
        )}
      </group>
    );
  };
  
  // Origin Helper component to visualize model origin
  const ModelOriginHelper = () => {
    return (
      <group>
        {/* Origin point */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="red" />
        </mesh>
        
        {/* X-axis */}
        <mesh position={[0.5, 0, 0]}>
          <boxGeometry args={[1, 0.03, 0.03]} />
          <meshStandardMaterial color="red" />
        </mesh>
        
        {/* Y-axis */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[0.03, 1, 0.03]} />
          <meshStandardMaterial color="green" />
        </mesh>
        
        {/* Z-axis */}
        <mesh position={[0, 0, 0.5]}>
          <boxGeometry args={[0.03, 0.03, 1]} />
          <meshStandardMaterial color="blue" />
        </mesh>
      </group>
    );
  };
  
  // Function to toggle view mode
  const toggleViewMode = () => {
    setViewMode(current => {
      switch (current) {
        case 'normal': return 'wireframe';
        case 'wireframe': return 'x-ray';
        case 'x-ray': return 'normal';
        default: return 'normal';
      }
    });
  };
  
  return (
    <>
      {/* Main model container */}
      <group ref={modelRef} position={[0, 0, 0]} />
      
      {/* Mesh interaction layer */}
      {modelLoaded && meshSelectionMode && (
        <group
          onClick={handleMeshClick}
          onPointerOver={handleMeshHover}
          onPointerOut={handleMeshLeave}
        >
          {/* Highlight hovered/selected meshes */}
          {Object.entries(meshesRef.current).map(([id, mesh]) => {
            const isSelected = id === selectedMeshId;
            const isHovered = id === hoveredMesh;
            
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
      
      {/* Debug helpers */}
      {debugMode && (
        <group>
          <AxesHelper />
          <GridHelper />
          
          {modelInfo && (
            <Box3Helper 
              box={new THREE.Box3().setFromCenterAndSize(
                new THREE.Vector3(0, 0, 0),
                modelInfo.size
              )} 
              color="yellow" 
            />
          )}
          
          <ModelOriginHelper />
        </group>
      )}
      
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
      
      {/* Mesh selection mode indicator */}
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
      
      {/* Floating mesh controls interface */}
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
            
            {/* View mode toggle */}
            <div 
              onClick={toggleViewMode} 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '6px 10px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              <span>View Mode: </span>
              <span style={{ 
                fontWeight: 'bold', 
                color: viewMode === 'normal' ? '#4CAF50' : 
                       viewMode === 'wireframe' ? '#2196F3' : '#FF9800' 
              }}>
                {viewMode.charAt(0).toUpperCase() + viewMode.slice(1)}
              </span>
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

export default ModelViewer; 