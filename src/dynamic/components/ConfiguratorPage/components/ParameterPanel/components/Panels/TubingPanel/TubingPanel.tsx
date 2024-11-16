import React, { useState } from 'react';
import { ParameterDefinition } from '../../../types';
import { BasePanel } from '../BasePanel/BasePanel';
import { ActionIcon } from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import './TubingPanel.css';

interface TubingPanelProps {
  parameters: ParameterDefinition[];
  parameterValues: { [id: string]: string };
  onParameterChange: (value: any, definition: ParameterDefinition) => void;
  isActive?: boolean;
}

export const TubingPanel: React.FC<TubingPanelProps> = (props) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

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
        param.type !== 'graphmapper' &&
        param.type !== 'fileinput'
    },
    // All Down Tube parameters under one header
    {
      title: "Down Tube",
      filter: (param: ParameterDefinition) => 
        param.category === 'tubing' && 
        param.name.toLowerCase().includes('down tube') &&
        param.type !== 'graphmapper' &&
        param.type !== 'fileinput'
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
        param.type !== 'color' &&
        param.type !== 'graphmapper' &&
        param.type !== 'fileinput'
    },
    // Advanced section for graph mappers and file upload
    {
      title: "Advanced",
      filter: (param: ParameterDefinition) => 
        param.category === 'tubing' && 
        (param.type === 'graphmapper' || param.type === 'fileinput'),
      isAdvanced: true
    }
  ];

  return (
    <BasePanel
      {...props}
      className="tubing-panel"
      categories={categories}
      advancedControls={{
        showAdvanced,
        setShowAdvanced,
        advancedTitle: (
          <div className="advanced-header" onClick={() => setShowAdvanced(!showAdvanced)}>
            <span>Advanced Options</span>
            <ActionIcon variant="subtle" color="gray">
              {showAdvanced ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />}
            </ActionIcon>
          </div>
        )
      }}
    />
  );
};