// Import required React hooks for state management, side effects and memoization
import React, { useState, useEffect, useCallback } from 'react';
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

  // Initialize and sync parameter values
  useEffect(() => {
    if (!session) return;
    
    // Convert session values to strings
    const sessionValues = Object.entries(session.parameterValues).reduce((acc, [key, value]) => ({
      ...acc,
      [key]: String(value)
    }), {});

    setParameterValues(sessionValues);
  }, [session, session?.parameterValues]); // Re-run when session values change

  // Handle parameter changes
  const handleParameterChange = useCallback(async (value: any, definition: ParameterDefinition) => {
    if (!session) return;

    const stringValue = String(value);
    
    // Update local state immediately for UI responsiveness
    setParameterValues(prev => ({
      ...prev,
      [definition.id]: stringValue
    }));

    try {
      const token = viewport?.addFlag(FLAG_TYPE.BUSY_MODE);
      try {
        await session.customize({ [definition.id]: value });
        
        if (session.node && viewport) {
          await viewport.updateNode(session.node);
          viewport.update();
          viewport.render();
        }
      } finally {
        if (token) viewport?.removeFlag(token);
      }
    } catch (error) {
      console.error('Error updating parameter:', error);
    }
  }, [session, viewport]);

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