import React, { useState, Suspense, useCallback, useEffect } from 'react';
import { ISessionApi, IViewportApi, FLAG_TYPE } from '@shapediver/viewer';
import { useNavigate, useLocation } from 'react-router-dom';
import ErrorBoundary from '../../../../../shared/components/ErrorBoundary/ErrorBoundary';
import { ParameterPanel } from '../../components/ParameterPanel';
import ShapeDiverViewer from '../../components/ShapeDiverViewer';
import ShareButton from '../../components/Share/ShareButton';
import VulzSidebar from './components/VulzSidebar/VulzSidebar';
import { vulzBikeTemplates } from './components/VulzSidebar/vulzBikeTemplates';
import { BikeTemplate } from '../../components/Sidebar/bikeTemplates';
import { configuratorConfigs } from '../../config/configuratorConfig';
import { SaveDesignButton } from '@shared/components/SaveDesignButton/SaveDesignButton';
import { CONFIGURATOR_TYPES } from '@shared/constants/configuratorTypes';

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

  const handleTemplateSelect = useCallback(async (templateId: string) => {
    console.log('handleTemplateSelect called with:', templateId);

    const template = vulzBikeTemplates.find((t: BikeTemplate) => t.id === templateId);
    console.log('Found template:', template);

    if (!template || !session) {
      console.log('Early return - template or session missing:', { template, hasSession: !!session });
      return;
    }

    try {
      setIsLoading(true);
      console.log('Loading template:', {
        templateId,
        parameters: template.parameters
      });

      if (viewport) {
        const token = viewport.addFlag(FLAG_TYPE.BUSY_MODE);
        try {
          await session.customize(template.parameters, true);

          if (session.node) {
            await viewport.updateNode(session.node);
            viewport.update();
            viewport.render();
          }
        } finally {
          viewport.removeFlag(token);
        }
      }
    } catch (error) {
      console.error('Template loading error:', error);
    } finally {
      setIsLoading(false);
    }
  }, [session, viewport]);

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

  return (
    <ErrorBoundary>
      <div className="configurator-page vulz">
        <VulzSidebar
          onTemplateSelect={handleTemplateSelect}
          onDesignSelect={handleDesignSelect}
          session={session}
          showOnlyFrame={showOnlyFrame}
          showDimensions={showDimensions}
          onShowOnlyFrameChange={setShowOnlyFrame}
          onShowDimensionsChange={setShowDimensions}
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
