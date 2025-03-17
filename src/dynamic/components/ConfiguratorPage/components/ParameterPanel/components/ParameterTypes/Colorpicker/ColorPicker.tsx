// Import React library for JSX and component functionality
import React, { useState, useEffect } from 'react';
// Import type definition for parameter configuration
import { ParameterDefinition } from '../../../types';
// Import hook to detect mobile screen sizes
import { useMediaQuery } from '@mantine/hooks'; 
// Import color-related utility functions and color palette data
import { formatColor, getColorLabel, colorPalette } from '../../../constants/colors';


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
  const isFrameColor = definition.id === '56fa370a-8b83-4bd6-9797-f1e0897faac3';
  const showColorWheel = !isFrameColor;

  // For frame color, use the numeric value directly
  const normalizedValue = isFrameColor ? value : (value.startsWith('0x') ? '#' + value.substring(2, 8) : value);

  const handleColorChange = (newColor: string, isCustomColor: boolean = false) => {
    if (isFrameColor) {
      // For frame color, pass the numeric value directly
      onChange(newColor, definition);
    } else {
      // For other colors, convert to ShapeDiver format
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
    <div className={`w-full bg-transparent rounded-xl backdrop-blur-md ${isMobile ? 'p-[0.1rem_0.2rem_0.1rem_0.2rem] flex-shrink-0 snap-start overflow-hidden' : ''}`}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-gray-500 text-sm">{definition.name}:</span>
      </div>

      <div className="grid grid-cols-6 gap-2">
        {availableColors.map((color) => (
          <button
            key={color.value}
            className="flex flex-col items-center gap-2 bg-transparent border-none cursor-pointer p-0.5"
            onClick={() => handleColorChange(color.value)}
            title={color.label}
          >
            <div 
              className={`w-full aspect-square rounded-full border-2 transition-all duration-200 ease-in-out
                ${normalizedValue === color.value 
                  ? 'border-white scale-110 shadow-[0_0_0_2px_rgba(0,0,0,0.2)]' 
                  : 'border-black/20 hover:border-black/40 hover:scale-110'}`} 
              style={{ backgroundColor: color.hex }} 
            />
          </button>
        ))}
        
        {showColorWheel && (
          <div className="flex flex-col items-center gap-2 bg-transparent border-none cursor-pointer p-0.5">
            <label className="relative block w-full aspect-square cursor-pointer">
              <div className="w-full aspect-square rounded-full border-2 border-white/40 shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-200 ease-in-out bg-gradient-to-br from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 animate-[rainbow-spin_8s_linear_infinite] bg-[length:200%_200%]" />
              <input
                type="color"
                className="absolute opacity-0 w-full h-full top-0 left-0 cursor-pointer"
                value={normalizedValue}
                onChange={(e) => handleColorChange(e.target.value, true)}
              />
            </label>
          </div>
        )}

        {lastCustomColor && showColorWheel && (
          <button
            className="flex flex-col items-center gap-2 bg-transparent border-none cursor-pointer p-0.5"
            onClick={() => handleColorChange(lastCustomColor)}
            title="Last Used Color"
          >
            <div 
              className={`w-full aspect-square rounded-full border-2 transition-all duration-200 ease-in-out
                ${normalizedValue === lastCustomColor 
                  ? 'border-white scale-110 shadow-[0_0_0_2px_rgba(0,0,0,0.2)]' 
                  : 'border-black/20 hover:border-black/40 hover:scale-110'}`}
              style={{ backgroundColor: lastCustomColor }} 
            />
          </button>
        )}
      </div>
    </div>
  );
};