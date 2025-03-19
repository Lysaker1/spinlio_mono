import * as THREE from 'three';
import { v4 as uuidv4 } from 'uuid';

// Import the AttachmentPoint interface from your existing code
import { AttachmentPoint } from '../components/AttachmentPointHelper';
// Import the configurations from the new file
import snapPointConfigurations, { AttachmentPointType, SnapPointConfig } from '../constants/SnapPointConfigurations';
import * as handlebarAnalyzer from '../utils/handlebarAnalyzer';

// We can remove the redundant interface and enum since they're now imported

// Update the AttachmentPoint interface in your component
// to include the new type property
interface EnhancedAttachmentPoint extends AttachmentPoint {
  type: AttachmentPointType;
  radius?: number;          // For tube attachments
  width?: number;           // For rectangular/planar attachments
  height?: number;          // For rectangular/planar attachments
  meshId?: string;          // Reference to specific mesh
}

/**
 * Service for managing and generating snap points
 */
export class SnapPointService {
  // Instead of maintaining configurations here, we'll use the imported ones
  private snapPointConfigs = snapPointConfigurations;
  
  /**
   * Generate attachment points automatically based on component type
   */
  public generateAttachmentPoints(
    componentType: string,
    meshes: Record<string, THREE.Mesh>,
    boundingBox: THREE.Box3,
    category?: string,
    subcategory?: string
  ): AttachmentPoint[] {
    console.log(`Generating attachment points for ${componentType}`);
    if (category) {
      console.log(`Category: ${category}`);
    }
    if (subcategory) {
      console.log(`Subcategory: ${subcategory}`);
    }
    
    // Use specific analyzer for handlebar components
    if (componentType === 'handlebar' || category === 'handlebar') {
      console.log('Using specialized handlebar mesh analyzer');
      return handlebarAnalyzer.analyzeHandlebarMeshes(meshes, boundingBox);
    }
    
    // For all other component types, use the existing config-based approach
    const config = this.getConfigurationForType(componentType, category, subcategory);
    
    // The rest of the function remains the same...
    
    // Ensure we have a valid configuration
    if (!config) {
      console.warn(`No snap point configuration found for ${componentType}`);
      return this.generateDefaultPoints(boundingBox);
    }
    
    const points: AttachmentPoint[] = [];
    const size = boundingBox.getSize(new THREE.Vector3());
    const center = boundingBox.getCenter(new THREE.Vector3());
    
    // Generate points based on the configuration
    for (let i = 0; i < config.positions.length; i++) {
      const posConfig = config.positions[i];
      
      // Calculate position based on strategy
      let position: [number, number, number];
      let normal: [number, number, number];
      
      if (posConfig.strategy === 'relative') {
        // Relative positions are specified as percentages of the bounding box
        position = this.calculateRelativePosition(
          posConfig.position as string, 
          size, 
          center
        );
        normal = this.calculateRelativePosition(
          posConfig.normal as string, 
          new THREE.Vector3(2, 2, 2), 
          new THREE.Vector3(0, 0, 0)
        );
      } 
      else if (posConfig.strategy === 'absolute') {
        // Absolute positions are specified directly
        position = posConfig.position as [number, number, number];
        normal = posConfig.normal as [number, number, number];
      }
      else if (posConfig.strategy === 'mesh') {
        // Mesh-based positioning that finds nearest mesh surface
        const basePosition = this.calculateRelativePosition(
          typeof posConfig.position === 'string' ? posConfig.position : '0,0,0', 
          size, 
          center
        );
        
        // Find nearest point on actual mesh surfaces
        position = this.findNearestMeshPoint(
          basePosition, 
          meshes,
          posConfig.meshMatching || 'closest',
          posConfig.meshSearchRadius || 1.0
        );
        
        // Use provided normal or calculate based on mesh surface
        if (typeof posConfig.normal === 'string') {
          normal = this.calculateRelativePosition(
            posConfig.normal, 
            new THREE.Vector3(2, 2, 2), 
            new THREE.Vector3(0, 0, 0)
          );
        } else {
          normal = posConfig.normal as [number, number, number];
        }
      }
      else if (posConfig.strategy === 'detection') {
        // Feature detection based positioning (fallback to center if detection fails)
        const detectedPosition = this.detectFeaturePosition(
          posConfig.position as string,
          meshes,
          size
        );
        
        // Use detected position or fallback to center
        position = detectedPosition || [center.x, center.y, center.z];
        
        // Use provided normal or default to upward
        if (typeof posConfig.normal === 'string') {
          normal = this.calculateRelativePosition(
            posConfig.normal, 
            new THREE.Vector3(2, 2, 2), 
            new THREE.Vector3(0, 0, 0)
          );
        } else {
          normal = posConfig.normal as [number, number, number] || [0, 1, 0];
        }
      }
      else {
        // Default fallback
        position = [center.x, center.y, center.z];
        normal = [0, 1, 0];
      }
      
      // Generate quaternion from normal vector
      const normalVector = new THREE.Vector3(normal[0], normal[1], normal[2]);
      const upVector = new THREE.Vector3(0, 1, 0);
      const quaternion = new THREE.Quaternion();
      
      if (normalVector.length() > 0.001) {
        quaternion.setFromUnitVectors(upVector, normalVector.normalize());
      }
      
      // Create the attachment point
      const point: AttachmentPoint = {
        id: uuidv4(),
        position,
        rotation: [quaternion.x, quaternion.y, quaternion.z, quaternion.w],
        normal,
        name: posConfig.name,
        color: posConfig.color || this.getRandomColor(),
        auto: true, // Mark as automatically generated
        type: posConfig.type,
        ...(posConfig.radius !== undefined && { radius: posConfig.radius }),
        ...(posConfig.width !== undefined && { width: posConfig.width }),
        ...(posConfig.height !== undefined && { height: posConfig.height }),
        ...(posConfig.meshId !== undefined && { meshId: posConfig.meshId })
      };
      
      points.push(point);
    }
    
    return points;
  }
  
