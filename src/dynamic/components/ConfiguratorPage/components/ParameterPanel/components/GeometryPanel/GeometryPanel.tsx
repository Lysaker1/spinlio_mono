import React, { useState, useEffect } from 'react';
import { Slider, Select, SelectProps } from '@mantine/core';
import { ParameterDefinition } from '../../types';
import './GeometryPanel.css';

interface ParameterPanelGeometryProps {
  parameters: ParameterDefinition[];
  parameterValues: { [id: string]: string };
  handleParameterChange: (value: any, definition: ParameterDefinition) => void;
}

const ParameterPanelGeometry: React.FC<ParameterPanelGeometryProps> = ({
  parameters,
  parameterValues,
  handleParameterChange,
}) => {
  const [isDragging, setIsDragging] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownDirection, setDropdownDirection] = useState<string | null>(null);

  const useFloatValues = (parameterId: string) => {
    return [
      'f108eb45-6305-4ee7-8840-328004938ac6', // Seat tube angle
      'ac5a259d-c2b7-45c0-af16-4a5782b21f1c', // Head tube angle
    ].includes(parameterId);
  };

  const calculateSliderPosition = (value: number, min: number, max: number) => {
    return ((value - min) / (max - min)) * 100;
  };

  const handleSliderInteraction = (
    e: React.MouseEvent | React.TouchEvent,
    definition: ParameterDefinition
  ) => {
    const container = e.currentTarget as HTMLDivElement;
    const rect = container.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = x / rect.width;
    
    const range = definition.max! - definition.min!;
    const rawValue = definition.min! + (range * percentage);
    const value = useFloatValues(definition.id)
      ? Number(rawValue.toFixed(1))
      : Math.round(rawValue);

    handleParameterChange(value, definition);
  };

  const handleDropdownClick = (definitionId: string) => {
    // Check if dropdown should open upward or downward
    const dropdownElement = document.querySelector(`[data-dropdown-id="${definitionId}"]`);
    if (dropdownElement) {
      const rect = dropdownElement.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const shouldOpenUpward = spaceBelow < 200; // Adjust this value as needed

      setDropdownDirection(shouldOpenUpward ? 'up' : 'down');
    }
    setOpenDropdown(openDropdown === definitionId ? null : definitionId);
  };

  const handleOptionSelect = (value: string, definition: ParameterDefinition) => {
    handleParameterChange(value, definition);
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(null);
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (openDropdown && !(e.target as Element).closest('.custom-dropdown')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [openDropdown]);

  return (
    <div className="parameter-panel-parameters">
      {parameters.map((definition) => (
        <div key={definition.id} className="parameter-item">
          <div className="parameter-header">
            <span className="param-name">{definition.name}</span>
            {definition.type === 'slider' && (
              <span className="param-value">
                {useFloatValues(definition.id) 
                  ? Number(parameterValues[definition.id]).toFixed(1)
                  : Math.round(Number(parameterValues[definition.id]))}
                {definition.unit || ''}
              </span>
            )}
          </div>
          {definition.type === 'slider' && (
            <>
              <div 
                className="slider-container"
                onMouseDown={(e) => {
                  setIsDragging(definition.id);
                  handleSliderInteraction(e, definition);
                }}
                onMouseMove={(e) => {
                  if (isDragging === definition.id) {
                    handleSliderInteraction(e, definition);
                  }
                }}
                onTouchStart={(e) => {
                  setIsDragging(definition.id);
                  handleSliderInteraction(e, definition);
                }}
                onTouchMove={(e) => {
                  if (isDragging === definition.id) {
                    handleSliderInteraction(e, definition);
                  }
                }}
              >
                <div className="slider-track" />
                <div 
                  className={`slider-fill ${isDragging === definition.id ? 'active' : ''}`}
                  style={{
                    width: `${calculateSliderPosition(
                      Number(parameterValues[definition.id]),
                      definition.min!,
                      definition.max!
                    )}%`
                  }}
                />
                <div 
                  className={`slider-thumb ${isDragging === definition.id ? 'active' : ''}`}
                  style={{
                    left: `${calculateSliderPosition(
                      Number(parameterValues[definition.id]),
                      definition.min!,
                      definition.max!
                    )}%`
                  }}
                />
              </div>
              <div className="parameter-range">
                <span>{definition.min}{definition.unit || ''}</span>
                <span>{definition.max}{definition.unit || ''}</span>
              </div>
            </>
          )}
          {definition.type === 'dropdown' && (
            <div className="custom-dropdown">
              <div 
                className="dropdown-header"
                onClick={() => handleDropdownClick(definition.id)}
              >
                <span className="dropdown-value">
                  {definition.options?.find(opt => opt.value === parameterValues[definition.id])?.label}
                </span>
                <div className="dropdown-arrows">
                  <span className="arrow up">▲</span>
                  <span className="arrow down">▼</span>
                </div>
              </div>
              <div 
                className={`dropdown-options ${openDropdown === definition.id ? 'open' : ''} 
                  ${dropdownDirection === 'up' ? 'open-upward' : 'open-downward'}`}
                data-dropdown-id={definition.id}
              >
                {definition.options?.map(option => (
                  <div
                    key={option.value}
                    className={`dropdown-option ${parameterValues[definition.id] === option.value ? 'selected' : ''}`}
                    onClick={() => handleOptionSelect(option.value, definition)}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ParameterPanelGeometry;
