import React, { useState } from 'react';
import './ExportOptions.css';

type FileFormat = 'OBJ' | 'STL' | '3DM';

interface FileTypeSelectProps {
    value: FileFormat;
    onChange: (format: FileFormat) => void;
}

const FileTypeSelect: React.FC<FileTypeSelectProps> = ({ value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const options: FileFormat[] = ['OBJ', 'STL', '3DM'];

    const handleSelect = (format: FileFormat) => {
        onChange(format);
        setIsOpen(false);
    };

    return (
        <div className="file-type-select">
            <label>File format</label>
            <div
                className={`custom-select ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="selected-value">{value}</div>
                <div className="dropdown-icon">&#9662;</div>
                {isOpen && (
                    <ul className="options">
                        {options.map((option) => (
                            <li
                                key={option}
                                className={`option ${option === value ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleSelect(option);
                                }}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default FileTypeSelect;
