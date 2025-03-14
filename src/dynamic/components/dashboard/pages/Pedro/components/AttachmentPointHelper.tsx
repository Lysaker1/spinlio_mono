import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { TransformControls, Plane, Text as DreiText, Html } from '@react-three/drei';
import * as THREE from 'three';
import { ThreeEvent } from '@react-three/fiber/dist/declarations/src/core/events';
import { AttachmentPointType } from '../constants/SnapPointConfigurations';

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
}

interface AttachmentPointHelperProps {
  point: AttachmentPoint;
  selected: boolean;
  onSelect: () => void;
  onUpdate: (updatedPoint: AttachmentPoint) => void;
  onDelete: () => void;
  modelInfo?: { size: THREE.Vector3, center: THREE.Vector3 } | null;
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
  
  // Debugging - log the geometry parameters to help troubleshoot
  useEffect(() => {
    console.log(`Rendering attachment geometry of type: ${type}`);
    console.log(`Is TUBE_OUTER? ${type === AttachmentPointType.TUBE_OUTER}`);
    console.log(`Parameters - radius: ${radius}, depth: ${depth}, width: ${width}, height: ${height}`);
    console.log(`Effective values - radius: ${effectiveRadius}, depth: ${effectiveDepth}`);
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
  modelInfo
}) => {
  const [transformMode, setTransformMode] = useState<'translate' | 'rotate'>('translate');
  const [snapping, setSnapping] = useState<boolean>(true);
  const [showControls, setShowControls] = useState<boolean>(false);
  const controlsRef = useRef<any>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { camera, scene } = useThree();
  
  // IMPORTANT: Add debug information to help troubleshoot
  useEffect(() => {
    console.log(`AttachmentPoint Debug - ${point.name || 'Unnamed'}:`);
    console.log(`- Full point object:`, JSON.stringify(point, null, 2));
    console.log(`- Type: ${point.type}`);
    console.log(`- Type check (TUBE_OUTER): ${point.type === AttachmentPointType.TUBE_OUTER}`);
    console.log(`- Type check (string): ${point.type === 'tube_outer'}`);
    console.log(`- Position: [${point.position.map(v => v.toFixed(3)).join(', ')}]`);
    console.log(`- Normal: [${point.normal.map(v => v.toFixed(3)).join(', ')}]`);
    console.log(`- Dimensions: radius=${point.radius?.toFixed(3)}, depth=${point.depth?.toFixed(3)}`);
  }, [point]);
  
  // Calculate quaternion from rotation array or from normal if rotation is not provided
  const quaternion = useMemo(() => {
    // Log our calculation method to help debug
    console.log(`Calculating quaternion for ${point.name || 'Unnamed point'}`);
    
    // If we have an explicit rotation AND we're dealing with a tube type, prioritize it
    if (point.rotation && (point.rotation[0] !== 0 || point.rotation[1] !== 0 || point.rotation[2] !== 0 || point.rotation[3] !== 1) &&
        (point.type === AttachmentPointType.TUBE_OUTER || point.type === AttachmentPointType.TUBE_INNER)) {
      console.log(`Using explicit rotation override: [${point.rotation.map(v => v.toFixed(3)).join(', ')}]`);
      return new THREE.Quaternion(
        point.rotation[0],
        point.rotation[1],
        point.rotation[2],
        point.rotation[3]
      );
    }
    
    // Otherwise, calculate from normal (with special handling for tube types)
    const normalVector = new THREE.Vector3(point.normal[0], point.normal[1], point.normal[2]).normalize();
    console.log(`Using normal vector: [${normalVector.x.toFixed(3)}, ${normalVector.y.toFixed(3)}, ${normalVector.z.toFixed(3)}]`);
    
    // For tube types, we need special handling to ensure the tube aligns with the normal
    if (point.type === AttachmentPointType.TUBE_OUTER || point.type === AttachmentPointType.TUBE_INNER) {
      console.log(`Special handling for tube type ${point.type}`);
      
      // For tube types, we want the cylinder's axis (Y) to align with the normal direction
      // Create a rotation that maps Y axis to the normal direction
      
      // The default "up" direction of a cylinder geometry is along Y axis
      const cylinderUp = new THREE.Vector3(0, 1, 0);
      
      // Calculate quaternion that rotates Y axis to match normal direction
      const q = new THREE.Quaternion();
      q.setFromUnitVectors(cylinderUp, normalVector);
      
      console.log(`Calculated quaternion for tube: [${q.x.toFixed(3)}, ${q.y.toFixed(3)}, ${q.z.toFixed(3)}, ${q.w.toFixed(3)}]`);
      return q;
    }
    
    // For other types, standard rotation calculation
    const upVector = new THREE.Vector3(0, 1, 0);
    const quaternion = new THREE.Quaternion();
    
    if (normalVector.length() > 0.001) {
      quaternion.setFromUnitVectors(upVector, normalVector);
      console.log(`Standard quaternion: [${quaternion.x.toFixed(3)}, ${quaternion.y.toFixed(3)}, ${quaternion.z.toFixed(3)}, ${quaternion.w.toFixed(3)}]`);
    }
    
    return quaternion;
  }, [point.rotation, point.normal, point.type, point.name]);
  
  // Handle attachment point selection
  const handleSelect = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onSelect();
  };
  
