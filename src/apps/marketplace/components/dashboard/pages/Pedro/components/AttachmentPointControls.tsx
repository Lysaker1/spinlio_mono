import React from 'react';
import { 
  Box, 
  Button, 
  Group, 
  Paper, 
  Stack, 
  Text, 
  Title, 
  Badge, 
  ActionIcon,
  Tooltip
} from '@mantine/core';
import { 
  IconLock, 
  IconLockOpen, 
  IconArrowsMove, 
  IconRotate, 
  IconResize, 
  IconCheck, 
  IconEdit, 
  IconZoomCheck
} from '@tabler/icons-react';
import { AttachmentPoint } from './AttachmentPointHelper';

interface AttachmentPointControlsProps {
  attachmentPoints: AttachmentPoint[];
  selectedPoint: string | null;
  onSelectPoint: (id: string | null) => void;
  sceneLocked: boolean;
  onToggleSceneLock: () => void;
  editMode: 'translate' | 'rotate' | 'scale';
  onChangeEditMode: (mode: 'translate' | 'rotate' | 'scale') => void;
  onFocusPoint: (id: string) => void;
  onVerifyPoint: (id: string) => void;
  verifiedPoints: string[];
  lockedAxes: {x: boolean, y: boolean, z: boolean};
  onToggleAxisLock: (axis: 'x' | 'y' | 'z') => void;
}

/**
 * External UI controls for attachment points and scene locking
 */
