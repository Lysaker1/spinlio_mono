import React, { useState, useEffect } from 'react';
import { ParameterDefinition } from '../../../types';
import { useMediaQuery } from '@mantine/hooks';
import './Slider.css';

interface SliderProps {
  definition: ParameterDefinition;
  value: string;
  onChange: (value: any, definition: ParameterDefinition) => void;
}

export const Slider: React.FC<SliderProps> = ({
  definition,
  value,
  onChange,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Check if initial value is a float
  const isFloat = Number(definition.value).toString().includes('.');

  const calculatePosition = (val: number) => {
    return ((val - definition.min!) / (definition.max! - definition.min!)) * 100;
  };

  const handleInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    if (isMobile) {
      e.preventDefault();
      e.stopPropagation();
    }

    const container = e.currentTarget as HTMLDivElement;
    const rect = container.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = x / rect.width;

    const range = definition.max! - definition.min!;
    const rawValue = definition.min! + (range * percentage);

    // Use float values only if the initial value was a float
    const newValue = isFloat ? Number(rawValue.toFixed(1)) : Math.round(rawValue);
    onChange(newValue, definition);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleTouchEnd = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div className={`slider-container ${isMobile ? 'mobile' : ''}`}>
      <div className="slider-header">
        <span className="slider-label">{definition.name}</span>
        <span className="slider-value">
          {isFloat ? Number(value).toFixed(1) : Math.round(Number(value))}
          {definition.unit || ''}
        </span>
      </div>

      <div
        className="slider-control"
        onMouseDown={(e) => {
          setIsDragging(true);
          handleInteraction(e);
        }}
        onMouseMove={(e) => isDragging && handleInteraction(e)}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleInteraction(e);
        }}
        onTouchMove={(e) => isDragging && handleInteraction(e)}
      >
        <div className="slider-track">
          <div
            className={`slider-fill ${isDragging ? 'active' : ''}`}
            style={{ width: `${calculatePosition(Number(value))}%` }}
          />
        </div>
        <div
          className={`slider-thumb ${isDragging ? 'active' : ''}`}
          style={{ left: `${calculatePosition(Number(value)) - 1}%` }}
        />
      </div>

      <div className="slider-range">
        <span>{definition.min}{definition.unit || ''}</span>
        <span>{definition.max}{definition.unit || ''}</span>
      </div>
    </div>
  );
};
