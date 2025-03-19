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
import { LogoUpload } from '../../ParameterTypes/LogoUpload/LogoUpload';

// Define props interface for BasePanel component
interface ParameterCategory {
  title?: string;
  filter: (param: ParameterDefinition) => boolean;
  initialVisibility?: Record<string, boolean>;
  sortSubCategories?: (a: string, b: string) => number;
  sortParameters?: (a: ParameterDefinition, b: ParameterDefinition) => number;
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
    <div className="w-full">
      {renderParameter(param)}
      <div className="flex flex-row gap-2 mt-2 overflow-x-auto">
        {sortedParameters.map((p, index) => (
          <div
            key={p.id}
            className={`cursor-pointer px-2 py-1 text-sm ${p.id === param.id ? 'text-black font-medium' : 'text-gray-400'}`}
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
        case 'logoUpload':
            return (
                <LogoUpload
                    definition={param}
                    value={parameterValues[param.id] || ''}
                    onChange={onParameterChange}
                />
            );
        case 'colorWithPalette':
            return (
                <ColorPicker
                    definition={param}
                    value={value}
                    onChange={(newValue) => {
                        // If it's a palette color, it will be in the format '#RRGGBB'
                        // Convert to ShapeDiver format '0xRRGGBBff'
                        const shapeDiverValue = newValue.startsWith('#') 
                            ? '0x' + newValue.substring(1) + 'ff'
                            : newValue;
                        onParameterChange(shapeDiverValue, param);
                    }}
                    showPalette={true}
                />
            );
        default:
            console.warn(`Unknown parameter type: ${param.type} for parameter ${param.name}`);
            return null;
    }
  };

  // New function to render desktop categories
  const renderDesktopContent = () => {
    const [visibleSubCategories, setVisibleSubCategories] = useState<Record<string, boolean>>(() => {
        // Initialize with any default visible subcategories from all categories
        return categories.reduce((acc, category) => ({
            ...acc,
            ...category.initialVisibility
        }), {});
    });

    const toggleSubCategoryVisibility = (subCategory: string) => {
        setVisibleSubCategories(prevState => ({
            ...prevState,
            [subCategory]: !prevState[subCategory],
        }));
    };

    return (
        <div className="h-full w-full flex flex-col gap-4 overflow-x-hidden scrollbar-hide">
            {categories.map((category, index) => {
                const categoryParams = parameters.filter(category.filter);
                if (categoryParams.length === 0) return null;

                const paramsBySubCategory = categoryParams.reduce((acc, param) => {
                    const subCat = param.subCategory || 'Other';
                    if (!acc[subCat]) {
                        acc[subCat] = [];
                    }
                    acc[subCat].push(param);
                    return acc;
                }, {} as Record<string, ParameterDefinition[]>);

            // Sort parameters within each subCategory if sortParameters function exists
            if (category.sortParameters) {
                Object.values(paramsBySubCategory).forEach(params => {
                params.sort(category.sortParameters);
                });
            }

                const sortedSubCategories = Object.keys(paramsBySubCategory).sort(
                    category.sortSubCategories || ((a, b) => {
                        if (a === 'Other') return 1;
                        if (b === 'Other') return -1;
                        return a.localeCompare(b);
                    })
                );

                return (
                    <div key={index} className="w-full p-0 border-b border-white/20 last:border-b-0">
                        <h3 className=" text-black text-xl font-normal uppercase tracking-wider mb-4 mt-0 first:mt-1.5">
                            {category.title}
                        </h3>
                        {sortedSubCategories.map(subCategory => (
                            <div key={subCategory} className="bg-transparent rounded-lg">
                                <h4
                                    className={`text-sm ${
                                        visibleSubCategories[subCategory]
                                            ? 'bg-black/80 text-white'
                                            : 'bg-gray-bg text-gray/80 border border-white/15'
                                    } rounded-full tracking-wider font-medium cursor-pointer py-2.5 px-4 mb-2 mt-4 transition-colors duration-600`}
                                    onClick={() => toggleSubCategoryVisibility(subCategory)}
                                >
                                    {subCategory}
                                </h4>
                                <div
                                    className={`transition-all duration-600 ${
                                        visibleSubCategories[subCategory] 
                                        ? 'opacity-100 min-h-[135px] pb-5 z-10 overflow-visible w-full' 
                                        : 'max-h-0 overflow-hidden opacity-0'
                                    }`}
                                >
                                    {paramsBySubCategory[subCategory].map(param => (
                                        <div key={param.id} className="w-full py-2 relative mb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-white/20 last:after:hidden">
                                            {renderParameter(param)}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
      );
    };

    return (
        // Main container with dynamic classes for mobile/active states
        <div className={`h-full w-full max-w-full bg-transparent overflow-hidden pb-4 flex flex-col ${className} ${isMobile ? 'bg-transparent' : ''} ${isActive ? 'opacity-100' : 'opacity-80'}`}>
            {isMobile ? (
                // Mobile layout: scrollable list of parameter cards
                <div className="flex overflow-x-auto gap-2 px-4 pb-4 pt-0 snap-x snap-mandatory touch-pan-x scrollbar-none" ref={scrollContainerRef}>
                    {sortedParameters.map(param => (
                        // Container for each parameter with unique key
                        <div key={param.id} className="flex-none w-[90%] snap-center rounded-2xl p-2 px-4 mx-auto">
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
