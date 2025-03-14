import { useState, useCallback, useEffect } from 'react';
import * as THREE from 'three';
import { v4 as uuidv4 } from 'uuid';
import { AttachmentPoint } from '../components/AttachmentPointHelper';
import { AttachmentPointType } from '../constants/SnapPointConfigurations';
import snapPointService from '../services/SnapPointService';

interface UseSnapPointsOptions {
  componentType?: string;
  onPointAdded?: (point: AttachmentPoint) => void;
  onPointRemoved?: (pointId: string) => void;
  onPointUpdated?: (point: AttachmentPoint) => void;
}

/**
 * Custom hook for managing attachment/snap points
 */
export function useSnapPoints(options: UseSnapPointsOptions = {}) {
  const [points, setPoints] = useState<AttachmentPoint[]>([]);
  const [selectedPointId, setSelectedPointId] = useState<string | null>(null);
  const [attachmentMode, setAttachmentMode] = useState<'manual' | 'automatic' | 'mesh'>('manual');
  
  // Add a new attachment point
  const addPoint = useCallback((point: Partial<AttachmentPoint> = {}) => {
    // Create a new attachment point with defaults + provided data
    const newPoint: AttachmentPoint = {
      id: point.id || uuidv4(),
      position: point.position || [0, 0, 0],
      rotation: point.rotation || [0, 0, 0, 1],
      normal: point.normal || [0, 1, 0],
      color: point.color || '#00a0ff',
      type: point.type || AttachmentPointType.STANDARD,
      ...(point.name && { name: point.name }),
      ...(point.auto !== undefined && { auto: point.auto }),
      ...(point.meshId && { meshId: point.meshId }),
      ...(point.size !== undefined && { size: point.size }),
      ...(point.radius !== undefined && { radius: point.radius }),
      ...(point.width !== undefined && { width: point.width }),
      ...(point.height !== undefined && { height: point.height }),
      ...(point.depth !== undefined && { depth: point.depth }),
    };
    
    // Log the actual new point being added to confirm it has the correct properties
    console.log(`Adding new attachment point with type: ${newPoint.type}, radius: ${newPoint.radius}, depth: ${newPoint.depth}`);
    
    setPoints(prev => [...prev, newPoint]);
    setSelectedPointId(newPoint.id);
    
    // Call optional callback
    if (options.onPointAdded) {
      options.onPointAdded(newPoint);
    }
    
    return newPoint;
  }, [points.length, options.onPointAdded]);
  
  // Update an existing attachment point
  const updatePoint = useCallback((updatedPoint: AttachmentPoint) => {
    setPoints(prev => 
      prev.map(point => 
        point.id === updatedPoint.id ? updatedPoint : point
      )
    );
    
    // Call optional callback
    if (options.onPointUpdated) {
      options.onPointUpdated(updatedPoint);
    }
  }, [options.onPointUpdated]);
  
  // Remove an attachment point
  const removePoint = useCallback((pointId: string) => {
    setPoints(prev => prev.filter(point => point.id !== pointId));
    
    if (selectedPointId === pointId) {
      setSelectedPointId(null);
    }
    
    // Call optional callback
    if (options.onPointRemoved) {
      options.onPointRemoved(pointId);
    }
  }, [selectedPointId, options.onPointRemoved]);
  
  // Clear all attachment points
  const clearPoints = useCallback(() => {
    setPoints([]);
    setSelectedPointId(null);
  }, []);
  
  // Generate automatic attachment points based on component type
  const generateAutomaticPoints = useCallback((
    componentType: string,
    meshes: Record<string, THREE.Mesh>,
    boundingBox: THREE.Box3,
    componentCategory?: string,
    componentSubcategory?: string
  ) => {
    console.log(`Generating automatic attachment points for ${componentType}`);
    if (componentCategory) {
      console.log(`Category: ${componentCategory}`);
    }
    if (componentSubcategory) {
      console.log(`Subcategory: ${componentSubcategory}`);
    }
    
    // Use service to generate points
    const autoPoints = snapPointService.generateAttachmentPoints(
      componentType,
      meshes,
      boundingBox,
      componentCategory,
      componentSubcategory
    );
    
    // Add all generated points
    setPoints(prev => [...prev, ...autoPoints]);
    
    // Call optional callbacks for each point
    if (options.onPointAdded) {
      const callback = options.onPointAdded;
      autoPoints.forEach(point => callback(point));
    }
    
    return autoPoints;
  }, [options.onPointAdded]);
  
  // Create an attachment point from a mesh and hit point
  const createMeshAttachmentPoint = useCallback((
    mesh: THREE.Mesh,
    hitPoint?: THREE.Vector3,
    faceNormal?: THREE.Vector3
  ) => {
    // Use service to create point
    const point = snapPointService.createMeshAttachmentPoint(
      mesh,
      hitPoint,
      faceNormal
    );
    
    // Add the point
    setPoints(prev => [...prev, point]);
    setSelectedPointId(point.id);
    
    // Call optional callback
    if (options.onPointAdded) {
      options.onPointAdded(point);
    }
    
    return point;
  }, [options.onPointAdded]);
  
  // Import points from an external source (e.g., file)
  const importPoints = useCallback((newPoints: AttachmentPoint[]) => {
    // Ensure all points have valid IDs
    const validatedPoints = newPoints.map(point => ({
      ...point,
      id: point.id || uuidv4()
    }));
    
    setPoints(validatedPoints);
    
    // Call optional callbacks for each point
    if (options.onPointAdded) {
      const callback = options.onPointAdded;
      validatedPoints.forEach(point => callback(point));
    }
  }, [options.onPointAdded]);
  
  // Export points to a format suitable for saving
  const exportPoints = useCallback(() => {
    return points.map(point => ({
      ...point,
      // Optionally transform or clean up data for export
    }));
  }, [points]);
  
  // Apply a transformation matrix to all points
  const transformPoints = useCallback((matrix: THREE.Matrix4) => {
    setPoints(prev => 
      prev.map(point => {
        // Create a Vector3 from position
        const pos = new THREE.Vector3(
          point.position[0],
          point.position[1],
          point.position[2]
        );
        
        // Apply matrix
        pos.applyMatrix4(matrix);
        
        // Create a new point with transformed position
        return {
          ...point,
          position: [pos.x, pos.y, pos.z]
        };
      })
    );
  }, []);
  
  return {
    points,
    selectedPointId,
    setSelectedPointId,
    addPoint,
    updatePoint,
    removePoint,
    clearPoints,
    generateAutomaticPoints,
    createMeshAttachmentPoint,
    importPoints,
    exportPoints,
    transformPoints,
    attachmentMode,
    setAttachmentMode
  };
}

export default useSnapPoints; 