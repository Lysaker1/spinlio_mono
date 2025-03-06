import React, { useState } from 'react';
import { ModelGallery } from '../ModelGallery/ModelGallery';
import ImageUpload from '../ImageUpload/ImageUpload';
import './TabbedInterface.css';

interface Tab {
  label: string;
  content: React.ReactNode;
}

export interface TabbedInterfaceProps {
  tabs: Tab[];
  defaultTab?: number;
  onModelSelect?: (url: string | null) => void;
}

const TabbedInterface: React.FC<TabbedInterfaceProps> = ({ tabs, defaultTab = 0, onModelSelect }) => {
  const [activeTab, setActiveTab] = useState<'2d' | '3d'>('3d');

  const handleModelSelect = (url: string | null) => {
    console.log('TabbedInterface handling model selection:', url);
    if (onModelSelect) {
      onModelSelect(url);
    }
  };

  return (
    <div className="tabbed-interface">
      <div className="tabs">
        <button 
          className={`tab ${activeTab === '3d' ? 'active' : ''}`}
          onClick={() => setActiveTab('3d')}
        >
          3D Model Gallery
        </button>
        <button
          className={`tab ${activeTab === '2d' ? 'active' : ''}`}
          onClick={() => setActiveTab('2d')}
        >
          2D to 3D Conversion
        </button>
      </div>

      <div className="tab-content">
        {activeTab === '3d' ? (
          <div className="model-gallery-wrapper">
            <ModelGallery onModelSelect={handleModelSelect} />
          </div>
        ) : (
          <div className="image-upload-wrapper">
            <ImageUpload onModelGenerated={(blob) => console.log('Generated model:', blob)} />
            <div className="info-text">
              <h3>2D to 3D Conversion</h3>
              <p>Upload a 2D image and we'll use AI to generate a 3D model. Supported formats: PNG, JPG, WEBP</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabbedInterface;