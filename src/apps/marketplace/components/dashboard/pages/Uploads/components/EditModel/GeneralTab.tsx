import { ModelMetadata } from "@shared/services/modelService";
import { Switch, NumberInput, TextInput, Loader, Text, Textarea } from "@mantine/core";

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

const GeneralTab = ({ 
  model, 
  generalValues, 
  handleGeneralChange, 
  missingFields,
  hideDescription = false 
}: { 
  model: ModelMetadata | null, 
  generalValues: GeneralTabValues, 
  handleGeneralChange: (general: Partial<GeneralTabValues>) => void, 
  missingFields: string[],
  hideDescription?: boolean  
}) => {

  const handleChange = (key: keyof GeneralTabValues, value: any) => {
    handleGeneralChange({
      [key]: value
    });
  }

  return (
    <>
      <div className='mb-6'>
        <Text className='font-medium mb-2'>Thumbnail Image</Text>
        <div className='flex flex-col'>
          <div className='flex gap-3 mb-2'>
            {(generalValues.thumbnailFile || model?.thumbnail_url) ? (
              <div
                className='h-24 w-24 border border-gray-300 rounded-md overflow-hidden cursor-pointer shadow-sm'
                onClick={() => document.getElementById('thumbnailFileInput')?.click()}
              >
                <img
                  src={generalValues.thumbnailFile ? URL.createObjectURL(generalValues.thumbnailFile) : model?.thumbnail_url}
                  alt='Thumbnail'
                  className='w-full h-full object-cover'
                />
              </div>
            ) : (
              <div 
                className={`h-24 w-24 border-dashed border-2 rounded-md overflow-hidden cursor-pointer flex flex-col justify-center items-center ${missingFields.includes('thumbnail') ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                onClick={() => document.getElementById('thumbnailFileInput')?.click()}
              >
                <IconPhotoPlus size={32} color={missingFields.includes('thumbnail') ? '#EF4444' : '#777777'} />
                <Text size="xs" className="mt-1 text-center px-1" color={missingFields.includes('thumbnail') ? 'red' : 'dimmed'}>
                  Click to upload
                </Text>
              </div>
            )}
            
            {(generalValues.thumbnailFile || model?.thumbnail_url) && (
              <button
                className="border border-gray-300 px-3 py-2 rounded text-sm h-10 self-center"
                onClick={() => handleChange('thumbnailFile', null)}
              >
                Remove
              </button>
            )}
          </div>
          
          <Text size="xs" color="dimmed">
            Upload a clear, high-quality image that represents your model. Recommended size: 800x600 pixels.
          </Text>
          
          <input
            type='file'
            id='thumbnailFileInput'
            style={{ display: 'none' }}
            accept='image/*'
            onChange={(e) => handleChange('thumbnailFile', e.target.files?.[0] || null)}
          />
          
          {missingFields.includes('thumbnail') && (
            <Text size="xs" color="red" className="mt-1">
              A thumbnail image is required
            </Text>
          )}
        </div>
      </div>
      
      {/* Description field - only shown if hideDescription is false */}
      {!hideDescription && (
        <Textarea 
          label="Description" 
          rows={4} 
          placeholder='Enter description' 
          value={generalValues.description ?? undefined} 
          onChange={(e) => handleChange('description', e.target.value)}
          className="mb-6"
        />
      )}
      
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
        className="mb-2"
      />
      <div className="flex items-center mb-6">
        <Switch 
          label='On Request' 
          checked={generalValues.priceOnRequest} 
          onChange={(e) => handleChange('priceOnRequest', e.currentTarget.checked)}
          color="dark"
          size="md"
          styles={{
            track: { 
              backgroundColor: generalValues.priceOnRequest ? '#000' : undefined,
              borderColor: '#000'
            }
          }}
        />
        <Text size="sm" className="ml-2 text-gray-500">
          {generalValues.priceOnRequest ? 'Customers will need to contact you for pricing' : 'Show specific price to customers'}
        </Text>
      </div>

      <NumberInput 
        key={generalValues.moqOnRequest ? 'moq-disabled' : 'moq-enabled'} // Key to force re-render to display correct placeholder
        error={missingFields.includes('minimumOrderQuantity') ? 'Minimum order quantity is required' : undefined} 
        min={0} 
        label='Minimum Order Quantity' 
        placeholder={generalValues.moqOnRequest ? 'On Request' : 'Enter minimum order quantity'} 
        value={generalValues.minimumOrderQuantity ?? undefined} 
        onChange={(e) => handleChange('minimumOrderQuantity', Number(e))} 
        disabled={generalValues.moqOnRequest}
        className="mb-2"
      />
      <div className="flex items-center mb-6">
        <Switch 
          label='On Request' 
          checked={generalValues.moqOnRequest} 
          onChange={(e) => handleChange('moqOnRequest', e.currentTarget.checked)}
          color="dark"
          size="md"
          styles={{
            track: { 
              backgroundColor: generalValues.moqOnRequest ? '#000' : undefined,
              borderColor: '#000'
            }
          }}
        />
        <Text size="sm" className="ml-2 text-gray-500">
          {generalValues.moqOnRequest ? 'Customers will need to contact you for MOQ details' : 'Show specific minimum order quantity to customers'}
        </Text>
      </div>

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
        className="mb-2"
      />
      <div className="flex items-center mb-6">
        <Switch 
          label='On Request' 
          checked={generalValues.leadTimeOnRequest} 
          onChange={(e) => handleChange('leadTimeOnRequest', e.currentTarget.checked)}
          color="dark"
          size="md"
          styles={{
            track: { 
              backgroundColor: generalValues.leadTimeOnRequest ? '#000' : undefined,
              borderColor: '#000'
            }
          }}
        />
        <Text size="sm" className="ml-2 text-gray-500">
          {generalValues.leadTimeOnRequest ? 'Customers will need to contact you for lead time details' : 'Show specific lead time to customers'}
        </Text>
      </div>

      <TextInput 
        key={generalValues.paymentTermsOnRequest ? 'paymentTerms-disabled' : 'paymentTerms-enabled'} // Key to force re-render to display correct placeholder
        error={missingFields.includes('paymentTerms') ? 'Payment terms are required' : undefined} 
        label="Payment Terms" 
        placeholder={generalValues.paymentTermsOnRequest ? 'On Request' : 'Enter payment terms'} 
        value={generalValues.paymentTerms ?? undefined} 
        onChange={(e) => handleChange('paymentTerms', e.target.value)} 
        disabled={generalValues.paymentTermsOnRequest}
        className="mb-2"
      />
      <div className="flex items-center mb-6">
        <Switch 
          label='On Request' 
          checked={generalValues.paymentTermsOnRequest} 
          onChange={(e) => handleChange('paymentTermsOnRequest', e.currentTarget.checked)}
          color="dark"
          size="md"
          styles={{
            track: { 
              backgroundColor: generalValues.paymentTermsOnRequest ? '#000' : undefined,
              borderColor: '#000'
            }
          }}
        />
        <Text size="sm" className="ml-2 text-gray-500">
          {generalValues.paymentTermsOnRequest ? 'Customers will need to contact you for payment terms' : 'Show specific payment terms to customers'}
        </Text>
      </div>
    </>
  );
};

export default GeneralTab;