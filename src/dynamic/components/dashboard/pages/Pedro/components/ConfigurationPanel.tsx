import React from 'react';
import { 
  Box, 
  Stack, 
  Group, 
  Title, 
  Button, 
  Select, 
  Switch, 
  NumberInput, 
  Text,
  Accordion,
  Badge,
  Divider,
  Paper
} from '@mantine/core';
import { 
  IconRuler, 
  IconAxisX, 
  IconColorSwatch, 
  IconBulb, 
  IconSettings,
  IconDeviceFloppy,
  IconRotate3d,
  IconAdjustmentsHorizontal
} from '@tabler/icons-react';

interface Measurements {
  width: number;
  height: number;
  depth: number;
}

interface ConfigurationPanelProps {
  componentType: string;
  onComponentTypeChange: (type: string) => void;
  measurements: Measurements;
  onMeasurementChange: (field: keyof Measurements, value: number) => void;
  attachmentMode: 'manual' | 'automatic' | 'mesh';
  onAttachmentModeChange: (mode: 'manual' | 'automatic' | 'mesh') => void;
  debugMode: boolean;
  onDebugModeChange: (enabled: boolean) => void;
  wireframe: boolean;
  onWireframeChange: (enabled: boolean) => void;
  meshCount: number;
  suggestedType?: string;
  typeConfidence?: number;
  typeReason?: string;
  onSaveConfiguration?: () => void;
}

/**
 * Configuration panel for 3D models and attachment points
 */
