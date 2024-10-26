import React from 'react';
import { Slider, Select } from '@mantine/core';
import { ParameterDefinition } from '../../types';  // Update path
import './GeometryPanel.css';

interface ParameterPanelGeometryProps {
  parameters: ParameterDefinition[];
  parameterValues: { [id: string]: string };
  handleParameterChange: (value: any, definition: ParameterDefinition) => void;
}

const ParameterPanelGeometry: React.FC<ParameterPanelGeometryProps> = ({
  parameters,
  parameterValues,
  handleParameterChange,
}) => {
  // Function to determine if parameter should use float values
  const useFloatValues = (parameterId: string) => {
    return [
      'f108eb45-6305-4ee7-8840-328004938ac6', // Seat tube angle
      'ac5a259d-c2b7-45c0-af16-4a5782b21f1c', // Head tube angle
    ].includes(parameterId);
  };

  return (
    <div className="parameter-panel-parameters">
      {parameters.map((definition) => (
        <div key={definition.id} className="parameter-item">
          <div className="parameter-header">
            <span className="param-name">{definition.name}</span>
            {definition.type === 'slider' && (
              <span className="param-value">
                {useFloatValues(definition.id) 
                  ? Number(parameterValues[definition.id]).toFixed(1)
                  : Math.round(Number(parameterValues[definition.id]))}
              </span>
            )}
          </div>
          {definition.type === 'slider' && (
            <>
              <Slider
                min={definition.min}
                max={definition.max}
                value={Number(parameterValues[definition.id])}
                onChange={(value) => {
                  // Round the value if it's not supposed to use floats
                  const finalValue = useFloatValues(definition.id) 
                    ? value 
                    : Math.round(value);
                  handleParameterChange(finalValue, definition);
                }}
                step={useFloatValues(definition.id) ? 0.1 : 1}
                styles={{
                  root: { width: '100%' },
                  track: { backgroundColor: 'rgba(0, 0, 0, 0.05)' },
                  bar: {
                    background:
                      'linear-gradient(90deg, rgba(77, 77, 77, 1.00) 0%, rgba(31, 31, 31, 1.00) 100%)',
                  },
                  thumb: { backgroundColor: 'white', borderColor: 'rgba(0, 0, 0, 0.25)' },
                }}
              />
              <div className="parameter-range">
                <span className="range-min">{definition.min}</span>
                <span className="range-max">{definition.max}</span>
              </div>
            </>
          )}
          {definition.type === 'dropdown' && (
            <Select
              data={definition.options?.map(option => ({
                label: option.label,
                value: option.value.toString()
              })) || []}
              value={parameterValues[definition.id]}
              onChange={(value) => handleParameterChange(value, definition)}
              styles={{
                root: { width: '100%', marginTop: '8px' },
                input: {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                },
                dropdown: {
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                },
                option: {
                  color: 'white',
                },
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ParameterPanelGeometry;
