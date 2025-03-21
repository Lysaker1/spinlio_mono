// Import necessary components and utilities for the app
import { useAuth0 } from '@auth0/auth0-react';
import { Cancel } from '../CheckoutResult/Cancel';
import { Success } from '../CheckoutResult/Success';
import MyDesigns from '../ConfiguratorPage/components/Sidebar/Sections/MyDesigns';
import Footer from '../Footer';
import { createTheme, Loader, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import React, { lazy, useEffect, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { pageView } from '@shared/utils/analytics';
import { ErrorBoundary } from 'react-error-boundary';
import CustomLoader from '../Loader/Loader';
import MobileWarning from '../MobileWarning/MobileWarning';

// Don't load components right away - wait until we need them
const ConfiguratorPage = lazy(() => import('../ConfiguratorPage'));
const VulzConfigurator = lazy(() => import('../ConfiguratorPage/variants/VulzConfigurator/VulzConfigurator'));
const StepThruConfigurator = lazy(() => import('../ConfiguratorPage/variants/StepThruConfigurator/StepThruConfigurator'));
const UrbanConfigurator = lazy(() => import('../ConfiguratorPage/variants/UrbanConfigurator/UrbanConfigurator'));
const BookshelfConfigurator = lazy(() => import('../ConfiguratorPage/variants/BookshelfConfigurator/BookshelfConfigurator'));
const SofaConfigurator = lazy(() => import('../ConfiguratorPage/variants/SofaConfigurator/SofaConfigurator'));
const TableConfigurator = lazy(() => import('../ConfiguratorPage/variants/TableConfigurator/TableConfigurator'));

// Create a simple Auth Callback component that redirects
const SimpleAuthCallback = () => {
  const { isLoading, isAuthenticated } = useAuth0();
  
  useEffect(() => {
    if (!isLoading) {
      const redirectPath = localStorage.getItem('auth_redirect_path') || '/';
      localStorage.removeItem('auth_redirect_path');
      window.location.href = redirectPath;
    }
  }, [isLoading, isAuthenticated]);
  
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center p-8 bg-white rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Completing login...</h2>
        <p className="mb-4">You'll be redirected in a moment</p>
        <div className="loader mx-auto"></div>
      </div>
    </div>
  );
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const isMobile = window.innerWidth <= 768;
  const isConfiguratorRoute = location.pathname === '/' || 
                             location.pathname.includes('/configurator') ||
                             location.pathname.includes('/vulz') ||
                             location.pathname.includes('/stepthru') ||
                             location.pathname.includes('/urban') ||
                             location.pathname.includes('/bookshelf') ||
                             location.pathname.includes('/sofa') ||
                             location.pathname.includes('/table');
  const isDashboardRoute = location.pathname.startsWith('/dashboard');

  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    pageView(location.pathname + location.search);
  }, [location]);

  if (isMobile && isConfiguratorRoute) {
    return <MobileWarning />;
  }


  return (
    <div className="app">
      <main className="main-content">
        <Routes>
          {/* Default route - goes straight to configurator */}
          <Route 
            path="/" 
            element={
              <Suspense fallback={<div className="loading-placeholder" />}>
                <ConfiguratorPage isAuthenticated={isAuthenticated} />
              </Suspense>
            } 
          />
          
          {/* Other routes */}
          <Route 
            path="/configurator" 
            element={
              <Suspense fallback={<div className="loading-placeholder" />}>
                <ConfiguratorPage isAuthenticated={isAuthenticated} />
              </Suspense>
            } 
            
           />
          <Route 
            path="/vulz" 
            element={
              <Suspense fallback={<div className="loading-placeholder" />}>
                <VulzConfigurator isAuthenticated={isAuthenticated} />
              </Suspense>
            } 
          />
          <Route 
            path="/vulz/stepthru" 
            element={
              <Suspense fallback={<div className="loading-placeholder" />}>
                <StepThruConfigurator isAuthenticated={isAuthenticated} />
              </Suspense>
            } 
          />
          <Route 
            path="/vulz/urban" 
            element={
              <Suspense fallback={<div className="loading-placeholder" />}>
                <UrbanConfigurator isAuthenticated={isAuthenticated} />
              </Suspense>
            } 
          />
          <Route 
            path="/bookshelf" 
            element={
              <Suspense fallback={<div className="loading-placeholder" />}>
                <BookshelfConfigurator isAuthenticated={isAuthenticated} />
              </Suspense>
            } 
          />
          <Route 
            path="/sofa" 
            element={
              <Suspense fallback={<div className="loading-placeholder" />}>
                <SofaConfigurator isAuthenticated={isAuthenticated} />
              </Suspense>
            } 
          />
          <Route 
            path="/table" 
            element={
              <Suspense fallback={<div className="loading-placeholder" />}>
                <TableConfigurator isAuthenticated={isAuthenticated} />
              </Suspense>
            } 
          />
          <Route 
            path="/success" 
            element={
              <Suspense fallback={<div className="loading-placeholder" />}>
                <Success />
              </Suspense>
            } 
          />
          <Route 
            path="/cancel" 
            element={
              <Suspense fallback={<div className="loading-placeholder" />}>
                <Cancel />
              </Suspense>
            } 
          />
          <Route 
            path="/callback" 
            element={<SimpleAuthCallback />}
          />         
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {

  const theme = createTheme({
    components: {
      Loader: {
        defaultProps: {
          loaders: { ...Loader.defaultLoaders, custom: CustomLoader },
          type: 'custom',
        },
      },
    },
  });
  
  return (
    <ErrorBoundary fallbackRender={({ error }) => (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
          <h2 className="text-xl font-bold mb-4">Something went wrong</h2>
          <p className="text-gray-700 mb-4">{error.message}</p>
        </div>
      </div>
    )}>
      <MantineProvider theme={theme}>
        <Notifications />
        <Router>
          <AppContent />
        </Router>
      </MantineProvider>
      <Toaster position="top-right" />
    </ErrorBoundary>
  );
};

export default App;