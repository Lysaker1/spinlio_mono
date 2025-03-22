import * as THREE from 'three';

/**
 * Core geometry analysis utilities for analyzing 3D meshes
 * These functions are component-agnostic and can be used for any type of 3D model
 */

/**
 * Find the extreme vertex of a mesh along a specified direction
 * This is more reliable than raycasting for finding endpoints of curved geometry
 */
export function findExtremeVertexInDirection(
  mesh: THREE.Mesh,
  direction: THREE.Vector3
): THREE.Vector3 | null {
  // Ensure mesh geometry exists and has position attributes
  if (!mesh.geometry || !mesh.geometry.attributes || !mesh.geometry.attributes.position) {
    console.warn('Cannot find extreme vertex - geometry attributes not available');
    return mesh.getWorldPosition(new THREE.Vector3());
  }
  
  // Ensure the mesh's world matrix is up to date - force update through parents
  mesh.updateWorldMatrix(true, true);
  
  // Normalize the direction vector
  const dir = direction.clone().normalize();
  
  // Get all vertices in world space
  const positions = mesh.geometry.attributes.position;
  const worldVertices: THREE.Vector3[] = [];
  
  for (let i = 0; i < positions.count; i++) {
    const vertex = new THREE.Vector3();
    vertex.fromBufferAttribute(positions, i);
    vertex.applyMatrix4(mesh.matrixWorld); // Convert to world space
    worldVertices.push(vertex);
  }
  
  if (worldVertices.length === 0) {
    return null;
  }
  
  // Find the vertex with the maximum projection onto the direction vector
  let maxProj = -Infinity;
  let extremeVertex = worldVertices[0];
  
  for (const vertex of worldVertices) {
    const proj = vertex.dot(dir);
    if (proj > maxProj) {
      maxProj = proj;
      extremeVertex = vertex.clone();
    }
  }
  
  console.log(`Found extreme vertex in direction (${dir.x.toFixed(3)}, ${dir.y.toFixed(3)}, ${dir.z.toFixed(3)}): (${extremeVertex.x.toFixed(3)}, ${extremeVertex.y.toFixed(3)}, ${extremeVertex.z.toFixed(3)})`);
  return extremeVertex;
}

/**
 * Find the extreme point of a mesh in a given direction (min or max along an axis)
 * This gives us more precise positioning than using the bounding box
 */
export function findExtremePoint(mesh: THREE.Mesh, minOrMax: 'min' | 'max', axis: 'x' | 'y' | 'z'): THREE.Vector3 {
  // Make sure geometry attributes are available
  if (!mesh.geometry || !mesh.geometry.attributes || !mesh.geometry.attributes.position) {
    console.warn('Cannot find extreme point - geometry attributes not available');
    // Fallback to center - use the WORLD position of the mesh
    return mesh.getWorldPosition(new THREE.Vector3());
  }
  
  // Ensure the mesh's world matrix is up to date - force update through parents
  mesh.updateWorldMatrix(true, true);
  
  const positions = mesh.geometry.attributes.position;
  let extremeValue = minOrMax === 'min' ? Infinity : -Infinity;
  let extremePoint = new THREE.Vector3();
  
  // Examine all vertices to find the extreme one
  for (let i = 0; i < positions.count; i++) {
    const vertex = new THREE.Vector3();
    vertex.fromBufferAttribute(positions, i);
    
    // Convert local vertex to world space using mesh's world matrix
    vertex.applyMatrix4(mesh.matrixWorld);
    
    // Check if this vertex is more extreme than our current extreme
    if ((minOrMax === 'min' && vertex[axis] < extremeValue) || 
        (minOrMax === 'max' && vertex[axis] > extremeValue)) {
      extremeValue = vertex[axis];
      extremePoint.copy(vertex);
    }
  }
  
  console.log(`Found extreme ${minOrMax} point along ${axis} axis: (${extremePoint.x.toFixed(3)}, ${extremePoint.y.toFixed(3)}, ${extremePoint.z.toFixed(3)})`);
  return extremePoint;
}

/**
 * Analyze a mesh's geometry to determine if it's a tube shape
 */
