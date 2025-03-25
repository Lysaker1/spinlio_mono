import React, { useState } from 'react';
import { Card, Image, Text, Group, Badge, Button, ActionIcon, Tooltip, Menu, Collapse } from '@mantine/core';
import { IconTrash, IconDownload, IconEye, IconRefresh, IconInfoCircle, IconArrowRight, IconPencil } from '@tabler/icons-react';
import { ModelMetadata } from '@shared/services/modelService';
import { getModelConversionStatus } from '@shared/services/modelService';
import { getFileExtension } from '@shared/utils/fileTypeUtils';
import { useNavigate } from 'react-router-dom';

interface ModelCardProps {
  model: ModelMetadata    
  onRefresh?: () => void;
}

const ModelCard: React.FC<ModelCardProps> = ({ model,  onRefresh }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const navigate = useNavigate();
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
            src={model.thumbnail_url || `/assets/placeholder-thumbnails/default.jpg`}
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

      <Group justify="flex-center" mt="md">
        <Menu>
          <Menu.Target>
            <Button leftSection={<IconEye size={16} style={{ color: '#fff' }} />} size="sm" variant="filled" style={{ borderRadius: '8px', backgroundColor: '#000', color: '#fff', ':hover': { backgroundColor: '#218838' } }}>
              View Model
            </Button>
          </Menu.Target>
          <Menu.Dropdown style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Menu.Item 
              leftSection={<IconEye size={16} style={{ color: '#007bff' }} />}
              onClick={handleViewModel}
              style={{ padding: '10px', ':hover': { backgroundColor: '#f1f3f5' } }}
            >
              View Original
            </Menu.Item>
            {model.conversion_status === 'completed' && 
             model.converted_formats && 
             model.converted_formats.map(format => (
              <Menu.Item 
                key={format}
                leftSection={<IconEye size={16} style={{ color: '#007bff' }} />}
                onClick={() => handleViewConverted(format)}
                style={{ padding: '10px', ':hover': { backgroundColor: '#f1f3f5' } }}
              >
                View as {format.toUpperCase()}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>

        <Menu>
          <Menu.Target>
            <Button leftSection={<IconDownload size={16} style={{ color: '#fff' }} />} size="sm" variant="filled" style={{ borderRadius: '8px', backgroundColor: '#000', color: '#fff', ':hover': { backgroundColor: '#218838' } }}>
              Download
            </Button>
          </Menu.Target>
          <Menu.Dropdown style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Menu.Item 
              leftSection={<IconDownload size={16} style={{ color: '#28a745' }} />}
              onClick={() => model.url && window.open(model.url, '_blank')}
              style={{ padding: '10px', ':hover': { backgroundColor: '#f1f3f5' } }}
            >
              Download Original
            </Menu.Item>
            {model.conversion_status === 'completed' && 
             model.converted_formats && 
             model.converted_formats.map(format => (
              <Menu.Item 
                key={format}
                leftSection={<IconDownload size={16} style={{ color: '#28a745' }} />}
                onClick={() => handleViewConverted(format)}
                style={{ padding: '10px', ':hover': { backgroundColor: '#f1f3f5' } }}
              >
                Download as {format.toUpperCase()}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
        <Button leftSection={<IconPencil size={16} style={{ color: '#fff' }} />} size="sm" variant="filled" style={{ borderRadius: '8px', backgroundColor: '#000', color: '#fff', ':hover': { backgroundColor: '#218838' } }} onClick={() => navigate(`/uploads/${model.id}`)}>
          Edit
        </Button>
      </Group>
      
    </Card>
  );
};

export default ModelCard; 