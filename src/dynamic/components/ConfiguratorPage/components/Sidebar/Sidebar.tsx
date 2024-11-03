import React from 'react';
import SupplierButton from '../SupplierButton/SupplierButton';
import './Sidebar.css';

interface BikeTemplate {
  id: string;
  image: string;
  name: string;
}

const bikeTemplates: BikeTemplate[] = [
  { id: 'bike1', image: '/images/bike1.png', name: 'Racing Bike' },
  { id: 'bike2', image: '/images/bike2.png', name: 'City Bike' },
  { id: 'bike3', image: '/images/bike3.png', name: 'Mountain Bike' },
];

interface SidebarProps {
  onTemplateSelect: (templateId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onTemplateSelect }) => {
  const handleTemplateClick = (templateId: string) => {
    console.log(`Template ${templateId} selected`);
    onTemplateSelect(templateId);
  };

  return (
    <div className="left-sidebar">
      <div className="supplier-button-container">
        <SupplierButton />
      </div>
      
      <div className="template-container">
        {bikeTemplates.map((template) => (
          <button
            key={template.id}
            className="template-button"
            onClick={() => handleTemplateClick(template.id)}
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
    </div>
  );
};

export default Sidebar;