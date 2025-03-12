import * as THREE from 'three';
import { v4 as uuidv4 } from 'uuid';

// Import the AttachmentPoint interface from your existing code
import { AttachmentPoint } from '../components/AttachmentPointHelper';

interface SnapPointConfig {
  count: number;
  positions: Array<{
    strategy: 'relative' | 'absolute' | 'mesh' | 'detection';
    position: [number, number, number] | string;
    normal: [number, number, number] | string;
    name: string;
    color?: string;
    size?: number;
  }>;
}

/**
 * Service for managing and generating snap points
 */
export class SnapPointService {
  // Component-specific snap point configurations
  private snapPointConfigs: Record<string, SnapPointConfig> = {
    seat_post: {
      count: 2,
      positions: [
        {
          strategy: 'relative',
          position: [0, 1, 0], // Top of the component
          normal: [0, 1, 0],   // Pointing up
          name: 'Saddle Attachment',
          color: '#e74c3c'
        },
        {
          strategy: 'relative',
          position: [0, -1, 0], // Bottom of the component
          normal: [0, -1, 0],   // Pointing down
          name: 'Frame Attachment',
          color: '#3498db'
        }
      ]
    },
    handlebar: {
      count: 3,
      positions: [
        {
          strategy: 'relative',
          position: [0, -1, 0], // Center bottom
          normal: [0, -1, 0],   // Pointing down
          name: 'Stem Attachment',
          color: '#3498db'
        },
        {
          strategy: 'relative',
          position: [1, 0, 0], // Right end
          normal: [1, 0, 0],   // Pointing right
          name: 'Right Grip',
          color: '#e74c3c'
        },
        {
          strategy: 'relative',
          position: [-1, 0, 0], // Left end
          normal: [-1, 0, 0],   // Pointing left
          name: 'Left Grip',
          color: '#2ecc71'
        }
      ]
    },
    wheel: {
      count: 1,
      positions: [
        {
          strategy: 'mesh',
          position: 'center', // Will be computed from mesh
          normal: 'axis',     // Will detect wheel axis
          name: 'Axle Attachment',
          color: '#f39c12'
        }
      ]
    },
    fork: {
      count: 2,
      positions: [
        {
          strategy: 'relative',
          position: [0, 1, 0], // Top
          normal: [0, 1, 0],   // Pointing up
          name: 'Steerer Tube',
          color: '#3498db'
        },
        {
          strategy: 'detection',
          position: 'dropouts', // Will detect fork dropouts
          normal: [1, 0, 0],    // Front facing
          name: 'Wheel Attachment',
          color: '#e74c3c'
        }
      ]
    },
    frame: {
      count: 6,
      positions: [
        {
          strategy: 'relative',
          position: [0, 1, 0],  // Top
          normal: [0, 1, 0],    // Pointing up
          name: 'Seat Post Attachment',
          color: '#9b59b6'
        },
        {
          strategy: 'relative',
          position: [0.5, 0, 0], // Front
          normal: [1, 0, 0],     // Pointing forward
          name: 'Front Fork Attachment',
          color: '#2ecc71'
        },
        {
          strategy: 'relative',
          position: [-0.5, 0, 0], // Rear
          normal: [-1, 0, 0],     // Pointing backward
          name: 'Rear Wheel Attachment',
          color: '#3498db'
        },
        {
          strategy: 'relative',
          position: [0.3, 0.8, 0], // Front top
          normal: [0, 1, 0],       // Pointing up
          name: 'Handlebar Attachment',
          color: '#f39c12'
        },
        {
          strategy: 'relative',
          position: [0, -0.5, 0], // Bottom center
          normal: [0, -1, 0],     // Pointing down
          name: 'Bottom Bracket',
          color: '#e74c3c'
        },
        {
          strategy: 'relative',
          position: [-0.3, 0.2, 0], // Rear top
          normal: [0, 1, 0],       // Pointing up
          name: 'Rear Brake Mount',
          color: '#1abc9c'
        }
      ]
    },
    pedal: {
      count: 1,
      positions: [
        {
          strategy: 'detection',
          position: 'spindle', // Will detect pedal spindle
          normal: [-1, 0, 0],  // Pointing inward
          name: 'Crank Attachment',
          color: '#e67e22' 
        }
      ]
    },
    brake: {
      count: 2,
      positions: [
        {
          strategy: 'relative',
          position: [0, 0, 0], // Center
          normal: [0, 1, 0],   // Pointing up
          name: 'Frame Mount',
          color: '#1abc9c'
        },
        {
          strategy: 'relative',
          position: [0, -0.5, 0], // Bottom
          normal: [0, -1, 0],     // Pointing down
          name: 'Wheel Caliper',
          color: '#e74c3c'
        }
      ]
    },
    other: {
      count: 1,
      positions: [
        {
          strategy: 'relative',
          position: [0, 0, 0], // Center
          normal: [0, 1, 0],   // Default up
          name: 'Generic Attachment',
          color: '#7f8c8d'
        }
      ]
    }
  };
  
