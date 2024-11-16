import React, { useRef } from 'react';
import { ParameterDefinition } from '../../../types';
import './FileInput.css';

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

  return (
    <div className="parameter-card file-input-container">
      <div className="parameter-header">
        <span className="parameter-name">{definition.name}</span>
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