const AttachmentPointControls: React.FC<AttachmentPointControlsProps> = ({
  attachmentPoints,
  selectedPoint,
  onSelectPoint,
  sceneLocked,
  onToggleSceneLock,
  editMode,
  onChangeEditMode,
  onFocusPoint,
  onVerifyPoint,
  verifiedPoints,
  lockedAxes,
  onToggleAxisLock
}) => {
  // Group attachment points by type
  const attachmentPointsByType: Record<string, AttachmentPoint[]> = {};
  
  attachmentPoints.forEach(point => {
    const type = point.optionId || 'other';
    if (!attachmentPointsByType[type]) {
      attachmentPointsByType[type] = [];
    }
    attachmentPointsByType[type].push(point);
  });
  
  // Check if point is verified
  const isPointVerified = (pointId: string) => verifiedPoints.includes(pointId);
  
  // Get display name for attachment point type
  const getTypeName = (type: string) => {
    switch (type) {
      case 'stem': return 'Stem Attachments';
      case 'left_grip': return 'Left Grip';
      case 'right_grip': return 'Right Grip';
      case 'left_brake': return 'Left Brake';
      case 'right_brake': return 'Right Brake';
      case 'left_shifter': return 'Left Shifter';
      case 'right_shifter': return 'Right Shifter';
      case 'saddle': return 'Saddle';
      case 'custom': return 'Custom Attachments';
      default: return type.charAt(0).toUpperCase() + type.slice(1).replace('_', ' ');
    }
  };
  
  return (
    <Box>
      <Paper p="md" mb="md" withBorder>
        <Title order={5} mb="xs">Scene Controls</Title>
        
        <Group mb="md">
          <Button 
            leftSection={sceneLocked ? <IconLockOpen size={16} /> : <IconLock size={16} />}
            color={sceneLocked ? "red" : "blue"}
            onClick={onToggleSceneLock}
            fullWidth
          >
            {sceneLocked ? 'Unlock Scene (3D)' : 'Lock Scene (2D)'}
          </Button>
        </Group>
        
        <Box mb="md">
          <Text size="sm" fw={500} mb="xs">Axis Locks:</Text>
          <Group>
            <Tooltip label={lockedAxes.x ? "X Axis Locked (Unlock to Move)" : "X Axis Unlocked (Lock to Fix Position)"}>
              <ActionIcon 
                variant={lockedAxes.x ? 'filled' : 'light'} 
                color="red"
                onClick={() => onToggleAxisLock('x')}
                size="lg"
                styles={{
                  root: {
                    border: lockedAxes.x ? '2px solid red' : '1px solid #dee2e6',
                    position: 'relative'
                  }
                }}
              >
                <div>X</div>
                {lockedAxes.x && (
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '5px',
                    right: '5px',
                    height: '2px',
                    background: 'white',
                    transform: 'rotate(45deg)'
                  }}/>
                )}
              </ActionIcon>
            </Tooltip>
            
            <Tooltip label={lockedAxes.y ? "Y Axis Locked (Unlock to Move)" : "Y Axis Unlocked (Lock to Fix Position)"}>
              <ActionIcon 
                variant={lockedAxes.y ? 'filled' : 'light'} 
                color="green"
                onClick={() => onToggleAxisLock('y')}
                size="lg"
                styles={{
                  root: {
                    border: lockedAxes.y ? '2px solid green' : '1px solid #dee2e6',
                    position: 'relative'
                  }
                }}
              >
                <div>Y</div>
                {lockedAxes.y && (
                  <div style={{
                    position: 'absolute',
                    top: '5px',
                    bottom: '5px',
                    left: '50%',
                    width: '2px',
                    background: 'white',
                    transform: 'rotate(45deg)'
                  }}/>
                )}
              </ActionIcon>
            </Tooltip>
            
            <Tooltip label={lockedAxes.z ? "Z Axis Locked (Unlock to Move)" : "Z Axis Unlocked (Lock to Fix Position)"}>
              <ActionIcon 
                variant={lockedAxes.z ? 'filled' : 'light'} 
                color="blue"
                onClick={() => onToggleAxisLock('z')}
                size="lg"
                styles={{
                  root: {
                    border: lockedAxes.z ? '2px solid blue' : '1px solid #dee2e6',
                    position: 'relative'
                  }
                }}
              >
                <div>Z</div>
                {lockedAxes.z && (
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '5px',
                    right: '5px',
                    height: '2px',
                    background: 'white',
                    transform: 'rotate(45deg)'
                  }}/>
                )}
              </ActionIcon>
            </Tooltip>
          </Group>
          <Text size="xs" c="dimmed" mt={5}>
            Lock specific axes to restrict movement. Unlocked axes allow movement in that direction.
          </Text>
        </Box>
        
        {sceneLocked && (
          <Group>
            <Tooltip label="Move" position="top">
              <ActionIcon 
                variant={editMode === 'translate' ? 'filled' : 'light'} 
                color="blue"
                onClick={() => onChangeEditMode('translate')}
                size="lg"
              >
                <IconArrowsMove size={20} />
              </ActionIcon>
            </Tooltip>
            
            <Tooltip label="Rotate" position="top">
              <ActionIcon 
                variant={editMode === 'rotate' ? 'filled' : 'light'} 
                color="orange"
                onClick={() => onChangeEditMode('rotate')}
                size="lg"
              >
                <IconRotate size={20} />
              </ActionIcon>
            </Tooltip>
            
            <Tooltip label="Scale" position="top">
              <ActionIcon 
                variant={editMode === 'scale' ? 'filled' : 'light'} 
                color="green"
                onClick={() => onChangeEditMode('scale')}
                size="lg"
              >
                <IconResize size={20} />
              </ActionIcon>
            </Tooltip>
          </Group>
        )}
      </Paper>
      
      <Paper p="md" withBorder>
        <Title order={5} mb="sm">Attachment Points</Title>
        
        {Object.keys(attachmentPointsByType).length === 0 ? (
          <Text color="dimmed" size="sm">No attachment points available</Text>
        ) : (
          <Stack gap="md">
            {Object.entries(attachmentPointsByType).map(([type, points]) => (
              <Box key={type} mb="md">
                <Text fw={500} mb="xs">{getTypeName(type)}</Text>
                
                <Stack gap="xs">
                  {points.map(point => {
                    const isSelected = point.id === selectedPoint;
                    const isVerified = isPointVerified(point.id);
                    
                    return (
                      <Paper key={point.id} p="xs" withBorder>
                        <Group justify="space-between">
                          <Box 
                            style={{
                              cursor: 'pointer',
                              flex: 1,
                              ':hover': {
                                textDecoration: 'underline',
                              }
                            }}
                            onClick={() => {
                              // Only focus if selecting a different point
                              const isNewSelection = selectedPoint !== point.id;
                              onSelectPoint(point.id);
                              
                              // Only focus the camera if this is a new selection
                              // This prevents accidental camera movement when clicking 
                              // the same point multiple times
                              if (isNewSelection) {
                                onFocusPoint(point.id);
                              }
                            }}
                          >
                            <Group>
                              <div
                                style={{
                                  width: 10,
                                  height: 10,
                                  backgroundColor: point.color,
                                  borderRadius: '50%',
                                  border: isSelected ? '2px solid black' : 'none'
                                }}
                              />
                              <Text size="sm" fw={isSelected ? 700 : 400}>
                                {point.name || `Point ${point.id.slice(0, 4)}`}
                              </Text>
                              
                              {isVerified && (
                                <Badge size="xs" color="green">Verified</Badge>
                              )}
                              
                              {point.auto && (
                                <Badge size="xs" color="blue">Auto</Badge>
                              )}
                            </Group>
                          </Box>
                          
                          <Group gap={4}>
                            <Tooltip label="Edit Point">
                              <ActionIcon
                                size="sm"
                                color="blue"
                                variant="subtle"
                                onClick={() => {
                                  // Select the point, focus on it, and lock the scene for editing
                                  onSelectPoint(point.id);
                                  onFocusPoint(point.id);
                                  if (!sceneLocked) {
                                    onToggleSceneLock();
                                  }
                                }}
                              >
                                <IconEdit size={16} />
                              </ActionIcon>
                            </Tooltip>
                            
                            <Tooltip label={isVerified ? "Verified" : "Verify Position"}>
                              <ActionIcon
                                size="sm"
                                color={isVerified ? "green" : "gray"}
                                variant={isVerified ? "filled" : "subtle"}
                                onClick={() => onVerifyPoint(point.id)}
                              >
                                <IconZoomCheck size={16} />
                              </ActionIcon>
                            </Tooltip>
                          </Group>
                        </Group>
                      </Paper>
                    );
                  })}
                </Stack>
              </Box>
            ))}
          </Stack>
        )}
      </Paper>
    </Box>
  );
};

export default AttachmentPointControls; 