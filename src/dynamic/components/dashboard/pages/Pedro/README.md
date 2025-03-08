# Component Attachment Tool

## Overview
This folder contains the base implementation for the component attachment tool. The primary task is to build a system where users can upload a GLTF or GLB file of a bike component (seat post, handlebar, wheel, etc.) and manually define attachment points (planes) so that it aligns correctly with a predefined plane on a bike frame.

## Current Implementation
The current implementation provides:
- A simple UI for uploading GLB/GLTF files
- A 3D viewer using React Three Fiber
- Basic file validation
- Component type selection
- Measurement input fields
- Attachment point management UI

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