import React from 'react';
import { TextInput, Textarea, Select, NumberInput, Button, Group, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import { ModelMetadata } from '../../../../../services/modelService';

interface ModelUploadFormProps {
  filename: string;
  fileSize: number;
  onSubmit: (metadata: Omit<ModelMetadata, 'file_size' | 'file_type' | 's3_key' | 'url'>) => void;
  uploading: boolean;
}

const ModelUploadForm: React.FC<ModelUploadFormProps> = ({ 
  filename, 
  fileSize, 
  onSubmit, 
  uploading 
}) => {
  const form = useForm({
    initialValues: {
      name: filename.split('.')[0],
      category: '',
      subcategory: '',
      description: '',
      manufacturer: '',
      dimensions: '',
      part_type: '',
      material: '',
      weight_kg: '',
      price: '',
    },
    validate: {
      name: (value) => value.trim().length === 0 ? 'Name is required' : null,
      category: (value) => value.trim().length === 0 ? 'Category is required' : null,
      dimensions: (value) => {
        if (!value) return null;
        return /^\d+x\d+x\d+$/.test(value) ? null : 'Dimensions must be in LxWxH format';
      },
      weight_kg: (value) => {
        if (!value) return null;
        return isNaN(Number(value)) ? 'Weight must be a number' : null;
      },
      price: (value) => {
        if (!value) return null;
        return isNaN(Number(value)) ? 'Price must be a number' : null;
      }
    }
  });

  const handleSubmit = (values: typeof form.values) => {
    const metadata: Omit<ModelMetadata, 'file_size' | 'file_type' | 's3_key' | 'url'> = {
      name: values.name,
      filename,
      category: values.category,
      ...(values.subcategory && { subcategory: values.subcategory }),
      ...(values.description && { description: values.description }),
      ...(values.manufacturer && { manufacturer: values.manufacturer }),
      ...(values.dimensions && { dimensions: values.dimensions }),
      ...(values.part_type && { part_type: values.part_type }),
      ...(values.material && { material: values.material }),
      ...(values.weight_kg && { weight_kg: parseFloat(values.weight_kg) }),
      ...(values.price && { price: parseFloat(values.price) }),
    };

    onSubmit(metadata);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="md">
        <TextInput
          required
          label="Model Name"
          placeholder="Enter model name"
          {...form.getInputProps('name')}
        />

        <Select
          required
          label="Category"
          placeholder="Select a category"
          data={[
            { value: 'furniture', label: 'Furniture' },
            { value: 'hardware', label: 'Hardware' },
            { value: 'electronics', label: 'Electronics' },
            { value: 'machine_parts', label: 'Machine Parts' },
            { value: 'structural', label: 'Structural Components' },
            { value: 'decorative', label: 'Decorative Elements' },
            { value: 'other', label: 'Other' },
          ]}
          {...form.getInputProps('category')}
        />

        <TextInput
          label="Subcategory"
          placeholder="Enter subcategory (optional)"
          {...form.getInputProps('subcategory')}
        />

        <Textarea
          label="Description"
          placeholder="Enter model description"
          minRows={3}
          {...form.getInputProps('description')}
        />

        <TextInput
          label="Manufacturer/Designer"
          placeholder="Enter manufacturer or designer name"
          {...form.getInputProps('manufacturer')}
        />

        <TextInput
          label="Dimensions (LxWxH in mm)"
          placeholder="e.g. 400x300x200"
          {...form.getInputProps('dimensions')}
        />

        <TextInput
          label="Part Type/SKU"
          placeholder="Enter part type or SKU"
          {...form.getInputProps('part_type')}
        />

        <TextInput
          label="Material"
          placeholder="Enter material(s)"
          {...form.getInputProps('material')}
        />

        <NumberInput
          label="Weight (kg)"
          placeholder="Enter weight in kg"
          decimalScale={2}
          min={0}
          {...form.getInputProps('weight_kg')}
        />

        <NumberInput
          label="Price (optional)"
          placeholder="Enter price"
          decimalScale={2}
          min={0}
          {...form.getInputProps('price')}
        />

        <Group justify="flex-end" className="model-upload-form-footer">
          <Button 
            type="submit" 
            loading={uploading}
            size="md"
            className="model-upload-submit-button"
            style={{
              marginTop: '15px',
              height: 'auto',
              minHeight: '45px',
            }}
          >
            {uploading ? 'Uploading...' : 'Upload Model'}
          </Button>
        </Group>
      </Stack>
    </form>
  );
};

export default ModelUploadForm; 