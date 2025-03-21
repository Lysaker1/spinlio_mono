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
  Paper,
  useMantineTheme
} from '@mantine/core';
import { 
  IconRuler, 
  IconAxisX, 
  IconColorSwatch, 
  IconBulb, 
  IconSettings,
  IconDeviceFloppy,
  IconRotate3d,
  IconAdjustmentsHorizontal,
  IconBike
} from '@tabler/icons-react';

interface Measurements {
  width: number;
  height: number;
  depth: number;
}

interface ConfigurationPanelProps {
  componentType: string;
  onComponentTypeChange: (type: string) => void;
  componentCategory: string | null;
  onComponentCategoryChange: (category: string | null) => void;
  componentSubcategory: string | null;
  onComponentSubcategoryChange: (subcategory: string | null) => void;
  measurements: Measurements;
  onMeasurementChange: (field: keyof Measurements, value: number) => void;
  debugMode?: boolean;
  onDebugModeChange?: (enabled: boolean) => void;
  wireframe?: boolean;
  onWireframeChange?: (enabled: boolean) => void;
  meshCount?: number;
  suggestedType?: string;
  typeConfidence?: number;
  typeReason?: string;
  onSaveConfiguration?: () => void;
  onGenerateAttachmentPoints?: () => void;
}

/**
 * Configuration panel for 3D models and attachment points
 */
