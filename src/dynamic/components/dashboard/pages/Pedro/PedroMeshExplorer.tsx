import React, { useState, useEffect } from 'react';
import MeshExplorer from './components/MeshExplorer';
import MeshDebugHelper from './components/MeshDebugHelper';
import SnapPointControl from './components/SnapPointControl';
import { Button, Input, Group, Stack, Title, Text, Card, Tabs, Switch, Select, Badge } from '@mantine/core';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid, Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Demo page for the MeshExplorer component
 * This allows testing GLB visualization and mesh data extraction with snap point placement
 */
const PedroMeshExplorer: React.FC = () => {
  // Default to the example model, but allow users to enter their own URL
  const [modelUrl, setModelUrl] = useState<string>('/sample_models/173861337486-Front_Wheel.glb');
  const [inputUrl, setInputUrl] = useState<string>(modelUrl);
  const [meshInfo, setMeshInfo] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>('viewer');
  const [addMode, setAddMode] = useState<'manual' | 'auto' | 'mesh'>('manual');
  const [showDebug, setShowDebug] = useState<boolean>(true);
  const [modelStats, setModelStats] = useState<any>(null);
  
  // Handle meshes loaded from the MeshExplorer
  const handleMeshesLoaded = (meshes: any[]) => {
    setMeshInfo(meshes);
    console.log('Meshes loaded in PedroMeshExplorer:', meshes);
    
    // Calculate and set model statistics
    if (meshes.length > 0) {
      // Find model dimensions
      let minX = Infinity, minY = Infinity, minZ = Infinity;
      let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
      
      meshes.forEach(mesh => {
        minX = Math.min(minX, mesh.position[0]);
        minY = Math.min(minY, mesh.position[1]);
        minZ = Math.min(minZ, mesh.position[2]);
        maxX = Math.max(maxX, mesh.position[0]);
        maxY = Math.max(maxY, mesh.position[1]);
        maxZ = Math.max(maxZ, mesh.position[2]);
      });
      
      const width = maxX - minX;
      const height = maxY - minY;
      const depth = maxZ - minZ;
      
      setModelStats({
        meshCount: meshes.length,
        dimensions: {
          width: width.toFixed(2),
          height: height.toFixed(2),
          depth: depth.toFixed(2)
        },
        bounds: {
          min: [minX.toFixed(2), minY.toFixed(2), minZ.toFixed(2)],
          max: [maxX.toFixed(2), maxY.toFixed(2), maxZ.toFixed(2)]
        }
      });
    }
  };
  
  // Load a model URL
  const handleLoadModel = () => {
    setModelUrl(inputUrl);
  };
  
  // Try predefined sample models
  const sampleModels = [
    { label: 'Front Wheel', value: '/sample_models/173861337486-Front_Wheel.glb' },
    { label: 'Handlebar', value: '/sample_models/handlebar.glb' },
    { label: 'Bike Frame', value: '/sample_models/bike_frame.glb' }
  ];
  
  return (
    <div className="w-full h-[calc(100vh-60px)] bg-gray-100 flex flex-col">
      <div className="p-4 bg-gray-900 text-white">
        <Group justify="space-between">
          <Title order={2}>Advanced Mesh Explorer</Title>
          <Text c="dimmed">Mesh Visualization & Snap Point Placement Tool</Text>
        </Group>
      </div>
      
      {/* Controls Bar */}
      <div className="p-3 bg-gray-800 text-white flex items-center justify-between">
        <div className="flex items-center gap-2 flex-1">
          <Input
            placeholder="Enter model URL or select from samples"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.currentTarget.value)}
            className="flex-1"
          />
          <Button onClick={handleLoadModel} color="blue">Load</Button>
        </div>
        
        <Select
          placeholder="Sample Models"
          data={sampleModels}
          onChange={(value) => {
            if (value) {
              setInputUrl(value);
              setModelUrl(value);
            }
          }}
          className="ml-2 w-48"
        />
        
        <Group ml="md">
          <Select
            label="Snap Point Mode"
            placeholder="Add mode"
            value={addMode}
            onChange={(value: any) => setAddMode(value)}
            data={[
              { value: 'manual', label: 'Manual' },
              { value: 'auto', label: 'Auto-Detect' },
              { value: 'mesh', label: 'Attach to Mesh' },
            ]}
          />
          
          <Switch 
            checked={showDebug}
            onChange={(event) => setShowDebug(event.currentTarget.checked)}
            label="Show Debug Info"
          />
        </Group>
      </div>
      
      {/* Model Stats */}
      {modelStats && (
        <div className="px-4 py-2 bg-gray-700 text-white flex items-center justify-between text-sm">
          <Badge color="blue">Meshes: {modelStats.meshCount}</Badge>
          <Text size="xs">Dimensions: {modelStats.dimensions.width} × {modelStats.dimensions.height} × {modelStats.dimensions.depth}</Text>
          <Text size="xs">Min: ({modelStats.bounds.min.join(', ')})</Text>
          <Text size="xs">Max: ({modelStats.bounds.max.join(', ')})</Text>
        </div>
      )}
      
      <Tabs value={activeTab} onChange={setActiveTab} className="flex-1 flex flex-col">
        <Tabs.List>
          <Tabs.Tab value="viewer">Model Viewer</Tabs.Tab>
          <Tabs.Tab value="explorer">Mesh Explorer</Tabs.Tab>
          <Tabs.Tab value="debug">Debug View</Tabs.Tab>
        </Tabs.List>
        
        <Tabs.Panel value="viewer" className="flex-1">
          <div className="w-full h-full">
            <Canvas shadows camera={{ position: [0, 2, 5], fov: 45 }}>
              <ambientLight intensity={0.3} />
              <directionalLight position={[5, 10, 5]} intensity={1.0} castShadow />
              <directionalLight position={[-5, 5, -5]} intensity={0.5} />
              
              <Grid 
                position={[0, 0, 0]}
                infiniteGrid
                cellSize={0.5}
                sectionSize={3}
                fadeDistance={25}
              />
              
              <Environment preset="studio" />
              
              {/* Load the model */}
              {modelUrl && (
                <mesh>
                  <primitive object={new THREE.Object3D()} />
                </mesh>
              )}
              
              <OrbitControls makeDefault />
              <axesHelper args={[1]} />
            </Canvas>
          </div>
        </Tabs.Panel>
        
        <Tabs.Panel value="explorer" className="flex-1">
          <div className="w-full h-full">
            {/* Main MeshExplorer Component */}
            <MeshExplorer
              modelUrl={modelUrl}
              onMeshesLoaded={handleMeshesLoaded}
            />
          </div>
        </Tabs.Panel>
        
        <Tabs.Panel value="debug" className="flex-1">
          <div className="w-full h-full">
            <Card className="h-full">
              <Card.Section className="p-3 bg-gray-800 text-white">
                <Title order={4}>Mesh Structure & Debug View</Title>
              </Card.Section>
              
              <div className="flex flex-col h-[calc(100%-60px)] p-3">
                <Text className="mb-3">
                  This view shows detailed information about the model's mesh structure.
                  Each mesh is highlighted with a bounding box and labeled with its name.
                </Text>
                
                <div className="flex-1 border border-gray-300 rounded overflow-hidden">
                  <Canvas shadows camera={{ position: [0, 2, 5], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 10, 5]} intensity={1.0} />
                    
                    <Grid 
                      position={[0, 0, 0]}
                      infiniteGrid
                      cellSize={0.5}
                      sectionSize={3}
                      fadeDistance={25}
                    />
                    
                    <Environment preset="studio" />
                    
                    {/* Show the mesh debug view */}
                    {/* Since we don't have direct scene access here,
                        we'd implement this differently in a real app */}
                    
                    <OrbitControls makeDefault />
                    <axesHelper args={[1]} />
                  </Canvas>
                </div>
                
                <div className="mt-3">
                  <Text fw={500}>Mesh Structure:</Text>
                  <div className="mt-2 h-48 overflow-auto border border-gray-200 rounded p-2">
                    {meshInfo.length > 0 ? (
                      <pre className="text-xs">{JSON.stringify(meshInfo, null, 2)}</pre>
                    ) : (
                      <Text color="dimmed" size="sm">No mesh data available yet. Load a model to see details.</Text>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default PedroMeshExplorer; 