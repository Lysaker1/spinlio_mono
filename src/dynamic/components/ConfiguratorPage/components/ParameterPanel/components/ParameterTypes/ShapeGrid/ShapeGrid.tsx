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
  icon?: ReactElement;
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

    // Handle new SVG icon type
    if (typeof icon === 'object' && 'type' in icon && icon.type === 'svg' && 'icon' in icon) {
      return (
        <div className="shape-icon">
          {icon.icon}
        </div>
      );
    }

    // Handle image type icons
    if (typeof icon === 'object' && 'type' in icon && icon.type === 'image' && 'src' in icon) {
      const isMount = definition.name.toLowerCase().includes('mount');
      const isDropout = definition.name.toLowerCase().includes('drop out');
      const specialClass = isMount ? 'mount-image' : isDropout ? 'dropout-image' : '';

      return (
        <div className={`shape-icon ${specialClass}`}>
          <img
            src={icon.src}
            alt={option.label}
            className="shape-icon-image"
          />
        </div>
      );
    }

    // Handle direct SVG icons (original behavior)
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

      <div className={`shape-grid ${
        definition.name.toLowerCase().includes('mount') || 
        definition.name.toLowerCase().includes('drop') ||
        definition.name.toLowerCase().includes('paint')
          ? 'two-columns' 
          : ''
      }`}>
        {definition.options?.map((option) => (
          <button
            key={option.value}
            className={`shape-option ${value === option.value ? 'selected' : ''}`}
            onClick={() => onChange(option.value, definition)}
          >
            {renderIcon(option)}
          </button>
        ))}
      </div>
    </div>
  );
};
