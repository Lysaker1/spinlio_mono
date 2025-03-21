import { AttachmentPointType } from './SnapPointConfigurations';

/**
 * Enum for attachment point categories
 */
export enum AttachmentCategory {
  STRUCTURAL = 'structural',
  INTERFACE = 'interface',
  ACCESSORY = 'accessory'
}

/**
 * Enum for detection strategies
 */
export enum DetectionStrategy {
  AUTO = 'auto',
  MANUAL = 'manual',
  HYBRID = 'hybrid'
}

/**
 * Metadata for UI display order and grouping
 */
export interface UIMetadata {
  displayOrder: number;  // Order within category
  groupName?: string;    // Optional group name for related attachments
  iconName?: string;     // Optional icon identifier
}

/**
 * Interface defining a component attachment option
 */
export interface ComponentAttachmentOption {
  id: string;
  name: string;
  description: string;
  type: AttachmentPointType;
  isRequired: boolean;
  defaultEnabled: boolean;
  defaultProperties: {
    color: string;
    radius?: number;
    width?: number;
    height?: number;
    depth?: number;
  };
  category: AttachmentCategory;
  detectionStrategy: DetectionStrategy;
  autoPlacementHint?: string;
  fallbackPosition?: [number, number, number]; // Fallback position if detection fails
  uiMetadata?: UIMetadata;  // Optional UI metadata
}

/**
 * Interface for the component configuration
 */
export interface ComponentTypeConfig {
  name: string;
  description: string;
  analyzerId: string;
  availableAttachments: ComponentAttachmentOption[];
}

/**
 * Handlebar component configuration options
 */
