import React, { useState, useEffect, useCallback } from 'react';
import { bikeTemplates } from './bikeTemplates';
import './Sidebar.css';

interface SidebarProps {
  onTemplateSelect: (templateId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onTemplateSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    const sidebar = document.querySelector('.left-sidebar');
    if (sidebar && !sidebar.contains(e.target as Node)) {
      setIsExpanded(false);
      setShowTemplates(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setShowTemplates(false);
    }
  };

  const handleTemplatesClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTemplates(!showTemplates);
  };

  const handleTemplateSelect = (templateId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onTemplateSelect(templateId);
    // Optionally close the sidebar after selection
    setIsExpanded(false);
    setShowTemplates(false);
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
            className="templates-button" 
            onClick={handleTemplatesClick}
          >
            Templates
          </button>
          {showTemplates && (
            <div className={`template-container ${showTemplates ? 'visible' : ''}`}>
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
        </>
      )}
    </div>
  );
};

export default Sidebar;