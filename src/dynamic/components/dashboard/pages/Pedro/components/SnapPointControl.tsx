import React, { useState, useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { TransformControls, Html, Text as DreiText } from '@react-three/drei';
import * as THREE from 'three';
import { ThreeEvent } from '@react-three/fiber/dist/declarations/src/core/events';

interface MeshData {
  id: string;
  name: string;
  position: [number, number, number];
}

interface SnapPoint {
  id: string;
  position: [number, number, number];
  rotation: [number, number, number, number];
  meshId?: string;
  color: string;
}

interface SnapPointControlProps {
  meshes: MeshData[];
  snapPoints: SnapPoint[];
  selectedPointId: string | null;
  selectedMeshId: string | null;
  addMode: 'manual' | 'auto' | 'mesh';
  onAddPoint: (point: SnapPoint) => void;
  onUpdatePoint: (point: SnapPoint) => void;
  onSelectPoint: (id: string | null) => void;
}

/**
 * Component that handles the UI for creating and manipulating snap points
 */
const SnapPointControl: React.FC<SnapPointControlProps> = ({
  meshes,
  snapPoints,
  selectedPointId,
  selectedMeshId,
  addMode,
  onAddPoint,
  onUpdatePoint,
  onSelectPoint
}) => {
  const { camera, raycaster, scene } = useThree();
  const [isPlacingPoint, setIsPlacingPoint] = useState(false);
  const transformRef = useRef<any>(null);
  const controlsEnabled = useRef(true);
  
  // Handle manual snap point placement mode
  useEffect(() => {
    if (addMode !== 'manual' || !isPlacingPoint) return;
    
    const handleClick = (event: MouseEvent) => {
      if (!isPlacingPoint || !controlsEnabled.current) return;
      
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
        const intersection = intersects[0];
        const position: [number, number, number] = [
          intersection.point.x,
          intersection.point.y,
          intersection.point.z
        ];
        
        // For mesh intersections, get the mesh ID
        let meshId: string | undefined = undefined;
        if (intersection.object instanceof THREE.Mesh) {
          // Find the mesh in our list by comparing positions
          const worldPos = new THREE.Vector3();
          intersection.object.getWorldPosition(worldPos);
          
          const matchingMesh = meshes.find(mesh => {
            const distance = Math.sqrt(
              Math.pow(mesh.position[0] - worldPos.x, 2) +
              Math.pow(mesh.position[1] - worldPos.y, 2) +
              Math.pow(mesh.position[2] - worldPos.z, 2)
            );
            return distance < 0.1; // Small threshold for position matching
          });
          
          if (matchingMesh) {
            meshId = matchingMesh.id;
          }
        }
        
        // Create and add the new snap point
        const newPointId = `snap-${Date.now()}`;
        const newPoint: SnapPoint = {
          id: newPointId,
          position,
          rotation: [0, 0, 0, 1],
          meshId,
          color: getRandomColor()
        };
        
        onAddPoint(newPoint);
        onSelectPoint(newPointId);
        setIsPlacingPoint(false);
        
        console.log(`Added snap point at (${position[0]}, ${position[1]}, ${position[2]})${meshId ? ` attached to mesh ${meshId}` : ''}`);
      }
    };
    
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isPlacingPoint, addMode, camera, raycaster, scene, meshes, onAddPoint, onSelectPoint]);
  
  // Automatic detection of potential snap points based on mesh geometries
  const handleAutoDetect = () => {
    if (meshes.length === 0) return;
    
    console.log('Auto-detecting attachment points...');
    const detectedPoints: SnapPoint[] = [];
    
    // 1. Add center points for all major meshes
    meshes.forEach(mesh => {
      const pointId = `snap-auto-${mesh.id}-center`;
      detectedPoints.push({
        id: pointId,
        position: [...mesh.position],
        rotation: [0, 0, 0, 1],
        meshId: mesh.id,
        color: '#00ff00'
      });
    });
    
    // 2. Find extremities (highest/lowest/leftmost/rightmost points)
    // This would require more complex geometry analysis
    // For this example, we'll add points to both ends of each axis for the main mesh
    if (meshes.length > 0) {
      // Find the main mesh (typically the largest or first one)
      const mainMesh = meshes[0];
      
      // Add points along each primary axis at some distance
      const axisDistance = 1.0; // Distance from center
      
      // X-axis points
      detectedPoints.push({
        id: `snap-auto-x-pos`,
        position: [mainMesh.position[0] + axisDistance, mainMesh.position[1], mainMesh.position[2]],
        rotation: [0, 0, 0, 1],
        color: '#ff3300'
      });
      
      detectedPoints.push({
        id: `snap-auto-x-neg`,
        position: [mainMesh.position[0] - axisDistance, mainMesh.position[1], mainMesh.position[2]],
        rotation: [0, 0, 0, 1],
        color: '#ff3300'
      });
      
      // Y-axis points
      detectedPoints.push({
        id: `snap-auto-y-pos`,
        position: [mainMesh.position[0], mainMesh.position[1] + axisDistance, mainMesh.position[2]],
        rotation: [0, 0, 0, 1],
        color: '#33ff00'
      });
      
      detectedPoints.push({
        id: `snap-auto-y-neg`,
        position: [mainMesh.position[0], mainMesh.position[1] - axisDistance, mainMesh.position[2]],
        rotation: [0, 0, 0, 1],
        color: '#33ff00'
      });
      
      // Z-axis points
      detectedPoints.push({
        id: `snap-auto-z-pos`,
        position: [mainMesh.position[0], mainMesh.position[1], mainMesh.position[2] + axisDistance],
        rotation: [0, 0, 0, 1],
        color: '#0033ff'
      });
      
      detectedPoints.push({
        id: `snap-auto-z-neg`,
        position: [mainMesh.position[0], mainMesh.position[1], mainMesh.position[2] - axisDistance],
        rotation: [0, 0, 0, 1],
        color: '#0033ff'
      });
    }
    
    // Add all auto-detected points
    detectedPoints.forEach(point => {
      onAddPoint(point);
    });
    
    console.log(`Auto-detected and added ${detectedPoints.length} snap points`);
  };
  
  // Add a snap point at the selected mesh's position
  const handleAddToMesh = () => {
    if (!selectedMeshId) return;
    
    const mesh = meshes.find(m => m.id === selectedMeshId);
    if (!mesh) return;
    
    const newPointId = `snap-${Date.now()}`;
    const newPoint: SnapPoint = {
      id: newPointId,
      position: [...mesh.position],
      rotation: [0, 0, 0, 1],
      meshId: selectedMeshId,
      color: getRandomColor()
    };
    
    onAddPoint(newPoint);
    onSelectPoint(newPointId);
    console.log(`Added snap point at (${mesh.position[0]}, ${mesh.position[1]}, ${mesh.position[2]}) attached to mesh ${selectedMeshId}`);
  };
  
  // Handle transform control updates
  const handleControlChange = () => {
    if (!selectedPointId || !transformRef.current) return;
    
    const selectedPoint = snapPoints.find(p => p.id === selectedPointId);
    if (!selectedPoint) return;
    
    const transformObject = transformRef.current.object;
    if (!transformObject) return;
    
    // Get updated position and rotation
    const newPosition: [number, number, number] = [
      transformObject.position.x,
      transformObject.position.y,
      transformObject.position.z
    ];
    
    const quaternion = transformObject.quaternion;
    const newRotation: [number, number, number, number] = [
      quaternion.x,
      quaternion.y,
      quaternion.z,
      quaternion.w
    ];
    
    // Update the point
    onUpdatePoint({
      ...selectedPoint,
      position: newPosition,
      rotation: newRotation
    });
  };
  
  return (
    <>
      {/* Controls for each add mode */}
      {addMode === 'manual' && (
        <group
          position={[0, -2, 0]}
          onClick={() => setIsPlacingPoint(true)}
        >
          <mesh>
            <planeGeometry args={[2, 0.5]} />
            <meshBasicMaterial color={isPlacingPoint ? "#3b82f680" : "#3b82f6"} />
          </mesh>
          <DreiText
            position={[0, 0, 0.01]}
            color="white"
            fontSize={0.12}
            anchorX="center"
            anchorY="middle"
          >
            {isPlacingPoint ? 'Click to place point' : 'Start placing point'}
          </DreiText>
        </group>
      )}
      
      {addMode === 'auto' && (
        <group
          position={[0, -2, 0]}
          onClick={handleAutoDetect}
        >
          <mesh>
            <planeGeometry args={[2.5, 0.5]} />
            <meshBasicMaterial color="#10b981" />
          </mesh>
          <DreiText
            position={[0, 0, 0.01]}
            color="white"
            fontSize={0.12}
            anchorX="center"
            anchorY="middle"
          >
            Auto-detect attachment points
          </DreiText>
        </group>
      )}
      
      {addMode === 'mesh' && selectedMeshId && (
        <group
          position={[0, -2, 0]}
          onClick={handleAddToMesh}
        >
          <mesh>
            <planeGeometry args={[2, 0.5]} />
            <meshBasicMaterial color="#8b5cf6" />
          </mesh>
          <DreiText
            position={[0, 0, 0.01]}
            color="white"
            fontSize={0.12}
            anchorX="center"
            anchorY="middle"
          >
            Add to selected mesh
          </DreiText>
        </group>
      )}
      
      {/* Transform controls for selected snap point */}
      {selectedPointId && (
        <group>
          {snapPoints.map(point => {
            if (point.id === selectedPointId) {
              return (
                <group 
                  key={point.id}
                  position={new THREE.Vector3(...point.position)}
                  quaternion={new THREE.Quaternion(...point.rotation)}
                >
                  <TransformControls
                    ref={transformRef}
                    mode="translate"
                    showX={true}
                    showY={true}
                    showZ={true}
                    size={0.5}
                    object={new THREE.Object3D()} // Just need a dummy object
                    onMouseDown={() => { controlsEnabled.current = false; }}
                    onMouseUp={() => { controlsEnabled.current = true; }}
                    onObjectChange={handleControlChange}
                  />
                </group>
              );
            }
            return null;
          })}
        </group>
      )}
    </>
  );
};

// Helper function to generate random colors
function getRandomColor(): string {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default SnapPointControl; 