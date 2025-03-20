import * as THREE from 'three';
import { AttachmentPoint } from '../../components/AttachmentPointHelper';
import { AttachmentPointType } from '../../constants/SnapPointConfigurations';
import { ComponentAnalyzer } from './core/ComponentAnalyzer';
import * as GeometryAnalyzer from './core/GeometryAnalyzer';

/**
 * Specialized analyzer for handlebar components
 */
export class HandlebarAnalyzer extends ComponentAnalyzer {
  /**
   * Analyze a handlebar and return appropriate attachment points
   * @param meshes All meshes in the model
   * @param boundingBox The overall bounding box of the model
   * @returns Array of attachment points
   */
  public analyze(
    meshes: Record<string, THREE.Mesh>,
    boundingBox: THREE.Box3
  ): AttachmentPoint[] {
    console.log("Analyzing handlebar meshes for smart attachment points");
    
    const attachmentPoints: AttachmentPoint[] = [];
    
    // Get total mesh count for debugging
    console.log(`Total meshes in model: ${Object.keys(meshes).length}`);
    
    // Identify unique meshes by filtering out duplicates
    const uniqueMeshes = GeometryAnalyzer.identifyUniqueMeshes(meshes);
    
    // Model bounding box info for reference
    const modelBox = boundingBox.clone();
    const modelCenter = modelBox.getCenter(new THREE.Vector3());
    const modelSize = modelBox.getSize(new THREE.Vector3());
    const absoluteBottom = modelBox.min.y; // Get the absolute bottom of the entire model in world space
    
    console.log(`Recalculated model dimensions: ${modelSize.x.toFixed(2)} x ${modelSize.y.toFixed(2)} x ${modelSize.z.toFixed(2)}, center at (${modelCenter.x.toFixed(2)}, ${modelCenter.y.toFixed(2)}, ${modelCenter.z.toFixed(2)})`);
    console.log(`Absolute bottom of model: ${absoluteBottom.toFixed(2)}`);

    // DETERMINE MAIN AXIS OF THE HANDLEBAR
    // For most handlebars, this will be the axis with the greatest dimension
    let mainAxis = GeometryAnalyzer.getLongestAxis(modelBox);
    
    console.log(`Main handlebar axis appears to be ${mainAxis} (length)`);

    // ANALYZE TUBE SECTIONS to find dominant component orientation
    const tubeShapes = this.analyzeTubeSections(uniqueMeshes, mainAxis);
    
    // If we have tube shapes, verify our main axis against the dominant direction of tubes
    if (tubeShapes.length > 0) {
      // Count occurrences of each direction
      const directionCounts: Record<string, number> = { x: 0, y: 0, z: 0 };
      tubeShapes.forEach(tube => {
        directionCounts[tube.direction] = (directionCounts[tube.direction] || 0) + 1;
      });
      
      // Find most common direction
      let maxCount = 0;
      let dominantDirection = '';
      
      Object.entries(directionCounts).forEach(([dir, count]) => {
        if (count > maxCount) {
          maxCount = count;
          dominantDirection = dir;
        }
      });
      
      // If we have a dominant direction that differs from our size-based guess,
      // and multiple tubes confirm it, update the main axis
      if (dominantDirection && dominantDirection !== mainAxis && maxCount >= 2) {
        console.log(`Adjusting main axis from ${mainAxis} to ${dominantDirection} based on tube analysis`);
        mainAxis = dominantDirection as 'x' | 'y' | 'z';
      }
    }
    
    // Sort meshes by size to identify the main parts
    const sortedByVolume = [...uniqueMeshes].sort((a, b) => {
      const volumeA = a.size.x * a.size.y * a.size.z;
      const volumeB = b.size.x * b.size.y * b.size.z;
      return volumeB - volumeA; // Sort by descending volume
    });
    
    // The largest mesh is likely the main handlebar
    const mainHandlebarMesh = sortedByVolume.length > 0 ? sortedByVolume[0] : null;
    
    if (mainHandlebarMesh) {
      console.log(`Main handlebar part appears to be ${mainHandlebarMesh.key} with size ${mainHandlebarMesh.size.x.toFixed(2)} x ${mainHandlebarMesh.size.y.toFixed(2)} x ${mainHandlebarMesh.size.z.toFixed(2)}`);
    } else {
      console.warn('Could not identify main handlebar part');
      return [];
    }
    
    // STEM DETECTION - Find the stem mesh or use the center bottom of the main handlebar
    const stemMesh = this.findStemMesh(uniqueMeshes, modelCenter, modelSize) || mainHandlebarMesh;
    
    // Add stem attachment point
    const stemAttachment = this.createStemAttachment(stemMesh, absoluteBottom);
    if (stemAttachment) {
      attachmentPoints.push(stemAttachment);
    }
    
    // For single-mesh handlebars, use a simpler, more reliable approach
    if (uniqueMeshes.length <= 2) {
      console.log("Simple handlebar detected (1-2 unique meshes). Using simplified analysis.");
      
      // For single-mesh handlebars, use main axis extremes for grips
      const gripAttachments = this.createGripAttachmentsForSingleMesh(
        mainHandlebarMesh, 
        mainAxis,
        modelBox
      );
      
      attachmentPoints.push(...gripAttachments);
    } else {
      // For multi-part handlebars, try to identify specific grip meshes
      const { leftGripMesh, rightGripMesh } = this.findGripMeshes(uniqueMeshes, mainAxis, modelCenter, modelSize);
      
      // Add left grip attachment if found
      if (leftGripMesh) {
        const leftGripInfo = GeometryAnalyzer.calculateTubeGeometry(
          leftGripMesh.mesh, 
          leftGripMesh.box,
          mainAxis
        );
        
        const leftAttachments = this.createLeftGripAttachments(leftGripMesh, leftGripInfo, mainAxis);
        attachmentPoints.push(...leftAttachments);
      }
      
      // Add right grip attachment if found
      if (rightGripMesh) {
        const rightGripInfo = GeometryAnalyzer.calculateTubeGeometry(
          rightGripMesh.mesh, 
          rightGripMesh.box,
          mainAxis
        );
        
        const rightAttachments = this.createRightGripAttachments(rightGripMesh, rightGripInfo, mainAxis);
        attachmentPoints.push(...rightAttachments);
      }
      
      // If grip meshes weren't found, fall back to main handlebar extremes
      if (!leftGripMesh || !rightGripMesh) {
        console.log('Could not identify specific grip meshes, using main handlebar for grip positions');
        
        const fallbackGrips = this.createGripAttachmentsForSingleMesh(
          mainHandlebarMesh, 
          mainAxis,
          modelBox,
          !leftGripMesh, // Only create left grip if not already found
          !rightGripMesh  // Only create right grip if not already found
        );
        
        attachmentPoints.push(...fallbackGrips);
      }
    }
    
    // Debug output
    this.logAttachmentPoints(attachmentPoints);
    
    return attachmentPoints;
  }
  
