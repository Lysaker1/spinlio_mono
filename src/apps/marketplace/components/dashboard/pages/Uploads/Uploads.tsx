import { Alert, Badge, Button, Card, Group, Image, Loader, SimpleGrid, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useUser } from '@shared/hooks/useUser';
import { useAuth } from '@shared/hooks/useAuth';
import React, { useEffect, useState } from 'react';
import { deleteModel, getModelsPerUser, ModelMetadata, testS3Upload, uploadModelToS3 } from '@shared/services/modelService';
import { isSupportedModelFormat } from '@shared/utils/fileTypeUtils';
import PageLayout from '../../components/PageLayout/PageLayout';
import './Uploads.css';
import UploadModal from './components/UploadModal/UploadModal';
import { UserProfile } from '@shared/hooks/useUser';
import { Profile } from '@shared/types/Profile';

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

// Adapter function to convert UserProfile to the legacy Profile type
const adaptUserProfileToProfile = (userProfile: UserProfile | null): Profile | null => {
  if (!userProfile) return null;
  
  return {
    id: userProfile.id,
    name: userProfile.name || '',
    email: userProfile.email,
    avatar_url: userProfile.picture,
    is_public: true, // Default to true since UserProfile doesn't have this
    created_at: userProfile.created_at || new Date().toISOString()
  };
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
  const [status, setStatus] = useState<string | null>(null);
  
  // Updated hooks usage
  const { user } = useUser();
  const { isAuthenticated } = useAuth();

  // Converted profile for backward compatibility
  const adaptedProfile = adaptUserProfileToProfile(user);

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

  // Test S3 connectivity function with clear feedback
  const testS3Connection = async () => {
    setStatus('Testing S3 connectivity...');
    try {
      const result = await testS3Upload();
      if (result.success) {
        setStatus(`S3 connection successful: ${result.message}`);
        
        // Get current user's uploaded models to verify DB connectivity
        const userId = user?.id || (user as any)?.sub;
        if (userId) {
          const userModels = await getModelsPerUser(userId);
          setStatus(prev => `${prev}\nFound ${userModels.length} models in your account.`);
          
          // Show S3 paths of first 3 models
          if (userModels.length > 0) {
            const modelPaths = userModels.slice(0, 3).map(model => 
              `- ${model.name}: ${model.s3_key}`
            ).join('\n');
            setStatus(prev => `${prev}\nYour recent models:\n${modelPaths}`);
          }
        }
      } else {
        setStatus(`S3 connection failed: ${result.message}`);
      }
    } catch (error) {
      console.error('Error testing S3:', error);
      setStatus(`S3 test error: ${error instanceof Error ? error.message : String(error)}`);
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
      const fetchedModels = await getModelsPerUser(user?.id || '');
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
    
    // Add file size warning for large files
    if (selectedFile.size > 50 * 1024 * 1024) {
      const fileSizeMB = (selectedFile.size / (1024 * 1024)).toFixed(2);
      alert(`Warning: You are uploading a large file (${fileSizeMB}MB). The upload may take some time to complete. Please don't close the browser tab during the upload.`);
    }
    
    setUploading(true);
    try {
      await uploadModelToS3(selectedFile, metadata);
      await loadModels();
      closeUploadModal();
      setSelectedFile(null);
    } catch (error) {
      console.error('Upload failed:', error);
      let errorMessage = 'Failed to upload model. Please try again.';
      
      // Get more detailed error message if available
      if (error instanceof Error) {
        errorMessage = `Upload failed: ${error.message}`;
      }
      
      alert(errorMessage);
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

  
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <PageLayout {...pageLayoutProps}>
      <div style={{ marginBottom: '1rem' }}>
        <Button 
          onClick={() => openUploadModal()}
          style={{ 
            backgroundColor: '#228be6', // Blue background
            color: 'white',            // White text
            border: '1px solid #1c7ed6',
            padding: '8px 16px',
            marginRight: '8px'
          }}
        >
          Upload Model
        </Button>
        
        {/* S3 Test Button */}
        <Button 
          onClick={testS3Connection}
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

      {status && (
        <div className="mt-4 p-3 bg-gray-100 rounded-md whitespace-pre-wrap">
          <h3 className="font-bold mb-2">Status:</h3>
          {status}
        </div>
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

      <UploadModal 
        uploadModalOpened={uploadModalOpened} 
        closeUploadModal={closeUploadModal} 
        profileId={user.id} 
      />
    </PageLayout>
  );
};

export default Uploads; 