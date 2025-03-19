# Component Attachment Options System

This document describes how to use and extend the Component Attachment Options system for managing attachment points on 3D bicycle components.

## Overview

The Component Attachment Options system provides a structured way to define, detect, and manage attachment points on 3D bicycle components. It offers several key benefits:

1. **Structured Definition**: Define a standard set of attachment points for each component type
2. **Intelligent Auto-Detection**: Automatically detect and place attachment points based on component geometry
3. **Fallback Positions**: Gracefully handle cases where auto-detection fails
4. **User Control**: Allow users to enable, disable, and customize attachment points
5. **Visual Organization**: Group and categorize attachment points in the UI

## Component Types

The system supports multiple component types, each with its own set of attachment points:

- **Handlebar**: Grips, stem connection, brake mounts, etc.
- **Frame**: Bottom bracket, head tube, seat tube, etc.
- **Wheel**: Hub center, sensor mounts, etc.
- **Fork**: Steerer tube, brake mounts, etc.

## Adding a New Component Type

To add a new component type, follow these steps:

### 1. Define the Component Configuration

Create a configuration object in `src/frontend/components/dashboard/pages/Pedro/constants/ComponentAttachmentOptions.ts`:

```typescript
const myComponentOptions: ComponentTypeConfig = {
  name: "My Component",
  description: "Description of what this component is and does",
  analyzerId: "my_component", // ID matching what you'll use in the analyzer
  availableAttachments: [
    // Define attachment options here
    {
      id: "attachment_id",
      name: "Attachment Name",
      description: "Description of what this attachment is for",
      type: AttachmentPointType.PLANAR, // Or other type as appropriate
      isRequired: true, // Whether this is a required attachment
      defaultEnabled: true, // Whether it's enabled by default
      defaultProperties: {
        color: "#3498db", // Color for visualization
        width: 0.3, // Dimensions appropriate for the attachment
        height: 0.3,
      },
      category: AttachmentCategory.STRUCTURAL, // Category for UI organization
      detectionStrategy: DetectionStrategy.AUTO, // How to detect this point
      autoPlacementHint: "placement_hint", // Hint for auto-detection
      fallbackPosition: [0, 0, 0], // Fallback position if detection fails
      uiMetadata: {
        displayOrder: 1, // Order in the UI
        groupName: "Group Name", // Group for UI organization
        iconName: "icon_name", // Icon for UI visualization
      },
    },
    // Add more attachment options...
  ],
};
```

### 2. Register the Component Type

Add your component to the `componentConfigMap` in the same file:

```typescript
export const componentConfigMap: Record<string, ComponentTypeConfig> = {
  handlebar: handlebarOptions,
  frame: frameOptions,
  // ... other existing components
  my_component: myComponentOptions, // Add your component here
};
```

### 3. Create an Analyzer for Your Component

Create a new file in `src/dynamic/components/dashboard/pages/Pedro/utils/analyzers/MyComponentAnalyzer.ts`:

```typescript
import * as THREE from "three";
import { ComponentAnalyzer } from "./core/ComponentAnalyzer";
import { AttachmentPoint } from "../../components/AttachmentPointHelper";
import { AttachmentPointType } from "../../constants/SnapPointConfigurations";

export class MyComponentAnalyzer extends ComponentAnalyzer {
  /**
   * Analyze the model to generate attachment points
   */
  public analyze(
    meshes: Record<string, THREE.Mesh>,
    boundingBox: THREE.Box3
  ): AttachmentPoint[] {
    const points: AttachmentPoint[] = [];

    // Implement your analysis logic here to detect attachment points
    // Example:
    points.push(
      this.createAttachmentPoint(
        "attachment_id", // ID matching the one in your configuration
        [0, 0, 0], // Position
        [0, 1, 0], // Normal vector
        "#3498db", // Color
        AttachmentPointType.PLANAR, // Type
        { width: 0.3, height: 0.3 } // Properties
      )
    );

    return points;
  }
}
```

### 4. Register the Analyzer with the Factory

Update the `AnalyzerFactory.initialize()` method in `src/frontend/components/dashboard/pages/Pedro/utils/analyzers/AnalyzerFactory.ts`:

```typescript
import { MyComponentAnalyzer } from './MyComponentAnalyzer';

public static initialize(): void {
  // Register all available analyzers
  this.registerAnalyzer('handlebar', new HandlebarAnalyzer());
  this.registerAnalyzer('frame', new FrameAnalyzer());
  // ... other existing analyzers
  this.registerAnalyzer('my_component', new MyComponentAnalyzer()); // Add your analyzer here

  console.log(`AnalyzerFactory initialized with ${this.analyzers.size} analyzers`);
}
```

## Attachment Point Types

The system supports different types of attachment points:

- `AttachmentPointType.STANDARD`: A basic attachment point
- `AttachmentPointType.PLANAR`: A flat surface attachment (like a bracket)
- `AttachmentPointType.TUBE_OUTER`: An outer tube surface (like a grip)
- `AttachmentPointType.TUBE_INNER`: An inner tube surface (like a handlebar insertion)
- `AttachmentPointType.BRACKET`: A bracket-style attachment

## Attachment Categories

Attachments are organized into categories:

- `AttachmentCategory.STRUCTURAL`: Core structural connection points
- `AttachmentCategory.INTERFACE`: User interface points (grips, etc.)
- `AttachmentCategory.ACCESSORY`: Optional accessory mounting points

## Detection Strategies

The system supports multiple detection strategies:

- `DetectionStrategy.AUTO`: Fully automatic detection based on geometry
- `DetectionStrategy.MANUAL`: Manual placement only, no auto-detection
- `DetectionStrategy.HYBRID`: Automatic with manual adjustment

## Best Practices

1. **Required Attachments**: Mark only truly essential attachments as required
2. **Fallback Positions**: Always provide sensible fallback positions
3. **Descriptive Names**: Use clear, descriptive names for attachments
4. **Color Coding**: Use consistent colors for similar attachment types
5. **UI Organization**: Group related attachments together for better UX
6. **Detection Hints**: Provide clear placement hints for auto-detection

## Example Templates

See the existing component configurations for examples:

- `handlebarOptions`: Grips, stem connection, etc.
- `frameOptions`: Bottom bracket, head tube, etc.
- `wheelOptions`: Hub center, sensor mounts, etc.
- `forkOptions`: Steerer tube, brake mounts, etc.

## UI Integration

The attachment options system integrates with the Pedro component through the `useComponentIntegration` hook and the `AttachmentOptionsPanel` component.

When adding a new component type, the UI will automatically adapt to display the defined attachment options for that component.
