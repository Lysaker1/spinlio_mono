import React, { useState } from 'react';

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
        <div className="w-full flex justify-between align-middle">
            <label className="mb-2 text-sm text-black/80">File format</label>
            <div
                className={`relative w-1/3 p-2 bg-gray-bg rounded-lg text-black text-sm cursor-pointer flex justify-between items-center ${isOpen ? 'border-white/50' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex-1">{value}</div>
                <div className="ml-2">&#9662;</div>
                {isOpen && (
                    <ul className="absolute top-full left-0 w-full bg-gray-bg border border-white/20 z-10 mt-1 list-none p-0">
                        {options.map((option) => (
                            <li
                                key={option}
                                className={`p-2 text-black text-sm cursor-pointer ${option === value ? 'bg-white' : ''} hover:bg-white/90`}
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
