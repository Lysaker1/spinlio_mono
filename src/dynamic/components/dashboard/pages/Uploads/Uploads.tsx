import React, { useState, useEffect } from 'react';
import { SimpleGrid, Text, Button, Card, Image, Group, Badge, Modal, Loader, Stack, TextInput, Textarea, Select, Alert } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import PageLayout from '../../components/PageLayout/PageLayout';
import { getModels, uploadModelToS3, deleteModel, ModelMetadata, testS3Upload } from '../../../../services/modelService';
import { isSupportedModelFormat } from '../../../../utils/fileTypeUtils';
import './Uploads.css';

// Import ModelCard component if it exists
let ModelCard: React.ComponentType<any> | null = null;
try {
  ModelCard = require('./components/ModelCard').default;
} catch (error) {
  // Use inline component if import fails
  ModelCard = null;
}

// Inline ModelCard component if import failed
const InlineModelCard = ({ model, onDelete, onRefresh }: { 
  model: ModelMetadata; 
  onDelete: () => void;
  onRefresh?: () => void;
}) => {
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

  return (
    <Card shadow="sm" padding="md" radius="md" withBorder>
      <Card.Section>
        <div className="model-thumbnail">
          <Image
            src={`/assets/placeholder-thumbnails/${model.filename?.split('.').pop()}.jpg`}
            fallbackSrc="/assets/placeholder-thumbnails/default.jpg"
            h={160}
            alt={model.name}
          />
        </div>
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{model.name}</Text>
        <Badge color={getStatusColor(model.conversion_status)}>
          {model.conversion_status || 'Unknown'}
        </Badge>
      </Group>

      <Text size="sm" c="dimmed" mb="md">
        {model.description || 'No description provided'}
      </Text>

      <Group justify="flex-end" mt="md">
        <Button size="xs" onClick={() => model.url && window.open(model.url, '_blank')}>
          View Model
        </Button>
        <Button size="xs" color="red" onClick={onDelete}>
          Delete
        </Button>
      </Group>
    </Card>
  );
};

// Use either imported ModelCard or inline version
const ModelCardComponent = ModelCard || InlineModelCard;

// Create the ModelUploadForm component inline
const ModelUploadForm = ({ 
  filename, 
  fileSize, 
  onSubmit, 
  uploading 
}: { 
  filename: string; 
  fileSize: number; 
  onSubmit: (metadata: any) => void; 
  uploading: boolean; 
}) => {
  const [name, setName] = useState(filename.split('.')[0]);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      filename,
      category,
      description
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput
          required
          label="Model Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter model name"
        />

        <Select
          required
          label="Category"
          placeholder="Select a category"
          value={category}
          onChange={(value) => setCategory(value || '')}
          data={[
            { value: 'category_1', label: 'Category 1' },
            { value: 'category_2', label: 'Category 2' },
            { value: 'category_3', label: 'Category 3' },
            { value: 'category_4', label: 'Category 4' },
            { value: 'category_5', label: 'Category 5' },
            { value: 'category_6', label: 'Category 6' },
            { value: 'category_7', label: 'Category 7' },
          ]}
        />

        <Textarea
          label="Description"
          placeholder="Enter model description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          minRows={3}
        />

        <Group justify="flex-end">
          <Button type="submit" loading={uploading}>
            {uploading ? 'Uploading...' : 'Upload Model'}
          </Button>
        </Group>
      </Stack>
    </form>
  );
};