  /**
   * Find the nearest point on any mesh to the given position
   * This is a key improvement to ensure attachment points connect to actual meshes
   */
  private findNearestMeshPoint(
    position: [number, number, number],
    meshes: Record<string, THREE.Mesh>,
    meshMatching: 'closest' | 'largest' | 'specific' = 'closest',
    searchRadius: number = 1.0
  ): [number, number, number] {
    if (Object.keys(meshes).length === 0) {
      return position; // No meshes available
    }
    
    const posVector = new THREE.Vector3(...position);
    let candidateMeshes: THREE.Mesh[] = [];
    
    // Determine which meshes to consider
    if (meshMatching === 'largest') {
      // Sort by volume and take the largest
      candidateMeshes = Object.values(meshes).sort((a, b) => {
        const aBox = new THREE.Box3().setFromObject(a);
        const bBox = new THREE.Box3().setFromObject(b);
        const aSize = aBox.getSize(new THREE.Vector3());
        const bSize = bBox.getSize(new THREE.Vector3());
        const aVolume = aSize.x * aSize.y * aSize.z;
        const bVolume = bSize.x * bSize.y * bSize.z;
        return bVolume - aVolume;
      }).slice(0, 1); // Take only the largest mesh
    } else if (meshMatching === 'closest') {
      // Consider all meshes
      candidateMeshes = Object.values(meshes);
    } else {
      // For 'specific', we would need a meshId which we don't have here
      candidateMeshes = Object.values(meshes);
    }
    
    // Find the closest point on any candidate mesh
    let minDistance = Number.MAX_VALUE;
    let closestPoint: THREE.Vector3 | null = null;
    
    // Raycasting approach for more accurate mesh intersection
    const directions = [
      new THREE.Vector3(1, 0, 0),
      new THREE.Vector3(-1, 0, 0),
      new THREE.Vector3(0, 1, 0),
      new THREE.Vector3(0, -1, 0),
      new THREE.Vector3(0, 0, 1),
      new THREE.Vector3(0, 0, -1),
      new THREE.Vector3(1, 1, 1).normalize(),
      new THREE.Vector3(-1, 1, 1).normalize(),
      new THREE.Vector3(1, -1, 1).normalize(),
      new THREE.Vector3(1, 1, -1).normalize(),
      new THREE.Vector3(-1, -1, 1).normalize(),
      new THREE.Vector3(-1, 1, -1).normalize(),
      new THREE.Vector3(1, -1, -1).normalize(),
      new THREE.Vector3(-1, -1, -1).normalize()
    ];
    
    const raycaster = new THREE.Raycaster();
    
    // Try raycasting in multiple directions from our position
    for (const direction of directions) {
      raycaster.set(posVector, direction);
      
      for (const mesh of candidateMeshes) {
        const intersects = raycaster.intersectObject(mesh, false);
        
        if (intersects.length > 0) {
          const distance = intersects[0].distance;
          
          // Only consider points within our search radius
          if (distance < searchRadius && distance < minDistance) {
            minDistance = distance;
            closestPoint = intersects[0].point;
          }
        }
      }
      
      // Also try from the opposite direction
      raycaster.set(posVector.clone().add(direction.clone().multiplyScalar(searchRadius * 2)), direction.clone().negate());
      
      for (const mesh of candidateMeshes) {
        const intersects = raycaster.intersectObject(mesh, false);
        
        if (intersects.length > 0) {
          const distance = posVector.distanceTo(intersects[0].point);
          
          // Only consider points within our search radius
          if (distance < searchRadius && distance < minDistance) {
            minDistance = distance;
            closestPoint = intersects[0].point;
          }
        }
      }
    }
    
    // If we found a point on a mesh, use it
    if (closestPoint) {
      return [closestPoint.x, closestPoint.y, closestPoint.z];
    }
    
    // Fallback to checking distances to mesh centers if raycasting didn't find anything
    for (const mesh of candidateMeshes) {
      // Get mesh center
      const meshCenter = new THREE.Vector3();
      const meshBox = new THREE.Box3().setFromObject(mesh);
      meshBox.getCenter(meshCenter);
      
      const distance = posVector.distanceTo(meshCenter);
      if (distance < searchRadius && distance < minDistance) {
        minDistance = distance;
        closestPoint = meshCenter;
      }
    }
    
    // If we found a mesh center within range, use it
    if (closestPoint) {
      return [closestPoint.x, closestPoint.y, closestPoint.z];
    }
    
    // If no mesh was found within range, return the original position
    return position;
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
      name: `Attachment to ${mesh.name || 'unnamed mesh'}`,
      type: AttachmentPointType.STANDARD
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
  
  /**
   * Get the appropriate configuration for a component type, trying category and subcategory first
   */
  private getConfigurationForType(
    componentType: string,
    category?: string,
    subcategory?: string
  ): SnapPointConfig | undefined {
    // First try subcategory-specific config
    let config: SnapPointConfig | undefined = undefined;
    
    if (subcategory) {
      config = this.snapPointConfigs[subcategory.toLowerCase()];
      if (config) {
        console.log(`Using subcategory-specific config for ${subcategory}`);
        return config;
      }
    }
    
    // If no subcategory config, try category
    if (category) {
      config = this.snapPointConfigs[category.toLowerCase()];
      if (config) {
        console.log(`Using category-specific config for ${category}`);
        return config;
      }
    }
    
    // Finally fall back to component type
    config = this.snapPointConfigs[componentType.toLowerCase()];
    if (config) {
      console.log(`Using component-type config for ${componentType}`);
      return config;
    }
    
    // If still no config found, use the default
    config = this.snapPointConfigs['other'];
    if (config) {
      console.log(`No specific config found, using default config`);
      return config;
    }
    
    return undefined;
  }
  
  /**
   * Generate default attachment points based on the bounding box
   */
  private generateDefaultPoints(boundingBox: THREE.Box3): AttachmentPoint[] {
    console.log('Generating default attachment points based on bounding box');
    const center = boundingBox.getCenter(new THREE.Vector3());
    const size = boundingBox.getSize(new THREE.Vector3());
    
    // Generate basic attachment points at strategic locations
    return [
      // Top center
      this.createBasicAttachmentPoint([center.x, center.y + size.y/2, center.z], [0, 1, 0], 'Top', '#e74c3c'),
      
      // Bottom center
      this.createBasicAttachmentPoint([center.x, center.y - size.y/2, center.z], [0, -1, 0], 'Bottom', '#3498db'),
      
      // Front center
      this.createBasicAttachmentPoint([center.x, center.y, center.z + size.z/2], [0, 0, 1], 'Front', '#2ecc71'),
      
      // Back center
      this.createBasicAttachmentPoint([center.x, center.y, center.z - size.z/2], [0, 0, -1], 'Back', '#f39c12')
    ];
  }
  
  /**
   * Create a basic attachment point with the given parameters
   */
  private createBasicAttachmentPoint(
    position: [number, number, number],
    normal: [number, number, number],
    name: string,
    color: string
  ): AttachmentPoint {
    // Create quaternion from normal
    const normalVector = new THREE.Vector3(...normal);
    const upVector = new THREE.Vector3(0, 1, 0);
    const quaternion = new THREE.Quaternion();
    
    if (normalVector.length() > 0.001) {
      quaternion.setFromUnitVectors(upVector, normalVector.normalize());
    }
    
    return {
      id: uuidv4(),
      position,
      normal,
      rotation: [quaternion.x, quaternion.y, quaternion.z, quaternion.w],
      color,
      name,
      auto: true,
      type: AttachmentPointType.STANDARD
    };
  }
  
  /**
   * Calculate a position based on a relative string specification
   * Format can be: "x,y,z" or "left/center/right,top/middle/bottom,front/center/back"
   */
  private calculateRelativePosition(
    posStr: string,
    size: THREE.Vector3,
    center: THREE.Vector3
  ): [number, number, number] {
    // Handle numeric specification like "0.5,0,-1"
    if (/^-?\d*\.?\d+,-?\d*\.?\d+,-?\d*\.?\d+$/.test(posStr)) {
      const [x, y, z] = posStr.split(',').map(Number);
      return [
        center.x + x * (size.x / 2),
        center.y + y * (size.y / 2),
        center.z + z * (size.z / 2)
      ];
    }
    
    // Handle textual specification
    const parts = posStr.toLowerCase().split(',');
    let xPos = 0, yPos = 0, zPos = 0;
    
    // Handle X position (left/center/right)
    if (parts[0] === 'left') xPos = -1;
    else if (parts[0] === 'right') xPos = 1;
    else xPos = 0; // center
    
    // Handle Y position (top/middle/bottom)
    if (parts.length > 1) {
      if (parts[1] === 'top') yPos = 1;
      else if (parts[1] === 'bottom') yPos = -1;
      else yPos = 0; // middle
    }
    
    // Handle Z position (front/center/back)
    if (parts.length > 2) {
      if (parts[2] === 'front') zPos = 1;
      else if (parts[2] === 'back') zPos = -1;
      else zPos = 0; // center
    }
    
    // Calculate final position
    return [
      center.x + xPos * (size.x / 2),
      center.y + yPos * (size.y / 2),
      center.z + zPos * (size.z / 2)
    ];
  }
  
  /**
   * Detect feature positions based on special identifiers
   * This uses component-specific knowledge to identify special positions
   */
  private detectFeaturePosition(
    featureId: string,
    meshes: Record<string, THREE.Mesh>,
    size: THREE.Vector3
  ): [number, number, number] | null {
    // Convert meshes to array for easier processing
    const meshArray = Object.values(meshes);
    
    switch (featureId) {
      case 'dropouts':
        return this.findForkDropouts(meshArray, size);
        
      case 'spindle':
        if (meshArray.length > 0) {
          return this.findPedalSpindle(meshArray[0], size);
        }
        break;
        
      case 'wheel_center':
        for (const mesh of meshArray) {
          if (this.isWheelLike(mesh)) {
            return this.findWheelCenter(mesh);
          }
        }
        break;
      
      case 'seat_tube_top':
        // Find highest point of central tube for seat post attachment
        const sortedByHeight = [...meshArray].sort((a, b) => {
          const aBox = new THREE.Box3().setFromObject(a);
          const bBox = new THREE.Box3().setFromObject(b);
          return bBox.max.y - aBox.max.y; // Sort by highest point
        });
        
        if (sortedByHeight.length > 0) {
          const topMesh = sortedByHeight[0];
          const bbox = new THREE.Box3().setFromObject(topMesh);
          return [bbox.getCenter(new THREE.Vector3()).x, bbox.max.y, bbox.getCenter(new THREE.Vector3()).z];
        }
        break;
    }
    
    // If no special case was handled, return null
    return null;
  }
  
  /**
   * Generate a random color for attachment points
   */
  private getRandomColor(): string {
    // List of visually distinct colors
    const colors = [
      '#3498db', // blue
      '#2ecc71', // green
      '#e74c3c', // red
      '#f39c12', // orange
      '#9b59b6', // purple
      '#1abc9c', // teal
      '#d35400', // dark orange
      '#c0392b', // dark red
      '#2980b9', // dark blue
      '#8e44ad'  // dark purple
    ];
    
    // Return a random color from the list
    return colors[Math.floor(Math.random() * colors.length)];
  }
}

export default new SnapPointService(); 