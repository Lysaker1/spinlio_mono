import { useState, useEffect, useCallback, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as THREE from 'three';
import { AttachmentPoint } from '../components/AttachmentPointHelper';
import { useComponentOptions } from './useComponentOptions';
import { AnalyzerFactory } from '../utils/analyzers/AnalyzerFactory';

/**
 * Integration properties and return type
 */
interface UseComponentIntegrationProps {
  componentType: string;
  modelBoundingBox?: THREE.Box3 | null;
  meshes?: Record<string, THREE.Mesh> | any[];
  modelCenter?: THREE.Vector3 | null;
  onAttachmentPointsChange?: (points: AttachmentPoint[]) => void;
  attachmentMode: 'manual' | 'automatic' | 'mesh';
}

interface UseComponentIntegrationReturn {
  // Component options state and methods
  availableOptions: ReturnType<typeof useComponentOptions>['availableOptions'];
  enabledOptions: ReturnType<typeof useComponentOptions>['enabledOptions'];
  toggleOption: ReturnType<typeof useComponentOptions>['toggleOption'];
  
  // Attachment points
  attachmentPoints: AttachmentPoint[];
  optionPointsMap: Record<string, AttachmentPoint[]>;
  componentConfig: ReturnType<typeof useComponentOptions>['componentConfig'];
  
  // Attachment point management methods
  updateAttachmentPoint: (point: AttachmentPoint) => void;
  addCustomAttachmentPoint: (optionId: string, position?: [number, number, number]) => void;
  deleteAttachmentPoint: (id: string) => void;
  
  // Additional methods
  generateAttachmentPoints: () => void;
  resetOption: (optionId: string) => void;
  clearAllPoints: () => void;
  forceRegeneratePoints: () => void;
}

/**
 * Hook for integrating component options with Pedro component
 */
export function useComponentIntegration({
  componentType,
  modelBoundingBox,
  meshes = {},
  modelCenter,
  onAttachmentPointsChange,
  attachmentMode
}: UseComponentIntegrationProps): UseComponentIntegrationReturn {
  // Initialize component analyzers when component mounts
  useEffect(() => {
    AnalyzerFactory.initialize();
  }, []);
  
  // Component options hook
  const componentOptions = useComponentOptions(
    componentType, 
    onAttachmentPointsChange
  );
  
  // Track if initial analysis has been performed
  const hasAnalyzedRef = useRef<boolean>(false);
  // Track the component type to detect changes
  const prevComponentTypeRef = useRef<string>(componentType);
  // Add this tracking ref near the top of the hook
  const pointsGeneratedRef = useRef<boolean>(false);

  // Sync component type with options
  useEffect(() => {
    componentOptions.setComponentType(componentType);
    
    // Reset analyzed flag when component type changes
    if (prevComponentTypeRef.current !== componentType) {
      hasAnalyzedRef.current = false;
      prevComponentTypeRef.current = componentType;
    }
  }, [componentType, componentOptions]);
  
  // Generate attachment points based on component type and model
  const generateAttachmentPoints = useCallback(() => {
    // Don't auto-generate points if in manual mode
    if (attachmentMode === 'manual') {
      console.log('Skipping auto-generation in manual mode');
      return;
    }
    
    // Skip if we've already generated points for this model/component combination
    if (pointsGeneratedRef.current) {
      console.log('Points already generated for this model, skipping re-analysis');
      return;
    }
    
    if (!modelBoundingBox || !modelCenter || !meshes || meshes.length === 0) {
      console.warn('Cannot generate attachment points - missing model data');
      return;
    }
    
    console.log(`Generating attachment points for ${componentType}`);
    
    // Use the analyzer factory to analyze the model
    try {
      // Convert array/object to record of THREE.Mesh objects
      let meshesRecord: Record<string, THREE.Mesh> = {};
      
      if (Array.isArray(meshes)) {
        // Handle array of meshes
        meshes.forEach((mesh: any, index) => {
          if (mesh instanceof THREE.Mesh) {
            meshesRecord[`mesh_${index}`] = mesh;
          } else if (mesh.object && mesh.object instanceof THREE.Mesh) {
            // Handle case where mesh object is wrapped
            meshesRecord[`mesh_${index}`] = mesh.object;
          } else if (mesh.mesh && mesh.mesh instanceof THREE.Mesh) {
            // Handle case where it's in a mesh property
            meshesRecord[`mesh_${index}`] = mesh.mesh;
          }
        });
      } else if (typeof meshes === 'object') {
        // Handle object of meshes
        Object.entries(meshes).forEach(([key, mesh]: [string, any]) => {
          if (mesh instanceof THREE.Mesh) {
            meshesRecord[key] = mesh;
          } else if (mesh.object && mesh.object instanceof THREE.Mesh) {
            meshesRecord[key] = mesh.object;
          } else if (mesh.mesh && mesh.mesh instanceof THREE.Mesh) {
            meshesRecord[key] = mesh.mesh;
          }
        });
      }
      
      // IMPORTANT: Skip generation if we have existing attachment points and we're in manual mode
      // This prevents analyzer from regenerating points that were manually edited
      if (componentOptions.attachmentPoints.length > 0) {
        console.log('Skipping auto-generation because points already exist');
        return;
      }
      
      const attachPoints = AnalyzerFactory.analyzeModel(
        componentType,
        meshesRecord,
        modelBoundingBox
      );
      
      // Only update if we have points
      if (attachPoints && attachPoints.length > 0) {
        // Update attachment points
        componentOptions.setAttachmentPoints(attachPoints);
        
        // Notify parent of new points
        if (onAttachmentPointsChange) {
          onAttachmentPointsChange(attachPoints);
        }
        
        console.log(`Generated ${attachPoints.length} attachment points`);
        
        // Mark as generated to prevent infinite loops
        pointsGeneratedRef.current = true;
      } else {
        console.warn("No automatic attachment points were generated");
      }
    } catch (error) {
      console.error('Error generating attachment points:', error);
    }
  }, [componentType, modelBoundingBox, meshes, modelCenter, onAttachmentPointsChange, attachmentMode, componentOptions]);
  
  // Auto-generate points when model changes, but only once
  useEffect(() => {
    // Avoid auto-generating if:
    // 1. We're in manual mode
    // 2. We've already analyzed this model
    // 3. We've already generated points
    // 4. We don't have the necessary model data
    if (
      attachmentMode === 'manual' || 
      hasAnalyzedRef.current || 
      pointsGeneratedRef.current ||
      !modelBoundingBox || 
      !meshes || 
      (Array.isArray(meshes) ? meshes.length === 0 : Object.keys(meshes).length === 0)
    ) {
      return;
    }
    
    console.log('Auto-triggering attachment point generation');
    
    // Set flags before generating to prevent double-execution
    hasAnalyzedRef.current = true;
    
    // Add a small delay to ensure the model is fully loaded in the scene
    const timeoutId = setTimeout(() => {
      generateAttachmentPoints();
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [modelBoundingBox, meshes, generateAttachmentPoints, attachmentMode]);
  
  // Add a function to explicitly force regeneration
  const forceRegeneratePoints = useCallback(() => {
    // Don't regenerate if we're in manual mode with existing points
    // Using explicit string comparison to avoid type issues
    if (componentOptions.attachmentPoints.length > 0 && 
        String(attachmentMode) === String('manual')) {
      console.log('Skipping forced regeneration in manual mode with existing points');
      return;
    }
    
    // Reset flags
    pointsGeneratedRef.current = false;
    hasAnalyzedRef.current = false;
    
    // Call the generate function directly
    generateAttachmentPoints();
  }, [generateAttachmentPoints, attachmentMode, componentOptions.attachmentPoints.length]);
  
  // Clear all attachment points
  const clearAllPoints = useCallback(() => {
    componentOptions.resetAttachmentPoints();
    hasAnalyzedRef.current = false;
    pointsGeneratedRef.current = false; // Reset the generation flag
    console.log('Cleared all attachment points and reset generation flags');
  }, [componentOptions]);
  
  // Add custom attachment point
  const addCustomAttachmentPoint = useCallback((optionId: string, position?: [number, number, number]) => {
    // Use provided position or center of model as default
    const pointPosition: [number, number, number] = position || (
      modelCenter 
        ? [modelCenter.x, modelCenter.y, modelCenter.z]
        : [0, 0, 0]
    );
    
    // Add custom point
    componentOptions.addCustomAttachmentPoint({ position: pointPosition }, optionId);
  }, [modelCenter, componentOptions]);
  
  // Reset attachment points for an option
  const resetOption = useCallback((optionId: string) => {
    // Remove all existing points for this option
    const pointsToRemove = componentOptions.optionPointsMap[optionId] || [];
    pointsToRemove.forEach(point => {
      componentOptions.deleteAttachmentPoint(point.id);
    });
    
    // Generate points again
    generateAttachmentPoints();
  }, [componentOptions, generateAttachmentPoints]);
  
  return {
    // Component options state
    availableOptions: componentOptions.availableOptions,
    enabledOptions: componentOptions.enabledOptions,
    toggleOption: componentOptions.toggleOption,
    
    // Attachment points
    attachmentPoints: componentOptions.attachmentPoints,
    optionPointsMap: componentOptions.optionPointsMap,
    componentConfig: componentOptions.componentConfig,
    
    // Attachment point management methods
    updateAttachmentPoint: (point: AttachmentPoint) => {
      componentOptions.updateAttachmentPoint(point.id, point);
    },
    addCustomAttachmentPoint,
    deleteAttachmentPoint: componentOptions.deleteAttachmentPoint,
    
    // Additional methods
    generateAttachmentPoints,
    resetOption,
    clearAllPoints,
    forceRegeneratePoints
  };
} 