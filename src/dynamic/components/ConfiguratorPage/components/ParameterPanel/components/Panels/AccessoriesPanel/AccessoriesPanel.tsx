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
  const categories = [
    {
      title: " ",
      filter: (param: ParameterDefinition) => 
        param.category === 'accessories' && 
        (param.name.toLowerCase().includes('drop out') ||
         param.name.toLowerCase().includes('diskbrake') ||
         param.name.toLowerCase().includes('disk brake'))
    },
    {
      title: "Wheel Settings",
      filter: (param: ParameterDefinition) => 
        param.category === 'accessories' && 
        (param.name.toLowerCase().includes('spacing') || 
         param.name.toLowerCase().includes('rim') ||
         param.name.toLowerCase().includes('tire'))
    },
    {
      title: "Bottle Mounts",
      filter: (param: ParameterDefinition) => 
        param.category === 'accessories' && 
        param.name.toLowerCase().includes('bottle')
    },
    {
      title: "Other",
      filter: (param: ParameterDefinition) => 
        param.category === 'accessories' && 
        !param.name.toLowerCase().includes('drop out') &&
        !param.name.toLowerCase().includes('diskbrake') &&
        !param.name.toLowerCase().includes('disk brake') &&
        !param.name.toLowerCase().includes('spacing') &&
        !param.name.toLowerCase().includes('rim') &&
        !param.name.toLowerCase().includes('bottle')
    }
  ];

  return (
    <BasePanel
      {...props}
      className="accessories-panel"
      categories={categories}
    />
  );
};