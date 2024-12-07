import React, { useState, useEffect, useCallback } from 'react';
import { bikeTemplates } from './bikeTemplates';
import { Checkbox } from '../ParameterPanel/components/ParameterTypes/Checkbox/Checkbox';
import './Sidebar.css';
import { ISessionApi } from '@shapediver/viewer';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  onTemplateSelect: (templateId: string) => void;
  showOnlyFrame: boolean;
  showDimensions: boolean;
  onShowOnlyFrameChange: (value: boolean) => void;
  onShowDimensionsChange: (value: boolean) => void;
  session: ISessionApi | null;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  onTemplateSelect, 
  showOnlyFrame, 
  showDimensions, 
  onShowOnlyFrameChange, 
  onShowDimensionsChange,
  session 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState<'none' | 'Prefab' | 'settings'>('none');
  const navigate = useNavigate();

  const handleClickOutside = useCallback((e: MouseEvent) => {
    const sidebar = document.querySelector('.left-sidebar');
    if (sidebar && !sidebar.contains(e.target as Node)) {
      setIsExpanded(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const handleTemplatesClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSection(activeSection === 'Prefab' ? 'none' : 'Prefab');
  };

  const handleSettingsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSection(activeSection === 'settings' ? 'none' : 'settings');
  };

  const handleTemplateSelect = (templateId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onTemplateSelect(templateId);
    setIsExpanded(false);
  };

  const handleShowOnlyFrameChange = (_: any, definition: any) => {
    if (session) {
      session.customize({
        'b5bf6f12-a078-4417-a4ae-d2049807178c': (!showOnlyFrame).toString()
      });
      onShowOnlyFrameChange(!showOnlyFrame);
    }
  };

  const handleShowDimensionsChange = (_: any, definition: any) => {
    if (session) {
      session.customize({
        '7088e5a1-f07f-49c3-b1f6-98e74ae3734c': (!showDimensions).toString()
      });
      onShowDimensionsChange(!showDimensions);
    }
  };

  const handleBetaClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate('/beta');
  };

  const handleVulzClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate('/vulz');
  };

  return (
    <div className={`left-sidebar ${isExpanded ? 'expanded' : ''}`}>
      {!isExpanded ? (
        <button 
          className="menu-button" 
          onClick={handleMenuClick}
          aria-label="Open menu"
        >
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </button>
      ) : (
        <>
          <button 
            className={`sidebar-button ${activeSection === 'Prefab' ? 'active' : ''}`}
            onClick={handleTemplatesClick}
          >
            Prefabs
          </button>
          <button 
            className={`sidebar-button ${activeSection === 'settings' ? 'active' : ''}`}
            onClick={handleSettingsClick}
          >
            Settings
          </button>
          <button 
            className="sidebar-button vulz-button"
            onClick={handleVulzClick}
          >
            VULZ
          </button>
          {/*
          <button 
            className="sidebar-button beta-button" 
            onClick={handleBetaClick}
          >
            Beta
          </button>
          */}

          {activeSection === 'Prefab' && (
            <div className="template-container visible">
              {bikeTemplates.map((template) => (
                <button
                  key={template.id}
                  className="template-button"
                  onClick={(e) => handleTemplateSelect(template.id, e)}
                >
                  <img 
                    src={template.image}
                    alt={template.name}
                    className="template-image"
                  />
                  <span className="template-name">{template.name}</span>
                </button>
              ))}
            </div>
          )}

          {activeSection === 'settings' && (
            <div className="settings-container visible">
              <Checkbox
                definition={{
                  id: 'b5bf6f12-a078-4417-a4ae-d2049807178c',
                  name: 'Show Only Frame',
                  type: 'checkbox',
                  category: 'geometry',
                  value: showOnlyFrame.toString()
                }}
                value={showOnlyFrame.toString()}
                onChange={handleShowOnlyFrameChange}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Sidebar;