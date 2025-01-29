import React, { useState } from 'react';
import { TextInput, Textarea, Select, FileInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Profile, UserType } from 'src/shared/types/Profile';
import { ProfileStorageService } from '@shared/services/profileStorage';
import { useAuth0 } from '@auth0/auth0-react';
import Notification, { NotificationProps } from '@shared/components/Notification/Notification';
import { useUser } from '@shared/hooks/useUser';

interface EditProfileFormProps {
  profile?: Profile;
  onSubmit: (values: Profile) => void;
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({ profile, onSubmit }) => {
  const { getAccessTokenSilently } = useAuth0();
  const { setProfile } = useUser();
  
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<NotificationProps | null>(null);

  const form = useForm({
    initialValues: {
      id: profile?.id || '',
      created_at: profile?.created_at || '',
      name: profile?.name || '',
      avatar_url: profile?.avatar_url || '',
      location: profile?.location || '',
      description: profile?.description || '',
      user_type: profile?.user_type || 'designer',
      email: profile?.email || '',
      website: profile?.website || '',
      custom_url: profile?.custom_url || '',
    },
    validate: {
      custom_url: (value) => {
        if (!value) {
          return null;
        }
        if (!/^[a-zA-Z0-9-]+$/.test(value)) {
          return 'Custom URL can only contain letters, numbers, and hyphens';
        }
        if (value.length < 3 || value.length > 30) {
          return 'Custom URL must be between 3 and 30 characters';
        }
        return null;
      },
    },
  });

  const handleSubmit = async (values: Profile) => {
    try {
      setIsLoading(true);
      const token = await getAccessTokenSilently();
      await ProfileStorageService.updateProfile(values, token);
      onSubmit(values);
      setProfile(values);
      setNotification({ type: 'success', title: 'Success', message: 'Profile updated successfully.' });
    } catch (error) {
      console.error('Error updating profile:', error);
      setNotification({ type: 'error', title: 'Error', message: 'Failed to update profile.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='profile-subpage-content'>
      <form onSubmit={form.onSubmit((values)=>handleSubmit(values))}>
        <TextInput required label="Name" {...form.getInputProps('name')} />
        <TextInput label="Avatar URL" {...form.getInputProps('avatar_url')} />
        <TextInput label="Location" {...form.getInputProps('location')} />
        <Textarea maxLength={250} label="Description" {...form.getInputProps('description')} />
        <Select
          label="User type"
          data={[
            { value: 'designer', label: 'Designer' },
            { value: 'manufacturer', label: 'Manufacturer' },
          ]}
          {...form.getInputProps('user_type')}
        />
        <TextInput label="E-mail" {...form.getInputProps('email')} />
        <TextInput label="Website" {...form.getInputProps('website')} />
        <TextInput 
          label="Custom URL" {...form.getInputProps('custom_url')} 
          description="This will be the URL of your Spinlio profile. The URL will be https://design.spinlio.com/dashboard/profile/[custom_url]"
        />
        {notification && <Notification onClose={() => setNotification(null)} type={notification.type} title={notification.title} message={notification.message} />}
        <button type="submit" className='submit-button' disabled={isLoading}>{isLoading ? 'Saving...' : 'Save'}</button>
      </form>
    </div>
  );
};

export default EditProfileForm;
