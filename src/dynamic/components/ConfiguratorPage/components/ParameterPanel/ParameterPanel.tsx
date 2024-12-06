// Import required React hooks for state management, side effects and memoization
import React, { useState, useEffect, useCallback, useRef } from 'react';
// Import debounce utility to limit frequency of function calls
import { debounce } from 'lodash';
// Import panel components for different parameter categories
import { GeometryPanel } from './components/Panels/GeometryPanel';
import { TubingPanel } from './components/Panels/TubingPanel';
import { AccessoriesPanel } from './components/Panels/AccessoriesPanel';
// Import TypeScript interfaces and types
import { ParameterDefinition, ParameterPanelProps } from './types';
// Import component styles
import './ParameterPanel.css';
// Import parameter configuration data
import { parameterDefinitions } from './parameterDefinitions6';
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
  const [activeTab, setActiveTab] = useState<TabType>('tubing');
  const [parameterValues, setParameterValues] = useState<{ [id: string]: string }>({});
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
  }, [session?.parameterValues]);

  // Get filtered parameters for current tab
  const getCurrentParameters = () => {
    const filteredByType = parameterDefinitions.filter(param => 
      !param.configuratorTypes || 
      param.configuratorTypes.includes(configuratorType)
    );
    return filteredByType.filter(p => p.category === activeTab);
  };

  if (!session) return null;

  return (
    <div className={`parameter-panel ${isMobile ? 'mobile' : ''}`}>
      <div className="category-navigation">
        <CategoryTabs 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
        />
      </div>
      <div className="panel-content">
        {{
          'tubing': (
            <TubingPanel
              parameters={getCurrentParameters()}
              parameterValues={parameterValues}
              onParameterChange={handleParameterChange}
              isActive={true}
            />
          ),
          'geometry': (
            <GeometryPanel
              parameters={getCurrentParameters()}
              parameterValues={parameterValues}
              onParameterChange={handleParameterChange}
              isActive={true}
            />
          ),
          'accessories': (
            <AccessoriesPanel
              parameters={getCurrentParameters()}
              parameterValues={parameterValues}
              onParameterChange={handleParameterChange}
              isActive={true}
            />
          )
        }[activeTab]}
      </div>
    </div>
  );
};

// Export component as default
export default ParameterPanel;