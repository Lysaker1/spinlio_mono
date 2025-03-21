/**
 * Component type definitions for bike parts
 */

export interface ComponentTypeDefinition {
  id: string;
  label: string;
  description: string;
  attachmentPointCount: number;
  defaultSize?: [number, number, number]; // [width, height, depth]
  icon?: string;
}

/**
 * Available component types
 */
export const COMPONENT_TYPES: Record<string, ComponentTypeDefinition> = {
  seat_post: {
    id: 'seat_post',
    label: 'Seat Post',
    description: 'Connects the saddle to the frame',
    attachmentPointCount: 2,
    defaultSize: [1, 5, 1]
  },
  handlebar: {
    id: 'handlebar',
    label: 'Handlebar',
    description: 'Steering control for the bike',
    attachmentPointCount: 3,
    defaultSize: [6, 1, 2]
  },
  wheel: {
    id: 'wheel',
    label: 'Wheel',
    description: 'Includes rim, hub, and tire',
    attachmentPointCount: 1,
    defaultSize: [5, 1, 5]
  },
  frame: {
    id: 'frame',
    label: 'Frame',
    description: 'Main structure of the bike',
    attachmentPointCount: 6,
    defaultSize: [8, 5, 3]
  },
  fork: {
    id: 'fork',
    label: 'Fork',
    description: 'Connects the front wheel to the frame',
    attachmentPointCount: 2,
    defaultSize: [2, 6, 2]
  },
  pedal: {
    id: 'pedal',
    label: 'Pedal',
    description: 'Foot platform for propulsion',
    attachmentPointCount: 1,
    defaultSize: [2, 0.5, 1]
  },
  brake: {
    id: 'brake',
    label: 'Brake',
    description: 'Stopping mechanism',
    attachmentPointCount: 2,
    defaultSize: [1, 2, 1]
  },
  saddle: {
    id: 'saddle',
    label: 'Saddle',
    description: 'Seat for the rider',
    attachmentPointCount: 1,
    defaultSize: [2, 1, 5]
  },
  stem: {
    id: 'stem',
    label: 'Stem',
    description: 'Connects handlebars to fork',
    attachmentPointCount: 2,
    defaultSize: [1, 1, 3]
  },
  crankset: {
    id: 'crankset',
    label: 'Crankset',
    description: 'Includes cranks, chainrings, and bottom bracket',
    attachmentPointCount: 3,
    defaultSize: [3, 2, 3]
  },
  other: {
    id: 'other',
    label: 'Other Component',
    description: 'Generic bike component',
    attachmentPointCount: 1,
    defaultSize: [2, 2, 2]
  }
};

/**
 * Get component type definition by ID
 */
export const getComponentTypeById = (id: string): ComponentTypeDefinition => {
  return COMPONENT_TYPES[id] || COMPONENT_TYPES.other;
};

/**
 * Get a list of component types for dropdown menus
 */
export const getComponentTypeOptions = () => {
  return Object.values(COMPONENT_TYPES).map(type => ({
    value: type.id,
    label: type.label
  }));
};

/**
 * Get the ideal camera distance for a component type
 */
export const getIdealCameraDistance = (componentTypeId: string): number => {
  const componentType = getComponentTypeById(componentTypeId);
  if (!componentType.defaultSize) return 10;
  
  // Calculate distance based on component size
  const [width, height, depth] = componentType.defaultSize;
  const maxDimension = Math.max(width, height, depth);
  
  // Add margin for better visibility
  return maxDimension * 2;
};

export default {
  COMPONENT_TYPES,
  getComponentTypeById,
  getComponentTypeOptions,
  getIdealCameraDistance
}; 