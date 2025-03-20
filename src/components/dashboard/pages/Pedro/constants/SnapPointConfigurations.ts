import * as THREE from 'three';

// Import the AttachmentPoint interface from your existing code
import { AttachmentPoint } from '../components/AttachmentPointHelper';

// Add new attachment point types
export enum AttachmentPointType {
  STANDARD = 'standard',     // Regular point attachment
  TUBE_OUTER = 'tube_outer', // Wraps around outside of tube
  TUBE_INNER = 'tube_inner', // Attaches inside tube
  MESH_WRAP = 'mesh_wrap',   // Wraps around entire mesh/surface
  PLANAR = 'planar',         // Flat plane attachment
  BRACKET = 'bracket',       // Bracket or clamp style attachment
  THREADED = 'threaded',     // Threaded connection (screws, bolts)
  PRESS_FIT = 'press_fit',   // Press-fit connection
  QUICK_RELEASE = 'quick_release' // Quick release mechanism
}

export interface SnapPointConfig {
  count: number;
  positions: Array<{
    strategy: 'relative' | 'absolute' | 'mesh' | 'detection';
    position: [number, number, number] | string;
    normal: [number, number, number] | string;
    name: string;
    color?: string;
    size?: number;
    type?: AttachmentPointType;
    radius?: number;
    width?: number;
    height?: number;
    depth?: number;
    meshId?: string;
    // New properties for better mesh attachment
    meshMatching?: 'closest' | 'largest' | 'specific'; // How to find a mesh to attach to
    meshSearchRadius?: number; // Search radius for finding a mesh (in model space units)
    adaptToMesh?: boolean; // Whether to adjust position to actually connect to mesh
  }>;
}

// Frame category components
const frameConfigurations: Record<string, SnapPointConfig> = {
  // Base frame configuration
  frame: {
    count: 6,
    positions: [
      {
        strategy: 'mesh',
        position: [0, 0.8, 0],  // Near top
        normal: [0, 1, 0],      // Pointing up
        name: 'Seat Post Attachment',
        color: '#9b59b6',
        type: AttachmentPointType.TUBE_INNER,
        radius: 0.3,
        meshMatching: 'closest',
        adaptToMesh: true,
        meshSearchRadius: 1.0
      },
      {
        strategy: 'mesh',
        position: [0.8, 0, 0], // Near front
        normal: [1, 0, 0],     // Pointing forward
        name: 'Head Tube Attachment',
        color: '#2ecc71',
        type: AttachmentPointType.TUBE_INNER,
        radius: 0.3,
        meshMatching: 'closest',
        adaptToMesh: true,
        meshSearchRadius: 1.0
      },
      {
        strategy: 'mesh',
        position: [-0.8, 0, 0], // Near rear
        normal: [-1, 0, 0],     // Pointing backward
        name: 'Rear Wheel Attachment',
        color: '#3498db',
        type: AttachmentPointType.QUICK_RELEASE,
        radius: 0.2,
        meshMatching: 'closest',
        adaptToMesh: true,
        meshSearchRadius: 1.0
      },
      {
        strategy: 'mesh',
        position: [0, -0.8, 0], // Near bottom center
        normal: [0, -1, 0],     // Pointing down
        name: 'Bottom Bracket',
        color: '#e74c3c',
        type: AttachmentPointType.THREADED,
        radius: 0.25,
        meshMatching: 'closest',
        adaptToMesh: true,
        meshSearchRadius: 1.0
      },
      {
        strategy: 'mesh',
        position: [-0.5, 0.5, 0], // Near rear top
        normal: [0, 1, 0],       // Pointing up
        name: 'Rear Brake Mount',
        color: '#1abc9c',
        type: AttachmentPointType.BRACKET,
        width: 0.3,
        height: 0.2,
        meshMatching: 'closest',
        adaptToMesh: true,
        meshSearchRadius: 1.0
      },
      {
        strategy: 'mesh',
        position: [0.3, -0.5, 0], // Near bottom bracket
        normal: [0, 0, 1],       // Pointing outward
        name: 'Front Derailleur Mount',
        color: '#f39c12',
        type: AttachmentPointType.BRACKET,
        width: 0.2,
        height: 0.2,
        meshMatching: 'closest',
        adaptToMesh: true,
        meshSearchRadius: 1.0
      }
    ]
  },
  
  // Step-through frame variant
  step_thru: {
    count: 6,
    positions: [
      // Similar configuration as frame but adjusted for step-through geometry
      {
        strategy: 'mesh',
        position: [0, 0.8, 0],  // Near top
        normal: [0, 1, 0],      // Pointing up
        name: 'Seat Post Attachment',
        color: '#9b59b6',
        type: AttachmentPointType.TUBE_INNER,
        radius: 0.3,
        meshMatching: 'closest',
        adaptToMesh: true,
        meshSearchRadius: 1.0
      },
      {
        strategy: 'mesh',
        position: [0.8, 0.2, 0], // Near front, slightly higher
        normal: [1, 0, 0],     // Pointing forward
        name: 'Head Tube Attachment',
        color: '#2ecc71',
        type: AttachmentPointType.TUBE_INNER,
        radius: 0.3,
        meshMatching: 'closest',
        adaptToMesh: true,
        meshSearchRadius: 1.0
      },
      {
        strategy: 'mesh',
        position: [-0.8, 0, 0], // Near rear
        normal: [-1, 0, 0],     // Pointing backward
        name: 'Rear Wheel Attachment',
        color: '#3498db',
        type: AttachmentPointType.QUICK_RELEASE,
        radius: 0.2,
        meshMatching: 'closest',
        adaptToMesh: true,
        meshSearchRadius: 1.0
      },
      {
        strategy: 'mesh',
        position: [0, -0.8, 0], // Near bottom center
        normal: [0, -1, 0],     // Pointing down
        name: 'Bottom Bracket',
        color: '#e74c3c',
        type: AttachmentPointType.THREADED,
        radius: 0.25,
        meshMatching: 'closest',
        adaptToMesh: true,
        meshSearchRadius: 1.0
      },
      {
        strategy: 'mesh',
        position: [-0.5, 0.5, 0], // Near rear top
        normal: [0, 1, 0],       // Pointing up
        name: 'Rear Brake Mount',
        color: '#1abc9c',
        type: AttachmentPointType.BRACKET,
        width: 0.3,
        height: 0.2,
        meshMatching: 'closest',
        adaptToMesh: true,
        meshSearchRadius: 1.0
      },
      {
        strategy: 'mesh',
        position: [0.3, -0.5, 0], // Near bottom bracket
        normal: [0, 0, 1],       // Pointing outward
        name: 'Front Derailleur Mount',
        color: '#f39c12',
        type: AttachmentPointType.BRACKET,
        width: 0.2,
        height: 0.2,
        meshMatching: 'closest',
        adaptToMesh: true,
        meshSearchRadius: 1.0
      }
    ]
  }
};

