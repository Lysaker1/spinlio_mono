import React from 'react';
import { ParameterDefinition } from '../../../types';
import { BasePanel } from '../BasePanel/BasePanel';
import './TubingPanel.css';

interface TubingPanelProps {
  parameters: ParameterDefinition[];
  parameterValues: { [id: string]: string };
  onParameterChange: (value: any, definition: ParameterDefinition) => void;
  isActive?: boolean;
}

export const TubingPanel: React.FC<TubingPanelProps> = (props) => {
  const categories = [
    {
      title: "Tubing Shapes",
      filter: (param: ParameterDefinition) => 
        param.category === 'tubing' && 
        param.name.toLowerCase().includes('shape')
    },
    {
      title: "Colors",
      filter: (param: ParameterDefinition) => 
        param.category === 'tubing' && 
        (param.name.toLowerCase().includes('color') || 
         param.name.toLowerCase().includes('colour'))
    },
    {
      title: "Finish",
      filter: (param: ParameterDefinition) => 
        param.category === 'tubing' && 
        (param.name.toLowerCase().includes('metallic') || 
         param.name.toLowerCase().includes('roughness'))
    },
    {
      title: "Other",
      filter: (param: ParameterDefinition) => 
        param.category === 'tubing' && 
        !param.name.toLowerCase().includes('shape') &&
        !param.name.toLowerCase().includes('color') &&
        !param.name.toLowerCase().includes('colour') &&
        !param.name.toLowerCase().includes('metallic') &&
        !param.name.toLowerCase().includes('roughness')
    }
  ];

  return (
    <BasePanel
      {...props}
      className="tubing-panel"
      categories={categories}
    />
  );
};