const ConfigurationPanel: React.FC<ConfigurationPanelProps> = ({
  componentType,
  onComponentTypeChange,
  componentCategory,
  onComponentCategoryChange,
  componentSubcategory,
  onComponentSubcategoryChange,
  measurements,
  onMeasurementChange,
  debugMode = false,
  onDebugModeChange = () => {},
  wireframe = false,
  onWireframeChange = () => {},
  meshCount = 0,
  suggestedType,
  typeConfidence,
  typeReason,
  onSaveConfiguration,
  onGenerateAttachmentPoints
}) => {
  const theme = useMantineTheme();
  
  // Component type and category are essentially the same concept
  // User interface now treats category as the primary component type choice

  const getCategoryOptions = () => {
    return [
      { value: 'frame', label: 'Frame' },
      { value: 'fork', label: 'Fork' },
      { value: 'handlebar', label: 'Handlebar' },
      { value: 'stem', label: 'Stem' },
      { value: 'seat_post', label: 'Seat Post' },
      { value: 'saddle', label: 'Saddle' },
      { value: 'wheel', label: 'Wheel' },
      { value: 'tire', label: 'Tire' },
      { value: 'crankset', label: 'Crankset' },
      { value: 'pedal', label: 'Pedal' },
      { value: 'brake', label: 'Brake' },
      { value: 'derailleur', label: 'Derailleur' },
      { value: 'other', label: 'Other Component' },
      { value: 'test', label: 'Test' }

    ];
  };

  // For subcategories, we'll adjust based on the selected category
  const getSubcategoryOptions = () => {
    // Return appropriate subcategory options based on category
    switch (componentCategory) {
      case 'frame':
        return [
          { value: 'road_frame', label: 'Road Bike Frame' },
          { value: 'mountain_frame', label: 'Mountain Bike Frame' },
          { value: 'hybrid_frame', label: 'Hybrid Bike Frame' },
          { value: 'city_frame', label: 'City Bike Frame' },
          { value: 'cruiser_frame', label: 'Cruiser Bike Frame' },
          { value: 'kids_frame', label: 'Kids Bike Frame' },
          { value: 'bmx_frame', label: 'BMX Frame' },
          { value: 'track_frame', label: 'Track Bike Frame' },
          { value: 'other_frame', label: 'Other Frame' }
        ];
      case 'handlebar':
        return [
          { value: 'drop_handlebar', label: 'Drop Handlebar' },
          { value: 'flat_handlebar', label: 'Flat Handlebar' },
          { value: 'riser_handlebar', label: 'Riser Handlebar' },
          { value: 'bullhorn_handlebar', label: 'Bullhorn Handlebar' },
          { value: 'aero_handlebar', label: 'Aero/Triathlon Handlebar' },
          { value: 'butterfly_handlebar', label: 'Butterfly Handlebar' },
          { value: 'cruiser_handlebar', label: 'Cruiser Handlebar' },
          { value: 'bmx_handlebar', label: 'BMX Handlebar' },
          { value: 'other_handlebar', label: 'Other Handlebar' }
        ];
      case 'wheel':
        return [
          { value: 'road_wheel', label: 'Road Bike Wheel' },
          { value: 'mountain_wheel', label: 'Mountain Bike Wheel' },
          { value: 'hybrid_wheel', label: 'Hybrid Bike Wheel' },
          { value: 'bmx_wheel', label: 'BMX Wheel' },
          { value: 'kids_wheel', label: 'Kids Bike Wheel' },
          { value: 'other_wheel', label: 'Other Wheel' }
        ];
      case 'brake':
        return [
          { value: 'disc_brake', label: 'Disc Brake' },
          { value: 'rim_brake', label: 'Rim Brake' },
          { value: 'hydraulic_brake', label: 'Hydraulic Brake' },
          { value: 'mechanical_brake', label: 'Mechanical Brake' },
          { value: 'coaster_brake', label: 'Coaster Brake' },
          { value: 'other_brake', label: 'Other Brake' }
        ];
      case 'crankset':
        return [
          { value: 'road_crankset', label: 'Road Crankset' },
          { value: 'mountain_crankset', label: 'Mountain Crankset' },
          { value: 'single_speed', label: 'Single Speed' },
          { value: 'triple_crankset', label: 'Triple Crankset' },
          { value: 'other_crankset', label: 'Other Crankset' }
        ];
      default:
        return []; // No subcategories for this category
    }
  };

  // When changing the category, update the component type to match
  // and reset the subcategory
  const handleCategoryChange = (category: string | null) => {
    onComponentCategoryChange(category);
    
    // Update component type to match category
    if (category) {
      onComponentTypeChange(category);
    }
    
    // Reset subcategory when category changes
    onComponentSubcategoryChange(null);
  };

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
            <Accordion.Control icon={<IconAdjustmentsHorizontal size={18} />}>
              Component Type
            </Accordion.Control>
            <Accordion.Panel>
              <Stack gap="xs">
                <Box>
                  <Text size="sm" fw={500} mb={4} c="dimmed" tt="uppercase">
                    Component Category <span style={{ color: 'red' }}>*</span>
                  </Text>
                  <Text size="xs" c="dimmed" mb="xs">
                    Select the type of component
                  </Text>
                  <Select
                    data={getCategoryOptions()}
                    placeholder="Select component category"
                    searchable
                    clearable
                    value={componentCategory}
                    onChange={handleCategoryChange}
                    style={{ marginBottom: 10 }}
                  />
                </Box>

                {componentCategory && getSubcategoryOptions().length > 0 && (
                  <Box>
                    <Text size="sm" fw={500} mb={4} c="dimmed" tt="uppercase">
                      Component Subcategory
                    </Text>
                    <Text size="xs" c="dimmed" mb="xs">
                      Select the component subcategory
                    </Text>
                    <Select
                      data={getSubcategoryOptions()}
                      placeholder="Select component subcategory"
                      searchable
                      clearable
                      value={componentSubcategory}
                      onChange={onComponentSubcategoryChange}
                      style={{ marginBottom: 10 }}
                    />
                  </Box>
                )}
                
                {suggestedType && typeConfidence && (
                  <Group gap="xs">
                    <Text size="sm">Suggested: </Text>
                    <Badge 
                      color={typeConfidence > 0.7 ? 'green' : 'yellow'} 
                      variant="filled"
                    >
                      {suggestedType} ({Math.round(typeConfidence * 100)}%)
                    </Badge>
                  </Group>
                )}
                
                {typeReason && (
                  <Text size="xs" color="dimmed">
                    Reason: {typeReason}
                  </Text>
                )}
                
                {onGenerateAttachmentPoints && (
                  <Button 
                    mt="sm" 
                    onClick={onGenerateAttachmentPoints}
                    leftSection={<IconBulb size={16} />}
                  >
                    Generate Attachment Points
                  </Button>
                )}
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
          
          <Accordion.Item value="measurements">
            <Accordion.Control icon={<IconRuler size={18} />}>
              Measurements
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
          
          <Accordion.Item value="debugging">
            <Accordion.Control icon={<IconBulb size={18} />}>
              Debug Options
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