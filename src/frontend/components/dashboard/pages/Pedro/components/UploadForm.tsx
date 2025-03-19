import React, { useState, useRef, useCallback } from 'react';
import { 
  Box, 
  Text, 
  Group, 
  Button, 
  useMantineTheme, 
  Stack,
  Paper,
  Title,
  Alert,
  Divider,
  Badge,
  List
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconUpload, IconFile3d, IconAlertCircle, IconCheck, IconRefresh } from '@tabler/icons-react';

interface UploadFormProps {
  onFileSelected: (file: File) => void;
  loading?: boolean;
  error?: string | null;
  supportedFormats?: string[];
}

/**
 * File upload component with drag-and-drop and format validation
 */
const UploadForm: React.FC<UploadFormProps> = ({
  onFileSelected,
  loading = false,
  error = null,
  supportedFormats = ['.glb', '.gltf', '.obj', '.stl', '.fbx', '.3dm', '.dae']
}) => {
  const theme = useMantineTheme();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [infoVisible, infoHandlers] = useDisclosure(false);
  
  // Format list for display
  const formatList = supportedFormats.map(format => format.replace('.', '').toUpperCase());
  
  // Function to check if file is supported
  const isFileSupported = (file: File) => {
    const extension = '.' + file.name.split('.').pop()?.toLowerCase();
    return supportedFormats.includes(extension);
  };
  
  // Handle file selection
  const handleFileChange = (file: File) => {
    // Clear previous errors
    setUploadError(null);
    
    // Check if file is supported
    if (!isFileSupported(file)) {
      setUploadError(`Unsupported file format. Please upload ${formatList.join(', ')}`);
      return;
    }
    
    // Store selected file
    setSelectedFile(file);
    
    // Notify parent component
    onFileSelected(file);
  };
  
  // Handle file input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      handleFileChange(files[0]);
    }
  };
  
  // Handle drag events
  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  }, []);
  
  const handleDragLeave = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  }, []);
  
  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    
    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      handleFileChange(files[0]);
    }
  }, []);
  
  // Handle button click to open file dialog
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  // Handle reset file selection
  const handleReset = () => {
    setSelectedFile(null);
    setUploadError(null);
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
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
      <Stack gap="sm">
        <Title order={4} mb="xs">Upload 3D Model</Title>
        
        {/* Drag and drop area */}
        <Box
          style={{
            border: `2px dashed ${isDragging ? theme.colors.blue[5] : theme.colors.gray[4]}`,
            backgroundColor: isDragging ? theme.colors.blue[0] : theme.colors.gray[0],
            borderRadius: theme.radius.md,
            transition: 'all 200ms ease',
            cursor: 'pointer',
            padding: '20px',
            textAlign: 'center',
            minHeight: '120px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleUploadClick}
        >
          <IconUpload
            size={36}
            color={isDragging ? theme.colors.blue[5] : theme.colors.gray[5]}
            stroke={1.5}
          />
          
          <Text mt="md" c={isDragging ? 'blue' : 'dimmed'} size="sm">
            Drop your 3D model here or click to browse
          </Text>
          
          <Text size="xs" c="dimmed" mt={5}>
            Supported formats: {formatList.join(', ')}
          </Text>
          
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleInputChange}
            style={{ display: 'none' }}
            accept={supportedFormats.join(',')}
          />
        </Box>
        
        {/* Selected file info */}
        {selectedFile && (
          <Box mt="md">
            <Group justify="space-between" gap="sm">
              <Group gap="xs">
                <IconFile3d size={20} color={theme.colors.blue[6]} />
                <Box>
                  <Text size="sm" fw={500}>{selectedFile.name}</Text>
                  <Text size="xs" c="dimmed">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </Text>
                </Box>
              </Group>
              
              <Button 
                size="xs" 
                variant="light" 
                color="gray" 
                onClick={handleReset}
                leftSection={<IconRefresh size={14} />}
                disabled={loading}
              >
                Change
              </Button>
            </Group>
            
            {loading && (
              <Badge color="blue" variant="light" mt="xs" fullWidth>
                Processing model...
              </Badge>
            )}
          </Box>
        )}
        
        {/* Error display */}
        {(uploadError || error) && (
          <Alert 
            icon={<IconAlertCircle size={16} />} 
            title="Upload Error" 
            color="red" 
            mt="sm"
            variant="light"
          >
            {uploadError || error}
          </Alert>
        )}
        
        {/* Format info toggle */}
        <Box mt="sm">
          <Divider my="xs" />
          <Group justify="space-between">
            <Text size="xs" c="dimmed" style={{ cursor: 'pointer' }} onClick={infoHandlers.toggle}>
              {infoVisible ? 'Hide format info' : 'Show format info'}
            </Text>
            
            {selectedFile && !loading && !error && (
              <Badge color="green" variant="dot" size="sm">
                Ready to process
              </Badge>
            )}
          </Group>
        </Box>
        
        {/* Format information */}
        {infoVisible && (
          <Box mt="xs" p="xs" style={{ backgroundColor: theme.colors.gray[1], borderRadius: theme.radius.sm }}>
            <Text size="xs" mb="xs">Supported formats:</Text>
            <List size="xs" spacing="xs" withPadding>
              <List.Item icon={<IconCheck size={12} />}>
                <strong>GLB/GLTF</strong>: Recommended 3D format for web display
              </List.Item>
              <List.Item icon={<IconCheck size={12} />}>
                <strong>OBJ</strong>: Common 3D model format with materials
              </List.Item>
              <List.Item icon={<IconCheck size={12} />}>
                <strong>STL</strong>: Simple triangular mesh format
              </List.Item>
              <List.Item icon={<IconCheck size={12} />}>
                <strong>FBX</strong>: Autodesk format with advanced features
              </List.Item>
              <List.Item icon={<IconCheck size={12} />}>
                <strong>3DM</strong>: Rhino format for NURBS models
              </List.Item>
            </List>
          </Box>
        )}
      </Stack>
    </Paper>
  );
};

export default UploadForm; 