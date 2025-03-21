import * as THREE from 'three';
import { AttachmentPoint } from '../components/AttachmentPointHelper';

/**
 * Types for model loading
 */
export interface ModelLoadOptions {
  normalizeModel?: boolean;
  autoCenter?: boolean;
  computeBoundingBox?: boolean;
  wireframe?: boolean;
  targetSize?: number;
  maintainAspectRatio?: boolean;
}

export interface ModelLoadResult {
  object: THREE.Group;
  meshes: ModelMeshInfo[];
  boundingBox: THREE.Box3;
  center: THREE.Vector3;
  dimensions: THREE.Vector3;
  originalDimensions: {
    center: THREE.Vector3;
    size: THREE.Vector3;
  };
  scale: number;
  normalizedMatrix?: THREE.Matrix4;
}

export interface ModelMeshInfo {
  id: string;
  name: string;
  index: number;
  object: THREE.Mesh;
  position: [number, number, number];
  scale: [number, number, number];
  rotation: [number, number, number, number];
  vertexCount: number;
  boundingBox: {
    min: [number, number, number];
    max: [number, number, number];
  };
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  volume: number;
  isSubMesh: boolean;
}

export interface ModelInfo {
  size: THREE.Vector3;
  center: THREE.Vector3;
  scale: number;
  meshes: ModelMeshInfo[];
  meshCount: number;
  dimensions: {
    width: string;
    height: string;
    depth: string;
  };
  originalDimensions: {
    center: THREE.Vector3;
    size: THREE.Vector3;
  };
  suggestedComponentType: string;
  typeConfidence: number;
  typeReason: string;
  normalizedMatrix?: THREE.Matrix4;
}

/**
 * Types for component detection
 */
export interface ComponentTypeDetectionResult {
  type: string;
  confidence: number;
  reason: string;
}

/**
 * Types for snap points
 */
export interface SnapPointConfig {
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
 * Types for model export
 */
export interface ModelExportData {
  modelInfo: ModelInfo;
  componentType: string;
  attachmentPoints: AttachmentPoint[];
  metadata?: Record<string, any>;
}

/**
 * Types for 3D operations
 */
export interface NormalizationOptions {
  targetSize?: number;
  maintainAspectRatio?: boolean;
  autoCenter?: boolean;
  alignToAxis?: boolean;
}

export interface NormalizationResult {
  object: THREE.Object3D;
  normalizedMatrix: THREE.Matrix4;
  scale: number;
  center: THREE.Vector3;
  dimensions: THREE.Vector3;
  originalDimensions: {
    center: THREE.Vector3;
    size: THREE.Vector3;
  };
}

/**
 * Types for UI state
 */
export interface Measurements {
  width: number;
  height: number;
  depth: number;
}

export type AttachmentMode = 'manual' | 'automatic' | 'mesh';
export type ViewMode = 'normal' | 'wireframe' | 'x-ray';

export default {
  // Export types to be used elsewhere
}; 