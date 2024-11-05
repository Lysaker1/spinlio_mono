import React, { useState } from 'react';
import SupplierButton from '../SupplierButton/SupplierButton';
import { bikeTemplates, BikeTemplate } from './bikeTemplates';
import './Sidebar.css';

interface SidebarProps {
  onTemplateSelect: (templateId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onTemplateSelect }) => {
  const [showCatalog, setShowCatalog] = useState(false);

  const handleCatalogClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    setShowCatalog(!showCatalog);
  };

  const handleTemplateClick = (templateId: string) => {
    console.log('Template clicked:', templateId);
    onTemplateSelect(templateId);
  };

  const handleClickOutside = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.catalog-button')) return;
    if ((e.target as HTMLElement).closest('.template-container')) return;
    setShowCatalog(false);
  };

  return (
    <div className="left-sidebar" onClick={handleClickOutside}>
      <div className="supplier-button-container">
        <SupplierButton />
      </div>
      
      <button 
        className="catalog-button"
        onClick={handleCatalogClick}
      >
        Catalog
      </button>

      {showCatalog && (
        <div className="template-container">
          {bikeTemplates.map((template) => (
            <button
              key={template.id}
              className="template-button"
              onClick={() => handleTemplateClick(template.id)}
            >
              <img 
                alt={template.name}
                className="template-image"
              />
              <span className="template-name">{template.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;