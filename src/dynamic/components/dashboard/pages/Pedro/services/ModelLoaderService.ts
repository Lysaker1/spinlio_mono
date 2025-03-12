import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

interface ModelLoadOptions {
  normalizeModel?: boolean;
  autoCenter?: boolean;
  computeBoundingBox?: boolean;
  wireframe?: boolean;
  targetSize?: number; // Target size for model normalization
  maintainAspectRatio?: boolean; // Keep original proportions
}

interface ModelLoadResult {
  object: THREE.Group;
  meshes: any[];
  boundingBox: THREE.Box3;
  center: THREE.Vector3;
  dimensions: THREE.Vector3;
  originalDimensions: {
    center: THREE.Vector3;
    size: THREE.Vector3;
  };
  scale: number;
  normalizedMatrix?: THREE.Matrix4; // Transformation matrix for normalization
}

interface ComponentTypeDetectionResult {
  type: string;
  confidence: number;
  reason: string;
}

// Create DRACOLoader to reuse
const createDRACOLoader = () => {
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.5/');
  dracoLoader.setDecoderConfig({ type: 'js' });
  return dracoLoader;
};

/**
 * Service for loading and processing 3D models
 */
export class ModelLoaderService {
  private loader: GLTFLoader;
  private cachedModels: Map<string, ModelLoadResult>;
  
  constructor() {
    this.loader = new GLTFLoader();
    const dracoLoader = createDRACOLoader();
    this.loader.setDRACOLoader(dracoLoader);
    this.cachedModels = new Map();
  }
  
  /**
   * Load a model from a file
   */
  public loadModelFromFile(
    file: File, 
    options: ModelLoadOptions = {
      normalizeModel: true,
      autoCenter: true,
      computeBoundingBox: true,
      wireframe: false,
      targetSize: 5,
      maintainAspectRatio: true
    }
  ): Promise<ModelLoadResult> {
    const url = URL.createObjectURL(file);
    const fileId = `${file.name}-${file.size}-${file.lastModified}`;
    
    // Check if we have this model cached
    if (this.cachedModels.has(fileId) && options.wireframe === false) {
      console.log('Using cached model:', fileId);
      return Promise.resolve(this.cachedModels.get(fileId)!);
    }
    
    console.log(`Loading model: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)}MB)`);
    
    return new Promise((resolve, reject) => {
      this.loader.load(
        url,
        (gltf) => {
          try {
            console.log('Model loaded successfully, processing...');
            // Process and normalize the model
            const result = this.processModel(gltf, options);
            
            // Cache the result for future use (non-wireframe only)
            if (options.wireframe === false) {
              this.cachedModels.set(fileId, result);
            }
            
            resolve(result);
          } catch (error) {
            console.error('Error processing model:', error);
            reject(new Error(`Failed to process model: ${(error as Error).message}`));
          } finally {
            // Clean up the URL
            URL.revokeObjectURL(url);
          }
        },
        (progress) => {
          // Optional progress callback
          if (progress.lengthComputable) {
            const percent = Math.round((progress.loaded / progress.total) * 100);
            console.log(`Loading progress: ${percent}%`);
          }
        },
        (error) => {
          console.error('Error loading model:', error);
          URL.revokeObjectURL(url);
          reject(new Error(`Failed to load model: ${(error as Error).message || 'Unknown error'}`));
        }
      );
    });
  }
  
