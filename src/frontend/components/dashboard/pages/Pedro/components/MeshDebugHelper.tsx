import React, { useRef, useState, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { TransformControls, Plane, Html, Text as DreiText } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Interface for mesh data with additional debug information
 */
interface DebugMeshData {
  id: string;
  name: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  vertexCount: number;
  boundingBox: {
    min: [number, number, number];
    max: [number, number, number];
    size: [number, number, number];
  };
}

interface MeshDebugHelperProps {
  scene: THREE.Scene | undefined;
  showLabels: boolean;
  showBoundingBoxes: boolean;
  showWireframes: boolean;
  selectedMeshId: string | null;
  onMeshSelect: (meshId: string) => void;
}

/**
 * Component that provides visual debugging for meshes in the scene
 */
const MeshDebugHelper: React.FC<MeshDebugHelperProps> = ({
  scene,
  showLabels = true,
  showBoundingBoxes = true,
  showWireframes = false,
  selectedMeshId,
  onMeshSelect
}) => {
  const [meshes, setMeshes] = useState<DebugMeshData[]>([]);
  const meshHelpers = useRef<THREE.Group>(new THREE.Group());
  const { camera } = useThree();
  
  // Extract and process mesh data for debugging
  useEffect(() => {
    if (!scene) return;
    
    // Clear previous helpers
    while(meshHelpers.current.children.length > 0) {
      meshHelpers.current.remove(meshHelpers.current.children[0]);
    }
    
    const debugMeshes: DebugMeshData[] = [];
    
    // Traverse scene to find meshes
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        // Extract mesh data for debugging
        const position = new THREE.Vector3();
        const rotation = new THREE.Euler();
        const scale = new THREE.Vector3();
        
        object.getWorldPosition(position);
        const quaternion = new THREE.Quaternion();
        object.getWorldQuaternion(quaternion);
        rotation.setFromQuaternion(quaternion);
        object.getWorldScale(scale);
        
        // Calculate bounding box
        const boundingBox = new THREE.Box3().setFromObject(object);
        const boxSize = boundingBox.getSize(new THREE.Vector3());
        
        const meshId = object.uuid;
        const meshData: DebugMeshData = {
          id: meshId,
          name: object.name || `Unnamed Mesh`,
          position: [position.x, position.y, position.z],
          rotation: [rotation.x, rotation.y, rotation.z],
          scale: [scale.x, scale.y, scale.z],
          vertexCount: object.geometry.attributes.position 
            ? object.geometry.attributes.position.count 
            : 0,
          boundingBox: {
            min: [boundingBox.min.x, boundingBox.min.y, boundingBox.min.z],
            max: [boundingBox.max.x, boundingBox.max.y, boundingBox.max.z],
            size: [boxSize.x, boxSize.y, boxSize.z]
          }
        };
        
        debugMeshes.push(meshData);
        
        // Create visual helpers
        if (showBoundingBoxes) {
          const boxHelper = new THREE.Box3Helper(boundingBox, 
            selectedMeshId === meshId ? new THREE.Color(0xff8800) : new THREE.Color(0x888888)
          );
          meshHelpers.current.add(boxHelper);
        }
        
        if (showWireframes && object.material) {
          // Store original material to restore later
          const originalMaterial = object.material;
          
          // Create wireframe material
          const wireframeMaterial = new THREE.MeshBasicMaterial({
            color: 0x00ff00,
            wireframe: true,
            opacity: 0.3,
            transparent: true
          });
          
          // Apply wireframe material
          object.material = wireframeMaterial;
          
          // Restore original material on cleanup
          return () => {
            object.material = originalMaterial;
          };
        }
      }
    });
    
    setMeshes(debugMeshes);
    console.log('Debug mesh data:', debugMeshes);
    
  }, [scene, showBoundingBoxes, showWireframes, selectedMeshId]);
  
  // Update labels to face camera
  useFrame(() => {
    // Make helpers face the camera
    if (showLabels) {
      meshHelpers.current.children.forEach(child => {
        if (child instanceof THREE.Object3D && child.userData.isLabel) {
          child.lookAt(camera.position);
        }
      });
    }
  });
  
  return (
    <group>
      <primitive object={meshHelpers.current} />
      
      {showLabels && meshes.map(mesh => (
        <group 
          key={mesh.id}
          position={[mesh.position[0], mesh.position[1] + mesh.boundingBox.size[1] / 2 + 0.1, mesh.position[2]]}
          onClick={() => onMeshSelect(mesh.id)}
        >
          <mesh>
            <planeGeometry args={[
              Math.max(mesh.name.length * 0.1, 1), 
              0.3
            ]} />
            <meshBasicMaterial 
              color="black" 
              transparent={true} 
              opacity={0.7}
              side={THREE.DoubleSide} 
            />
          </mesh>
          <DreiText
            color="white"
            fontSize={0.1}
            anchorX="center"
            anchorY="middle"
            outlineWidth={selectedMeshId === mesh.id ? 0.01 : 0}
            outlineColor="orange"
          >
            {mesh.name || `Mesh ${mesh.id.slice(0, 4)}`}
          </DreiText>
        </group>
      ))}
    </group>
  );
};

export default MeshDebugHelper; 