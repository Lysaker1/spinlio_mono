import React, { useMemo } from 'react';
import { 
  Box, 
  Stack, 
  Group,
  Title, 
  Text, 
  Button, 
  Switch, 
  Divider, 
  Badge, 
  Tooltip,
  ActionIcon,
  Paper,
  Alert,
  Accordion
} from '@mantine/core';
import { 
  IconPlus, 
  IconTrash, 
  IconRefresh, 
  IconAdjustments, 
  IconCheckbox, 
  IconX, 
  IconInfoCircle,
  IconGripHorizontal,
  IconBike,
  IconBulb,
  IconDeviceGamepad,
  IconDevicesOff 
} from '@tabler/icons-react';
import { 
  AttachmentCategory,
  ComponentAttachmentOption, 
  ComponentTypeConfig 
} from '../constants/ComponentAttachmentOptions';
import { AttachmentPoint } from './AttachmentPointHelper';

interface AttachmentOptionsPanelProps {
  componentConfig: ComponentTypeConfig | null;
  availableOptions: ComponentAttachmentOption[];
  enabledOptions: string[];
  optionPointsMap: Record<string, AttachmentPoint[]>;
  onToggleOption: (optionId: string) => void;
  onAddCustomAttachmentPoint: (optionId: string, position?: [number, number, number]) => void;
  onResetOption: (optionId: string) => void;
  onGenerateAttachmentPoints: () => void;
}

// Icon mapping helper
const getIconForAttachment = (iconName?: string) => {
  switch (iconName) {
    case 'grip': return <IconGripHorizontal size={16} />;
    case 'stem': return <IconBike size={16} />;
    case 'brake': return <IconDeviceGamepad size={16} />;
    case 'shifter': return <IconDeviceGamepad size={16} />;
    case 'light': return <IconBulb size={16} />;
    case 'computer': return <IconDevicesOff size={16} />;
    default: return <IconAdjustments size={16} />;
  }
};

// Get display title for category
const getCategoryTitle = (category: string): string => {
  switch (category) {
    case AttachmentCategory.STRUCTURAL: return 'Structural Connections';
    case AttachmentCategory.INTERFACE: return 'Interface Points';
    case AttachmentCategory.ACCESSORY: return 'Accessory Attachments';
    default: return 'Other Attachments';
  }
};