export function analyzeForTubeShape(mesh: THREE.Mesh): {
  isTube: boolean;
  radius: number;
  length: number;
  direction: string;
} {
  if (!mesh.geometry || !mesh.geometry.attributes || !mesh.geometry.attributes.position) {
    return { isTube: false, radius: 0, length: 0, direction: '' };
  }
  
  // Force update of the mesh's world matrix to ensure all parent transformations are applied
  mesh.updateWorldMatrix(true, true);
  
  // Get the position attribute
  const positions = mesh.geometry.attributes.position;
  
  // Create arrays to store the vertices in world space
  const vertices: THREE.Vector3[] = [];
  
  // Convert all vertices to world space using mesh's matrix
  for (let i = 0; i < positions.count; i++) {
    const vertex = new THREE.Vector3();
    vertex.fromBufferAttribute(positions, i);
    // Convert to world space using the mesh's world matrix
    vertex.applyMatrix4(mesh.matrixWorld);
    vertices.push(vertex);
  }
  
  // Calculate the bounding box in world space
  const bbox = new THREE.Box3();
  vertices.forEach(v => bbox.expandByPoint(v));
  
  // Calculate dimensions
  const size = new THREE.Vector3();
  bbox.getSize(size);
  
  // Determine the main axis (largest dimension)
  let mainAxis = 'x';
  let length = size.x;
  
  if (size.y > size.x && size.y > size.z) {
    mainAxis = 'y';
    length = size.y;
  } else if (size.z > size.x && size.z > size.y) {
    mainAxis = 'z';
    length = size.z;
  }
  
  // Calculate center
  const center = new THREE.Vector3();
  bbox.getCenter(center);
  
  // Log the world space dimensions
  console.log(`Tube analysis in world space: size=${size.x.toFixed(2)}x${size.y.toFixed(2)}x${size.z.toFixed(2)}, center=(${center.x.toFixed(2)},${center.y.toFixed(2)},${center.z.toFixed(2)})`);
  
  // Analyze cross-section to determine if it's circular (tube-like)
  // For each vertex, calculate its distance from the central axis
  const axisDistances: number[] = [];
  
  vertices.forEach(v => {
    // Clone the vertex
    const vertex = v.clone();
    
    // Calculate distance from central axis
    let distance = 0;
    
    if (mainAxis === 'x') {
      // For X-oriented tube, distance from Y-Z central axis
      distance = Math.sqrt(
        Math.pow(vertex.y - center.y, 2) + 
        Math.pow(vertex.z - center.z, 2)
      );
    } else if (mainAxis === 'y') {
      // For Y-oriented tube, distance from X-Z central axis
      distance = Math.sqrt(
        Math.pow(vertex.x - center.x, 2) +
        Math.pow(vertex.z - center.z, 2)
      );
    } else { // mainAxis === 'z'
      // For Z-oriented tube, distance from X-Y central axis
      distance = Math.sqrt(
        Math.pow(vertex.x - center.x, 2) +
        Math.pow(vertex.y - center.y, 2)
      );
    }
    
    axisDistances.push(distance);
  });
  
  // Calculate average distance (estimated radius)
  const radius = axisDistances.reduce((sum, d) => sum + d, 0) / axisDistances.length;
  
  // Calculate standard deviation to determine if distances are consistent (circular)
  const variance = axisDistances.reduce((sum, d) => sum + Math.pow(d - radius, 2), 0) / axisDistances.length;
  const stdDev = Math.sqrt(variance);
  
  // If standard deviation is small relative to radius, it's likely a tube
  // We use a threshold of 30% of the radius
  const isTube = (stdDev / radius) < 0.3 && length > radius * 4;
  
  return {
    isTube,
    radius,
    length,
    direction: mainAxis
  };
}

/**
 * Calculate detailed tube geometry properties for a mesh
 */
export function calculateTubeGeometry(
  mesh: THREE.Mesh, 
  worldBox: THREE.Box3,
  mainAxis: string
): {
  radius: number,
  direction: string
} {
  // Get more accurate radius calculation by analyzing the mesh geometry
  let radius: number;
  let direction: string;

  // Method 1: Use vertex analysis if we have access to geometry
  if (mesh.geometry && mesh.geometry.attributes && mesh.geometry.attributes.position) {
    console.log(`Attempting detailed geometry analysis for mesh`);
    
    // Force update of the world matrix hierarchy to ensure all transformations are applied
    mesh.updateWorldMatrix(true, true);
    
    // Get the vertices from the geometry
    const positions = mesh.geometry.attributes.position;
    const vertices: THREE.Vector3[] = [];
    
    for (let i = 0; i < positions.count; i++) {
      const vertex = new THREE.Vector3();
      vertex.fromBufferAttribute(positions, i);
      // Convert to world space using the mesh's world matrix
      vertex.applyMatrix4(mesh.matrixWorld);
      vertices.push(vertex);
    }
    
    // Calculate the center using the actual vertices in world space
    const geometryCenter = new THREE.Vector3();
    vertices.forEach(v => geometryCenter.add(v));
    geometryCenter.divideScalar(vertices.length);
    
    console.log(`Geometry center in world space: (${geometryCenter.x.toFixed(3)}, ${geometryCenter.y.toFixed(3)}, ${geometryCenter.z.toFixed(3)})`);
    
    // Find average distance from center to vertices (approximates radius for cylindrical shapes)
    let totalDistance = 0;
    let validPoints = 0;
    
    // For each vertex, project it onto the plane perpendicular to the main axis
    // and calculate its distance from the center
    vertices.forEach(vertex => {
      let projectedDistance: number;
      
      if (mainAxis === 'x') {
        // For X-oriented shape, project onto YZ plane
        projectedDistance = Math.sqrt(
          Math.pow(vertex.y - geometryCenter.y, 2) + 
          Math.pow(vertex.z - geometryCenter.z, 2)
        );
      } else if (mainAxis === 'z') {
        // For Z-oriented shape, project onto XY plane
        projectedDistance = Math.sqrt(
          Math.pow(vertex.x - geometryCenter.x, 2) + 
          Math.pow(vertex.y - geometryCenter.y, 2)
        );
      } else {
        // For Y-oriented shape, project onto XZ plane
        projectedDistance = Math.sqrt(
          Math.pow(vertex.x - geometryCenter.x, 2) + 
          Math.pow(vertex.z - geometryCenter.z, 2)
        );
      }
      
      // Only count distances that are reasonable (to filter outliers)
      const size = new THREE.Vector3();
      worldBox.getSize(size);
      const maxSize = size.length();
      
      if (projectedDistance > 0.01 && projectedDistance < maxSize * 0.5) {
        totalDistance += projectedDistance;
        validPoints++;
      }
    });
    
    if (validPoints > 10) { // Ensure we have enough valid points for a good average
      radius = totalDistance / validPoints;
      console.log(`Calculated radius from vertices: ${radius.toFixed(3)} (from ${validPoints} points)`);
    } else {
      // Fallback to bounding box method
      console.log(`Not enough valid vertices for radius calculation, falling back to bounding box`);
      radius = calculateRadiusFromBoundingBox(worldBox, mainAxis);
    }
  } else {
    // Method 2: Fallback to bounding box dimensions
    radius = calculateRadiusFromBoundingBox(worldBox, mainAxis);
  }
  
  // Set direction based on main axis
  direction = mainAxis;
  
  // Ensure radius is reasonable (not too small)
  if (radius < 0.05) {
    radius = 0.05; // Minimum sensible radius
  }
  
  return { radius, direction };
}

