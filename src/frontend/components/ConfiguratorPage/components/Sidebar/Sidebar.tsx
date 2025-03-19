import { ActionIcon } from '@mantine/core';
import { ISessionApi, IViewportApi } from '@shapediver/viewer';
import { MyDesigns } from '@frontend/components/ConfiguratorPage/components/Sidebar/Sections/MyDesigns';
import { CONFIGURATOR_TYPES } from '@frontend/constants/configuratorTypes';
import { ConfiguratorType } from '@frontend/types/SavedDesign';
import { IconBike, IconBookmarks, IconComponents, IconUpload } from '@tabler/icons-react';
import React, { useEffect, useRef, useState } from 'react';
import PrefabSection from './Sections/PrefabSection';
import UploadModal from '@frontend/components/dashboard/pages/Uploads/components/UploadModal/UploadModal';
import { useUser } from '@frontend/hooks/useUser';
import { AuthenticatedFeature } from '@frontend/components/AuthenticatedFeature/AuthenticatedFeature';
import ComponentsSection from './Sections/Components';

// Define BikeTemplate interface
export interface BikeTemplate {
  id: string;
  image?: string;
  name: string;
  modelStateId: string;
  parameters: Record<string, string>;
  type: keyof typeof CONFIGURATOR_TYPES | Lowercase<keyof typeof CONFIGURATOR_TYPES>;
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
            onClick={() => setActiveSection(activeSection === button.name ? undefined : button.name)}
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
                />
            )}
          
          {activeSection === 'upload' && (
            <AuthenticatedFeature>
              {user?.id && (
                <UploadModal closeUploadModal={() => setActiveSection(undefined)} profileId={user.id} uploadModalOpened={activeSection === 'upload'}/>
              )}
            </AuthenticatedFeature>
          )}

          {activeSection === 'components' && (
            <ComponentsSection prefabId={prefabId} />
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;