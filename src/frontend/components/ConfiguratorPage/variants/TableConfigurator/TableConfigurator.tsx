import React, { Suspense } from 'react';
import { CONFIGURATOR_TYPES } from '@frontend/constants/configuratorTypes';
import ErrorBoundary from '@frontend/components/ErrorBoundary/ErrorBoundary';
import { ParameterPanel } from '../../components/ParameterPanel';
import ShapeDiverViewer from '../../components/ShapeDiverViewer';
import Sidebar from '../../components/Sidebar/Sidebar';
import { MyDesigns } from '@frontend/components/ConfiguratorPage/components/Sidebar/Sections/MyDesigns';
import { useConfiguratorState } from '@frontend/hooks/useConfiguratorState';
import { configuratorConfigs } from '../../config/configuratorConfig';
import { BuyButton } from '@frontend/components/BuyButton/BuyButton';
import Header from '@frontend/components/ConfiguratorPage/components/Header';

const TableConfigurator: React.FC<{ isAuthenticated: boolean }> = ({ isAuthenticated }) => {
  const {
    session,
    viewport,
    isLoading,
    isTransitioning,
    selectedComponent,
    setSession,
    setViewport,
    handleDesignSelect,
  } = useConfiguratorState(CONFIGURATOR_TYPES.TABLE);

  const LOADING_GIF_URL = 'https://res.cloudinary.com/da8qnqmmh/image/upload/e_bgremoval/WhatsApp_GIF_2025-01-15_at_12.36.33_tupvgo.gif';

  return (
    <ErrorBoundary>
    <Header session={session} viewport={viewport} configuratorType={CONFIGURATOR_TYPES.TABLE} />
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] grid-areas-[sidebar_header_sidebar_viewer_sidebar_panel] h-screen overflow-hidden fixed w-full top-0 left-0">
      <Sidebar
        configuratorType={CONFIGURATOR_TYPES.TABLE}
        onTemplateSelect={handleDesignSelect}
        onDesignSelect={handleDesignSelect}
        session={session}
        setSession={setSession}
        viewport={viewport}
        setViewport={setViewport}
      >
        <MyDesigns 
          onSelect={handleDesignSelect} 
          currentConfiguratorType={CONFIGURATOR_TYPES.TABLE}
        />
      </Sidebar>
      
      {/* Main content container */}
      <div className="flex h-screen w-screen relative">
        {/* 3D viewer container */}
        <div className="w-full h-screen flex justify-center items-center overflow-hidden">
          <Suspense fallback={null}>
            <ShapeDiverViewer
              session={session}
              setSession={setSession}
              setViewport={setViewport} 
              isLoading={isLoading}
              isTransitioning={isTransitioning}
              ticket={configuratorConfigs.table.ticket}
            />
          </Suspense>
        </div>
          {/* Parameter panel container */}
          {isAuthenticated && (
          <div className={`fixed flex flex-col gap-2 h-screen bottom-0 top-0 right-0 pr-2 pb-2 pt-20 w-80 rounded-3xl transition-transform duration-500 ease-in-out`}>
            <div className='flex-1 overflow-hidden'>
              <Suspense fallback={null}>
                <ParameterPanel
                  selectedComponent={selectedComponent}
                  session={session}
                  viewport={viewport}
                  configuratorType={CONFIGURATOR_TYPES.TABLE}
                />
              </Suspense>
            </div>
            <div className='bg-white w-full h-32 rounded-3xl p-6 flex flex-col justify-between'>
              <div className='flex flex-row justify-between pb-2'>
                <h1 className='text-md text-gray-500'>Total Price:</h1>
                <h1 className='text-2xl text-black font-bold'>$550.00</h1>
              </div>
              <BuyButton configuratorType={CONFIGURATOR_TYPES.TABLE} />
            </div>
          </div>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default TableConfigurator; 