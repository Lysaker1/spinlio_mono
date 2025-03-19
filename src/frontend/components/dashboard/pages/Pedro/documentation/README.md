# 3D Component Attachment System

This system allows users to upload 3D models of bike components, visualize them in a web browser, and define attachment points that specify how components connect to each other.

## System Architecture

The system is organized into several key modules:

### Core Components

- **ModelViewer**: Renders 3D models and provides interaction with meshes
- **UploadForm**: Handles file uploads with drag-and-drop support
- **ConfigurationPanel**: Configure model and attachment point settings
- **AttachmentPointHelper**: Visualize and manipulate attachment points

### Services

- **ModelLoaderService**: Handles loading and processing 3D models
- **SnapPointService**: Manages attachment point generation and manipulation

### Hooks

- **useModelLoader**: Custom hook for managing 3D model loading
- **useSnapPoints**: Custom hook for managing attachment points

### Utilities

- **ModelNormalizer**: Handles model normalization and transformation
- **geometryUtils**: Provides geometry-related helper functions

## Workflow

1. User uploads a 3D model (GLB, GLTF, OBJ, STL, FBX, 3DM)
2. The model is loaded, normalized, and centered in the scene
3. The system attempts to detect the component type based on geometry
4. User selects attachment mode:
   - **Manual**: User places attachment points manually
   - **Automatic**: System generates attachment points based on component type
   - **Mesh**: User clicks on specific meshes to add attachment points
5. User can adjust attachment points and save the configuration

## Key Features

- **Model Normalization**: Models are automatically scaled and centered for consistent display
- **Component Detection**: Automatic detection of component type based on geometry
- **Multiple Attachment Modes**: Manual, automatic, and mesh-based attachment point creation
- **Visualization Options**: Wireframe, debug mode, and camera controls

## Code Structure

```
src/dynamic/components/dashboard/pages/Pedro/
├── components/                    # UI Components
│   ├── AttachmentPointHelper.tsx  # Handles attachment point visualization
│   ├── UploadForm.tsx             # File upload UI
│   ├── ConfigurationPanel.tsx     # Measurements and component type selection
│   └── MeshExplorer.tsx           # Explore model meshes
├── services/                      # Business Logic
│   ├── ModelLoaderService.ts      # Handles model loading and normalization
│   └── SnapPointService.ts        # Manages automatic snap point generation
├── hooks/                         # Custom React Hooks
│   ├── useModelLoader.ts          # Hook for model loading
│   └── useSnapPoints.ts           # Hook for snap point management
├── utils/                         # Utility Functions
│   └── geometryUtils.ts           # Geometry calculation utilities
├── constants/                     # Constants
│   └── componentTypes.ts          # Component type definitions
├── three/                         # Three.js specific components
│   ├── ModelViewer.tsx            # 3D viewer component
│   └── ModelNormalizer.ts         # Model normalization logic
├── documentation/                 # Documentation
│   └── README.md                  # This file
├── Pedro.tsx                      # Main component
└── Pedro.css                      # Styles
```

## Usage

### Loading a Model

```jsx
import { useModelLoader } from './hooks/useModelLoader';

const MyComponent = () => {
  const modelLoader = useModelLoader();
  
  const handleFileSelect = (file) => {
    modelLoader.loadModel(file);
  };
  
  return (
    <div>
      <input type="file" onChange={(e) => handleFileSelect(e.target.files[0])} />
      {modelLoader.modelLoaded && (
        <div>Model loaded: {modelLoader.modelInfo.dimensions.width} x {modelLoader.modelInfo.dimensions.height} x {modelLoader.modelInfo.dimensions.depth}</div>
      )}
    </div>
  );
};
```

### Managing Attachment Points

```jsx
import { useSnapPoints } from './hooks/useSnapPoints';

const MyComponent = () => {
  const snapPoints = useSnapPoints();
  
  const handleAddPoint = () => {
    snapPoints.addPoint({
      position: [0, 0, 0],
      normal: [0, 1, 0],
      name: 'New Point'
    });
  };
  
  return (
    <div>
      <button onClick={handleAddPoint}>Add Point</button>
      <div>
        {snapPoints.points.map(point => (
          <div key={point.id}>
            {point.name} at [{point.position.join(', ')}]
          </div>
        ))}
      </div>
    </div>
  );
};
```

## Technical Details

### Model Normalization

Models are normalized through the following process:

1. Calculate bounding box of the original model
2. Determine the appropriate scale factor based on the largest dimension
3. Center the model at the origin
4. Apply transformations to all meshes
5. Update materials and ensure proper lighting

### Attachment Point Generation

Attachment points are generated based on:

1. Component type (seat post, handlebar, etc.)
2. Geometry analysis (identifying key features)
3. Predefined rules for each component type

### Supported File Formats

- **GLB/GLTF**: Recommended format for web-based 3D
- **OBJ**: Common 3D model format with materials
- **STL**: Simple triangular mesh format
- **FBX**: Autodesk format with advanced features
- **3DM**: Rhino format for NURBS models
- **DAE**: Collada format for interchange

## Advanced Features

### Custom Material Support

The system supports custom materials and can handle:
- PBR materials (metalness/roughness workflow)
- Standard materials
- Transparent materials
- Textured materials

### Mesh Optimization

For large models, the system provides:
- Level of detail (LOD) support
- Instance mesh rendering for repeated elements
- Draco compression for GLB/GLTF files

## Future Improvements

- Support for animation data in models
- Multi-model assembly preview
- Physics-based connections between components
- Export to AR/VR compatible formats 