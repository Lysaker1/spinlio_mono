import React, { ReactElement } from 'react';
import { ParameterDefinition } from '../../../types';
import { useMediaQuery } from '@mantine/hooks';
import { ShapeIcons } from './ShapeIcons';

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
        <div className="flex items-center justify-center w-full h-full">
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
        <div className={`flex items-center justify-center w-full h-full ${specialClass}`}>
          <img
            src={icon.src}
            alt={option.label}
            className="w-[90%] h-[90%] object-contain"
          />
        </div>
      );
    }

    // Handle direct SVG icons (original behavior)
    return (
      <div className="flex items-center justify-center w-full h-full">
        {icon as ReactElement}
      </div>
    );
  };

  return (
    <div className={`w-full mb-4`}>
      <div className="flex justify-between items-center py-3">
        <span className="text-gray-500 text-sm">{definition.name}:</span>
        <span className="text-gray text-sm bg-black/10 px-2 py-1 rounded-md">
          {definition.options?.find(opt => opt.value === value)?.label}
        </span>
      </div>

      <div className={`grid ${
        definition.name.toLowerCase().includes('mount') || 
        definition.name.toLowerCase().includes('drop') ||
        definition.name.toLowerCase().includes('paint')
          ? 'grid-cols-2 gap-3' 
          : 'grid-cols-3 gap-2'
      } w-full box-border justify-center`}>
        {definition.options?.map((option) => (
          <button
            key={option.value}
            className={`relative w-[90%] aspect-square flex flex-col items-center justify-center 
              ${value === option.value 
                ? 'border border-black bg-gray-bg' 
                : 'border border-gray'} 
              rounded-lg cursor-pointer transition-all duration-200 ease-in-out p-[0.35rem] 
              hover:bg-gray-bg/90`}
            onClick={() => onChange(option.value, definition)}
          >
            {renderIcon(option)}
          </button>
        ))}
      </div>
    </div>
  );
};