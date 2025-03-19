// Import React library for JSX and component functionality
import React from 'react';
// Import ParameterDefinition type from parent directory
import { ParameterDefinition } from '../../../types';
// Import useMediaQuery hook from Mantine for responsive design
import { useMediaQuery } from '@mantine/hooks';  

// Define the props interface for the Checkbox component
interface CheckboxProps {
  definition: ParameterDefinition; // Parameter configuration object
  value: string;                  // Current checkbox value as string
  onChange: (value: any, definition: ParameterDefinition) => void; // Callback for value changes
}

// Define Checkbox component as a React Functional Component with CheckboxProps
export const Checkbox: React.FC<CheckboxProps> = ({
  definition,
  value,
  onChange,
}) => {
  // Check if viewport matches mobile breakpoint
  const isMobile = useMediaQuery('(max-width: 768px)');
  // Convert string value to boolean for checkbox state
  const isChecked = value === 'true';

  // Handler function for checkbox toggle
  const handleToggle = () => {
    // Call onChange with inverted boolean value converted to string
    onChange((!isChecked).toString(), definition);
  };

  return (
    // Container div with conditional mobile class
    <div className={`w-full bg-transparent rounded-xl py-5 backdrop-blur-md mb-4 ${isMobile ? 'w-[280px] flex-shrink-0 snap-start mr-4 mb-0' : ''}`}>
      {/* Button wrapper for checkbox interaction */}
      <button 
        className="w-full flex items-center gap-3 bg-transparent border-none rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:bg-white/5 active:bg-white/10"
        onClick={handleToggle}
      >
        {/* Custom checkbox visual element */}
        <div className={`w-6 h-6 rounded-md border-2 border-black/40 flex items-center justify-center transition-all duration-200 ease-in-out text-black flex-shrink-0 bg-black/5
          ${isChecked ? 'bg-black/20 border-black/80 scale-105' : ''}
          hover:border-black/60 hover:scale-105
          ${isChecked ? 'hover:bg-white/25 hover:scale-110' : ''}`}
        >
          {/* Render checkmark SVG only when checked */}
          {isChecked && (
            <svg className="w-4 h-4 opacity-100 scale-100 transition-all duration-200 ease-in-out" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {/* SVG path for checkmark icon */}
              <path 
                d="M20 6L9 17L4 12" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        {/* Label displaying parameter name */}
        <span className="transition-colors duration-200 ease-in-out group-hover:text-black/20">{definition.name}</span>
      </button>
    </div>
  );
};