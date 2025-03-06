import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { extractModelMetadata, createAttachmentPointVisuals } from '../../services/modelMetadataService';
import { ErrorBoundary } from '@shared/components';


interface ModelViewerProps {
  modelUrl: string;
  initialZoom?: number;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelUrl, initialZoom = 1.5 }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  let animationFrameId: number;

  useEffect(() => {
    setLoading(true);
    try {
      if (!mountRef.current || !modelUrl) return;

      // Setup scene
      const scene = new THREE.Scene();
      sceneRef.current = scene;
      scene.background = new THREE.Color(0xf0f0f0);

      // Add lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 5, 5);
      directionalLight.castShadow = true;
      scene.add(ambientLight, directionalLight);

      // Add hemisphere light for better ambient lighting
      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.8);
      hemiLight.position.set(0, 20, 0);
      scene.add(hemiLight);

      // Setup camera with wider FOV
      const camera = new THREE.PerspectiveCamera(
        60, // Wider FOV
        mountRef.current.clientWidth / mountRef.current.clientHeight,
        0.1,
        1000
      );
      camera.position.set(5, 5, 5); // Start further back

      // Setup renderer
      const renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
      });
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      mountRef.current.appendChild(renderer.domElement);

      // Setup controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.minDistance = 1;
      controls.maxDistance = 100;
      controls.enablePan = true;
      controls.screenSpacePanning = true;

      // Setup loader
      const loader = new GLTFLoader();
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
      loader.setDRACOLoader(dracoLoader);

      // Add grid helper
      const size = 20;
      const divisions = 20;
      const gridHelper = new THREE.GridHelper(size, divisions);
      scene.add(gridHelper);

      loader.load(
        modelUrl,
        (gltf) => {
          setLoading(false);
          
          // Reset scene but keep lights and grid
          while(scene.children.length > 0){ 
            scene.remove(scene.children[0]); 
          }
          scene.add(ambientLight, directionalLight, hemiLight, gridHelper);
          
          // Add model to scene
          scene.add(gltf.scene);
          
          // Calculate bounding box
          const box = new THREE.Box3().setFromObject(gltf.scene);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());

          // Center model
          gltf.scene.position.x = -center.x;
          gltf.scene.position.y = -center.y;
          gltf.scene.position.z = -center.z;

          // Adjust camera based on model size
          const maxDim = Math.max(size.x, size.y, size.z);
          const fov = camera.fov * (Math.PI / 180);
          let cameraZ = Math.abs(maxDim / Math.sin(fov / 2));
          cameraZ *= initialZoom; // Apply zoom factor

          // Position camera to show full model
          camera.position.set(cameraZ, cameraZ / 2, cameraZ);
          camera.lookAt(center);
          
          // Update controls
          controls.target.copy(center);
          controls.update();

          // Enable shadows
          gltf.scene.traverse((node) => {
            if (node instanceof THREE.Mesh) {
              node.castShadow = true;
              node.receiveShadow = true;
            }
          });

          // Start animation loop
          const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
          };
          animate();
        },
        (progress) => {
          const percentage = (progress.loaded / progress.total * 100);
          console.log('Loading progress:', percentage.toFixed(2) + '%');
        },
        (error) => {
          setLoading(false);
          console.error('Error loading model:', error);
          setError(`Failed to load model: ${error}`);
        }
      );

      // Handle resize
      const handleResize = () => {
        if (!mountRef.current) return;
        camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        if (mountRef.current?.contains(renderer.domElement)) {
          mountRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
        controls.dispose();
      };
    } catch (err) {
      console.error('Error setting up scene:', err);
      setError('Failed to initialize 3D viewer');
      setLoading(false);
    }
  }, [modelUrl, initialZoom]);

  return (
    <div 
      ref={mountRef} 
      style={{ 
        width: '100%', 
        height: '100%',
        position: 'relative',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        overflow: 'hidden'
      }}
    >
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p>Loading model...</p>
        </div>
      )}
      {error && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(255, 0, 0, 0.8)',
          color: 'white',
          padding: '10px',
          borderRadius: '4px'
        }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default ModelViewer;