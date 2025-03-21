import * as THREE from 'three';

interface NormalizationOptions {
  targetSize?: number;
  maintainAspectRatio?: boolean;
  autoCenter?: boolean;
  alignToAxis?: boolean;
}

interface NormalizationResult {
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
 * Utility class for normalizing 3D models for consistent display
 */
export class ModelNormalizer {
  /**
   * Normalize a 3D model to fit within a standard size
   * 
   * @param model The 3D model to normalize
   * @param options Normalization options
   * @returns The normalized model and transformation data
   */
  static normalizeModel(
    model: THREE.Object3D,
    options: NormalizationOptions = {
      targetSize: 5,
      maintainAspectRatio: true,
      autoCenter: true,
      alignToAxis: false
    }
  ): NormalizationResult {
    console.log('Normalizing model with options:', options);
    
    // Get the original bounding box
    const originalBox = new THREE.Box3().setFromObject(model);
    
    // Handle empty or invalid models
    if (originalBox.isEmpty() || 
        !isFinite(originalBox.min.x) || 
        !isFinite(originalBox.max.x)) {
      console.warn('Model has empty or invalid bounding box');
      
      // Create a default bounding box
      originalBox.set(
        new THREE.Vector3(-0.5, -0.5, -0.5),
        new THREE.Vector3(0.5, 0.5, 0.5)
      );
    }
    
    const originalSize = originalBox.getSize(new THREE.Vector3());
    const originalCenter = originalBox.getCenter(new THREE.Vector3());
    
    console.log('Original dimensions:', {
      size: [originalSize.x, originalSize.y, originalSize.z],
      center: [originalCenter.x, originalCenter.y, originalCenter.z]
    });
    
    // Store original dimensions
    const originalDimensions = {
      size: originalSize.clone(),
      center: originalCenter.clone()
    };
    
    // Create a transformation matrix
    const transformMatrix = new THREE.Matrix4();
    
    // Calculate scale factor
    let scale = 1.0;
    const targetSize = options.targetSize || 5;
    
    if (options.maintainAspectRatio) {
      // Use the largest dimension to determine scale
      const maxDim = Math.max(originalSize.x, originalSize.y, originalSize.z);
      
      if (maxDim === 0) {
        console.warn('Model has zero dimension, using default scale');
        scale = 1.0;
      } else {
        scale = targetSize / maxDim;
      }
    } else {
      // Scale each dimension independently to fit the target size
      const scaleX = originalSize.x !== 0 ? targetSize / originalSize.x : 1;
      const scaleY = originalSize.y !== 0 ? targetSize / originalSize.y : 1;
      const scaleZ = originalSize.z !== 0 ? targetSize / originalSize.z : 1;
      
      // Use the smallest scale to ensure it fits within the target size
      scale = Math.min(scaleX, scaleY, scaleZ);
    }
    
    // Clamp scale to reasonable values
    if (scale > 1000) scale = 1000;
    if (scale < 0.001) scale = 0.001;
    
    console.log(`Using scale factor: ${scale}`);
    
    // Apply scale to the transformation matrix
    transformMatrix.makeScale(scale, scale, scale);
    
    // Center the model if requested
    if (options.autoCenter) {
      const translationMatrix = new THREE.Matrix4().makeTranslation(
        -originalCenter.x,
        -originalCenter.y,
        -originalCenter.z
      );
      
      // Apply translation before scaling
      transformMatrix.premultiply(translationMatrix);
    }
    
    // Apply the transformation to the model
    model.applyMatrix4(transformMatrix);
    
    // Calculate the new bounding box
    const newBox = new THREE.Box3().setFromObject(model);
    const newSize = newBox.getSize(new THREE.Vector3());
    const newCenter = newBox.getCenter(new THREE.Vector3());
    
    console.log('New dimensions:', {
      size: [newSize.x, newSize.y, newSize.z],
      center: [newCenter.x, newCenter.y, newCenter.z]
    });
    
    return {
      object: model,
      normalizedMatrix: transformMatrix,
      scale,
      center: newCenter,
      dimensions: newSize,
      originalDimensions
    };
  }
  
  /**
   * Create a transformation matrix to transform a point from local model space to normalized space
   * 
   * @param normalizedMatrix The matrix used to normalize the model
   * @returns The transformation matrix
   */
  static createPointTransformMatrix(normalizedMatrix: THREE.Matrix4): THREE.Matrix4 {
    return normalizedMatrix.clone();
  }
  
  /**
   * Transform a point from original model space to normalized model space
   * 
   * @param point The point to transform
   * @param normalizedMatrix The normalization matrix
   * @returns The transformed point
   */
  static transformPoint(
    point: [number, number, number], 
    normalizedMatrix: THREE.Matrix4
  ): [number, number, number] {
    const threePoint = new THREE.Vector3(point[0], point[1], point[2]);
    threePoint.applyMatrix4(normalizedMatrix);
    
    return [threePoint.x, threePoint.y, threePoint.z];
  }
  
  /**
   * Create a clone of the model with transformation applied
   * 
   * @param model The original model
   * @param options Normalization options
   * @returns A new normalized model
   */
  static createNormalizedClone(
    model: THREE.Object3D,
    options: NormalizationOptions = {
      targetSize: 5,
      maintainAspectRatio: true,
      autoCenter: true
    }
  ): NormalizationResult {
    // Create a deep clone of the model
    const clone = model.clone();
    
    // Return the normalized model
    return this.normalizeModel(clone, options);
  }
  
  /**
   * Align a model to its principal axes
   * This can help with orientation issues in some models
   * 
   * @param model The model to align
   * @returns The aligned model
   */
  static alignToPrincipalAxes(model: THREE.Object3D): THREE.Object3D {
    // This is a placeholder for future implementation
    // Principal Component Analysis would be used here to find the major axes
    console.warn('Principal axis alignment not yet implemented');
    
    return model;
  }
}

export default ModelNormalizer; 