  /**
   * Analyze tube sections in the model to identify potential handlebar parts
   */
  private analyzeTubeSections(
    uniqueMeshes: {key: string, mesh: THREE.Mesh, box: THREE.Box3, size: THREE.Vector3, center: THREE.Vector3}[],
    mainAxis: string
  ): { key: string, radius: number, length: number, direction: string }[] {
    const tubeShapes: { key: string, radius: number, length: number, direction: string }[] = [];
    
    // Examine all unique meshes to find tube-like shapes
    uniqueMeshes.forEach(mesh => {
      // For each mesh, calculate length-to-width ratio
      const box = mesh.box;
      const sizeX = box.max.x - box.min.x;
      const sizeY = box.max.y - box.min.y;
      const sizeZ = box.max.z - box.min.z;
      
      // Check if any dimension is significantly larger than the others
      // This would indicate a tube or bar-like shape
      const threshold = 3; // Length at least 3x greater than width/height
      
      if (sizeX > sizeY * threshold && sizeX > sizeZ * threshold) {
        // X-oriented tube
        const radius = Math.min(sizeY, sizeZ) / 2;
        tubeShapes.push({ key: mesh.key, radius, length: sizeX, direction: 'x' });
        console.log(`Found tube-like shape: key=${mesh.key}, radius=${radius.toFixed(2)}, length=${sizeX.toFixed(2)}, direction=x`);
      } else if (sizeY > sizeX * threshold && sizeY > sizeZ * threshold) {
        // Y-oriented tube
        const radius = Math.min(sizeX, sizeZ) / 2;
        tubeShapes.push({ key: mesh.key, radius, length: sizeY, direction: 'y' });
        console.log(`Found tube-like shape: key=${mesh.key}, radius=${radius.toFixed(2)}, length=${sizeY.toFixed(2)}, direction=y`);
      } else if (sizeZ > sizeX * threshold && sizeZ > sizeY * threshold) {
        // Z-oriented tube
        const radius = Math.min(sizeX, sizeY) / 2;
        tubeShapes.push({ key: mesh.key, radius, length: sizeZ, direction: 'z' });
        console.log(`Found tube-like shape: key=${mesh.key}, radius=${radius.toFixed(2)}, length=${sizeZ.toFixed(2)}, direction=z`);
      } else {
        // Also detect potential tube shapes through more detailed geometry analysis
        const detailedAnalysis = GeometryAnalyzer.analyzeForTubeShape(mesh.mesh);
        if (detailedAnalysis.isTube) {
          tubeShapes.push({ 
            key: mesh.key, 
            radius: detailedAnalysis.radius, 
            length: detailedAnalysis.length, 
            direction: detailedAnalysis.direction 
          });
          console.log(`Found tube-like shape through detailed analysis: key=${mesh.key}, radius=${detailedAnalysis.radius.toFixed(2)}, length=${detailedAnalysis.length.toFixed(2)}, direction=${detailedAnalysis.direction}`);
        }
      }
    });
    
    console.log(`Identified ${tubeShapes.length} potential tube segments`);
    return tubeShapes;
  }
  
