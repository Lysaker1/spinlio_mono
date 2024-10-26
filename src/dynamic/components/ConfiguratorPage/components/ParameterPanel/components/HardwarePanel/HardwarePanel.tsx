import React from 'react';
import { Select } from '@mantine/core';
import { ParameterDefinition } from '../../types';
import './HardwarePanel.css';

interface ParameterPanelHardwareProps {
  parameters: ParameterDefinition[];
  parameterValues: { [id: string]: string };
  handleParameterChange: (value: any, definition: ParameterDefinition) => void;
}

const ParameterPanelHardware: React.FC<ParameterPanelHardwareProps> = ({
  parameters,
  parameterValues,
  handleParameterChange,
}) => {
  // Find specific parameters
  const frontWaterBottle = parameters.find(p => p.id === 'e55e2d6f-e34a-4a13-bed3-3ab433635dcc');
  const rearWaterBottle = parameters.find(p => p.id === 'b26cf10f-9e0f-4dd0-a2eb-387eb3fc7f51');
  const rearDropouts = parameters.find(p => p.id === 'f63729ec-72df-423c-adbc-7b2a82051f34');

  return (
    <div className="parameter-panel-hardware">
      {/* Water Bottle Options */}
      {frontWaterBottle && (
        <div className="hardware-item">
          <span className="param-name">{frontWaterBottle.name}</span>
          <div className="option-buttons">
            {frontWaterBottle.options?.map((option) => (
              <button
                key={option.value}
                className={`option-button ${parameterValues[frontWaterBottle.id] === option.value.toString() ? 'selected' : ''}`}
                onClick={() => handleParameterChange(option.value, frontWaterBottle)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {rearWaterBottle && (
        <div className="hardware-item">
          <span className="param-name">{rearWaterBottle.name}</span>
          <div className="option-buttons">
            {rearWaterBottle.options?.map((option) => (
              <button
                key={option.value}
                className={`option-button ${parameterValues[rearWaterBottle.id] === option.value.toString() ? 'selected' : ''}`}
                onClick={() => handleParameterChange(option.value, rearWaterBottle)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Rear Dropouts */}
      {rearDropouts && (
        <div className="hardware-item">
          <span className="param-name">{rearDropouts.name}</span>
          <div className="option-buttons">
            {rearDropouts.options?.map((option) => (
              <button
                key={option.value}
                className={`option-button ${parameterValues[rearDropouts.id] === option.value.toString() ? 'selected' : ''}`}
                onClick={() => handleParameterChange(option.value, rearDropouts)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ParameterPanelHardware;