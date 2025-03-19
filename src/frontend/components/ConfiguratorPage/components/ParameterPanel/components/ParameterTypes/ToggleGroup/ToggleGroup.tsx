// Import React library for component creation
import React from 'react';
// Import type definition for parameter configuration
import { ParameterDefinition } from '../../../types';
// Import hook to detect mobile viewport
import { useMediaQuery } from '@mantine/hooks';
// Import component styles
import './ToggleGroup.css';

// Define props interface for ToggleGroup component
interface ToggleGroupProps {
  definition: ParameterDefinition;  // Parameter configuration object
  value: string;                    // Currently selected value
  onChange: (value: any, definition: ParameterDefinition) => void;  // Handler for value changes
}

// Define ToggleGroup component with TypeScript and React
export const ToggleGroup: React.FC<ToggleGroupProps> = ({
  definition,  // Parameter definition passed as prop
  value,      // Current value passed as prop
  onChange,   // Change handler passed as prop
}) => {
  // Hook to detect if viewport is mobile size
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    // Main container with mobile-responsive class
    <div className={`parameter-card ${isMobile ? 'mobile' : ''}`}>
      {/* Header section showing parameter name */}
      <div className="parameter-header">
        <span className="parameter-label">{definition.name}</span>
      </div>

      {/* Container for toggle buttons */}
      <div className="toggle-options">
        {/* Map through available options to create toggle buttons */}
        {definition.options?.map((option) => (
          <button
            key={option.value}  // Unique key for React list rendering
            // Apply selected class if this option matches current value
            className={`toggle-option ${value === option.value ? 'selected' : ''}`}
            // Call onChange handler with this option's value when clicked
            onClick={() => onChange(option.value, definition)}
          >
            {option.label}  {/* Display option label text */}
          </button>
        ))}
      </div>
    </div>
  );
};