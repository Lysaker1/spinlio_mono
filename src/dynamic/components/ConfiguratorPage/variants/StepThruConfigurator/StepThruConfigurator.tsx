import React, { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { CONFIGURATOR_TYPES } from '@shared/constants/configuratorTypes';
import ErrorBoundary from '@shared/components/ErrorBoundary/ErrorBoundary';
import { ParameterPanel } from '../../components/ParameterPanel';
import ShapeDiverViewer from '../../components/ShapeDiverViewer';
import ShareButton from '../../components/Share/ShareButton';
import { SaveDesignButton } from '@shared/components/SaveDesignButton/SaveDesignButton';
import Sidebar from '../../components/Sidebar/Sidebar';
import { MyDesigns } from '@shared/components/MyDesigns/MyDesigns';
import { BuyButton } from '@shared/components/BuyButton/BuyButton';
import { useConfiguratorState } from '@shared/hooks/useConfiguratorState';
import { configuratorConfigs } from '../../config/configuratorConfig';

const StepThruConfigurator: React.FC = () => {
  const {
    session,
    viewport,
    isLoading,
    isTransitioning,
    isShareMenuOpen,
    shareMenuHeight,
    isSaveMenuOpen,
    saveMenuHeight,
    selectedComponent,
    setSession,
    setViewport,
    handleDesignSelect,
    setIsShareMenuOpen,
    setShareMenuHeight,
    setIsSaveMenuOpen,
    setSaveMenuHeight,
    setSelectedComponent,
    isAuthenticated,
    ticket,
  } = useConfiguratorState(CONFIGURATOR_TYPES.STEPTHRU);

  const LOADING_GIF_URL = 'https://res.cloudinary.com/da8qnqmmh/image/upload/e_bgremoval/WhatsApp_GIF_2025-01-15_at_12.36.33_tupvgo.gif';

  return (
    <ErrorBoundary>
      <div className="configurator-page">
        <Sidebar
          configuratorType={CONFIGURATOR_TYPES.STEPTHRU}
          onTemplateSelect={handleDesignSelect}
          onDesignSelect={handleDesignSelect}
          session={session}
          setSession={setSession}
          viewport={viewport}
          setViewport={setViewport}
          >
          {isAuthenticated && (
            <MyDesigns 
              onSelect={handleDesignSelect}
              currentConfiguratorType={CONFIGURATOR_TYPES.STEPTHRU}
            />
          )}
        </Sidebar>

        <div className="top-right-buttons">
          <BuyButton
            configuratorType={CONFIGURATOR_TYPES.STEPTHRU}
          />
          <SaveDesignButton 
            getCurrentParameters={() => session?.parameterValues || {}}
            configuratorType={CONFIGURATOR_TYPES.STEPTHRU}
            viewport={viewport}
            onMenuOpen={setIsSaveMenuOpen}
            onMenuHeightChange={setSaveMenuHeight}
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
                isTransitioning={isTransitioning}
                ticket={configuratorConfigs.stepthru.ticket}
              />
            </Suspense>
          </div>

          <div className={`parameter-panel-container ${isShareMenuOpen ? 'share-open' : ''} ${isSaveMenuOpen ? 'save-open' : ''}`}>
            <ParameterPanel
              selectedComponent={selectedComponent}
              session={session}
              viewport={viewport}
              configuratorType={CONFIGURATOR_TYPES.STEPTHRU}
            />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default StepThruConfigurator;