  /**
   * Find the stem mesh in the model
   */
  private findStemMesh(
    uniqueMeshes: {key: string, mesh: THREE.Mesh, box: THREE.Box3, size: THREE.Vector3, center: THREE.Vector3}[],
    modelCenter: THREE.Vector3,
    modelSize: THREE.Vector3
  ): {key: string, mesh: THREE.Mesh, box: THREE.Box3, size: THREE.Vector3, center: THREE.Vector3} | null {
    // First approach: look for a mesh near the bottom center
    const bottomCenterMeshes = uniqueMeshes.filter(item => {
      // Check if it's near the vertical center on X/Z and toward the bottom on Y
      const isNearCenterX = Math.abs(item.center.x - modelCenter.x) < modelSize.x * 0.3;
      const isNearCenterZ = Math.abs(item.center.z - modelCenter.z) < modelSize.z * 0.3;
      const isLowerHalf = item.center.y < modelCenter.y;
      return isNearCenterX && isNearCenterZ && isLowerHalf;
    });
    
    // Sort by Y position (lowest first) to find the bottom-most
    if (bottomCenterMeshes.length > 0) {
      const sortedY = [...bottomCenterMeshes].sort((a, b) => a.center.y - b.center.y);
      const stemMesh = sortedY[0];
      console.log(`Identified stem as ${stemMesh.key} at position (${stemMesh.center.x.toFixed(2)}, ${stemMesh.center.y.toFixed(2)}, ${stemMesh.center.z.toFixed(2)})`);
      return stemMesh;
    }
    
    console.log('Could not find specific stem mesh, using main handlebar for stem position');
    return null;
  }
  
