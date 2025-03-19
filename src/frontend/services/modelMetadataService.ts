import * as THREE from 'three';

export interface AttachmentPoint {
  name: string;
  position: THREE.Vector3;
  rotation: THREE.Euler;
}

export const extractModelMetadata = (scene: THREE.Object3D) => {
  const attachmentPoints: AttachmentPoint[] = [];
  
  scene.traverse((node) => {
    if (node instanceof THREE.Mesh) {
      const name = node.name || node.userData.geoName;
      
      if (name && /(plane|tire|crank|seat|handle)/i.test(name)) {
        const worldPosition = new THREE.Vector3();
        node.getWorldPosition(worldPosition);
        
        // Create temporary quaternion for rotation
        const quaternion = new THREE.Quaternion();
        node.getWorldQuaternion(quaternion);
        
        attachmentPoints.push({
          name,
          position: worldPosition,
          rotation: new THREE.Euler().setFromQuaternion(quaternion)
        });
      }
    }
  });

  return {
    attachmentPoints,
    vertexCount: scene.children.length,
    boundingBox: new THREE.Box3().setFromObject(scene)
  };
};

export const createAttachmentPointVisuals = (
  scene: THREE.Scene, 
  point: AttachmentPoint
) => {
  const helper = new THREE.AxesHelper(0.5);
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.2),
    new THREE.MeshBasicMaterial({ 
      color: 0x00ff00,
      transparent: true,
      opacity: 0.8 
    })
  );

  helper.position.copy(point.position);
  sphere.position.copy(point.position);
  
  scene.add(helper);
  scene.add(sphere);

  return { helper, sphere };
};