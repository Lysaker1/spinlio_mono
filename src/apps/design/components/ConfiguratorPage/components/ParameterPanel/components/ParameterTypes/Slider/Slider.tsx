import React, { useState, useEffect } from 'react';
import { ParameterDefinition } from '../../../types';
import { useMediaQuery } from '@mantine/hooks';
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
    <div className={`w-full box-border ${isMobile ? 'bg-transparent backdrop-blur-md p-[0.1rem_0.2rem_0.1rem_0.2rem] relative' : ''}`}>
      <div className="flex justify-between items-center mb-0">
        <span>{definition.name}</span>
        <span className="text-black/90 text-sm py-1 px-2 bg-black/10 rounded pr-2 ml-auto text-center relative">
          {isFloat ? Number(value).toFixed(1) : Math.round(Number(value))}
          {definition.unit || ''}
        </span>
      </div>

      <div
        className="relative h-8 cursor-pointer w-[99%] box-border my-2"
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
        <div className="absolute top-1/2 w-full h-2 bg-black/10 rounded-md -translate-y-1/2">
          <div
            className={`absolute h-full ${isDragging ? 'bg-black' : 'bg-[#3E3E3E]'} rounded-2xl transition-width duration-100 ease-in-out`}
            style={{ width: `${calculatePosition(Number(value))}%` }}
          />
        </div>
        <div
          className={`absolute top-1/2 ${isDragging ? 'w-5 h-5 shadow-[0_0_0_0.25rem_rgba(0,0,0,0.349)]' : 'w-4 h-4'} bg-black rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-in-out`}
          style={{ left: `${calculatePosition(Number(value)) === 0 ? 3 : calculatePosition(Number(value)) - 2}%` }}
        />
      </div>

      <div className="flex justify-between mt-2.5 text-black text-xs">
        <span>{definition.min}{definition.unit || ''}</span>
        <span>{definition.max}{definition.unit || ''}</span>
      </div>
    </div>
  );
};