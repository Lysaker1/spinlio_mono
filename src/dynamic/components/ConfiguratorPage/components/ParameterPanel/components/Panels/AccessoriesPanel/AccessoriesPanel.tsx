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
      title: "Water Bottles",
      filter: (param: ParameterDefinition) => 
        param.category === 'accessories' && 
        param.name.toLowerCase().includes('bottle')
    },
    {
      title: "Wheel Settings",
      filter: (param: ParameterDefinition) => 
        param.category === 'accessories' && 
        (param.name.toLowerCase().includes('spacing') || 
         param.name.toLowerCase().includes('rim'))
    },
    {
      title: "Other",
      filter: (param: ParameterDefinition) => 
        param.category === 'accessories' && 
        !param.name.toLowerCase().includes('bottle') &&
        !param.name.toLowerCase().includes('spacing') &&
        !param.name.toLowerCase().includes('rim')
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