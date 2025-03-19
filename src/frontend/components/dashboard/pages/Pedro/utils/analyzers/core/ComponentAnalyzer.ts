import * as THREE from 'three';
import { v4 as uuidv4 } from 'uuid';
import { AttachmentPoint } from '../../../components/AttachmentPointHelper';
import { AttachmentPointType } from '../../../constants/SnapPointConfigurations';
import * as GeometryAnalyzer from './GeometryAnalyzer';

/**
 * Base class for component analyzers
 * Contains shared functionality for analyzing 3D components and generating attachment points
 */
export abstract class ComponentAnalyzer {
  /**
   * Analyze a component and return appropriate attachment points
   * To be implemented by specific component analyzers
   * @param meshes All meshes in the model
   * @param boundingBox The overall bounding box of the model
   * @returns Array of attachment points
   */
  public abstract analyze(
    meshes: Record<string, THREE.Mesh>,
    boundingBox: THREE.Box3
  ): AttachmentPoint[];
  
  /**
   * Create a standard attachment point
   * @param options Options for creating the attachment point
   * @returns The created attachment point
   */
  protected createAttachmentPoint(options: {
    position: [number, number, number];
    normal: [number, number, number];
    name: string;
    color?: string;
    type: AttachmentPointType;
    width: number;
    height: number;
    meshId?: string;
    rotation?: [number, number, number, number];
  }): AttachmentPoint {
    return {
      id: uuidv4(),
      position: options.position,
      normal: options.normal,
      name: options.name,
      color: options.color || '#27ae60',
      type: options.type,
      width: options.width,
      height: options.height,
      meshId: options.meshId,
      rotation: options.rotation || [0, 0, 0, 1],
      auto: true
    };
  }
  
  /**
   * Create a tube attachment point, which wraps around a cylindrical surface
   * @param options Options for creating the tube attachment point
   * @returns The created attachment point
   */
  protected createTubeAttachmentPoint(options: {
    position: [number, number, number];
    normal: [number, number, number];
    name: string;
    meshId?: string;
    radius: number;
    side: 'left' | 'right' | 'top' | 'bottom';
    mainAxis: 'x' | 'y' | 'z';
  }): AttachmentPoint {
    // Create a tube attachment point
    // This is specialized for wrapping a cylindrical surface
    
    // Calculate width and height based on tube radius
    // Width = half the circumference (π*r) for about 180° wrap
    const width = Math.PI * options.radius;
    
    // Height usually 1.5-2x the radius for good coverage
    const height = options.radius * 1.5;
    
    // Store side and main axis info in the name for reference
    const fullName = `${options.name} (${options.side}, ${options.mainAxis}-axis)`;
    
    return {
      id: uuidv4(),
      position: options.position,
      normal: options.normal,
      name: fullName,
      color: '#e74c3c',
      type: AttachmentPointType.TUBE_OUTER,
      width: width,
      height: height,
      radius: options.radius,
      depth: options.radius * 5,
      meshId: options.meshId,
      rotation: [0, 0, 0, 1],
      auto: true
    };
  }
  
  /**
   * Log attachment points for debugging
   * @param attachmentPoints Array of attachment points
   */
  protected logAttachmentPoints(attachmentPoints: AttachmentPoint[]): void {
    console.log(`Generated ${attachmentPoints.length} attachment points:`);
    attachmentPoints.forEach((point, index) => {
      console.log(`[${index}] ${point.name}: pos=(${point.position[0].toFixed(2)}, ${point.position[1].toFixed(2)}, ${point.position[2].toFixed(2)}), type=${point.type}`);
    });
  }
} 