const ConfigurationPanel: React.FC<ConfigurationPanelProps> = ({
  componentType,
  onComponentTypeChange,
  measurements,
  onMeasurementChange,
  attachmentMode,
  onAttachmentModeChange,
  debugMode,
  onDebugModeChange,
  wireframe,
  onWireframeChange,
  meshCount,
  suggestedType,
  typeConfidence,
  typeReason,
  onSaveConfiguration
}) => {
  // Component type options with Mantine format
  const COMPONENT_TYPES = [
    { value: 'seat_post', label: 'Seat Post' },
    { value: 'handlebar', label: 'Handlebar' },
    { value: 'wheel', label: 'Wheel' },
    { value: 'frame', label: 'Frame' },
    { value: 'fork', label: 'Fork' },
    { value: 'pedal', label: 'Pedal' },
    { value: 'brake', label: 'Brake' },
    { value: 'other', label: 'Other Component' }
  ];
  
  return (
    <Paper 
      shadow="sm" 
      p="md"
      style={{
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
      }}
    >
      <Stack gap="md">
        <Title order={4} mb="xs">
          Component Configuration
        </Title>
        
        <Accordion defaultValue="component">
          <Accordion.Item value="component">
            <Accordion.Control icon={<IconSettings size={20} />}>
              Component Type
            </Accordion.Control>
            <Accordion.Panel>
              <Stack gap="xs">
                <Select
                  label="Component Type"
                  value={componentType}
                  onChange={(value) => onComponentTypeChange(value || 'other')}
                  data={COMPONENT_TYPES}
                  description="Select the type of bike component"
                  style={{ maxWidth: '100%' }}
                />
                
                {suggestedType && suggestedType !== componentType && (
                  <Box mt="xs">
                    <Group gap="xs" align="center">
                      <IconBulb size={16} color="#FFA000" />
                      <Text size="sm" c="dimmed">
                        Suggested: <Badge color="blue">{suggestedType.replace('_', ' ')}</Badge>
                        {typeConfidence && 
                          <Badge 
                            ml="xs" 
                            color={typeConfidence > 0.7 ? "green" : typeConfidence > 0.5 ? "yellow" : "gray"}
                            variant="outline"
                          >
                            {Math.round(typeConfidence * 100)}% confidence
                          </Badge>
                        }
                      </Text>
                    </Group>
                    {typeReason && (
                      <Text size="xs" c="dimmed" mt="xs">
                        Reason: {typeReason}
                      </Text>
                    )}
                    <Button 
                      size="xs" 
                      variant="light" 
                      color="blue"
                      leftSection={<IconAdjustmentsHorizontal size={14} />}
                      mt="xs"
                      onClick={() => onComponentTypeChange(suggestedType)}
                    >
                      Use Suggested
                    </Button>
                  </Box>
                )}
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
          
          <Accordion.Item value="dimensions">
            <Accordion.Control icon={<IconRuler size={20} />}>
              Dimensions ({meshCount} meshes)
            </Accordion.Control>
            <Accordion.Panel>
              <Group grow gap="xs">
                <NumberInput
                  label="Width (X)"
                  value={measurements.width}
                  onChange={(value) => onMeasurementChange('width', Number(value) || 0)}
                  min={0}
                  step={0.1}
                  leftSection={<IconAxisX size={14} />}
                />
                <NumberInput
                  label="Height (Y)"
                  value={measurements.height}
                  onChange={(value) => onMeasurementChange('height', Number(value) || 0)}
                  min={0}
                  step={0.1}
                  leftSection={<IconAxisX size={14} />}
                />
                <NumberInput
                  label="Depth (Z)"
                  value={measurements.depth}
                  onChange={(value) => onMeasurementChange('depth', Number(value) || 0)}
                  min={0}
                  step={0.1}
                  leftSection={<IconAxisX size={14} />}
                />
              </Group>
            </Accordion.Panel>
          </Accordion.Item>
          
          <Accordion.Item value="attachment">
            <Accordion.Control icon={<IconRotate3d size={20} />}>
              Attachment Points
            </Accordion.Control>
            <Accordion.Panel>
              <Stack gap="xs">
                <Text size="sm" mb="xs">
                  Attachment Mode
                </Text>
                
                <Button.Group>
                  <Button
                    variant={attachmentMode === 'manual' ? 'filled' : 'light'}
                    size="xs"
                    color={attachmentMode === 'manual' ? 'blue' : 'gray'}
                    onClick={() => onAttachmentModeChange('manual')}
                    style={{ flex: 1 }}
                  >
                    Manual
                  </Button>
                  <Button
                    variant={attachmentMode === 'automatic' ? 'filled' : 'light'}
                    size="xs"
                    color={attachmentMode === 'automatic' ? 'green' : 'gray'}
                    onClick={() => onAttachmentModeChange('automatic')}
                    style={{ flex: 1 }}
                  >
                    Automatic
                  </Button>
                  <Button
                    variant={attachmentMode === 'mesh' ? 'filled' : 'light'}
                    size="xs"
                    color={attachmentMode === 'mesh' ? 'violet' : 'gray'}
                    onClick={() => onAttachmentModeChange('mesh')}
                    style={{ flex: 1 }}
                  >
                    Mesh
                  </Button>
                </Button.Group>
                
                <Text size="xs" c="dimmed" mt="xs">
                  {attachmentMode === 'manual' && 'Add and position attachment points manually'}
                  {attachmentMode === 'automatic' && 'Automatically add attachment points based on component type'}
                  {attachmentMode === 'mesh' && 'Click on model meshes to add attachment points'}
                </Text>
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
          
          <Accordion.Item value="display">
            <Accordion.Control icon={<IconColorSwatch size={20} />}>
              Display Options
            </Accordion.Control>
            <Accordion.Panel>
              <Stack gap="md">
                <Group justify="apart">
                  <Text size="sm">Debug Mode</Text>
                  <Switch
                    checked={debugMode}
                    onChange={(event) => onDebugModeChange(event.currentTarget.checked)}
                    label="Show helpers"
                    size="sm"
                  />
                </Group>
                
                <Group gap="apart">
                  <Text size="sm">Wireframe</Text>
                  <Switch
                    checked={wireframe}
                    onChange={(event) => onWireframeChange(event.currentTarget.checked)}
                    label="Show wireframe"
                    size="sm"
                  />
                </Group>
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        
        {onSaveConfiguration && (
          <>
            <Divider my="sm" />
            <Button
              leftSection={<IconDeviceFloppy size={16} />}
              color="blue"
              onClick={onSaveConfiguration}
              fullWidth
            >
              Save Configuration
            </Button>
          </>
        )}
      </Stack>
    </Paper>
  );
};

export default ConfigurationPanel; 