  /**
   * Process the loaded model - center, normalize, and analyze
   */
  private processModel(gltf: any, options: ModelLoadOptions): ModelLoadResult {
    console.log('Processing model with options:', options);
    const scene = gltf.scene;
    
    // First, sanitize the model by ensuring it has proper names and materials
    this.sanitizeModel(scene);
    
    // Compute bounding box for the original model
    const originalBox = new THREE.Box3().setFromObject(scene);
    
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
    
    // Normalize the model if requested
    let scale = 1.0;
    const normalizeMatrix = new THREE.Matrix4();
    
    if (options.normalizeModel) {
      // Calculate scale based on the largest dimension
      const maxDim = Math.max(originalSize.x, originalSize.y, originalSize.z);
      const targetSize = options.targetSize || 5;
      
      if (maxDim === 0) {
        console.warn('Model has zero dimension, using default scale');
        scale = 1.0;
      } else {
        // Normalize to the target size
        scale = targetSize / maxDim;
        
        // Prevent extreme scaling
        if (scale > 1000) scale = 1000;
        if (scale < 0.001) scale = 0.001;
      }
      
      console.log(`Normalizing model with scale: ${scale}`);
      
      // Apply scale
      scene.scale.set(scale, scale, scale);
      
      // Update the normalization matrix
      normalizeMatrix.makeScale(scale, scale, scale);
    }
    
    // Center the model if requested
    if (options.autoCenter) {
      console.log('Centering model at origin');
      
      // Instead of moving the whole model, we'll create a parent group to center it
      // This preserves the original model structure
      const offset = originalCenter.clone().negate().multiplyScalar(scale);
      scene.position.copy(offset);
      
      // Update the normalization matrix
      const translationMatrix = new THREE.Matrix4().makeTranslation(
        offset.x, offset.y, offset.z
      );
      normalizeMatrix.multiply(translationMatrix);
    }
    
    // Process all meshes in the model
    const meshes: any[] = [];
    let foundMeshes = 0;
    
    console.log('Processing model meshes...');
    scene.traverse((child: THREE.Object3D) => {
      // Ensure everything is visible
      child.visible = true;
      
      if (child instanceof THREE.Mesh) {
        foundMeshes++;
        
        // Generate a more descriptive name when missing
        const meshName = child.name || 
                       (child.parent && child.parent.name ? `${child.parent.name}_part${foundMeshes}` : 
                       `mesh_${foundMeshes}`);
        
        // Set unique id and metadata
        child.userData.id = child.uuid;
        child.userData.selectable = true;
        child.userData.originalName = child.name || '';
        child.userData.meshIndex = foundMeshes;
        child.userData.vertexCount = child.geometry.attributes.position ? 
                                   child.geometry.attributes.position.count : 0;
        
        // Basic mesh setup
        child.castShadow = true;
        child.receiveShadow = true;
        
        // Fix missing normals - important for proper lighting
        if (!child.geometry.attributes.normal) {
          console.log(`Computing missing normals for mesh: ${meshName}`);
          child.geometry.computeVertexNormals();
        }
        
        // Process materials
        if (child.material) {
          this.processMaterial(child.material, options.wireframe);
        }
        
        // Calculate individual mesh bounding box
        const meshBox = new THREE.Box3().setFromObject(child);
        const meshSize = meshBox.getSize(new THREE.Vector3());
        const meshCenter = meshBox.getCenter(new THREE.Vector3());
        
        // Calculate mesh volume (for component detection)
        const volume = meshSize.x * meshSize.y * meshSize.z;
        
        // Add to meshes array with detailed information
        meshes.push({
          id: child.uuid,
          name: meshName,
          index: foundMeshes,
          object: child,
          position: [child.position.x, child.position.y, child.position.z],
          scale: [child.scale.x, child.scale.y, child.scale.z],
          rotation: [child.quaternion.x, child.quaternion.y, child.quaternion.z, child.quaternion.w],
          vertexCount: child.userData.vertexCount,
          boundingBox: {
            min: [meshBox.min.x, meshBox.min.y, meshBox.min.z],
            max: [meshBox.max.x, meshBox.max.y, meshBox.max.z]
          },
          dimensions: {
            width: meshSize.x,
            height: meshSize.y,
            depth: meshSize.z
          },
          volume: volume,
          isSubMesh: !!child.parent && child.parent !== scene
        });
      }
    });
    
    console.log(`Found ${foundMeshes} meshes in the model`);
    
    // Recalculate the bounding box after modifications
    const finalBox = new THREE.Box3().setFromObject(scene);
    const finalSize = finalBox.getSize(new THREE.Vector3());
    const finalCenter = finalBox.getCenter(new THREE.Vector3());
    
    console.log('Final dimensions:', {
      size: [finalSize.x, finalSize.y, finalSize.z],
      center: [finalCenter.x, finalCenter.y, finalCenter.z]
    });
    
    return {
      object: scene,
      meshes,
      boundingBox: finalBox,
      center: finalCenter,
      dimensions: finalSize,
      originalDimensions,
      scale,
      normalizedMatrix: normalizeMatrix
    };
  }
  
