import { AppShell, Badge, Card, Text, Grid, Image, Tabs, SimpleGrid, Title, Loader } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import ProfileSidebar from '../../components/ProfileSidebar/ProfileSidebar';
import './ProfilePage.css';
import { IconStarFilled } from '@tabler/icons-react';
import { bikeTemplates } from '@dynamic/components/ConfiguratorPage/components/Sidebar/bikeTemplates';
import { DesignStorageService } from '@shared/services/designStorage';
import { SavedDesign } from '@shared/types/SavedDesign';
import { ProfileStorageService } from '@shared/services/profileStorage';
import EditProfileForm from '../../components/EditProfileForm/EditProfileForm';
import { useUser } from '@shared/hooks/useUser';
import { Profile } from '@shared/types/Profile';
import DesignCard from '../../components/DesignCard/DesignCard';

const mockProfiles: Profile[] = [
  {
    id: "vulz",
    name: 'Vulz',
    email: 'vulzbike@gmail.com',
    avatar_url: '/placeholder-profile.png',
    location: 'Taiwan',
    website: 'https://www.vulzbike.ro/',
    created_at: new Date().toISOString(),
    is_public: true,
  },
  {
    id: "zl",
    name: 'ZL CYCLES',
    email: 'kelly@zlbicycle.com',
    avatar_url: 'https://5irorwxhplnkjik.leadongcdn.com/cloud/jnBpiKkpRijSlpornnlmj/ZL.png',
    location: 'China',
    website: 'https://www.zlbicycle.com/',
    created_at: new Date().toISOString(),
    is_public: true,
  },
];

const ProfileDesigns = ({ id }: { id: string | undefined }) => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [designs, setDesigns] = useState<SavedDesign[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
        const fetchDesigns = async () => {
          setLoading(true);
          const token = await getAccessTokenSilently();
          const fetchedDesigns = await DesignStorageService.getDesignsByUser(id, token);
          setDesigns(fetchedDesigns);
          setLoading(false);
        };
      fetchDesigns();
     }
  }, [user, getAccessTokenSilently, id]);

  
  return (
  <div className='profile-subpage-content'>
    <Grid>
      <Grid.Col span={12}>
      <SimpleGrid
          cols={4}
          spacing="lg"
        >
{/*           {!id ? bikeTemplates.map((design) => (
            <Card key={design.id} shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <div style={{ position: 'relative' }}>
                  <Image
                    src={design.image || '/placeholder-image.png'} 
                    height={160}
                    alt={design.name}
                  />
                  <Badge 
                    leftSection={<IconStarFilled size="12" />}
                    variant="filled"
                    color="var(--mantine-color-gray-7)"
                    style={{
                      padding: '0px 5px',
                      position: 'absolute',
                      top: 8,
                      right: 8
                    }}>
                    3,9
                  </Badge>
                </div>
              </Card.Section>
              <Text fw={500} size="lg" mt="md">
                {design.name}
              </Text>
            </Card>
          )) :  */}
          {loading ? (
            <div className="designs-loading">
              <img 
                src="https://res.cloudinary.com/da8qnqmmh/image/upload/e_bgremoval/WhatsApp_GIF_2025-01-15_at_12.36.33_tupvgo.gif"
                alt="Loading designs"
                className="loading-gif"
              />
            </div>
          ) : designs.map((design: SavedDesign) => (
            <DesignCard
              design={design}
              key={design.id}
              onRename={(newName) => setDesigns((prev) => prev.map((d) => d.id === design.id ? { ...d, name: newName.trim() } : d))}
              onDelete={() => setDesigns((prev)=>prev.filter((d) => d.id !== design.id))}
              onChangeVisibility={() => setDesigns((prev) => prev.map((d) => d.id === design.id ? { ...d, is_public: !design.is_public } : d ))}
            />
          ))}
          {!loading && designs.length === 0 && <Text>No designs yet</Text>}
        </SimpleGrid>
      </Grid.Col>
    </Grid>
  </div>
  )
}

const ProfilePage: React.FC = () => {
  const { id } = useParams();
  const { user: myProfile, isLoading: userLoading } = useUser();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [ownProfile, setOwnProfile] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError(null);
      
      let profileId = id;
      
      // If no ID is provided in the URL but we have a logged-in user,
      // redirect to the profile with the user's ID
      if (!profileId && myProfile) {
        profileId = myProfile.id;
        // We'll set this manually since we're using the current user's profile
        setProfile(myProfile as unknown as Profile);
        setOwnProfile(true);
        setLoading(false);
        return;
      }
      
      if (profileId) {
        try {
          console.log(`Fetching profile for ID: ${profileId}`);
          const profileResponse = await ProfileStorageService.getProfile(profileId);
          
          setProfile(profileResponse);
          
          // Check if this is the user's own profile
          if (myProfile && profileResponse.id === myProfile.id) {
            setOwnProfile(true);
          }
        } catch (error: any) {
          console.error('Error fetching profile:', error);
          setError(error.message || 'Failed to load profile');
          setProfile(null);
        } finally {
          setLoading(false);
        }
      } else {
        // No ID in URL and no logged-in user
        setError('No profile ID provided');
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id, myProfile]);
  
  if (loading || userLoading) {
    return (
      <div className='profile-not-found'>
        <Loader type="dots" color="#000" size={50} style={{margin: "auto"}} />
      </div>
    );
  }
  
  if (!profile) {
    return (
      <div className='profile-not-found'>
        <Title order={1}>
          Profile not found
        </Title>
        <Title order={4}>
          {error || 'This profile does not exist or might be private.'}
        </Title>
      </div>
    );
  }

  return (
    <div>

    <AppShell>
      <AppShell.Navbar>
        <ProfileSidebar profile={profile}/>
      </AppShell.Navbar>
    </AppShell>
      <div className="profile-page-content">

      <Tabs defaultValue="designs">
        <Tabs.List>
          <Tabs.Tab value="designs">{profile?.user_type === 'manufacturer' ? "Prefabs" : "Designs"}</Tabs.Tab>
          {ownProfile && <Tabs.Tab value="edit-profile">Edit profile</Tabs.Tab>}
        </Tabs.List>
        <Tabs.Panel value="designs">
          <ProfileDesigns id={profile?.id} />
        </Tabs.Panel>
        {ownProfile && <Tabs.Panel value="edit-profile">
          <EditProfileForm profile={profile} onSubmit={(p) => {setProfile(p)}}/>
        </Tabs.Panel>}
      </Tabs>
      </div>
    </div>
  );
};

export default ProfilePage;
