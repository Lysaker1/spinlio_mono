import { Button, Group, Modal, Select, Stack } from "@mantine/core";
import { IconCloudUpload, IconDownload, IconTrash, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { isSupportedModelFormat } from "../../utils/fileTypeUtils";
import { ComponentCategory, ComponentGroup, ComponentSubcategory, getComponentCategories, getComponentGroups, getComponentSubcategories, uploadModelToS3 } from "../../services/modelService";
import { useNavigate } from "react-router-dom";
import { 
  cacheComponentGroups, 
  cacheCategories, 
  cacheSubcategories, 
  getCachedComponentGroups,
  getCachedCategories,
  getCachedSubcategories
} from "../../utils/cacheUtils";
import { measureLoadTime } from "../../utils/preloadUtils";

interface UploadModalProps {
  profileId: string;
  uploadModalOpened: boolean;
  closeUploadModal: () => void;
}

const UploadModal = ({ uploadModalOpened, closeUploadModal, profileId }: UploadModalProps) => {
  const [uploading, setUploading] = useState(false);

  const [loadingComponentGroups, setLoadingComponentGroups] = useState(false);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [loadingSubCategories, setLoadingSubCategories] = useState(false);
  const [componentGroups, setComponentGroups] = useState<ComponentGroup[]>([]);
  const [categories, setCategories] = useState<ComponentCategory[]>([]);
  const [subCategories, setSubCategories] = useState<ComponentSubcategory[]>([]);

  const [componentGroup, setComponentGroup] = useState<number | null>(null);
  const [component, setComponent] = useState<number | null>(null);
  const [subCategory, setSubCategory] = useState<number | null>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const navigate = useNavigate();
  
  // Reset all form state (used when modal opens/closes)
  const resetFormState = () => {
    setSelectedFile(null);
    setComponentGroup(null);
    setComponent(null);
    setSubCategory(null);
    setCategories([]);
    setSubCategories([]);
  };
  
  // When modal opens or closes, reset the form state
  useEffect(() => {
    if (!uploadModalOpened) {
      resetFormState();
    }
  }, [uploadModalOpened]);

  useEffect(() => {
    const fetchComponentGroups = async () => {
      const endMeasure = measureLoadTime('Component groups loading');
      setLoadingComponentGroups(true);
      
      // Try to get cached component groups first
      const cachedGroups = getCachedComponentGroups();
      if (cachedGroups && cachedGroups.length > 0) {
        setComponentGroups(cachedGroups);
        setLoadingComponentGroups(false);
        endMeasure();
        return; // Return early if we have cached data
      }
      
      // Only fetch from API if no cached data is available
      try {
        const groups = await getComponentGroups();
        setComponentGroups(groups);
        
        // Update cache with fresh data
        cacheComponentGroups(groups);
      } catch (error) {
        console.error('Failed to fetch component groups:', error);
        setComponentGroups([]);
      } finally {
        setLoadingComponentGroups(false);
        endMeasure();
      }
    };
    
    fetchComponentGroups();
  }, []);

  const preloadCategorySubcategories = async (categoryId: number) => {
    if (component === categoryId && subCategories.length > 0) return;
    
    const cachedSubcategories = getCachedSubcategories(categoryId);
    if (cachedSubcategories && cachedSubcategories.length > 0) return;
    
    try {
      console.log(`Preloading subcategories for category ${categoryId}...`);
      const subcategoriesData = await getComponentSubcategories(categoryId);
      cacheSubcategories(categoryId, subcategoriesData);
    } catch (error) {
      console.error(`Failed to preload subcategories for category ${categoryId}:`, error);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      if (!componentGroup) return;
      
      const endMeasure = measureLoadTime(`Categories loading for group ${componentGroup}`);
      setLoadingCategories(true);
      
      // Try to get cached categories first
      const cachedCategories = getCachedCategories(componentGroup);
      if (cachedCategories && cachedCategories.length > 0) {
        setCategories(cachedCategories);
        setLoadingCategories(false);
        endMeasure();
        
        const preloadLimit = Math.min(cachedCategories.length, 3);
        for (let i = 0; i < preloadLimit; i++) {
          preloadCategorySubcategories(cachedCategories[i].id);
        }
        
        return;
      }
      
      // Only fetch from API if no cached data is available
      try {
        const categoriesData = await getComponentCategories(componentGroup);
        setCategories(categoriesData);
        
        // Update cache with fresh data
        cacheCategories(componentGroup, categoriesData);
        
        const preloadLimit = Math.min(categoriesData.length, 3);
        for (let i = 0; i < preloadLimit; i++) {
          preloadCategorySubcategories(categoriesData[i].id);
        }
      } catch (error) {
        console.error(`Failed to fetch categories for group ${componentGroup}:`, error);
        setCategories([]);
      } finally {
        setLoadingCategories(false);
        endMeasure();
      }
      
      setSubCategories([]);
    };
    
    fetchCategories();
  }, [componentGroup]);

  useEffect(() => {
    const fetchSubCategories = async () => {
      if (!component) return;
      
      const endMeasure = measureLoadTime(`Subcategories loading for category ${component}`);
      setLoadingSubCategories(true);
      
      // Try to get cached subcategories first
      const cachedSubcategories = getCachedSubcategories(component);
      if (cachedSubcategories && cachedSubcategories.length > 0) {
        setSubCategories(cachedSubcategories);
        setLoadingSubCategories(false);
        endMeasure();
        return; // Return early if we have cached data
      }
      
      // Only fetch from API if no cached data is available
      try {
        const subcategoriesData = await getComponentSubcategories(component);
        setSubCategories(subcategoriesData);
        
        // Update cache with fresh data
        cacheSubcategories(component, subcategoriesData);
      } catch (error) {
        console.error(`Failed to fetch subcategories for category ${component}:`, error);
        setSubCategories([]);
      } finally {
        setLoadingSubCategories(false);
        endMeasure();
      }
    };
    
    fetchSubCategories();
  }, [component]);

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
      const uploadResponse = await uploadModelToS3(selectedFile, metadata, profileId);
      
      // Close the modal and reset state
      resetFormState();
      
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

  const isLoading = loadingComponentGroups || loadingCategories || loadingSubCategories || uploading;
  
  const isValid = selectedFile && 
                  componentGroup && 
                  component && 
                  (subCategories.length === 0 || subCategory);
  
  const disabled = !isValid || isLoading;

  const handleCloseModal = () => {
    resetFormState();
    closeUploadModal();
  };

  return (
    <Modal
      opened={uploadModalOpened}
      onClose={handleCloseModal}
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
                    <p className="text-xs text-gray-700">
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      {selectedFile.size > 50 * 1024 * 1024 && (
                        <span className="ml-2 text-orange-500 font-bold">
                          (Large file - upload may take some time)
                        </span>
                      )}
                    </p>
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
                        resetFormState();
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
                    placeholder={loadingComponentGroups ? 'Loading category groups...' : 'Select a category group'}
                    data={componentGroups.map((group) => ({ label: group.name, value: group.id?.toString() }))}
                    value={componentGroup?.toString()}
                    onChange={(value: string | null) => {
                      // Reset all downstream selections when group changes
                      setComponentGroup(value ? parseInt(value) : null);
                      setComponent(null);
                      setSubCategory(null);
                      // Clear the category and subcategory data arrays to force re-fetch
                      setCategories([]);
                      setSubCategories([]);
                    }}
                  />
                </>
              )}
              {componentGroup &&  (
                <Select
                  key={`category-select-${componentGroup}`}
                  label="Category"
                  name="category-select"
                  placeholder={loadingCategories ? 'Loading categories...' : 'Select a category'}
                  data={categories.map((category) => ({ label: category.name, value: category.id?.toString() }))}
                  value={component?.toString()}
                  onChange={(value: string | null) => {
                    setComponent(value ? parseInt(value) : null);
                    setSubCategory(null);
                    setSubCategories([]); 
                  }}
                  searchable
                  clearable
                />
              )}

              {component && subCategories.length > 0 && (
                <Select
                  key={`subcategory-select-${component}`}
                  label="Subcategory"
                  name="subcategory-select"
                  placeholder={'Select a subcategory'}
                  data={subCategories.map((subCat) => ({ label: subCat.name, value: subCat.id?.toString() }))}
                  value={subCategory?.toString()}
                  onChange={(value: string | null) => {
                    setSubCategory(value ? parseInt(value) : null);
                  }}
                  searchable
                  clearable
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
              disabled={disabled}
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