import React, { useEffect, useState } from 'react';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import DashboardHeader from './components/DashboardHeader/DashboardHeader';
import DashboardSidebar from './components/DashboardSidebar/DashboardSidebar';
import UserRoleModal from './components/UserRoleModal';
import { preloadCategoryData } from '../../utils/preloadUtils';
import { AuthService } from '@shared/services/authService';
import { ProfileStorageService } from '@shared/services/profileStorage';
import '@mantine/core/styles.css';
import './Dashboard.css';

interface DashboardProps {
  children: React.ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation();
  const { isAuthenticated, user } = useAuth0();
  const showDashboardNavbar = !location.pathname.includes('/profile');
  
  // State for the user role modal
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [isNewUser, setIsNewUser] = useState(false);
  
  // Check if user is new and show role selection modal if needed
  useEffect(() => {
    const checkNewUser = async () => {
      // First check Auth0's isAuthenticated state
      if (!isAuthenticated || !user) {
        return;
      }
      
      try {
        // Get user ID from Auth0 or token
        const token = AuthService.getToken();
        const userIdFromAuth = user.sub || (token ? AuthService.getUserIdFromToken(token) : null);
        if (!userIdFromAuth) return;
        
        setUserId(userIdFromAuth);
        
        // Try to fetch user profile
        try {
          await ProfileStorageService.getProfile(userIdFromAuth);
          // If we get here, user profile exists
          setIsNewUser(false);
          setShowRoleModal(false);
        } catch (error) {
          // Profile not found, this is a new user
          console.log('New user detected, showing role selection modal');
          setIsNewUser(true);
          setShowRoleModal(true);
        }
      } catch (error) {
        console.error('Error checking if user is new:', error);
      }
    };
    
    // Add a short timeout to ensure auth state is ready
    const timeoutId = setTimeout(() => {
      checkNewUser();
    }, 300);
    
    return () => clearTimeout(timeoutId);
  }, [isAuthenticated, user]); // Add dependencies to ensure the effect runs when auth state changes
  
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
  
  const handleRoleModalClose = () => {
    setShowRoleModal(false);
  };

  return (
    <>
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
      
      {/* User role selection modal for new users */}
      {showRoleModal && userId && (
        <UserRoleModal 
          isOpen={showRoleModal}
          userId={userId}
          onClose={handleRoleModalClose}
        />
      )}
    </>
  );
};

export default Dashboard; 