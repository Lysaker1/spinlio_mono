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
    // Color and Finish first
    {
      title: "Frame Color & Finish",
      filter: (param: ParameterDefinition) => 
        (param.category === 'tubing' && param.type === 'color' ) || 
        (param.category === 'tubing' && param.name.toLowerCase().includes('frame finish'))
    },
    // All Top Tube parameters under one header
    {
      title: "Top Tube",
      filter: (param: ParameterDefinition) => 
        param.category === 'tubing' && 
        param.name.toLowerCase().includes('top tube') &&
        (param.type === 'slider' || param.type === 'grid')
    },
    // All Down Tube parameters under one header
    {
      title: "Down Tube",
      filter: (param: ParameterDefinition) => 
        param.category === 'tubing' && 
        param.name.toLowerCase().includes('down tube') &&
        (param.type === 'slider' || param.type === 'grid')
    },
    // Head Tube last
    {
      title: "Head Tube",
      filter: (param: ParameterDefinition) => 
        param.category === 'tubing' && 
        param.name.toLowerCase().includes('head tube')
    },
    // Other tubing parameters if any
    {
      title: "Other Tubing",
      filter: (param: ParameterDefinition) => 
        param.category === 'tubing' && 
        !param.name.toLowerCase().includes('top tube') &&
        !param.name.toLowerCase().includes('down tube') &&
        !param.name.toLowerCase().includes('head tube') &&
        !param.name.toLowerCase().includes('frame finish') &&
        param.type !== 'color'
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