  /**
   * Find the left and right grip meshes in the model
   */
  private findGripMeshes(
    uniqueMeshes: {key: string, mesh: THREE.Mesh, box: THREE.Box3, size: THREE.Vector3, center: THREE.Vector3}[],
    mainAxis: string,
    modelCenter: THREE.Vector3,
    modelSize: THREE.Vector3
  ): {
    leftGripMesh: {key: string, mesh: THREE.Mesh, box: THREE.Box3, size: THREE.Vector3, center: THREE.Vector3} | null,
    rightGripMesh: {key: string, mesh: THREE.Mesh, box: THREE.Box3, size: THREE.Vector3, center: THREE.Vector3} | null
  } {
    let leftGripMesh = null;
    let rightGripMesh = null;
    
    if (mainAxis === 'x') {
      // Sort by X position for the standard orientation
      const sortedX = [...uniqueMeshes].sort((a, b) => a.center.x - b.center.x);
      
      // Find meshes that are significantly to the left/right of center
      const leftMeshes = sortedX.filter(item => item.center.x < modelCenter.x - modelSize.x * 0.25);
      const rightMeshes = sortedX.filter(item => item.center.x > modelCenter.x + modelSize.x * 0.25);
      
      if (leftMeshes.length > 0) {
        // Take the leftmost mesh
        leftGripMesh = leftMeshes[0];
        console.log(`Identified left grip as ${leftGripMesh.key} at position (${leftGripMesh.center.x.toFixed(2)}, ${leftGripMesh.center.y.toFixed(2)}, ${leftGripMesh.center.z.toFixed(2)})`);
      }
      
      if (rightMeshes.length > 0) {
        // Take the rightmost mesh
        rightGripMesh = rightMeshes[rightMeshes.length - 1];
        console.log(`Identified right grip as ${rightGripMesh.key} at position (${rightGripMesh.center.x.toFixed(2)}, ${rightGripMesh.center.y.toFixed(2)}, ${rightGripMesh.center.z.toFixed(2)})`);
      }
    } else if (mainAxis === 'z') {
      // For Z-oriented handlebars, sort by Z
      const sortedZ = [...uniqueMeshes].sort((a, b) => a.center.z - b.center.z);
      
      // Find meshes that are significantly to the front/back of center
      const frontMeshes = sortedZ.filter(item => item.center.z < modelCenter.z - modelSize.z * 0.25);
      const backMeshes = sortedZ.filter(item => item.center.z > modelCenter.z + modelSize.z * 0.25);
      
      if (frontMeshes.length > 0) {
        // Sort front meshes by X to get leftmost
        const sortedFrontX = [...frontMeshes].sort((a, b) => a.center.x - b.center.x);
        leftGripMesh = sortedFrontX[0];
        console.log(`Identified left grip as ${leftGripMesh.key} at position (${leftGripMesh.center.x.toFixed(2)}, ${leftGripMesh.center.y.toFixed(2)}, ${leftGripMesh.center.z.toFixed(2)})`);
      }
      
      if (backMeshes.length > 0) {
        // Sort back meshes by X to get rightmost
        const sortedBackX = [...backMeshes].sort((a, b) => b.center.x - a.center.x);
        rightGripMesh = sortedBackX[0];
        console.log(`Identified right grip as ${rightGripMesh.key} at position (${rightGripMesh.center.x.toFixed(2)}, ${rightGripMesh.center.y.toFixed(2)}, ${rightGripMesh.center.z.toFixed(2)})`);
      }
    }
    
    return { leftGripMesh, rightGripMesh };
  }
  
