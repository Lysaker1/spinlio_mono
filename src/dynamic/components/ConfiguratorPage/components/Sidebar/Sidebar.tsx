import React, { useState, useEffect, useCallback, useRef } from 'react';
import { MyDesigns } from '@shared/components/MyDesigns/MyDesigns';
import './Sidebar.css';
import { ISessionApi, IViewportApi } from '@shapediver/viewer';
import { bikeTemplates } from './bikeTemplates';
import { useNavigate } from 'react-router-dom';
import { ConfiguratorType } from '@shared/types/SavedDesign';
import { CONFIGURATOR_TYPES } from '@shared/constants/configuratorTypes';

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
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState<'none' | 'prefabs' | 'myDesigns'>('none');
  const sidebarRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
        setActiveSection('none');
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
                  template.type === 'stepthru' ? '/vulz/stepthru' : '/';
      navigate(path, {
        state: { designParameters: template.parameters }
      });
    } else {
      onTemplateSelect(template);
    }
    
    setIsExpanded(false);
  };

  return (
    <div ref={sidebarRef} className={`left-sidebar ${isExpanded ? 'expanded' : ''}`}>
      {!isExpanded && (
        <button className="burger-menu" onClick={() => setIsExpanded(true)}>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
      )}

      {isExpanded && (
        <div className="sidebar-content">
          <button 
            className={`sidebar-button ${activeSection === 'prefabs' ? 'active' : ''}`}
            onClick={() => setActiveSection(activeSection === 'prefabs' ? 'none' : 'prefabs')}
          >
            Prefabs
          </button>

          <button 
            className={`sidebar-button ${activeSection === 'myDesigns' ? 'active' : ''}`}
            onClick={() => setActiveSection(activeSection === 'myDesigns' ? 'none' : 'myDesigns')}
          >
            My Designs
          </button>

          {activeSection === 'prefabs' && (
            <div className={`template-container ${activeSection === 'prefabs' ? 'visible' : ''}`}>
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
            <div className={`template-container ${activeSection === 'myDesigns' ? 'visible' : ''}`}>
              <MyDesigns 
                onSelect={onDesignSelect}
                currentConfiguratorType={configuratorType}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;