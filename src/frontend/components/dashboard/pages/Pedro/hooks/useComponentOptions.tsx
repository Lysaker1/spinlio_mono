import { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AttachmentPoint } from '../components/AttachmentPointHelper';
import { 
  ComponentAttachmentOption, 
  ComponentTypeConfig, 
  getComponentConfig 
} from '../constants/ComponentAttachmentOptions';

/**
 * State for tracking enabled attachment options and their current points
 */
interface UseComponentOptionsReturn {
  // Currently selected component type
  componentType: string;
  setComponentType: (type: string) => void;
  
  // Available options for the current component type
  availableOptions: ComponentAttachmentOption[];
  
  // Currently enabled options
  enabledOptions: string[];
  
  // Toggle an option on/off
  toggleOption: (optionId: string) => void;
  
  // Set all options based on a preset or configuration
  setEnabledOptions: (optionIds: string[]) => void;
  
  // Attachment points for the enabled options
  attachmentPoints: AttachmentPoint[];
  
  // Update an attachment point
  updateAttachmentPoint: (id: string, updatedPoint: Partial<AttachmentPoint>) => void;
  
  // Add a custom attachment point
  addCustomAttachmentPoint: (point: Partial<AttachmentPoint>, optionId: string) => void;
  
  // Delete an attachment point
  deleteAttachmentPoint: (id: string) => void;
  
  // Reset all attachment points to their default/auto detected positions
  resetAttachmentPoints: () => void;
  
  // Replace all attachment points with new ones (from auto detection)
  setAttachmentPoints: (points: AttachmentPoint[]) => void;
  
  // Associate attachment points with their options
  optionPointsMap: Record<string, AttachmentPoint[]>;
  
  // Get the current component configuration
  componentConfig: ComponentTypeConfig | null;
}

/**
 * Hook for managing component options and attachment points
 * @param initialComponentType Initial component type
 * @param onAttachmentPointsChange Callback when attachment points change
 * @returns Interface for managing component options
 */
