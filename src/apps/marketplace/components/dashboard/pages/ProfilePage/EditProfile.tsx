import { useEffect, useState } from 'react';
import { Tabs, TextInput, Textarea, Button, Stack, FileInput, SimpleGrid, Image, Text, Group, Switch, Select } from '@mantine/core';
import { IconPhotoPlus } from '@tabler/icons-react';
import { ProfileStorageService } from '../../../../../marketplace/src/shared/services/profileStorage';
import { Profile, BusinessProfile, UserType } from '@shared/types/Profile';
import { useUser } from '@shared/hooks/useUser';
import { useAuth0 } from '@auth0/auth0-react';
import { Notifications, Notification } from '@marketplace/shared/components';

const EditProfile = () => {
  const { user } = useUser();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [businessProfile, setBusinessProfile] = useState<BusinessProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [businessImages, setBusinessImages] = useState<string[]>([]);

  const [businessLogo, setBusinessLogo] = useState<File | null>(null);
  const [newBusinessImages, setNewBusinessImages] = useState<File[]>([]);

  const [activeTab, setActiveTab] = useState<'personal' | 'business'>('personal');

  const {getAccessTokenSilently} = useAuth0();

  const [notification, setNotification] = useState<Notification | null>();
  const [saving, setSaving] = useState(false);

  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      if (!user?.id) return;
      
      try {
        const [profileData, businessProfileData, images] = await Promise.all([
          ProfileStorageService.getProfile(user.id),
          ProfileStorageService.getBusinessProfile(user.id).catch(() => null),
          ProfileStorageService.getBusinessImages(user.id)
        ]);
        
        setProfile(profileData);
        setBusinessProfile(businessProfileData);
        setBusinessImages(images);
        if (businessProfileData) {
          setActiveTab('business');
        }
      } catch (error) {
        console.error('Error fetching profiles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, [user?.id]);

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile || !user?.id) return;

    setSaving(true);
    try {
      let avatarUrl = profile.avatar_url;
      if (avatarFile) {
        try {
          avatarUrl = await ProfileStorageService.uploadProfilePicture(avatarFile);
        } catch (error) {
          console.error('Error uploading avatar:', error);
          return;
        }
      }

      const token = await getAccessTokenSilently();

      await ProfileStorageService.updateProfile({
        ...profile,
        avatar_url: avatarUrl,
      }, token);
      setNotification({
        id: '1',
        type: 'success',
        message: 'Profile updated successfully',
      })
    } catch (error) {
      console.error('Error updating profile:', error);
      setNotification({
        id: '1',
        type: 'error',
        message: 'Error updating profile',
      })
    } finally {
      setSaving(false);
    }
  };

  const handleBusinessProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessProfile || !user?.id) return;

    setSaving(true);
    try {
      const token = await getAccessTokenSilently();

      // Upload new images first
      const newImageUrls = await Promise.all(
        newBusinessImages.map(file => ProfileStorageService.uploadBusinessImage(file))
      );

      let logoUrl = businessProfile.logo;
      if (businessLogo) {
        try {
          logoUrl = await ProfileStorageService.uploadBusinessLogo(businessLogo);
        } catch (error) {
          console.error('Error uploading business logo:', error);
          return;
        }
      }
      // Update business profile
      await ProfileStorageService.updateBusinessProfile(user.id, {
        ...businessProfile,
        logo: logoUrl,
      }, newImageUrls, token);

      setNotification({
        id: '1',
        type: 'success',
        message: 'Business profile updated successfully',
      })

      setBusinessImages(prev => [...prev, ...newImageUrls]);
      setNewBusinessImages([]);
    } catch (error) {
      console.error('Error updating business profile:', error);
      setNotification({
        id: '1',
        type: 'error',
        message: 'Error updating business profile',
      })
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div>Laster...</div>;
  }

  return (
    <div className='w-full'>
      <Notifications notifications={notification ? [notification] : []} onClose={() => setNotification(null)} />
      <div className='w-full padding-16 flex justify-center items-center gap-8 mt-12'>
        <button className={`${activeTab === 'business' ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'} p-2 px-6 rounded-full h-10 flex items-center justify-center`} onClick={() => setActiveTab('business')}>
          Edit Business Profile
        </button>
        <button className={`${activeTab === 'personal' ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'} p-2 px-6 rounded-full h-10 flex items-center justify-center`} onClick={() => setActiveTab('personal')}>
          Edit Personal Profile
        </button>
      </div>

      <div className='w-full py-16 px-48'>
        {activeTab === 'personal' ? (
          <form onSubmit={handleProfileSubmit}>
            <Stack>
              <div className='flex flex-col gap-2'>
                <p className='font-semibold text-sm'>Profile Picture</p>
                <div className='flex gap-2'>
                  {(avatarFile || profile?.avatar_url) && (
                    <div className='h-24 w-24 border border-gray-300 rounded-md overflow-hidden'>
                      <img
                        src={avatarFile ? URL.createObjectURL(avatarFile) : profile?.avatar_url}
                        alt="Profile Picture"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div
                    className="h-24 w-24 border-dashed border-2 rounded-md overflow-hidden cursor-pointer flex flex-col justify-center items-center border-gray-300"
                    onClick={() => document.getElementById('avatarInput')?.click()}
                  >
                    <IconPhotoPlus size={32} color="#777777" />
                    <Text size="xs" className="mt-1 text-center px-1" color="dimmed">
                      Click to upload
                    </Text>
                  </div>
                  <input
                    type='file'
                    id='avatarInput'
                    style={{ display: 'none' }}
                    accept='image/*'
                    onChange={(e) => setAvatarFile(e.target.files?.[0] || null)}
                  />
                </div>
              </div>
              <TextInput
                label="Name"
                value={profile?.name || ''}
                onChange={(e) => setProfile(prev => prev ? { ...prev, name: e.target.value } : null)}
              />
              <TextInput
                label="Email"
                value={profile?.email || ''}
                onChange={(e) => setProfile(prev => prev ? { ...prev, email: e.target.value } : null)}
              />
              <TextInput
                label="Location"
                value={profile?.location || ''}
                onChange={(e) => setProfile(prev => prev ? { ...prev, location: e.target.value } : null)}
              />
              <TextInput
                label="Website"
                value={profile?.website || ''}
                onChange={(e) => setProfile(prev => prev ? { ...prev, website: e.target.value } : null)}
              />
              <TextInput
                label="Custom URL"
                value={profile?.custom_url || ''}
                onChange={(e) => setProfile(prev => prev ? { ...prev, custom_url: e.target.value } : null)}
                description="This will be the URL of your Bazaar profile. The URL will be https://marketplace.bazaar.com/profile/[custom_url]"
              />
              <Select
                label="User type"
                value={profile?.user_type || ''}
                onChange={(value) => setProfile(prev => prev ? { ...prev, user_type: value as UserType } : null)}
                data={[
                  { value: 'designer', label: 'Designer' },
                  { value: 'manufacturer', label: 'Manufacturer' },
                ]}
              />
              <Textarea
                label="Description"
                value={profile?.description || ''}
                onChange={(e) => setProfile(prev => prev ? { ...prev, description: e.target.value } : null)}
              />
              <Switch
                label={profile?.is_public ? "Public" : "Private"}
                checked={profile?.is_public || false}
                onChange={(e) => setProfile(prev => prev ? { ...prev, is_public: e.currentTarget.checked } : null)}
              />
              <Button type="submit" color={saving ? 'gray' : 'black'} loading={saving}>Save changes</Button>
            </Stack>
          </form>
        ) : businessProfile && (
          <div className='w-full padding-16'>
            <form onSubmit={handleBusinessProfileSubmit}>
              <Stack>
                <SimpleGrid cols={2}>
                  <TextInput
                    label="Company Name"
                    value={businessProfile.company_name}
                    onChange={(e) => setBusinessProfile(prev => prev ? { ...prev, company_name: e.target.value } : null)}
                  />
                  <TextInput
                    label="Tax ID"
                    value={businessProfile.tax_id}
                    onChange={(e) => setBusinessProfile(prev => prev ? { ...prev, tax_id: e.target.value } : null)}
                  />
                </SimpleGrid>
                <div className='flex flex-col gap-2'>
                  <p className='font-semibold text-sm'>Company Logo</p>
                  <div className='flex gap-2'>
                  {(businessLogo || businessProfile.logo) && (
                    <div className='h-24 w-24 border border-gray-300 rounded-md overflow-hidden'>
                      <img
                        src={businessLogo ? URL.createObjectURL(businessLogo) : businessProfile.logo}
                        alt="Company Logo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div
                      className="h-24 w-24 border-dashed border-2 rounded-md overflow-hidden cursor-pointer flex flex-col justify-center items-center border-gray-300"
                      onClick={() => document.getElementById('businessLogoInput')?.click()}
                    >
                      <IconPhotoPlus size={32} color="#777777" />
                      <Text size="xs" className="mt-1 text-center px-1" color="dimmed">
                        Click to upload
                      </Text>
                    </div>
                    <input
                      type='file'
                      id='businessLogoInput'
                      style={{ display: 'none' }}
                      accept='image/*'
                      onChange={(e) => setBusinessLogo(e.target.files?.[0] || null)}
                    />
                  </div>
                </div>
                <Textarea
                  label="Description"
                  value={businessProfile.description}
                  onChange={(e) => setBusinessProfile(prev => prev ? { ...prev, description: e.target.value } : null)}
                />
                <TextInput
                  label="Business Type"
                  value={businessProfile.business_type}
                  onChange={(e) => setBusinessProfile(prev => prev ? { ...prev, business_type: e.target.value } : null)}
                />
                <TextInput
                  label="Custom URL"
                  value={businessProfile.custom_url || ''}
                  onChange={(e) => setBusinessProfile(prev => prev ? { ...prev, custom_url: e.target.value } : null)}
                  description="This will be the URL of your Bazaar Business Profile. The URL will be https://marketplace.bazaar.com/profile/[custom_url]"
                />
                <SimpleGrid cols={2}>
                  <TextInput
                    label="Address"
                    value={businessProfile.address}
                    onChange={(e) => setBusinessProfile(prev => prev ? { ...prev, address: e.target.value } : null)}
                  />
                  <TextInput
                    label="City"
                    value={businessProfile.city}
                    onChange={(e) => setBusinessProfile(prev => prev ? { ...prev, city: e.target.value } : null)}
                  />
                </SimpleGrid>
                <SimpleGrid cols={2}>
                  <TextInput
                    label="Zip Code"
                    value={businessProfile.zip}
                    onChange={(e) => setBusinessProfile(prev => prev ? { ...prev, zip: e.target.value } : null)}
                  />
                  <TextInput
                    label="Country"
                    value={businessProfile.country}
                    onChange={(e) => setBusinessProfile(prev => prev ? { ...prev, country: e.target.value } : null)}
                  />
                </SimpleGrid>
                <SimpleGrid cols={3}>
                  <TextInput
                    label="Email"
                    value={businessProfile.email}
                    onChange={(e) => setBusinessProfile(prev => prev ? { ...prev, email: e.target.value } : null)}
                  />
                  <TextInput
                    label="Phone"
                    value={businessProfile.phone}
                    onChange={(e) => setBusinessProfile(prev => prev ? { ...prev, phone: e.target.value } : null)}
                  />
                  <TextInput
                    label="Website"
                    value={businessProfile.website}
                    onChange={(e) => setBusinessProfile(prev => prev ? { ...prev, website: e.target.value } : null)}
                  />
                </SimpleGrid>
                <div>
                  <p className='font-semibold text-sm mb-1'>Company Images</p>
                  <div className='flex flex-wrap gap-2'>
                    {businessImages.map((imageUrl, index) => (
                      <div className='h-24 w-24 border border-gray-300 rounded-md overflow-hidden' key={index}>
                        <img
                          src={imageUrl}
                          alt="Company Image"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    {newBusinessImages.map((image, index) => (
                      <div className='h-24 w-24 border border-gray-300 rounded-md overflow-hidden' key={index}>
                        <img
                          src={URL.createObjectURL(image)}
                          alt="New Company Image"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    <div
                      className="h-24 w-24 border-dashed border-2 rounded-md overflow-hidden cursor-pointer flex flex-col justify-center items-center border-gray-300"
                      onClick={() => document.getElementById('businessImagesInput')?.click()}
                    >
                      <IconPhotoPlus size={32} color="#777777" />
                      <Text size="xs" className="mt-1 text-center px-1" color="dimmed">
                        Click to upload
                      </Text>
                    </div>
                  </div>
                  <input
                    type='file'
                    id='businessImagesInput'
                    style={{ display: 'none' }}
                    accept='image/*'
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      if (file) {
                        setNewBusinessImages([...newBusinessImages, file]);
                      }
                    }}
                  />
                </div>
                <p className='font-semibold text-md'>Social Medias</p>
                <SimpleGrid cols={2}>
                  <TextInput
                    label="Facebook"
                    value={businessProfile.facebook}
                    placeholder="https://www.facebook.com/your-page"
                    onChange={(e) => setBusinessProfile(prev => prev ? { ...prev, facebook: e.target.value } : null)}
                  />
                  <TextInput
                    label="Instagram"
                    value={businessProfile.instagram}
                    placeholder="https://www.instagram.com/your-page"
                    onChange={(e) => setBusinessProfile(prev => prev ? { ...prev, instagram: e.target.value } : null)}
                  />
                  <TextInput
                    label="LinkedIn"
                    value={businessProfile.linkedin}
                    placeholder="https://www.linkedin.com/company/your-page"
                    onChange={(e) => setBusinessProfile(prev => prev ? { ...prev, linkedin: e.target.value } : null)}
                  />
                  <TextInput
                    label="YouTube"
                    value={businessProfile.youtube}
                    placeholder="https://www.youtube.com/channel/your-page"
                    onChange={(e) => setBusinessProfile(prev => prev ? { ...prev, youtube: e.target.value } : null)}
                  />
                </SimpleGrid>
                <Button type="submit" color={saving ? 'gray' : 'black'} loading={saving}>Save changes</Button>
              </Stack>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditProfile;

