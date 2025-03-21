import * as THREE from 'three';

/**
 * Utility functions for 3D geometry operations
 */

/**
 * Calculate the volume of a 3D mesh
 * @param mesh The mesh to calculate volume for
 * @returns The volume in cubic units
 */
export function calculateMeshVolume(mesh: THREE.Mesh): number {
  // Get the geometry
  const geometry = mesh.geometry;
  
  // For simple calculation, use the bounding box volume
  const box = new THREE.Box3().setFromObject(mesh);
  const size = box.getSize(new THREE.Vector3());
  
  return size.x * size.y * size.z;
}

/**
 * Find the center of a mesh
 * @param mesh The mesh to find the center of
 * @returns The center point as Vector3
 */
export function findMeshCenter(mesh: THREE.Mesh): THREE.Vector3 {
  const box = new THREE.Box3().setFromObject(mesh);
  return box.getCenter(new THREE.Vector3());
}

/**
 * Detect if a mesh is circular (like a wheel)
 * @param mesh The mesh to analyze
 * @param tolerance Tolerance for aspect ratio comparison (0-1)
 * @returns True if the mesh is likely circular
 */
export function isMeshCircular(mesh: THREE.Mesh, tolerance: number = 0.2): boolean {
  const box = new THREE.Box3().setFromObject(mesh);
  const size = box.getSize(new THREE.Vector3());
  
  // Find the smallest dimension (likely the thickness)
  const minDim = Math.min(size.x, size.y, size.z);
  
  // Get the other two dimensions
  const dims = [size.x, size.y, size.z].sort((a, b) => a - b);
  const [_, secondDim, thirdDim] = dims;
  
  // Check if the two larger dimensions are similar (circular)
  // and much larger than the smallest (flat)
  return (
    Math.abs(secondDim - thirdDim) / thirdDim < tolerance && 
    minDim < secondDim * 0.3
  );
}

/**
 * Detect the main axis of a cylindrical object
 * @param mesh The mesh to analyze
 * @returns The main axis as a normalized Vector3
 */
export function detectCylindricalAxis(mesh: THREE.Mesh): THREE.Vector3 {
  const box = new THREE.Box3().setFromObject(mesh);
  const size = box.getSize(new THREE.Vector3());
  
  // The smallest dimension indicates the axis direction
  if (size.x <= size.y && size.x <= size.z) {
    return new THREE.Vector3(1, 0, 0); // X axis
  } else if (size.y <= size.x && size.y <= size.z) {
    return new THREE.Vector3(0, 1, 0); // Y axis
  } else {
    return new THREE.Vector3(0, 0, 1); // Z axis
  }
}

/**
 * Find the approximate center of a tube or cylindrical structure
 * @param mesh The mesh to analyze
 * @returns The center point of the tube
 */
export function findTubeCenter(mesh: THREE.Mesh): THREE.Vector3 {
  // Simple implementation - just find the center of the mesh
  return findMeshCenter(mesh);
}

/**
 * Create a normal vector perpendicular to a face
 * @param face The face to get the normal from
 * @returns The normal vector
 */
export function getFaceNormal(face: THREE.Face): THREE.Vector3 {
  return face.normal.clone().normalize();
}

/**
 * Convert a point from world space to local space
 * @param point The point in world space
 * @param object The object to get local coordinates for
 * @returns The point in local space
 */
export function worldToLocalPoint(
  point: THREE.Vector3, 
  object: THREE.Object3D
): THREE.Vector3 {
  // Create a matrix that represents the inverse of the object's world transform
  const inverseMatrix = new THREE.Matrix4().copy(object.matrixWorld).invert();
  
  // Create a copy of the point and transform it
  const localPoint = point.clone().applyMatrix4(inverseMatrix);
  
  return localPoint;
}

/**
 * Convert a point from local space to world space
 * @param point The point in local space
 * @param object The object to convert from
 * @returns The point in world space
 */
export function localToWorldPoint(
  point: THREE.Vector3, 
  object: THREE.Object3D
): THREE.Vector3 {
  // Create a copy of the point and transform it using the object's world matrix
  const worldPoint = point.clone().applyMatrix4(object.matrixWorld);
  
  return worldPoint;
}

/**
 * Check if a point is inside a mesh
 * @param point The point to test
 * @param mesh The mesh to test against
 * @returns True if the point is inside the mesh
 */
export function isPointInsideMesh(
  point: THREE.Vector3, 
  mesh: THREE.Mesh
): boolean {
  // Convert the point to local space
  const localPoint = worldToLocalPoint(point, mesh);
  
  // Simple bounding box check
  const box = new THREE.Box3().setFromObject(mesh);
  
  return box.containsPoint(localPoint);
}

/**
 * Find the intersection point between a ray and a mesh
 * @param ray The ray to test
 * @param mesh The mesh to test against
 * @returns The intersection point or null if no intersection
 */
export function findRayMeshIntersection(
  ray: THREE.Ray, 
  mesh: THREE.Mesh
): THREE.Vector3 | null {
  // Create a raycaster
  const raycaster = new THREE.Raycaster();
  raycaster.ray.copy(ray);
  
  // Find intersections
  const intersects = raycaster.intersectObject(mesh);
  
  if (intersects.length > 0) {
    return intersects[0].point;
  }
  
  return null;
}

/**
 * Find the closest point on a mesh to a given point
 * @param point The reference point
 * @param mesh The mesh to find the closest point on
 * @returns The closest point on the mesh
 */
export function findClosestPointOnMesh(
  point: THREE.Vector3, 
  mesh: THREE.Mesh
): THREE.Vector3 {
  // This is a simplified implementation that just returns the closest point on the bounding box
  const box = new THREE.Box3().setFromObject(mesh);
  const closestPoint = new THREE.Vector3();
  
  box.clampPoint(point, closestPoint);
  
  return closestPoint;
}

export default {
  calculateMeshVolume,
  findMeshCenter,
  isMeshCircular,
  detectCylindricalAxis,
  findTubeCenter,
  getFaceNormal,
  worldToLocalPoint,
  localToWorldPoint,
  isPointInsideMesh,
  findRayMeshIntersection,
  findClosestPointOnMesh
}; 