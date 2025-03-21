import { Avatar, Button, Divider, Text, Title } from '@mantine/core';
import React from 'react';
import './ProfileSidebar.css';
import { IconArrowRight } from '@tabler/icons-react';
import { Profile } from '@shared/types/Profile';

interface ProfileSidebarProps {   
  profile?: Profile
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({profile}) => {
  return <div className="profile-sidebar">
    <div className="profile-sidebar-header">
      <Avatar size={120} src={profile?.avatar_url}/>
      <Title order={3}>{profile?.name || "Unknown profile"}</Title>
    </div>
    <div className="profile-sidebar-content">
      <Text>{profile?.email}</Text>
      <Text>{profile?.location}</Text>
      {profile?.description && (
        <>
          <Divider mt={10}/>
          <Text>{profile?.description}</Text>
          <Divider />
        </>
      )}
      {profile?.website && <a href={profile?.website} target="_blank" rel="noopener noreferrer">
        <Button variant='light' color='black' rightSection={<IconArrowRight size={14}/>}>
          Visit Website
        </Button>
      </a>}
    </div>
  </div>;
};

export default ProfileSidebar;

