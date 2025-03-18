import React, { useState, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { ISessionApi, IViewportApi } from '@shapediver/viewer';
import './SupplierConfigurator.css';
import ErrorBoundary from '../../../../../shared/components/ErrorBoundary/ErrorBoundary';
import { ParameterPanel } from '../../components/ParameterPanel';
import ShapeDiverViewer from '../../components/ShapeDiverViewer';
import { CONFIGURATOR_TYPES } from '@shared/constants/configuratorTypes';
import { Header } from '@shared/components';
import { MyDesigns } from '@dynamic/components/ConfiguratorPage/components/Sidebar/Sections/MyDesigns';
import { configuratorConfigs } from '../../config/configuratorConfig';
import Sidebar from '../../components/Sidebar/Sidebar';

const SupplierConfigurator: React.FC<{ isAuthenticated: boolean }> = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  const [selectedComponent, setSelectedComponent] = useState<string>('');
  const [session, setSession] = useState<ISessionApi | null>(null);
  const [viewport, setViewport] = useState<IViewportApi | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const handleBackToUser = () => {
    navigate('/');
  };

  return (
    <ErrorBoundary>
    <Header session={session} viewport={viewport} configuratorType={CONFIGURATOR_TYPES.STEPTHRU} />
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] grid-areas-[sidebar_header_sidebar_viewer_sidebar_panel] h-screen overflow-hidden fixed w-full top-0 left-0">
      <div className="w-64 bg-white text-black pt-20 px-4">
          <button 
            className="w-full bg-gray-bg text-black py-2 px-4 rounded-lg"
            onClick={handleBackToUser}
          >
            Back to User View
          </button>
          
          <div className="mt-8 text-black">
            <h3 className='text-black font-bold'>Product Management</h3>
            <button className="bg-gray-bg text-black py-2 px-4 rounded-lg w-full my-4">
              Upload New Products
            </button>
            <div className="text-black text-sm">
              Create new configurations to be displayed as templates in the user view
            </div>
          </div>
        </div>
      
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
                  configuratorType={CONFIGURATOR_TYPES.DEFAULT}
                />
              </Suspense>
            </div>
          </div>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default SupplierConfigurator;