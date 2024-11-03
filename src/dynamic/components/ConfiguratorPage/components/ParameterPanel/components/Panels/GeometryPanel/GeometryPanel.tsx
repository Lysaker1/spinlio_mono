import React from 'react';
import { ParameterDefinition } from '../../../types';
import { Slider } from '../../ParameterTypes/Slider/Slider';
import { Dropdown } from '../../ParameterTypes/Dropdown/Dropdown';
import { BasePanel } from '../BasePanel/BasePanel';
import './GeometryPanel.css';

interface GeometryPanelProps {
  parameters: ParameterDefinition[];
  parameterValues: { [id: string]: string };
  onParameterChange: (value: any, definition: ParameterDefinition) => void;
  isActive?: boolean;
}

export const GeometryPanel: React.FC<GeometryPanelProps> = (props) => {
  const renderParameter = (param: ParameterDefinition) => {
    const value = props.parameterValues[param.id];
    
    switch (param.type) {
      case 'slider':
        return (
          <Slider
            definition={param}
            value={value}
            onChange={(newValue) => props.onParameterChange(newValue, param)}
          />
        );
      case 'dropdown':
        return (
          <Dropdown
            definition={param}
            value={value}
            onChange={(newValue) => props.onParameterChange(newValue, param)}
          />
        );
      default:
        console.warn(`Unknown parameter type: ${param.type}`);
        return null;
    }
  };

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
        param.type === 'dropdown'
    }
  ];

  return (
    <BasePanel
      {...props}
      className="geometry-panel"
      renderParameter={renderParameter}
      categories={categories}
    />
  );
};