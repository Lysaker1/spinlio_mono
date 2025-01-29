import React, { useState, useEffect, useCallback, useRef } from 'react';
import { MyDesigns } from '@shared/components/MyDesigns/MyDesigns';
import './Sidebar.css';
import { ISessionApi, IViewportApi } from '@shapediver/viewer';
import { bikeTemplates } from './bikeTemplates';
import { useNavigate } from 'react-router-dom';
import { ConfiguratorType } from '@shared/types/SavedDesign';
import { CONFIGURATOR_TYPES } from '@shared/constants/configuratorTypes';
import { IconArrowRight, IconBike, IconBookmarks } from '@tabler/icons-react';
import { Button, Text } from '@mantine/core';

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
      const path = template.type === 'vulz' ? '/vulz' : 
                  template.type === 'stepthru' ? '/vulz/stepthru' :
                  template.type === 'urban' ? '/vulz/urban' :
                  '/';
      navigate(path, {
        state: { designParameters: template.parameters }
      });
    } else {
      onTemplateSelect(template);
    }
  };

  return (
    <>
      <div className="sidebar-menu">
        <Button 
          className={`sidebar-button ${activeSection === 'prefabs' ? 'active' : ''}`}
          onClick={() => setActiveSection(activeSection === 'prefabs' ? undefined : 'prefabs')}
        >
          <IconBike size={20} />
          <br />
          Prefabs
        </Button>

        <Button 
          className={`sidebar-button ${activeSection === 'myDesigns' ? 'active' : ''}`}
          onClick={() => setActiveSection(activeSection === 'myDesigns' ? undefined : 'myDesigns')}
        >
          <IconBookmarks size={20}/>
          <br />
          My Designs
        </Button>
      </div>

      {activeSection && (
      <div className="expanded-sidebar-content">
        {activeSection === 'prefabs' && (
            <div className={`template-container`}>
              <div className="template-container-header">
                <Text className="template-container-title">Prefabs</Text>
                <button className="view-all-button" onClick={() => navigate('/dashboard/prefabs')}>

                </button>
              </div>
              {bikeTemplates.map((template) => (
                <button
                  key={template.id}
                  className="template-button"
                  onClick={(e) => handleTemplateSelect(template, e)}
                >
                  <div className="template-image-container">
                    <img 
                      src={template.image}
                      alt={template.name}
                      className="template-image"
                    />
                  </div>
                  <div className="template-name">
                    {template.name}
                  </div>
                </button>
              ))}
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
    </>
  );
};

export default Sidebar;