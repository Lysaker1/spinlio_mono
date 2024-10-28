import React from 'react';
import { Select } from '@mantine/core';
import { ParameterDefinition } from '../../types';
import './SurfacePanel.css';

// Update color mapping to use numbers as keys
const colorMapping = {
  '0': { hex: '#0D0D0D', label: 'Black' },
  '1': { hex: '#2A3439', label: 'Gunmetal Grey' },
  '2': { hex: '#D3D3D3', label: 'Light Grey' },
  '3': { hex: '#4B5320', label: 'Army Green' },
  '4': { hex: '#008080', label: 'Teal' },
  '5': { hex: '#D50000', label: 'Racing Red' },
  '6': { hex: '#A1CAF1', label: 'Baby Blue' },
  '7': { hex: '#F5F5F5', label: 'White' },
  '8': { hex: '#A9ACB6', label: 'Raw Aluminium' },
  '9': { hex: '#B8B8B8', label: 'Nutex' }
};

interface ParameterPanelSurfaceProps {
  parameters: ParameterDefinition[];
  parameterValues: { [id: string]: string };
  handleParameterChange: (value: any, definition: ParameterDefinition) => void;
  isMobile?: boolean;
  activeControl?: string | null;
}

const ParameterPanelSurface: React.FC<ParameterPanelSurfaceProps> = ({
  parameters,
  parameterValues,
  handleParameterChange,
  isMobile = false,
  activeControl = null,
}) => {
  const colorParameter = parameters.find(p => p.id === '3631ea0d-6d4c-49c2-b998-2c01a7797a01');
  const shapeParameter = parameters.find(p => p.id === '45e7e66b-7c42-4ac2-bef7-596dd49d4bd5');

  if (isMobile) {
    return (
      <div className="parameter-panel-surface mobile">
        {/* Show only active control content */}
        {activeControl === 'shapes' && shapeParameter && (
          <div className="surface-item shapes">
            <div className="shape-options">
              {shapeParameter.options?.map((option) => (
                <div
                  key={option.value}
                  className={`shape-option ${parameterValues[shapeParameter.id] === option.value ? 'selected' : ''}`}
                  onClick={() => handleParameterChange(option.value, shapeParameter)}
                >
                  <span>{option.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeControl === 'colors' && colorParameter && (
          <div className="surface-item colors">
            <div className="color-grid">
              {Object.entries(colorMapping).map(([value, { hex, label }]) => (
                <div
                  key={value}
                  className={`color-circle ${parameterValues[colorParameter.id] === value ? 'selected' : ''}`}
                  onClick={() => handleParameterChange(value, colorParameter)}
                >
                  <div className="color-dot" style={{ backgroundColor: hex }} />
                  <span className="color-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Desktop layout (your existing return)
  return (
    <div className="parameter-panel-surface desktop">
      {/* Color Selection */}
      {colorParameter && (
        <div className="surface-item">
          <span className="param-name">{colorParameter.name}</span>
          <div className="color-grid">
            {Object.entries(colorMapping).map(([value, { hex, label }]) => (
              <div
                key={value}
                className={`color-circle ${parameterValues[colorParameter.id] === value ? 'selected' : ''}`}
                onClick={() => handleParameterChange(value, colorParameter)}
              >
                <div 
                  className="color-dot"
                  style={{ backgroundColor: hex }}
                />
                <span className="color-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Shape Selection - Keeping your existing code */}
      {shapeParameter && (
        <div className="surface-item">
          <span className="param-name">{shapeParameter.name}</span>
          <div className="shape-options">
            {shapeParameter.options?.map((option) => (
              <div
                key={option.value}
                className={`shape-option ${parameterValues[shapeParameter.id] === option.value ? 'selected' : ''}`}
                onClick={() => handleParameterChange(option.value, shapeParameter)}
              >
                <span>{option.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ParameterPanelSurface;
