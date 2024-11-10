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
// Import panel settings component
// Main component documentation block explaining core responsibilities

// This is the main controller component that:
// 1. Manages the overall parameter state
// 2. Handles ShapeDiver communication
// 3. Controls which category is active 
// 4. Passes down the appropriate props to the BasePanel

// Component definition with TypeScript props interface
export const ParameterPanel: React.FC<ParameterPanelProps> = ({ 
  session, // ShapeDiver session instance
  viewport // ShapeDiver viewport instance
}) => {

  // State hooks for managing component data
  const [activeTab, setActiveTab] = useState<TabType>('tubing'); // Currently selected parameter category
  const [parameterValues, setParameterValues] = useState<{ [id: string]: string }>({}); // All parameter values stored by ID
  const isMobile = useMediaQuery('(max-width: 768px)'); // Boolean flag for mobile viewport
  const [lastUpdate, setLastUpdate] = useState<number>(0); // Timestamp of last model update
  const updateThreshold = 500; // Minimum time between updates in milliseconds
  const [showOnlyFrame, setShowOnlyFrame] = useState(false);
  const [showDimensions, setShowDimensions] = useState(false);

  // Reset subcategory selection when main category tab changes
  useEffect(() => {
    if (!session) return;
    const initialValues = parameterDefinitions.reduce((acc, param) => ({
      ...acc,
      [param.id]: param.value.toString()
    }), {});
    setParameterValues(initialValues);
  }, [session]);

  // Combine both effects into one
  // useEffect(() => {
  //   // Update "Show Only Frame" parameter
  //   const frameParam = parameterDefinitions.find(p => p.id === 'b5bf6f12-a078-4417-a4ae-d2049807178c');
  //   if (frameParam) {
  //     console.log('showOnlyFrame', showOnlyFrame);
  //     handleParameterChange(showOnlyFrame.toString(), frameParam);
  //   }

  //   // Update "Show Dimensions" parameter
  //   const dimensionsParam = parameterDefinitions.find(p => p.id === '7088e5a1-f07f-49c3-b1f6-98e74ae3734c');
  //   if (dimensionsParam) {
  //     console.log('showDimensions', showDimensions);
  //     handleParameterChange(showDimensions.toString(), dimensionsParam);
  //   }
  // }, [showOnlyFrame, showDimensions]); // Include both dependencies

  // Debounced ShapeDiver update
  const updateModel = useCallback(
    debounce(async (params: {}) => {
      // Skip if session or viewport not available
      if (!session || !viewport) return;
      
      // Check if enough time has passed since last update
      const now = Date.now();
      if (now - lastUpdate < 500) return;

      try {
        // Send parameter updates to ShapeDiver
        await session.customize(params);
        
        // Update viewport if session node exists
        if (session.node) {
          await viewport.updateNode(session.node);
          viewport.update();
          viewport.render();
          setLastUpdate(now);
        }
      } catch (error) {
        console.error('Error customizing session:', error);
      }
    }, 500), // Debounce delay of 500ms
    [session, viewport, lastUpdate] // Dependencies for useCallback
  );

  // Handler for parameter value changes
  const handleParameterChange = (value: any, definition: ParameterDefinition) => {
    const stringValue = value.toString();
    setParameterValues(prev => ({ ...prev, [definition.id]: stringValue }));
    updateModel({ [definition.id]: stringValue });
  };

  // Get filtered parameters for current tab
  const getCurrentParameters = () => 
    parameterDefinitions.filter(p => p.category === activeTab);

  // Return null if no session exists
  if (!session) return null;

  // Render component UI
  return (
    <div className={`parameter-panel ${isMobile ? 'mobile' : ''}`}>
      {/* <PanelSettings
        showOnlyFrame={showOnlyFrame}
        showDimensions={showDimensions}
        onShowOnlyFrameChange={setShowOnlyFrame}
        onShowDimensionsChange={setShowDimensions}
      /> */}
      {/* Navigation tabs for parameter categories */}
      <div className="category-navigation">
        <CategoryTabs 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
        />
      </div>
  
      {/* Container for active parameter panel */}
      <div className="panel-content">
        {/* Using object literal instead of multiple conditionals */}
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