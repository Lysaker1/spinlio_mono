import React from 'react';
import { ParameterDefinition } from '../../../types';
import { BasePanel } from '../BasePanel/BasePanel';
import './AccessoriesPanel.css';

interface AccessoriesPanelProps {
  parameters: ParameterDefinition[];
  parameterValues: { [id: string]: string };
  onParameterChange: (value: any, definition: ParameterDefinition) => void;
  isActive?: boolean;
}

export const AccessoriesPanel: React.FC<AccessoriesPanelProps> = (props) => {
  // Define the exact order of subCategories and their parameters
  const subCategoryOrder = [
    'Fittings',        // Brake Type, Brake Mount (conditional), Dropouts
    'Wheels',          // Size, Colour, Rim Width, Rim Depth, Spokes, Front/Rear Spacing
    'Forks',           // Crown Width, Wheel Spacing
    'Water Bottles'    // Seat Tube, Down Tube, Placement
  ];

  // Define parameter order within each subCategory
  const parameterOrder: Record<string, string[]> = {
    'Fittings': ['Brake Type', 'Brake Mount', 'Dropouts'],
    'Wheels': [
      'Size',
      'Colour',
      'Rim Width',
      'Rim Depth',
      'Spokes',
      'Front Wheel Spacing',
      'Rear Wheel Spacing'
    ],
    'Forks': ['Crown Width', 'Wheel Spacing'],
    'Water Bottles': ['Seat Tube', 'Down Tube', 'Placement']
  };

  // Get brake type value
  const brakeTypeId = '50033fab-4882-439f-8413-a68a99314ed2';
  const brakeTypeValue = props.parameterValues[brakeTypeId];

  // Filter parameters to exclude Brake Mount option if not disc brake
  const filteredParameters = props.parameters.filter(param => {
    // Only include Brake Mount if Disc Brake is selected
    if (param.name === 'Brake Mount') {
      return brakeTypeValue === 'Disc Brake'; // Adjust this value to match your actual Disc Brake value
    }
    return true;
  });

  const categories = [
    {
      filter: (param: ParameterDefinition) => 
        param.category === 'accessories',
      sortSubCategories: (a: string, b: string) => {
        const indexA = subCategoryOrder.indexOf(a);
        const indexB = subCategoryOrder.indexOf(b);
        
        if (indexA !== -1 && indexB !== -1) {
          return indexA - indexB;
        }
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
        if (a === 'Other') return 1;
        if (b === 'Other') return -1;
        return a.localeCompare(b);
      },
      sortParameters: (a: ParameterDefinition, b: ParameterDefinition) => {
        if (!a.subCategory || !b.subCategory) return 0;
        
        const orderArray = parameterOrder[a.subCategory];
        if (!orderArray) return 0;

        const indexA = orderArray.indexOf(a.name);
        const indexB = orderArray.indexOf(b.name);

        if (indexA !== -1 && indexB !== -1) {
          return indexA - indexB;
        }
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
        
        return 0;
      }
    }
  ];

  return (
    <BasePanel
      {...props}
      parameters={filteredParameters}
      className="accessories-panel"
      categories={categories}
    />
  );
};