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
      title: "Top Tube",
      filter: (param: ParameterDefinition) => 
        param.category === 'tubing' && 
        param.name.toLowerCase().includes('top tube')
    },
    {
      title: "Down Tube",
      filter: (param: ParameterDefinition) => 
        param.category === 'tubing' && 
        param.name.toLowerCase().includes('down tube')
    },
    {
      title: "Head Tube",
      filter: (param: ParameterDefinition) => 
        param.category === 'tubing' && 
        param.name.toLowerCase().includes('head tube')
    },
    {
      title: "Other Tubing",
      filter: (param: ParameterDefinition) => 
        param.category === 'tubing' && 
        !param.name.toLowerCase().includes('top tube') &&
        !param.name.toLowerCase().includes('down tube') &&
        !param.name.toLowerCase().includes('head tube')
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