  /**
   * Create a stem attachment point
   */
  private createStemAttachment(
    stemMesh: {key: string, mesh: THREE.Mesh, box: THREE.Box3, size: THREE.Vector3, center: THREE.Vector3},
    absoluteBottom: number
  ): AttachmentPoint | null {
    if (!stemMesh) return null;
    
    // For the stem attachment, we need to determine the real stem orientation
    // Calculate dominant axis of the stem mesh
    let stemAxis = 'y'; // Default
    const stemSize = stemMesh.size;
    
    if (stemSize.y > stemSize.x && stemSize.y > stemSize.z) {
      stemAxis = 'y';
    } else if (stemSize.x > stemSize.y && stemSize.x > stemSize.z) {
      stemAxis = 'x';
    } else if (stemSize.z > stemSize.x && stemSize.z > stemSize.y) {
      stemAxis = 'z';
    }
    
    console.log(`Determined stem axis: ${stemAxis}`);
    
    // Find the bottom center of the stem mesh
    // Ensure stem mesh matrix is up to date
    stemMesh.mesh.updateWorldMatrix(true, true);
    
    // Get all vertices in world space
    let bottomPoint: THREE.Vector3;
    
    if (stemMesh.mesh.geometry && stemMesh.mesh.geometry.attributes && stemMesh.mesh.geometry.attributes.position) {
      // Find the lowest point (minimum Y) in world space
      const positions = stemMesh.mesh.geometry.attributes.position;
      let minY = Infinity;
      bottomPoint = new THREE.Vector3();
      
      for (let i = 0; i < positions.count; i++) {
        const vertex = new THREE.Vector3();
        vertex.fromBufferAttribute(positions, i);
        // Convert local vertex to world space
        vertex.applyMatrix4(stemMesh.mesh.matrixWorld);
        
        if (vertex.y < minY) {
          minY = vertex.y;
          bottomPoint = vertex.clone();
        }
      }
      
      // Adjust to be more centered horizontally
      bottomPoint.x = stemMesh.center.x;
      bottomPoint.z = stemMesh.center.z;
      
      console.log(`Found stem bottom point at (${bottomPoint.x.toFixed(2)}, ${bottomPoint.y.toFixed(2)}, ${bottomPoint.z.toFixed(2)}) from vertex analysis`);
    } else {
      // Fallback to using bounding box
      bottomPoint = new THREE.Vector3(
        stemMesh.center.x,
        stemMesh.box.min.y,
        stemMesh.center.z
      );
      console.log(`Using bounding box for stem bottom point: (${bottomPoint.x.toFixed(2)}, ${bottomPoint.y.toFixed(2)}, ${bottomPoint.z.toFixed(2)})`);
    }
    
    // Determine stem normal - by default we'll use downward normal
    let stemNormal: [number, number, number] = [0, -1, 0]; // Default to pointing straight down
    
    // Create the stem attachment point - make it only about the size of the stem itself
    const stemWidth = 0.5; // Use a much smaller, more focused size
    
    return this.createAttachmentPoint({
      position: [bottomPoint.x, bottomPoint.y, bottomPoint.z],
      normal: stemNormal,
      name: 'Stem Attachment',
      color: '#3498db',
      type: AttachmentPointType.PLANAR,
      width: stemWidth,
      height: stemWidth, // Make it square for better coverage
      meshId: stemMesh.key
    });
  }
  
