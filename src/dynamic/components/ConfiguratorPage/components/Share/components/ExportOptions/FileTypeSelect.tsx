import React from 'react';
import './ExportOptions.css';

type FileFormat = 'OBJ' | 'STL' | '3DM';

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
        <option value="STL">STL</option>
        <option value="3DM">3DM</option>
      </select>
    </div>
  );
};

export default FileTypeSelect;