const Uploads: React.FC = () => {
  const [models, setModels] = useState<ModelMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadModalOpened, { open: openUploadModal, close: closeUploadModal }] = useDisclosure(false);
  const [refreshInterval, setRefreshInterval] = useState<number | null>(null);
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null);
  const [testing, setTesting] = useState(false);

  // Function to test S3 connectivity
  const handleTestS3 = async () => {
    setTesting(true);
    setTestResult(null);
    try {
      const result = await testS3Upload();
      setTestResult(result);
    } catch (error) {
      let message = 'Unknown error occurred';
      if (error instanceof Error) {
        message = error.message;
      } else if (typeof error === 'string') {
        message = error;
      }
      setTestResult({ success: false, message });
    } finally {
      setTesting(false);
    }
  };

  useEffect(() => {
    loadModels();

    // Auto-refresh models if any are in processing state
    const interval = window.setInterval(() => {
      const hasProcessingModels = models.some(model => model.conversion_status === 'processing');
      if (hasProcessingModels) {
        loadModels();
      }
    }, 10000); // Check every 10 seconds

    setRefreshInterval(interval);

    return () => {
      if (refreshInterval) {
        window.clearInterval(refreshInterval);
      }
    };
  }, []);

  const loadModels = async () => {
    setLoading(true);
    try {
      const fetchedModels = await getModels();
      setModels(fetchedModels);
    } catch (error) {
      console.error('Failed to load models:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) return;
    
    const file = event.target.files[0];
    
    if (!isSupportedModelFormat(file.name)) {
      alert('Unsupported file format. Please upload one of the following formats: GLTF, GLB, OBJ, STL, STEP, 3DM, FBX, IGES, DWG');
      return;
    }
    
    setSelectedFile(file);
    openUploadModal();
  };

  const handleUpload = async (metadata: any) => {
    if (!selectedFile) return;
    
    setUploading(true);
    try {
      await uploadModelToS3(selectedFile, metadata);
      await loadModels();
      closeUploadModal();
      setSelectedFile(null);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Failed to upload model. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (modelId: string) => {
    if (!confirm('Are you sure you want to delete this model?')) return;
    
    try {
      await deleteModel(modelId);
      await loadModels();
    } catch (error) {
      console.error('Failed to delete model:', error);
      alert('Failed to delete model. Please try again.');
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleRefresh = () => {
    loadModels();
  };

  // Filter models based on search query
  const filteredModels = models.filter(model => 
    model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    model.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (model.manufacturer && model.manufacturer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Check if PageLayout accepts actions prop
  const pageLayoutProps = {
    title: "3D Model Management",
    totalPages: Math.ceil(filteredModels.length / 9),
    currentPage: currentPage,
    onPageChange: setCurrentPage,
    onSearch: handleSearch,
    // Removed actions prop if it's not supported
  };

  return (
    <PageLayout {...pageLayoutProps}>
      <div style={{ marginBottom: '1rem' }}>
        <Button 
          onClick={() => document.getElementById('file-upload')?.click()}
          style={{ 
            backgroundColor: '#228be6', // Blue background
            color: 'white',            // White text
            border: '1px solid #1c7ed6',
            padding: '8px 16px',
            marginRight: '8px'
          }}
        >
          Upload Model
          <input
            id="file-upload"
            type="file"
            style={{ display: 'none' }}
            onChange={handleFileSelect}
            accept=".glb,.gltf,.obj,.stl,.step,.stp,.3dm,.fbx,.iges,.igs,.dwg"
          />
        </Button>
        
        {/* S3 Test Button */}
        <Button 
          onClick={handleTestS3}
          loading={testing}
          style={{ 
            backgroundColor: '#fd7e14', // Orange background
            color: 'white',
            border: '1px solid #f76707',
            padding: '8px 16px',
            marginRight: '8px'
          }}
        >
          Test S3 Connection
        </Button>

        <Button 
          variant="outline" 
          onClick={handleRefresh}
          style={{ padding: '8px 16px' }}
        >
          Refresh
        </Button>
      </div>

      {/* S3 Test Result Alert */}
      {testResult && (
        <Alert 
          color={testResult.success ? 'green' : 'red'} 
          title={testResult.success ? 'S3 Connection Successful' : 'S3 Connection Failed'}
          mb="md"
          withCloseButton
          onClose={() => setTestResult(null)}
        >
          {testResult.message}
        </Alert>
      )}

      {loading ? (
        <div className="loading-container">
          <Loader size="lg" />
          <Text>Loading models...</Text>
        </div>
      ) : (
        <SimpleGrid cols={3} spacing="lg">
          {filteredModels.length === 0 ? (
            <Text>No models found. Upload your first 3D model!</Text>
          ) : (
            filteredModels
              .slice((currentPage - 1) * 9, currentPage * 9)
              .map((model) => (
                <ModelCardComponent 
                  key={model.id} 
                  model={model} 
                  onDelete={() => handleDelete(model.id!)} 
                  onRefresh={handleRefresh}
                />
              ))
          )}
        </SimpleGrid>
      )}

      <Modal
        opened={uploadModalOpened}
        onClose={closeUploadModal}
        title="Upload 3D Model"
        size="lg"
        styles={{
          content: {
            maxHeight: '90vh', // Use nearly full viewport height
          },
          body: { 
            maxHeight: 'none', // Let the body expand as needed
            overflowY: 'auto',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
          },
          header: {
            marginBottom: '10px',
            padding: '20px 20px 0 20px',
          }
        }}
      >
        {selectedFile && (
          <>
            <ModelUploadForm
              filename={selectedFile.name}
              fileSize={selectedFile.size}
              onSubmit={handleUpload}
              uploading={uploading}
            />
            {/* Backup fixed button that's always visible */}
            <Group justify="flex-end" mt="xl" className="model-upload-form-footer">
              <Button 
                onClick={() => document.querySelector('form')?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))}
                loading={uploading}
                className="model-upload-submit-button"
                size="md"
              >
                {uploading ? 'Uploading...' : 'Upload Model'}
              </Button>
            </Group>
          </>
        )}
      </Modal>
    </PageLayout>
  );
};

export default Uploads; 