  /**
   * Create grip attachments for single-mesh handlebars
   * Uses opposites ends of the mesh along the main axis
   */
  private createGripAttachmentsForSingleMesh(
    meshItem: {key: string, mesh: THREE.Mesh, box: THREE.Box3, size: THREE.Vector3, center: THREE.Vector3},
    mainAxis: 'x' | 'y' | 'z',
    modelBox: THREE.Box3,
    createLeftGrip: boolean = true,
    createRightGrip: boolean = true
  ): AttachmentPoint[] {
    const attachmentPoints: AttachmentPoint[] = [];
    
    // Calculate approximate tube radius
    const radInfo = GeometryAnalyzer.calculateTubeGeometry(
      meshItem.mesh, 
      modelBox,
      mainAxis
    );
    
    // Set up directions for finding left and right extremes based on the main axis
    let leftDirection: THREE.Vector3;
    let rightDirection: THREE.Vector3;
    let leftNormal: [number, number, number];
    let rightNormal: [number, number, number];
    
    if (mainAxis === 'x') {
      // For X-oriented handlebar
      leftDirection = new THREE.Vector3(-1, 0, 0);  // Left is negative X
      rightDirection = new THREE.Vector3(1, 0, 0);  // Right is positive X
      leftNormal = [-1, 0, 0];  // Normal pointing left
      rightNormal = [1, 0, 0];   // Normal pointing right
    } else if (mainAxis === 'z') {
      // For Z-oriented handlebar
      leftDirection = new THREE.Vector3(0, 0, -1);  // Left is negative Z
      rightDirection = new THREE.Vector3(0, 0, 1);  // Right is positive Z
      leftNormal = [0, 0, -1];  // Normal pointing forward
      rightNormal = [0, 0, 1];   // Normal pointing backward
    } else { // 'y'
      // For Y-oriented handlebar (less common)
      leftDirection = new THREE.Vector3(-1, 0, 0);  // Left is negative X
      rightDirection = new THREE.Vector3(1, 0, 0);  // Right is positive X
      leftNormal = [-1, 0, 0];  // Normal pointing left
      rightNormal = [1, 0, 0];   // Normal pointing right
    }
    
    if (createLeftGrip) {
      // Find the left extreme point
      console.log("Finding left grip endpoint...");
      const leftPoint = GeometryAnalyzer.findExtremeVertexInDirection(meshItem.mesh, leftDirection) || 
                       GeometryAnalyzer.findExtremePoint(meshItem.mesh, 'min', mainAxis === 'x' ? 'x' : 'z');
      
      // Create left grip attachment with proper tube properties
      const leftGrip = this.createTubeAttachmentPoint({
        position: [leftPoint.x, leftPoint.y, leftPoint.z],
        normal: leftNormal,
        name: 'Left Grip',
        meshId: meshItem.key,
        radius: radInfo.radius,
        side: 'left',
        mainAxis: mainAxis
      });
      
      attachmentPoints.push(leftGrip);
      console.log(`Created left grip attachment at (${leftPoint.x.toFixed(2)}, ${leftPoint.y.toFixed(2)}, ${leftPoint.z.toFixed(2)}), radius ${radInfo.radius.toFixed(2)}`);
      
      // Only add brake lever if explicitly requested for simple handlebar models
    }
    
    if (createRightGrip) {
      // Find the right extreme point
      console.log("Finding right grip endpoint...");
      const rightPoint = GeometryAnalyzer.findExtremeVertexInDirection(meshItem.mesh, rightDirection) || 
                         GeometryAnalyzer.findExtremePoint(meshItem.mesh, 'max', mainAxis === 'x' ? 'x' : 'z');
      
      // Create right grip attachment with proper tube properties
      const rightGrip = this.createTubeAttachmentPoint({
        position: [rightPoint.x, rightPoint.y, rightPoint.z],
        normal: rightNormal,
        name: 'Right Grip',
        meshId: meshItem.key,
        radius: radInfo.radius,
        side: 'right',
        mainAxis: mainAxis
      });
      
      attachmentPoints.push(rightGrip);
      console.log(`Created right grip attachment at (${rightPoint.x.toFixed(2)}, ${rightPoint.y.toFixed(2)}, ${rightPoint.z.toFixed(2)}), radius ${radInfo.radius.toFixed(2)}`);
      
      // Only add brake lever if explicitly requested for simple handlebar models
    }
    
    return attachmentPoints;
  }
  
