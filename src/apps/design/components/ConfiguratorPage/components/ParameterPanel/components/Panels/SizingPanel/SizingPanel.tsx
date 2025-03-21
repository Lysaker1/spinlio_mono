import React from 'react';
import { ParameterDefinition } from '../../../types';
import { BasePanel } from '../BasePanel/BasePanel';

interface SizingPanelProps {
  parameters: ParameterDefinition[];
  parameterValues: { [id: string]: string };
  onParameterChange: (value: any, definition: ParameterDefinition) => void;
  isActive?: boolean;
  configuratorType?: 'default' | 'vulz' | 'stepthru' | 'bookshelf' | 'table' | 'sofa' | 'urban';
}

export const SizingPanel: React.FC<SizingPanelProps> = (props) => {
  const subCategoryOrder = {
    sofa: ['General Sizing', 'Legs', 'Cushions'],
    table: ['General Sizing', 'Plank Size'],
    bookshelf: ['General Sizing', 'Legs', 'Shelves']
  };

  const parameterOrder = {
    sofa: {
      'General Sizing': ['Number of seats', 'Seat size', 'Back Height', 'Sides Height'],
      'Legs': ['Leg Height', 'Leg thickness'],
      'Cushions': ['Side cushion thickness']
    },
    table: {
      'General Sizing': ['Length', 'Width', 'Height'],
      'Plank Size': ['Plank Thickness', 'Plank Width']
    },
    bookshelf: {
      'General Sizing': ['Length', 'Width', 'Height'],
      'Legs': ['Leg Height'],
      'Shelves': ['Shelf Thickness', 'Number of Shelves']
    }
  };

  const getDefaultVisibility = (): Record<string, boolean> => {
    const visibility: Record<string, boolean> = {};
    switch (props.configuratorType) {
      case 'sofa':
        visibility['General'] = true;
        break;
      case 'table':
      case 'bookshelf':
      default:
        visibility['General Sizing'] = true;
    }
    return visibility;
  };

  const categories = [{
    filter: (param: ParameterDefinition) => param.category === 'sizing',
    initialVisibility: getDefaultVisibility(),
    sortSubCategories: (a: string, b: string) => {
      const order = props.configuratorType ? subCategoryOrder[props.configuratorType as keyof typeof subCategoryOrder] : subCategoryOrder.bookshelf;
      const indexA = order.indexOf(a);
      const indexB = order.indexOf(b);
      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
      return a.localeCompare(b);
    },
    sortParameters: (a: ParameterDefinition, b: ParameterDefinition) => {
      if (!a.subCategory || !b.subCategory) return 0;
      const order = props.configuratorType ? parameterOrder[props.configuratorType as keyof typeof parameterOrder] : parameterOrder.bookshelf;
      const orderArray = order[a.subCategory as keyof typeof order];
      if (!orderArray) return 0;
      const indexA = orderArray.indexOf(a.name);
      const indexB = orderArray.indexOf(b.name);
      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
      return 0;
    }
  }];

  return (
    <BasePanel
      {...props}
      className="panel"
      categories={categories}
    />
  );
}; 