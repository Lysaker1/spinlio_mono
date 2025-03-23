/**
 * Type definitions for React Three Fiber
 * These definitions extend JSX.IntrinsicElements to include Three.js elements
 */

import { Object3D } from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: any;
      mesh: any;
      ambientLight: any;
      pointLight: any;
      spotLight: any;
      directionalLight: any;
      hemisphereLight: any;
      group: any;
      scene: any;
      perspectiveCamera: any;
      orthographicCamera: any;
      // Add other Three.js elements as needed
    }
  }
}

// Define types for React Three Fiber hooks if needed
declare module '@react-three/fiber' {
  export type ThreeElements = {
    mesh: any;
    primitive: any;
    // Add other elements as needed
  };
}

// This allows TypeScript to import this file as a module
export {}; 