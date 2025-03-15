import { ColorPicker, Loader, Menu, NumberInput, Tabs, Text, TextInput } from '@mantine/core';
import { IconCheck, IconChevronDown, IconPencil } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ModelMetadata, ModelParameterValue, deleteModel, getModelById, updateModel } from '../../../../../../services/modelService';
import { AttachmentPoint, apiToAttachmentPoint, attachmentPointToApi } from '../../../../../../types/attachment-points';
import ModelViewer from './ModelViewer';
import Parameters from './Parameters';
import SnapPointHelper from './SnapPointHelper';
import SnapPointsTab from './SnapPointsTab';

const EditModel: React.FC = () => {
  const [model, setModel] = useState<ModelMetadata | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  const [isEditingName, setIsEditingName] = useState<boolean>(false);
  const [isPublic, setIsPublic] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(0);

  const [color, setColor] = useState<string | null>(null);
  const [colorPickerVisible, setColorPickerVisible] = useState<boolean>(false);

  const [parameterValues, setParameterValues] = useState<ModelParameterValue[]>([]);
  
  // Snap points state
  const [attachmentPoints, setAttachmentPoints] = useState<AttachmentPoint[]>([]);
  const [selectedPoint, setSelectedPoint] = useState<string | null>(null);
  
  // Active tab state
  const [activeTab, setActiveTab] = useState<string>("parameters");

  const navigate = useNavigate();
  
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

  const handleSave = async () => {
    if (!id) {
      setError('No model ID provided');
      return;
    }
    setSaving(true);
    console.log("Saving...");
    
    // Convert attachment points to API format using our helper
    const apiAttachmentPoints = attachmentPoints.map(attachmentPointToApi);

    console.log("Parameter values:", parameterValues);
    await updateModel(id, { 
      ...model,
      name: name,
      description: description,
      is_public: isPublic,
      price: price,
/*       attachment_points: apiAttachmentPoints, */
      color: color || undefined
    }, parameterValues);
    console.log("Saved!");
    setSaving(false);
  };

  const handleDelete = async () => {
    if (!id) {
      setError('No model ID provided');
      return;
    }
    console.log("Deleting...");
    await deleteModel(id);
    navigate('/dashboard/uploads');
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

  useEffect(() => {
    if (model) {
      setIsPublic(model.is_public);
      setName(model.name);
      setDescription(model.description || '');
      setPrice(model.price || 0);
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

  return (
    <div className='w-full h-[calc(100vh-60px)] bg-white p-4'>
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
        <div className='flex border border-gray-300 rounded-lg h-[calc(100vh-140px)]'>
          <div className='w-1/2 h-full relative'>
            {/* Single ModelViewer with conditional SnapPointHelper */}
            <ModelViewer 
              url={model?.url} 
              fileFormat={fileExtension} 
              status={model?.conversion_status}
            >
              {/* Only show SnapPointHelper when on the snap-points tab and format is supported */}
              {activeTab === 'snap-points' && isSupported && (
                <SnapPointHelper 
                  attachmentPoints={attachmentPoints}
                  onAttachmentPointUpdated={handleAttachmentPointUpdated}
                  selectedPoint={selectedPoint}
                  onSelectPoint={setSelectedPoint}
                />
              )}
            </ModelViewer>
          </div>
          <div className='w-1/2 border-l border-gray-300 h-full overflow-auto'>
            <div className='w-full h-full flex flex-col'>
              <Tabs defaultValue={"parameters"} value={activeTab} onChange={handleTabChange} className="h-full flex flex-col">
                <Tabs.List>
                  <Tabs.Tab value='parameters' className='w-1/4'>
                    Parameters
                  </Tabs.Tab>
                  <Tabs.Tab value='snap-points' className='w-1/4'>
                    Snap Points
                  </Tabs.Tab>
                  <Tabs.Tab value='surface' className='w-1/4'>
                    Surface
                  </Tabs.Tab>
                  <Tabs.Tab value='price' className='w-1/4'>
                    Price
                  </Tabs.Tab>
                </Tabs.List>
                <div className="flex-1 overflow-auto">
                  <Tabs.Panel value='parameters' className='p-4 flex flex-col gap-4 h-full'>
                    <Parameters modelId={id} onParameterChange={setParameterValues} />
                  </Tabs.Panel>
                  <Tabs.Panel value='snap-points' className='p-4 h-full'>
                    {/* Use the simplified SnapPointsTab component */}
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
                  </Tabs.Panel>
                  <Tabs.Panel value='surface' className='p-4 relative h-full'>
                    <div className='mb-4 flex justify-between'>
                      <Text>Color</Text>
                      <div 
                        className='h-6 w-6 rounded-md border border-gray-300 cursor-pointer'
                        onClick={() => setColorPickerVisible(!colorPickerVisible)}
                        style={{ backgroundColor: color || '#000000' }}
                      />
                      {colorPickerVisible && (
                        <div className='absolute top-10 right-0 bg-white rounded-md p-2 border border-gray-300'>
                          <ColorPicker
                            format="hex"
                            value={color || '#000000'}
                            onChange={(value) => setColor(value)}
                          />
                          <button 
                            className='bg-black text-white w-full mt-2 px-2 py-1 rounded-full'
                            onClick={() => setColorPickerVisible(false)}
                          >
                            OK
                          </button>
                        </div>
                      )}
                    </div>
                    <div className='mb-4'>
                      <Text>Surface</Text>
                      <div className='flex gap-4'>
                        <label>
                          <input type='radio' name='surface' value='smooth' /> Smooth
                        </label>
                        <label>
                          <input type='radio' name='surface' value='rough' /> Rough
                        </label>
                      </div>
                    </div>
                    <div className='mb-4'>
                      <Text>Paint Finish</Text>
                      <div className='flex gap-4'>
                        <label>
                          <input type='radio' name='paint-finish' value='matte' /> Matte
                        </label>
                        <label>
                          <input type='radio' name='paint-finish' value='glossy' /> Glossy
                        </label>
                        <label>
                          <input type='radio' name='paint-finish' value='metallic' /> Metallic
                        </label>
                      </div>
                    </div>
                  </Tabs.Panel>
                  <Tabs.Panel value='price' className='p-4 flex flex-col gap-4 h-full'>
                    {/* Input fields for Price */}
                    <NumberInput label='Unit Price' placeholder='Enter unit price' prefix='$' value={price} onChange={(e) => setPrice(Number(e))}/>
                    <NumberInput label='Minimum Order Quantity' placeholder='Enter minimum order quantity' />
                    <NumberInput label='Lead Time' placeholder='Enter lead time' suffix=' days'/>
                    <TextInput label="Payment Terms" placeholder='Enter payment terms' />
                  </Tabs.Panel>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default EditModel;