export function useComponentOptions(
  initialComponentType: string = 'handlebar',
  onAttachmentPointsChange?: (points: AttachmentPoint[]) => void
): UseComponentOptionsReturn {
  // State for component type
  const [componentType, setComponentType] = useState(initialComponentType);
  
  // State for component configuration
  const [componentConfig, setComponentConfig] = useState<ComponentTypeConfig | null>(
    getComponentConfig(initialComponentType)
  );
  
  // State for available options
  const [availableOptions, setAvailableOptions] = useState<ComponentAttachmentOption[]>(
    componentConfig?.availableAttachments || []
  );
  
  // State for enabled options
  const [enabledOptions, setEnabledOptions] = useState<string[]>(
    componentConfig?.availableAttachments
      .filter(option => option.defaultEnabled || option.isRequired)
      .map(option => option.id) || []
  );
  
  // State for attachment points
  const [attachmentPoints, setAttachmentPoints] = useState<AttachmentPoint[]>([]);
  
  // Map of option IDs to attachment points
  const [optionPointsMap, setOptionPointsMap] = useState<Record<string, AttachmentPoint[]>>({});
  
  // Update component configuration when type changes
  useEffect(() => {
    const config = getComponentConfig(componentType);
    setComponentConfig(config);
    
    if (config) {
      setAvailableOptions(config.availableAttachments);
      
      // Enable default and required options
      setEnabledOptions(
        config.availableAttachments
          .filter(option => option.defaultEnabled || option.isRequired)
          .map(option => option.id)
      );
    } else {
      setAvailableOptions([]);
      setEnabledOptions([]);
    }
  }, [componentType]);
  
  // Notify when attachment points change
  useEffect(() => {
    if (onAttachmentPointsChange) {
      onAttachmentPointsChange(attachmentPoints);
    }
  }, [attachmentPoints, onAttachmentPointsChange]);
  
  // Toggle an option on/off
  const toggleOption = useCallback((optionId: string) => {
    setEnabledOptions(prev => {
      // Check if the option is required
      const isRequired = availableOptions.find(opt => opt.id === optionId)?.isRequired;
      
      // If it's required and already enabled, don't allow disabling
      if (isRequired && prev.includes(optionId)) {
        return prev;
      }
      
      // Otherwise, toggle it
      return prev.includes(optionId)
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId];
    });
  }, [availableOptions]);
  
  // Set enabled options
  const setEnabledOptionsList = useCallback((optionIds: string[]) => {
    // Make sure required options are always included
    const requiredOptionIds = availableOptions
      .filter(option => option.isRequired)
      .map(option => option.id);
    
    // Combine required options with requested options (removing duplicates)
    const combinedOptions = [...new Set([...requiredOptionIds, ...optionIds])];
    
    setEnabledOptions(combinedOptions);
  }, [availableOptions]);
  
  // Update an attachment point
  const updateAttachmentPoint = useCallback((id: string, updatedPoint: Partial<AttachmentPoint>) => {
    setAttachmentPoints(prev => {
      return prev.map(point => point.id === id ? { ...point, ...updatedPoint } : point);
    });
  }, []);
  
  // Add a custom attachment point for an option
  const addCustomAttachmentPoint = useCallback((point: Partial<AttachmentPoint>, optionId: string) => {
    // Find the option to get default properties
    const option = availableOptions.find(opt => opt.id === optionId);
    
    if (!option) return;
    
    // Create a new attachment point with defaults from the option
    const newPoint: AttachmentPoint = {
      id: uuidv4(),
      position: point.position || [0, 0, 0],
      rotation: point.rotation || [0, 0, 0, 1],
      normal: point.normal || [0, 1, 0],
      name: point.name || option.name,
      color: point.color || option.defaultProperties.color,
      type: point.type || option.type,
      width: point.width || option.defaultProperties.width,
      height: point.height || option.defaultProperties.height,
      radius: point.radius || option.defaultProperties.radius,
      depth: point.depth,
      meshId: point.meshId,
      auto: false, // Mark as manually created
      optionId: optionId // Track which option this point belongs to
    };
    
    // Add to attachment points
    setAttachmentPoints(prev => [...prev, newPoint]);
    
    // Update option-points map
    setOptionPointsMap(prev => ({
      ...prev,
      [optionId]: [...(prev[optionId] || []), newPoint]
    }));
  }, [availableOptions]);
  
  // Delete an attachment point
  const deleteAttachmentPoint = useCallback((id: string) => {
    // Find the point to get its optionId
    const pointToDelete = attachmentPoints.find(point => point.id === id);
    
    if (!pointToDelete) return;
    
    // Check if this is the last point for a required option
    const optionId = pointToDelete.optionId;
    if (optionId) {
      const option = availableOptions.find(opt => opt.id === optionId);
      const pointsForOption = optionPointsMap[optionId] || [];
      
      // If this is a required option and it's the last point, don't delete
      if (option?.isRequired && pointsForOption.length <= 1) {
        console.warn('Cannot delete the last attachment point for a required option');
        return;
      }
    }
    
    // Delete from attachment points
    setAttachmentPoints(prev => prev.filter(point => point.id !== id));
    
    // Update option-points map
    if (optionId) {
      setOptionPointsMap(prev => ({
        ...prev,
        [optionId]: (prev[optionId] || []).filter(point => point.id !== id)
      }));
    }
  }, [attachmentPoints, availableOptions, optionPointsMap]);
  
  // Reset all attachment points to default
  const resetAttachmentPoints = useCallback(() => {
    // We don't have auto-detected points here
    // This would be called when re-running auto-detection
    setAttachmentPoints([]);
    setOptionPointsMap({});
  }, []);
  
  // Set attachment points from auto detection with fallback handling
  const setNewAttachmentPoints = useCallback((points: AttachmentPoint[]) => {
    // Group points by option ID (from autoPlacementHint)
    const newOptionPointsMap: Record<string, AttachmentPoint[]> = {};
    
    // Track which options have points assigned
    const optionsWithPoints = new Set<string>();
    
    // For each point, find which option it belongs to
    points.forEach(point => {
      // Try to match with an option by name or hint
      const matchingOption = availableOptions.find(option => 
        point.name?.includes(option.name) || 
        option.autoPlacementHint === point.name
      );
      
      if (matchingOption) {
        // Only include if the option is enabled
        if (enabledOptions.includes(matchingOption.id)) {
          // Add the option ID to the point
          const pointWithOption = {
            ...point,
            optionId: matchingOption.id,
            auto: true // Mark as auto-detected
          };
          
          // Add to the map
          newOptionPointsMap[matchingOption.id] = [
            ...(newOptionPointsMap[matchingOption.id] || []),
            pointWithOption
          ];
          
          // Mark this option as having a point
          optionsWithPoints.add(matchingOption.id);
        }
      }
    });
    
    // Check for enabled options without points and create fallbacks
    enabledOptions.forEach(optionId => {
      if (!optionsWithPoints.has(optionId)) {
        const option = availableOptions.find(opt => opt.id === optionId);
        
        if (option) {
          console.log(`No point found for enabled option ${option.name}, creating fallback`);
          
          // Create a fallback point if the option has fallbackPosition
          if (option.fallbackPosition) {
            const fallbackPoint: AttachmentPoint = {
              id: uuidv4(),
              position: option.fallbackPosition,
              rotation: [0, 0, 0, 1],
              normal: [0, 1, 0], // Default upward normal
              name: `${option.name} (Fallback)`,
              color: option.defaultProperties.color,
              type: option.type,
              width: option.defaultProperties.width,
              height: option.defaultProperties.height,
              radius: option.defaultProperties.radius,
              depth: option.defaultProperties.depth,
              auto: false, // Mark as manual since it's a fallback
              optionId: option.id
            };
            
            // Add to the map
            newOptionPointsMap[option.id] = [fallbackPoint];
          }
        }
      }
    });
    
    // Create a flat list of all points
    const allPoints = Object.values(newOptionPointsMap).flat();
    
    setAttachmentPoints(allPoints);
    setOptionPointsMap(newOptionPointsMap);
  }, [availableOptions, enabledOptions]);
  
  return {
    componentType,
    setComponentType,
    availableOptions,
    enabledOptions,
    toggleOption,
    setEnabledOptions: setEnabledOptionsList,
    attachmentPoints,
    updateAttachmentPoint,
    addCustomAttachmentPoint,
    deleteAttachmentPoint,
    resetAttachmentPoints,
    setAttachmentPoints: setNewAttachmentPoints,
    optionPointsMap,
    componentConfig
  };
} 