import React from 'react';
import { Text, Title, Group, ActionIcon, Avatar, Button, Menu, Burger } from '@mantine/core';
import { IconBell, IconChevronDown, IconLogout } from '@tabler/icons-react';
import { useAuth0 } from '@auth0/auth0-react';
import '../../Dashboard.css'

interface DashboardHeaderProps {
  opened: boolean;
  toggle: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ opened, toggle }) => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const getInitials = (name: string): string => {
    const nameParts = name.split(' ');
    if (nameParts.length === 1) return nameParts[0][0].toUpperCase();
    return (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase();
  };

  return (
    <div className="dashboard-header-container">
      <Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="md" />
        <Title order={1}>Spinlio</Title>
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
              src={user?.picture}
              imageProps={{ onError: (e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}}
            >
              {getInitials(user?.name || '')}
            </Avatar>
            <Menu shadow="md" width={200} position="bottom-end" zIndex={1000}>
              <Menu.Target>
                <Group style={{ cursor: 'pointer' }}>
                  <Text size="sm" fw={500}>{user?.name}</Text>
                  <IconChevronDown size={14} />
                </Group>
              </Menu.Target>

              <Menu.Dropdown>
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
          <Button onClick={() => loginWithRedirect()} bg='black'>
            Log in
          </Button>
        )}
      </Group>
    </div>
  );
};

export default DashboardHeader; 