const handlebarOptions: ComponentTypeConfig = {
  name: 'Handlebar',
  description: 'A handlebar component for steering the bicycle',
  analyzerId: 'handlebar',
  availableAttachments: [
    // Required attachments
    {
      id: 'left_grip',
      name: 'Left Grip',
      description: 'Left handlebar grip where the hand rests',
      type: AttachmentPointType.TUBE_OUTER,
      isRequired: true,
      defaultEnabled: true,
      defaultProperties: {
        color: '#2ecc71',
        radius: 0.15,
        depth: 0.45
      },
      category: AttachmentCategory.INTERFACE,
      detectionStrategy: DetectionStrategy.AUTO,
      autoPlacementHint: 'left_grip',
      fallbackPosition: [-1.0, 0, 0], // Left side
      uiMetadata: {
        displayOrder: 1,
        groupName: 'Grips',
        iconName: 'grip'
      }
    },
    {
      id: 'right_grip',
      name: 'Right Grip',
      description: 'Right handlebar grip where the hand rests',
      type: AttachmentPointType.TUBE_OUTER,
      isRequired: true,
      defaultEnabled: true,
      defaultProperties: {
        color: '#e74c3c',
        radius: 0.15,
        depth: 0.45
      },
      category: AttachmentCategory.INTERFACE,
      detectionStrategy: DetectionStrategy.AUTO,
      autoPlacementHint: 'right_grip',
      fallbackPosition: [1.0, 0, 0], // Right side
      uiMetadata: {
        displayOrder: 2,
        groupName: 'Grips',
        iconName: 'grip'
      }
    },
    
    // Optional attachments
    {
      id: 'stem',
      name: 'Stem Attachment',
      description: 'Connection point to the bicycle stem',
      type: AttachmentPointType.PLANAR,
      isRequired: false,
      defaultEnabled: true,
      defaultProperties: {
        color: '#3498db',
        width: 0.5,
        height: 0.5
      },
      category: AttachmentCategory.STRUCTURAL,
      detectionStrategy: DetectionStrategy.AUTO,
      autoPlacementHint: 'stem',
      fallbackPosition: [0, -0.5, 0], // Bottom center
      uiMetadata: {
        displayOrder: 1,
        iconName: 'stem'
      }
    },
    {
      id: 'left_brake',
      name: 'Left Brake Lever Mount',
      description: 'Mount point for the left brake lever',
      type: AttachmentPointType.PLANAR,
      isRequired: false,
      defaultEnabled: false,
      defaultProperties: {
        color: '#9b59b6',
        width: 0.3,
        height: 0.2
      },
      category: AttachmentCategory.ACCESSORY,
      detectionStrategy: DetectionStrategy.AUTO,
      autoPlacementHint: 'left_brake',
      fallbackPosition: [-0.7, 0, 0.3], // Left front
      uiMetadata: {
        displayOrder: 1,
        groupName: 'Brakes',
        iconName: 'brake'
      }
    },
    {
      id: 'right_brake',
      name: 'Right Brake Lever Mount',
      description: 'Mount point for the right brake lever',
      type: AttachmentPointType.PLANAR,
      isRequired: false,
      defaultEnabled: false,
      defaultProperties: {
        color: '#9b59b6',
        width: 0.3,
        height: 0.2
      },
      category: AttachmentCategory.ACCESSORY,
      detectionStrategy: DetectionStrategy.AUTO,
      autoPlacementHint: 'right_brake',
      fallbackPosition: [0.7, 0, 0.3], // Right front
      uiMetadata: {
        displayOrder: 2,
        groupName: 'Brakes',
        iconName: 'brake'
      }
    },
    {
      id: 'left_shifter',
      name: 'Left Shifter Mount',
      description: 'Mount point for the left gear shifter',
      type: AttachmentPointType.BRACKET,
      isRequired: false,
      defaultEnabled: false,
      defaultProperties: {
        color: '#f39c12',
        width: 0.25,
        height: 0.2
      },
      category: AttachmentCategory.ACCESSORY,
      detectionStrategy: DetectionStrategy.AUTO,
      autoPlacementHint: 'left_shifter',
      fallbackPosition: [-0.6, 0, 0.4], // Left side
      uiMetadata: {
        displayOrder: 3,
        groupName: 'Shifters',
        iconName: 'shifter'
      }
    },
    {
      id: 'right_shifter',
      name: 'Right Shifter Mount',
      description: 'Mount point for the right gear shifter',
      type: AttachmentPointType.BRACKET,
      isRequired: false,
      defaultEnabled: false,
      defaultProperties: {
        color: '#f39c12',
        width: 0.25,
        height: 0.2
      },
      category: AttachmentCategory.ACCESSORY,
      detectionStrategy: DetectionStrategy.AUTO,
      autoPlacementHint: 'right_shifter',
      fallbackPosition: [0.6, 0, 0.4], // Right side
      uiMetadata: {
        displayOrder: 4,
        groupName: 'Shifters',
        iconName: 'shifter'
      }
    },
    {
      id: 'light_mount',
      name: 'Light/Accessory Mount',
      description: 'Center mount point for lights or other accessories',
      type: AttachmentPointType.BRACKET,
      isRequired: false,
      defaultEnabled: false,
      defaultProperties: {
        color: '#1abc9c',
        width: 0.2,
        height: 0.2
      },
      category: AttachmentCategory.ACCESSORY,
      detectionStrategy: DetectionStrategy.MANUAL,
      fallbackPosition: [0, 0, 0.5], // Center front
      uiMetadata: {
        displayOrder: 5,
        groupName: 'Accessories',
        iconName: 'light'
      }
    },
    {
      id: 'computer_mount',
      name: 'Computer/GPS Mount',
      description: 'Mount point for bicycle computer or GPS',
      type: AttachmentPointType.BRACKET,
      isRequired: false,
      defaultEnabled: false,
      defaultProperties: {
        color: '#34495e',
        width: 0.2,
        height: 0.2
      },
      category: AttachmentCategory.ACCESSORY,
      detectionStrategy: DetectionStrategy.MANUAL,
      fallbackPosition: [0, 0.2, 0.2], // Center top
      uiMetadata: {
        displayOrder: 6,
        groupName: 'Accessories',
        iconName: 'computer'
      }
    }
  ]
};

/**
 * Frame component configuration options
 */
