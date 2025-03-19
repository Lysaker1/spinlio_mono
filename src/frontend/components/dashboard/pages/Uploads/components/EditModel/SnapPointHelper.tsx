import React, { useState, useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { TransformControls, Plane, Html } from '@react-three/drei';
import * as THREE from 'three';
import { AttachmentPoint } from '../../../../../../types/attachment-points';

interface SnapPointHelperProps {
  attachmentPoints: AttachmentPoint[];
  onAttachmentPointUpdated: (point: AttachmentPoint) => void;
  selectedPoint: string | null;
  onSelectPoint: (id: string | null) => void;
}

/**
 * Component for visualizing and manipulating attachment points in 3D space
 * Simplified version of Pedro's AttachmentPointHelper
 */
const SnapPointHelper: React.FC<SnapPointHelperProps> = ({
  attachmentPoints,
  onAttachmentPointUpdated,
  selectedPoint,
  onSelectPoint
}) => {
  const { scene } = useThree();
  const pointsRef = useRef<{ [key: string]: THREE.Group }>({});
  const controlsRef = useRef<any>(null);
  
  // Keep track of which transform controls are active
  const [transformMode, setTransformMode] = useState<'translate' | 'rotate'>('translate');
  // Track whether TransformControls is active to prevent orbit controls conflicts
  const [isTransforming, setIsTransforming] = useState(false);
  
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
  
  // Toggle transform mode between translate and rotate
  const toggleTransformMode = () => {
    setTransformMode(prev => prev === 'translate' ? 'rotate' : 'translate');
  };
  
  // Create and update refs for all points
  useEffect(() => {
    console.log("SnapPointHelper: Updating attachment points, count:", attachmentPoints.length);
    
    // First clean up any orphaned objects from the scene
    Object.entries(pointsRef.current).forEach(([id, group]) => {
      if (!attachmentPoints.some(p => p.id === id)) {
        console.log(`Removing orphaned point object: ${id}`);
        scene.remove(group);
        delete pointsRef.current[id];
      }
    });
    
    // Create refs for any new points
    attachmentPoints.forEach(point => {
      if (!pointsRef.current[point.id]) {
        console.log(`Creating new point object: ${point.id}`);
        const newGroup = new THREE.Group();
        newGroup.position.set(...point.position);
        newGroup.quaternion.set(...point.rotation);
        // Mark this group for identification
        newGroup.userData.isAttachmentPoint = true;
        newGroup.userData.id = point.id;
        pointsRef.current[point.id] = newGroup;
        
        // IMPORTANT: Add to scene to ensure it's part of the scene graph
        // This fixes the "TransformControls: The attached 3D object must be a part of the scene graph" error
        scene.add(newGroup);
      }
    });
    
    // Update positions for all points
    attachmentPoints.forEach(point => {
      const pointObj = pointsRef.current[point.id];
      if (pointObj) {
        // Only update if the position actually changed, to prevent unnecessary re-renders
        if (!pointObj.position.equals(new THREE.Vector3(...point.position))) {
          pointObj.position.set(...point.position);
        }
        
        // Only update if the rotation changed
        const currentQuat = pointObj.quaternion;
        const newQuat = new THREE.Quaternion(...point.rotation);
        if (!currentQuat.equals(newQuat)) {
          pointObj.quaternion.set(...point.rotation);
        }
      }
    });
    
    // Cleanup function - remove any groups that are no longer needed
    return () => {
      // Get current point IDs
      const currentIds = new Set(attachmentPoints.map(p => p.id));
      
      // Remove any groups that don't correspond to current points
      Object.entries(pointsRef.current).forEach(([id, group]) => {
        if (!currentIds.has(id)) {
          scene.remove(group);
          delete pointsRef.current[id];
        }
      });
    };
  }, [attachmentPoints, scene]);
  
  // Prevent orbit controls from interfering with transform controls
  useEffect(() => {
    if (!controlsRef.current) return;
    
    const controls = controlsRef.current;
    
    // Use a standard approach for orbit controls disabling
    const onDragStart = () => {
      setIsTransforming(true);
      // Disable orbit controls
      if (scene.userData.controls) {
        scene.userData.controls.enabled = false;
      }
      
      // Also try with named controls
      if (scene.userData.orbitControls) {
        scene.userData.orbitControls.enabled = false;
      }
    };
    
    const onDragEnd = () => {
      setIsTransforming(false);
      // Re-enable orbit controls
      if (scene.userData.controls) {
        scene.userData.controls.enabled = true;
      }
      
      // Also try with named controls
      if (scene.userData.orbitControls) {
        scene.userData.orbitControls.enabled = true;
      }
    };
    
    // Add event listeners for TransformControls dragging changes
    controls.addEventListener('dragging-changed', (event: { value: boolean }) => {
      if (event.value) onDragStart();
      else onDragEnd();
    });
    
    // Add event listener for mouseDown to update scene.userData.transformActive
    controls.addEventListener('mouseDown', () => {
      scene.userData.transformActive = true;
    });
    
    // Add event listener for mouseUp to update scene.userData.transformActive
    controls.addEventListener('mouseUp', () => {
      scene.userData.transformActive = false;
    });
    
    // Clean up event listeners when this component unmounts or controlsRef changes
    return () => {
      if (controls) {
        controls.removeEventListener('dragging-changed', (event: { value: boolean }) => {
          if (event.value) onDragStart();
          else onDragEnd();
        });
        controls.removeEventListener('mouseDown', () => {
          scene.userData.transformActive = true;
        });
        controls.removeEventListener('mouseUp', () => {
          scene.userData.transformActive = false;
        });
      }
    };
  }, [scene.userData, controlsRef]);

  // Effect to handle component unmount cleanup
  useEffect(() => {
    // Return cleanup function for component unmount
    return () => {
      console.log("SnapPointHelper unmounting, cleaning up objects");
      
      // Clean up all point objects when component unmounts
      Object.values(pointsRef.current).forEach(group => {
        scene.remove(group);
      });
      pointsRef.current = {};
      
      // Ensure orbit controls are re-enabled
      if (scene.userData.controls) {
        scene.userData.controls.enabled = true;
      }
      if (scene.userData.orbitControls) {
        scene.userData.orbitControls.enabled = true;
      }
      
      // Clear transform active flag
      scene.userData.transformActive = false;
    };
  }, [scene]);

  return (
    <group>
      {/* Render each attachment point */}
      {attachmentPoints.map((point) => {
        const isSelected = selectedPoint === point.id;
        const color = point.color || '#00a8ff';
        
        return (
          <group key={point.id}>
            {/* Attachment point representation - visual only, actual transform happens on the reference object */}
            <group 
              position={new THREE.Vector3(...point.position)}
              quaternion={new THREE.Quaternion(...point.rotation)}
              onClick={(e: any) => {
                e.stopPropagation();
                onSelectPoint(point.id);
              }}
            >
              {/* Visualize the attachment plane */}
              <Plane 
                args={[0.5, 0.5]} 
                onClick={(e: any) => {
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
                </Html>
              </>
            )}
          </group>
        );
      })}
    </group>
  );
};

export default SnapPointHelper; 