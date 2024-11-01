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
  // Helper function to render the correct component based on parameter type
  const renderParameter = (param: ParameterDefinition) => {
    switch (param.type) {
      case 'slider':
        return (
          <Slider
            definition={param}
            value={props.parameterValues[param.id]}
            onChange={props.onParameterChange}
          />
        );
      case 'dropdown':
        return (
          <Dropdown
            definition={param}
            value={props.parameterValues[param.id]}
            onChange={props.onParameterChange}
          />
        );
      default:
        console.warn(`Unknown parameter type: ${param.type}`);
        return null;
    }
  };

  return (
    <BasePanel
      {...props}
      className="geometry-panel"
      renderParameter={renderParameter}
    />
  );
};