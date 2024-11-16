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
}

const VulzSidebar: React.FC<VulzSidebarProps> = ({ 
  onTemplateSelect,
  session 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState<'none' | 'templates'>('none');
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

  const handleBackToMain = () => {
    navigate('/');
  };

  const handleTemplateSelect = (templateId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onTemplateSelect(templateId);
  };

  return (
    <div className={`vulz-sidebar ${isExpanded ? 'expanded' : ''}`}>
      <button className="menu-button" onClick={handleMenuClick}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </button>

      {isExpanded && (
        <>
          <button 
            className={`sidebar-button ${activeSection === 'templates' ? 'active' : ''}`}
            onClick={handleTemplatesClick}
          >
            VULZ Models
          </button>
          
          <button 
            className="sidebar-button back-button"
            onClick={handleBackToMain}
          >
            Back to Main
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
        </>
      )}
    </div>
  );
};

export default VulzSidebar;