const frameOptions: ComponentTypeConfig = {
  name: 'Frame',
  description: 'The bicycle frame that supports all components and attachments',
  analyzerId: 'frame', // A frame-specific analyzer would be used here
  availableAttachments: [
    {
      id: 'bottom_bracket',
      name: 'Bottom Bracket',
      description: 'Mount point for the crankset and bottom bracket. This is the central point where the power is transmitted.',
      type: AttachmentPointType.PLANAR,
      isRequired: true,
      defaultEnabled: true,
      defaultProperties: {
        color: '#3498db',
        width: 0.3,
        height: 0.3
      },
      category: AttachmentCategory.STRUCTURAL,
      detectionStrategy: DetectionStrategy.AUTO,
      autoPlacementHint: 'bottom_bracket',
      fallbackPosition: [0, -0.1, 0],
      uiMetadata: {
        displayOrder: 1,
        groupName: 'Core',
        iconName: 'bottomBracket'
      }
    },
    {
      id: 'head_tube',
      name: 'Head Tube Mount',
      description: 'Mount point for the fork steerer to interface with the head tube of the frame.',
      type: AttachmentPointType.PLANAR,
      isRequired: true,
      defaultEnabled: true,
      defaultProperties: {
        color: '#3498db',
        width: 0.25,
        height: 0.25
      },
      category: AttachmentCategory.STRUCTURAL,
      detectionStrategy: DetectionStrategy.AUTO,
      autoPlacementHint: 'head_tube',
      fallbackPosition: [0, 0.2, 0],
      uiMetadata: {
        displayOrder: 2,
        groupName: 'Core',
        iconName: 'headtube'
      }
    },
    {
      id: 'seat_tube',
      name: 'Seat Tube Mount',
      description: 'Mount point for the seat post. This is usually found at the top of the seat tube.',
      type: AttachmentPointType.PLANAR,
      isRequired: false,
      defaultEnabled: true,
      defaultProperties: {
        color: '#2ecc71',
        width: 0.2,
        height: 0.2
      },
      category: AttachmentCategory.INTERFACE,
      detectionStrategy: DetectionStrategy.AUTO,
      autoPlacementHint: 'seat_tube',
      fallbackPosition: [0, 0.5, 0],
      uiMetadata: {
        displayOrder: 3,
        groupName: 'Interface',
        iconName: 'seat'
      }
    },
    {
      id: 'down_tube_water_bottle',
      name: 'Down Tube Water Bottle Mount',
      description: 'Mount for a water bottle on the down tube',
      type: AttachmentPointType.BRACKET,
      isRequired: false,
      defaultEnabled: true,
      defaultProperties: {
        color: '#1abc9c',
        width: 0.15,
        height: 0.15
      },
      category: AttachmentCategory.ACCESSORY,
      detectionStrategy: DetectionStrategy.AUTO,
      autoPlacementHint: 'down_tube_water_bottle',
      fallbackPosition: [0, -0.1, 0],
      uiMetadata: {
        displayOrder: 4,
        groupName: 'Mounts',
        iconName: 'water'
      }
    },
    {
      id: 'seat_tube_water_bottle',
      name: 'Seat Tube Water Bottle Mount',
      description: 'Mount for a water bottle on the seat tube',
      type: AttachmentPointType.BRACKET,
      isRequired: false,
      defaultEnabled: true,
      defaultProperties: {
        color: '#1abc9c',
        width: 0.15,
        height: 0.15
      },
      category: AttachmentCategory.ACCESSORY,
      detectionStrategy: DetectionStrategy.AUTO,
      autoPlacementHint: 'seat_tube_water_bottle',
      fallbackPosition: [0, 0.2, 0],
      uiMetadata: {
        displayOrder: 5,
        groupName: 'Mounts',
        iconName: 'water'
      }
    }
  ]
};

/**
 * Wheel component configuration options
 */
