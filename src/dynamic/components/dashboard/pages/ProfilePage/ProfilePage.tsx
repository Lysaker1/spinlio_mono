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

interface Profile {
  id?: string;
  name?: string;
  email?: string;
  profilePicture?: string;
  country?: string;
  url?: string;
}

const mockProfiles: Profile[] = [
  {
    id: "vulz",
    name: 'Vulz',
    email: 'vulzbike@gmail.com',
    profilePicture: '/placeholder-profile.png',
    country: 'Taiwan',
    url: 'https://www.vulzbike.ro/'
  },
  {
    id: "zl",
    name: 'ZL CYCLES',
    email: 'kelly@zlbicycle.com',
    profilePicture: 'https://5irorwxhplnkjik.leadongcdn.com/cloud/jnBpiKkpRijSlpornnlmj/ZL.png',
    country: 'China',
    url: 'https://www.zlbicycle.com/'
  },
];

const ProfileDesigns = ({ id }: { id: string | undefined }) => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [designs, setDesigns] = useState<SavedDesign[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id && isAuthenticated) {
      const fetchDesigns = async () => {
        setLoading(true);
        const token = await getAccessTokenSilently();
        const fetchedDesigns = await DesignStorageService.getDesignsByUser(user?.sub || '', token);
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
          {id ? bikeTemplates.map((design) => (
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
          )) : 
          loading ? (
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
        </SimpleGrid>
      </Grid.Col>
    </Grid>
  </div>
  )
}

const ProfilePage: React.FC = () => {
  const { id } = useParams();
  const { user } = useAuth0();
  let profile: Profile | undefined = mockProfiles.find((profile) => profile.id === id);
  if (!id && user) {
    profile = {
      id: user.sub,
      name: user.name,
      email: user.email,
      profilePicture: user.picture || '/placeholder-profile.png',
    };
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
          <Tabs.Tab value="designs">{id ? "Prefabs" : "Designs"}</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="designs">
          <ProfileDesigns id={id} />
        </Tabs.Panel>
      </Tabs>
      </div>
    </div>
  );
};

export default ProfilePage;
