import React, { ReactElement } from 'react';
import { ParameterDefinition } from '../../../types';
import { useMediaQuery } from '@mantine/hooks';
import { ShapeIcons } from './ShapeIcons';
import './ShapeGrid.css';

interface ShapeGridProps {
  definition: ParameterDefinition;
  value: string;
  onChange: (value: any, definition: ParameterDefinition) => void;
}

interface IconType {
  type?: string;
  src?: string;
}

export const ShapeGrid = ({
  definition,
  value,
  onChange,
}: ShapeGridProps): ReactElement => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const renderIcon = (option: { label: string; value: string }): ReactElement | null => {
    const icon = ShapeIcons[option.label.replace(' mount', ' Mount') as keyof typeof ShapeIcons] as IconType | ReactElement;
    
    if (!icon) return null;
  
    // Check if icon is an image type
    if (typeof icon === 'object' && 'type' in icon && icon.type === 'image' && 'src' in icon) {
      return (
        <div className="shape-icon">
          <img 
            src={icon.src}
            alt={option.label}
            className="shape-icon-image"
          />
        </div>
      );
    }
  
    // Handle SVG icons (original behavior)
    return (
      <div className="shape-icon">
        {icon as ReactElement}
      </div>
    );
  };

  return (
    <div className={`parameter-card ${isMobile ? 'mobile' : ''}`}>
      <div className="parameter-header">
        <span className="parameter-label">{definition.name}</span>
        <span className="selected-shape">
          {definition.options?.find(opt => opt.value === value)?.label}
        </span>
      </div>

      <div className={`shape-grid ${definition.name.toLowerCase().includes('mount') ? 'two-columns' : ''}`}>
        {definition.options?.map((option) => (
          <button
            key={option.value}
            className={`shape-option ${value === option.value ? 'selected' : ''}`}
            onClick={() => onChange(option.value, definition)}
          >
            {renderIcon(option)}
            <span className="shape-label">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};