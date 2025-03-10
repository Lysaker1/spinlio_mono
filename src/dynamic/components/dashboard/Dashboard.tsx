import React, { useEffect } from 'react';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useLocation } from 'react-router-dom';
import DashboardHeader from './components/DashboardHeader/DashboardHeader';
import DashboardSidebar from './components/DashboardSidebar/DashboardSidebar';
import '@mantine/core/styles.css';
import './Dashboard.css';

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
      >
        <AppShell.Header>
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