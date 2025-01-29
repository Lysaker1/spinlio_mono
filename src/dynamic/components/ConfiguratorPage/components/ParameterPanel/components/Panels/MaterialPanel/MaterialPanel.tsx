import React from 'react';
import { ParameterDefinition } from '../../../types';
import { BasePanel } from '../BasePanel/BasePanel';

interface MaterialPanelProps {
  parameters: ParameterDefinition[];
  parameterValues: { [id: string]: string };
  onParameterChange: (value: any, definition: ParameterDefinition) => void;
  isActive?: boolean;
  configuratorType?: 'default' | 'vulz' | 'stepthru' | 'bookshelf' | 'table' | 'sofa' | 'urban';
}

export const MaterialPanel: React.FC<MaterialPanelProps> = (props) => {
  const subCategoryOrder = {
    sofa: ['Frame', 'Fabric'],
    table: ['Frame', 'Planks'],
    bookshelf: ['Frame', 'Shelves']
  };

  const parameterOrder = {
    sofa: {
      'Frame': ['Frame Color', 'Frame Metallic Factor', 'Frame Roughness Factor'],
      'Fabric': ['Fabric Color', 'Fabric Roughness Factor']
    },
    table: {
      'Frame': ['Frame Color', 'Frame Metallic Factor', 'Frame Roughness Factor'],
      'Planks': ['Plank Color', 'Plank Metallic Factor', 'Plank Roughness Factor']
    },
    bookshelf: {
      'Frame': ['Frame Color', 'Frame Metallic Factor', 'Frame Roughness Factor'],
      'Shelves': ['Shelves Color', 'Shelves Metallic Factor', 'Shelves Roughness Factor']
    }
  };

  const getDefaultVisibility = (): Record<string, boolean> => {
    const visibility: Record<string, boolean> = {};
    switch (props.configuratorType) {
      case 'sofa':
        visibility['Fabric'] = true;
        break;
      case 'table':
      case 'bookshelf':
      default:
        visibility['Frame'] = true;
    }
    return visibility;
  };

  const categories = [{
    filter: (param: ParameterDefinition) => param.category === 'material',
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