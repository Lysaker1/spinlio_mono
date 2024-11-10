import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface ModelViewerProps {
  modelBlob: Blob;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelBlob }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!modelBlob || !mountRef.current) return;

    console.log('ModelViewer: Creating URL from blob, size:', modelBlob.size);
    const url = URL.createObjectURL(modelBlob);
    console.log('ModelViewer: Created URL:', url);

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(5, 5, 5);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);

    // Controls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 0.1;
    controls.maxDistance = 100;
    controls.enableZoom = true;
    controls.zoomSpeed = 1.5;
    controls.enablePan = true;
    controls.panSpeed = 1.0;
    controls.rotateSpeed = 1.0;

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Grid setup
    const gridHelper = new THREE.GridHelper(20, 20, 0x888888, 0x888888);
    scene.add(gridHelper);

    // Axes helper
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    // Load model
    const loader = new GLTFLoader();
    loader.load(
      url,
      (gltf) => {
        console.log('ModelViewer: Model loaded successfully');
        
        // Add model to scene
        const model = gltf.scene;
        scene.add(model);

        // Center model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        // Reset model position
        model.position.x = -center.x;
        model.position.y = -center.y;
        model.position.z = -center.z;

        // Adjust camera
        const maxDim = Math.max(size.x, size.y, size.z);
        camera.position.set(maxDim * 2, maxDim * 2, maxDim * 2);
        controls.target.set(0, 0, 0);
        controls.update();

        // Enable shadows
        model.traverse((node) => {
          if (node instanceof THREE.Mesh) {
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });

        // Animation loop
        const animate = () => {
          requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
        };
        animate();
      },
      (progress) => {
        console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
      },
      (error: unknown) => {
        console.error('Error loading model:', error);
        setError('Failed to load 3D model: ' + (error as Error).message);
      }
    );

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Handle wheel zoom
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const delta = event.deltaY;
      const zoomSpeed = 0.1;
      
      if (delta > 0) {
        camera.position.multiplyScalar(1 + zoomSpeed);
      } else {
        camera.position.multiplyScalar(1 - zoomSpeed);
      }
      
      controls.update();
    };

    mountRef.current?.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      console.log('ModelViewer: Cleaning up');
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeEventListener('wheel', handleWheel);
      URL.revokeObjectURL(url);
      renderer.dispose();
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [modelBlob]);

  return (
    <div className="model-viewer">
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
      />
      {error && (
        <div 
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(255, 0, 0, 0.8)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '4px',
            zIndex: 1000
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default ModelViewer;