// src/dynamic/components/BetaPage/BetaPage.tsx
import React, { useState } from 'react';
import ImageUpload from '../ImageUpload/ImageUpload';
import ModelViewer from '../ModelViewer/ModelViewer';
import './BetaPage.css';

const BetaPage: React.FC = () => {
  const [modelBlob, setModelBlob] = useState<Blob | null>(null);

  return (
    <div className="beta-page">
      <div className="beta-content">
        <div className="viewer-container">
          {modelBlob ? (
            <ModelViewer modelBlob={modelBlob} />
          ) : (
            <div className="placeholder-viewer">
              <h2>Upload an image to generate a 3D model</h2>
              <p>The model will appear here</p>
            </div>
          )}
        </div>
        
        <div className="control-panel">
          <div className="panel-content">
            <h1>3D Model Generation</h1>
            <ImageUpload onModelGenerated={setModelBlob} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetaPage;