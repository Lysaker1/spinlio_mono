import React, { useState, Suspense, useRef, useEffect, useCallback } from 'react';
import { Modal } from '@mantine/core';
import { ISessionApi, IViewportApi } from '@shapediver/viewer';
import './SupplierConfigurator.css';
import ErrorBoundary from '../../../../../shared/components/ErrorBoundary/ErrorBoundary';
import { ParameterPanel } from '../../components/ParameterPanel';
import ExportMenu from '../../components/ExportMenu';
import ShapeDiverViewer from '../../components/ShapeDiverViewer';
import ShareButton from '../../components/Share/ShareButton';

const SupplierConfigurator: React.FC = () => {
  // Copy the same state management from ConfiguratorPage
  const [selectedComponent, setSelectedComponent] = useState<string>('');
  const [session, setSession] = useState<ISessionApi | null>(null);
  const [viewport, setViewport] = useState<IViewportApi | null>(null);
  
  return (
    <ErrorBoundary>
      <div className="configurator-page supplier">
        <div className="configurator-content">
          <div className="viewer-container">
            <Suspense fallback={null}>
              <ShapeDiverViewer
                session={session}
                setSession={setSession}
                setViewport={setViewport}
              />
            </Suspense>
          </div>
          
          <div className="parameter-panel-container">
            <Suspense fallback={null}>
              <ParameterPanel
                selectedComponent={selectedComponent}
                session={session}
                viewport={viewport}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default SupplierConfigurator;