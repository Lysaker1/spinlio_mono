import React, { useState } from 'react';
import { TextInput, Button, Select, Box, Title, Text, Group, Paper } from '@mantine/core';
import { useForm } from '@mantine/form';
import { ProfileStorageService } from '@shared/services/profileStorage';
import { Profile } from '@shared/types/Profile';
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
      console.log('Creating business profile for user:', userId);
      
      // Get Auth0 token for authentication with better error handling
      let token;
      try {
        console.log('Auth0 audience:', process.env.REACT_APP_AUTH0_AUDIENCE);
        token = await getAccessTokenSilently({
          authorizationParams: {
            audience: 'https://api.bazaar.it', // Hardcode the correct audience
            scope: 'openid profile email'
          }
        });
        console.log('Successfully obtained auth token');
      } catch (tokenError) {
        console.error('Failed to obtain Auth0 token:', tokenError);
        setError('Authentication error: Unable to obtain access token. Please try logging in again.');
        setLoading(false);
        return;
      }
      
      // Create business profile
      const profileData = {
        id: userId,
        name: values.publicDisplayName,
        user_type: 'manufacturer',
        is_public: true,
        created_at: new Date().toISOString(),
        website: values.website,
        // Use the business field for the API to handle properly
        business: {
          company_name: values.legalCompanyName,
          business_type: 'manufacturer',
          address: values.companyAddress,
          country: values.countryOfIncorporation,
          tax_id: values.registrationNumber,
          website: values.website
        }
      } as Profile; // Use type assertion to bypass TypeScript check
      
      console.log('Sending profile creation request with token');
      
      // Pass token to the createProfile method
      const createdProfile = await ProfileStorageService.createProfile(profileData, token);
      console.log('Profile created successfully:', createdProfile);
      onSuccess();
    } catch (err: any) {
      console.error('Error creating business account:', err);
      
      // Provide more detailed error information
      let errorMessage = 'Failed to create business account';
      
      if (err.response) {
        // Server responded with an error
        const status = err.response.status;
        const serverError = err.response.data?.error || err.response.data?.message;
        
        if (status === 401) {
          errorMessage = 'Authentication error: Your session may have expired. Please try logging in again.';
        } else if (status === 400) {
          errorMessage = `Invalid data: ${serverError || 'Please check your input and try again.'}`;
        } else if (status === 409) {
          errorMessage = 'A profile for this user already exists.';
        } else if (serverError) {
          errorMessage = `Error: ${serverError}`;
        }
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
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