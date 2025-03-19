import React, { useState } from 'react';
import * as THREE from 'three';
import { 
  Box, 
  Text, 
  Paper, 
  Title, 
  Group, 
  Badge, 
  Code, 
  Accordion,
  Divider,
  Collapse,
  Button
} from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { IconCopy, IconDeviceFloppy, IconRefresh, IconBug, IconEye, IconJson } from '@tabler/icons-react';

interface DebugPanelProps {
  modelInfo?: any;
  attachmentPoints?: any[];
  scene?: THREE.Scene;
  wireframe?: boolean;
  onToggleWireframe?: () => void;
  onReloadModel?: () => void;
  onExportData?: () => void;
}

/**
 * Debug panel for displaying technical information about models and scenes
 */
const DebugPanel: React.FC<DebugPanelProps> = ({
  modelInfo,
  attachmentPoints = [],
  scene,
  wireframe = false,
  onToggleWireframe,
  onReloadModel,
  onExportData
}) => {
  const [expanded, setExpanded] = useState(false);
  const clipboard = useClipboard({ timeout: 500 });
  
  if (!modelInfo) {
    return null;
  }
  
  // Prepare debug data
  const debugData = {
    model: {
      dimensions: modelInfo.dimensions || {},
      meshCount: modelInfo.meshCount || 0,
      suggestedType: modelInfo.suggestedComponentType || 'unknown',
      confidence: modelInfo.typeConfidence || 0,
      scale: modelInfo.scale || 1
    },
    attachmentPoints: attachmentPoints.map(p => ({
      id: p.id,
      name: p.name,
      position: p.position,
      normal: p.normal
    }))
  };
  
  // Format the data as JSON string
  const debugDataJson = JSON.stringify(debugData, null, 2);
  
  // Handle copy to clipboard
  const handleCopy = () => {
    clipboard.copy(debugDataJson);
  };
  
  return (
    <Paper 
      shadow="sm" 
      p="md"
      withBorder
      style={{
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}
    >
      <Group justify="apart" mb="xs">
        <Group gap="xs">
          <IconBug size={18} />
          <Title order={5}>Debug Information</Title>
        </Group>
        <Badge 
          color={expanded ? 'blue' : 'gray'} 
          style={{ cursor: 'pointer' }}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Hide Details' : 'Show Details'}
        </Badge>
      </Group>
      
      <Divider my="xs" />
      
      <Collapse in={expanded}>
        <Accordion defaultValue="model">
          <Accordion.Item value="model">
            <Accordion.Control icon={<IconEye size={16} />}>
              Model Information
            </Accordion.Control>
            <Accordion.Panel>
              <Box mb="xs">
                <Group gap="xs">
                  <Text size="sm" fw={500}>Dimensions:</Text>
                  <Text size="sm">
                    {modelInfo.dimensions?.width} × {modelInfo.dimensions?.height} × {modelInfo.dimensions?.depth} units
                  </Text>
                </Group>
                <Group gap="xs" mt="xs">
                  <Text size="sm" fw={500}>Mesh Count:</Text>
                  <Text size="sm">{modelInfo.meshCount}</Text>
                </Group>
                <Group gap="xs" mt="xs">
                  <Text size="sm" fw={500}>Suggested Type:</Text>
                  <Badge size="sm">
                    {modelInfo.suggestedComponentType}
                  </Badge>
                  {modelInfo.typeConfidence && (
                    <Badge 
                      size="sm" 
                      color={
                        modelInfo.typeConfidence > 0.7 ? 'green' : 
                        modelInfo.typeConfidence > 0.5 ? 'yellow' : 
                        'gray'
                      }
                    >
                      {Math.round(modelInfo.typeConfidence * 100)}% confidence
                    </Badge>
                  )}
                </Group>
                {modelInfo.typeReason && (
                  <Text size="xs" c="dimmed" mt="xs">
                    Reason: {modelInfo.typeReason}
                  </Text>
                )}
              </Box>
            </Accordion.Panel>
          </Accordion.Item>
          
          <Accordion.Item value="attachmentPoints">
            <Accordion.Control icon={<IconEye size={16} />}>
              Attachment Points ({attachmentPoints.length})
            </Accordion.Control>
            <Accordion.Panel>
              {attachmentPoints.length > 0 ? (
                attachmentPoints.map((point, index) => (
                  <Box 
                    key={point.id} 
                    mb="xs"
                    p="xs"
                    style={{ 
                      borderLeft: `3px solid ${point.color || '#aaa'}`,
                      backgroundColor: 'rgba(0,0,0,0.03)'
                    }}
                  >
                    <Text size="sm" fw={500}>{point.name || `Point ${index + 1}`}</Text>
                    <Text size="xs">
                      Position: [{point.position.map((p: number) => parseFloat(p.toFixed(2))).join(', ')}]
                    </Text>
                    <Text size="xs">
                      Normal: [{point.normal.map((n: number) => parseFloat(n.toFixed(2))).join(', ')}]
                    </Text>
                  </Box>
                ))
              ) : (
                <Text size="sm" c="dimmed">No attachment points defined</Text>
              )}
            </Accordion.Panel>
          </Accordion.Item>
          
          <Accordion.Item value="json">
            <Accordion.Control icon={<IconJson size={16} />}>
              JSON Data
            </Accordion.Control>
            <Accordion.Panel>
              <Code block>{debugDataJson}</Code>
              <Group justify="right" mt="xs">
                <Button 
                  size="xs" 
                  leftSection={<IconCopy size={14} />}
                  variant="light"
                  color={clipboard.copied ? 'green' : 'blue'}
                  onClick={handleCopy}
                >
                  {clipboard.copied ? 'Copied!' : 'Copy JSON'}
                </Button>
              </Group>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Collapse>
      
      {/* Actions */}
      {expanded && (
        <Group justify="right" mt="md">
          {onToggleWireframe && (
            <Button 
              size="xs" 
              variant={wireframe ? 'filled' : 'light'} 
              onClick={onToggleWireframe}
            >
              {wireframe ? 'Disable Wireframe' : 'Enable Wireframe'}
            </Button>
          )}
          
          {onReloadModel && (
            <Button 
              size="xs" 
              variant="light" 
              color="blue"
              leftSection={<IconRefresh size={14} />}
              onClick={onReloadModel}
            >
              Reload Model
            </Button>
          )}
          
          {onExportData && (
            <Button 
              size="xs" 
              variant="light" 
              color="green"
              leftSection={<IconDeviceFloppy size={14} />}
              onClick={onExportData}
            >
              Export Data
            </Button>
          )}
        </Group>
      )}
    </Paper>
  );
};

export default DebugPanel; 