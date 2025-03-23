import React, { useState } from 'react';
import { TextInput, Button, Select, Box, Title, Text, Group, Paper } from '@mantine/core';
import { useForm } from '@mantine/form';
import { ProfileStorageService } from '@frontend/services/profileStorage';
import { Profile } from '@frontend/types/Profile';
import { countryList } from './countryList';
import { useAuth0 } from '@auth0/auth0-react';

interface BusinessAccountFormProps {
  userId: string;
  onSuccess: () => void;
  onCancel: () => void;
}

interface BusinessFormValues {
  legalCompanyName: string;
  companyAddress: string;
  publicDisplayName: string;
  registrationNumber: string;
  countryOfIncorporation: string;
  website: string;
}

/**
 * Form for creating a business account 
 */
const BusinessAccountForm: React.FC<BusinessAccountFormProps> = ({ userId, onSuccess, onCancel }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { getAccessTokenSilently } = useAuth0();
  
  const form = useForm<BusinessFormValues>({
    initialValues: {
      legalCompanyName: '',
      companyAddress: '',
      publicDisplayName: '',
      registrationNumber: '',
      countryOfIncorporation: '',
      website: '',
    },
    validate: {
      legalCompanyName: (value) => value.trim().length < 2 ? 'Company name is required' : null,
      companyAddress: (value) => value.trim().length < 5 ? 'Valid address is required' : null,
      publicDisplayName: (value) => value.trim().length < 2 ? 'Display name is required' : null,
      countryOfIncorporation: (value) => !value ? 'Country is required' : null,
    },
  });
  
  const handleSubmit = async (values: BusinessFormValues) => {
    setLoading(true);
    setError(null);
    
    try {
      // Get Auth0 token for authentication
      const token = await getAccessTokenSilently();
      
      // Create business profile
      const businessProfile: Profile = {
        id: userId,
        name: values.publicDisplayName,
        user_type: 'manufacturer',
        is_public: true,
        created_at: new Date().toISOString(),
        location: values.companyAddress,
        website: values.website,
        // Additional business fields could be added to a metadata object
        // or to the Profile type if needed
      };
      
      // Pass token to the createProfile method
      await ProfileStorageService.createProfile(businessProfile, token);
      onSuccess();
    } catch (err) {
      console.error('Error creating business account:', err);
      setError(err instanceof Error ? err.message : 'Failed to create business account');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Paper p="xl" radius="md" withBorder>
      <Title order={2} mb="md">Create Business Account</Title>
      
      <Text mb="lg" c="dimmed">
        Enter your company information to create a business account.
        This will allow you to list products in the marketplace.
      </Text>
      
      {error && (
        <Text c="red" mb="md">
          {error}
        </Text>
      )}
      
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Box mb="md">
          <Text fw={500} mb="xs">Company Information</Text>
          
          <TextInput
            label="Legal Company Name"
            placeholder="Your company's legal name"
            mb="md"
            required
            {...form.getInputProps('legalCompanyName')}
          />
          
          <TextInput
            label="Company Address"
            placeholder="Your company's address"
            mb="md"
            required
            {...form.getInputProps('companyAddress')}
          />
          
          <TextInput
            label="Public Display Name"
            description="This is how your company will appear to others"
            placeholder="Company display name"
            mb="md"
            required
            {...form.getInputProps('publicDisplayName')}
          />
          
          <TextInput
            label="Company Registration Number"
            placeholder="Registration/VAT number"
            mb="md"
            {...form.getInputProps('registrationNumber')}
          />
          
          <Select
            label="Country of Incorporation"
            placeholder="Select a country"
            data={countryList}
            searchable
            mb="md"
            required
            {...form.getInputProps('countryOfIncorporation')}
          />
          
          <TextInput
            label="Website"
            placeholder="https://yourcompany.com"
            mb="md"
            {...form.getInputProps('website')}
          />
        </Box>
        
        <Group justify="flex-end" mt="xl">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" loading={loading}>
            Save
          </Button>
        </Group>
      </form>
    </Paper>
  );
};

export default BusinessAccountForm; 