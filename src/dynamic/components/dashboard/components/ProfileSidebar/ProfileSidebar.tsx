import { Avatar, Button, Text, Title } from '@mantine/core';
import React from 'react';
import './ProfileSidebar.css';
import { IconArrowRight } from '@tabler/icons-react';

interface ProfileSidebarProps {
  profile?: {
    id?: string;
    name?: string;
    email?: string;
    profilePicture?: string;
    country?: string;
    url?: string;
  };
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({profile}) => {
  return <div className="profile-sidebar">
    <div className="profile-sidebar-header">
      <Avatar size={120} src={profile?.profilePicture}/>
      <Title order={3}>{profile?.name}</Title>
    </div>
    <div className="profile-sidebar-content">
      <Text>{profile?.email}</Text>
      {profile?.country && <Text>{profile?.country}</Text>}
      {profile?.url && <a href={profile?.url} target="_blank" rel="noopener noreferrer">
        <Button variant='light' color='black' rightSection={<IconArrowRight size={14}/>}>
          Visit Website
        </Button>
      </a>}
    </div>
  </div>;
};

export default ProfileSidebar;

