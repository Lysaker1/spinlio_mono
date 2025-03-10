import { Button, Group, Modal, Select, Stack } from "@mantine/core";
import ModelUploadForm from "../UploadForm/ModelUploadForm";
import { IconCloudUpload, IconDownload, IconTrash, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { isSupportedModelFormat } from "@dynamic/utils/fileTypeUtils";
import { componentGroups, components, subCategories } from "./constants"; 
import { uploadModelToS3 } from "@dynamic/services/modelService";
import { useNavigate } from "react-router-dom";
interface UploadModalProps {
  uploadModalOpened: boolean;
  closeUploadModal: () => void;
}

const UploadModal = ({ uploadModalOpened, closeUploadModal }: UploadModalProps) => {
  const [uploading, setUploading] = useState(false);
  

  const [componentGroup, setComponentGroup] = useState<string | null>(null);
  const [component, setComponent] = useState<string | null>(null);
  const [subCategory, setSubCategory] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const navigate = useNavigate();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) return;
    
    const file = event.target.files[0];
    
    if (!isSupportedModelFormat(file.name)) {
      alert('Unsupported file format. Please upload one of the following formats: GLTF, GLB, OBJ, STL, STEP, 3DM, FBX, IGES, DWG');
      return;
    }
    
    setSelectedFile(file);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      if (!isSupportedModelFormat(file.name)) {
        alert('Unsupported file format. Please upload one of the following formats: GLTF, GLB, OBJ, STL, STEP, 3DM, FBX, IGES, DWG');
        return;
      }
      setSelectedFile(file);
    }
  };
  
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleUpload = async (metadata: any) => {
    if (!selectedFile) return;
    
    setUploading(true);
    try {
      // Start the upload process and get the model metadata
      const uploadResponse = await uploadModelToS3(selectedFile, metadata);
      console.log('Model metadata created:', uploadResponse);
      
      // Close the modal and reset state
      closeUploadModal();
      setSelectedFile(null);
      
      // Navigate to the edit page immediately
      if (uploadResponse.id) {
        navigate(`/dashboard/uploads/${uploadResponse.id}`);
      }
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Failed to upload model. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const disabled = !selectedFile || !componentGroup || !component || (!subCategory && subCategories[component as keyof typeof subCategories]?.length > 0);

  return (
    <Modal
      opened={uploadModalOpened}
      onClose={closeUploadModal}
      title="Upload 3D Model"
      size="lg"
      centered
      styles={{
        content: {
          borderRadius: '24px',
          padding: '24px',
        },
      }}
    >
        <>
          <form>
            <Stack gap="md">
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => document.getElementById('file-upload')?.click()}
                className="flex flex-col gap-2 items-center justify-center border-2 border-dashed text-center border-gray-300 rounded-lg p-4 cursor-pointer"
              >
                <IconCloudUpload size={48} />
                <p className="text-lg">Drag and drop or click to choose your 3D file here</p>
                <p className="text-sm text-gray-500">Max file size: 10MB</p> 
                <input
                  id="file-upload"
                  type="file"
                  style={{ display: 'none' }}
                  onChange={handleFileSelect}
                  accept=".glb,.gltf,.obj,.stl,.step,.stp,.3dm,.fbx,.iges,.igs,.dwg"
                />
              </div>
              {selectedFile && (
                <div className="mt-2 p-2 border-2 flex justify-between items-center border-gray-300 rounded-lg text-center">
                  <div className="flex flex-col text-left">
                    <p className="text-sm text-black">{selectedFile.name}</p>
                    <p className="text-xs text-gray-700">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                  <div className="flex gap-2">
                    <IconDownload 
                      className="text-gray-700 bg-gray-bg rounded-full p-1 cursor-pointer" 
                      onClick={() => {
                        const url = URL.createObjectURL(selectedFile);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = selectedFile.name;
                        a.click();
                      }} 
                      size={24} 
                    />
                    <IconTrash 
                      className="text-gray-700 bg-gray-bg rounded-full p-1 cursor-pointer" 
                      onClick={() => {
                        setSelectedFile(null);
                        setComponentGroup(null);
                        setComponent(null);
                        setSubCategory(null);
                      }} 
                      size={24} />
                  </div>
                </div>
              )}

              {selectedFile && (
                <>
                  <p className="text-xl text-black mb-1">What are you uploading?</p>
                  <Select
                    label="Category Group"
                    placeholder="Select a category group"
                    data={componentGroups}
                    value={componentGroup}
                    onChange={(value) => {
                    setComponentGroup(value);
                    setComponent(null);
                    setSubCategory(null);
                  }}
                  />
                </>
              )}
              {componentGroup && (
                <Select
                  label="Category"
                  placeholder="Select a category"
                  data={components[componentGroup as keyof typeof components]}
                  value={component}
                  onChange={(value) => {
                    setComponent(value);
                    setSubCategory(null);
                  }}
                />
              )}

              {component && subCategories[component as keyof typeof subCategories]?.length > 0 && (
                <Select
                  label="Subcategory"
                  placeholder="Select a subcategory"
                  data={subCategories[component as keyof typeof subCategories]}
                  value={subCategory}
                  onChange={(value) => {
                    setSubCategory(value);
                  }}
                />
              )}
            </Stack>
          </form>
          <Group justify="center" mt="xl" className="model-upload-form-footer">
            <button 
              onClick={() => handleUpload({
                name: selectedFile?.name,
                filename: selectedFile?.name,
                category: component,
                subcategory: subCategory,
              })}
              disabled={disabled || uploading}
              className={`rounded-full py-2 px-6 ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-bg text-gray-500' : 'bg-black text-white'}`}
            >
              {uploading ? 'Uploading...' : 'Upload Model'}
            </button>
          </Group>
        </>
    </Modal>
  );
};

export default UploadModal;