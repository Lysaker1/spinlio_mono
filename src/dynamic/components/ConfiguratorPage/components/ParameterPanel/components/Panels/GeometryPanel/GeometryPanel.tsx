import React from 'react';
import { ParameterDefinition } from '../../../types';
import { BasePanel } from '../BasePanel/BasePanel';
import './GeometryPanel.css';

interface GeometryPanelProps {
  parameters: ParameterDefinition[];
  parameterValues: { [id: string]: string };
  onParameterChange: (value: any, definition: ParameterDefinition) => void;
  isActive?: boolean;
}

export const GeometryPanel: React.FC<GeometryPanelProps> = (props) => {
  // Define the exact order of subCategories and their parameters
  const subCategoryOrder = [
    'Top Tube',        // Length
    'Seat Tube',       // Length, Angle, Width
    'Head Tube',       // Angle, Length, Width
    'Rear Triangle'    // Chain Stay Length, Seat Stay Angle, Bottom Bracket Drop
  ];

  // Define parameter order within each subCategory
  const parameterOrder: Record<string, string[]> = {
    'Top Tube': ['Length'],
    'Seat Tube': ['Length', 'Angle', 'Width'],
    'Head Tube': ['Angle', 'Length', 'Width'],
    'Rear Triangle': ['Chain Stay Length', 'Seat Stay Angle', 'Bottom Bracket Drop']
  };

  const categories = [
    {
      filter: (param: ParameterDefinition) => 
        param.category === 'geometry',
      sortSubCategories: (a: string, b: string) => {
        // Get indices from the order array
        const indexA = subCategoryOrder.indexOf(a);
        const indexB = subCategoryOrder.indexOf(b);
        
        // If both categories are in the order array, sort by their position
        if (indexA !== -1 && indexB !== -1) {
          return indexA - indexB;
        }
        
        // If only one category is in the order array, it should come first
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
        
        // If neither category is in the order array and one is "Other", put it last
        if (a === 'Other') return 1;
        if (b === 'Other') return -1;
        
        // For any other categories, sort alphabetically
        return a.localeCompare(b);
      },
      // Add parameter sorting within subCategories
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
      className="geometry-panel"
      categories={categories}
    />
  );
};