// Import React library for JSX and component functionality
import React from 'react';
// Import ParameterDefinition type from parent directory
import { ParameterDefinition } from '../../../types';
// Import useMediaQuery hook from Mantine for responsive design
import { useMediaQuery } from '@mantine/hooks';
// Import associated CSS styles
import './Checkbox.css';

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
    <div className={`parameter-card ${isMobile ? 'mobile' : ''}`}>
      {/* Button wrapper for checkbox interaction */}
      <button 
        className="checkbox-button" 
        onClick={handleToggle}
      >
        {/* Custom checkbox visual element */}
        <div className={`checkbox ${isChecked ? 'checked' : ''}`}>
          {/* Render checkmark SVG only when checked */}
          {isChecked && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
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
        <span className="checkbox-label">{definition.name}</span>
      </button>
    </div>
  );
};