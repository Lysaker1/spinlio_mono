import { ActionIcon } from '@mantine/core';
import { ISessionApi, IViewportApi } from '@shapediver/viewer';
import MyDesigns from '../../components/Sidebar/Sections/MyDesigns';
import { CONFIGURATOR_TYPES, ConfiguratorType } from '@shared/constants/configuratorTypes';
import { IconBike, IconBookmarks, IconComponents, IconUpload } from '@tabler/icons-react';
import React, { useEffect, useRef, useState } from 'react';
import PrefabSection from './Sections/PrefabSection';
import UploadModal from '@shared/components/Uploads/UploadModal';
import { useUser } from '@shared/hooks/useUser';
import { AuthenticatedFeature } from '@shared/components/Auth/AuthenticatedFeature';
import ComponentsSection from './Sections/Components';
import LoginModal from '../LoginModal/LoginModal';
import { useAuth0 } from '@auth0/auth0-react';

// Define BikeTemplate interface
export interface BikeTemplate {
  id: string;
  image?: string;
  name: string;
  modelStateId: string;
  parameters: Record<string, string>;
  type: keyof typeof CONFIGURATOR_TYPES | Lowercase<keyof typeof CONFIGURATOR_TYPES>;
  manufacturer_id?: string; // Make optional
  price?: number;
}

interface SidebarProps {
  onTemplateSelect: (template: BikeTemplate) => void;
  onDesignSelect: (parameters: Record<string, any>) => void;
  session: ISessionApi | null;
  setSession: (session: ISessionApi | null) => void;
  viewport: IViewportApi | null;
  setViewport: (viewport: IViewportApi | null) => void;
  configuratorType: ConfiguratorType;
  children?: React.ReactNode; // Add children prop
}

const Sidebar: React.FC<SidebarProps> = ({ 
  onTemplateSelect, 
  onDesignSelect,
  session,
  setSession,
  viewport,
  setViewport,
  configuratorType,
  children
}) => {
  const [activeSection, setActiveSection] = useState<undefined | 'prefabs' | 'myDesigns' | 'components' | 'upload'>();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { user } = useUser();
  const [prefabId, setPrefabId] = useState<string | undefined>(undefined);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    if (configuratorType === 'vulz') {
      setPrefabId('vulz_e_gravel');
    } else if (configuratorType === 'stepthru') {
      setPrefabId('stepthru_e_gravel');
    } else if (configuratorType === 'default') {
      setPrefabId('Classic road bike');
    } else if (configuratorType === 'urban') {
      setPrefabId('Urban Bike');
    }
  }, [configuratorType])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setActiveSection(undefined);
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSectionClick = (section: "prefabs" | "components" | "myDesigns" | "upload") => {
    // If clicking on myDesigns or upload and not authenticated, show login modal
    if ((section === 'myDesigns' || section === 'upload') && !isAuthenticated) {
      setShowLoginModal(true);
      // Still set the active section to show the panel
      setActiveSection(section);
      return;
    }
    
    // Otherwise, toggle the section as normal
    setActiveSection(activeSection === section ? undefined : section);
  };

  const buttons: { name: "prefabs" | "components" | "myDesigns" | "upload", icon: React.ReactNode }[] = [
    {
      name: 'prefabs',
      icon: <IconBike size={20} />
    },
    {
      name: 'myDesigns',
      icon: <IconBookmarks size={20} />
    },
    {
      name: 'components',
      icon: <IconComponents size={20} />
    },
    {
      name: 'upload',
      icon: <IconUpload size={20} />
    }
  ]

  return (
    <div className='h-screen p-2 pt-20 w-20'>
      <div className="w-full h-full bg-white rounded-xl p-2 flex flex-col gap-2">
        {buttons.map((button) => (
          <ActionIcon 
            key={button.name}
            className={`w-12 h-12 rounded-full hover:bg-black hover:text-white ${activeSection === button.name ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
            onClick={() => handleSectionClick(button.name)}
          >
            {button.icon}
          </ActionIcon>
        ))}
      </div>
    
      {activeSection && (
        <div className="fixed h-screen py-2 pt-20 w-auto top-0 left-20 z-10">
          {activeSection === 'prefabs' && (
              <PrefabSection onTemplateSelect={onTemplateSelect} configuratorType={configuratorType} session={session} setSession={setSession} viewport={viewport} setViewport={setViewport}/>
            )}
      
          {activeSection === 'myDesigns' && (
                <MyDesigns 
                  onSelect={onDesignSelect}
                  currentConfiguratorType={configuratorType}
                  showLoginModal={showLoginModal}
                  setShowLoginModal={setShowLoginModal}
                />
            )}
          
          {activeSection === 'upload' && isAuthenticated && user?.id && (
            <UploadModal closeUploadModal={() => setActiveSection(undefined)} profileId={user.id} uploadModalOpened={activeSection === 'upload'}/>
          )}

          {activeSection === 'components' && (
            <ComponentsSection prefabId={prefabId} />
          )}
        </div>
      )}
      
      <LoginModal opened={showLoginModal} setOpened={setShowLoginModal} />
    </div>
  );
};

export default Sidebar;