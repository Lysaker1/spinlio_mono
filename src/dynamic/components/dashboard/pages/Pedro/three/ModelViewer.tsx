import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import { useThree, useFrame, ThreeEvent } from '@react-three/fiber';
import { Text as DreiText, Html, useHelper, Center, PerspectiveCamera, ContactShadows, OrbitControls as DreiOrbitControls } from '@react-three/drei';
import { v4 as uuidv4 } from 'uuid';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import modelLoaderService from '../services/ModelLoaderService';
import snapPointService from '../services/SnapPointService';
import { AttachmentPoint } from '../components/AttachmentPointHelper';
import AttachmentPointHelper from '../components/AttachmentPointHelper';

// Control debugging output - keep false unless debugging transform control issues
const DEV_MODE = false;

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
  sceneLocked?: boolean;
  onToggleSceneLock?: () => void;
  editMode?: 'translate' | 'rotate' | 'scale';
  onChangeEditMode?: (mode: 'translate' | 'rotate' | 'scale') => void;
  lockedAxes?: {x: boolean, y: boolean, z: boolean};
  disableAutoFocus?: boolean; // Add flag to disable automatic focusing
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
  componentType,
  sceneLocked = false,
  onToggleSceneLock,
  editMode,
  onChangeEditMode,
  lockedAxes = { x: false, y: false, z: false },
  disableAutoFocus = false // Default to false for backward compatibility
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
  
  // State for 3D view controls
  const [isEditing, setIsEditing] = useState(false); // Add state for edit mode
  const [localEditMode, setLocalEditMode] = useState<'translate' | 'rotate' | 'scale'>(editMode || 'translate'); // Local edit mode state
  
  // Use actual edit mode (from props or local state)
  const activeEditMode = editMode || localEditMode;
  
  // Refs
  const modelGroupRef = useRef<THREE.Group>(new THREE.Group());
  const modelRef = useRef<THREE.Object3D | null>(null);
  const meshesRef = useRef<Record<string, THREE.Mesh>>({});
  const loadingModelRef = useRef<File | null>(null);
  const autoPointsGeneratedRef = useRef<boolean>(false);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const orbitControlsRef = useRef<any>(null);
  
  // Get THREE.js context
  const { camera, scene } = useThree();
  
  // Store the cameraPosition before locking for restoration when unlocking
  const previousCameraPosition = useRef<THREE.Vector3 | null>(null);
  
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
  
  // Handle automatic attachment point generation with better error protection
  useEffect(() => {
    // Only generate automatic points when the component type is set, 
    // the model is loaded, and the automatic attachment mode is active
    if (
      attachmentMode === 'automatic' &&
      modelLoaded &&
      modelInfo &&
      Object.keys(meshesRef.current).length > 0 &&
      !autoPointsGeneratedRef.current
    ) {
      // Set flag immediately to prevent duplicate generation
      autoPointsGeneratedRef.current = true;
      
      try {
        console.log(`Generating automatic attachment points for ${componentType}...`);
        
        // Ensure model and all meshes have up-to-date world matrices
        console.log("Updating model world matrices before generating attachment points");
        if (modelRef.current) {
          // Force world matrix update to ensure all transforms are applied
          modelRef.current.updateWorldMatrix(true, true);
        }
        
        // Update individual mesh matrices to ensure all transformations are applied
        Object.values(meshesRef.current).forEach(mesh => {
          mesh.updateWorldMatrix(true, true);
        });
        
        // IMPORTANT: Use the actual model's bounding box in WORLD space
        // This ensures we're using the model's real position in the scene
        const worldBoundingBox = new THREE.Box3().setFromObject(modelRef.current!);
        console.log(`Initial world bounding box: min=(${worldBoundingBox.min.x.toFixed(2)}, ${worldBoundingBox.min.y.toFixed(2)}, ${worldBoundingBox.min.z.toFixed(2)}), max=(${worldBoundingBox.max.x.toFixed(2)}, ${worldBoundingBox.max.y.toFixed(2)}, ${worldBoundingBox.max.z.toFixed(2)})`);
        
        // Calculate model size
        const size = new THREE.Vector3();
        worldBoundingBox.getSize(size);
        
        // Make sure model is elevated from the grid properly
        if (modelRef.current) {
          // Get the lowest point of the bounding box
          const lowestY = worldBoundingBox.min.y;
          
          // We want to adjust the model so the bottom of the bounding box sits exactly at Y=0
          const yOffset = -lowestY;
          console.log(`Adjusting model Y position by ${yOffset.toFixed(4)} to sit exactly on the grid`);
          
          // Apply the adjustment
          modelRef.current.position.y += yOffset;
          
          // After moving the model, make sure to update its world matrix again
          modelRef.current.updateWorldMatrix(true, true);
          
          // Update individual mesh matrices again after the model has been repositioned
          Object.values(meshesRef.current).forEach(mesh => {
            mesh.updateWorldMatrix(true, true);
          });
          
          // Recompute the world bounding box after adjustments
          worldBoundingBox.setFromObject(modelRef.current);
          
          console.log(`Updated bounding box after positioning: min=(${worldBoundingBox.min.x.toFixed(2)}, ${worldBoundingBox.min.y.toFixed(2)}, ${worldBoundingBox.min.z.toFixed(2)}), max=(${worldBoundingBox.max.x.toFixed(2)}, ${worldBoundingBox.max.y.toFixed(2)}, ${worldBoundingBox.max.z.toFixed(2)})`);
        }
        
        // Generate points using the service, which will use specialized analyzers when appropriate
        // Use the WORLD bounding box to ensure correct coordinates
        const autoPoints = snapPointService.generateAttachmentPoints(
          componentType,
          meshesRef.current,
          worldBoundingBox
        );
        
        console.log(`Generated ${autoPoints.length} attachment points`);
        
        // Add all generated points - no need to adjust positions as they're already in world space
        if (autoPoints.length > 0) {
          autoPoints.forEach(point => {
            onAddAttachmentPoint(point);
          });
        } else {
          console.warn("No automatic attachment points were generated");
          // Reset flag so user can try again
          autoPointsGeneratedRef.current = false;
        }
      } catch (error) {
        console.error("Error generating attachment points:", error);
        // Reset flag so user can try again
        autoPointsGeneratedRef.current = false;
      }
    }
  }, [attachmentMode, modelLoaded, modelInfo, onAddAttachmentPoint, componentType, modelRef]);
  
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
    const distance = (maxDim / 2) / Math.tan(fov / 2) * 2.5; // 2.5x to give more margin
    
    // Position camera slightly offset for better perspective (not directly on axis)
    camera.position.set(distance * 0.8, distance * 0.6, distance);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
    
    console.log(`Camera positioned at distance: ${distance} for model size: ${maxDim}`);
    console.log(`Camera position:`, camera.position);
  }, [camera]);
  
  // Add better cleanup for webgl resources
  useEffect(() => {
    // Cleanup function to properly dispose resources when component unmounts
    return () => {
      // Dispose any meshes to avoid memory leaks
      if (meshesRef.current) {
        Object.values(meshesRef.current).forEach(mesh => {
          if (mesh.geometry) {
            mesh.geometry.dispose();
          }
          if (mesh.material) {
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach(material => material.dispose());
            } else {
              mesh.material.dispose();
            }
          }
        });
        meshesRef.current = {};
      }
      
      // Clear model reference
      if (modelGroupRef.current) {
        while (modelGroupRef.current.children.length > 0) {
          const child = modelGroupRef.current.children[0];
          modelGroupRef.current.remove(child);
        }
      }
      
      // Reset flags
      autoPointsGeneratedRef.current = false;
    };
  }, []);
  
  // Handle file changes with better error protection
  useEffect(() => {
    // Only load model once per file
    if (file && file !== loadingModelRef.current) {
      setModelLoaded(false);
      setLoadingProgress(0);
      
      // Reset refs
      modelRef.current = null;
      
      // Properly dispose old resources
      if (meshesRef.current) {
        Object.values(meshesRef.current).forEach(mesh => {
          if (mesh.geometry) mesh.geometry.dispose();
          if (mesh.material) {
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach(material => material.dispose());
            } else {
              mesh.material.dispose();
            }
          }
        });
        meshesRef.current = {};
      }
      
      autoPointsGeneratedRef.current = false;
      loadingModelRef.current = file;
      
      console.log(`Loading model: ${file.name}`);
      
      const handleProgress = (progress: number) => {
        setLoadingProgress(Math.round(progress * 100));
      };
      
      // Clear the scene
      if (modelGroupRef.current) {
        while (modelGroupRef.current.children.length > 0) {
          const child = modelGroupRef.current.children[0];
          modelGroupRef.current.remove(child);
        }
      }
      
      // Load the model with progress tracking and error handling
      modelLoaderService.loadModelFromFile(
        file, 
        {
          normalizeModel: true,
          autoCenter: true,
          computeBoundingBox: true,
          targetSize: 5,
          maintainAspectRatio: true
        }, 
        handleProgress
      ).then(result => {
        try {
          if (result.object && modelGroupRef.current) {
            // Clear any existing model first
            while (modelGroupRef.current.children.length > 0) {
              modelGroupRef.current.remove(modelGroupRef.current.children[0]);
            }
            
            // Add the new model
            modelGroupRef.current.add(result.object);
            modelRef.current = result.object;
            
            // Store all meshes for raycasting
            meshesRef.current = {};
            result.object.traverse((child) => {
              if (child instanceof THREE.Mesh) {
                meshesRef.current[child.uuid] = child;
                child.castShadow = true;
                child.receiveShadow = true;
              }
            });
            
            // Set model position to be on the ground
            if (modelRef.current) {
              // Calculate the model's bounding box in world space
              const worldBoundingBox = new THREE.Box3().setFromObject(modelRef.current);
              
              // Get the lowest point of the bounding box
              const lowestY = worldBoundingBox.min.y;
              
              // Calculate offset to place model exactly on grid
              const yOffset = -lowestY;
              
              console.log(`Adjusting model Y position by ${yOffset.toFixed(4)} to sit exactly on grid`);
              modelRef.current.position.y += yOffset;
              
              // Update world matrix after position change
              modelRef.current.updateWorldMatrix(true, true);
              
              // Recalculate bounding box after positioning
              const updatedBox = new THREE.Box3().setFromObject(modelRef.current);
              const updatedSize = updatedBox.getSize(new THREE.Vector3());
              const updatedCenter = updatedBox.getCenter(new THREE.Vector3());
              
              console.log(`After positioning - Model dimensions: ${updatedSize.x.toFixed(2)} x ${updatedSize.y.toFixed(2)} x ${updatedSize.z.toFixed(2)}`);
              console.log(`After positioning - Model bounding box: min=(${updatedBox.min.x.toFixed(2)}, ${updatedBox.min.y.toFixed(2)}, ${updatedBox.min.z.toFixed(2)}), max=(${updatedBox.max.x.toFixed(2)}, ${updatedBox.max.y.toFixed(2)}, ${updatedBox.max.z.toFixed(2)})`);
            }
            
            // Store model info and update state
            setModelInfo({
              size: result.dimensions,
              center: result.center,
              meshCount: Object.keys(meshesRef.current).length
            });
            
            // Log model information
            console.log("Model loaded successfully");
            console.log("Model position:", modelRef.current.position);
            console.log("Model dimensions:", result.dimensions);
            
            // Set up camera based on model size
            const maxDim = Math.max(result.dimensions.x, result.dimensions.y, result.dimensions.z);
            const targetDistance = maxDim * 2.5;
            
            // Position camera appropriately
            setupCameraForModel(result.dimensions);
            console.log(`Camera positioned at distance: ${targetDistance} for model size: ${maxDim}`);
            console.log(`Camera position:`, cameraRef.current?.position);
            
            // Update view
            setModelLoaded(true);
            
            // Call parent callback
            if (onModelInfoLoaded) {
              onModelInfoLoaded(result);
            }
          }
        } catch (error) {
          console.error('Error processing loaded model:', error);
          setError(error instanceof Error ? error.message : 'Unknown error processing model');
        }
      }).catch(error => {
        console.error('Error loading model:', error);
        setError(error instanceof Error ? error.message : 'Unknown error loading model');
      });
    }
  }, [file, onModelInfoLoaded, setupCameraForModel]);
  
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
  
  // Handle user interaction with meshes to create attachment points
  const handleMeshClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    
    // Only proceed if we're in mesh selection mode
    if (!meshSelectionMode) return;
    
    const mesh = event.object as THREE.Mesh;
    const meshId = mesh.uuid;
    
    console.log(`Mesh clicked: ${mesh.name || 'Unnamed'} (${meshId})`);
    setSelectedMeshId(meshId);
    
    // If we're in attachment mode, create an attachment point
    if (attachmentMode === 'mesh') {
      try {
        // Get the hit point in world coordinates
        const hitPoint = event.point.clone();
        
        // Get the face normal
        const faceNormal = event.face?.normal.clone();
        if (faceNormal) {
          // Convert from local space to world space
          mesh.updateMatrixWorld();
          const normalMatrix = new THREE.Matrix3().getNormalMatrix(mesh.matrixWorld);
          faceNormal.applyMatrix3(normalMatrix).normalize();
        }
        
        // Create an attachment point at the hit location
        const attachmentPoint = snapPointService.createMeshAttachmentPoint(
          mesh,
          hitPoint,
          faceNormal
        );
        
        console.log('Created mesh attachment point:', attachmentPoint);
        
        // Add the point
        onAddAttachmentPoint(attachmentPoint);
      } catch (error) {
        console.error('Error creating attachment point:', error);
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
  
  // Focus camera on attachment point
  const focusOnPoint = useCallback((point: AttachmentPoint, forceFocus = false) => {
    // Skip if auto-focus is disabled (unless forceFocus is true)
    if (disableAutoFocus && !forceFocus) {
      if (DEV_MODE) console.log(`Auto-focus disabled for point: ${point.id}`);
      return;
    }
    
    // Log the point being focused on with additional details
    console.log(`Focusing camera on attachment point: ${point.name || point.id} (type: ${point.type}, optionId: ${point.optionId || 'none'})`);
    
    // Get the point position
    const pointPosition = new THREE.Vector3(...point.position);
    
    // Calculate appropriate distance based on point size or model size
    const pointRadius = point.radius || 0.25;
    const distance = Math.max(pointRadius * 8, 2); // Increased for better view
    
    // Get orbit controls - using ref from drei's OrbitControls
    const controls = orbitControlsRef.current;
    if (!controls) {
      console.warn("Could not focus camera: OrbitControls not available");
      return;
    }
    
    // Get camera - just use the camera from the context
    const cam = camera;
    if (!cam) {
      console.warn("Could not focus camera: Camera not available");
      return;
    }
    
    // Save current camera position for smooth transition
    const startPosition = new THREE.Vector3().copy(cam.position);
    
    // Calculate new camera position
    // Move slightly off direct axis for better viewing angle
    const dir = new THREE.Vector3();
    
    // Use point's normal direction if available to position camera
    if (point.normal && (point.normal[0] !== 0 || point.normal[1] !== 0 || point.normal[2] !== 0)) {
      // Position camera opposite to the point's normal
      dir.set(-point.normal[0], -point.normal[1], -point.normal[2]).normalize();
    } else {
      // Default camera offset for better viewing angle if no normal
      dir.set(0.7, 0.5, 0.7).normalize();
    }
    
    // Offset by the calculated distance
    const cameraOffset = dir.multiplyScalar(distance);
    const targetPosition = new THREE.Vector3().copy(pointPosition).add(cameraOffset);
    
    // Animate the camera move
    let startTime = performance.now();
    const duration = 1000; // 1 second transition
    
    const animateCamera = () => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Use easing function for smoother animation
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease out
      
      // Interpolate camera position
      cam.position.lerpVectors(startPosition, targetPosition, easeProgress);
      
      // Look at the point
      controls.target.lerp(pointPosition, easeProgress);
      controls.update();
      
      // Continue animation if not complete
      if (progress < 1) {
        requestAnimationFrame(animateCamera);
      } else {
        // When animation completes, ensure we're looking at the point
        controls.target.copy(pointPosition);
        controls.update();
        if (DEV_MODE) console.log("Camera focus complete");
      }
    };
    
    // Start animation
    animateCamera();
    
  }, [attachmentPoints, camera, disableAutoFocus]);
  
  // Add to dependency array for useEffect that watches selectedPoint
  useEffect(() => {
    // When selected point changes, focus on it
    if (selectedPoint) {
      // Skip auto-focusing if the disableAutoFocus option is turned on
      if (disableAutoFocus) {
        if (DEV_MODE) {
          console.log("Auto-focus is disabled - skipping automatic camera focus");
        }
        return;
      }
      
      // Find the matching attachment point
      const point = attachmentPoints.find(p => p.id === selectedPoint);
      if (point) {
        focusOnPoint(point);
      }
    }
  }, [selectedPoint, attachmentPoints, focusOnPoint, disableAutoFocus]);
  
  // Add a new effect to listen for custom forceFocus events
  useEffect(() => {
    // Create a handler for forceFocus events
    const handleForceFocus = (event: Event) => {
      // Check if we have a point ID in the event detail
      const customEvent = event as CustomEvent;
      if (customEvent.detail && customEvent.detail.pointId) {
        // Force focus on the point even if auto-focus is disabled
        if (DEV_MODE) {
          console.log("Force focusing on point:", customEvent.detail.pointId);
        }
        focusOnPoint(attachmentPoints.find(p => p.id === customEvent.detail.pointId) || attachmentPoints[0]);
      }
    };
    
    // Add event listener to the canvas element
    const canvasElement = document.querySelector('.model-canvas');
    if (canvasElement) {
      canvasElement.addEventListener('forceFocus', handleForceFocus);
    }
    
    // Clean up when component unmounts
    return () => {
      if (canvasElement) {
        canvasElement.removeEventListener('forceFocus', handleForceFocus);
      }
    };
  }, [focusOnPoint, attachmentPoints]);
  
  // Remove the TransformControls event handling and helper
  // We'll replace it with a message about the new implementation
  useEffect(() => {
    console.log('Using custom dragging implementation for attachment points instead of TransformControls');
    console.log('This should resolve the "Maximum call stack size exceeded" errors');
    
    // We'll still keep orbit controls updates for scene locking
    if (!orbitControlsRef.current) return;
    
    // Disable orbit controls when scene is locked
    orbitControlsRef.current.enabled = !sceneLocked;
    
    // Log the scene lock state change
    if (DEV_MODE) {
      console.log(`Scene ${sceneLocked ? 'locked' : 'unlocked'} - Camera control ${sceneLocked ? 'disabled' : 'enabled'}`);
    }
  }, [sceneLocked]);
  
  // Function to toggle the scene lock state
  const toggleSceneLock = useCallback(() => {
    // No longer manipulate camera position when locking/unlocking
    // Just call the parent toggle function
    if (onToggleSceneLock) {
      onToggleSceneLock();
    }
  }, [onToggleSceneLock]);
  
  // Toggle edit mode type
  const toggleEditMode = useCallback(() => {
    const newMode = (() => {
      switch (localEditMode) {
        case 'translate': return 'rotate';
        case 'rotate': return 'scale';
        case 'scale': return 'translate';
        default: return 'translate';
      }
    })();
    
    setLocalEditMode(newMode);
    
    // Notify parent of edit mode change
    if (onChangeEditMode) {
      onChangeEditMode(newMode);
    }
  }, [localEditMode, onChangeEditMode]);
  
  // Add these lighting improvements
  const SceneSetup = () => {
    return (
      <group>
        {/* Ground plane */}
        <mesh 
          rotation={[-Math.PI / 2, 0, 0]} 
          position={[0, 0, 0]}
          receiveShadow
        >
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial 
            color="#f0f0f0" 
            transparent 
            opacity={0.6}
            roughness={0.8}
          />
        </mesh>

        {/* Grid helper for better depth perception */}
        <gridHelper 
          args={[50, 50, '#bbbbbb', '#dddddd']} 
          position={[0, 0.01, 0]} 
        />
        
        {/* Improved lighting */}
        <hemisphereLight args={['#ffffff', '#ddddff', 0.5]} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={0.5} 
          castShadow 
        />
        <directionalLight 
          position={[-5, 5, -5]} 
          intensity={0.3} 
        />
        <directionalLight 
          position={[0, 5, 0]} 
          intensity={0.4} 
        />
        
        {/* Contact shadows for better grounding */}
        <ContactShadows 
          opacity={0.4} 
          scale={10} 
          blur={1} 
          far={10} 
          resolution={256} 
          color="#000000" 
          position={[0, 0, 0]}
        />
      </group>
    );
  };
  
  // Render the model and helpers
  return (
    <group>
      {/* Scene setup */}
      <SceneSetup />
      
      {/* Main model container - wrapped in Center component for better visibility */}
      <Center scale={1.0}>
        <group ref={modelGroupRef} position={[0, 0, 0]} />
      </Center>
      
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
      
      {/* Debug helpers when debug mode is enabled */}
      {debugMode && (
        <>
          <AxesHelper />
          <GridHelper />
          {modelRef.current && (
            <Box3Helper 
              box={new THREE.Box3().setFromObject(modelRef.current)} 
              color="#00ff00" 
            />
          )}
          <ModelOriginHelper />
        </>
      )}
      
      {/* Loading indicator while model is loading */}
      {!modelLoaded && loadingProgress < 100 && (
        <LoadingIndicator message={`Loading model... ${loadingProgress}%`} />
      )}
      
      {/* Show error message if there was a problem loading the model */}
      {error && (
        <Html position={[0, 1, 0]} center>
          <div style={{ background: '#f8d7da', padding: '10px', borderRadius: '5px', color: '#721c24' }}>
            Error: {error}
          </div>
        </Html>
      )}
      
      {/* Show orbit controls (disabled when scene is locked) */}
      <DreiOrbitControls
        ref={orbitControlsRef}
        enableZoom={!sceneLocked}
        enableRotate={!sceneLocked}
        enablePan={!sceneLocked}
        minDistance={1}
        maxDistance={20}
      />
      
      {/* Render attachment point helpers */}
      {modelLoaded && attachmentPoints.map(point => (
        <AttachmentPointHelper
          key={point.id}
          point={point}
          selected={selectedPoint === point.id}
          onSelect={() => onSelectPoint(point.id)}
          onUpdate={(updatedPoint) => onAttachmentPointUpdated(updatedPoint)}
          onDelete={() => onAttachmentPointUpdated(point)}
          modelInfo={modelInfo}
          sceneLocked={sceneLocked}
          lockedAxes={lockedAxes}
        />
      ))}
    </group>
  );
};

export default ModelViewer; 