import React, { useState, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { ISessionApi, IViewportApi } from '@shapediver/viewer';
import './SupplierConfigurator.css';
import ErrorBoundary from '../../../../../shared/components/ErrorBoundary/ErrorBoundary';
import { ParameterPanel } from '../../components/ParameterPanel';
import ShapeDiverViewer from '../../components/ShapeDiverViewer';

const SupplierConfigurator: React.FC = () => {
  const navigate = useNavigate();
  const [selectedComponent, setSelectedComponent] = useState<string>('');
  const [session, setSession] = useState<ISessionApi | null>(null);
  const [viewport, setViewport] = useState<IViewportApi | null>(null);
  
  const handleBackToUser = () => {
    navigate('/');
  };

  return (
    <ErrorBoundary>
      <div className="configurator-page supplier">
        <div className="supplier-sidebar">
          <button 
            className="back-to-user-button"
            onClick={handleBackToUser}
          >
            Back to User View
          </button>
          
          <div className="upload-section">
            <h3>Product Management</h3>
            <button className="upload-button">
              Upload New Products
            </button>
            <div className="info-text">
              Create new configurations to be displayed as templates in the user view
            </div>
          </div>
        </div>

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