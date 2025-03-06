// src/dynamic/components/BetaPage/BetaPage.tsx
import React, { useState, useEffect } from 'react';
import ImageUpload from '../ImageUpload/ImageUpload';
import ModelViewer from '../ModelViewer/ModelViewer';
import RhinoTest from '../RhinoTest/RhinoTest';
import { ModelGallery } from '../ModelGallery/ModelGallery';
import TabbedInterface from '../TabbedInterface/TabbedInterface';
import './BetaPage.css';
import { ErrorBoundary } from '@shared/components';

const BetaPage: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  const handleModelSelect = (url: string | null) => {
    console.log('BetaPage handling model selection:', url);
    setSelectedModel(url);
  };

  return (
    <div className="beta-page">
      <div className="viewer-container">
        {selectedModel ? (
          <ErrorBoundary
            fallback={<div>Error loading model</div>}
          >
            <ModelViewer
              key={selectedModel}
              modelUrl={selectedModel}
              initialZoom={5}
            />
          </ErrorBoundary>
        ) : (
          <div className="placeholder-viewer">
            <h2>No Model Selected</h2>
            <p>Select a model from the gallery to view</p>
          </div>
        )}
      </div>

      <div className="control-panel">
        <TabbedInterface
          tabs={[
            {
              label: '2D',
              content: <div>2D content here</div>
            },
            {
              label: '3D',
              content: (
                <ModelGallery 
                  onModelSelect={handleModelSelect}
                />
              )
            }
          ]}
          onModelSelect={handleModelSelect}
        />
      </div>
    </div>
  );
};

export default BetaPage;