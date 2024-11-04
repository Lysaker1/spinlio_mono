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
  const categories = [
    {
      title: "Frame Measurements",
      filter: (param: ParameterDefinition) => 
        param.category === 'geometry' && 
        param.type === 'slider' &&
        !param.name.toLowerCase().includes('angle')
    },
    {
      title: "Angles",
      filter: (param: ParameterDefinition) => 
        param.category === 'geometry' && 
        param.name.toLowerCase().includes('angle')
    },
    {
      title: "Other Settings",
      filter: (param: ParameterDefinition) => 
        param.category === 'geometry' && 
        !param.name.toLowerCase().includes('angle') &&
        param.type !== 'slider'
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