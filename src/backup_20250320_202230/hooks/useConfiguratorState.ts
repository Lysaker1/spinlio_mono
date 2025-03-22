import { useState, useEffect, useCallback, useRef } from 'react';
import { ISessionApi, IViewportApi, FLAG_TYPE } from '@shapediver/viewer';
import { useLocation, useNavigate } from 'react-router-dom';
import { configuratorConfigs } from '../components/ConfiguratorPage/config/configuratorConfig';
import { ConfiguratorType } from '../components/ConfiguratorPage/config/configuratorConfig';
import { useAuth0 } from '@auth0/auth0-react';

export const useConfiguratorState = (configuratorType: ConfiguratorType) => {
  const [session, setSession] = useState<ISessionApi | null>(null);
  const [viewport, setViewport] = useState<IViewportApi | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const [shareMenuHeight, setShareMenuHeight] = useState(0);
  const [isSaveMenuOpen, setIsSaveMenuOpen] = useState(false);
  const [saveMenuHeight, setSaveMenuHeight] = useState(0);
  const [selectedComponent, setSelectedComponent] = useState('');
  const { isAuthenticated } = useAuth0();

  const location = useLocation();
  const navigate = useNavigate();

  // Track cleanup status to prevent duplicate cleanups
  const cleanupInProgress = useRef(false);

  const performCleanup = useCallback(async () => {
    if (cleanupInProgress.current) {
      console.debug('Cleanup already in progress, skipping');
      return;
    }
    
    console.debug(`Starting cleanup for ${configuratorType} configurator`);
    try {
      cleanupInProgress.current = true;

      if (session) {
        try {
          await session.close();
        } catch (error) {
          console.error('Error closing session:', error);
        } finally {
          setSession(null);
        }
      }

      if (viewport) {
        try {
          await viewport.close();
        } catch (error) {
          console.error('Error closing viewport:', error);
        } finally {
          setViewport(null);
        }
      }
    } catch (error) {
      console.error('Fatal cleanup error:', error);
    } finally {
      cleanupInProgress.current = false;
    }
  }, [session, viewport, configuratorType]);

  // Handle configurator type changes
  useEffect(() => {
    let mounted = true;

    const handleTransition = async () => {
      setIsTransitioning(true);
      // Wait for cleanup to complete
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (mounted) {
        setIsTransitioning(false);
      }
    };

    handleTransition();

    return () => {
      mounted = false;
    };
  }, [configuratorType]);

  // Combined cleanup effect
  useEffect(() => {
    let mounted = true;

    if (isTransitioning && mounted && !cleanupInProgress.current) {
      performCleanup();
    }

    return () => {
      mounted = false;
    };
  }, [isTransitioning, performCleanup]);

  // Menu height effects
  useEffect(() => {
    document.documentElement.style.setProperty('--share-menu-height', `${shareMenuHeight}vh`);
  }, [shareMenuHeight]);

  useEffect(() => {
    document.documentElement.style.setProperty('--save-menu-height', `${saveMenuHeight}vh`);
  }, [saveMenuHeight]);

  const handleDesignSelect = useCallback(async (parameters: Record<string, any>) => {
    if (!session || !viewport) return;

    try {
      const token = viewport.addFlag(FLAG_TYPE.BUSY_MODE);
      await session.customize(parameters);
      
      if (session.node) {
        await viewport.updateNode(session.node);
        viewport.update();
        viewport.render();
      }
      
      if (token) viewport.removeFlag(token);
    } catch (error) {
      console.error('Error applying design:', error);
    }
  }, [session, viewport]);

  // Modified design parameters loading with proper cleanup and loading state
  useEffect(() => {
    let mounted = true;

    const loadDesignParameters = async () => {
      if (!location.state?.designParameters || !session || !viewport) return;
      
      try {
        setIsLoading(true);
        await handleDesignSelect(location.state.designParameters);
        // Clear location state after successful application
        if (mounted) {
          navigate(location.pathname, { replace: true });
        }
      } catch (error) {
        console.error('Error loading design parameters:', error);
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    loadDesignParameters();

    return () => {
      mounted = false;
    };
  }, [session, viewport, location.state, navigate, handleDesignSelect]);

  return {
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
    setIsLoading,
    handleDesignSelect,
    setIsShareMenuOpen,
    setShareMenuHeight,
    setIsSaveMenuOpen,
    setSaveMenuHeight,
    setSelectedComponent,
    isAuthenticated,
    ticket: configuratorConfigs[configuratorType.toLowerCase() as ConfiguratorType]?.ticket || (() => {
      console.error(`Invalid configurator type: ${configuratorType}`);
      return configuratorConfigs.default.ticket;
    })()
  };
};
