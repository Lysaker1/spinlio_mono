import React, { useState, useEffect, useRef, MouseEvent as ReactMouseEvent } from 'react';
import { Canvas, useThree, useFrame, extend } from '@react-three/fiber';

import { ThreeEvent } from '@react-three/fiber/dist/declarations/src/core/events';
import { 
  OrbitControls, 
  Environment, 
  useGLTF, 
  Grid, 
  TransformControls,
  Html,
  Text as DreiText,
  PerspectiveCamera
} from '@react-three/drei';
import * as THREE from 'three';
import { Text, Button, Group, Stack, Select } from '@mantine/core';

interface MeshData {
  id: string;
  name: string;
  index: number;
  position: [number, number, number];
  meshRef?: THREE.Mesh;
}

interface SnapPoint {
  id: string;
  position: [number, number, number];
  rotation: [number, number, number, number];
  meshId?: string; // Reference to the parent mesh
  color: string;
}

interface MeshExplorerProps {
  modelUrl: string;
  onMeshesLoaded?: (meshes: MeshData[]) => void;
}

/**
 * Component that loads and displays all meshes from a GLTF/GLB model
 * Allows exploring the meshes and attaching snap points to them
 */
const MeshExplorer: React.FC<MeshExplorerProps> = ({ 
  modelUrl,
  onMeshesLoaded 
}) => {
  const [meshes, setMeshes] = useState<MeshData[]>([]);
  const [snapPoints, setSnapPoints] = useState<SnapPoint[]>([]);
  const [selectedMesh, setSelectedMesh] = useState<string | null>(null);
  const [selectedPoint, setSelectedPoint] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [highlightMode, setHighlightMode] = useState<boolean>(false);
  const [addMode, setAddMode] = useState<'manual' | 'auto' | 'mesh'>('manual');
  const [modelInfo, setModelInfo] = useState<{
    meshCount: number;
    size: { x: number, y: number, z: number };
    center: { x: number, y: number, z: number };
  } | null>(null);

  // Log when meshes are loaded
  useEffect(() => {
    if (meshes.length > 0 && !isLoading) {
      console.log(`Loaded ${meshes.length} meshes from model:`, meshes);
      if (onMeshesLoaded) {
        onMeshesLoaded(meshes);
      }
    }
  }, [meshes, isLoading, onMeshesLoaded]);

  return (
    <div className="w-full h-full bg-gray-100 flex flex-col">
      <div className="p-4 bg-gray-800 text-white flex items-center justify-between">
        <Text className="text-xl font-bold">Mesh Explorer (Beta)</Text>
        <div className="flex gap-2">
          <button 
            className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setHighlightMode(!highlightMode)}
          >
            {highlightMode ? 'Normal Mode' : 'Highlight Mode'}
          </button>
        </div>
      </div>
      
      {/* Model Info Bar */}
      {modelInfo && (
        <div className="p-2 bg-gray-700 text-white text-sm flex justify-between">
          <span>Meshes: {modelInfo.meshCount}</span>
          <span>Size: {modelInfo.size.x.toFixed(2)} × {modelInfo.size.y.toFixed(2)} × {modelInfo.size.z.toFixed(2)}</span>
          <span>Center: ({modelInfo.center.x.toFixed(2)}, {modelInfo.center.y.toFixed(2)}, {modelInfo.center.z.toFixed(2)})</span>
        </div>
      )}
      
      <div className="flex flex-1 overflow-hidden">
        {/* 3D Viewer */}
        <div className="flex-1 border-r border-gray-300">
          <Canvas shadows camera={{ position: [0, 2, 5], fov: 45 }}>
            <ambientLight intensity={0.3} />
            <hemisphereLight intensity={0.4} skyColor="#ffffff" groundColor="#bbbbff" />
            <directionalLight
              position={[5, 10, 5]} 
              intensity={1.0}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <directionalLight position={[-5, 5, -5]} intensity={0.5} />
            
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
            
            <Environment preset="studio" />
            
            <ModelWithMeshes 
              url={modelUrl}
              setMeshes={setMeshes}
              setIsLoading={setIsLoading}
              selectedMesh={selectedMesh}
              highlightMode={highlightMode}
              onMeshClick={(id) => setSelectedMesh(id)}
              setModelInfo={setModelInfo}
            />
            
            {/* Snap Points */}
            <SnapPointsGroup 
              snapPoints={snapPoints}
              selectedPoint={selectedPoint}
              onSelectPoint={setSelectedPoint}
              onPointUpdated={(point) => {
                setSnapPoints(prev => 
                  prev.map(p => p.id === point.id ? point : p)
                );
              }}
            />
            
            {/* UI for manual snap point placement */}
            {addMode === 'manual' && selectedPoint === null && (
              <DreiText
                position={[0, 0, 0]}
                color="white"
                fontSize={0.1}
                anchorX="center"
                anchorY="middle"
                backgroundColor="#00000080"
                padding={0.05}
              >
                Click on the grid or model to place a snap point
              </DreiText>
            )}
            
            <ViewportClickHandler 
              enabled={addMode === 'manual' && selectedPoint === null}
              onViewportClick={(position) => {
                if (addMode === 'manual') {
                  addManualSnapPoint(position);
                }
              }}
            />
            
            <OrbitControls makeDefault />
            
            {/* Debug axes and info */}
            <axesHelper args={[1]} />
            <DreiText
              position={[-2, 2, 0]}
              color="white"
              fontSize={0.08}
              anchorX="left"
              anchorY="top"
              backgroundColor="#00000080"
              padding={0.03}
            >
              {isLoading ? 'Loading model...' : `${meshes.length} meshes loaded`}
            </DreiText>
          </Canvas>
        </div>
        
        {/* Sidebar */}
        <div className="w-80 bg-white p-4 flex flex-col h-full overflow-auto">
          {/* Snap Point Controls */}
          <div className="mb-4 p-3 border border-gray-200 rounded">
            <Text className="text-lg font-semibold mb-2">Snap Point Controls</Text>
            <Select
              label="Add Mode"
              value={addMode}
              onChange={(value) => setAddMode(value as 'manual' | 'auto' | 'mesh')}
              data={[
                { value: 'manual', label: 'Manual Placement' },
                { value: 'auto', label: 'Auto-Detect' },
                { value: 'mesh', label: 'Attach to Mesh' }
              ]}
              className="mb-2"
            />
            
            {addMode === 'manual' && (
              <div className="mb-3">
                <Button 
                  fullWidth
                  variant="filled"
                  color="blue"
                  onClick={() => setSelectedPoint(null)}
                >
                  Place Snap Point
                </Button>
                <Text size="xs" color="dimmed" className="mt-1">
                  Click anywhere in the 3D view to place a snap point
                </Text>
              </div>
            )}
            
            {addMode === 'auto' && (
              <div className="mb-3">
                <Button 
                  fullWidth
                  variant="filled"
                  color="green"
                  onClick={autoDetectSnapPoints}
                >
                  Auto-Detect Snap Points
                </Button>
                <Text size="xs" color="dimmed" className="mt-1">
                  Automatically detect potential attachment points
                </Text>
              </div>
            )}
            
            {addMode === 'mesh' && selectedMesh && (
              <div className="mb-3">
                <Button 
                  fullWidth
                  variant="filled"
                  color="violet"
                  onClick={() => addSnapPoint(selectedMesh)}
                >
                  Add Snap Point to Selected Mesh
                </Button>
                <Text size="xs" color="dimmed" className="mt-1">
                  Adds a snap point at the center of the selected mesh
                </Text>
              </div>
            )}
          </div>
          
          <div className="mb-4">
            <Text className="text-lg font-semibold mb-2">Meshes</Text>
            {isLoading ? (
              <div className="flex items-center justify-center p-4">
                <span className="animate-pulse">Loading meshes...</span>
              </div>
            ) : (
              <div className="space-y-1 max-h-60 overflow-auto">
                {meshes.map((mesh) => (
                  <div 
                    key={mesh.id}
                    className={`p-2 border rounded cursor-pointer flex items-center justify-between 
                      ${selectedMesh === mesh.id ? 'bg-blue-100 border-blue-500' : 'border-gray-300'}`}
                    onClick={(e: ReactMouseEvent<HTMLDivElement>) => {
                      e.stopPropagation();
                      setSelectedMesh(mesh.id === selectedMesh ? null : mesh.id);
                    }}
                  >
                    <span className="truncate text-sm">{mesh.name || `Mesh ${mesh.index}`}</span>
                    <button 
                      className="text-xs bg-blue-500 text-white rounded px-2 py-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        addSnapPoint(mesh.id);
                      }}
                    >
                      + Snap
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="mb-4">
            <Text className="text-lg font-semibold mb-2">Snap Points</Text>
            <div className="space-y-1 max-h-60 overflow-auto">
              {snapPoints.map((point) => (
                <div 
                  key={point.id}
                  className={`p-2 border rounded cursor-pointer 
                    ${selectedPoint === point.id ? 'bg-blue-100 border-blue-500' : 'border-gray-300'}`}
                  onClick={(e: ReactMouseEvent<HTMLDivElement>) => {
                    e.stopPropagation();
                    setSelectedPoint(point.id === selectedPoint ? null : point.id);
                  }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Snap Point {snapPoints.indexOf(point) + 1}</span>
                    <div className="flex gap-1">
                      <button 
                        className="text-xs bg-red-500 text-white rounded px-2 py-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeSnapPoint(point.id);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  {point.meshId && (
                    <div className="text-xs text-gray-600 mt-1">
                      Attached to: {getMeshName(point.meshId)}
                    </div>
                  )}
                </div>
              ))}
              
              {snapPoints.length === 0 && (
                <div className="text-sm text-gray-500 italic p-2">
                  No snap points added yet. Select a mesh and click "+ Snap" to add one.
                </div>
              )}
            </div>
            
            <button 
              className="mt-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              onClick={() => addSnapPoint()}
            >
              Add Global Snap Point
            </button>
          </div>
          
          {/* Detailed information section */}
          <div className="mt-4 border-t border-gray-200 pt-2">
            <Text className="text-lg font-semibold mb-2">Details</Text>
            {selectedMesh && (
              <div className="space-y-1">
                <Text className="text-sm">
                  <span className="font-semibold">Selected Mesh:</span> {getMeshName(selectedMesh)}
                </Text>
                <Text className="text-sm">
                  <span className="font-semibold">Position:</span> {getMeshPositionString(selectedMesh)}
                </Text>
              </div>
            )}
            {selectedPoint && (
              <div className="space-y-1 mt-2">
                <Text className="text-sm">
                  <span className="font-semibold">Selected Snap Point:</span> {snapPoints.findIndex(p => p.id === selectedPoint) + 1}
                </Text>
                <Text className="text-sm">
                  <span className="font-semibold">Position:</span> {getSnapPointPositionString(selectedPoint)}
                </Text>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  
  // Helper functions for adding snap points
  function addManualSnapPoint(position: [number, number, number]) {
    const newPointId = `snap-${Date.now()}`;
    const newPoint: SnapPoint = {
      id: newPointId,
      position: position,
      rotation: [0, 0, 0, 1], // Identity quaternion
      meshId: undefined,
      color: getRandomColor()
    };
    
    setSnapPoints(prev => [...prev, newPoint]);
    setSelectedPoint(newPointId);
    console.log(`Added manual snap point at position: (${position[0]}, ${position[1]}, ${position[2]})`);
  }
  
  function autoDetectSnapPoints() {
    if (meshes.length === 0) return;
    
    // Logic to detect potential snap points based on mesh properties
    // This is a simple example - you can make this more sophisticated
    const detectedPoints: SnapPoint[] = [];
    
    // Find prominent mesh features like extremities or centers
    meshes.forEach(mesh => {
      // Add center point for each major mesh
      detectedPoints.push({
        id: `snap-auto-${mesh.id}-center`,
        position: [...mesh.position],
        rotation: [0, 0, 0, 1],
        meshId: mesh.id,
        color: '#00FF00' // Green for auto-detected points
      });
    });
    
    // Log detection results
    console.log(`Auto-detected ${detectedPoints.length} potential snap points`);
    
    // Add the auto-detected points
    setSnapPoints(prev => [...prev, ...detectedPoints]);
  }
  
  // Existing helper functions
  function addSnapPoint(meshId?: string) {
    const newPointId = `snap-${Date.now()}`;
    const pointPosition: [number, number, number] = [0, 0, 0];
    
    // If a mesh is specified, position the snap point at the mesh center
    if (meshId) {
      const mesh = meshes.find(m => m.id === meshId);
      if (mesh) {
        pointPosition[0] = mesh.position[0];
        pointPosition[1] = mesh.position[1];
        pointPosition[2] = mesh.position[2];
      }
    }
    
    const newPoint: SnapPoint = {
      id: newPointId,
      position: pointPosition,
      rotation: [0, 0, 0, 1], // Identity quaternion
      meshId: meshId,
      color: getRandomColor()
    };
    
    setSnapPoints(prev => [...prev, newPoint]);
    setSelectedPoint(newPointId);
    console.log(`Added snap point attached to mesh ${meshId || 'none'} at position: (${pointPosition[0]}, ${pointPosition[1]}, ${pointPosition[2]})`);
  }
  
  function removeSnapPoint(pointId: string) {
    setSnapPoints(prev => prev.filter(p => p.id !== pointId));
    if (selectedPoint === pointId) {
      setSelectedPoint(null);
    }
  }
  
  function getMeshName(meshId: string): string {
    const mesh = meshes.find(m => m.id === meshId);
    return mesh ? (mesh.name || `Mesh ${mesh.index}`) : 'Unknown Mesh';
  }
  
  function getMeshPositionString(meshId: string): string {
    const mesh = meshes.find(m => m.id === meshId);
    if (!mesh) return 'Unknown';
    return `${mesh.position[0].toFixed(2)}, ${mesh.position[1].toFixed(2)}, ${mesh.position[2].toFixed(2)}`;
  }
  
  function getSnapPointPositionString(pointId: string): string {
    const point = snapPoints.find(p => p.id === pointId);
    if (!point) return 'Unknown';
    return `${point.position[0].toFixed(2)}, ${point.position[1].toFixed(2)}, ${point.position[2].toFixed(2)}`;
  }
  
  function getRandomColor(): string {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
};

/**
 * Component that handles clicks on the 3D viewport for manual placement
 */
interface ViewportClickHandlerProps {
  enabled: boolean;
  onViewportClick: (position: [number, number, number]) => void;
}

const ViewportClickHandler: React.FC<ViewportClickHandlerProps> = ({ enabled, onViewportClick }) => {
  const { raycaster, camera, scene } = useThree();
  
  useEffect(() => {
    if (!enabled) return;
    
    const handleClick = (event: MouseEvent) => {
      if (!enabled) return;
      
      // Convert mouse position to normalized device coordinates
      const canvas = document.querySelector('canvas');
      if (!canvas) return;
      
      const rect = canvas.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      // Create a Vector2 for the raycaster
      const pointer = new THREE.Vector2(x, y);
      
      // Update the picking ray
      raycaster.setFromCamera(pointer, camera);
      
      // Find intersections with the scene
      const intersects = raycaster.intersectObjects(scene.children, true);
      
      if (intersects.length > 0) {
        // Use the position of the first intersection
        const position: [number, number, number] = [
          intersects[0].point.x,
          intersects[0].point.y,
          intersects[0].point.z
        ];
        onViewportClick(position);
      } else {
        // If no intersection, place at some distance in front of the camera
        const vector = new THREE.Vector3(0, 0, -5);
        vector.applyQuaternion(camera.quaternion);
        vector.add(camera.position);
        onViewportClick([vector.x, vector.y, vector.z]);
      }
    };
    
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [enabled, raycaster, camera, scene, onViewportClick]);
  
  return null;
};

/**
 * Component that loads the model and extracts all meshes
 */
interface ModelWithMeshesProps {
  url: string;
  setMeshes: React.Dispatch<React.SetStateAction<MeshData[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  selectedMesh: string | null;
  highlightMode: boolean;
  onMeshClick: (id: string) => void;
  setModelInfo: React.Dispatch<React.SetStateAction<{
    meshCount: number;
    size: { x: number, y: number, z: number };
    center: { x: number, y: number, z: number };
  } | null>>;
}

const ModelWithMeshes: React.FC<ModelWithMeshesProps> = ({
  url,
  setMeshes,
  setIsLoading,
  selectedMesh,
  highlightMode,
  onMeshClick,
  setModelInfo
}) => {
  const { scene } = useGLTF(url, true);
  const groupRef = useRef<THREE.Group>(null);
  const meshRefs = useRef<{[key: string]: THREE.Mesh}>({});
  const originalMaterials = useRef<{[key: string]: THREE.Material | THREE.Material[]}>({});
  const [initialized, setInitialized] = useState(false);
  
  // Extract all meshes from the model
  useEffect(() => {
    if (!scene || initialized) return;
    
    console.log('Starting model processing...');
    setIsLoading(true);
    const extractedMeshes: MeshData[] = [];
    let index = 0;
    
    // Clone the scene to avoid modifying the original
    const sceneClone = scene.clone();
    
    // Log all scene children for debugging
    console.log('Scene children:', sceneClone.children.map(child => ({
      name: child.name,
      type: child.type,
      position: child.position,
      isMesh: child instanceof THREE.Mesh
    })));
    
    // Calculate the bounding box of the entire model
    const modelBox = new THREE.Box3().setFromObject(sceneClone);
    const modelCenter = modelBox.getCenter(new THREE.Vector3());
    const modelSize = modelBox.getSize(new THREE.Vector3());
    
    // Log model dimensions
    console.log('Model bounding box:', {
      min: modelBox.min,
      max: modelBox.max,
      center: modelCenter,
      size: modelSize
    });
    
    // Update model info state
    setModelInfo({
      meshCount: 0, // Will be updated below
      size: { x: modelSize.x, y: modelSize.y, z: modelSize.z },
      center: { x: modelCenter.x, y: modelCenter.y, z: modelCenter.z }
    });
    
    sceneClone.traverse((child: THREE.Object3D) => {
      if (child instanceof THREE.Mesh) {
        const meshId = `mesh-${index}-${child.name || 'unnamed'}`;
        const position = new THREE.Vector3();
        child.getWorldPosition(position);
        
        // Log detailed mesh information
        console.log(`Mesh ${index}: ${child.name || 'unnamed'}`, {
          position: position,
          geometry: {
            vertices: child.geometry.attributes.position ? child.geometry.attributes.position.count : 'N/A',
            type: child.geometry.type
          },
          material: Array.isArray(child.material) 
            ? `Multiple (${child.material.length})` 
            : child.material.type
        });
        
        extractedMeshes.push({
          id: meshId,
          name: child.name || `Mesh ${index}`,
          index,
          position: [position.x, position.y, position.z],
        });
        
        // Store original materials
        originalMaterials.current[meshId] = child.material;
        
        index++;
      }
    });
    
    // Update model info with the actual mesh count
    setModelInfo(prev => prev ? { ...prev, meshCount: extractedMeshes.length } : null);
    
    if (groupRef.current) {
      // Improved centering and scaling for consistent model display
      
      // Center the model at origin
      groupRef.current.position.set(-modelCenter.x, -modelCenter.y, -modelCenter.z);
      console.log('Centering model, offset:', -modelCenter.x, -modelCenter.y, -modelCenter.z);
      
      // Scale model to reasonable size - more aggressive scaling for both very large and very small models
      const maxDim = Math.max(modelSize.x, modelSize.y, modelSize.z);
      let scale = 1;
      
      if (maxDim > 10) {
        // Large model - scale down more aggressively
        scale = 5 / maxDim;
        console.log(`Large model detected (${maxDim}), scaling down by factor: ${scale}`);
      } else if (maxDim < 1) {
        // Small model - scale up more aggressively
        scale = 3 / maxDim;
        console.log(`Small model detected (${maxDim}), scaling up by factor: ${scale}`);
      } else {
        console.log(`Model size within normal range (${maxDim}), no scaling applied`);
      }
      
      // Apply calculated scale
      if (scale !== 1) {
        groupRef.current.scale.set(scale, scale, scale);
      }
      
      // Ensure model is visible by adjusting its height based on the grid
      // This ensures the bottom of the model is at or slightly above the grid
      if (modelBox.min.y < 0) {
        const heightOffset = -modelBox.min.y * scale;
        groupRef.current.position.y += heightOffset;
        console.log(`Adjusting model height to sit on grid, offset: ${heightOffset}`);
      }
    }
    
    setMeshes(extractedMeshes);
    setIsLoading(false);
    setInitialized(true);
    console.log(`Finished processing model with ${extractedMeshes.length} meshes`);
  }, [scene, setMeshes, setIsLoading, initialized, setModelInfo]);
  
  // Update mesh highlighting based on selection
  useEffect(() => {
    // Reset all meshes to original materials
    Object.keys(meshRefs.current).forEach(id => {
      const mesh = meshRefs.current[id];
      if (mesh) {
        const originalMaterial = originalMaterials.current[id];
        if (originalMaterial) {
          mesh.material = originalMaterial;
        }
      }
    });
    
    // Highlight the selected mesh
    if (selectedMesh && meshRefs.current[selectedMesh]) {
      const mesh = meshRefs.current[selectedMesh];
      
      // Create highlight material
      const highlightMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color('#ffaa00'),
        emissive: new THREE.Color('#ff6600'),
        emissiveIntensity: 0.3,
        transparent: true,
        opacity: 0.9,
      });
      
      // Apply highlight
      if (highlightMode) {
        // In highlight mode, dim all other meshes
        Object.keys(meshRefs.current).forEach(id => {
          if (id !== selectedMesh) {
            const otherMesh = meshRefs.current[id];
            const dimMaterial = new THREE.MeshBasicMaterial({
              color: new THREE.Color('#333333'),
              transparent: true,
              opacity: 0.3,
              wireframe: true
            });
            if (otherMesh) {
              otherMesh.material = dimMaterial;
            }
          }
        });
      }
      
      // Always highlight the selected mesh
      mesh.material = highlightMaterial;
    }
  }, [selectedMesh, highlightMode]);
  
  if (!scene) return null;
  
  return (
    <group ref={groupRef}>
      {scene && (
        scene.clone().children.map((child, index) => {
          if (child instanceof THREE.Mesh) {
            const meshId = `mesh-${index}-${child.name || 'unnamed'}`;
            return (
              <mesh
                key={meshId}
                ref={(mesh: THREE.Mesh) => {
                  if (mesh) {
                    meshRefs.current[meshId] = mesh;
                    mesh.geometry = child.geometry.clone();
                    mesh.material = child.material;
                    mesh.position.copy(child.position);
                    mesh.rotation.copy(child.rotation);
                    mesh.scale.copy(child.scale);
                    mesh.castShadow = true;
                    mesh.receiveShadow = true;
                  }
                }}
                onClick={(e: ThreeEvent<MouseEvent>) => {
                  e.stopPropagation();
                  onMeshClick(meshId);
                }}
              />
            );
          }
          return null;
        })
      )}
    </group>
  );
};

/**
 * Component that renders and manages snap points
 */
interface SnapPointsGroupProps {
  snapPoints: SnapPoint[];
  selectedPoint: string | null;
  onSelectPoint: (id: string | null) => void;
  onPointUpdated: (point: SnapPoint) => void;
}

const SnapPointsGroup: React.FC<SnapPointsGroupProps> = ({ 
  snapPoints, 
  selectedPoint, 
  onSelectPoint,
  onPointUpdated
}) => {
  const pointRefs = useRef<{[key: string]: THREE.Group}>({});
  const controlRef = useRef<any>(null);
  const { camera } = useThree();
  
  // Update control target when selection changes
  useEffect(() => {
    if (selectedPoint && pointRefs.current[selectedPoint] && controlRef.current) {
      controlRef.current.attach(pointRefs.current[selectedPoint]);
    }
  }, [selectedPoint]);
  
  return (
    <group>
      {snapPoints.map((point, index) => {
        const isSelected = selectedPoint === point.id;
        
        return (
          <group key={point.id}>
            <group
              position={new THREE.Vector3(...point.position)}
              quaternion={new THREE.Quaternion(...point.rotation)}
              ref={(el: THREE.Group | null) => {
                if (el) pointRefs.current[point.id] = el;
              }}
              onClick={(e: ThreeEvent<MouseEvent>) => {
                e.stopPropagation();
                onSelectPoint(point.id);
              }}
            >
              {/* Visualize the snap point */}
              <mesh>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial 
                  color={point.color} 
                  emissive={point.color}
                  emissiveIntensity={isSelected ? 0.5 : 0.2}
                />
              </mesh>
              
              {/* Arrow to show direction */}
              <group position={[0, 0, 0.15]}>
                <mesh>
                  <cylinderGeometry args={[0.02, 0.02, 0.3, 8]} />
                  <meshStandardMaterial color={point.color} />
                </mesh>
                <mesh position={[0, 0, 0.2]}>
                  <coneGeometry args={[0.05, 0.1, 8]} />
                  <meshStandardMaterial color={point.color} />
                </mesh>
              </group>
              
              {/* Label */}
              <DreiText
                position={[0, -0.2, 0]}
                color="white"
                fontSize={0.1}
                font="/fonts/Inter-Bold.woff"
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.01}
                outlineColor="#000000"
              >
                {index + 1}
              </DreiText>
            </group>
          </group>
        );
      })}
      
      {/* Transform controls for selected point */}
      {selectedPoint && (
        <TransformControls
          ref={controlRef}
          mode="translate"
          size={0.7}
          showX={true}
          showY={true}
          showZ={true}
          onObjectChange={() => {
            if (selectedPoint && pointRefs.current[selectedPoint]) {
              const pointObj = pointRefs.current[selectedPoint];
              const point = snapPoints.find(p => p.id === selectedPoint);
              if (!point) return;
              
              // Get updated position and rotation
              const newPosition: [number, number, number] = [
                pointObj.position.x,
                pointObj.position.y,
                pointObj.position.z
              ];
              
              const quaternion = pointObj.quaternion;
              const newRotation: [number, number, number, number] = [
                quaternion.x,
                quaternion.y,
                quaternion.z,
                quaternion.w
              ];
              
              // Update the point
              onPointUpdated({
                ...point,
                position: newPosition,
                rotation: newRotation
              });
            }
          }}
        />
      )}
    </group>
  );
};

export default MeshExplorer; 