// Import necessary components and utilities for the app
import { useAuth0 } from '@auth0/auth0-react';
import { Cancel } from '@frontend/components/CheckoutResult/Cancel';
import { Success } from '@frontend/components/CheckoutResult/Success';
import { MyDesigns } from '@frontend/components/ConfiguratorPage/components/Sidebar/Sections/MyDesigns';
import Footer from '@frontend/components/Footer';
import { createTheme, Loader, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import React, { lazy, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { pageView } from '../../utils/analytics';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import CustomLoader from '../Loader/Loader';
import MobileWarning from '../MobileWarning/MobileWarning';

// Import the AuthCallback component
const AuthCallback = lazy(() => import('../Auth/AuthCallback'));

// Don't load the big 3D page right away - wait until we need it
const ConfiguratorPage = lazy(() => 
  import('../ConfiguratorPage').then(module => ({
    default: module.default
  }))
);

const SupplierConfigurator = lazy(() => 
  import('../ConfiguratorPage/variants/SupplierConfigurator/SupplierConfigurator').then(module => ({
    default: module.default
  }))
);

// Import the BetaPage component
const BetaPage = lazy(() => 
  import('../BetaPage/BetaPage').then(module => ({
    default: module.default
  }))
);

const VulzConfigurator = lazy(() => 
  import('../ConfiguratorPage/variants/VulzConfigurator/VulzConfigurator').then(module => ({
    default: module.default
  }))
);

const DashboardRoutes = lazy(() => 
  import('../dashboard/routes/DashboardRoutes').then(module => ({
    default: module.default
  }))
);

const StepThruConfigurator = lazy(() => 
  import('../ConfiguratorPage/variants/StepThruConfigurator/StepThruConfigurator')
);

const UrbanConfigurator = lazy(() => 
  import('../ConfiguratorPage/variants/UrbanConfigurator/UrbanConfigurator')
);

const BookshelfConfigurator = lazy(() => 
  import('../ConfiguratorPage/variants/BookshelfConfigurator/BookshelfConfigurator')
);

const SofaConfigurator = lazy(() => 
  import('../ConfiguratorPage/variants/SofaConfigurator/SofaConfigurator')
);

const TableConfigurator = lazy(() => 
  import('../ConfiguratorPage/variants/TableConfigurator/TableConfigurator')
);

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

  if (isDashboardRoute) {
    return (
      <Routes>
        <Route path="/dashboard/*" element={
          <React.Suspense fallback={<div className="loading-placeholder" />}>
            <DashboardRoutes />
          </React.Suspense>
        } />
      </Routes>
    )
  }

  return (
    <div className="app">
      <main className="main-content">
        <Routes>
          {/* Default route - goes straight to configurator */}
          <Route 
            path="/" 
            element={
              <React.Suspense fallback={<div className="loading-placeholder" />}>
                <ConfiguratorPage isAuthenticated={isAuthenticated} />
              </React.Suspense>
            } 
          />
          
          {/* Other routes */}
          <Route 
            path="/configurator" 
            element={
              <React.Suspense fallback={<div className="loading-placeholder" />}>
                <ConfiguratorPage isAuthenticated={isAuthenticated} />
              </React.Suspense>
            } 
          />
          <Route 
            path="/supplier" 
            element={
              <React.Suspense fallback={<div className="loading-placeholder" />}>
                <SupplierConfigurator isAuthenticated={isAuthenticated} />
              </React.Suspense>
            } 
          />
          <Route 
            path="/beta" 
            element={
              <React.Suspense fallback={<div className="loading-placeholder" />}>
                <BetaPage />
              </React.Suspense>
            } 
          />
          <Route 
            path="/vulz" 
            element={
              <React.Suspense fallback={<div className="loading-placeholder" />}>
                <VulzConfigurator isAuthenticated={isAuthenticated} />
              </React.Suspense>
            } 
          />
          <Route 
            path="/vulz/stepthru" 
            element={
              <React.Suspense fallback={<div className="loading-placeholder" />}>
                <StepThruConfigurator isAuthenticated={isAuthenticated} />
              </React.Suspense>
            } 
          />
          <Route 
            path="/vulz/urban" 
            element={
              <React.Suspense fallback={<div className="loading-placeholder" />}>
                <UrbanConfigurator isAuthenticated={isAuthenticated} />
              </React.Suspense>
            } 
          />
          <Route 
            path="/bookshelf" 
            element={
              <React.Suspense fallback={<div className="loading-placeholder" />}>
                <BookshelfConfigurator isAuthenticated={isAuthenticated} />
              </React.Suspense>
            } 
          />
          <Route 
            path="/sofa" 
            element={
              <React.Suspense fallback={<div className="loading-placeholder" />}>
                <SofaConfigurator isAuthenticated={isAuthenticated} />
              </React.Suspense>
            } 
          />
          <Route 
            path="/table" 
            element={
              <React.Suspense fallback={<div className="loading-placeholder" />}>
                <TableConfigurator isAuthenticated={isAuthenticated} />
              </React.Suspense>
            } 
          />
          <Route 
            path="/success" 
            element={
              <React.Suspense fallback={<div className="loading-placeholder" />}>
                <Success />
              </React.Suspense>
            } 
          />
          <Route 
            path="/cancel" 
            element={
              <React.Suspense fallback={<div className="loading-placeholder" />}>
                <Cancel />
              </React.Suspense>
            } 
          />
          <Route 
            path="/callback" 
            element={
              <React.Suspense fallback={<div className="loading-placeholder" />}>
                <AuthCallback />
              </React.Suspense>
            } 
          />         
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

console.log('App: Runtime check:', {
  MyDesigns: MyDesigns,
  importedCorrectly: MyDesigns !== undefined,
  paths: {
    myDesigns: require.resolve('@frontend/components/ConfiguratorPage/components/Sidebar/Sections/MyDesigns'),
  }
});

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
    <ErrorBoundary>
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