  /**
   * Generate automatic attachment points for a component
   */
  public generateAttachmentPoints(
    componentType: string,
    meshes: Record<string, THREE.Mesh>,
    boundingBox: THREE.Box3
  ): AttachmentPoint[] {
    console.log(`Generating attachment points for component type: ${componentType}`);
    
    // Get configuration for this component type
    const config = this.snapPointConfigs[componentType] || this.snapPointConfigs.other;
    const points: AttachmentPoint[] = [];
    
    // Get bounding box dimensions and center
    const size = boundingBox.getSize(new THREE.Vector3());
    const center = boundingBox.getCenter(new THREE.Vector3());
    
    console.log('Component size:', [size.x, size.y, size.z]);
    console.log('Component center:', [center.x, center.y, center.z]);
    
    // Get the largest meshes for mesh-based snap points
    const sortedMeshes = this.getSortedMeshesBySize(meshes);
    
    if (sortedMeshes.length > 0) {
      console.log(`Found ${sortedMeshes.length} meshes, largest: ${sortedMeshes[0].name}`);
    }
    
    // Create attachment points based on component configuration
    config.positions.forEach((pointConfig, index) => {
      let position: [number, number, number] = [0, 0, 0];
      let normal: [number, number, number] = [0, 1, 0];
      
      // Determine position based on strategy
      if (pointConfig.strategy === 'relative') {
        // Use relative positioning based on bounding box
        const relPos = pointConfig.position as [number, number, number];
        position = [
          center.x + relPos[0] * size.x * 0.5,
          center.y + relPos[1] * size.y * 0.5,
          center.z + relPos[2] * size.z * 0.5
        ];
        
        // Use provided normal
        normal = pointConfig.normal as [number, number, number];
      } 
      else if (pointConfig.strategy === 'mesh' && sortedMeshes.length > 0) {
        const positionStr = pointConfig.position as string;
        const normalStr = pointConfig.normal as string;
        const mesh = sortedMeshes[0]; // Use largest mesh
        
        // Process mesh-based positioning
        if (positionStr === 'center') {
          const meshBox = new THREE.Box3().setFromObject(mesh);
          const meshCenter = meshBox.getCenter(new THREE.Vector3());
          position = [meshCenter.x, meshCenter.y, meshCenter.z];
        }
        
        // Determine normal
        if (normalStr === 'axis' && this.isWheelLike(mesh)) {
          // For wheels, try to find the axis direction
          normal = this.detectWheelAxis(mesh);
        } else {
          normal = pointConfig.normal as [number, number, number];
        }
      }
      else if (pointConfig.strategy === 'detection') {
        // Advanced geometry detection (simplified for now)
        switch (componentType) {
          case 'wheel':
            if (sortedMeshes.length > 0) {
              position = this.findWheelCenter(sortedMeshes[0]);
              normal = this.detectWheelAxis(sortedMeshes[0]);
            }
            break;
          case 'pedal':
            if (sortedMeshes.length > 0) {
              position = this.findPedalSpindle(sortedMeshes[0], size);
              normal = [-1, 0, 0]; // Inward by default
            }
            break;
          case 'fork':
            if (sortedMeshes.length > 1) {
              position = this.findForkDropouts(sortedMeshes, size);
              normal = [0, 0, 1]; // Forward
            }
            break;
          default:
            // Fallback to center
            position = [center.x, center.y, center.z];
            normal = [0, 1, 0];
        }
      }
      else {
        // Absolute or fallback
        if (typeof pointConfig.position === 'string') {
          // Handle named positions
          if (pointConfig.position === 'largest_mesh' && sortedMeshes.length > 0) {
            const mesh = sortedMeshes[0];
            const meshBox = new THREE.Box3().setFromObject(mesh);
            const meshCenter = meshBox.getCenter(new THREE.Vector3());
            position = [meshCenter.x, meshCenter.y, meshCenter.z];
          } 
          else if (pointConfig.position === 'second_largest_mesh' && sortedMeshes.length > 1) {
            const mesh = sortedMeshes[1];
            const meshBox = new THREE.Box3().setFromObject(mesh);
            const meshCenter = meshBox.getCenter(new THREE.Vector3());
            position = [meshCenter.x, meshCenter.y, meshCenter.z];
          } 
          else {
            // Default to component center if no valid position strategy
            position = [center.x, center.y, center.z];
          }
        } else {
          // Use absolute coordinates
          position = pointConfig.position as [number, number, number];
        }
        
        // Use provided normal
        normal = pointConfig.normal as [number, number, number];
      }
      
      // Create quaternion from normal for orientation
      const normalVector = new THREE.Vector3(normal[0], normal[1], normal[2]).normalize();
      const quaternion = new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 1, 0), // Default up vector
        normalVector
      );
      
      // Create the attachment point
      points.push({
        id: uuidv4(),
        position,
        rotation: [quaternion.x, quaternion.y, quaternion.z, quaternion.w],
        normal,
        color: pointConfig.color || '#22cc88', // Use config color or default green
        name: pointConfig.name,
        size: pointConfig.size || 1.0, // Use config size or default
        auto: true
      });
      
      console.log(`Created attachment point: ${pointConfig.name} at position [${position.join(', ')}]`);
    });
    
    return points;
  }
  
  /**
   * Create an attachment point at a specific mesh position
   */
  public createMeshAttachmentPoint(
    mesh: THREE.Mesh,
    hitPoint?: THREE.Vector3,
    faceNormal?: THREE.Vector3
  ): AttachmentPoint {
    // If no hit point provided, use mesh center
    if (!hitPoint) {
      const box = new THREE.Box3().setFromObject(mesh);
      hitPoint = box.getCenter(new THREE.Vector3());
    }
    
    // If no face normal provided, use up vector
    if (!faceNormal) {
      faceNormal = new THREE.Vector3(0, 1, 0);
    }
    
    // Create quaternion from normal for orientation
    const quaternion = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0), // Default up vector
      faceNormal.normalize()
    );
    
    // Create the attachment point
    const point: AttachmentPoint = {
      id: uuidv4(),
      position: [hitPoint.x, hitPoint.y, hitPoint.z],
      rotation: [quaternion.x, quaternion.y, quaternion.z, quaternion.w],
      normal: [faceNormal.x, faceNormal.y, faceNormal.z],
      color: '#00b8ff', // Blue for mesh-based points
      meshId: mesh.uuid,
      name: `Attachment to ${mesh.name || 'unnamed mesh'}`
    };
    
    console.log(`Created mesh attachment point at [${point.position.join(', ')}]`);
    
    return point;
  }
  
  /**
   * Get meshes sorted by volume
   */
  private getSortedMeshesBySize(meshes: Record<string, THREE.Mesh>): THREE.Mesh[] {
    return Object.values(meshes).sort((a, b) => {
      const boxA = new THREE.Box3().setFromObject(a);
      const boxB = new THREE.Box3().setFromObject(b);
      const sizeA = boxA.getSize(new THREE.Vector3());
      const sizeB = boxB.getSize(new THREE.Vector3());
      const volumeA = sizeA.x * sizeA.y * sizeA.z;
      const volumeB = sizeB.x * sizeB.y * sizeB.z;
      return volumeB - volumeA; // Sort by volume descending
    });
  }
  
  /**
   * Check if a mesh is likely a wheel based on its geometry
   */
  private isWheelLike(mesh: THREE.Mesh): boolean {
    // Get bounding box and dimensions
    const box = new THREE.Box3().setFromObject(mesh);
    const size = box.getSize(new THREE.Vector3());
    
    // Check if relatively flat in one dimension and circular in other two
    const minDim = Math.min(size.x, size.y, size.z);
    const maxDim = Math.max(size.x, size.y, size.z);
    const midDim = size.x + size.y + size.z - minDim - maxDim;
    
    // If one dimension is much smaller than the other two, and other two are similar
    return (minDim < maxDim * 0.3) && (Math.abs(midDim - maxDim) / maxDim < 0.3);
  }
  
  /**
   * Detect the axis of a wheel
   */
  private detectWheelAxis(mesh: THREE.Mesh): [number, number, number] {
    // Get bounding box and dimensions
    const box = new THREE.Box3().setFromObject(mesh);
    const size = box.getSize(new THREE.Vector3());
    
    // The smallest dimension is likely along the wheel axis
    if (size.x < size.y && size.x < size.z) {
      return [1, 0, 0]; // X axis
    } else if (size.y < size.x && size.y < size.z) {
      return [0, 1, 0]; // Y axis
    } else {
      return [0, 0, 1]; // Z axis
    }
  }
  
  /**
   * Find the center of a wheel
   */
  private findWheelCenter(mesh: THREE.Mesh): [number, number, number] {
    const box = new THREE.Box3().setFromObject(mesh);
    const center = box.getCenter(new THREE.Vector3());
    return [center.x, center.y, center.z];
  }
  
  /**
   * Find the spindle of a pedal (simplified)
   */
  private findPedalSpindle(mesh: THREE.Mesh, size: THREE.Vector3): [number, number, number] {
    const box = new THREE.Box3().setFromObject(mesh);
    const center = box.getCenter(new THREE.Vector3());
    
    // For pedals, the spindle is typically at one end of the longest dimension
    if (size.x > size.y && size.x > size.z) {
      // X is longest, spindle at minimum X
      return [box.min.x, center.y, center.z];
    } else if (size.z > size.x && size.z > size.y) {
      // Z is longest, spindle at minimum Z
      return [center.x, center.y, box.min.z];
    } else {
      // Default to center with offset
      return [center.x - size.x * 0.45, center.y, center.z];
    }
  }
  
  /**
   * Find the dropouts of a fork (simplified)
   */
  private findForkDropouts(meshes: THREE.Mesh[], size: THREE.Vector3): [number, number, number] {
    if (meshes.length < 2) {
      // Not enough meshes, return an approximation
      return [0, -size.y * 0.45, 0];
    }
    
    // Get the main box
    const mainBox = new THREE.Box3().setFromObject(meshes[0]);
    const center = mainBox.getCenter(new THREE.Vector3());
    
    // Dropouts are typically at the bottom
    return [center.x, mainBox.min.y, center.z];
  }
}

export default new SnapPointService(); 