// Handlebar category components
const handlebarConfigurations: Record<string, SnapPointConfig> = {
  // Base handlebar configuration
  handlebar: {
    count: 5,
    positions: [
      {
        strategy: 'detection',
        position: 'stem',
        normal: 'auto',
        name: 'Stem Attachment',
        color: '#3498db',
        type: AttachmentPointType.PLANAR,
        radius: 0.25,
        width: 0.5,
        height: 0.5,
        adaptToMesh: true
      },
      {
        strategy: 'detection',
        position: 'right_grip',
        normal: 'auto',
        name: 'Right Grip',
        color: '#e74c3c',
        type: AttachmentPointType.TUBE_OUTER,
        radius: 0.15,
        depth: 0.45,
        adaptToMesh: true
      },
      {
        strategy: 'detection',
        position: 'left_grip',
        normal: 'auto',
        name: 'Left Grip',
        color: '#2ecc71',
        type: AttachmentPointType.TUBE_OUTER,
        radius: 0.15,
        depth: 0.45,
        adaptToMesh: true
      },
      {
        strategy: 'detection',
        position: 'right_brake',
        normal: 'auto',
        name: 'Right Brake Lever',
        color: '#9b59b6',
        type: AttachmentPointType.PLANAR,
        width: 0.3,
        height: 0.2,
        adaptToMesh: true
      },
      {
        strategy: 'detection',
        position: 'left_brake',
        normal: 'auto',
        name: 'Left Brake Lever',
        color: '#9b59b6',
        type: AttachmentPointType.PLANAR,
        width: 0.3,
        height: 0.2,
        adaptToMesh: true
      }
    ]
  },
  
  // Riser handlebars variant - also simplified to use detection
  riser_handlebars: {
    count: 5,
    positions: [
      {
        strategy: 'detection',
        position: 'stem',
        normal: 'auto',
        name: 'Stem Attachment',
        color: '#3498db',
        type: AttachmentPointType.PLANAR,
        radius: 0.25,
        width: 0.5,
        height: 0.5,
        adaptToMesh: true
      },
      {
        strategy: 'detection',
        position: 'right_grip',
        normal: 'auto',
        name: 'Right Grip',
        color: '#e74c3c',
        type: AttachmentPointType.TUBE_OUTER,
        radius: 0.15,
        depth: 0.45,
        adaptToMesh: true
      },
      {
        strategy: 'detection',
        position: 'left_grip',
        normal: 'auto',
        name: 'Left Grip',
        color: '#2ecc71',
        type: AttachmentPointType.TUBE_OUTER,
        radius: 0.15,
        depth: 0.45,
        adaptToMesh: true
      },
      {
        strategy: 'detection',
        position: 'right_brake',
        normal: 'auto',
        name: 'Right Brake Lever',
        color: '#9b59b6',
        type: AttachmentPointType.PLANAR,
        width: 0.3,
        height: 0.2,
        adaptToMesh: true
      },
      {
        strategy: 'detection',
        position: 'left_brake',
        normal: 'auto',
        name: 'Left Brake Lever',
        color: '#9b59b6',
        type: AttachmentPointType.PLANAR,
        width: 0.3,
        height: 0.2,
        adaptToMesh: true
      }
    ]
  }
};

