import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Plane, Text as DreiText, Html } from '@react-three/drei';
import * as THREE from 'three';
import { ThreeEvent } from '@react-three/fiber/dist/declarations/src/core/events';
import { AttachmentPointType } from '../constants/SnapPointConfigurations';

/** Set to true only if you need to debug transform control issues */
const DEV_MODE = false;

function logDebug(...args: any[]) {
  if (DEV_MODE) console.log('[AttachmentPointHelper]', ...args);
}

/**
 * Interface for an attachment point with position, rotation and normal vector
 */
export interface AttachmentPoint {
  id: string;
  position: [number, number, number];
  rotation: [number, number, number, number]; // Quaternion
  normal: [number, number, number];
  color: string; // Make color required
  meshId?: string; // Add optional meshId
  name?: string; // Add name property
  auto?: boolean; // Add auto property
  size?: number; // Add size property
  type?: AttachmentPointType; // Add type property
  radius?: number; // Add radius property
  width?: number; // Add width property
  height?: number; // Add height property
  depth?: number; // Add depth property for tube attachments
  optionId?: string; // Add optionId to track which component option this point belongs to
}

interface AttachmentPointHelperProps {
  point: AttachmentPoint;
  selected: boolean;
  onSelect: () => void;
  onUpdate: (updatedPoint: AttachmentPoint) => void;
  onDelete: () => void;
  modelInfo?: { size: THREE.Vector3, center: THREE.Vector3 } | null;
  sceneLocked?: boolean; // Add sceneLocked prop
  lockedAxes?: {x: boolean, y: boolean, z: boolean}; // Add lockedAxes prop
}

// Add this new component to render different attachment point types
interface AttachmentGeometryProps {
  type?: AttachmentPointType;
  color: string;
  radius?: number;
  width?: number;
  height?: number;
  depth?: number;
  selected: boolean;
}

// Custom dragging hooks to replace TransformControls
function useDraggable(props: {
  groupRef: React.RefObject<THREE.Group>,
  lockedAxes?: {x: boolean, y: boolean, z: boolean},
  enabled: boolean,
  onDragStart?: () => void,
  onDrag?: (position: THREE.Vector3) => void,
  onDragEnd?: (position: THREE.Vector3) => void
}) {
  const { groupRef, lockedAxes = { x: false, y: false, z: false }, enabled, onDragStart, onDrag, onDragEnd } = props;
  const { camera, gl } = useThree();
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPosition = useRef(new THREE.Vector3());
  const dragPlane = useRef(new THREE.Plane());
  const intersection = useRef(new THREE.Vector3());
  
  // Set up the drag plane
  useEffect(() => {
    if (!groupRef.current) return;
    
    // Create a plane perpendicular to the camera direction, passing through the object
    const position = new THREE.Vector3();
    groupRef.current.getWorldPosition(position);
    const normal = new THREE.Vector3();
    camera.getWorldDirection(normal);
    dragPlane.current.setFromNormalAndCoplanarPoint(normal.negate(), position);
  }, [camera, groupRef]);
  
  // Handle pointer down
  const handlePointerDown = useCallback((e: ThreeEvent<PointerEvent>) => {
    if (!enabled || !groupRef.current) return;
    
    // Prevent event from propagating to other objects
    e.stopPropagation();
    
    // Start dragging
    setIsDragging(true);
    
    // Store the initial position
    groupRef.current.getWorldPosition(dragStartPosition.current);
    
    // Set the drag plane
    const position = new THREE.Vector3();
    groupRef.current.getWorldPosition(position);
    const normal = new THREE.Vector3();
    camera.getWorldDirection(normal);
    dragPlane.current.setFromNormalAndCoplanarPoint(normal.negate(), position);
    
    // Capture pointer
    gl.domElement.setPointerCapture(e.pointerId);
    
    // Call onDragStart
    if (onDragStart) onDragStart();
  }, [enabled, groupRef, camera, gl, onDragStart]);
  
  // Handle pointer move
  const handlePointerMove = useCallback((e: ThreeEvent<PointerEvent>) => {
    if (!isDragging || !groupRef.current) return;
    
    // Prevent default behavior
    e.stopPropagation();
    
    // Convert screen coordinates to normalized device coordinates
    const mouse = new THREE.Vector2(
      (e.clientX / window.innerWidth) * 2 - 1,
      -(e.clientY / window.innerHeight) * 2 + 1
    );
    
    // Create a ray from the camera
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    
    // Find intersection with the drag plane
    raycaster.ray.intersectPlane(dragPlane.current, intersection.current);
    
    // Calculate new position with locked axes
    const newPosition = new THREE.Vector3();
    groupRef.current.getWorldPosition(newPosition);
    
    if (!lockedAxes.x) newPosition.x = intersection.current.x;
    if (!lockedAxes.y) newPosition.y = intersection.current.y;
    if (!lockedAxes.z) newPosition.z = intersection.current.z;
    
    // Update position
    groupRef.current.position.copy(newPosition);
    
    // Call onDrag
    if (onDrag) onDrag(newPosition);
  }, [isDragging, groupRef, camera, lockedAxes, onDrag]);
  
  // Handle pointer up
  const handlePointerUp = useCallback((e: ThreeEvent<PointerEvent>) => {
    if (!isDragging || !groupRef.current) return;
    
    // Stop dragging
    setIsDragging(false);
    
    // Release pointer capture
    gl.domElement.releasePointerCapture(e.pointerId);
    
    // Get final position
    const finalPosition = new THREE.Vector3();
    groupRef.current.getWorldPosition(finalPosition);
    
    // Call onDragEnd
    if (onDragEnd) onDragEnd(finalPosition);
  }, [isDragging, groupRef, gl, onDragEnd]);
  
  // Return event handlers
  return {
    onPointerDown: handlePointerDown,
    onPointerMove: handlePointerMove,
    onPointerUp: handlePointerUp,
    isDragging
  };
}

