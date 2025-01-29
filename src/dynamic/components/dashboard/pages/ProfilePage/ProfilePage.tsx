import { AppShell, Badge, Card, Text, Grid, Image, Tabs, SimpleGrid } from '@mantine/core';
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

const mockProfiles: Profile[] = [
  {
    id: "vulz",
    name: 'Vulz',
    email: 'vulzbike@gmail.com',
    avatar_url: '/placeholder-profile.png',
    location: 'Taiwan',
    website: 'https://www.vulzbike.ro/',
    created_at: new Date().toISOString()
  },
  {
    id: "zl",
    name: 'ZL CYCLES',
    email: 'kelly@zlbicycle.com',
    avatar_url: 'https://5irorwxhplnkjik.leadongcdn.com/cloud/jnBpiKkpRijSlpornnlmj/ZL.png',
    location: 'China',
    website: 'https://www.zlbicycle.com/',
    created_at: new Date().toISOString()
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
            <Card key={design.id} shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={design.thumbnail_url || '/placeholder-image.png'} height={160} alt={design.name} />
              </Card.Section>
              <Text fw={500} size="lg" mt="md">
                {design.name}
              </Text>
            </Card>
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
  const { profile: myProfile } = useUser();
  const [profile, setProfile] = useState<Profile>();
  const [ownProfile, setOwnProfile] = useState<boolean>(false);

    useEffect(() => {
      const fetchProfile = async () => {
        let profileId = id;
        if (!id) {
          profileId = myProfile?.id;
        }
        if (profileId) {
          try {
            const profileResponse = await ProfileStorageService.getProfile(profileId);
            if (profileResponse.id === myProfile?.id) setOwnProfile(true);
            setProfile(profileResponse);
          } catch (error) {
            console.error('Error fetching profile:', error);
          }
        }
      };
  
      fetchProfile();
    }, [id]);

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
