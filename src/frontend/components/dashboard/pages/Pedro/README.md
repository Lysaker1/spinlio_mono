# Component Attachment System

This document describes the complete flow of the component attachment system, which enables users to load 3D models, detect component types, generate attachment points, and manipulate them.

## System Overview

The component attachment system is designed to allow users to:

1. Upload and load 3D models of bicycle components
2. Analyze and detect the component type automatically
3. Generate appropriate attachment points based on the component type
4. Visualize and manipulate attachment points in 3D space
5. Configure component attachment options through a UI

## Core Components

### Model Loading and Processing

1. **ModelLoaderService**: Handles loading 3D model files using THREE.js loaders
   - Loads models from files using GLTFLoader and DRACOLoader
   - Processes the model to extract meshes and normalize dimensions
   - Computes bounding boxes and other metadata for the model

2. **ModelViewer**: Renders the 3D model and provides user interaction
   - Displays the model with appropriate lighting and controls
   - Handles user interactions for selecting and manipulating meshes
   - Supports different view modes (normal, wireframe, x-ray)
   - Provides camera controls for exploring the model
   - Implements scene locking mechanism for 2D editing of attachment points

### Component Type Detection and Analysis

1. **ComponentDetector**: Analyzes model dimensions and features to determine component type
   - Uses heuristics based on aspect ratios and dimensions
   - Detects common bicycle components (frames, wheels, handlebars, etc.)
   - Provides confidence levels for component type detection

2. **ComponentAnalyzer**: Generates appropriate attachment points for each component type
   - Implements specialized analyzers for different component types
   - Determines optimal attachment point positions based on component geometry
   - Creates attachment points with appropriate metadata and configuration

### Attachment Point Management

1. **SnapPointService**: Creates and manages attachment points
   - Generates attachment points based on component type and mesh data
   - Provides methods for creating manual attachment points
   - Manages selection and transformation of attachment points

2. **AttachmentPointHelper**: Renders and enables manipulation of attachment points
   - Visualizes attachment points in 3D space with appropriate geometry
   - Enables selection, movement, and rotation of attachment points
   - Provides UI controls for manipulating attachment points

3. **ComponentOptions**: Manages available attachment options for components
   - Defines attachment options available for each component type
   - Controls which attachment points are enabled/disabled
   - Provides configuration interface for attachment options

## Data Flow

1. **Model Loading**:
   - User uploads a model file
   - `ModelLoaderService.loadModelFromFile()` processes the file
   - The model is normalized and meshes are extracted
   - Model data is returned and saved in state

2. **Component Detection**:
   - The model's dimensions and mesh information are analyzed
   - `ComponentDetector.detectComponentType()` determines the likely component type
   - Component type is set in the application state

3. **Attachment Point Generation**:
   - Based on the detected component type, `SnapPointService.generateAttachmentPoints()` is called
   - Appropriate analyzers create attachment points based on model geometry
   - Attachment points are stored in state and displayed on the model

4. **User Interaction**:
   - User can select, move, and rotate attachment points
   - User can toggle attachment options through the UI
   - Changes to attachment points trigger updates to the state
   - User can toggle scene locking to enable 2D editing mode

## New Feature: Scene Locking for 2D Editing

The scene locking mechanism allows users to:

1. Lock the camera to a specific view when editing attachment points
2. Disable orbit controls to prevent accidental camera movement
3. Focus on a specific attachment plane for more precise editing
4. Toggle between 3D and 2D editing modes seamlessly
5. Change transform controls mode (translate, rotate, scale) while in locked mode

### How to Use Scene Locking:

1. Select an attachment point
2. Click the "Lock Scene (2D)" button
3. The camera will position to face the attachment point
4. Edit the attachment point with transform controls
5. Toggle between transform modes using the "Mode" button
6. Click "Unlock Scene (3D)" to return to normal 3D navigation

## Component Attachment Options

Each component type has specific attachment options available:

1. **Frame**:
   - Seat post attachment
   - Bottom bracket
   - Head tube
   - etc.

2. **Wheel**:
   - Hub attachments
   - Rim attachments
   - etc.

