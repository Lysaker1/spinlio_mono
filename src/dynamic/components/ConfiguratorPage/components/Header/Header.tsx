import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ActionIcon, Avatar } from '@mantine/core';
import { useUser } from '../../../../../shared/hooks/useUser';
import { SaveDesignButton } from '@shared/components/SaveDesignButton/SaveDesignButton';
import { CONFIGURATOR_TYPES } from '@shared/constants/configuratorTypes';
import { ISessionApi, IViewportApi } from '@shapediver/viewer';
import ShareButton from '../Share/ShareButton';
import { ConfiguratorType } from '../../config/configuratorConfig';
import { IconBell } from '@tabler/icons-react';

const getInitials = (name: string): string => {
  return name.split(' ').map(n => n[0]).join('');
};

interface HeaderProps {
  session: ISessionApi | null;
  viewport: IViewportApi | null;
  configuratorType: ConfiguratorType;
}

const Header: React.FC<HeaderProps> = ({ session, viewport, configuratorType }) => {
  const { isAuthenticated, isLoading, logout, loginWithPopup } = useAuth0();
  const { profile } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  // Define base URLs
  const MAIN_URL = 'https://www.spinlio.com';


  // Toggle dropdown menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle logout
  const handleLogout = () => {
    logout();
    setMenuOpen(false);
  };

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      console.log('User not authenticated');
    }
  }, [isAuthenticated, isLoading]);


  // Get current hostname to determine if we're on design or main site
  const isDesignSite = window.location.hostname.includes('design');

  // Handle logo click - always go to main site when clicked
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default behavior
    window.location.href = MAIN_URL; // Always redirect to main site
  };

  return (
    <header className="fixed top-0 left-0 right-0 p-2 z-10">
      <div className="w-full flex justify-between items-center bg-white rounded-xl h-16 px-4">
        <a
          href={MAIN_URL}  // Always set to main URL
          className="text-black font-['Helvetica_Neue',_sans-serif] text-4xl font-bold leading-7 no-underline ml-[0.7rem] cursor-pointer"
          onClick={handleLogoClick}
        >
          Spinlio
        </a>
        <nav className="flex items-center gap-4 mr-[0.7rem]">          
          {isAuthenticated ? (
            <>
              <div className="flex items-center justify-end gap-2">
                <SaveDesignButton 
                  getCurrentParameters={() => session?.parameterValues || {}}
                  configuratorType={configuratorType}
                  viewport={viewport}
                  session={session}
                />
                <ShareButton
                  session={session}
                  viewport={viewport}
                />
              </div>
              <div className="mx-4">
                <ActionIcon variant="filled" className='bg-gray-bg text-black h-10 w-10 rounded-full'>
                  <IconBell />
                </ActionIcon>
              </div>
              <div className="relative pointer-events-auto">
                <div 
                  className="flex items-center gap-2 cursor-pointer" 
                  onClick={toggleMenu}
                >
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
                  <span className="text-black font-medium">{profile?.name}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform ${menuOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Log out
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex gap-2 pointer-events-auto">
              <button 
                onClick={() => loginWithPopup()}
                className="h-10 px-6 bg-black border text-white rounded-full hover:bg-white hover:text-black hover:border-black transition-colors"
              >
                Sign up
              </button>
              <button 
                onClick={() => loginWithPopup()}
                className="h-10 px-6 bg-black border text-white rounded-full hover:bg-white hover:text-black hover:border-black transition-colors"
              >
                Log in
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;