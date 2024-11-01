import React from 'react';
import { ParameterDefinition } from '../../../types';
import { ColorPicker } from '../../ParameterTypes/Colorpicker/ColorPicker';
import { ShapeGrid } from '../../ParameterTypes/ShapeGrid/ShapeGrid';
import { Slider } from '../../ParameterTypes/Slider/Slider';
import { BasePanel } from '../BasePanel/BasePanel';
import './SurfacePanel.css';
interface SurfacePanelProps {
  parameters: ParameterDefinition[];
  parameterValues: { [id: string]: string };
  onParameterChange: (value: any, definition: ParameterDefinition) => void;
  isActive?: boolean;
}

export const SurfacePanel: React.FC<SurfacePanelProps> = (props) => {
  const renderParameter = (param: ParameterDefinition) => {
    switch(param.type) {
      case 'color':
        return (
          <ColorPicker
            definition={param}
            value={props.parameterValues[param.id]}
            onChange={props.onParameterChange}
          />
        );
      case 'dropdown':
        return (
          <ShapeGrid
            definition={param}
            value={props.parameterValues[param.id]}
            onChange={props.onParameterChange}
          />
        );
      case 'slider':
        return (
          <Slider
            definition={param}
            value={props.parameterValues[param.id]}
            onChange={props.onParameterChange}
          />
        );
      default:
        return null;
    }
  };

  const renderDesktopContent = () => {
    // Include tube color in colorParams by checking name or id
    const colorParams = props.parameters.filter(p => 
      p.type === 'color' || p.name.toLowerCase().includes('color')
    );
    const shapeParams = props.parameters.filter(p => 
      p.type === 'dropdown' && !p.name.toLowerCase().includes('color')
    );

    return (
      <div className="desktop-sections">
        {colorParams.length > 0 && (
          <div className="parameter-section">
            <h3 className="section-title">Colors</h3>
            <div className="color-section">
              {colorParams.map(param => (
                <div key={param.id} className="parameter-item">
                  {renderParameter(param)}
                </div>
              ))}
            </div>
          </div>
        )}

        {shapeParams.length > 0 && (
          <div className="parameter-section">
            <h3 className="section-title">Shapes & Materials</h3>
            <div className="shape-section">
              {shapeParams.map(param => (
                <div key={param.id} className="parameter-item">
                  {renderParameter(param)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <BasePanel
      {...props}
      className="surface-panel"
      renderParameter={renderParameter}
      renderDesktopContent={renderDesktopContent}
    />
  );
};