import React, { useRef, useState } from 'react';
import { InfoButton } from '../InfoButton/InfoButton';
import './LogoUpload.css';
import { ParameterDefinition } from '../../../types';

interface LogoUploadProps {
  definition: ParameterDefinition;
  value: string;
  onChange: (value: string | File, definition: ParameterDefinition) => void;
}

export const LogoUpload: React.FC<LogoUploadProps> = ({
  definition,
  value,
  onChange
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>('');

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type and size
    if (!file.type.includes('image/png')) {
      alert('Please upload a PNG file');
      return;
    }

    if (file.size > 2 * 1024 * 1024) { // 2MB limit
      alert('File size must be less than 2MB');
      return;
    }

    try {
      setFileName(file.name);
      onChange(file, definition);
      
      console.log('Uploading file:', {
        type: file.type,
        size: file.size,
        name: file.name
      });
    } catch (error) {
      console.error('Error processing logo:', error);
      alert('Error processing the image. Please try another file.');
    }
  };

  const logoUploadInfo = (
    <div>
      <h4>Logo Upload Guidelines</h4>
      <p>Upload your custom logo to be displayed on the down tube:</p>
      <ul>
        <li>File format: PNG only</li>
        <li>Transparent background recommended</li>
        <li>High contrast for better visibility</li>
        <li>Maximum file size: 2MB</li>
      </ul>
    </div>
  );

  return (
    <div className="parameter-card logo-upload-container">
      <div className="parameter-header">
        <span className="parameter-label">{definition.name}</span>
        <InfoButton content={logoUploadInfo} />
      </div>
      <div className="logo-upload-wrapper">
        <button 
          className="logo-upload-button"
          onClick={() => fileInputRef.current?.click()}
        >
          Choose Logo
        </button>
        <span className="file-name">
          {fileName ? fileName : 'No logo chosen'}
        </span>
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          accept="image/png"
          className="hidden-input"
        />
      </div>
    </div>
  );
}; 