const AttachmentGeometry: React.FC<AttachmentGeometryProps> = ({
  type = AttachmentPointType.STANDARD,
  color,
  radius = 0.25,
  width = 0.5, 
  height = 0.5,
  depth = 0.5,
  selected
}) => {
  // Use minimum depth to ensure visibility
  const effectiveDepth = Math.max(depth || height, 0.5);
  const effectiveRadius = Math.max(radius, 0.1);
  
  // Only log in DEV_MODE (using the flag from parent component)
  useEffect(() => {
    if (!DEV_MODE) return;
    
    logDebug(`Rendering attachment geometry of type: ${type}`);
    logDebug(`Is TUBE_OUTER? ${type === AttachmentPointType.TUBE_OUTER}`);
    logDebug(`Parameters - radius: ${radius}, depth: ${depth}, width: ${width}, height: ${height}`);
    logDebug(`Effective values - radius: ${effectiveRadius}, depth: ${effectiveDepth}`);
  }, [type, radius, depth, width, height, effectiveRadius, effectiveDepth]);

  // Determine what geometry to use based on type
  switch (type) {
    case AttachmentPointType.TUBE_OUTER:
    case 'tube_outer': // Also check for string value
      // Tube grip uses a hollow cylinder that wraps around the handlebar
      return (
        <group>
          {/* Primary cylinder - positioned exactly at the center point */}
          <mesh>
            <cylinderGeometry 
              args={[effectiveRadius, effectiveRadius, effectiveDepth, 32, 1, true]} 
            />
            <meshStandardMaterial 
              color={color} 
              transparent={true} 
              opacity={selected ? 0.8 : 0.6}
              side={THREE.DoubleSide}
              wireframe={selected}
            />
          </mesh>
          
          {/* End caps for better visibility */}
          <mesh position={[0, effectiveDepth/2, 0]} rotation={[Math.PI/2, 0, 0]}>
            <ringGeometry args={[effectiveRadius * 0.7, effectiveRadius, 32]} />
            <meshStandardMaterial 
              color={color} 
              transparent={true} 
              opacity={0.7} 
              side={THREE.DoubleSide} 
            />
          </mesh>
          <mesh position={[0, -effectiveDepth/2, 0]} rotation={[Math.PI/2, 0, 0]}>
            <ringGeometry args={[effectiveRadius * 0.7, effectiveRadius, 32]} />
            <meshStandardMaterial 
              color={color} 
              transparent={true} 
              opacity={0.7} 
              side={THREE.DoubleSide} 
            />
          </mesh>
          
          {/* Add additional visual cue - a line through the center */}
          <mesh>
            <cylinderGeometry args={[0.02, 0.02, effectiveDepth * 1.2, 8]} />
            <meshStandardMaterial 
              color={selected ? "#ffffff" : color} 
              transparent={false}
              opacity={1.0}
            />
          </mesh>
          
          {/* Center marker - very small and solid to show exact attachment point */}
          <mesh>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial 
              color={selected ? "#ffffff" : color} 
              transparent={false}
              opacity={1.0}
            />
          </mesh>
        </group>
      );
      
    case AttachmentPointType.TUBE_INNER:
    case 'tube_inner': // Also check for string value
      // Inside tube connector (fits inside tube)
      return (
        <group>
          {/* Main cylinder */}
          <mesh>
            <cylinderGeometry 
              args={[radius * 0.8, radius * 0.8, height, 32]} 
            />
            <meshStandardMaterial 
              color={color} 
              transparent={true} 
              opacity={selected ? 0.7 : 0.4}
              wireframe={selected}
            />
          </mesh>
          
          {/* Cross piece for visibility */}
          <mesh rotation={[Math.PI/2, 0, 0]}>
            <cylinderGeometry 
              args={[radius * 0.2, radius * 0.2, radius * 2, 16]} 
            />
            <meshStandardMaterial 
              color={color} 
              transparent={true} 
              opacity={0.6}
            />
          </mesh>
          
          {/* Center marker */}
          <mesh>
            <sphereGeometry args={[0.03, 16, 16]} />
            <meshStandardMaterial 
              color={color} 
              transparent={false}
              opacity={1.0}
            />
          </mesh>
        </group>
      );
      
    case AttachmentPointType.BRACKET:
    case 'bracket': // Also check for string value
      // Bracket shape
      return (
        <group>
          {/* Main plate */}
          <mesh>
            <boxGeometry args={[width, height, radius * 0.2]} />
            <meshStandardMaterial 
              color={color} 
              transparent={true} 
              opacity={selected ? 0.7 : 0.4}
              wireframe={selected}
            />
          </mesh>
          
          {/* Bottom bracket part */}
          <mesh position={[0, -height/2, -radius * 0.3]}>
            <boxGeometry args={[width, height * 0.2, radius * 0.6]} />
            <meshStandardMaterial 
              color={color} 
              transparent={true} 
              opacity={0.6}
            />
          </mesh>
          
          {/* Center marker */}
          <mesh>
            <sphereGeometry args={[0.03, 16, 16]} />
            <meshStandardMaterial 
              color={color} 
              transparent={false}
              opacity={1.0}
            />
          </mesh>
        </group>
      );
      
    case AttachmentPointType.PLANAR:
    case 'planar': // Also check for string value
      // Flat plane - perfectly centered on the point
      return (
        <group>
          {/* Main plane */}
          <mesh>
            <planeGeometry args={[width, height]} />
            <meshStandardMaterial 
              color={color} 
              transparent={true} 
              opacity={selected ? 0.8 : 0.6}
              side={THREE.DoubleSide}
              wireframe={selected}
            />
          </mesh>
          
          {/* Add frame to make edges more visible */}
          <lineSegments>
            <edgesGeometry args={[new THREE.PlaneGeometry(width, height)]} />
            <lineBasicMaterial color={color} linewidth={2} />
          </lineSegments>
          
          {/* Center marker */}
          <mesh>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial 
              color={selected ? "#ffffff" : color} 
              transparent={false}
              opacity={1.0}
            />
          </mesh>
        </group>
      );
      
    case AttachmentPointType.THREADED:
    case 'threaded': // Also check for string value
      // Threaded connector (stylized screw/bolt)
      return (
        <group>
          {/* Main cylinder */}
          <mesh>
            <cylinderGeometry 
              args={[radius * 0.4, radius * 0.4, height, 16]} 
            />
            <meshStandardMaterial 
              color={color} 
              transparent={true} 
              opacity={selected ? 0.7 : 0.4}
              wireframe={selected}
            />
          </mesh>
          
          {/* Top cap */}
          <mesh position={[0, height/2 + radius * 0.1, 0]}>
            <cylinderGeometry 
              args={[radius * 0.8, radius * 0.8, radius * 0.2, 32]} 
            />
            <meshStandardMaterial 
              color={color} 
              transparent={true} 
              opacity={0.6}
            />
          </mesh>
          
          {/* Center marker */}
          <mesh>
            <sphereGeometry args={[0.03, 16, 16]} />
            <meshStandardMaterial 
              color={color} 
              transparent={false}
              opacity={1.0}
            />
          </mesh>
        </group>
      );
      
    case AttachmentPointType.MESH_WRAP:
    case 'mesh_wrap': // Also check for string value
      // A mesh that wraps around the target
      return (
        <group>
          {/* Semi-transparent mesh wrapper */}
          <mesh>
            <sphereGeometry args={[radius, 16, 16]} />
            <meshStandardMaterial 
              color={color} 
              transparent={true} 
              opacity={selected ? 0.5 : 0.3}
              wireframe={true}
              side={THREE.DoubleSide}
            />
          </mesh>
          
          {/* Inner surface */}
          <mesh>
            <sphereGeometry args={[radius * 0.95, 12, 12]} />
            <meshStandardMaterial 
              color={color} 
              transparent={true} 
              opacity={0.2}
              side={THREE.BackSide}
            />
          </mesh>
          
          {/* Center marker */}
          <mesh>
            <sphereGeometry args={[0.03, 16, 16]} />
            <meshStandardMaterial 
              color={color} 
              transparent={false}
              opacity={1.0}
            />
          </mesh>
        </group>
      );
      
    case AttachmentPointType.PRESS_FIT:
    case 'press_fit': // Also check for string value
      // Press fit connector
      return (
        <group>
          <mesh>
            <cylinderGeometry 
              args={[radius * 0.8, radius, height * 0.7, 32]} 
            />
            <meshStandardMaterial 
              color={color} 
              transparent={true} 
              opacity={selected ? 0.8 : 0.5}
              wireframe={selected}
            />
          </mesh>
          <mesh position={[0, -height * 0.4, 0]}>
            <cylinderGeometry 
              args={[radius * 1.2, radius * 1.2, height * 0.1, 32]} 
            />
            <meshStandardMaterial 
              color={color} 
              transparent={true} 
              opacity={0.7}
            />
          </mesh>
        </group>
      );
    
    case AttachmentPointType.STANDARD:
    case 'standard': // Also check for string value
    default:
      // Standard attachment point marker
      return (
        <group>
          {/* Main indicator sphere */}
          <mesh>
            <sphereGeometry args={[radius * 0.5, 16, 16]} />
            <meshStandardMaterial 
              color={color} 
              transparent={true} 
              opacity={selected ? 0.8 : 0.6}
              wireframe={selected}
            />
          </mesh>
          
          {/* Normal indicator line */}
          <mesh position={[0, radius * 0.5, 0]} rotation={[Math.PI/2, 0, 0]}>
            <cylinderGeometry 
              args={[0.02, 0.02, radius, 8]} 
            />
            <meshStandardMaterial 
              color={color} 
              transparent={false}
            />
          </mesh>
          
          {/* Center marker */}
          <mesh>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial 
              color={selected ? "#ffffff" : color} 
              transparent={false}
              opacity={1.0}
            />
          </mesh>
        </group>
      );
  }
};

