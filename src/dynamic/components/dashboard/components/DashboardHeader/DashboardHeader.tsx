import React from 'react';
import { Text, Title, Group, ActionIcon, Avatar, Button, Menu, Burger } from '@mantine/core';
import { IconBell, IconChevronDown, IconLogout, IconUser } from '@tabler/icons-react';
import { useAuth0 } from '@auth0/auth0-react';
import { useUser } from '@shared/hooks/useUser';
import { useNavigate } from 'react-router-dom';
import '../../Dashboard.css'

interface DashboardHeaderProps {
  opened: boolean;
  toggle: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ opened, toggle }) => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const { profile } = useUser();
  const navigate = useNavigate();
  const getInitials = (name: string): string => {
    const nameParts = name.split(' ');
    if (nameParts.length === 1) return nameParts[0][0]?.toUpperCase() || '';
    return (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase();
  };

  return (
    <div className="p-2">
      <div className="dashboard-header-container">
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="md" />
          <Title order={1} className='dashboard-header-title' onClick={()=>navigate("/dashboard")}>Spinlio</Title>
        </Group>
        <Group className="dashboard-header-group" gap="xs">
          {isAuthenticated ? (
            <>
              <ActionIcon variant="subtle" size="lg">
                <IconBell size={20} />
              </ActionIcon>          
              <Avatar
                radius="xl"
                color="initials"
                size="md"
                src={profile?.avatar_url}
                imageProps={{ onError: (e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}}
              >
                {getInitials(profile?.name || '')}
              </Avatar>
              <Menu shadow="md" width={200} position="bottom-end" zIndex={1000}>
                <Menu.Target>
                  <Group style={{ cursor: 'pointer' }}>
                    <Text size="sm" fw={500}>{profile?.name}</Text>
                    <IconChevronDown size={14} />
                  </Group>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item
                    leftSection={<IconUser size={14} />}
                    onClick={() => navigate('/dashboard/profile/')}
                  >
                    My Profile
                  </Menu.Item>
                  <Menu.Item
                    color="red"
                    leftSection={<IconLogout size={14} />}
                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                  >
                    Log out
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </>
          ) : (
            <Button onClick={() => {
              // Store the current path in localStorage before redirecting
              const currentPath = window.location.pathname;
              console.log('Storing redirect path:', currentPath);
              localStorage.setItem('auth_redirect_path', currentPath);
              
              // Then redirect to login
              loginWithRedirect();
            }} bg='black'>
              Log in
            </Button>
          )}
        </Group>
      </div>
    </div>
  );
};

export default DashboardHeader; 