import { Avatar, Button, Divider, Text, Title } from '@mantine/core';
import React from 'react';
import { IconArrowRight, IconSettings } from '@tabler/icons-react';
import { Profile } from '@shared/types/Profile';
import { useNavigate } from 'react-router-dom';

interface ProfileSidebarProps {   
  profile?: Profile
  ownProfile?: boolean
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({profile, ownProfile}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-full text-center p-4 gap-4 h-full">
      <div className="flex flex-col items-center justify-center w-full text-center gap-2">
        <Avatar size={120} src={profile?.avatar_url}/>
        <Title order={3}>{profile?.name || "Unknown profile"}</Title>
      </div>
      <div className="flex flex-col gap-2 flex-1 w-full">
        <Text>{profile?.email}</Text>
        <Text>{profile?.location}</Text>
        {profile?.description && (
          <>
            <Divider className="mt-2.5"/>
            <Text>{profile?.description}</Text>
            <Divider />
          </>
        )}
        {profile?.website && (
          <a href={profile?.website} target="_blank" rel="noopener noreferrer">
            <Button variant='light' color='black' rightSection={<IconArrowRight size={14}/>} className="mt-4">
              Visit Website
            </Button>
          </a>
        )}
      </div>
      {ownProfile && (
        <div className="w-full mt-auto">
          <Button color='black' leftSection={<IconSettings size={14}/>} className="mt-4" onClick={() => navigate('/profile/edit')}>
            Edit Profile
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProfileSidebar;