  /**
   * Sanitize the model - ensure names, fix issues
   */
  private sanitizeModel(model: THREE.Object3D): void {
    let index = 0;
    
    model.traverse((node) => {
      // Ensure all objects have names
      if (!node.name || node.name.trim() === '') {
        // Generate meaningful names based on node type
        if (node instanceof THREE.Mesh) {
          node.name = `Mesh_${index++}`;
        } else if (node instanceof THREE.Group) {
          node.name = `Group_${index++}`;
        } else {
          node.name = `Node_${index++}`;
        }
      }
      
      // Ensure all transforms are valid
      if (node.position && (
          isNaN(node.position.x) || 
          isNaN(node.position.y) || 
          isNaN(node.position.z) ||
          !isFinite(node.position.x) || 
          !isFinite(node.position.y) || 
          !isFinite(node.position.z)
      )) {
        console.warn(`Fixed invalid position on node: ${node.name}`);
        node.position.set(0, 0, 0);
      }
      
      if (node.scale && (
          isNaN(node.scale.x) || 
          isNaN(node.scale.y) || 
          isNaN(node.scale.z) ||
          !isFinite(node.scale.x) || 
          !isFinite(node.scale.y) || 
          !isFinite(node.scale.z) ||
          node.scale.x === 0 || 
          node.scale.y === 0 || 
          node.scale.z === 0
      )) {
        console.warn(`Fixed invalid scale on node: ${node.name}`);
        node.scale.set(1, 1, 1);
      }
    });
  }
  
  /**
   * Process material settings
   */
  private processMaterial(material: THREE.Material | THREE.Material[], wireframe: boolean = false) {
    if (Array.isArray(material)) {
      material.forEach(mat => this.processSingleMaterial(mat, wireframe));
    } else {
      this.processSingleMaterial(material, wireframe);
    }
  }
  
  /**
   * Process a single material
   */
  private processSingleMaterial(material: THREE.Material, wireframe: boolean) {
    // Set wireframe if requested
    if (wireframe && 'wireframe' in material) {
      (material as THREE.MeshBasicMaterial).wireframe = true;
    }
    
    // Ensure we see back faces
    material.side = THREE.DoubleSide;
    
    // Fix transparency issues
    if ('transparent' in material && 'opacity' in material && material.opacity < 1.0) {
      (material as THREE.MeshBasicMaterial).transparent = true;
    }
    
    // Force material update
    material.needsUpdate = true;
  }
  
  /**
   * Detect the likely component type based on model characteristics
   */
  public detectComponentType(
    meshes: any[], 
    dimensions: THREE.Vector3
  ): ComponentTypeDetectionResult {
    // Calculate aspect ratios
    const aspectRatioXY = dimensions.x / dimensions.y;
    const aspectRatioYZ = dimensions.y / dimensions.z;
    const aspectRatioXZ = dimensions.x / dimensions.z;
    
    // Count meshes
    const meshCount = meshes.length;
    
    // Component detection logic
    if (Math.abs(aspectRatioXY - 1) < 0.3 && 
        Math.abs(aspectRatioXZ - 1) < 0.3 && 
        meshCount >= 1) {
      // Circular, flat object with approximate equal X and Z dimensions
      return {
        type: 'wheel',
        confidence: 0.85,
        reason: 'Circular shape with approximately equal width and depth'
      };
    } 
    else if (dimensions.y > dimensions.x * 3 && dimensions.y > dimensions.z * 3) {
      // Very tall and thin object
      return {
        type: 'seat_post',
        confidence: 0.8,
        reason: 'Elongated vertical shape (height much greater than width and depth)'
      };
    }
    else if (dimensions.x > dimensions.y * 3 && dimensions.x > dimensions.z * 2) {
      // Very wide object
      return {
        type: 'handlebar',
        confidence: 0.7,
        reason: 'Wide horizontal shape (width much greater than height and depth)'
      };
    }
    else if (meshCount > 5 && 
             dimensions.x > dimensions.y * 1.5 && 
             dimensions.x > dimensions.z * 1.5) {
      // Complex object with many meshes, wider than tall
      return {
        type: 'frame',
        confidence: 0.6,
        reason: 'Complex shape with multiple parts and extended length'
      };
    }
    
    // Default
    return {
      type: 'other',
      confidence: 0.4,
      reason: 'No specific characteristics matched known component types'
    };
  }
  
  /**
   * Clear the model cache
   */
  public clearCache(): void {
    this.cachedModels.clear();
  }
}

export default new ModelLoaderService(); 