import React, { useRef, useState } from 'react';
import { InfoButton } from '../InfoButton/InfoButton';
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
    <div className="text-black p-4 rounded-md max-w-xs">
      <h4 className="text-lg font-semibold mb-2">Logo Upload Guidelines</h4>
      <p className="text-sm mb-2">Upload your custom logo to be displayed on the down tube:</p>
      <ul className="text-sm space-y-1 list-disc pl-5">
        <li>File format: PNG only</li>
        <li>Transparent background recommended</li>
        <li>High contrast for better visibility</li>
        <li>Maximum file size: 2MB</li>
      </ul>
    </div>
  );

  return (
    <div className="w-full px-2 bg-transparent rounded-lg">
      <div className="flex justify-between items-center">
        <span className="text-base font-medium text-gray-500">{definition.name}</span>
        <InfoButton content={logoUploadInfo} />
      </div>
      <div className="flex items-center gap-2 mt-2 w-full">
        <button 
          className="py-3 px-5 bg-black/10 border border-black/20 rounded-lg text-black cursor-pointer transition-all duration-200 ease-in-out text-sm min-w-[140px] hover:bg-black/15"
          onClick={() => fileInputRef.current?.click()}
        >
          Choose Logo
        </button>
        <span className="text-black/70 text-sm overflow-hidden text-ellipsis whitespace-nowrap">
          {fileName ? fileName : 'No logo chosen'}
        </span>
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          accept="image/png"
          className="hidden"
        />
      </div>
    </div>
  );
}; 