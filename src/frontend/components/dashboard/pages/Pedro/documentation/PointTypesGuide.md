# Pedro Point Types Guide

This guide explains the relationship between the different point types used in the Pedro component system.

## Point Types Overview

Pedro uses two main types of points for attaching components:

1. **SnapPoints**: Simple points used by the legacy system
2. **AttachmentPoints**: Enhanced points used by the new component options system

## SnapPoint vs AttachmentPoint

### SnapPoint

```typescript
export interface SnapPoint {
  id: string;
  position: [number, number, number];
  rotation: [number, number, number, number];
  meshId?: string;
  color: string;
}
```

SnapPoints are:
- Simpler with fewer properties
- Used by the legacy `SnapPointControl` component
- Less component-specific
- Not linked to component options

### AttachmentPoint

```typescript
export interface AttachmentPoint {
  id: string;
  position: [number, number, number];
  rotation: [number, number, number, number]; // Quaternion
  normal: [number, number, number];
  color: string;
  meshId?: string;
  name?: string;
  auto?: boolean;
  size?: number;
  type?: AttachmentPointType;
  radius?: number;
  width?: number;
  height?: number;
  depth?: number;
  optionId?: string; // Links to component option
}
```

AttachmentPoints are:
- More feature-rich with additional properties
- Used by the new component options system
- Component-specific with types and metadata
- Linked to specific component options
- Support different visualization types (standard, planar, tube)

## Conversion Between Types

When working with both systems, you may need to convert between point types. Here's a simple conversion function:

```typescript
// Convert SnapPoint to AttachmentPoint
const convertSnapPointToAttachmentPoint = (snapPoint: SnapPoint): AttachmentPoint => {
  return {
    ...snapPoint,
    normal: [0, 1, 0], // Default normal if not provided
    type: AttachmentPointType.STANDARD,
    auto: false
  } as AttachmentPoint;
};

// Convert AttachmentPoint to SnapPoint
const convertAttachmentPointToSnapPoint = (attachmentPoint: AttachmentPoint): SnapPoint => {
  return {
    id: attachmentPoint.id,
    position: attachmentPoint.position,
    rotation: attachmentPoint.rotation,
    meshId: attachmentPoint.meshId,
    color: attachmentPoint.color
  };
};
```

## Component Integration

The component options system integrates with the older SnapPoints system through:

1. `useComponentIntegration` hook: Bridges the component options system with the legacy system
2. Type conversion as shown above when passing data between systems
3. Compatible event handlers that can work with both types

## When to Use Each Type

- **Use AttachmentPoints** when:
  - Working with the component options system
  - Needing component-specific attachment behavior
  - Requiring rich metadata for points
  - Building UI that shows categorized attachment options

- **Use SnapPoints** when:
  - Working with the legacy point control UI
  - Needing simple point representation
  - Interfacing with older parts of the system

## Best Practices

1. **Clear Type Definitions**: Always use proper type annotations
2. **Explicit Conversions**: Convert between types explicitly rather than using `as` or `unknown` casts
3. **Keep Compatible**: Ensure new AttachmentPoint features don't break SnapPoint compatibility
4. **Documentation**: Document clearly when a function expects one type or the other
5. **Future Direction**: New code should prefer AttachmentPoints as they are more feature-rich

## Example Usage

```typescript
// Component using both systems
const MyComponent = () => {
  // Component options system (new)
  const componentOptions = useComponentIntegration({/*...*/});
  
  // SnapPoints system (legacy)
  const snapPoints = useSnapPoints({/*...*/});
  
  // When a snap point is updated in the SnapPointControl
  const handleSnapPointUpdate = (snapPoint: SnapPoint) => {
    // Convert and update in component options system
    componentOptions.updateAttachmentPoint(
      convertSnapPointToAttachmentPoint(snapPoint)
    );
  };
  
  return (
    <>
      {/* Legacy control */}
      <SnapPointControl
        snapPoints={componentOptions.attachmentPoints}
        onUpdatePoint={handleSnapPointUpdate}
        {/*...*/}
      />
      
      {/* New component options UI */}
      <AttachmentOptionsPanel
        componentConfig={componentOptions.componentConfig}
        {/*...*/}
      />
    </>
  );
};
``` 