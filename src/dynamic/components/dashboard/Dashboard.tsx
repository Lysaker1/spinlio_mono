import React from 'react';
import '@mantine/core/styles.css';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useLocation } from 'react-router-dom';
import DashboardHeader from './components/DashboardHeader/DashboardHeader';
import DashboardSidebar from './components/DashboardSidebar/DashboardSidebar';
import './Dashboard.css'

interface DashboardProps {
  children: React.ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation();
  const showDashboardNavbar = !location.pathname.includes('/profile');

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 240,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      p={0}
    >
      <AppShell.Header zIndex={1000}>
        <DashboardHeader opened={opened} toggle={toggle} />
      </AppShell.Header>

      {showDashboardNavbar && (
        <AppShell.Navbar>
          <DashboardSidebar />
        </AppShell.Navbar>
      )}

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
};

export default Dashboard; 