export const MODEL_FILE_TYPES = {
  GLTF: 'gltf',
  GLB: 'glb',
  OBJ: 'obj',
  STL: 'stl',
  STEP: 'step',
  STP: 'stp',
  DWG: 'dwg',
  RHI: '3dm',
  FBX: 'fbx',
  IGES: 'iges',
  IGS: 'igs',
} as const;

export type ModelFileType = typeof MODEL_FILE_TYPES[keyof typeof MODEL_FILE_TYPES];

export const SUPPORTED_MODEL_FORMATS = Object.values(MODEL_FILE_TYPES);

// Define specific type arrays for different categories
export const THREEJS_COMPATIBLE = [
  MODEL_FILE_TYPES.GLTF, 
  MODEL_FILE_TYPES.GLB, 
  MODEL_FILE_TYPES.OBJ, 
  MODEL_FILE_TYPES.STL, 
  MODEL_FILE_TYPES.FBX
] as const;

export const CAD_FORMATS = [
  MODEL_FILE_TYPES.STEP, 
  MODEL_FILE_TYPES.STP, 
  MODEL_FILE_TYPES.IGES, 
  MODEL_FILE_TYPES.IGS, 
  MODEL_FILE_TYPES.DWG
] as const;

export const RHINO_FORMATS = [
  MODEL_FILE_TYPES.RHI
] as const;

// Categorize file formats by their primary use
export const FILE_TYPE_CATEGORIES = {
  THREEJS_COMPATIBLE,
  CAD_FORMATS,
  RHINO_FORMATS
};

// Returns file extension without the dot
export const getFileExtension = (filename: string): string => {
  return filename.split('.').pop()?.toLowerCase() || '';
};

// Check if a file is a supported 3D model format
export const isSupportedModelFormat = (filename: string): boolean => {
  const extension = getFileExtension(filename);
  return SUPPORTED_MODEL_FORMATS.includes(extension as ModelFileType);
};

// Determine if a file is directly compatible with Three.js rendering
export const isThreeJsCompatible = (filename: string): boolean => {
  const extension = getFileExtension(filename);
  return THREEJS_COMPATIBLE.includes(extension as any);
};

// Determine file category based on extension
export const getFileCategory = (filename: string): string => {
  const extension = getFileExtension(filename);
  
  if (THREEJS_COMPATIBLE.includes(extension as any)) {
    return 'threejs';
  } else if (CAD_FORMATS.includes(extension as any)) {
    return 'cad';
  } else if (RHINO_FORMATS.includes(extension as any)) {
    return 'rhino';
  }
  
  return 'other';
}; 