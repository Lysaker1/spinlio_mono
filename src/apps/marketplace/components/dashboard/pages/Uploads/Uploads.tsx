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
import { v4 as uuidv4 } from 'uuid';

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
  const [testingConnection, setTestingConnection] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const { isAuthenticated } = useAuth();

  // Converted profile for backward compatibility
  const userProfile = adaptUserProfileToProfile(user);

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
          try {
            const userModels = await getModelsPerUser(userId);
            setStatus(prev => `${prev}\nFound ${userModels.length} models in your account.`);
            
            // Show S3 paths of first 3 models
            if (userModels.length > 0) {
              const modelPaths = userModels.slice(0, 3).map(model => 
                `- ${model.name}: ${model.s3_key}`
              ).join('\n');
              setStatus(prev => `${prev}\nYour recent models:\n${modelPaths}`);
            }
          } catch (dbError) {
            console.error('Error fetching models from database:', dbError);
            setStatus(prev => `${prev}\nConnection to S3 successful, but couldn't fetch models from database.`);
          }
        }
      } else {
        setStatus(`S3 connection failed: ${result.message}`);
      }
    } catch (error) {
      console.error('Error testing S3:', error);
      
      let errorMessage = 'S3 test error: Unknown error occurred';
      
      if (error instanceof Error) {
        errorMessage = `S3 test error: ${error.message}`;
        
        // Check for specific errors
        if (error.message.includes('readableStream.getReader')) {
          errorMessage = 'S3 test error: Browser streaming issue detected. We\'re working to fix this compatibility issue.';
        } else if (error.message.includes('credentials')) {
          errorMessage = 'S3 test error: Invalid AWS credentials. Please check your AWS access keys.';
        } else if (error.message.includes('NetworkError')) {
          errorMessage = 'S3 test error: Network error. Please check your internet connection.';
        }
      }
      
      setStatus(errorMessage);
    }
  };

  // Auto-refresh models if any are in processing state
  useEffect(() => {
    // Set up the interval for auto-refreshing processing models
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
  }, [models]); // Depend on models to reset interval when models change

  // Extract user ID from any possible location
  const extractUserId = () => {
    // Log the full user object for debugging
    console.log('User object debug:', {
      userObject: user,
      userProperties: user ? Object.keys(user) : [],
      userString: user ? JSON.stringify(user) : 'null'
    });

    // For Auth0 users, the ID is in the "sub" property - this is highest priority
    if (user && 'sub' in user) {
      console.log('Using Auth0 sub as user ID:', (user as any).sub);
      return (user as any).sub;
    }

    // Try all possible locations for the user ID
    const possibleIds = [
      user?.id,                         // Normal object property
      localStorage.getItem('auth0Id'),  // Check localStorage for Auth0 ID
      localStorage.getItem('userId'),   // Check localStorage for user ID
    ];
    
    // Find the first non-empty value
    const userId = possibleIds.find(id => id && typeof id === 'string' && id.length > 0);
    
    if (userId) {
      console.log('Found user ID from alternative source:', userId);
      return userId;
    }
    
    // If all else fails and we have a user object, try to get something usable
    if (user) {
      // Log full user object for debugging
      console.log('Auth debug - User object structure:', {
        properties: Object.keys(user),
        jsonUser: JSON.stringify(user)
      });

      // Try to extract from picture URL which sometimes contains the Auth0 ID
      if ((user as any).picture && typeof (user as any).picture === 'string') {
        const pictureUrl = (user as any).picture;
        const match = pictureUrl.match(/auth0\|([0-9a-f]+)/i);
        if (match && match[0]) {
          console.log('Extracted Auth0 ID from picture URL:', match[0]);
          // Store for future use
          localStorage.setItem('auth0Id', match[0]);
          return match[0];
        }
      }
    }
    
    console.log('Failed to find a valid user ID');
    return null;
  };

  // Initial data load - attempt loading immediately if user is available
  useEffect(() => {
    const userId = extractUserId();
    
    if (userId) {
      console.log('Loading models for user ID:', userId);
      loadModels();
    } else {
      console.log('User ID not available yet, will try again when user loads');
      // Set loading to false so we see UI instead of loading indicator
      setLoading(false);
    }
  }, [user]);

  const loadModels = async () => {
    const userId = extractUserId();
    if (!userId) {
      console.error('Cannot load models - User ID not available');
      setLoading(false);
      return;
    }
  
    try {
      setLoading(true);
      console.log('Loading models for user ID:', userId);
      const fetchedModels = await getModelsPerUser(userId);
      console.log(`Fetched ${fetchedModels.length} models for user`);
      setModels(fetchedModels);
    } catch (error) {
      console.error('Error loading models:', error);
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
    setUploading(true);
    setUploadError(null);
    
    console.log('Starting upload with metadata:', metadata);

    if (!selectedFile || !userProfile) {
      setUploadError('No file selected or user not logged in');
      setUploading(false);
      return;
    }

    try {
      // First test S3 connectivity
      setTestingConnection(true);
      await testS3Connection();
      setTestingConnection(false);
      
      // Generate a nice URL-friendly filename from the original
      const cleanFilename = selectedFile.name
        .toLowerCase()
        .replace(/[^a-z0-9-.]/g, '_');
      
      // Add system-generated UUID and cleaned filename to metadata
      const modelId = uuidv4();
      
      // Use the ID from the user profile as user_id for the model
      const userId = userProfile.id;
      
      // Get the file extension
      const fileExt = selectedFile.name.split('.').pop()?.toLowerCase();
      
      // Create s3 key based on calculated paths
      const s3Key = `users/${userId}/models/${modelId}/${fileExt}/${modelId}-${cleanFilename}`;
      console.log('Generated S3 key:', s3Key);
      
      console.log('Uploading file:', selectedFile.name, 'Size:', selectedFile.size, 'Type:', selectedFile.type || 'unknown');
      
      // Upload model to S3 with all metadata and the userId for proper organization
      // Add special flags for upload behavior
      await uploadModelToS3(
        selectedFile, 
        {
          ...metadata,
          id: modelId,
          filename: selectedFile.name,
          is_public: true,
          price_on_request: false,
          moq_on_request: false,
          lead_time_on_request: false,
          payment_terms_on_request: false
        }, 
        userId
      );

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
      
      setUploadError(errorMessage);
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

  const handleUploadSuccess = (model: any) => {
    // Refresh the models list immediately
    loadModels();
    
    // Optionally show the edit modal for the new model
    // This functionality would require additional state and a new modal component
  };

  // Instead of returning early, we'll show the UI but disable actions that need the user
  const isUserLoading = !user;

  return (
    <PageLayout {...pageLayoutProps}>
      {isUserLoading && (
        <Alert color="black" title="Loading user profile" mb="md" style={{ backgroundColor: 'white', color: 'black' }}>
          . . . 
        </Alert>
      )}

      <div style={{ marginBottom: '1rem' }}>
        <Button 
          onClick={() => {
            // Log authentication status
            console.log('Auth status:', { 
              isAuthenticated, 
              hasUser: !!user, 
              userId: extractUserId() 
            });
            // Force upload modal to open regardless of user status
            openUploadModal();
          }}
          style={{ 
            backgroundColor: 'black', // Black background
            color: 'white',            // White text
            border: '1px solid rgb(0, 0, 0)',
            padding: '8px 16px',
            marginRight: '8px'
          }}
        >
          Upload Model
        </Button>
        
        {/* S3 Test Button */}
        {/* <Button 
          onClick={testS3Connection}
          loading={testingConnection}
          disabled={isUserLoading}
          style={{ 
            backgroundColor: 'white', // 
            color: 'black',
            border: '1px solidrgb(255, 255, 255)',
            padding: '8px 16px',
            marginRight: '8px'
          }}
        >
          Test S3 Connection
        </Button> */}

        <Button 
          variant="outline" 
          onClick={handleRefresh}
          style={{ padding: '8px 16px', backgroundColor: 'white', color: 'black', border: '1px solid rgb(0, 0, 0)' }}
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

      {uploadError && (
        <Alert 
          color="red" 
          title="Upload Error"
          mb="md"
        >
          {uploadError}
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

      <UploadModal 
        uploadModalOpened={uploadModalOpened} 
        closeUploadModal={closeUploadModal} 
        profileId={extractUserId() || ''} 
        onUploadSuccess={handleUploadSuccess}
      />
    </PageLayout>
  );
};

export default Uploads; 