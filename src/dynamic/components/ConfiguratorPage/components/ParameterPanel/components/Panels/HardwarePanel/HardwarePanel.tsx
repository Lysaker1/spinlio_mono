import React, { useMemo } from 'react';
import { ParameterDefinition } from '../../../types';
import { Dropdown } from '../../ParameterTypes/Dropdown/Dropdown';
import { ToggleGroup } from '../../ParameterTypes/ToggleGroup/ToggleGroup';
import { BasePanel } from '../BasePanel/BasePanel';
import './HardwarePanel.css';

interface HardwarePanelProps {
  parameters: ParameterDefinition[];
  parameterValues: { [id: string]: string };
  onParameterChange: (value: any, definition: ParameterDefinition) => void;
  isActive?: boolean;
}

export const HardwarePanel: React.FC<HardwarePanelProps> = (props) => {
  // Group parameters by category using memoization
  const { dropoutParams, bottleParams, otherParams } = useMemo(() => ({
    dropoutParams: props.parameters.filter(p => 
      p.name.toLowerCase().includes('dropout')
    ),
    bottleParams: props.parameters.filter(p => 
      p.name.toLowerCase().includes('bottle')
    ),
    otherParams: props.parameters.filter(p => 
      !p.name.toLowerCase().includes('dropout') && 
      !p.name.toLowerCase().includes('bottle')
    )
  }), [props.parameters]);

  // Render function for individual parameters
  const renderParameter = (param: ParameterDefinition) => {
    return param.type === 'dropdown' ? (
      <Dropdown
        definition={param}
        value={props.parameterValues[param.id]}
        onChange={props.onParameterChange}
      />
    ) : (
      <ToggleGroup
        definition={param}
        value={props.parameterValues[param.id]}
        onChange={props.onParameterChange}
      />
    );
  };

  // Desktop content with sections
  const renderDesktopContent = () => (
    <>
      {dropoutParams.length > 0 && (
        <div className="parameter-section">
          <h3 className="section-title">Dropouts</h3>
          <div className="parameter-grid">
            {dropoutParams.map(param => renderParameter(param))}
          </div>
        </div>
      )}

      {bottleParams.length > 0 && (
        <div className="parameter-section">
          <h3 className="section-title">Bottle Mounts</h3>
          <div className="parameter-grid">
            {bottleParams.map(param => renderParameter(param))}
          </div>
        </div>
      )}

      {otherParams.length > 0 && (
        <div className="parameter-section">
          <h3 className="section-title">Other Hardware</h3>
          <div className="parameter-grid">
            {otherParams.map(param => renderParameter(param))}
          </div>
        </div>
      )}
    </>
  );

  return (
    <BasePanel
      {...props}
      className="hardware-panel"
      renderParameter={renderParameter}
      renderDesktopContent={renderDesktopContent}
    />
  );
};