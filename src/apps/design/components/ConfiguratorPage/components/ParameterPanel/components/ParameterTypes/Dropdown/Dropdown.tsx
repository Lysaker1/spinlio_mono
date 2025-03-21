import React, { useState, useEffect, useRef } from 'react';
import { ParameterDefinition } from '../../../types';
import { useMediaQuery } from '@mantine/hooks';

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
    <div className={`w-full max-w-full relative p-0 bg-transparent rounded-xl ${isMobile ? 'flex-shrink-0 snap-start p-[0.1rem_0.2rem]' : ''}`} ref={dropdownRef}>
      <div className="parameter-header">
        <span className="parameter-label">{definition.name}</span>
      </div>

      <div className="relative w-full max-w-full box-border">
        <button 
          className={`w-full max-w-full box-border flex justify-between items-center p-3 rounded-lg cursor-pointer transition-all duration-200 ${isOpen 
            ? 'bg-transparent border border-black/10' 
            : 'bg-black/10 border border-transparent hover:border-black/10'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-black/90 text-sm">
            {selectedOption?.label || 'Select option'}
          </span>
          <span className={`text-black/60 text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>

        <div className={`absolute w-full max-w-full box-border bg-white border border-black/10 rounded-lg p-[0.3rem] z-10 ${isOpen 
          ? 'block mt-[0.2rem]' 
          : 'hidden'} ${isMobile 
            ? 'top-auto bottom-full' 
            : 'top-full left-0'} ${isMobile && (dropdownRef.current?.parentElement?.nextElementSibling === null || dropdownRef.current?.parentElement?.nextElementSibling?.nextElementSibling === null) 
              ? 'top-auto bottom-full mb-[0.2rem] mt-0' 
              : ''}`}>
          {otherOptions?.map(option => (
            <div
              key={option.value}
              className={`p-2 z-50 bg-white text-black/90 cursor-pointer text-sm rounded-md transition-all duration-200 whitespace-normal break-words w-full max-w-full box-border hover:bg-black/10 ${isMobile ? 'p-3 min-h-12 flex items-center' : ''}`}
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