const wheelOptions: ComponentTypeConfig = {
  name: 'Wheel',
  description: 'A bicycle wheel, including hub and rim',
  analyzerId: 'wheel', // Would need to implement a wheel analyzer
  availableAttachments: [
    // Required: Hub Center
    {
      id: 'hub_center',
      name: 'Hub Center',
      description: 'The central mounting point for the wheel axle',
      type: AttachmentPointType.PLANAR,
      isRequired: true,
      defaultEnabled: true,
      defaultProperties: {
        color: '#3498db',
        width: 0.2,
        height: 0.2
      },
      category: AttachmentCategory.STRUCTURAL,
      detectionStrategy: DetectionStrategy.AUTO,
      autoPlacementHint: 'hub_center',
      fallbackPosition: [0, 0, 0],
      uiMetadata: {
        displayOrder: 1,
        groupName: 'Core',
        iconName: 'hub'
      }
    },
    // Optional: Sensor Mount
    {
      id: 'sensor_mount',
      name: 'Sensor Mount',
      description: 'Mount point for a speed or cadence sensor (magnet)',
      type: AttachmentPointType.BRACKET,
      isRequired: false,
      defaultEnabled: false,
      defaultProperties: {
        color: '#f39c12',
        width: 0.15,
        height: 0.15
      },
      category: AttachmentCategory.ACCESSORY,
      detectionStrategy: DetectionStrategy.AUTO,
      autoPlacementHint: 'sensor_mount',
      fallbackPosition: [0, 0, 0.3], // Assumed to be on the rim's front side
      uiMetadata: {
        displayOrder: 2,
        groupName: 'Sensors',
        iconName: 'sensor'
      }
    },
    // Optional: Reflector Mount
    {
      id: 'reflector_mount',
      name: 'Reflector Mount',
      description: 'Mount point for a reflector to improve visibility',
      type: AttachmentPointType.BRACKET,
      isRequired: false,
      defaultEnabled: false,
      defaultProperties: {
        color: '#1abc9c',
        width: 0.15,
        height: 0.15
      },
      category: AttachmentCategory.ACCESSORY,
      detectionStrategy: DetectionStrategy.MANUAL,
      autoPlacementHint: 'reflector_mount',
      fallbackPosition: [0, 0, -0.3], // Assumed to be on the rim's rear side
      uiMetadata: {
        displayOrder: 3,
        groupName: 'Accessories',
        iconName: 'reflector'
      }
    }
  ]
};

/**
 * Fork component configuration options
 */
const forkOptions: ComponentTypeConfig = {
  name: 'Fork',
  description: 'Bicycle fork that holds the front wheel and provides steering',
  analyzerId: 'fork', // Would need to implement a fork analyzer
  availableAttachments: [
    // Required: Steerer Mount
    {
      id: 'steerer_mount',
      name: 'Steerer Mount',
      description: 'Mount point for the fork steerer tube to connect to the frame\'s head tube',
      type: AttachmentPointType.PLANAR,
      isRequired: true,
      defaultEnabled: true,
      defaultProperties: {
        color: '#3498db',
        width: 0.25,
        height: 0.25
      },
      category: AttachmentCategory.STRUCTURAL,
      detectionStrategy: DetectionStrategy.AUTO,
      autoPlacementHint: 'steerer_mount',
      fallbackPosition: [0, 0.4, 0],
      uiMetadata: {
        displayOrder: 1,
        groupName: 'Core',
        iconName: 'steerer'
      }
    },
    // Optional: Brake Caliper Mount
    {
      id: 'caliper_mount',
      name: 'Brake Caliper Mount',
      description: 'Mount point for the front brake caliper, often located near the fork crown',
      type: AttachmentPointType.PLANAR,
      isRequired: false,
      defaultEnabled: false,
      defaultProperties: {
        color: '#9b59b6',
        width: 0.2,
        height: 0.2
      },
      category: AttachmentCategory.ACCESSORY,
      detectionStrategy: DetectionStrategy.AUTO,
      autoPlacementHint: 'caliper_mount',
      fallbackPosition: [0, 0.2, 0.1],
      uiMetadata: {
        displayOrder: 2,
        groupName: 'Brakes',
        iconName: 'brake'
      }
    }
  ]
};

/**
 * Map of component types to their configurations
 */
export const componentConfigMap: Record<string, ComponentTypeConfig> = {
  handlebar: handlebarOptions,
  frame: frameOptions,
  wheel: wheelOptions,
  fork: forkOptions,
  // Add other component types here as needed
};

/**
 * Get configuration for a specific component type
 * @param componentType Type of component
 * @returns Configuration for the component type or null if not found
 */
export function getComponentConfig(componentType: string): ComponentTypeConfig | null {
  return componentConfigMap[componentType] || null;
} 