// Wheel category components
const wheelConfigurations: Record<string, SnapPointConfig> = {
  wheel: {
    count: 3,
    positions: [
      {
        strategy: 'mesh',
        position: 'center',
        normal: 'axis',
        name: 'Axle Attachment',
        color: '#f39c12',
        type: AttachmentPointType.TUBE_INNER,
        radius: 0.1,
        meshMatching: 'closest',
        adaptToMesh: true
      },
      {
        strategy: 'mesh',
        position: 'rim',
        normal: 'radial',
        name: 'Tire Mounting',
        color: '#9b59b6',
        type: AttachmentPointType.MESH_WRAP,
        radius: 1.0,
        meshMatching: 'largest',
        adaptToMesh: true
      },
      {
        strategy: 'mesh',
        position: [0, 0, 0.2],
        normal: [0, 0, 1],
        name: 'Disc Brake Mount',
        color: '#e74c3c',
        type: AttachmentPointType.PLANAR,
        width: 0.2,
        height: 0.2,
        meshMatching: 'closest',
        adaptToMesh: true,
        meshSearchRadius: 0.5
      }
    ]
  }
};

// Fork category components
const forkConfigurations: Record<string, SnapPointConfig> = {
  fork: {
    count: 3,
    positions: [
      {
        strategy: 'mesh',
        position: [0, 0.8, 0], // Top
        normal: [0, 1, 0],     // Pointing up
        name: 'Steerer Tube',
        color: '#3498db',
        type: AttachmentPointType.TUBE_OUTER,
        radius: 0.25,
        meshMatching: 'closest',
        adaptToMesh: true,
        meshSearchRadius: 1.0
      },
      {
        strategy: 'detection',
        position: 'dropouts', // Will detect fork dropouts
        normal: [1, 0, 0],    // Front facing
        name: 'Wheel Attachment Left',
        color: '#e74c3c',
        type: AttachmentPointType.QUICK_RELEASE,
        radius: 0.15,
        adaptToMesh: true
      },
      {
        strategy: 'detection',
        position: 'dropouts', // Will detect fork dropouts
        normal: [-1, 0, 0],   // Front facing
        name: 'Wheel Attachment Right',
        color: '#e74c3c',
        type: AttachmentPointType.QUICK_RELEASE,
        radius: 0.15,
        adaptToMesh: true
      }
    ]
  }
};

// Create a fallback configuration for unknown component types
const fallbackConfiguration: SnapPointConfig = {
  count: 1,
  positions: [
    {
      strategy: 'mesh',
      position: [0, 0, 0], // Center
      normal: [0, 1, 0],   // Default up
      name: 'Generic Attachment',
      color: '#7f8c8d',
      type: AttachmentPointType.STANDARD,
      width: 0.3,
      height: 0.3,
      meshMatching: 'largest',
      adaptToMesh: true,
      meshSearchRadius: 2.0
    }
  ]
};

// Merge all configurations into a single object
const snapPointConfigurations: Record<string, SnapPointConfig> = {
  ...frameConfigurations,
  ...handlebarConfigurations,
  ...wheelConfigurations,
  ...forkConfigurations,
  
  // Add additional configurations here as needed
  
  // Default fallback
  'other': fallbackConfiguration
};

export default snapPointConfigurations; 