const AttachmentOptionsPanel: React.FC<AttachmentOptionsPanelProps> = ({
  componentConfig,
  availableOptions,
  enabledOptions,
  optionPointsMap,
  onToggleOption,
  onAddCustomAttachmentPoint,
  onResetOption,
  onGenerateAttachmentPoints
}) => {
  if (!componentConfig) {
    return (
      <Box my="md">
        <Alert color="gray">
          <Text size="sm">No component type selected. Please select a component type to configure attachment points.</Text>
        </Alert>
      </Box>
    );
  }

  // Organize options by category first, then by group
  const organizedOptions = useMemo(() => {
    // First group by category
    const categoryGroups: Record<string, ComponentAttachmentOption[]> = {
      [AttachmentCategory.STRUCTURAL]: [],
      [AttachmentCategory.INTERFACE]: [],
      [AttachmentCategory.ACCESSORY]: []
    };
    
    availableOptions.forEach(option => {
      if (categoryGroups[option.category]) {
        categoryGroups[option.category].push(option);
      }
    });
    
    // For each category, further organize by group
    const result: Record<string, {
      title: string;
      options: ComponentAttachmentOption[];
      groups: Record<string, ComponentAttachmentOption[]>;
    }> = {};
    
    Object.entries(categoryGroups).forEach(([category, options]) => {
      if (options.length === 0) return;
      
      const groups: Record<string, ComponentAttachmentOption[]> = {};
      const ungrouped: ComponentAttachmentOption[] = [];
      
      // Sort by display order
      const sortedOptions = [...options].sort((a, b) => {
        const orderA = a.uiMetadata?.displayOrder || 999;
        const orderB = b.uiMetadata?.displayOrder || 999;
        return orderA - orderB;
      });
      
      // Group by groupName
      sortedOptions.forEach(option => {
        const groupName = option.uiMetadata?.groupName;
        if (groupName) {
          if (!groups[groupName]) {
            groups[groupName] = [];
          }
          groups[groupName].push(option);
        } else {
          ungrouped.push(option);
        }
      });
      
      // Store both grouped and ungrouped options
      result[category] = {
        title: getCategoryTitle(category),
        options: sortedOptions,
        groups
      };
    });
    
    return result;
  }, [availableOptions]);
  
  return (
    <Box>
      <Title order={4} mb="xs">Attachment Points</Title>
      <Text size="sm" c="dimmed" mb="md">
        Select the attachment points you want to include in this {componentConfig.name.toLowerCase()}. 
        Required points cannot be disabled.
      </Text>
      
      <Button 
        onClick={onGenerateAttachmentPoints} 
        variant="light" 
        mb="md" 
        leftSection={<IconRefresh size={16} />}
        fullWidth
      >
        Re-analyze Model & Place Points
      </Button>
      
      <Divider my="sm" label="Configure Attachment Points" labelPosition="center" />
      
      {/* Render options by category */}
      {Object.entries(organizedOptions).map(([category, { title, options, groups }]) => (
        <Box key={category} mb="md">
          <Title order={5} mb="xs" style={{ fontWeight: 600, textTransform: 'uppercase', color: 'dimmed' }}>
            {title}
          </Title>
          
          {/* If we have groups, render them as accordion sections */}
          {Object.keys(groups).length > 0 ? (
            <Accordion variant="contained" radius="sm">
              {/* Render each group as an accordion section */}
              {Object.entries(groups).map(([groupName, groupOptions]) => (
                <Accordion.Item key={groupName} value={groupName}>
                  <Accordion.Control>
                    <Group>
                      <Text fw={500}>{groupName}</Text>
                      <Text c="dimmed" size="xs">
                        {groupOptions.length} {groupOptions.length === 1 ? 'option' : 'options'}
                      </Text>
                    </Group>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Stack gap="xs">
                      {groupOptions.map(option => renderOptionItem(option))}
                    </Stack>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
              
              {/* Render ungrouped options if any */}
              {options.filter(opt => !opt.uiMetadata?.groupName).length > 0 && (
                <Accordion.Item value="ungrouped">
                  <Accordion.Control>
                    <Text fw={500}>General</Text>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Stack gap="xs">
                      {options
                        .filter(opt => !opt.uiMetadata?.groupName)
                        .map(option => renderOptionItem(option))}
                    </Stack>
                  </Accordion.Panel>
                </Accordion.Item>
              )}
            </Accordion>
          ) : (
            // No groups, just render options in a stack
            <Stack gap="xs">
              {options.map(option => renderOptionItem(option))}
            </Stack>
          )}
        </Box>
      ))}
    </Box>
  );
  
  // Helper to render individual option items
  function renderOptionItem(option: ComponentAttachmentOption) {
    const isEnabled = enabledOptions.includes(option.id);
    const pointsForOption = optionPointsMap[option.id] || [];
    const hasAutoPoint = pointsForOption.some(p => p.auto);
    const hasFallbackPoint = pointsForOption.some(p => p.name?.includes('Fallback'));
    
    return (
      <Paper key={option.id} p="xs" withBorder>
        <Group justify="space-between" wrap="nowrap">
          <Box>
            <Group>
              {option.uiMetadata?.iconName && (
                <span>{getIconForAttachment(option.uiMetadata.iconName)}</span>
              )}
              <Text size="sm" fw={500}>{option.name}</Text>
              {option.isRequired && (
                <Badge size="xs" color="blue">Required</Badge>
              )}
              {isEnabled && pointsForOption.length > 0 && (
                <Badge size="xs" color={hasAutoPoint ? "green" : hasFallbackPoint ? "yellow" : "gray"}>
                  {pointsForOption.length} point{pointsForOption.length !== 1 ? 's' : ''}
                  {hasFallbackPoint && " (fallback)"}
                </Badge>
              )}
            </Group>
            {option.description && (
              <Text size="xs" c="dimmed" mt={4}>
                {option.description}
              </Text>
            )}
          </Box>
          
          <Group>
            {/* Actions */}
            <Group gap={6}>
              {isEnabled && (
                <Tooltip label="Add custom point">
                  <ActionIcon 
                    size="sm" 
                    variant="subtle" 
                    color="blue"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddCustomAttachmentPoint(option.id);
                    }}
                  >
                    <IconPlus size={16} />
                  </ActionIcon>
                </Tooltip>
              )}
              
              {isEnabled && pointsForOption.length > 0 && (
                <Tooltip label="Reset points">
                  <ActionIcon 
                    size="sm" 
                    variant="subtle" 
                    color="orange"
                    onClick={(e) => {
                      e.stopPropagation();
                      onResetOption(option.id);
                    }}
                  >
                    <IconRefresh size={16} />
                  </ActionIcon>
                </Tooltip>
              )}
            </Group>
            
            {/* Main toggle */}
            <Tooltip label={option.isRequired ? "Required" : (isEnabled ? "Disable" : "Enable")}>
              <div onClick={(e) => e.stopPropagation()}>
                <Switch 
                  checked={isEnabled}
                  onChange={(e) => {
                    e.stopPropagation();
                    // Prevent disabling required options
                    if (option.isRequired && isEnabled) {
                      return;
                    }
                    console.log(`Toggling option: ${option.id} (${option.name}) - current state: ${isEnabled}`);
                    onToggleOption(option.id);
                  }}
                  disabled={option.isRequired && isEnabled}
                  size="md"
                  onLabel={<IconCheckbox size={14} />}
                  offLabel={<IconX size={14} />}
                />
              </div>
            </Tooltip>
          </Group>
        </Group>
      </Paper>
    );
  }
};

export default AttachmentOptionsPanel; 