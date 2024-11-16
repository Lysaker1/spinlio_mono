import React, { useState, useRef } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { getColorFromValue, colorPalette } from '../../../constants/colors'; // Import colorPalette
import { ParameterDefinition } from '../../../types';
import { Slider } from '../../ParameterTypes/Slider/Slider';
import { Dropdown } from '../../ParameterTypes/Dropdown/Dropdown';
import { ColorPicker } from '../../ParameterTypes/Colorpicker/ColorPicker';
import { ShapeGrid } from '../../ParameterTypes/ShapeGrid/ShapeGrid';
import { Checkbox } from '../../ParameterTypes/Checkbox/Checkbox';
import { FileInput } from '../../ParameterTypes/FileInput/FileInput';
import { GraphMapper } from '../../ParameterTypes/GraphMapper/GraphMapper';
import './BasePanel.css';

// Define props interface for BasePanel component
interface ParameterCategory {
  title: string;
  filter: (param: ParameterDefinition) => boolean;
  isAdvanced?: boolean;
}

interface BasePanelProps {
  parameters: ParameterDefinition[];
  parameterValues: { [id: string]: string };
  onParameterChange: (value: any, definition: ParameterDefinition) => void;
  isActive?: boolean;
  className?: string;
  categories: ParameterCategory[];
  advancedControls?: {
    showAdvanced: boolean;
    setShowAdvanced: (show: boolean) => void;
    advancedTitle: React.ReactNode;
  };
}

// Main panel component that handles both mobile and desktop layouts
export const BasePanel: React.FC<BasePanelProps> = ({
  parameters,
  parameterValues,
  onParameterChange,
  isActive = false,
  className = '',
  categories,
  advancedControls
}) => {
  const [activeParamIndex, setActiveParamIndex] = useState(0);
  // Check if viewport is mobile sized
  const isMobile = useMediaQuery('(max-width: 768px)');
  // Sort parameters alphabetically by name
  const sortedParameters = parameters.sort((a, b) => a.name.localeCompare(b.name));
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleParameterClick = (index: number) => {
    setActiveParamIndex(index);
    
    const container = scrollContainerRef.current;
    if (!container) return;
    
    // Get all cards and calculate the scroll position
    const cards = container.getElementsByClassName('parameter-card');
    if (cards.length <= index) return;

    // Calculate the exact scroll position
    const card = cards[index] as HTMLElement;
    const containerWidth = container.offsetWidth;
    const cardWidth = card.offsetWidth;
    
    // Center the card in the container
    const scrollPosition = card.offsetLeft - (containerWidth - cardWidth) / 2;
    
    // Smooth scroll to the position
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  };

  const renderMobileParameter = (param: ParameterDefinition) => (
    <div className="parameter-container">
      {renderParameter(param)}
      <div className="parameter-navigation">
        {sortedParameters.map((p, index) => (
          <div
            key={p.id}
            className={`parameter-name ${p.id === param.id ? 'active' : ''}`}
            onClick={() => handleParameterClick(index)}
          >
            {p.name}
          </div>
        ))}
      </div>
    </div>
  );

  // Centralized parameter rendering logic
  const renderParameter = (param: ParameterDefinition) => {
    // If parameter is disabled, don't render it
    if (param.disabled) {
      return null;
    }

    const value = parameterValues[param.id];

    // Special case for "Tube Color"
    if (param.id === '56fa370a-8b83-4bd6-979f-1e0897faac3') { // Use the correct ID for the Tube Color parameter
        const colorValue = getColorFromValue(value); // Get the hex color based on the value
        return (
            <ColorPicker
                definition={param}
                value={colorValue} // Use the hex color
                onChange={(newValue) => {
                    // Map the new color back to the corresponding value
                    const newColorValue = Object.keys(colorPalette).find(key => colorPalette[key].hex === newValue) || '5'; // Default to '5' if not found
                    onParameterChange(newColorValue, param);
                }}
            />
        );
    }

    switch(param.type) {
        case 'slider':
            return (
                <Slider
                    definition={param}
                    value={value}
                    onChange={(newValue) => onParameterChange(newValue, param)}
                />
            );
        case 'dropdown':
            return (
                <Dropdown
                    definition={param}
                    value={value}
                    onChange={(newValue) => onParameterChange(newValue, param)}
                />
            );
        case 'color':
            return (
                <ColorPicker
                    definition={param}
                    value={value}
                    onChange={(newValue) => onParameterChange(newValue, param)}
                />
            );
        case 'grid':
            return (
                <ShapeGrid
                    definition={param}
                    value={value}
                    onChange={(newValue) => onParameterChange(newValue, param)}
                />
            );
        case 'checkbox':
            return (
                <Checkbox
                    definition={param}
                    value={value}
                    onChange={(newValue) => onParameterChange(newValue, param)}
                />
            );
        case 'fileinput':
            return (
                <FileInput
                    key={param.id}
                    definition={param}
                    value={parameterValues[param.id] || ''}
                    onChange={onParameterChange}
                />
            );
        case 'graphmapper':
            return (
                <GraphMapper
                    key={param.id}
                    definition={param}
                    value={parameterValues[param.id] || ''}
                    onChange={onParameterChange}
                />
            );
        default:
            console.warn(`Unknown parameter type: ${param.type} for parameter ${param.name}`);
            return null;
    }
  };

  // New function to render desktop categories
  const renderDesktopContent = () => {
    const regularCategories = categories.filter(cat => !cat.isAdvanced);
    const advancedCategory = categories.find(cat => cat.isAdvanced);

    return (
      <div className="parameter-list">
        {/* Regular categories */}
        {regularCategories.map((category, index) => {
          const categoryParams = parameters.filter(category.filter);
          if (categoryParams.length === 0) return null;

          return (
            <div key={index} className="parameter-section">
              <h3 className="section-title">{category.title}</h3>
              <div className="category-items">
                {categoryParams.map(param => (
                  <div key={param.id} className="parameter-item">
                    {renderParameter(param)}
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Advanced section */}
        {advancedCategory && (
          <div className="advanced-section">
            {advancedControls?.advancedTitle}
            {advancedControls?.showAdvanced && (
              <div className="parameter-section">
                <div className="category-items">
                  {parameters.filter(advancedCategory.filter).map(param => (
                    <div key={param.id} className="parameter-item">
                      {renderParameter(param)}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    // Main container with dynamic classes for mobile/active states
    <div className={`panel ${className} ${isMobile ? 'mobile' : ''} ${isActive ? 'active' : ''}`}>
      {isMobile ? (
        // Mobile layout: scrollable list of parameter cards
        <div className="parameter-scroll" ref={scrollContainerRef}>
          {sortedParameters.map(param => (
            // Container for each parameter with unique key
            <div key={param.id} className="parameter-card">
              {renderMobileParameter(param)}
            </div>
          ))}
        </div>
      ) : (
        // Desktop layout: either custom content or standard parameter list
        renderDesktopContent()
      )}
    </div>
  );
};