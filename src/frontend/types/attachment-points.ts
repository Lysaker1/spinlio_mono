/**
 * Shared types for attachment points functionality across components
 */

/**
 * Interface for an attachment point with position, rotation and normal vector
 */
export interface AttachmentPoint {
  id: string;
  position: [number, number, number];
  rotation: [number, number, number, number]; // Quaternion
  normal: [number, number, number];
  color?: string;
}

/**
 * Interface for attachment point API format
 */
export interface ApiAttachmentPoint {
  name: string;
  position_x: number;
  position_y: number;
  position_z: number;
  rotation_x: number;
  rotation_y: number;
  rotation_z: number;
  color?: string;
}

/**
 * Converts an API attachment point to the internal format
 */
export function apiToAttachmentPoint(point: ApiAttachmentPoint, index: number): AttachmentPoint {
  return {
    id: `point-${index}`,
    position: [point.position_x, point.position_y, point.position_z],
    rotation: [0, 0, 0, 1], // Default quaternion
    normal: [0, 0, 1], // Default forward direction
    color: point.color || '#FF0000'
  };
}

/**
 * Converts an internal attachment point to the API format
 */
export function attachmentPointToApi(point: AttachmentPoint): ApiAttachmentPoint {
  return {
    name: `point-${point.id}`,
    position_x: point.position[0],
    position_y: point.position[1],
    position_z: point.position[2],
    rotation_x: point.rotation[0],
    rotation_y: point.rotation[1],
    rotation_z: point.rotation[2],
    color: point.color
  };
} 