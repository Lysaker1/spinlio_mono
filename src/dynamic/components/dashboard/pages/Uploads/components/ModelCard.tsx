import React, { useState } from 'react';
import { Card, Image, Text, Group, Badge, Button, ActionIcon, Tooltip, Menu, Collapse } from '@mantine/core';
import { IconTrash, IconDownload, IconEye, IconRefresh, IconInfoCircle } from '@tabler/icons-react';
import { ModelMetadata } from '../../../../../services/modelService';
import { getModelConversionStatus } from '../../../../../services/modelService';
import { getFileExtension } from '../../../../../utils/fileTypeUtils';

interface ModelCardProps {
  model: ModelMetadata;
  onDelete: () => void;
  onRefresh?: () => void;
}

const ModelCard: React.FC<ModelCardProps> = ({ model, onDelete, onRefresh }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'completed': return 'green';
      case 'processing': return 'yellow';
      case 'pending': return 'blue';
      case 'failed': return 'red';
      default: return 'gray';
    }
  };

  const handleViewModel = () => {
    // Implement model preview functionality
    if (model.url) {
      window.open(model.url, '_blank');
    }
  };

  const handleRefreshStatus = async () => {
    if (isRefreshing || !model.id) return;
    
    setIsRefreshing(true);
    try {
      await getModelConversionStatus(model.id);
      if (onRefresh) onRefresh();
    } catch (error) {
      console.error('Failed to refresh status:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleViewConverted = (format: string) => {
    if (!model.url) return null;
    const baseUrl = model.url.split('?')[0];
    const originalExt = `.${getFileExtension(model.filename)}`;
    const convertedUrl = baseUrl.replace(originalExt, `.${format}`);
    return window.open(convertedUrl, '_blank');
  };

  return (
    <Card shadow="sm" padding="md" radius="md" withBorder>
      <Card.Section>
        <div className="model-thumbnail">
          {/* Placeholder image - in a real app, generate thumbnails */}
          <Image
            src={`/assets/placeholder-thumbnails/${getFileExtension(model.filename)}.jpg`}
            fallbackSrc="/assets/placeholder-thumbnails/default.jpg"
            h={160}
            alt={model.name}
          />
        </div>
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{model.name}</Text>
        <Group gap={8}>
          <Tooltip label="Refresh status">
            <ActionIcon 
              size="sm" 
              color="blue" 
              onClick={handleRefreshStatus} 
              loading={isRefreshing}
              disabled={model.conversion_status === 'completed' || model.conversion_status === 'failed'}
            >
              <IconRefresh size={16} />
            </ActionIcon>
          </Tooltip>
          <Badge color={getStatusColor(model.conversion_status)}>
            {model.conversion_status || 'Unknown'}
          </Badge>
        </Group>
      </Group>

      <Text size="sm" c="dimmed" mb="md" lineClamp={2}>
        {model.description || 'No description provided'}
      </Text>

      {/* File information */}
      <Group justify="space-between" mb="xs">
        <Text size="xs" c="dimmed">Original: {getFileExtension(model.filename).toUpperCase()}</Text>
        <Text size="xs" c="dimmed">{formatFileSize(model.file_size)}</Text>
      </Group>

      {/* Converted formats badges */}
      {model.conversion_status === 'completed' && model.converted_formats && model.converted_formats.length > 0 && (
        <Group mb="md">
          <Text size="xs" c="dimmed">Available formats:</Text>
          <Group gap={4}>
            {model.converted_formats.map(format => (
              <Badge key={format} size="xs" variant="outline" color="green">
                {format.toUpperCase()}
              </Badge>
            ))}
          </Group>
        </Group>
      )}

      {/* Toggle details button */}
      <Button 
        variant="subtle"
        size="xs"
        fullWidth 
        mb="xs"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Hide details' : 'Show details'}
      </Button>

      {/* Collapsible details section */}
      <Collapse in={showDetails}>
        <div className="model-details">
          {model.manufacturer && <Text size="xs" c="dimmed">Manufacturer: {model.manufacturer}</Text>}
          {model.category && <Text size="xs" c="dimmed">Category: {model.category}</Text>}
          {model.subcategory && <Text size="xs" c="dimmed">Subcategory: {model.subcategory}</Text>}
          {model.dimensions && <Text size="xs" c="dimmed">Dimensions: {model.dimensions}</Text>}
          {model.material && <Text size="xs" c="dimmed">Material: {model.material}</Text>}
          {model.weight_kg && <Text size="xs" c="dimmed">Weight: {model.weight_kg} kg</Text>}
          {model.created_at && (
            <Text size="xs" c="dimmed">
              Uploaded: {new Date(model.created_at).toLocaleDateString()}
            </Text>
          )}
        </div>
      </Collapse>

      <Group justify="flex-end" mt="md">
        {/* View model button */}
        <Menu>
          <Menu.Target>
            <Button size="xs" variant="light">
              View Model
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item 
              leftSection={<IconEye size={14} />}
              onClick={handleViewModel}
            >
              View Original
            </Menu.Item>
            
            {model.conversion_status === 'completed' && 
             model.converted_formats && 
             model.converted_formats.map(format => (
              <Menu.Item 
                key={format}
                leftSection={<IconEye size={14} />}
                onClick={() => handleViewConverted(format)}
              >
                View as {format.toUpperCase()}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>

        {/* Download model button */}
        <Menu>
          <Menu.Target>
            <Button size="xs" variant="light" color="green">
              Download
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item 
              leftSection={<IconDownload size={14} />}
              onClick={() => model.url && window.open(model.url, '_blank')}
            >
              Download Original
            </Menu.Item>
            
            {model.conversion_status === 'completed' && 
             model.converted_formats && 
             model.converted_formats.map(format => (
              <Menu.Item 
                key={format}
                leftSection={<IconDownload size={14} />}
                onClick={() => handleViewConverted(format)}
              >
                Download as {format.toUpperCase()}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>

        {/* Delete model button */}
        <Button size="xs" color="red" onClick={onDelete}>
          Delete
        </Button>
      </Group>
    </Card>
  );
};

export default ModelCard; 