import { getModelParameterValues, ParameterDefinition, ModelParameterValue, ModelMetadata } from "@dynamic/services/modelService";
import { Switch, NumberInput, TextInput, Loader, Text, Textarea } from "@mantine/core";
import { useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import { useDebouncedValue } from '@mantine/hooks';
import { IconPhotoPlus } from "@tabler/icons-react";

export interface GeneralTabValues {
  description: string | null;
  price: number | null;
  priceOnRequest: boolean;
  minimumOrderQuantity: number | null;
  moqOnRequest: boolean;
  leadTime: number | null;
  leadTimeOnRequest: boolean;
  paymentTerms: string | null;
  paymentTermsOnRequest: boolean;
  thumbnailFile: File | null | null;
}

const GeneralTab = ({ model, generalValues, handleGeneralChange, missingFields }: { model: ModelMetadata | null, generalValues: GeneralTabValues, handleGeneralChange: (general: Partial<GeneralTabValues>) => void, missingFields: string[] }) => {

  const handleChange = (key: keyof GeneralTabValues, value: any) => {
    handleGeneralChange({
      [key]: value
    });
  }

  return (
    <>
      <div className='gap-2'>
        <Text size='sm' fw={500} className='mb-1'>Thumbnail</Text>
        <div className='flex gap-2'>
          {(generalValues.thumbnailFile || model?.thumbnail_url) && (
            <div
              className='w-16 h-16 border border-gray-300 rounded-md overflow-hidden cursor-pointer'
            >
              <img
                src={generalValues.thumbnailFile ? URL.createObjectURL(generalValues.thumbnailFile) : model?.thumbnail_url}
                alt='Thumbnail'
                className='w-full h-full object-cover'
              />
            </div>
          )}
          <div 
            className={`h-16 w-16 border-dashed border-2 rounded-md overflow-hidden cursor-pointer flex justify-center items-center ${missingFields.includes('thumbnail') ? 'border-red-500' : 'border-gray-300'}`}
            onClick={() => document.getElementById('thumbnailFileInput')?.click()}
          >
            <IconPhotoPlus size={24} color='gray' />
            <input
              type='file'
              id='thumbnailFileInput'
              style={{ display: 'none' }}
              accept='image/*'
              onChange={(e) => handleChange('thumbnailFile', e.target.files?.[0] || null)}
            />
          </div>
        </div>
      </div>
      <Textarea label="Description" rows={4} placeholder='Enter description' value={generalValues.description ?? undefined} onChange={(e) => handleChange('description', e.target.value)}/>
      
      {/* Input fields for Price */}
      <NumberInput 
        key={generalValues.priceOnRequest ? 'price-disabled' : 'price-enabled'} // Key to force re-render to display correct placeholder
        error={missingFields.includes('price') ? 'Price is required' : undefined} 
        min={0} 
        label='Unit Price' 
        placeholder={generalValues.priceOnRequest ? 'On Request' : 'Enter unit price'} 
        prefix='$' value={generalValues.price ?? undefined} 
        onChange={(e) => handleChange('price', Number(e))} 
        disabled={generalValues.priceOnRequest}
      />
      <Switch 
        label='On Request' 
        checked={generalValues.priceOnRequest} 
        onChange={(e) => handleChange('priceOnRequest', e.currentTarget.checked)} 
      />

      <NumberInput 
        key={generalValues.moqOnRequest ? 'moq-disabled' : 'moq-enabled'} // Key to force re-render to display correct placeholder
        error={missingFields.includes('minimumOrderQuantity') ? 'Minimum order quantity is required' : undefined} 
        min={0} 
        label='Minimum Order Quantity' 
        placeholder={generalValues.moqOnRequest ? 'On Request' : 'Enter minimum order quantity'} 
        value={generalValues.minimumOrderQuantity ?? undefined} 
        onChange={(e) => handleChange('minimumOrderQuantity', Number(e))} 
        disabled={generalValues.moqOnRequest}
      />
      <Switch 
        label='On Request' 
        checked={generalValues.moqOnRequest} 
        onChange={(e) => handleChange('moqOnRequest', e.currentTarget.checked)} 
      />

      <NumberInput 
        key={generalValues.leadTimeOnRequest ? 'leadTime-disabled' : 'leadTime-enabled'} // Key to force re-render to display correct placeholder
        error={missingFields.includes('leadTime') ? 'Lead time is required' : undefined} 
        min={0} 
        label='Lead Time' 
        placeholder={generalValues.leadTimeOnRequest ? 'On Request' : 'Enter lead time'} 
        suffix=' days' 
        value={generalValues.leadTime ?? undefined} 
        onChange={(e) => handleChange('leadTime', Number(e))} 
        disabled={generalValues.leadTimeOnRequest}
      />
      <Switch 
        label='On Request' 
        checked={generalValues.leadTimeOnRequest} 
        onChange={(e) => handleChange('leadTimeOnRequest', e.currentTarget.checked)} 
      />

      <TextInput 
        key={generalValues.paymentTermsOnRequest ? 'paymentTerms-disabled' : 'paymentTerms-enabled'} // Key to force re-render to display correct placeholder
        error={missingFields.includes('paymentTerms') ? 'Payment terms are required' : undefined} 
        label="Payment Terms" 
        placeholder={generalValues.paymentTermsOnRequest ? 'On Request' : 'Enter payment terms'} 
        value={generalValues.paymentTerms ?? undefined} 
        onChange={(e) => handleChange('paymentTerms', e.target.value)} 
        disabled={generalValues.paymentTermsOnRequest}
      />
      <Switch 
        label='On Request' 
        checked={generalValues.paymentTermsOnRequest} 
        onChange={(e) => handleChange('paymentTermsOnRequest', e.currentTarget.checked)} 
      />
    </>
  );
};

export default GeneralTab;