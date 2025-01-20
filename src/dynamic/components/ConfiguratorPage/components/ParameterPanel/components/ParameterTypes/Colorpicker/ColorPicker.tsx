// Import React library for JSX and component functionality
import React, { useState, useEffect } from 'react';
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
  definition: ParameterDefinition;
  value: string;
  onChange: (value: any, definition: ParameterDefinition) => void;
  showPalette?: boolean;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  definition,
  value = '0x000000ff',
  onChange,
  showPalette = false
}) => {
  const [lastCustomColor, setLastCustomColor] = useState<string | null>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Determine if this is the frame color parameter
  const isFrameColor = definition.name.toLowerCase().includes('frame');
  const showColorWheel = !isFrameColor;

  // Handle value formatting based on parameter type
  const normalizedValue = isFrameColor 
    ? value // Keep numeric value for frame color
    : (value && value.startsWith('0x'))
      ? '#' + value.substring(2, 8)
      : value || '#000000';

  const handleColorChange = (newColor: string, isCustomColor: boolean = false) => {
    if (isFrameColor) {
      // For frame color, pass the numeric value directly
      onChange(newColor, definition);
    } else {
      // For wheel color, handle hex values
      const shapeDiverColor = newColor.startsWith('#')
        ? '0x' + newColor.substring(1) + 'ff'
        : newColor;
      
      if (isCustomColor) {
        setLastCustomColor(newColor);
      }
      
      onChange(shapeDiverColor, definition);
    }
  };

  const availableColors = Object.entries(colorPalette).map(([value, color]) => ({
    value: isFrameColor ? value : color.hex,
    hex: color.hex,
    label: color.label
  }));

  return (
    <div className="parameter-card">
      <div className="parameter-header">
        <span className="parameter-label">{definition.name}</span>
      </div>

      <div className="color-options-row">
        {availableColors.map((color) => (
          <button
            key={color.value}
            className={`color-option ${normalizedValue === color.value ? 'selected' : ''}`}
            onClick={() => handleColorChange(color.value)}
            title={color.label}
          >
            <div className="color-dot" style={{ backgroundColor: color.hex }} />
          </button>
        ))}
        
        {showColorWheel && (
          <div className="color-option">
            <label className="color-wheel-label">
              <div className="color-dot rainbow-gradient" />
              <input
                type="color"
                className="color-wheel-input"
                value={normalizedValue}
                onChange={(e) => handleColorChange(e.target.value, true)}
              />
            </label>
          </div>
        )}

        {lastCustomColor && showColorWheel && (
          <button
            className={`color-option ${normalizedValue === lastCustomColor ? 'selected' : ''}`}
            onClick={() => handleColorChange(lastCustomColor)}
            title="Last Used Color"
          >
            <div className="color-dot" style={{ backgroundColor: lastCustomColor }} />
          </button>
        )}
      </div>
    </div>
  );
};