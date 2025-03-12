import React, { useEffect } from 'react';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useLocation } from 'react-router-dom';
import DashboardHeader from './components/DashboardHeader/DashboardHeader';
import DashboardSidebar from './components/DashboardSidebar/DashboardSidebar';
import { preloadCategoryData } from '../../utils/preloadUtils';
import '@mantine/core/styles.css';
import './Dashboard.css';

interface DashboardProps {
  children: React.ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation();
  const showDashboardNavbar = !location.pathname.includes('/profile');

  // Preload category data when dashboard mounts
  useEffect(() => {
    // Preload in the background without blocking rendering
    const preloadData = async () => {
      try {
        // Small delay to prioritize initial UI rendering
        await new Promise(resolve => setTimeout(resolve, 100));
        await preloadCategoryData();
      } catch (error) {
        console.error('Failed to preload category data:', error);
      }
    };
    
    preloadData();
  }, []);

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