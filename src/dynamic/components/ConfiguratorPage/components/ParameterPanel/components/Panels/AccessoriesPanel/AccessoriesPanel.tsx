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
  const brakeTypeValue = props.parameterValues['50033fab-4882-439f-8413-a68a99314ed2'];
  const isDiscBrake = brakeTypeValue === '1';

  const categories = [
    {
      title: "Frame Finish",
      filter: (param: ParameterDefinition) => 
        param.category === 'accessories' && 
        param.name.toLowerCase().includes('frame finish')
    },
    {
      title: "Brake Settings",
      filter: (param: ParameterDefinition) => {
        if (param.id === '50033fab-4882-439f-8413-a68a99314ed2') {
          return true;
        }
        
        if (param.name.toLowerCase().includes('disc brake mount')) {
          return isDiscBrake;
        }
        
        return param.category === 'accessories' && 
          (param.name.toLowerCase().includes('brake') ||
           param.name.toLowerCase().includes('disk brake'));
      }
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
        !param.name.toLowerCase().includes('brake') &&
        !param.name.toLowerCase().includes('disk brake') &&
        !param.name.toLowerCase().includes('spacing') &&
        !param.name.toLowerCase().includes('rim') &&
        !param.name.toLowerCase().includes('bottle')
    }
  ];

  const modifiedParameters = props.parameters.map(param => {
    if (param.name.toLowerCase().includes('disc brake mount') && !isDiscBrake) {
      return {
        ...param,
        disabled: true
      };
    }
    return param;
  });

  return (
    <BasePanel
      {...props}
      parameters={modifiedParameters}
      className="accessories-panel"
      categories={categories}
    />
  );
};