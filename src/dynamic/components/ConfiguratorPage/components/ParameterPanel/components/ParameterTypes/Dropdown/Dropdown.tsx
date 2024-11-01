import React, { useState, useEffect, useRef } from 'react';
import { ParameterDefinition } from '../../../types';
import { useMediaQuery } from '@mantine/hooks';
import './Dropdown.css';

interface DropdownProps {
  definition: ParameterDefinition;
  value: string;
  onChange: (value: any, definition: ParameterDefinition) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  definition,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleOptionSelect = (optionValue: string) => {
    if (optionValue !== value) {
      onChange(optionValue, definition);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = definition.options?.find(opt => opt.value === value);
  const otherOptions = definition.options?.filter(opt => opt.value !== value);

  return (
    <div className={`parameter-card ${isMobile ? 'mobile' : ''}`} ref={dropdownRef}>
      <div className="parameter-header">
        <span className="parameter-label">{definition.name}</span>
      </div>

      <div className="dropdown-container">
        <button 
          className={`dropdown-trigger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="dropdown-value">
            {selectedOption?.label || 'Select option'}
          </span>
          <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>
            ▼
          </span>
        </button>

        <div className={`dropdown-options ${isOpen ? 'open' : ''}`}>
          {otherOptions?.map(option => (
            <div
              key={option.value}
              className="dropdown-option"
              onClick={() => handleOptionSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};