  // Handle transform changes
  const handleTransformChange = () => {
    if (!groupRef.current) return;
    
    // Get the current position from the transformed group
    const position: [number, number, number] = [
      groupRef.current.position.x,
      groupRef.current.position.y,
      groupRef.current.position.z
    ];
    
    // Get the current rotation as quaternion
    const quaternion = new THREE.Quaternion();
    groupRef.current.getWorldQuaternion(quaternion);
    const rotation: [number, number, number, number] = [
      quaternion.x,
      quaternion.y,
      quaternion.z,
      quaternion.w
    ];
    
    // Calculate the normal from the quaternion
    const up = new THREE.Vector3(0, 1, 0);
    const normal = up.clone().applyQuaternion(quaternion);
    
    // Update the attachment point
    onUpdate({
      ...point,
      position,
      rotation,
      normal: [normal.x, normal.y, normal.z]
    });
  };
  
  // Toggle transform mode between translate and rotate
  const toggleTransformMode = () => {
    if (transformMode === 'translate') setTransformMode('rotate');
    else setTransformMode('translate');
  };
  
  // Toggle snapping
  const toggleSnap = () => {
    setSnapping(!snapping);
  };
  
  // Snap to the nearest mesh surface
  const snapToModel = () => {
    if (!snapping || !modelInfo) return;
    
    // Implement snap logic here - simplified for now
    console.log("Snapping to model surface...");
  };
  
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
  
  // Setup transform controls when the attachment point is selected
  useEffect(() => {
    if (selected && controlsRef.current && groupRef.current) {
      // Update transform controls
      try {
        controlsRef.current.attach(groupRef.current);
        controlsRef.current.setMode(transformMode);
        
        // Show controls if point is selected
        setShowControls(true);
      } catch (err) {
        console.error("Error attaching transform controls:", err);
        setShowControls(false);
      }
      
      return () => {
        if (controlsRef.current) {
          try {
            controlsRef.current.detach();
          } catch (err) {
            console.error("Error detaching transform controls:", err);
          }
        }
        setShowControls(false);
      };
    }
    
    setShowControls(false);
    return undefined;
  }, [selected, transformMode]);
  
  // Return the component JSX
  return (
    <group position={point.position} onClick={handleSelect}>
      <group ref={groupRef} quaternion={quaternion}>
        {/* Debug axes to show orientation */}
        {selected && (
          <axesHelper args={[0.5]} />
        )}
        
        {/* Add error handling for the geometry to prevent crashes */}
        <React.Suspense fallback={null}>
          <AttachmentGeometry 
            type={point.type || AttachmentPointType.STANDARD}
            color={point.color} 
            radius={point.radius}
            width={point.width}
            height={point.height}
            depth={point.depth}
            selected={selected} 
          />
        </React.Suspense>
        
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
          </div>
        </Html>
        
        {/* Selection highlight effects - Now with error handling */}
        <React.Suspense fallback={null}>
          {selectedEffect}
          {pulseEffect}
        </React.Suspense>
      </group>
      
      {/* Transform controls for manipulating the point - keep these, they don't show the UI buttons */}
      {selected && (
        <TransformControls
          ref={controlsRef}
          object={groupRef.current}
          mode={transformMode}
          onObjectChange={handleTransformChange}
        />
      )}
    </group>
  );
};

export default AttachmentPointHelper; 