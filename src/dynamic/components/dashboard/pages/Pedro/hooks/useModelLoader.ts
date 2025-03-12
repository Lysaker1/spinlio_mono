import { useState, useEffect, useCallback, useRef } from 'react';
import * as THREE from 'three';
import modelLoaderService from '../services/ModelLoaderService';

interface ModelLoadOptions {
  normalizeModel?: boolean;
  autoCenter?: boolean;
  computeBoundingBox?: boolean;
  wireframe?: boolean;
  targetSize?: number;
  maintainAspectRatio?: boolean;
}

interface ModelInfo {
  size: THREE.Vector3;
  center: THREE.Vector3;
  scale: number;
  meshes: any[];
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

interface ModelLoaderState {
  file: File | null;
  modelLoaded: boolean;
  loading: boolean;
  error: string | null;
  progress: number;
  modelInfo: ModelInfo | null;
}

/**
 * Custom hook for loading and processing 3D models
 */
export function useModelLoader(initialOptions: ModelLoadOptions = {}) {
  const defaultOptions: ModelLoadOptions = {
    normalizeModel: true,
    autoCenter: true,
    computeBoundingBox: true,
    wireframe: false,
    targetSize: 5,
    maintainAspectRatio: true,
    ...initialOptions
  };
  
  const [state, setState] = useState<ModelLoaderState>({
    file: null,
    modelLoaded: false,
    loading: false,
    error: null,
    progress: 0,
    modelInfo: null
  });
  
  const [options, setOptions] = useState<ModelLoadOptions>(defaultOptions);
  const loadingFileRef = useRef<File | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  
  // Load model function
  const loadModel = useCallback((file: File, loadOptions?: ModelLoadOptions) => {
    // Skip if we're already loading this file
    if (loadingFileRef.current === file) return;
    
    // Set loading state
    setState(prev => ({ 
      ...prev, 
      file, 
      loading: true, 
      error: null, 
      progress: 0,
      modelLoaded: false 
    }));
    
    loadingFileRef.current = file;
    
    // Merge options
    const mergedOptions = { ...options, ...loadOptions };
    
    console.log(`Loading model: ${file.name} with options:`, mergedOptions);
    
    // Load model using service
    modelLoaderService.loadModelFromFile(file, mergedOptions)
      .then(result => {
        // Store model in ref
        modelRef.current = result.object;
        
        // Parse type detection result
        const typeDetection = modelLoaderService.detectComponentType(
          result.meshes,
          result.dimensions
        );
        
        // Create model info
        const modelInfo: ModelInfo = {
          size: result.dimensions,
          center: result.center,
          scale: result.scale,
          meshes: result.meshes,
          meshCount: result.meshes.length,
          dimensions: {
            width: result.dimensions.x.toFixed(2),
            height: result.dimensions.y.toFixed(2),
            depth: result.dimensions.z.toFixed(2)
          },
          originalDimensions: result.originalDimensions,
          suggestedComponentType: typeDetection.type,
          typeConfidence: typeDetection.confidence,
          typeReason: typeDetection.reason,
          normalizedMatrix: result.normalizedMatrix
        };
        
        // Update state
        setState(prev => ({
          ...prev,
          loading: false,
          modelLoaded: true,
          progress: 100,
          modelInfo
        }));
        
        console.log('Model loaded successfully:', modelInfo);
      })
      .catch(error => {
        console.error('Error loading model:', error);
        
        setState(prev => ({
          ...prev,
          loading: false,
          error: error.message || 'Failed to load model',
          progress: 0
        }));
        
        loadingFileRef.current = null;
      });
  }, [options]);
  
  // Reset function
  const resetModel = useCallback(() => {
    setState({
      file: null,
      modelLoaded: false,
      loading: false,
      error: null,
      progress: 0,
      modelInfo: null
    });
    
    loadingFileRef.current = null;
    modelRef.current = null;
  }, []);
  
  // Update options
  const updateOptions = useCallback((newOptions: Partial<ModelLoadOptions>) => {
    setOptions(prev => ({ ...prev, ...newOptions }));
  }, []);
  
  // Reload current file with new options
  const reloadModel = useCallback(() => {
    if (state.file) {
      loadModel(state.file);
    }
  }, [state.file, loadModel]);
  
  // Cleanup when component unmounts
  useEffect(() => {
    return () => {
      if (modelRef.current) {
        // Dispose of geometries and materials
        modelRef.current.traverse((child: THREE.Object3D) => {
          if (child instanceof THREE.Mesh) {
            if (child.geometry) {
              child.geometry.dispose();
            }
            
            if (child.material) {
              if (Array.isArray(child.material)) {
                child.material.forEach(material => material.dispose());
              } else {
                child.material.dispose();
              }
            }
          }
        });
        
        modelRef.current = null;
      }
    };
  }, []);
  
  return {
    ...state,
    loadModel,
    resetModel,
    updateOptions,
    reloadModel,
    options,
    modelObject: modelRef.current
  };
}

export default useModelLoader; 