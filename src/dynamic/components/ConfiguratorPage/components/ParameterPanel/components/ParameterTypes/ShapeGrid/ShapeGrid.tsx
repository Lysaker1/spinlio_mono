// Import React library for JSX and component functionality
import React from 'react';
// Import ParameterDefinition type from parent directory
import { ParameterDefinition } from '../../../types';
// Import useMediaQuery hook from Mantine for responsive design
import { useMediaQuery } from '@mantine/hooks';
// Import ShapeIcons component containing shape icon definitions
import { ShapeIcons } from './ShapeIcons';
// Import component-specific styles
import './ShapeGrid.css';

// Define props interface for ShapeGrid component
interface ShapeGridProps {
  definition: ParameterDefinition; // Parameter configuration object
  value: string; // Currently selected value
  onChange: (value: any, definition: ParameterDefinition) => void; // Callback for value changes
}

// Define ShapeGrid component with TypeScript typing
export const ShapeGrid: React.FC<ShapeGridProps> = ({
  definition,
  value,
  onChange,
}) => {
  // Check if viewport is mobile-sized using media query
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    // Main container with conditional mobile class
    <div className={`parameter-card ${isMobile ? 'mobile' : ''}`}>
      {/* Header section containing parameter name and selected value */}
      <div className="parameter-header">
        {/* Display parameter name */}
        <span className="parameter-label">{definition.name}</span>
        {/* Display currently selected shape label */}
        <span className="selected-shape">
          {definition.options?.find(opt => opt.value === value)?.label}
        </span>
      </div>

      {/* Grid container for shape options */}
      <div className="shape-grid">
        {/* Map through available options to create selection buttons */}
        {definition.options?.map((option) => (
          <button
            key={option.value} // Unique key for React rendering
            className={`shape-option ${value === option.value ? 'selected' : ''}`} // Dynamic classes based on selection
            onClick={() => onChange(option.value, definition)} // Handle selection change
          >
            {/* Container for shape icon */}
            <div className="shape-icon">
              {/* Render corresponding icon from ShapeIcons object */}
              {ShapeIcons[option.label as keyof typeof ShapeIcons]}
            </div>
            {/* Display shape label */}
            <span className="shape-label">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};