  /**
   * Create left grip and associated attachment points
   */
  private createLeftGripAttachments(
    leftGripMesh: {key: string, mesh: THREE.Mesh, box: THREE.Box3, size: THREE.Vector3, center: THREE.Vector3},
    leftGripInfo: { radius: number, direction: string },
    mainAxis: string
  ): AttachmentPoint[] {
    const attachmentPoints: AttachmentPoint[] = [];
    
    // Set up the main direction based on axis
    let direction: THREE.Vector3;
    let leftNormal: [number, number, number];
    
    if (mainAxis === 'x') {
      // For standard X-oriented handlebar
      direction = new THREE.Vector3(-1, 0, 0); // Direction toward left
      leftNormal = [-1, 0, 0]; // Normal pointing left
    } else if (mainAxis === 'z') {
      // For Z-oriented handlebar
      direction = new THREE.Vector3(0, 0, -1); // Direction toward front
      leftNormal = [0, 0, -1]; // Normal pointing forward
    } else {
      // Fallback
      direction = leftGripMesh.box.min.x < leftGripMesh.box.min.z ? 
                    new THREE.Vector3(-1, 0, 0) : 
                    new THREE.Vector3(0, 0, -1);
      leftNormal = leftGripMesh.box.min.x < leftGripMesh.box.min.z ? [-1, 0, 0] : [0, 0, -1];
    }
    
    // Find the extreme vertex in the negative direction
    const leftPoint = GeometryAnalyzer.findExtremeVertexInDirection(leftGripMesh.mesh, direction) || 
                     GeometryAnalyzer.findExtremePoint(leftGripMesh.mesh, 'min', mainAxis === 'x' ? 'x' : 'z');
    
    // Create left grip attachment point with proper tube wrapping
    const leftGrip = this.createTubeAttachmentPoint({
      position: [leftPoint.x, leftPoint.y, leftPoint.z],
      normal: leftNormal,
      name: 'Left Grip',
      meshId: leftGripMesh.key,
      radius: leftGripInfo.radius,
      side: 'left',
      mainAxis: mainAxis as 'x' | 'y' | 'z'
    });
    
    attachmentPoints.push(leftGrip);
    console.log(`Created left grip attachment at (${leftPoint.x.toFixed(2)}, ${leftPoint.y.toFixed(2)}, ${leftPoint.z.toFixed(2)}), radius ${leftGripInfo.radius.toFixed(2)}`);
    
    // Add left brake lever attachment point
    const brakePoint = this.calculateBrakeLeverPosition(leftPoint, leftNormal, leftGripInfo.radius, 'left');
    
    const leftBrake = this.createAttachmentPoint({
      position: [brakePoint.x, brakePoint.y, brakePoint.z],
      normal: [brakePoint.normal.x, brakePoint.normal.y, brakePoint.normal.z],
      name: 'Left Brake Lever',
      color: '#9b59b6',
      type: AttachmentPointType.PLANAR,
      width: leftGripInfo.radius * 3,
      height: leftGripInfo.radius * 2,
      meshId: leftGripMesh.key
    });
    
    attachmentPoints.push(leftBrake);
    
    return attachmentPoints;
  }
  
