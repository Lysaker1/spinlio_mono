// Import React library for JSX and component functionality
import React from 'react';
// Import type definition for parameter configuration
import { ParameterDefinition } from '../../../types';
// Import hook to detect mobile screen sizes
import { useMediaQuery } from '@mantine/hooks'; 
// Import color-related utility functions and color palette data
import { formatColor, getColorLabel, colorPalette } from '../../../constants/colors';
// Import component-specific styles
import './ColorPicker.css';

// Define props interface for ColorPicker component
interface ColorPickerProps {
  definition: ParameterDefinition;  // Parameter configuration object
  value: string;                    // Currently selected color value
  onChange: (value: any, definition: ParameterDefinition) => void; // Handler for color changes
}

// Define ColorPicker component with TypeScript typing
export const ColorPicker: React.FC<ColorPickerProps> = ({
  definition,
  value,
  onChange,
}) => {
  // Check if viewport is mobile-sized using media query
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Changed to show all colors instead of limiting to 8
  const availableColors = Object.entries(colorPalette)
    .map(([value, color]) => ({
      value,
      hex: color.hex,
      label: color.label
    }));

  return (
    // Main container with conditional mobile class
    <div className={`parameter-card ${isMobile ? 'mobile' : ''}`}>
      {/* Header section showing parameter name */}
      <div className="parameter-header">
        <span className="parameter-label">{definition.name}</span>
      </div>

      {/* Grid of color options */}
      <div className="color-options-row">
        {/* Map through available colors to create color buttons */}
        {availableColors.map((color) => (
          <button
            key={color.value}
            className={`color-option ${value === color.value ? 'selected' : ''}`}
            onClick={() => onChange(color.value, definition)}
            title={color.label}
          >
            {/* Color preview dot */}
            <div 
              className="color-dot"
              style={{ backgroundColor: color.hex }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};