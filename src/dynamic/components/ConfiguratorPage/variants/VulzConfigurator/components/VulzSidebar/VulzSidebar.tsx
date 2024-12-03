import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ISessionApi } from '@shapediver/viewer';
import { Checkbox } from '../../../../components/ParameterPanel/components/ParameterTypes/Checkbox/Checkbox';
import './VulzSidebar.css';
import { BikeTemplate } from '../../../../components/Sidebar/bikeTemplates';
import { vulzBikeTemplates } from './vulzBikeTemplates';
interface VulzSidebarProps {
  onTemplateSelect: (templateId: string) => void;
  session: ISessionApi | null;
  showOnlyFrame: boolean;
  showDimensions: boolean;
  onShowOnlyFrameChange: (value: boolean) => void;
  onShowDimensionsChange: (value: boolean) => void;
}

const VulzSidebar: React.FC<VulzSidebarProps> = ({
  onTemplateSelect,
  session,
                                                   showOnlyFrame,
                                                   showDimensions,
                                                   onShowOnlyFrameChange,
                                                   onShowDimensionsChange,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState<'none' | 'templates' | 'settings'>('none');
  const navigate = useNavigate();

  const handleClickOutside = useCallback((e: MouseEvent) => {
    const sidebar = document.querySelector('.vulz-sidebar');
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
    setActiveSection(activeSection === 'templates' ? 'none' : 'templates');
  };

  const handleSettingsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSection(activeSection === 'settings' ? 'none' : 'settings');
  };

  const handleShowOnlyFrameChange = (_: any, definition: any) => {
    if (session) {
      session.customize({
        'b5bf6f12-a078-4417-a4ae-d2049807178c': (!showOnlyFrame).toString()
      });
      onShowOnlyFrameChange(!showOnlyFrame);
    }
  };

  const handleBackToMain = () => {
    navigate('/');
  };

  const handleTemplateSelect = (templateId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onTemplateSelect(templateId);
  };

  return (
    <div className={`vulz-sidebar ${isExpanded ? 'expanded' : ''}`}>
        {!isExpanded && (
            <button className="menu-button" onClick={handleMenuClick}>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
            </button>
        )}


      {isExpanded && (
          <>

            <button
                className="sidebar-button vulz-sidebar-button"
                onClick={handleBackToMain}
            >
              Back to Main
            </button>

            <button
                className={`sidebar-button ${activeSection === 'settings' ? 'active' : ''} vulz-sidebar-button`}
                onClick={handleSettingsClick}
            >
              Settings
            </button>


            <button
                className={`sidebar-button ${activeSection === 'templates' ? 'active' : ''} vulz-sidebar-button`}
                onClick={handleTemplatesClick}
            >
              VULZ Models
            </button>

            {activeSection === 'templates' && (
                <div className="template-container visible">
                  {vulzBikeTemplates.map((template: BikeTemplate) => (
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

export default VulzSidebar;
