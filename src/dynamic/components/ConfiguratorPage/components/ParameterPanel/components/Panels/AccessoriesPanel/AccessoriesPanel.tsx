import React from 'react';
import { ParameterDefinition } from '../../../types';
import { Dropdown } from '../../ParameterTypes/Dropdown/Dropdown';
import { BasePanel } from '../BasePanel/BasePanel';
import './AccessoriesPanel.css';

interface AccessoriesPanelProps {
  parameters: ParameterDefinition[];
  parameterValues: { [id: string]: string };
  onParameterChange: (value: any, definition: ParameterDefinition) => void;
  isActive?: boolean;
}

export const AccessoriesPanel: React.FC<AccessoriesPanelProps> = (props) => {
  const renderParameter = (param: ParameterDefinition) => {
    const value = props.parameterValues[param.id];
    
    return (
      <Dropdown
        definition={param}
        value={value}
        onChange={(newValue) => props.onParameterChange(newValue, param)}
      />
    );
  };

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
      className="hardware-panel"
      renderParameter={renderParameter}
      categories={categories}
    />
  );
};