  /**
   * Create right grip and associated attachment points
   */
  private createRightGripAttachments(
    rightGripMesh: {key: string, mesh: THREE.Mesh, box: THREE.Box3, size: THREE.Vector3, center: THREE.Vector3},
    rightGripInfo: { radius: number, direction: string },
    mainAxis: string
  ): AttachmentPoint[] {
    const attachmentPoints: AttachmentPoint[] = [];
    
    // Set up the main direction based on axis
    let direction: THREE.Vector3;
    let rightNormal: [number, number, number];
    
    if (mainAxis === 'x') {
      // For standard X-oriented handlebar
      direction = new THREE.Vector3(1, 0, 0); // Direction toward right
      rightNormal = [1, 0, 0]; // Normal pointing right
    } else if (mainAxis === 'z') {
      // For Z-oriented handlebar
      direction = new THREE.Vector3(0, 0, 1); // Direction toward back
      rightNormal = [0, 0, 1]; // Normal pointing backward
    } else {
      // Fallback
      direction = rightGripMesh.box.max.x > rightGripMesh.box.max.z ? 
                   new THREE.Vector3(1, 0, 0) : 
                   new THREE.Vector3(0, 0, 1);
      rightNormal = rightGripMesh.box.max.x > rightGripMesh.box.max.z ? [1, 0, 0] : [0, 0, 1];
    }
    
    // Find the extreme vertex in the positive direction
    const rightPoint = GeometryAnalyzer.findExtremeVertexInDirection(rightGripMesh.mesh, direction) || 
                      GeometryAnalyzer.findExtremePoint(rightGripMesh.mesh, 'max', mainAxis === 'x' ? 'x' : 'z');
    
    // Create right grip attachment point with proper tube wrapping
    const rightGrip = this.createTubeAttachmentPoint({
      position: [rightPoint.x, rightPoint.y, rightPoint.z],
      normal: rightNormal,
      name: 'Right Grip',
      meshId: rightGripMesh.key,
      radius: rightGripInfo.radius,
      side: 'right',
      mainAxis: mainAxis as 'x' | 'y' | 'z'
    });
    
    attachmentPoints.push(rightGrip);
    console.log(`Created right grip attachment at (${rightPoint.x.toFixed(2)}, ${rightPoint.y.toFixed(2)}, ${rightPoint.z.toFixed(2)}), radius ${rightGripInfo.radius.toFixed(2)}`);
    
    // Add right brake lever attachment point
    const brakePoint = this.calculateBrakeLeverPosition(rightPoint, rightNormal, rightGripInfo.radius, 'right');
    
    const rightBrake = this.createAttachmentPoint({
      position: [brakePoint.x, brakePoint.y, brakePoint.z],
      normal: [brakePoint.normal.x, brakePoint.normal.y, brakePoint.normal.z],
      name: 'Right Brake Lever',
      color: '#9b59b6',
      type: AttachmentPointType.PLANAR,
      width: rightGripInfo.radius * 3,
      height: rightGripInfo.radius * 2,
      meshId: rightGripMesh.key
    });
    
    attachmentPoints.push(rightBrake);
    
    return attachmentPoints;
  }
  
  /**
   * Calculate the position and orientation for a brake lever based on a grip position
   */
  private calculateBrakeLeverPosition(
    gripPoint: THREE.Vector3, 
    gripNormal: [number, number, number],
    radius: number,
    side: 'left' | 'right'
  ): { x: number, y: number, z: number, normal: THREE.Vector3 } {
    // Create a local coordinate frame from the grip
    const normalVector = new THREE.Vector3(gripNormal[0], gripNormal[1], gripNormal[2]).normalize();
    const upVector = new THREE.Vector3(0, 1, 0);
    let rightVector: THREE.Vector3;
    
    // Handle the case where normal is close to up vector
    if (Math.abs(normalVector.dot(upVector)) > 0.9) {
      // Normal is close to up/down, use a different reference
      const tempRef = new THREE.Vector3(0, 0, 1);
      rightVector = new THREE.Vector3().crossVectors(normalVector, tempRef).normalize();
    } else {
      rightVector = new THREE.Vector3().crossVectors(normalVector, upVector).normalize();
    }
    
    // Recalculate up vector to ensure orthogonality
    const adjustedUpVector = new THREE.Vector3().crossVectors(rightVector, normalVector).normalize();
    
    // Calculate "forward" direction for the brake lever
    // For left grip, "forward" is perpendicular to normal, typically away from bike
    // For right grip, "forward" is also perpendicular but in opposite direction
    const forwardVector = new THREE.Vector3().crossVectors(adjustedUpVector, normalVector).normalize();
    
    // For right brake lever, we invert the direction
    if (side === 'right') {
      forwardVector.negate();
    }
    
    // Offset the brake lever position in the local frame
    const offset = 3 * radius; // Offset distance
    const brakePos = {
      x: gripPoint.x + forwardVector.x * offset,
      y: gripPoint.y + forwardVector.y * offset,
      z: gripPoint.z + forwardVector.z * offset,
      normal: forwardVector
    };
    
    return brakePos;
  }
} 