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
  const filteredParameters = props.parameters.map(param => {

    //Disable Brake Mount parameter when v-brake brake type selected
    if (param.name === 'Disc Brake Mount' && brakeTypeValue === '0') {
      return { ...param, disabled: true };
    }


    // Only include Brake Mount if Disc Brake is selected
    if (param.name === 'Brake Mount') {
      return brakeTypeValue === 'Disc Brake' ? param : null;
    }

    return param;
  }).filter(Boolean);

  
  const categories = [
    {
      filter: (param: ParameterDefinition) =>
        param.category === 'accessories',
      initialVisibility: {
        'Fittings': true,  // Set Fittings to be open by default
        'Wheels': true,   // Set Wheels to be closed by default

      },
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
      parameters={filteredParameters as ParameterDefinition[]}
      className="accessories-panel"
      categories={categories}
    />
  );
};
