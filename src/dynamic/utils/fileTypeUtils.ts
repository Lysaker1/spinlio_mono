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

// Get the file extension from a filename (e.g., 'model.glb' -> 'glb')
export const getFileExtension = (filename: string): string => {
  const lastDotIndex = filename.lastIndexOf('.');
  if (lastDotIndex === -1) return '';
  const extension = filename.substring(lastDotIndex + 1).toLowerCase();
  console.log(`File extension detected: ${extension} for file: ${filename}`);
  return extension;
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

// Get the file category based on extension (e.g., 'glb' -> '3d')
export const getFileCategory = (filename: string): string => {
  const extension = getFileExtension(filename);
  
  // Map of file extensions to categories
  const extensionCategories: Record<string, string> = {
    // 3D model formats
    'glb': '3d',
    'gltf': '3d',
    'obj': '3d',
    'fbx': '3d',
    'stl': '3d',
    'dae': '3d',
    '3ds': '3d',
    'blend': '3d',
    // Image formats
    'jpg': 'image',
    'jpeg': 'image',
    'png': 'image',
    'gif': 'image',
    'webp': 'image',
    'svg': 'image',
    // Document formats
    'pdf': 'document',
    'doc': 'document',
    'docx': 'document',
    'txt': 'document',
  };
  
  const category = extensionCategories[extension] || 'other';
  console.log(`File category detected: ${category} for extension: ${extension}`);
  return category;
};

// Detect MIME type from file extension
export const getMimeTypeFromExtension = (filename: string): string => {
  const extension = getFileExtension(filename);
  
  // Map of file extensions to MIME types
  const mimeTypes: Record<string, string> = {
    // 3D model formats
    'glb': 'model/gltf-binary',
    'gltf': 'model/gltf+json',
    'obj': 'model/obj',
    'fbx': 'application/octet-stream',  // No standard MIME type for FBX
    'stl': 'model/stl',
    'dae': 'model/vnd.collada+xml',
    '3ds': 'application/x-3ds',
    'blend': 'application/octet-stream',
    // Image formats
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'png': 'image/png',
    'gif': 'image/gif',
    'webp': 'image/webp',
    'svg': 'image/svg+xml',
    // Document formats
    'pdf': 'application/pdf',
    'doc': 'application/msword',
    'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'txt': 'text/plain',
  };
  
  const mimeType = mimeTypes[extension] || 'application/octet-stream';
  console.log(`MIME type detected: ${mimeType} for extension: ${extension}`);
  return mimeType;
}; 