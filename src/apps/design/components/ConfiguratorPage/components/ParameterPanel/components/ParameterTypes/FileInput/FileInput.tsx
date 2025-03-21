import React, { useRef } from 'react';
import { InfoButton } from '../InfoButton/InfoButton';
import './FileInput.css';
import { ParameterDefinition } from '../../../types';

interface FileInputProps {
  definition: ParameterDefinition;
  value: string;
  onChange: (value: string, definition: ParameterDefinition) => void;
}

export const FileInput: React.FC<FileInputProps> = ({
  definition,
  value,
  onChange
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      // Convert file to base64 string
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64String = e.target?.result as string;
        onChange(base64String, definition);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error processing file:', error);
    }
  };

  const fileInputInfo = (
    <div>
      <h4>Battery Model Upload</h4>
      <p>Upload your custom battery 3D model to be integrated into the down tube:</p>
      <p>Supported file formats:</p>
      <ul>
        <li>.obj - Wavefront OBJ</li>
        <li>.stl - Stereolithography</li>
        <li>.step/.stp - STEP CAD files</li>
      </ul>
      <p>Requirements:</p>
      <ul>
        <li>Model should be properly scaled</li>
        <li>Orientation should match the down tube direction</li>
        <li>Clean geometry without errors</li>
      </ul>
    </div>
  );

  return (
    <div className="parameter-card file-input-container">
      <div className="parameter-header">
        <span className="parameter-name">{definition.name}</span>
        <InfoButton content={fileInputInfo} />
      </div>
      <div className="file-input-wrapper">
        <button 
          className="file-input-button"
          onClick={() => fileInputRef.current?.click()}
        >
          Choose File
        </button>
        <span className="file-name">
          {value ? 'File selected' : 'No file chosen'}
        </span>
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          accept=".obj,.stl,.step,.stp"
          className="hidden-input"
        />
      </div>
    </div>
  );
};