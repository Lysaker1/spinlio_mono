import React, { useState, useEffect, useCallback } from 'react';
import { ISessionApi, IViewportApi } from '@shapediver/viewer';
import { Box, Title } from '@mantine/core';
import debounce from 'lodash.debounce';
import './ParameterPanel.css';

// Import subcomponents from their correct locations
import { GeometryPanel } from './components/GeometryPanel';
import { SurfacePanel } from './components/SurfacePanel';
import { HardwarePanel } from './components/HardwarePanel';

// Import types
import { parameterDefinitions } from './parameterDefinitions';
import { ParameterDefinition, ParameterPanelProps } from './types';

const ParameterPanel: React.FC<ParameterPanelProps> = ({ selectedComponent, session, viewport }) => {
  const [activeTab, setActiveTab] = useState('Surface');
  const [parameterValues, setParameterValues] = useState<{ [id: string]: string }>({});

  useEffect(() => {
    // Initialize parameter values
    const initialValues: { [id: string]: string } = {};
    parameterDefinitions.forEach((param) => {
      // Convert value to string explicitly
      initialValues[param.id] = param.value.toString();
    });
    setParameterValues(initialValues);
  }, []);

  const debouncedCustomize = useCallback(
    debounce(async (params: {}) => {
      if (!session || !viewport) return;

      try {
        await session.customize(params);
        console.log('Session customized with params:', params);

        if (session.node) {
          await viewport.updateNode(session.node);
          viewport.update();
          viewport.render();
          console.log('Viewport updated with new session node.');
        }
      } catch (error) {
        console.error('Error customizing session:', error);
      }
    }, 500),
    [session, viewport]
  );

  const handleParameterChange = (value: any, definition: ParameterDefinition) => {
    const stringValue = value.toString();
    setParameterValues((prevValues) => ({ ...prevValues, [definition.id]: stringValue }));
    debouncedCustomize({ [definition.id]: stringValue });
  };

  if (!session) return null;

  const geometryParams = parameterDefinitions.filter(param => 
    [
      'f108eb45-6305-4ee7-8840-328004938ac6', // Seat tube angle
      '28dbd19d-3f39-48a4-b143-9d357b413ce0', // Angle
      'ac5a259d-c2b7-45c0-af16-4a5782b21f1c', // Head tube angle
      'e42f397c-eb07-434a-9029-d394179bf2f1', // Seat tube length
      '398b031c-826b-481e-9cf8-8628f5d01511', // Chain stay length
      'e7e25729-2b9e-458a-9bb1-16e0fa675a7c', // Top tube length
      'e81fe405-a176-41aa-b5f9-7d702e2db52a', // Head tube length
      '38985f41-4db6-448e-b1a0-6689bd26beae', // Front bracket width
      '33a9c8f9-8ef4-410e-a2c1-36abb60e4e49', // Back bracket width
    ].includes(param.id)
  );

  const surfaceParams = parameterDefinitions.filter(param => 
    [
      '3631ea0d-6d4c-49c2-b998-2c01a7797a01', // Tube color
      '45e7e66b-7c42-4ac2-bef7-596dd49d4bd5', // Top tube shape
    ].includes(param.id)
  );

  const hardwareParams = parameterDefinitions.filter(param => 
    [
      'e55e2d6f-e34a-4a13-bed3-3ab433635dcc', // Front water bottle
      'b26cf10f-9e0f-4dd0-a2eb-387eb3fc7f51', // Rear water bottle
      'f63729ec-72df-423c-adbc-7b2a82051f34', // Rear dropouts
    ].includes(param.id)
  );

  return (
    <div className="parameter-panel">
      <div className="tab-navigation">
        {['Surface', 'Geometry', 'Hardware'].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            data-tab={tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="panel-content">
        {activeTab === 'Geometry' && (
          <GeometryPanel
            parameters={geometryParams}
            parameterValues={parameterValues}
            handleParameterChange={handleParameterChange}
          />
        )}
        {activeTab === 'Surface' && (
          <SurfacePanel
            parameters={surfaceParams}
            parameterValues={parameterValues}
            handleParameterChange={handleParameterChange}
          />
        )}
        {activeTab === 'Hardware' && (
          <HardwarePanel
            parameters={hardwareParams}
            parameterValues={parameterValues}
            handleParameterChange={handleParameterChange}
          />
        )}
      </div>
    </div>
  );
};

export default ParameterPanel;
