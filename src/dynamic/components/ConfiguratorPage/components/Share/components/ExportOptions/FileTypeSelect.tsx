import React from 'react';
import './ExportOptions.css';

type FileFormat = 'OBJ' | 'STEP' | 'STL' | '3DM' | 'PNG';

interface FileTypeSelectProps {
  value: FileFormat;
  onChange: (format: FileFormat) => void;
}

const FileTypeSelect: React.FC<FileTypeSelectProps> = ({ value, onChange }) => {
  return (
    <div className="file-type-select">
      <label>File format</label>
      <select 
        value={value} 
        onChange={(e) => onChange(e.target.value as FileFormat)}
      >
        <option value="OBJ">OBJ</option>
        <option value="STEP">STEP</option>
        <option value="STL">STL</option>
        <option value="3DM">3DM</option>
        <option value="PNG">PNG</option>
      </select>
    </div>
  );
};

export default FileTypeSelect;