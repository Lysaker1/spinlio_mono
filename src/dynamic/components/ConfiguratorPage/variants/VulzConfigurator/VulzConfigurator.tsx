import React, { useState, Suspense, useCallback, useEffect } from 'react';
import { ISessionApi, IViewportApi, FLAG_TYPE } from '@shapediver/viewer';
import { useNavigate, useLocation } from 'react-router-dom';
import ErrorBoundary from '../../../../../shared/components/ErrorBoundary/ErrorBoundary';
import { ParameterPanel } from '../../components/ParameterPanel';
import ShapeDiverViewer from '../../components/ShapeDiverViewer';
import ShareButton from '../../components/Share/ShareButton';
import { configuratorConfigs } from '../../config/configuratorConfig';
import { SaveDesignButton } from '@shared/components/SaveDesignButton/SaveDesignButton';
import { CONFIGURATOR_TYPES } from '@shared/constants/configuratorTypes';
import Sidebar from '../../components/Sidebar/Sidebar';
import { BikeTemplate } from '../../components/Sidebar/Sidebar';

const VulzConfigurator: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<string>('');
  const [session, setSession] = useState<ISessionApi | null>(null);
  const [viewport, setViewport] = useState<IViewportApi | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const [shareMenuHeight, setShareMenuHeight] = useState<number>(15);
  const navigate = useNavigate();
  const [showOnlyFrame, setShowOnlyFrame] = useState(false);
  const [showDimensions, setShowDimensions] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.designParameters && session && viewport) {
      handleDesignSelect(location.state.designParameters);
    }
  }, [session, viewport, location.state]);

  const handleDesignSelect = useCallback(async (parameters: Record<string, any>) => {
    if (!session || !viewport) return;

    try {
      setIsLoading(true);
      const token = viewport.addFlag(FLAG_TYPE.BUSY_MODE);
      
      await session.customize(parameters);
      
      if (session.node) {
        await viewport.updateNode(session.node);
        viewport.update();
        viewport.render();
      }
      
      if (token) viewport.removeFlag(token);
    } catch (error) {
      console.error('Error loading design:', error);
    } finally {
      setIsLoading(false);
    }
  }, [session, viewport]);

  const handlePrefabSelect = useCallback(async (template: BikeTemplate) => {
    if (!session || !viewport) return;

    try {
      setIsLoading(true);
      const token = viewport.addFlag(FLAG_TYPE.BUSY_MODE);
      
      await session.customize(template.parameters);
      
      if (session.node) {
        await viewport.updateNode(session.node);
        viewport.update();
        viewport.render();
      }
      
      if (token) viewport.removeFlag(token);
    } catch (error) {
      console.error('Error applying prefab:', error);
    } finally {
      setIsLoading(false);
    }
  }, [session, viewport]);

  return (
    <ErrorBoundary>
      <div className="configurator-page vulz">
        <Sidebar
          onTemplateSelect={handlePrefabSelect}
          onDesignSelect={handleDesignSelect}
          session={session}
          configuratorType="vulz"
        />

        <div className="top-right-buttons">
          <SaveDesignButton 
            getCurrentParameters={() => session?.parameterValues || {}}
            configuratorType={CONFIGURATOR_TYPES.VULZ}
          />
          <ShareButton 
            session={session} 
            viewport={viewport}
            onMenuOpen={setIsShareMenuOpen}
            onMenuHeightChange={setShareMenuHeight}
          />
        </div>

        <div className="configurator-content">
          <div className="viewer-container">
            <Suspense fallback={null}>
              <ShapeDiverViewer
                session={session}
                setSession={setSession}
                setViewport={setViewport}
                isLoading={isLoading}
                ticket={configuratorConfigs.vulz.ticket}
              />
            </Suspense>
          </div>

          <div className={`parameter-panel-container ${isShareMenuOpen ? 'share-open' : ''}`}>
            <Suspense fallback={null}>
              <ParameterPanel
                selectedComponent={selectedComponent}
                session={session}
                viewport={viewport}
                configuratorType="vulz"
              />
            </Suspense>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default VulzConfigurator;
