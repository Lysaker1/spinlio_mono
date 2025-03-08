import React, { useState, useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { TransformControls, Plane, Html } from '@react-three/drei';
import * as THREE from 'three';
import { ThreeEvent } from '@react-three/fiber/dist/declarations/src/core/events';

/**
 * Interface for an attachment point with position, rotation and normal vector
 */
export interface AttachmentPoint {
  id: string;
  position: [number, number, number];
  rotation: [number, number, number, number]; // Quaternion
  normal: [number, number, number];
  color?: string;
}

interface AttachmentPointHelperProps {
  attachmentPoints: AttachmentPoint[];
  onAttachmentPointUpdated: (point: AttachmentPoint) => void;
  selectedPoint: string | null;
  onSelectPoint: (id: string | null) => void;
  modelInfo?: { size: THREE.Vector3, center: THREE.Vector3 } | null;
}

/**
 * Component for visualizing and manipulating attachment points
 */
const AttachmentPointHelper: React.FC<AttachmentPointHelperProps> = ({
  attachmentPoints,
  onAttachmentPointUpdated,
  selectedPoint,
  onSelectPoint,
  modelInfo
}) => {
  const { camera, scene, raycaster } = useThree();
  const pointsRef = useRef<{ [key: string]: THREE.Group }>({});
  const controlsRef = useRef<any>(null);
  
  // Keep track of which transform controls are active
  const [transformMode, setTransformMode] = useState<'translate' | 'rotate' | 'scale'>('translate');
  
  // State for snap functionality
  const [snapEnabled, setSnapEnabled] = useState(false);
  
  // Handle updating an attachment point when transformed
  const handleTransformChange = (id: string) => {
    const pointObj = pointsRef.current[id];
    if (!pointObj) return;
    
    const point = attachmentPoints.find(p => p.id === id);
    if (!point) return;

    // Get the new position
    const newPosition: [number, number, number] = [
      pointObj.position.x,
      pointObj.position.y,
      pointObj.position.z
    ];

    // Get the new rotation as quaternion
    const quaternion = pointObj.quaternion;
    const newRotation: [number, number, number, number] = [
      quaternion.x,
      quaternion.y,
      quaternion.z,
      quaternion.w
    ];

    // Calculate the normal vector (forward direction)
    const forwardVector = new THREE.Vector3(0, 0, 1);
    forwardVector.applyQuaternion(quaternion);
    forwardVector.normalize();
    
    const newNormal: [number, number, number] = [
      forwardVector.x,
      forwardVector.y,
      forwardVector.z
    ];

    // Update the attachment point
    onAttachmentPointUpdated({
      ...point,
      position: newPosition,
      rotation: newRotation,
      normal: newNormal
    });
  };
  
  // Toggle transform mode (translate, rotate, scale)
  const toggleTransformMode = () => {
    if (transformMode === 'translate') setTransformMode('rotate');
    else if (transformMode === 'rotate') setTransformMode('scale');
    else setTransformMode('translate');
  };
  
  // Toggle snap to model feature
  const toggleSnap = () => {
    setSnapEnabled(!snapEnabled);
  };
  
  // Function to snap an attachment point to the closest part of the model
  const snapToModel = (pointId: string) => {
    if (!snapEnabled) return;
    
    const pointObj = pointsRef.current[pointId];
    if (!pointObj) return;
    
    // Create a raycaster to find the closest intersection with the model
    const raycaster = new THREE.Raycaster();
    
    // Cast rays in multiple directions from the point for better coverage
    const directions = [
      new THREE.Vector3(1, 0, 0),
      new THREE.Vector3(-1, 0, 0),
      new THREE.Vector3(0, 1, 0),
      new THREE.Vector3(0, -1, 0),
      new THREE.Vector3(0, 0, 1),
      new THREE.Vector3(0, 0, -1),
      // Add diagonal rays for better coverage
      new THREE.Vector3(1, 1, 1).normalize(),
      new THREE.Vector3(-1, 1, 1).normalize(),
      new THREE.Vector3(1, -1, 1).normalize(),
      new THREE.Vector3(1, 1, -1).normalize(),
      new THREE.Vector3(-1, -1, 1).normalize(),
      new THREE.Vector3(-1, 1, -1).normalize(),
      new THREE.Vector3(1, -1, -1).normalize(),
      new THREE.Vector3(-1, -1, -1).normalize(),
    ];
    
    let closestIntersection: any = null;
    let closestDistance = Infinity;
    let bestDirection = new THREE.Vector3();
    
    // Find all meshes in the scene that aren't attachment points
    const meshes: THREE.Mesh[] = [];
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh && 
          !object.userData.isAttachmentPoint && 
          object.visible &&
          // Skip helper objects and debug meshes
          !object.name.includes('helper') && 
          !object.name.includes('debug') &&
          !object.name.includes('grid')) {
        meshes.push(object);
      }
    });
    
    // If no meshes found, show a message
    if (meshes.length === 0) {
      console.warn("No meshes found to snap to!");
      return;
    }
    
    console.log(`Found ${meshes.length} meshes to test for snapping`);
    
    // Test each direction
    directions.forEach(direction => {
      raycaster.set(pointObj.position, direction.normalize());
      
      try {
        const intersects = raycaster.intersectObjects(meshes);
        
        if (intersects.length > 0) {
          const intersection = intersects[0];
          if (intersection.distance < closestDistance) {
            closestDistance = intersection.distance;
            closestIntersection = intersection;
            bestDirection.copy(direction).multiplyScalar(-1); // Point normal away from the surface
          }
        }
      } catch (error) {
        console.error("Error during raycasting:", error);
      }
    });
    
    // If we found an intersection, update the position and normal
    if (closestIntersection && closestDistance < 20) { // Increased distance threshold
      const point = attachmentPoints.find(p => p.id === pointId);
      if (!point) return;
      
      try {
        // Move slightly off the surface to avoid z-fighting
        const snappedPosition = new THREE.Vector3().copy(closestIntersection.point);
        if (closestIntersection.face && closestIntersection.face.normal) {
          // Use the face normal if available
          const normal = new THREE.Vector3().copy(closestIntersection.face.normal);
          // Transform normal to world space
          normal.transformDirection(closestIntersection.object.matrixWorld);
          // Add small offset to prevent z-fighting
          snappedPosition.add(normal.multiplyScalar(0.02));
          bestDirection.copy(normal);
        } else {
          // Fallback - move away slightly in best direction
          snappedPosition.add(bestDirection.clone().multiplyScalar(0.02));
        }
        
        // Create a quaternion that orients the attachment point normal to the surface
        const quaternion = new THREE.Quaternion();
        const upVector = new THREE.Vector3(0, 1, 0);
        quaternion.setFromUnitVectors(upVector, bestDirection);
        
        // Update point
        const newPosition: [number, number, number] = [
          snappedPosition.x,
          snappedPosition.y,
          snappedPosition.z
        ];
        
        const newRotation: [number, number, number, number] = [
          quaternion.x,
          quaternion.y,
          quaternion.z,
          quaternion.w
        ];
        
        const newNormal: [number, number, number] = [
          bestDirection.x,
          bestDirection.y,
          bestDirection.z
        ];
        
        // Update position in the ref
        pointObj.position.copy(snappedPosition);
        pointObj.quaternion.copy(quaternion);
        
        // Update the attachment point
        onAttachmentPointUpdated({
          ...point,
          position: newPosition,
          rotation: newRotation,
          normal: newNormal
        });
        
        console.log('Snapped point to model surface:', {
          position: newPosition,
          normal: newNormal
        });
      } catch (error) {
        console.error("Error during snapping:", error);
      }
    } else {
      console.warn("No close intersection found for snapping");
    }
  };
  
  // Create and update refs for all points
  useEffect(() => {
    // Create refs for any new points
    attachmentPoints.forEach(point => {
      if (!pointsRef.current[point.id]) {
        const newGroup = new THREE.Group();
        newGroup.position.set(...point.position);
        newGroup.quaternion.set(...point.rotation);
        // Mark this group for identification
        newGroup.userData.isAttachmentPoint = true;
        pointsRef.current[point.id] = newGroup;
      }
    });
    
    // Update positions for all points
    attachmentPoints.forEach(point => {
      const pointObj = pointsRef.current[point.id];
      if (pointObj) {
        pointObj.position.set(...point.position);
        pointObj.quaternion.set(...point.rotation);
      }
    });
    
    // If snap is enabled, try to snap any newly selected point
    if (snapEnabled && selectedPoint) {
      snapToModel(selectedPoint);
    }
    
    // Log for debugging
    console.log("AttachmentPoints updated:", attachmentPoints.length);
  }, [attachmentPoints, snapEnabled, selectedPoint]);
  
  // Handle click events on the scene to deselect
  useEffect(() => {
    const handleSceneClick = (event: MouseEvent) => {
      // Only deselect if we click outside of any attachment point
      // This is simplified - a more complex solution would check if we clicked on a specific plane
      if (!event.defaultPrevented) {
        // Only deselect if this was a canvas click but not on a point
        const isTransformControlClick = (event.target as HTMLElement)?.closest('.transform-controls');
        if (!isTransformControlClick) {
          // Don't deselect if we're interacting with transform controls
          // onSelectPoint(null);
        }
      }
    };
    
    window.addEventListener('click', handleSceneClick);
    return () => {
      window.removeEventListener('click', handleSceneClick);
    };
  }, [onSelectPoint]);
  
  // Update TransformControls mode when it changes
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.setMode(transformMode);
    }
  }, [transformMode]);
  
  // Effect to handle snap when selectedPoint changes
  useEffect(() => {
    if (snapEnabled && selectedPoint) {
      snapToModel(selectedPoint);
    }
  }, [selectedPoint, snapEnabled]);
  
  // Prevent orbit controls from interfering with transform controls
  useEffect(() => {
    if (controlsRef.current) {
      const controls = controlsRef.current;
      
      const onDragStart = () => {
        if (scene.userData.controls) {
          scene.userData.controls.enabled = false;
        }
      };
      
      const onDragEnd = () => {
        if (scene.userData.controls) {
          scene.userData.controls.enabled = true;
        }
      };
      
      controls.addEventListener('dragging-changed', (event: { value: boolean }) => {
        if (event.value) onDragStart();
        else onDragEnd();
      });
      
      return () => {
        controls.removeEventListener('dragging-changed', (event: { value: boolean }) => {
          if (event.value) onDragStart();
          else onDragEnd();
        });
      };
    }
  }, [scene.userData.controls]);

  return (
    <group>
      {/* Render each attachment point */}
      {attachmentPoints.map((point) => {
        const isSelected = selectedPoint === point.id;
        const color = point.color || '#00a8ff';
        
        return (
          <group key={point.id}>
            {/* Attachment point representation */}
            <group 
              position={new THREE.Vector3(...point.position)}
              quaternion={new THREE.Quaternion(...point.rotation)}
              onClick={(e: ThreeEvent<MouseEvent>) => {
                e.stopPropagation();
                onSelectPoint(point.id);
              }}
              ref={(el: THREE.Group | null) => {
                if (el) {
                  // Mark this group as an attachment point
                  el.userData.isAttachmentPoint = true;
                  pointsRef.current[point.id] = el;
                }
              }}
            >
              {/* Visualize the attachment plane */}
              <Plane 
                args={[0.5, 0.5]} 
                onClick={(e: ThreeEvent<MouseEvent>) => {
                  e.stopPropagation();
                  onSelectPoint(point.id);
                }}
              >
                <meshBasicMaterial 
                  color={isSelected ? '#ff9900' : color} 
                  side={THREE.DoubleSide} 
                  transparent 
                  opacity={isSelected ? 0.9 : 0.7} 
                />
              </Plane>
              
              {/* Visualize the normal vector */}
              <group position={[0, 0, 0.1]}>
                <mesh>
                  <cylinderGeometry args={[0.02, 0.02, 0.25, 8]} />
                  <meshBasicMaterial color={isSelected ? '#ff0000' : '#cc0000'} />
                </mesh>
                <mesh position={[0, 0, 0.15]}>
                  <coneGeometry args={[0.04, 0.1, 8]} />
                  <meshBasicMaterial color={isSelected ? '#ff0000' : '#cc0000'} />
                </mesh>
              </group>
              
              {/* Label to identify the point */}
              <Html position={[0, -0.3, 0]} center distanceFactor={10}>
                <div style={{ 
                  background: isSelected ? 'rgba(255,150,0,0.8)' : 'rgba(0,150,255,0.6)', 
                  padding: '3px 6px', 
                  borderRadius: '4px',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '12px',
                  pointerEvents: 'none'
                }}>
                  {attachmentPoints.indexOf(point) + 1}
                </div>
              </Html>
            </group>
            
            {/* Add transform controls when selected */}
            {isSelected && (
              <>
                <TransformControls
                  ref={controlsRef}
                  object={pointsRef.current[point.id]}
                  mode={transformMode}
                  size={0.7}
                  onObjectChange={() => handleTransformChange(point.id)}
                  onMouseUp={() => handleTransformChange(point.id)}
                />
                
                <Html position={[0, 0.8, 0]} center distanceFactor={10}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <button 
                      onClick={toggleTransformMode}
                      style={{
                        background: '#333',
                        color: 'white',
                        border: 'none',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '12px'
                      }}
                    >
                      Mode: {transformMode}
                    </button>
                    
                    <button 
                      onClick={toggleSnap}
                      style={{
                        background: snapEnabled ? '#007bff' : '#333',
                        color: 'white',
                        border: 'none',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '12px'
                      }}
                    >
                      {snapEnabled ? 'Snap: ON' : 'Snap: OFF'}
                    </button>
                    
                    {snapEnabled && (
                      <button 
                        onClick={() => snapToModel(point.id)}
                        style={{
                          background: '#28a745',
                          color: 'white',
                          border: 'none',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '12px'
                        }}
                      >
                        Snap Now
                      </button>
                    )}
                  </div>
                </Html>
              </>
            )}
          </group>
        );
      })}
    </group>
  );
};

export default AttachmentPointHelper; 