// Custom Pulse component
const Pulse = ({ duration = 1.5 }) => {
  const material = useRef<THREE.Material>();
  
  useFrame(({ clock }) => {
    if (material.current) {
      const elapsedTime = clock.getElapsedTime();
      const opacity = Math.abs(Math.sin(elapsedTime * Math.PI / duration)) * 0.2 + 0.1;
      (material.current as THREE.MeshBasicMaterial).opacity = opacity;
    }
  });
  
  return <primitive ref={material} object={new THREE.MeshBasicMaterial({ color: "#ffffff", transparent: true, opacity: 0.2 })} attach="material" />;
};

/**
 * Component for visualizing and manipulating attachment points
 */
const AttachmentPointHelper: React.FC<AttachmentPointHelperProps> = ({
  point,
  selected,
  onSelect,
  onUpdate,
  onDelete,
  modelInfo,
  sceneLocked = false, // Default to false
  lockedAxes
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const isTransforming = useRef<boolean>(false);
  const lastGoodPosition = useRef<[number, number, number]>(point.position);
  
  // Debug log point updates
  useEffect(() => {
    if (!DEV_MODE) return;
    logDebug('Point updated:', point.name, point);
    
    // Store last good position for reference
    lastGoodPosition.current = point.position;
  }, [point]);
  
  // Calculate quaternion from rotation array or from normal if rotation is not provided
  const quaternion = useMemo(() => {
    if (DEV_MODE) logDebug(`Calculating quaternion for ${point.name || 'Unnamed point'}`);
    
    // If we have an explicit rotation AND we're dealing with a tube type, prioritize it
    if (point.rotation && (point.rotation[0] !== 0 || point.rotation[1] !== 0 || point.rotation[2] !== 0 || point.rotation[3] !== 1) &&
        (point.type === AttachmentPointType.TUBE_OUTER || point.type === AttachmentPointType.TUBE_INNER)) {
      if (DEV_MODE) logDebug(`Using explicit rotation override: [${point.rotation.map(v => v.toFixed(3)).join(', ')}]`);
      return new THREE.Quaternion(
        point.rotation[0],
        point.rotation[1],
        point.rotation[2],
        point.rotation[3]
      );
    }
    
    // Otherwise, calculate from normal (with special handling for tube types)
    const normalVector = new THREE.Vector3(point.normal[0], point.normal[1], point.normal[2]).normalize();
    if (DEV_MODE) logDebug(`Using normal vector: [${normalVector.x.toFixed(3)}, ${normalVector.y.toFixed(3)}, ${normalVector.z.toFixed(3)}]`);
    
    // For tube types, we need special handling to ensure the tube aligns with the normal
    if (point.type === AttachmentPointType.TUBE_OUTER || point.type === AttachmentPointType.TUBE_INNER) {
      if (DEV_MODE) logDebug(`Special handling for tube type ${point.type}`);
      
      // For tube types, we want the cylinder's axis (Y) to align with the normal direction
      // Create a rotation that maps Y axis to the normal direction
      
      // The default "up" direction of a cylinder geometry is along Y axis
      const cylinderUp = new THREE.Vector3(0, 1, 0);
      
      // Calculate quaternion that rotates Y axis to match normal direction
      const q = new THREE.Quaternion();
      q.setFromUnitVectors(cylinderUp, normalVector);
      
      if (DEV_MODE) logDebug(`Calculated quaternion for tube: [${q.x.toFixed(3)}, ${q.y.toFixed(3)}, ${q.z.toFixed(3)}, ${q.w.toFixed(3)}]`);
      return q;
    }
    
    // For other types, standard rotation calculation
    const upVector = new THREE.Vector3(0, 1, 0);
    const quaternion = new THREE.Quaternion();
    
    if (normalVector.length() > 0.001) {
      quaternion.setFromUnitVectors(upVector, normalVector);
      if (DEV_MODE) logDebug(`Standard quaternion: [${quaternion.x.toFixed(3)}, ${quaternion.y.toFixed(3)}, ${quaternion.z.toFixed(3)}, ${quaternion.w.toFixed(3)}]`);
    }
    
    return quaternion;
  }, [point.rotation, point.normal, point.type, point.name]);
  
  // Modify the restrictMovement function to focus on axis locks
  const restrictMovement = useCallback((position: THREE.Vector3): [number, number, number] => {
    // Start with current position
    let restrictedPosition: [number, number, number] = [
      position.x,
      position.y,
      position.z
    ];
    
    // Apply explicit axis locks if provided
    if (lockedAxes) {
      if (lockedAxes.x) restrictedPosition[0] = point.position[0];
      if (lockedAxes.y) restrictedPosition[1] = point.position[1];
      if (lockedAxes.z) restrictedPosition[2] = point.position[2];
    }
    
    // IMPORTANT: Prevent positions from resetting to 0,0,0
    // This is a safety check in case something is trying to reset the position
    const isZeroPosition = restrictedPosition[0] === 0 && restrictedPosition[1] === 0 && restrictedPosition[2] === 0;
    if (isZeroPosition && (point.position[0] !== 0 || point.position[1] !== 0 || point.position[2] !== 0)) {
      logDebug(`Prevented reset to 0,0,0 for ${point.name || 'unnamed'}`);
      return lastGoodPosition.current;
    }
    
    return restrictedPosition;
  }, [lockedAxes, point.position, point.name]);
  
  // Handle attachment point selection
  const handleSelect = useCallback((e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    
    // Check if we're already transforming this point
    // This helps prevent unnecessary reselection during dragging
    if (isTransforming.current && selected) {
      logDebug(`Ignoring click on already selected point while transforming: ${point.name || 'unnamed'}`);
      return;
    }
    
    logDebug(`Selected point: ${point.name || 'unnamed'} (${point.id})`);
    onSelect();
  }, [selected, point.name, point.id, onSelect]);
  
  // Handle drag start
  const handleDragStart = useCallback(() => {
    try {
      isTransforming.current = true;
      logDebug(`Started transforming ${point.name || 'unnamed'}`);
    } catch (error) {
      console.error('Error in handleDragStart:', error);
    }
  }, [point.name]);
  
  // Handle drag
  const handleDrag = useCallback((position: THREE.Vector3) => {
    try {
      // Apply axis restrictions
      const restrictedPosition = restrictMovement(position);
      
      // Store the new position as a last good position
      lastGoodPosition.current = restrictedPosition;
    } catch (error) {
      console.error('Error in handleDrag:', error);
    }
  }, [restrictMovement]);
  
  // Handle drag end
  const handleDragEnd = useCallback((position: THREE.Vector3) => {
    try {
      // Apply axis restrictions
      const restrictedPosition = restrictMovement(position);
      
      // Get the current rotation as quaternion
      const quaternion = new THREE.Quaternion();
      if (groupRef.current) {
        groupRef.current.getWorldQuaternion(quaternion);
      }
      
      const rotation: [number, number, number, number] = [
        quaternion.x, quaternion.y, quaternion.z, quaternion.w
      ];
      
      // Calculate the normal from the quaternion
      const up = new THREE.Vector3(0, 1, 0);
      const normal = up.clone().applyQuaternion(quaternion);
      
      // Apply the final update
      const updatedPoint = {
        ...point,
        position: restrictedPosition,
        rotation,
        normal: [normal.x, normal.y, normal.z] as [number, number, number]
      };
      
      onUpdate(updatedPoint);
      
      // Store the new position as a last good position
      lastGoodPosition.current = restrictedPosition;
      
      // Reset the transforming flag
      isTransforming.current = false;
      logDebug(`Finished transforming ${point.name || 'unnamed'}`);
    } catch (error) {
      console.error('Error in handleDragEnd:', error);
      isTransforming.current = false;
    }
  }, [point, restrictMovement, onUpdate]);
  
  // Set up dragging
  const { onPointerDown, onPointerMove, onPointerUp, isDragging } = useDraggable({
    groupRef,
    lockedAxes,
    enabled: selected && !sceneLocked,
    onDragStart: handleDragStart,
    onDrag: handleDrag,
    onDragEnd: handleDragEnd
  });
  
  // Highlight effect for selected attachment point
  const selectedEffect = useMemo(() => {
    if (!selected) return null;
    
    return (
      <mesh position={[0, 0, 0]} scale={1.15}>
        {point.type === AttachmentPointType.STANDARD ? (
          <sphereGeometry args={[point.radius || 0.25, 16, 16]} />
        ) : point.type === AttachmentPointType.TUBE_OUTER ? (
          <cylinderGeometry 
            args={[
              (point.radius || 0.25) * 1.05, 
              (point.radius || 0.25) * 1.05, 
              (point.height || 0.5) * 1.05, 
              32, 1, true
            ]} 
          />
        ) : point.type === AttachmentPointType.BRACKET ? (
          <boxGeometry 
            args={[
              (point.width || 0.5) * 1.05, 
              (point.height || 0.5) * 1.05, 
              0.05
            ]} 
          />
        ) : (
          <sphereGeometry args={[point.radius || 0.25, 16, 16]} />
        )}
        <meshBasicMaterial 
          color="#ffffff" 
          transparent={true} 
          opacity={0.3} 
          wireframe={true} 
        />
      </mesh>
    );
  }, [selected, point.type, point.radius, point.height, point.width]);
  
  // Effects for selected point highlight
  const pulseEffect = useMemo(() => {
    if (!selected) return null;
    
    return (
      <mesh>
        <sphereGeometry args={[point.radius ? point.radius * 1.2 : 0.3, 16, 16]} />
        <meshBasicMaterial 
          color="#ffffff" 
          transparent={true} 
          opacity={0.2} 
        >
          <Pulse duration={1.5} />
        </meshBasicMaterial>
      </mesh>
    );
  }, [selected, point.radius]);
  
  // Debug visualization to help see the hierarchy
  const DebugVisualizer = () => {
    if (!DEV_MODE || !selected) return null;
    
    return (
      <group>
        {/* Origin marker */}
        <mesh>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="red" />
        </mesh>
        
        {/* Small axes */}
        <axesHelper args={[0.2]} />
      </group>
    );
  };
  
  // First, add a useEffect to log a message about the custom implementation
  useEffect(() => {
    if (selected) {
      console.log(
        '️⚠️ Using custom dragging implementation for attachment points.\n' +
        'This replaces TransformControls to prevent infinite recursion errors.\n' +
        'Click and drag directly on the attachment point or use the colored axis handles.'
      );
    }
  }, [selected]);
  
  // Then enhance the DragHandles component to be more visible
  const DragHandles = () => {
    if (!selected || sceneLocked) return null;
    
    return (
      <group>
        {/* X-axis handle (red) */}
        {!lockedAxes?.x && (
          <group position={[0.7, 0, 0]}>
            <mesh>
              <sphereGeometry args={[0.07, 12, 12]} />
              <meshStandardMaterial color="red" />
            </mesh>
            <mesh position={[-0.35, 0, 0]} rotation={[0, 0, Math.PI/2]}>
              <cylinderGeometry args={[0.02, 0.02, 0.7, 8]} />
              <meshStandardMaterial color="red" />
            </mesh>
            {/* X label */}
            <Html position={[0.1, 0, 0]}>
              <div style={{
                color: 'red',
                background: 'rgba(0,0,0,0.5)',
                padding: '2px 5px',
                borderRadius: '3px',
                fontSize: '10px',
                fontWeight: 'bold'
              }}>X</div>
            </Html>
          </group>
        )}
        
        {/* Y-axis handle (green) */}
        {!lockedAxes?.y && (
          <group position={[0, 0.7, 0]}>
            <mesh>
              <sphereGeometry args={[0.07, 12, 12]} />
              <meshStandardMaterial color="green" />
            </mesh>
            <mesh position={[0, -0.35, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.7, 8]} />
              <meshStandardMaterial color="green" />
            </mesh>
            {/* Y label */}
            <Html position={[0, 0.1, 0]}>
              <div style={{
                color: 'green',
                background: 'rgba(0,0,0,0.5)',
                padding: '2px 5px',
                borderRadius: '3px',
                fontSize: '10px',
                fontWeight: 'bold'
              }}>Y</div>
            </Html>
          </group>
        )}
        
        {/* Z-axis handle (blue) */}
        {!lockedAxes?.z && (
          <group position={[0, 0, 0.7]}>
            <mesh>
              <sphereGeometry args={[0.07, 12, 12]} />
              <meshStandardMaterial color="blue" />
            </mesh>
            <mesh position={[0, 0, -0.35]} rotation={[Math.PI/2, 0, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.7, 8]} />
              <meshStandardMaterial color="blue" />
            </mesh>
            {/* Z label */}
            <Html position={[0, 0, 0.1]}>
              <div style={{
                color: 'blue',
                background: 'rgba(0,0,0,0.5)',
                padding: '2px 5px',
                borderRadius: '3px',
                fontSize: '10px',
                fontWeight: 'bold'
              }}>Z</div>
            </Html>
          </group>
        )}
      </group>
    );
  };
  
  // Return the component JSX with FLATTENED hierarchy
  // IMPORTANT: We now use a single group with position and quaternion,
  // which eliminates the offset issues
  return (
    <group 
      ref={groupRef} 
      position={point.position} 
      quaternion={quaternion}
      onClick={handleSelect}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      {/* Debug visualization to see the actual group position */}
      <DebugVisualizer />
      
      {/* Debug axes to show orientation */}
      {selected && (
        <axesHelper args={[0.5]} />
      )}
      
      {/* Add error handling for the geometry to prevent crashes */}
      <React.Suspense fallback={null}>
        <AttachmentGeometry 
          type={point.type || AttachmentPointType.STANDARD}
          color={isDragging ? '#ff8800' : point.color} 
          radius={point.radius}
          width={point.width}
          height={point.height}
          depth={point.depth}
          selected={selected} 
        />
      </React.Suspense>
      
      {/* Custom drag handles for each unlocked axis */}
      {selected && <DragHandles />}
      
      {/* Name tag on all points for easier identification */}
      <Html position={[0, point.radius ? point.radius * 2 : 0.5, 0]} center>
        <div style={{ 
          background: 'rgba(0, 0, 0, 0.7)', 
          color: 'white', 
          padding: '4px 8px', 
          borderRadius: '4px',
          fontSize: '12px',
          whiteSpace: 'nowrap',
          transform: 'translate(-50%, -100%)',
          marginBottom: '8px'
        }}>
          {point.name || 'Attachment Point'}
          {DEV_MODE && (
            <div style={{ fontSize: '10px', color: '#aaa' }}>
              pos: [{point.position.map(v => v.toFixed(2)).join(', ')}]
            </div>
          )}
        </div>
      </Html>
      
      {/* Selection highlight effects - Now with error handling */}
      <React.Suspense fallback={null}>
        {selectedEffect}
        {pulseEffect}
      </React.Suspense>
    </group>
  );
};

export default AttachmentPointHelper; 