import React, { useState, useEffect, useCallback, useRef } from 'react';
import { MyDesigns } from '@shared/components/MyDesigns/MyDesigns';
import { ISessionApi, IViewportApi } from '@shapediver/viewer';
import { bikeTemplates } from './bikeTemplates';
import { useNavigate } from 'react-router-dom';
import { ConfiguratorType } from '@shared/types/SavedDesign';
import { CONFIGURATOR_PATHS, CONFIGURATOR_TYPES } from '@shared/constants/configuratorTypes';
import { IconArrowRight, IconBike, IconBookmarks } from '@tabler/icons-react';
import { ActionIcon, Text } from '@mantine/core';

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
  const [activeSection, setActiveSection] = useState<undefined | 'prefabs' | 'myDesigns'>();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setActiveSection(undefined);
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleTemplateSelect = (template: BikeTemplate, e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (template.type !== configuratorType) {
      // First, cleanup existing session
      if (session) {
        session.close();
        setSession(null);
      }
      if (viewport) {
        viewport.close();
        setViewport(null);
      }
      
      // Then navigate based on template type
      const path = CONFIGURATOR_PATHS[template.type as keyof typeof CONFIGURATOR_PATHS] || '/';
      navigate(path, {
        state: { designParameters: template.parameters }
      });
    } else {
      onTemplateSelect(template);
    }
  };

  return (
    <div className='h-screen p-2 pt-20 w-20'>
      <div className="w-full h-full bg-white rounded-xl p-2 flex flex-col gap-2">
        <ActionIcon 
          className={`w-12 h-12 rounded-full hover:bg-black hover:text-white ${activeSection === 'prefabs' ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setActiveSection(activeSection === 'prefabs' ? undefined : 'prefabs')}
        >
          <IconBike size={20} />
        </ActionIcon>
    
        <ActionIcon 
          className={`w-12 h-12 rounded-full hover:bg-black hover:text-white ${activeSection === 'myDesigns' ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setActiveSection(activeSection === 'myDesigns' ? undefined : 'myDesigns')}
        >
          <IconBookmarks size={20}/>
        </ActionIcon>
      </div>
    
      {activeSection && (
      <div className="fixed h-screen py-2 pt-20 w-64 top-0 left-20 z-10">
        {activeSection === 'prefabs' && (
            // Panel section
            <div className="w-full h-full bg-white rounded-xl p-2 overflow-y-scroll scrollbar-hide">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center p-2 bg-white bg-opacity-50">
                  <Text className="template-container-title">Prefabs</Text>
                  <button className="view-all-button" onClick={() => navigate('/dashboard/marketplace/prefabs')}>
                    View All
                    <IconArrowRight size={20} />
                </button>
                </div>
                {bikeTemplates.map((template) => (
                  <button
                    key={template.id}
                    className="h-48 relative w-full bg-white bg-opacity-20 backdrop-blur-md border-none rounded-md text-white cursor-pointer transition-transform transform hover:-translate-y-1 flex flex-col overflow-hidden p-0"
                    onClick={(e) => handleTemplateSelect(template, e)}
                  >
                    <div className="w-full bg-transparent flex items-center justify-center object-contain relative bg-cover bg-center h-44">
                      <img 
                        src={template.image}
                        alt={template.name}
                        className="template-image"
                      />
                    </div>
                    <div className="w-full m-0 p-2 bg-black text-white text-center absolute bottom-0">
                      {template.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
    
        {activeSection === 'myDesigns' && (
              <MyDesigns 
                onSelect={onDesignSelect}
                currentConfiguratorType={configuratorType}
              />
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;