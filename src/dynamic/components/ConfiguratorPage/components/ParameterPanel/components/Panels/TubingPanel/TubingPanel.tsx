import React from 'react';
import { ParameterDefinition } from '../../../types';
import { ColorPicker } from '../../ParameterTypes/Colorpicker/ColorPicker';
import { ShapeGrid } from '../../ParameterTypes/ShapeGrid/ShapeGrid';
import { Slider } from '../../ParameterTypes/Slider/Slider';
import { BasePanel } from '../BasePanel/BasePanel';
import './TubingPanel.css';
interface TubingPanelProps {
  parameters: ParameterDefinition[];
  parameterValues: { [id: string]: string };
  onParameterChange: (value: any, definition: ParameterDefinition) => void;
  isActive?: boolean;
}

export const TubingPanel: React.FC<TubingPanelProps> = (props) => {
  const renderParameter = (param: ParameterDefinition) => {
    const value = props.parameterValues[param.id];
    
    switch(param.type) {
      case 'color':
        return (
          <ColorPicker
            definition={param}
            value={value}
            onChange={(newValue) => props.onParameterChange(newValue, param)}
          />
        );
      case 'dropdown':
        return (
          <ShapeGrid
            definition={param}
            value={value}
            onChange={(newValue) => props.onParameterChange(newValue, param)}
          />
        );
      case 'slider':
        return (
          <Slider
            definition={param}
            value={value}
            onChange={(newValue) => props.onParameterChange(newValue, param)}
          />
        );
      default:
        return null;
    }
  };

  const categories = [
    {
      title: "Tubing Shapes",
      filter: (param: ParameterDefinition) => 
        param.category === 'tubing' && param.name.toLowerCase().includes('shape')
    },
    {
      title: "Colors",
      filter: (param: ParameterDefinition) => 
        param.category === 'tubing' && (param.name.toLowerCase().includes('color') || param.name.toLowerCase().includes('colour'))
    },
    {
      title: "Finish",
      filter: (param: ParameterDefinition) => 
        param.category === 'tubing' && 
        (param.name.toLowerCase().includes('metallic') || 
         param.name.toLowerCase().includes('roughness'))
    }
  ];

  return (
    <BasePanel
      {...props}
      className="tubing-panel"
      renderParameter={renderParameter}
      categories={categories}
    />
  );
};