3. **Handlebars**:
   - Bar ends
   - Stem attachment
   - Grip areas
   - etc.

## Troubleshooting

### Common Issues and Solutions

1. **Transform Controls Error**:
   - Error: "TransformControls: The attached 3D object must be a part of the scene graph"
   - Solution: Ensure attachment point objects are properly added to the scene
   
2. **Orbit Controls Conflicts**:
   - Issue: Orbit controls and transform controls interfere with each other
   - Solution: Disable orbit controls when transform controls are active

3. **Attachment Point Generation**:
   - Issue: Repeatedly generating attachment points causes performance issues
   - Solution: Cache attachment points and only regenerate when necessary

4. **Component Detection**:
   - Issue: Incorrect component type detection
   - Solution: Manually set the component type through the UI

## Pedro - 3D Component Attachment Tool

Pedro is a 3D model viewer and attachment point editor for bicycle components. It allows users to upload 3D models, view them in a WebGL environment, and add/edit attachment points for connecting different components together.

## System Architecture

Pedro consists of several key components and services that work together:

### Core Components

#### Attachment Point System Components

1. **AttachmentPointHelper**: A React component for visualizing and interacting with attachment points in 3D space
   - Renders the 3D visualization of attachment points
   - Handles interactions (hover, selection, dragging)
   - Supports different attachment point types (standard, planar, tube, etc.)

2. **SnapPointControl**: A UI component for controlling attachment points
   - Provides UI for adding, selecting, and managing snap points
   - Handles transformations and positioning of points in 3D space
   - Works with the older snap points system

3. **AttachmentOptionsPanel**: New UI component for the component options system
   - Displays available attachment options grouped by category
   - Allows toggling options on/off
   - Provides interfaces for adding custom points and resetting options

#### Integration Hooks

1. **useSnapPoints**: A hook for managing attachment/snap points in the older system
   - Provides methods for adding, updating, and removing points
   - Handles selection state
   - Manages attachment mode (manual/automatic/mesh)

2. **useComponentOptions**: A hook for managing component-specific attachment options
   - Tracks enabled/disabled options
   - Maintains the attachment points for each option
   - Provides methods for toggling options and modifying points

3. **useComponentIntegration**: A hook that integrates the component options system with Pedro
   - Bridges the component options system with the existing model loader
   - Handles auto-detection of attachment points using the AnalyzerFactory
   - Provides backward compatibility with the snap points system

#### Services

1. **SnapPointService**: Service for generating and managing snap points
   - Generates attachment points based on component type and geometry
   - Contains algorithms for analyzing 3D models and detecting features
   - Creates attachment points from mesh data

2. **ModelLoaderService**: Service for loading and processing 3D models
   - Loads models from files
   - Normalizes and centers models
   - Computes bounding boxes and other model information

3. **AnalyzerFactory**: Factory service for creating and managing component analyzers
   - Manages analyzers for different component types (handlebar, frame, wheel, etc.)
   - Analyzes models to generate appropriate attachment points
   - Serves as an extension point for adding new component analyzers

### Component Analysis System

1. **ComponentAnalyzer**: Base class for all component-specific analyzers
   - Provides common methods for creating attachment points
   - Defines the interface for component-specific analysis

2. **HandlebarAnalyzer**, **FrameAnalyzer**, etc.: Component-specific analyzers
   - Implement specialized algorithms for detecting features in specific component types
   - Generate appropriate attachment points based on component geometry

### Configuration System

1. **ComponentAttachmentOptions**: Configuration for component attachment points
   - Defines available attachment options for each component type
   - Specifies required vs. optional attachment points
   - Provides fallback positions when auto-detection fails
   - Includes metadata for UI organization and visualization

## Comparison of Attachment Points vs. Snap Points

The system has two parallel approaches to managing attachment points:

1. **Snap Points System (Legacy)**:
   - More generic, not component-specific
   - Uses `SnapPoint` interface with basic properties
   - Managed by `useSnapPoints` hook
   - UI controlled by `SnapPointControl`

