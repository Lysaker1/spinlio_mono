import React, { useState, useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { TransformControls, Text as DreiText } from '@react-three/drei';
import * as THREE from 'three';
import { ThreeEvent } from '@react-three/fiber/dist/declarations/src/core/events';
import { MeshData, SnapPoint } from './SnapPointControl';
import { Html } from '@react-three/drei';

export interface SnapPointControls3DProps {
  meshes: MeshData[];
  snapPoints: SnapPoint[];
  selectedPointId: string | null;
  addMode: 'manual' | 'automatic' | 'mesh';
  isPlacingPoint: boolean;
  onAddPoint: (point: SnapPoint) => void;
  onUpdatePoint: (point: SnapPoint) => void;
  onSelectPoint: (id: string | null) => void;
  onPointPlaced: () => void;
}

/**
 * 3D component that handles the rendering and manipulation of snap points inside the Canvas
 * This component must be used inside a React Three Fiber Canvas
 */
const SnapPointControls3D: React.FC<SnapPointControls3DProps> = ({
  meshes,
  snapPoints,
  selectedPointId,
  addMode,
  isPlacingPoint,
  onAddPoint,
  onUpdatePoint,
  onSelectPoint,
  onPointPlaced
}) => {
  const { camera, raycaster, scene } = useThree();
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
        onPointPlaced(); // Notify parent that point has been placed
        
        console.log(`Added snap point at (${position[0]}, ${position[1]}, ${position[2]})${meshId ? ` attached to mesh ${meshId}` : ''}`);
      }
    };
    
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isPlacingPoint, addMode, camera, raycaster, scene, meshes, onAddPoint, onSelectPoint, onPointPlaced]);
  
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
      {/* Helper UI text when placing points */}
      {isPlacingPoint && (
        <group position={[0, 2, 0]}>
          <DreiText
            color="white"
            fontSize={0.15}
            anchorX="center"
            anchorY="middle"
            backgroundColor="#00000066"
            padding={0.1}
          >
            Click on the model to place a point
          </DreiText>
        </group>
      )}
      
      {/* Transform controls for selected snap point */}
      {selectedPointId && (
        <group>
          {snapPoints.map(point => {
            if (point.id === selectedPointId) {
              // Don't render TransformControls here - AttachmentPointHelper will handle this
              // This prevents conflicts with multiple TransformControls trying to control the same object
              return null;
            }
            
            return (
              <group 
                key={point.id}
                position={new THREE.Vector3(...point.position)}
                quaternion={new THREE.Quaternion(...point.rotation)}
              >
                <mesh 
                  onClick={(e: ThreeEvent<MouseEvent>) => {
                    e.stopPropagation();
                    onSelectPoint(point.id);
                  }}
                >
                  <sphereGeometry args={[0.25, 16, 16]} />
                  <meshStandardMaterial color={point.color} transparent={true} opacity={0.7} />
                </mesh>
                
                <Html position={[0, 0.5, 0]} center>
                  <div style={{ 
                    background: 'rgba(0, 0, 0, 0.7)', 
                    color: 'white', 
                    padding: '4px 8px', 
                    borderRadius: '4px',
                    fontSize: '12px',
                    transform: 'translate(-50%, -100%)'
                  }}>
                    {`Point ${point.id.slice(0, 6)}`}
                  </div>
                </Html>
              </group>
            );
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

export default SnapPointControls3D; 