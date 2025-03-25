import { AppShell, Badge, Card, Text, Grid, Image, Tabs, SimpleGrid, Title, Loader, Button } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import ProfileSidebar from '../../components/ProfileSidebar/ProfileSidebar';
import './ProfilePage.css';
import { SavedDesign } from '@shared/types/SavedDesign';
import { ProfileStorageService } from '../../../../../marketplace/src/shared/services/profileStorage';
import EditProfileForm from '../../components/EditProfileForm/EditProfileForm';
import { useUser } from '@shared/hooks/useUser';
import { BusinessProfile, BusinessProfile as BusinessProfileType, Profile } from '@shared/types/Profile';
import DesignCard from '../../components/DesignCard/DesignCard';
import PersonalProfilePage from './PersonalProfilePage';
import BusinessProfilePage from './BusinessProfilePage';


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

export const ProfileDesigns = ({ id }: { id: string | undefined }) => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [designs, setDesigns] = useState<SavedDesign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
        const fetchDesigns = async () => {
          /* try {
            setLoading(true);
            setError(null);
            const token = await getAccessTokenSilently();
            const fetchedDesigns = await DesignStorageService.getDesignsByUser(id, token);
            setDesigns(fetchedDesigns || []); // Handle null by providing empty array
            setLoading(false);
          } catch (err) {
            console.error('Error fetching designs:', err);
            setError('Failed to load designs');
            setDesigns([]);
            setLoading(false);
          } */
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
          ) : error ? (
            <div className="designs-error">
              <Text color="red">{error}</Text>
              <Button onClick={() => window.location.reload()} mt={10}>Retry</Button>
            </div>
          ) : designs.length === 0 ? (
            <Text>No designs yet</Text>
          ) : designs.map((design: SavedDesign) => (
            <DesignCard
              design={design}
              key={design.id}
              onRename={(newName) => setDesigns((prev) => prev.map((d) => d.id === design.id ? { ...d, name: newName.trim() } : d))}
              onDelete={() => setDesigns((prev)=>prev.filter((d) => d.id !== design.id))}
              onChangeVisibility={() => setDesigns((prev) => prev.map((d) => d.id === design.id ? { ...d, is_public: !design.is_public } : d ))}
            />
          ))}
          {!loading && !error && designs.length === 0 && <Text>No designs yet</Text>}
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
  const [businessProfile, setBusinessProfile] = useState<BusinessProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [showBusinessProfile, setShowBusinessProfile] = useState<boolean>(false);

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
        setLoading(false);
        return;
      }
      
      if (profileId) {
        try {
          try {
            const businessProfileResponse = await ProfileStorageService.getBusinessProfile(profileId);
            setBusinessProfile(businessProfileResponse);
            setShowBusinessProfile(true);
          } catch (error: any) {
            console.error('Error fetching business profile:', error);
            setBusinessProfile(null);
          }

          try {
            const profileResponse = await ProfileStorageService.getProfile(profileId);
            setProfile(profileResponse);
          } catch (error: any) {
            console.error('Error fetching profile:', error);
            setProfile(null);
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
  
  if (!profile && !businessProfile) {
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
    {(showBusinessProfile && businessProfile) ? <BusinessProfilePage businessProfile={businessProfile} ownProfile={businessProfile.id === myProfile?.id} onSwitch={() => setShowBusinessProfile(false)} /> :
    profile ? <PersonalProfilePage profile={profile} ownProfile={profile.id === myProfile?.id} setProfile={setProfile} onSwitch={()=>setShowBusinessProfile(true)} /> : 
    <div>
      <Title order={1}>
        Profile not found
      </Title>
      <Title order={4}>
        {error || 'This profile does not exist or might be private.'}
      </Title>
    </div>
    }
    </div>
  );
};

export default ProfilePage;
