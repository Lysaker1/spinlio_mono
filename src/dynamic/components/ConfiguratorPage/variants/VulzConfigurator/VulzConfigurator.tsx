import React, { useState, Suspense, useCallback, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
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
import { MyDesigns } from '@shared/components/MyDesigns/MyDesigns';
import { BuyButton } from '@shared/components/BuyButton/BuyButton';

const VulzConfigurator: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const [selectedComponent, setSelectedComponent] = useState<string>('');
  const [session, setSession] = useState<ISessionApi | null>(null);
  const [viewport, setViewport] = useState<IViewportApi | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const [shareMenuHeight, setShareMenuHeight] = useState<number>(15);
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

  const LOADING_GIF_URL = 'https://res.cloudinary.com/da8qnqmmh/image/upload/e_bgremoval/WhatsApp_GIF_2025-01-15_at_12.36.33_tupvgo.gif';


  const handlePrefabSelect = useCallback(async (template: BikeTemplate) => {
    if (!session || !viewport) return;

    try {
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
        >
          {isAuthenticated && (
            <MyDesigns 
              onSelect={handleDesignSelect}
              currentConfiguratorType="vulz"
            />
          )}
        </Sidebar>

        <div className="top-right-buttons">
          <BuyButton isVulz={true} />
          <SaveDesignButton 
            getCurrentParameters={() => session?.parameterValues || {}}
            configuratorType={CONFIGURATOR_TYPES.VULZ}
            viewport={viewport}
            onMenuOpen={setIsShareMenuOpen}
            onMenuHeightChange={setShareMenuHeight}
            session={session}
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
            <Suspense fallback={
              <div className="viewer-container">
                <img 
                  src={LOADING_GIF_URL} 
                  alt="Loading" 
                  className="loading-gif"
                />
              </div>
            }>
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
            <ParameterPanel
              selectedComponent={selectedComponent}
              session={session}
              viewport={viewport}
              configuratorType="vulz"
            />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default VulzConfigurator;
