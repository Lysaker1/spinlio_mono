import * as THREE from 'three';
import { AttachmentPoint } from '../components/AttachmentPointHelper';
import { createAnalyzer } from './analyzers';

/**
 * Analyze a handlebar mesh to find attachment points
 * This is now a wrapper function that calls the new modular analyzer system
 * @param meshes All meshes in the model
 * @param boundingBox The model's bounding box in world space
 * @returns Array of attachment points
 */
export function analyzeHandlebarMeshes(
  meshes: Record<string, THREE.Mesh>, 
  boundingBox: THREE.Box3
): AttachmentPoint[] {
  console.log("analyzeHandlebarMeshes called - using modular analyzer system");
  
  // Create a handlebar analyzer
  const analyzer = createAnalyzer('handlebar');
  
  // Analyze the meshes and return attachment points
  return analyzer.analyze(meshes, boundingBox);
} 