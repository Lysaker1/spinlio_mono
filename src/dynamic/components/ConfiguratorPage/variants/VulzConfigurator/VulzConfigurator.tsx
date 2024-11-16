import React, { useState, Suspense, useCallback } from 'react';
import { ISessionApi, IViewportApi, FLAG_TYPE } from '@shapediver/viewer';
import { useNavigate } from 'react-router-dom';
import ErrorBoundary from '../../../../../shared/components/ErrorBoundary/ErrorBoundary';
import { ParameterPanel } from '../../components/ParameterPanel';
import ShapeDiverViewer from '../../components/ShapeDiverViewer';
import ShareButton from '../../components/Share/ShareButton';
import VulzSidebar from './components/VulzSidebar/VulzSidebar';
import { vulzBikeTemplates } from './components/VulzSidebar/vulzBikeTemplates';
import { BikeTemplate } from '../../components/Sidebar/bikeTemplates';
import { configuratorConfigs } from '../../config/configuratorConfig';

const VulzConfigurator: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<string>('');
  const [session, setSession] = useState<ISessionApi | null>(null);
  const [viewport, setViewport] = useState<IViewportApi | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const [shareMenuHeight, setShareMenuHeight] = useState<number>(15);
  const navigate = useNavigate();

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

  return (
    <ErrorBoundary>
      <div className="configurator-page vulz">
        <VulzSidebar 
          onTemplateSelect={handleTemplateSelect}
          session={session}
        />
        
        <div className="top-right-buttons">
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