2. **Component Options System (New)**:
   - Component-specific with predefined attachment points
   - Uses `AttachmentPoint` interface with richer properties
   - Managed by `useComponentOptions` and `useComponentIntegration` hooks
   - UI displayed by `AttachmentOptionsPanel`
   - Leverages component analyzers for intelligent placement

The component options system is designed to provide more structured, component-aware attachment points with intelligent defaults, while the snap points system offers more flexibility for generic points.

## Data Flow

1. User uploads a 3D model via `ModelUploadForm`
2. `modelLoader` loads and processes the model
3. `componentOptions` integration determines the component type and initializes available options
4. `AnalyzerFactory` detects appropriate attachment points based on component geometry
5. User can enable/disable options via `AttachmentOptionsPanel`
6. Any changes to attachment points are synchronized back to the `snapPoints` system for backward compatibility

## Extension Points

To add support for a new component type:

1. Create a component configuration in `ComponentAttachmentOptions.ts`
2. Implement a component analyzer in the `analyzers` directory
3. Register the analyzer with the `AnalyzerFactory`

## Developer Notes

The PedroComponentDemo component was created as a standalone demonstration of the component options system. It is separate from the main Pedro component to allow for isolated testing and development of the new system without affecting the existing functionality.

## Component Files Overview

- **Pedro.tsx**: Main application component
- **components/AttachmentPointHelper.tsx**: 3D visualization of attachment points
- **components/SnapPointControl.tsx**: UI for managing snap points
- **components/AttachmentOptionsPanel.tsx**: UI for component options
- **hooks/useSnapPoints.ts**: Hook for managing snap points
- **hooks/useComponentOptions.tsx**: Hook for managing component options
- **hooks/useComponentIntegration.tsx**: Hook for integrating options with Pedro
- **services/SnapPointService.ts**: Service for generating snap points
- **utils/analyzers/**: Component-specific analyzers
- **constants/ComponentAttachmentOptions.ts**: Configuration for component options
- **documentation/ComponentAttachmentOptions.md**: Documentation for the options system

## Your Task
You need to extend this implementation to:

1. **Attachment Point Logic:** Add functionality for users to add planes to their uploaded components that will connect with the frame's predefined attachment planes.

2. **Positioning & Rotation:** Implement logic to automatically resize, position, and rotate the components correctly within the X, Y, and Z planes.

3. **Measurement Input:** Enhance the UI components for users to manually input the dimensions of the uploaded components.

4. **Metadata Storage:** Implement a system to store the attachment points and formatting with the GLTF file for future compatibility.

## Expanded Scope
While the initial focus is on seat posts, the system should be designed to work with various bike components:

- **Seat Posts:** Primary attachment to the seat tube
- **Handlebars:** Connection to the stem/head tube
- **Wheels:** Attachment to the dropouts
- **Other Components:** Pedals, brakes, etc.

This expanded scope will allow the system to be used for a complete bike configuration tool in the future.

## Technical Details

### React Three Fiber
The 3D viewer uses [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction), a React renderer for Three.js. You can use the following components:

- `<Canvas>` - The main container for 3D scenes
- `<OrbitControls>` - Allows the user to rotate, pan, and zoom the camera
- `<primitive>` - Renders a Three.js object directly in the scene

### File Structure
- `Pedro.tsx` - Main component containing the upload functionality and 3D viewer
- `Pedro.css` - Styles for the component
- `components/AttachmentPointHelper.tsx` - Helper component for managing attachment points
- Other files you create as needed

### Dependencies
The following dependencies are already installed:
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Useful helpers for React Three Fiber
- `three` - The Three.js library
- `uuid` - For generating unique IDs

## Getting Started
1. Familiarize yourself with the current code
2. Run the application and navigate to the Pedro tab
3. Test the current upload functionality
4. Begin implementing the required features

## Tips
- Break down the task into smaller, manageable steps
- Use React state to manage attachment points (started for you)
- Consider adding more controls to the TransformControls for manipulating attachment points
- Document your code with clear comments
- Feel free to restructure the code if needed for better maintainability

Good luck with your implementation! 