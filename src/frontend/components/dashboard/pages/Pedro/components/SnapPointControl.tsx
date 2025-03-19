import React, { useState, useRef, useEffect } from 'react';
import { Button, Group, Text, Stack } from '@mantine/core';
import { IconPlus, IconCheck } from '@tabler/icons-react';

// These imports will only be used in the 3D component
export interface MeshData {
  id: string;
  name: string;
  position: [number, number, number];
}

export interface SnapPoint {
  id: string;
  position: [number, number, number];
  rotation: [number, number, number, number];
  meshId?: string;
  color: string;
}

export interface SnapPointControlProps {
  meshes: MeshData[];
  snapPoints: SnapPoint[];
  selectedPointId: string | null;
  selectedMeshId: string | null;
  addMode: 'manual' | 'automatic' | 'mesh';
  onAddPoint: (point: SnapPoint) => void;
  onUpdatePoint: (point: SnapPoint) => void;
  onSelectPoint: (id: string | null) => void;
}

/**
 * UI component that handles controls for snap points (outside Canvas)
 */
const SnapPointControl: React.FC<SnapPointControlProps> = ({
  meshes,
  snapPoints,
  selectedPointId,
  selectedMeshId,
  addMode,
  onAddPoint,
  onUpdatePoint,
  onSelectPoint
}) => {
  const [isPlacingPoint, setIsPlacingPoint] = useState(false);
  
  // Handle auto-detection
  const handleAutoDetect = () => {
    if (meshes.length === 0) return;
    
    console.log('Auto-detecting attachment points...');
    const detectedPoints: SnapPoint[] = [];
    
    // 1. Add center points for all major meshes
    meshes.forEach(mesh => {
      const pointId = `snap-auto-${mesh.id}-center`;
      detectedPoints.push({
        id: pointId,
        position: [...mesh.position],
        rotation: [0, 0, 0, 1],
        meshId: mesh.id,
        color: '#00ff00'
      });
    });
    
    // 2. Find extremities (highest/lowest/leftmost/rightmost points)
    // For this example, we'll add points to both ends of each axis for the main mesh
    if (meshes.length > 0) {
      // Find the main mesh (typically the largest or first one)
      const mainMesh = meshes[0];
      
      // Add points along each primary axis at some distance
      const axisDistance = 1.0; // Distance from center
      
      // X-axis points
      detectedPoints.push({
        id: `snap-auto-x-pos`,
        position: [mainMesh.position[0] + axisDistance, mainMesh.position[1], mainMesh.position[2]],
        rotation: [0, 0, 0, 1],
        color: '#ff3300'
      });
      
      detectedPoints.push({
        id: `snap-auto-x-neg`,
        position: [mainMesh.position[0] - axisDistance, mainMesh.position[1], mainMesh.position[2]],
        rotation: [0, 0, 0, 1],
        color: '#ff3300'
      });
      
      // Y-axis points
      detectedPoints.push({
        id: `snap-auto-y-pos`,
        position: [mainMesh.position[0], mainMesh.position[1] + axisDistance, mainMesh.position[2]],
        rotation: [0, 0, 0, 1],
        color: '#33ff00'
      });
      
      detectedPoints.push({
        id: `snap-auto-y-neg`,
        position: [mainMesh.position[0], mainMesh.position[1] - axisDistance, mainMesh.position[2]],
        rotation: [0, 0, 0, 1],
        color: '#33ff00'
      });
      
      // Z-axis points
      detectedPoints.push({
        id: `snap-auto-z-pos`,
        position: [mainMesh.position[0], mainMesh.position[1], mainMesh.position[2] + axisDistance],
        rotation: [0, 0, 0, 1],
        color: '#0033ff'
      });
      
      detectedPoints.push({
        id: `snap-auto-z-neg`,
        position: [mainMesh.position[0], mainMesh.position[1], mainMesh.position[2] - axisDistance],
        rotation: [0, 0, 0, 1],
        color: '#0033ff'
      });
    }
    
    // Add all auto-detected points
    detectedPoints.forEach(point => {
      onAddPoint(point);
    });
    
    console.log(`Auto-detected and added ${detectedPoints.length} snap points`);
  };
  
  // Add a snap point at the selected mesh's position
  const handleAddToMesh = () => {
    if (!selectedMeshId) return;
    
    const mesh = meshes.find(m => m.id === selectedMeshId);
    if (!mesh) return;
    
    const newPointId = `snap-${Date.now()}`;
    const newPoint: SnapPoint = {
      id: newPointId,
      position: [...mesh.position],
      rotation: [0, 0, 0, 1],
      meshId: selectedMeshId,
      color: getRandomColor()
    };
    
    onAddPoint(newPoint);
    onSelectPoint(newPointId);
    console.log(`Added snap point at (${mesh.position[0]}, ${mesh.position[1]}, ${mesh.position[2]}) attached to mesh ${selectedMeshId}`);
  };
  
  // List of points to display in the UI
  const renderPointsList = () => {
    if (snapPoints.length === 0) {
      return <Text size="sm" color="dimmed">No attachment points added yet</Text>;
    }
    
    return (
      <Stack gap="xs" mt="md">
        {snapPoints.map(point => (
          <Button 
            key={point.id}
            variant={selectedPointId === point.id ? "filled" : "light"}
            color={selectedPointId === point.id ? "blue" : "gray"}
            size="xs"
            leftSection={
              <div 
                style={{
                  width: 10, 
                  height: 10, 
                  backgroundColor: point.color,
                  borderRadius: '50%'
                }}
              />
            }
            onClick={() => onSelectPoint(point.id)}
            fullWidth
            styles={{ 
              inner: { 
                justifyContent: 'flex-start',
                overflow: 'hidden'
              },
              label: {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                display: 'block',
                textAlign: 'left'
              }
            }}
          >
            {point.meshId ? `${point.meshId.split('_')[1] || ''}: ` : ''}
            {`(${point.position.map(p => p.toFixed(2)).join(', ')})`}
          </Button>
        ))}
      </Stack>
    );
  };
  
  return (
    <Stack gap="md">
      {/* Control buttons based on mode */}
      <Group>
        {addMode === 'manual' && (
          <Button 
            size="sm" 
            color={isPlacingPoint ? "green" : "blue"}
            leftSection={isPlacingPoint ? <IconCheck size={14} /> : <IconPlus size={14} />}
            onClick={() => setIsPlacingPoint(!isPlacingPoint)}
          >
            {isPlacingPoint ? 'Placing...' : 'Add Point'}
          </Button>
        )}
        
        {addMode === 'automatic' && (
          <Button 
            size="sm" 
            color="green"
            onClick={handleAutoDetect}
          >
            Auto-Detect Points
          </Button>
        )}
        
        {addMode === 'mesh' && selectedMeshId && (
          <Button 
            size="sm" 
            color="violet"
            onClick={handleAddToMesh}
          >
            Add to Mesh
          </Button>
        )}
      </Group>
      
      {/* Points list */}
      {renderPointsList()}
    </Stack>
  );
};

// Helper function to generate random colors
function getRandomColor(): string {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default SnapPointControl; 