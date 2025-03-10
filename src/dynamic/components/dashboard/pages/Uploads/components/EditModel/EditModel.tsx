import React, { useState, useEffect } from 'react';
import { ModelMetadata } from '../../../../../../services/modelService';
import { useParams, useNavigate } from 'react-router-dom';
import { getModelById, updateModel, deleteModel } from '../../../../../../services/modelService';
import { Loader, Text, Switch, Tabs, TextInput, Textarea, ColorPicker, Select, NumberInput, Menu } from '@mantine/core';
import { Variant, allVariants } from '../UploadModal/constants';
import { IconCheck, IconChevronDown, IconPencil } from '@tabler/icons-react';


const EditModel: React.FC = () => {
  const [model, setModel] = useState<ModelMetadata | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  const [color, setColor] = useState<string | null>(null);
  const [colorPickerVisible, setColorPickerVisible] = useState<boolean>(false);

  const [variants, setVariants] = useState<Variant[]>([]);

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
        if (model?.subcategory && allVariants[model?.subcategory]) {
          setVariants(allVariants[model?.subcategory]);
        } else if (model?.category && allVariants[model?.category]) {
          setVariants(allVariants[model?.category]);
        } else {
          setVariants([]);
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
    console.log("Saving...");
    await updateModel(id, { 
      ...model,
      name: name,
      description: description,
      is_public: isPublic,
     });
    console.log("Saved!");
  }

  const handleDelete = async () => {
    if (!id) {
      setError('No model ID provided');
      return;
    }
    console.log("Deleting...");
    await deleteModel(id);
    navigate('/dashboard/uploads');
    console.log("Deleted!");
  }

  const [isEditingName, setIsEditingName] = useState<boolean>(false);
  const [isPublic, setIsPublic] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  useEffect(() => {
    if (model) {
      setIsPublic(model.is_public || true);
      setName(model.name || '');
      setDescription(model.description || '');
    }
  }, [model]);

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
          <button className='bg-black text-white px-6 py-2 rounded-full' onClick={() => handleSave()}>Save</button>
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
        <div className='flex border border-gray-300 rounded-lg'>
          <img className='w-1/2 h-64 object-cover mb-4' src={`/assets/placeholder-thumbnails/${model?.filename?.split('.').pop()}.jpg`} alt={model?.name} />
          <div className='w-1/2 border-l border-gray-300'>
            <div className='w-full'>
              <Tabs defaultValue={"parameters"}>
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
                <Tabs.Panel value='parameters' className='p-4 flex flex-col gap-4'>
                  {
                    variants.map((variant) => {
                      if (variant.type === "select") {
                        return (
                          <Select label={variant.name} placeholder={variant.name} data={variant.options} />
                        )
                      }
                      if (variant.type === "number") {
                        return (
                          <NumberInput label={variant.name} placeholder={variant.name} />
                        )
                      }
                      if (variant.type === "boolean") {
                        return (
                          <Switch label={variant.name} />
                        )
                      }
                      if (variant.type === "color") {
                        let variantColor = '#000000';
                        return (
                          <ColorPicker format="hex" value={variantColor} onChange={(value) => variantColor = value} />
                        )
                      }
                      if (variant.type === "string") {
                        return (
                          <TextInput label={variant.name} placeholder={variant.name} />
                        )
                      }
                      return null;
                    })
                  }
                </Tabs.Panel>
                <Tabs.Panel value='snap-points' className='p-4'>
                  <p>Here you will hopefully be able to select a relevant snap point for the model, and adjust it in the 3D viewer on the left side</p>
                  
                </Tabs.Panel>
                <Tabs.Panel value='surface' className='p-4 relative'>
                  <div className='mb-4 flex justify-between'>
                    <Text>Color</Text>
                    <div 
                      className={`h-6 w-6 rounded-md border border-gray-300 bg-[${color}] cursor-pointer`} 
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
                <Tabs.Panel value='price' className='p-4 flex flex-col gap-4'>
                  {/* Inntastningsfelter for Price */}
                  <NumberInput label='Unit Price' placeholder='Enter unit price' prefix='$'/>
                  <NumberInput label='Minimum Order Quantity' placeholder='Enter minimum order quantity' />
                  <NumberInput label='Lead Time' placeholder='Enter lead time' suffix=' days'/>
                  <TextInput label="Payment Terms" placeholder='Enter payment terms' />
                </Tabs.Panel>
              </Tabs>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col gap-4 mt-4'>
          <div>
            <Textarea label='Description' placeholder='Enter model description' rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default EditModel;