/**
 * Calculate approximate radius from bounding box
 */
export function calculateRadiusFromBoundingBox(box: THREE.Box3, mainAxis: string): number {
  // Get the size of the bounding box
  const size = new THREE.Vector3();
  box.getSize(size);
  
  // Calculate radius based on the bounding box dimensions
  let radius: number;
  
  if (mainAxis === 'x') {
    // For X-oriented shape, radius is average of Y and Z dimensions
    radius = (size.y + size.z) / 4;
    console.log(`Calculated radius from bounding box (X-oriented): ${radius.toFixed(3)}`);
  } else if (mainAxis === 'z') {
    // For Z-oriented shape, radius is average of X and Y dimensions
    radius = (size.x + size.y) / 4;
    console.log(`Calculated radius from bounding box (Z-oriented): ${radius.toFixed(3)}`);
  } else {
    // For Y-oriented shape, radius is average of X and Z dimensions
    radius = (size.x + size.z) / 4;
    console.log(`Calculated radius from bounding box (Y-oriented): ${radius.toFixed(3)}`);
  }
  
  return radius;
}

/**
 * Get the main axis of a bounding box (the longest dimension)
 */
export function getLongestAxis(box: THREE.Box3): 'x' | 'y' | 'z' {
  const size = new THREE.Vector3();
  box.getSize(size);
  
  // Find the longest axis of the box
  if (size.x > size.y && size.x > size.z) {
    return 'x';
  } else if (size.z > size.y && size.z > size.x) {
    return 'z';
  } else {
    return 'y';
  }
}

/**
 * Identifies unique meshes in a model by filtering out duplicates and calculating their properties
 * @param meshes All meshes in the model
 * @returns Array of unique meshes with their properties
 */
export function identifyUniqueMeshes(
  meshes: Record<string, THREE.Mesh>
): {key: string, mesh: THREE.Mesh, box: THREE.Box3, size: THREE.Vector3, center: THREE.Vector3}[] {
  const uniqueMeshes: {key: string, mesh: THREE.Mesh, box: THREE.Box3, size: THREE.Vector3, center: THREE.Vector3}[] = [];
  const duplicateKeys = new Set<string>();
  
  // Check for duplicate meshes (same geometry)
  Object.entries(meshes).forEach(([keyA, meshA]) => {
    // Skip if already marked as duplicate
    if (duplicateKeys.has(keyA)) return;
    
    // Compute box in world space
    meshA.updateWorldMatrix(true, false);
    const boxA = new THREE.Box3().setFromObject(meshA);
    const sizeA = boxA.getSize(new THREE.Vector3());
    const centerA = boxA.getCenter(new THREE.Vector3());
    
    uniqueMeshes.push({
      key: keyA,
      mesh: meshA,
      box: boxA,
      size: sizeA,
      center: centerA
    });
    
    // Compare with other meshes to find duplicates
    Object.entries(meshes).forEach(([keyB, meshB]) => {
      // Skip if same mesh or if already marked as duplicate
      if (keyA === keyB || duplicateKeys.has(keyB)) return;
      
      // Check if they share the same geometry
      if (meshA.geometry === meshB.geometry) {
        duplicateKeys.add(keyB);
      }
    });
  });
  
  console.log(`Found ${uniqueMeshes.length} unique meshes out of ${Object.keys(meshes).length} total`);
  return uniqueMeshes;
} 