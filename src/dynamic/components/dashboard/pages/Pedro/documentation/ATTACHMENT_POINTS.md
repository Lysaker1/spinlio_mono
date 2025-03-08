# Understanding Attachment Points for 3D Models

## What Are Attachment Points?

Attachment points in 3D models serve as reference points or planes where components connect to each other. For bike components, these are defined planes in 3D space that dictate:

1. **Position** - Where the component should connect to the bike frame
2. **Orientation** - The correct angle for proper alignment
3. **Scale** - To ensure proper fit and proportion

## Planes vs. Points

While we refer to these as "attachment points," they're more accurately represented as **planes** in 3D space with:
- Position (x, y, z coordinates)
- Rotation (quaternion or Euler angles)
- Normal vector (perpendicular to the plane's surface)

## Implementation Approaches

### 1. Three.js Planes

Three.js provides a `THREE.Plane` object that can be used to define attachment planes:

```typescript
import * as THREE from 'three';

// Create a plane with normal vector facing upward (y-axis)
const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
```

### 2. Visual Representation

Users need to see and interact with attachment planes. Consider:

- Using a semi-transparent plane mesh
- Adding handles or controls for manipulation
- Color-coding to distinguish between different types of attachment points

### 3. Storing Attachment Data

Attachment data can be stored in several ways:

- As custom properties in the GLTF/GLB file
- In a separate JSON file that references the model
- In a database with links to the model file

Example data structure:

```json
{
  "modelId": "seat_post_123",
  "componentType": "seat_post",
  "attachmentPoints": [
    {
      "id": "frame_connection",
      "position": [0, 100, 0],
      "rotation": [0, 0, 0, 1],  // Quaternion
      "normal": [0, 1, 0]
    }
  ]
}
```

## Attachment Points for Different Component Types

### Seat Post Attachment

Typically connects to the seat tube with:
- Primary attachment point at the bottom of the post
- Normal vector pointing downward into the seat tube
- May need diameter matching with the seat tube

### Handlebar Attachment

Usually connects to the stem with:
- Clamping area as the attachment point
- Normal vector perpendicular to the clamping area
- Requires rotational alignment for proper ergonomics

### Wheel Attachment

Connects to the dropouts with:
- Axle ends as the attachment points
- May need multiple attachment points (axle ends on both sides)
- Rotational alignment critical for disc brakes, if present

### Frame Attachment

As the main component, a frame has multiple attachment points for:
- Seat post (seat tube opening)
- Handlebars (head tube)
- Wheels (front and rear dropouts)
- Other components (bottom bracket, brake mounts, etc.)

## Alignment Logic

When connecting components:

1. **Match positions** - Translate the component so its attachment point meets the frame's point
2. **Align normals** - Rotate the component so attachment plane normals align (opposite directions)
3. **Adjust scaling** - Scale based on user measurements

## Interaction Design

Consider these approaches for user interaction:

- **Direct manipulation** - Click and drag controls in 3D space
- **Gizmos** - Use translation/rotation gizmos for precise control
- **Form inputs** - Allow numeric input for position/rotation
- **Snapping** - Implement snapping for easy alignment

## Testing Attachment Points

To verify correct implementation:

1. Create a simple frame model with predefined attachment points
2. Load both models in the viewer
3. Test automatic alignment
4. Verify the connection looks correct from multiple angles 