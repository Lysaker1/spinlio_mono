// Import required React hooks for state management, side effects and memoization
import React, { useState, useEffect, useCallback, useRef } from 'react';
// Import debounce utility to limit frequency of function calls
import { debounce } from 'lodash';
// Import panel components for different parameter categories
import { GeometryPanel } from './components/Panels/GeometryPanel';
import { TubingPanel } from './components/Panels/TubingPanel';
import { AccessoriesPanel } from './components/Panels/AccessoriesPanel';
import { SizingPanel } from './components/Panels/SizingPanel/SizingPanel';
import { MaterialPanel } from './components/Panels/MaterialPanel/MaterialPanel';
// Import TypeScript interfaces and types
import { ParameterDefinition, ParameterPanelProps } from './types';
// Import component styles
import './ParameterPanel.css';
// Import parameter configuration data
import { parameterDefinitions as parameterDefinitionsBike } from './parameterDefinitions6';
import { parameterDefinitions as parameterDefinitionsFurniture } from './parameterDefinitionsFurniture';
import { parameterDefinitions as parameterDefinitionsTable } from './parameterDefinitionsTable';
import { parameterDefinitions as parameterDefinitionsSofa } from './parameterDefinitionsSofa';
import { parameterDefinitions as parameterDefinitionsST } from './parameterDefinitionsST';

// Import hook to detect mobile screen size
import { useMediaQuery } from '@mantine/hooks';
// Import navigation tabs component
import { CategoryTabs, TabType } from './components/CategoryTabs/CategoryTabs';
import { FLAG_TYPE } from '@shapediver/viewer';
// Import panel settings component
// Main component documentation block explaining core responsibilities

// This is the main controller component that:
// 1. Manages the overall parameter state
// 2. Handles ShapeDiver communication
// 3. Controls which category is active 
// 4. Passes down the appropriate props to the BasePanel

// Component definition with TypeScript props interface
export const ParameterPanel: React.FC<ParameterPanelProps> = ({
  selectedComponent,
  session,
  viewport,
  configuratorType = 'default'
}) => {
  const getDefaultTab = () => {
    switch (configuratorType) {
      case 'sofa':
      case 'table':
      case 'bookshelf':
        return 'material';
      default:
        return 'tubing';
    }
  };

  const [activeTab, setActiveTab] = useState(getDefaultTab());
  const [parameterValues, setParameterValues] = useState<Record<string, string>>({});
  const isMobile = useMediaQuery('(max-width: 768px)');

  const prevParamValuesRef = useRef<any>(null);

  // Create a debounced version of the session update
  const debouncedSessionUpdate = useCallback(
    debounce(async (paramId: string, value: any) => {
      if (!session) return;

      try {
        const token = viewport?.addFlag(FLAG_TYPE.BUSY_MODE);
        await session.customize({ [paramId]: value });
        
        if (session.node && viewport) {
          await viewport.updateNode(session.node);
          viewport.update();
          viewport.render();
        }
        if (token) viewport?.removeFlag(token);
      } catch (error) {
        console.error('Error updating parameter:', error);
      }
    }, 100), // 100ms delay
    [session, viewport]
  );

  // Handle parameter changes
  const handleParameterChange = useCallback(async (value: any, definition: ParameterDefinition) => {
    // Update UI immediately
    setParameterValues(prev => ({
      ...prev,
      [definition.id]: String(value)
    }));

    // Debounce the actual session update
    debouncedSessionUpdate(definition.id, value);
  }, [debouncedSessionUpdate]);

  // Modify useEffect to prevent unnecessary updates
  useEffect(() => {
    if (!session?.parameterValues) return;
    
    const newValues = Object.entries(session.parameterValues).reduce((acc, [key, value]) => ({
      ...acc,
      [key]: String(value)
    }), {});

    // Only update if values have actually changed
    const currentValuesStr = JSON.stringify(parameterValues);
    const newValuesStr = JSON.stringify(newValues);
    
    if (currentValuesStr !== newValuesStr) {
      setParameterValues(newValues);
    }
  }, [session]);

  // Get filtered parameters for current tab
  const getCurrentParameters = () => {
    let definitions;
    switch (configuratorType) {
      case 'bookshelf':
        definitions = parameterDefinitionsFurniture;
        break;
      case 'table':
        definitions = parameterDefinitionsTable;
        break;
      case 'sofa':
        definitions = parameterDefinitionsSofa;
        break;
      case 'stepthru':
        definitions = parameterDefinitionsST;
        break;
      default:
        definitions = parameterDefinitionsBike;
    }

    return definitions
      .filter((p: ParameterDefinition) => {
        // First filter by category
        if (p.category !== activeTab) return false;

        // Then filter by configurator type
        if (p.configuratorTypes) {
          // If configuratorTypes is specified, parameter must match current type
          return p.configuratorTypes.includes(configuratorType);
        }
        // If no configuratorTypes specified, show for all bikes
        return true;
      });
  };

  if (!session) return null;

  const renderPanel = () => {
    if (['bookshelf', 'table', 'sofa'].includes(configuratorType)) {
      return {
        'sizing': (
          <SizingPanel
            parameters={getCurrentParameters()}
            parameterValues={parameterValues}
            onParameterChange={handleParameterChange}
            isActive={true}
            configuratorType={configuratorType}
          />
        ),
        'material': (
          <MaterialPanel
            parameters={getCurrentParameters()}
            parameterValues={parameterValues}
            onParameterChange={handleParameterChange}
            isActive={true}
            configuratorType={configuratorType}
          />
        )
      }[activeTab];
    }

    return {
      'tubing': <TubingPanel {...commonPanelProps} />,
      'geometry': <GeometryPanel {...commonPanelProps} />,
      'accessories': <AccessoriesPanel {...commonPanelProps} />
    }[activeTab];
  };

  const commonPanelProps = {
    parameters: getCurrentParameters(),
    parameterValues,
    onParameterChange: handleParameterChange,
    isActive: true
  };

  return (
    <div className={`parameter-panel ${isMobile ? 'mobile' : ''}`}>
      <div className="category-navigation">
        <CategoryTabs 
          activeTab={activeTab as TabType} 
          onTabChange={setActiveTab}
          configuratorType={configuratorType}
        />
      </div>
      <div className="panel-content">
        {renderPanel()}
      </div>
    </div>
  );
};

// Export component as default
export default ParameterPanel;