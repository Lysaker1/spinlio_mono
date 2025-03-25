import { Alert, ColorPicker, Loader, Menu, NumberInput, Tabs, Text, Textarea, TextInput, MultiSelect } from '@mantine/core';
import { IconAlertCircle, IconCheck, IconChevronDown, IconPencil, IconPhotoPlus } from '@tabler/icons-react';
import React, { useEffect, useState, CSSProperties } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ModelMetadata, ModelParameterValue, deleteModel, getModelById, updateModel, uploadThumbnail } from '@shared/services/modelService';
import { AttachmentPoint, apiToAttachmentPoint, attachmentPointToApi } from '@shared/types/attachment-points';
import ModelViewer from './ModelViewer';
import Parameters from './Parameters';
import SnapPointHelper from './SnapPointHelper';
import SnapPointsTab from './SnapPointsTab';
import GeneralTab, { GeneralTabValues } from './GeneralTab';
const EditModel: React.FC = () => {
  const [model, setModel] = useState<ModelMetadata | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  const [isEditingName, setIsEditingName] = useState<boolean>(false);
  const [isPublic, setIsPublic] = useState<boolean>(false);
  const [name, setName] = useState<string>('');

  const [color, setColor] = useState<string | null>(null);
  const [colorPickerVisible, setColorPickerVisible] = useState<boolean>(false);

  const [parameterValues, setParameterValues] = useState<ModelParameterValue[]>([]);

  // General tab values
  const [missingFields, setMissingFields] = useState<string[]>([]);
  const [generalValues, setGeneralValues] = useState<GeneralTabValues>({
    description: null,
    price: null,
    priceOnRequest: false,
    minimumOrderQuantity: null,
    moqOnRequest: false,
    leadTime: null,
    leadTimeOnRequest: false,
    paymentTerms: null,
    paymentTermsOnRequest: false,
    thumbnailFile: null,
  });
  
  // Snap points state
  const [attachmentPoints, setAttachmentPoints] = useState<AttachmentPoint[]>([]);
  const [selectedPoint, setSelectedPoint] = useState<string | null>(null);
  
  // Active tab state
  const [activeTab, setActiveTab] = useState<string>("general");

  const [alertMessage, setAlertMessage] = useState<string | undefined>();
  const [alertColor, setAlertColor] = useState<string | undefined>();

  const navigate = useNavigate();
  
  // Color state
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  
  // Common colors for bike components
  const bikeColors = [
    { value: 'black', label: 'Black', color: '#000000' },
    { value: 'white', label: 'White', color: '#FFFFFF' },
    { value: 'red', label: 'Red', color: '#FF0000' },
    { value: 'blue', label: 'Blue', color: '#0000FF' },
    { value: 'green', label: 'Green', color: '#008000' },
    { value: 'yellow', label: 'Yellow', color: '#FFFF00' },
    { value: 'orange', label: 'Orange', color: '#FFA500' },
    { value: 'purple', label: 'Purple', color: '#800080' },
    { value: 'pink', label: 'Pink', color: '#FFC0CB' },
    { value: 'brown', label: 'Brown', color: '#A52A2A' },
    { value: 'gray', label: 'Gray', color: '#808080' },
    { value: 'silver', label: 'Silver', color: '#C0C0C0' },
    { value: 'gold', label: 'Gold', color: '#FFD700' },
    { value: 'bronze', label: 'Bronze', color: '#CD7F32' },
    { value: 'titanium', label: 'Titanium', color: '#878681' },
    { value: 'carbon', label: 'Carbon', color: '#333333' },
    { value: 'navy', label: 'Navy Blue', color: '#000080' },
    { value: 'cream', label: 'Cream', color: '#FFFDD0' },
    { value: 'olive', label: 'Olive', color: '#808000' },
    { value: 'teal', label: 'Teal', color: '#008080' }
  ];

  useEffect(() => {
    const fetchModel = async () => {
      setLoading(true);
      if (!id) {
        setError('No model ID provided');
        setLoading(false);
        return;
      }
      try {
        const model = await getModelById(id);
        setModel(model);
        
        // Load attachment points if available
        if (model?.attachment_points && Array.isArray(model.attachment_points)) {
          // Convert from API format to our internal format using our helper
          const points: AttachmentPoint[] = model.attachment_points.map((point: any, index: number) => 
            apiToAttachmentPoint(point, index)
          );
          setAttachmentPoints(points);
        }
      } catch (error) {
        setError((error as Error).message); 
      } finally {
        setLoading(false);
      }
    };

    fetchModel();
  }, [id]);

  const validateSave = () => {
    const missing = [];
    if (!model?.thumbnail_url && !generalValues.thumbnailFile) {
      missing.push('thumbnail');
    }
    if (!generalValues.price && !generalValues.priceOnRequest) {
      missing.push('price');
    }
    if (!generalValues.minimumOrderQuantity && !generalValues.moqOnRequest) {
      missing.push('minimumOrderQuantity');
    }
    if (!generalValues.leadTime && !generalValues.leadTimeOnRequest) {
      missing.push('leadTime');
    }
    if (!generalValues.paymentTerms && !generalValues.paymentTermsOnRequest) {
      missing.push('paymentTerms');
    }
  
    if (missing.length > 0) {
      setActiveTab('general');
      setMissingFields(missing);
      return false;
    }
  
    setMissingFields([]);
    return true;
  };
  
  const handleSave = async () => {
    if (!id) {
      setError('No model ID provided');
      return;
    }
    if (!validateSave()) {
      setAlertMessage("Please fill out all required fields.");
      setAlertColor("red");
      return;
    }
    setSaving(true);
    console.log("Saving...");
    
    // Convert attachment points to API format using our helper
    const apiAttachmentPoints = attachmentPoints.map(attachmentPointToApi);

    // Upload thumbnail to S3 if a file is selected
    let thumbnailUrl = model?.thumbnail_url;
    if (generalValues.thumbnailFile) {
      try {
        thumbnailUrl = await uploadThumbnail(generalValues.thumbnailFile);
      } catch (error) {
        setError('Failed to upload thumbnail');
        setSaving(false);
        return;
      }
    }

    try {
      await updateModel(id, { 
        ...model,
        name: name,
        description: generalValues.description,
        is_public: isPublic,
        /*  attachment_points: apiAttachmentPoints, */
        // Store the selected colors in the colors field
        colors: selectedColors.length > 0 ? selectedColors.join(',') : undefined,
        thumbnail_url: thumbnailUrl,
        price: generalValues.price,
        price_on_request: generalValues.priceOnRequest,
        minimum_order_quantity: generalValues.minimumOrderQuantity,
        moq_on_request: generalValues.moqOnRequest,
        lead_time: generalValues.leadTime,
        lead_time_on_request: generalValues.leadTimeOnRequest,
        payment_terms: generalValues.paymentTerms,
        payment_terms_on_request: generalValues.paymentTermsOnRequest
      }, parameterValues);

      console.log("Saved!");
      setAlertMessage("Model saved successfully!");
      setAlertColor("green");
      setSaving(false);
    } catch (error) {
      console.error("Error updating model:", error);
      setAlertMessage("Failed to save model");
      setAlertColor("red");
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!id) {
      setError('No model ID provided');
      return;
    }
    console.log("Deleting...");
    await deleteModel(id);
    navigate('/uploads');
    console.log("Deleted!");
  };
  
  // Handle updating an attachment point
  const handleAttachmentPointUpdated = (updatedPoint: AttachmentPoint) => {
    setAttachmentPoints(prev => 
      prev.map(point => point.id === updatedPoint.id ? updatedPoint : point)
    );
  };
  
  // Add a new attachment point
  const handleAddAttachmentPoint = () => {
    const newPointId = `point-${Date.now()}`;
    const newPoint: AttachmentPoint = {
      id: newPointId,
      position: [0, 0, 0],
      rotation: [0, 0, 0, 1], // Identity quaternion
      normal: [0, 0, 1], // Forward direction
      color: '#FF0000'
    };
    
    setAttachmentPoints(prev => [...prev, newPoint]);
    setSelectedPoint(newPointId);
  };
  
  // Remove an attachment point
  const handleRemoveAttachmentPoint = (pointId: string) => {
    setAttachmentPoints(prev => prev.filter(point => point.id !== pointId));
    if (selectedPoint === pointId) {
      setSelectedPoint(null);
    }
  };

  // Initialize selectedColors from model.colors on load
  useEffect(() => {
    if (model) {
      setIsPublic(model.is_public);
      setName(model.name);
      // Split the colors string into an array of colors if it exists
      if (model.colors) {
        setSelectedColors(model.colors.split(','));
      }
      setGeneralValues({
        description: model.description ?? null,
        price: model.price ?? null,
        priceOnRequest: model.price_on_request,
        minimumOrderQuantity: model.minimum_order_quantity ?? null,
        moqOnRequest: model.moq_on_request,
        leadTime: model.lead_time ?? null,
        leadTimeOnRequest: model.lead_time_on_request,
        paymentTerms: model.payment_terms ?? null,
        paymentTermsOnRequest: model.payment_terms_on_request,
        thumbnailFile: null,
      });
    }
  }, [model]);

  const fileExtension = model?.filename?.split('.').pop()?.toLowerCase();
  const isSupported = fileExtension === 'glb' || fileExtension === 'gltf';

  // Handler for tab change that handles the nullable value
  const handleTabChange = (value: string | null) => {
    if (value) {
      setActiveTab(value);
    }
  };

  // Update activeTab state definition to match tab values used in component
  useEffect(() => {
    // Convert 'snap-points' to 'snapPoints' if that's the current value
    if (activeTab === 'snap-points') {
      setActiveTab('snapPoints');
    }
  }, [activeTab]);

  const handleGeneralChange = (general: Partial<GeneralTabValues>) => {
    setGeneralValues(prev => ({
      ...prev,
      ...general,
      price: general.priceOnRequest ? null : general.price ?? prev.price,
      minimumOrderQuantity: general.moqOnRequest ? null : general.minimumOrderQuantity ?? prev.minimumOrderQuantity,
      leadTime: general.leadTimeOnRequest ? null : general.leadTime ?? prev.leadTime,
      paymentTerms: general.paymentTermsOnRequest ? null : general.paymentTerms ?? prev.paymentTerms,
    }));

    const fieldsToCheck = ['thumbnail', 'price', 'minimumOrderQuantity', 'leadTime', 'paymentTerms'];
    const removeMissingFields = fieldsToCheck.filter(field => {
      if (field === 'thumbnail') return (general.thumbnailFile);
      if (field === 'price') return (general.price || general.priceOnRequest);
      if (field === 'minimumOrderQuantity') return (general.minimumOrderQuantity || general.moqOnRequest);
      if (field === 'leadTime') return (general.leadTime || general.leadTimeOnRequest);
      if (field === 'paymentTerms') return (general.paymentTerms || general.paymentTermsOnRequest);
      return false;
    });

    setMissingFields(missingFields.filter(field => !removeMissingFields.includes(field)));
  };

  console.log(generalValues);

  return (
    <div className='w-full min-h-[calc(100vh-60px)] bg-white p-4'>
      <div className='flex justify-between items-center mb-4'>
        <div className='flex gap-2'>
            {isEditingName ? (
              <div className='flex items-center gap-1'>
                <TextInput placeholder='Enter model name' value={name} onChange={(e) => setName(e.target.value)} />
                <IconCheck size={24} onClick={() => setIsEditingName(false)} color='gray' className='cursor-pointer'/>
              </div>
            ) : (
              <div className='flex items-center gap-1'>
                <h1 className='text-2xl font-semibold'>{name}</h1>
                <IconPencil size={24} onClick={() => setIsEditingName(true)} color='gray' className='cursor-pointer'/>
              </div>
            )}
          <div className='flex items-center ml-4'>
            <p className='mr-2 text-gray-500'>Visibility:</p>
            <Menu>
              <Menu.Target>
                <div className='flex items-center gap-1 text-black cursor-pointer'>
                  {isPublic ? 'Public' : 'Private'}
                  <IconChevronDown size={16} />
                </div>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item onClick={() => setIsPublic(true)}>Public</Menu.Item>
                <Menu.Item onClick={() => setIsPublic(false)}>Private</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </div>
        <div className='flex gap-1'>
          <button className='bg-black text-white px-6 py-2 rounded-full' onClick={() => handleSave()} disabled={saving}>{saving ? 'Saving...' : 'Save'}</button>
          <button className='bg-red-500 text-white px-4 py-2 rounded-full' onClick={() => handleDelete()}>Delete</button>
        </div>
      </div>
      <div className='mb-4'>
        {alertMessage && (
          <Alert color={alertColor} icon={<IconAlertCircle size={16} />} title={alertMessage} onClose={() => setAlertMessage(undefined)} withCloseButton />
        )}
      </div>
      {loading ? (
        <div className='flex flex-col justify-center items-center h-full'>
          <Loader size="lg" />
          <Text>Loading model...</Text>
        </div>
      ) : error ? (
        <div className='flex justify-center items-center h-full'>
          <Text>Error: {error}</Text>
        </div>
      ) : (
        <>
        <div className='flex border border-gray-300 rounded-lg h-[calc(100vh-140px)]' style={{ minHeight: '600px' }}>
          {/* Left side - 3D model viewer and description */}
          <div className='w-3/5 h-full bg-white p-6 flex flex-col' style={{ minWidth: '600px' }}>
            {/* 3D model viewer area */}
            <div className="h-3/5 mb-6">
              {isSupported ? (
                <ModelViewer 
                  url={model?.url} 
                  fileFormat={fileExtension}
                  status={model?.conversion_status}
                >
                  {activeTab === 'snapPoints' && (
                    <SnapPointHelper 
                      attachmentPoints={attachmentPoints}
                      selectedPoint={selectedPoint}
                      onSelectPoint={setSelectedPoint}
                      onAttachmentPointUpdated={handleAttachmentPointUpdated}
                    />
                  )}
                </ModelViewer>
              ) : (
                <div className="flex flex-col items-center justify-center h-full p-4 bg-white rounded-lg border border-gray-200">
                  <p className="text-lg font-medium mb-2">
                    {fileExtension?.toUpperCase()} file preview not available
                  </p>
                  <p className="text-sm text-gray-500 text-center">
                    This file format doesn't support 3D preview.
                    You can still edit its properties.
                  </p>
                </div>
              )}
            </div>
            
            {/* Description area */}
            <div className="h-2/5">
              <h3 className="font-medium text-xl mb-3">Description</h3>
              <Textarea
                placeholder="Enter a detailed description of your model"
                minRows={5}
                maxRows={8}
                value={generalValues.description || ''}
                onChange={(e) => handleGeneralChange({ description: e.target.value })}
                className="w-full"
              />
            </div>
          </div>
          
          {/* Right side - tabs and form fields */}
          <div className='w-2/5 h-full border-l border-gray-300'>
            {/* Tabs navigation - horizontal tabs at the top of the right side */}
            <div className="flex border-b border-gray-300">
              <button 
                className={`px-6 py-3 text-center ${activeTab === 'general' ? 'bg-black text-white font-medium rounded-t-lg' : 'text-gray-600 hover:bg-gray-100'}`}
                onClick={() => handleTabChange('general')}
              >
                General
              </button>
              <button 
                className={`px-6 py-3 text-center ${activeTab === 'parameters' ? 'bg-black text-white font-medium rounded-t-lg' : 'text-gray-600 hover:bg-gray-100'}`}
                onClick={() => handleTabChange('parameters')}
              >
                Parameters
              </button>
              <button 
                className={`px-6 py-3 text-center ${activeTab === 'snapPoints' ? 'bg-black text-white font-medium rounded-t-lg' : 'text-gray-600 hover:bg-gray-100'}`}
                onClick={() => handleTabChange('snapPoints')}
              >
                Snap Points
              </button>
              <button 
                className={`px-6 py-3 text-center ${activeTab === 'surface' ? 'bg-black text-white font-medium rounded-t-lg' : 'text-gray-600 hover:bg-gray-100'}`}
                onClick={() => handleTabChange('surface')}
              >
                Surface
              </button>
            </div>
            
            {/* Tab content */}
            <div className="overflow-auto h-[calc(100%-48px)] p-6">
              {activeTab === 'general' && (
                <>
                  {/* Name editing field in general tab */}
                  <div className="mb-6">
                    <Text className="font-medium mb-2">Name</Text>
                    <TextInput
                      placeholder="Enter model name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  
                  <GeneralTab 
                    model={model} 
                    generalValues={{
                      ...generalValues,
                      // Remove description from this tab since it's moved to the left side
                      description: null 
                    }}
                    handleGeneralChange={handleGeneralChange} 
                    missingFields={missingFields}
                    hideDescription={true} // Add prop to hide description field
                  />
                </>
              )}
              
              {activeTab === 'parameters' && (
                <Parameters modelId={id} onParameterChange={setParameterValues} />
              )}
              
              {activeTab === 'snapPoints' && (
                <SnapPointsTab
                  fileFormat={fileExtension}
                  conversionStatus={model?.conversion_status}
                  attachmentPoints={attachmentPoints}
                  onAttachmentPointUpdated={handleAttachmentPointUpdated}
                  onAddAttachmentPoint={handleAddAttachmentPoint}
                  onRemoveAttachmentPoint={handleRemoveAttachmentPoint}
                  selectedPoint={selectedPoint}
                  onSelectPoint={setSelectedPoint}
                />
              )}
              
              {activeTab === 'surface' && (
                <div>
                  <div className="mb-6">
                    <Text className="font-medium mb-2">Available Colors & Materials</Text>
                    <MultiSelect
                      data={bikeColors.map(color => ({
                        value: color.value,
                        label: color.label
                      }))}
                      value={selectedColors}
                      onChange={setSelectedColors}
                      placeholder="Select available colors"
                      label="Select all colors that apply"
                      searchable
                      clearable
                      styles={(theme) => ({
                        input: { minHeight: '42px' },
                        item: { 
                          '&[data-selected]': {
                            '&, &:hover': {
                              backgroundColor: '#000',
                              color: '#fff',
                            },
                          },
                        }
                      })}
                    />
                    
                    {selectedColors.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {selectedColors.map(colorValue => {
                          const colorInfo = bikeColors.find(c => c.value === colorValue);
                          return colorInfo ? (
                            <div 
                              key={colorValue}
                              className="flex items-center px-2 py-1 rounded border border-gray-200"
                            >
                              <div 
                                style={{ 
                                  backgroundColor: colorInfo.color, 
                                  width: '12px', 
                                  height: '12px', 
                                  marginRight: '6px',
                                  borderRadius: '2px'
                                }}
                              />
                              <span className="text-sm">{colorInfo.label}</span>
                            </div>
                          ) : null;
                        })}
                      </div>
                    )}
                    
                    <Text size="xs" color="dimmed" className="mt-1">
                      These are the colors and materials customers can choose from when ordering
                    </Text>
                  </div>
                  
                  <div className="mb-6">
                    <Text className="font-medium mb-2">Surface</Text>
                    <div className="flex gap-6 mt-2">
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="radio" 
                          name="surface" 
                          value="smooth" 
                          className="mr-2 w-4 h-4 accent-black" 
                        /> 
                        <span>Smooth</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="radio" 
                          name="surface" 
                          value="rough" 
                          className="mr-2 w-4 h-4 accent-black" 
                        /> 
                        <span>Rough</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <Text className="font-medium mb-2">Paint Finish</Text>
                    <div className="flex flex-wrap gap-6 mt-2">
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="radio" 
                          name="paint-finish" 
                          value="matte" 
                          className="mr-2 w-4 h-4 accent-black" 
                        /> 
                        <span>Matte</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="radio" 
                          name="paint-finish" 
                          value="glossy" 
                          className="mr-2 w-4 h-4 accent-black" 
                        /> 
                        <span>Glossy</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="radio" 
                          name="paint-finish" 
                          value="metallic" 
                          className="mr-2 w-4 h-4 accent-black" 
                        /> 
                        <span>Metallic</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default EditModel;
