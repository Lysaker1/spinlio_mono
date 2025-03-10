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
  }, [attachmentPoints]);
  
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
              onClick={(e: any) => {
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