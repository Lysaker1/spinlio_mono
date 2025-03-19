declare module 'rhino3dm' {
  export interface Mesh {
    vertices(): Float32Array;
    faces(): { count: number; get(index: number): number[] };
    normals(): Float32Array | null;
  }

  export interface RhinoObject {
    geometry(): Mesh | any;
  }

  export interface File3dm {
    objects(): RhinoObject[];
  }

  export interface Rhino3dm {
    File3dm: {
      new(): File3dm;
      fromByteArray(length: number, buffer: Uint8Array): File3dm;
    };
    Mesh: { new(): Mesh };
  }

  function createModule(): Promise<Rhino3dm>;
  export default createModule;
} 