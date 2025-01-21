import React, { useState, useEffect, useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { DesignStorageService } from '../../services/designStorage';
import { SavedDesign, ConfiguratorType } from '../../types/SavedDesign';
import './SaveDesignButton.css';
import { AuthenticatedFeature } from '../AuthenticatedFeature/AuthenticatedFeature';
import { ISessionApi, IViewportApi } from '@shapediver/viewer';

interface SaveDesignButtonProps {
  getCurrentParameters: () => Record<string, any>;
  configuratorType: ConfiguratorType;
  viewport?: IViewportApi | null;
  session?: ISessionApi | null;
  onMenuOpen: (isOpen: boolean) => void;
  onMenuHeightChange?: (height: number) => void;
}

export const SaveDesignButton: React.FC<SaveDesignButtonProps> = ({ 
  getCurrentParameters,
  configuratorType,
  viewport,
  onMenuHeightChange
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [designName, setDesignName] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const { user, loginWithRedirect, getAccessTokenSilently } = useAuth0();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isModalOpen) {
        const saveMenu = document.querySelector('.save-menu');
        const saveButton = buttonRef.current;
        const clickTarget = event.target as Node;

        const clickedInsideMenu = saveMenu?.contains(clickTarget);
        const clickedInsideButton = saveButton?.contains(clickTarget);
        
        if (!clickedInsideMenu && !clickedInsideButton) {
          setIsModalOpen(false);
        }
      }
    };

    if (isModalOpen) {
      window.addEventListener('mousedown', handleClickOutside, true);
    }

    return () => {
      window.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (menuRef.current && isModalOpen) {
      const height = menuRef.current.getBoundingClientRect().height;
      const heightInVh = (height / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--save-menu-height', `${heightInVh}vh`);
      onMenuHeightChange?.(Math.max(15, heightInVh));
    } else {
      document.documentElement.style.setProperty('--save-menu-height', '0px');
      onMenuHeightChange?.(0);
    }
  }, [isModalOpen, onMenuHeightChange]);

  const handleButtonClick = () => {
    console.log('Save button clicked');
    setIsModalOpen(true);
  };

  const captureScreenshot = async (): Promise<string> => {
    if (!viewport) {
      console.warn('Viewport not available for screenshot');
      return '';
    }

    try {
      // Take screenshot and ensure it's base64 format
      const screenshotData = viewport.getScreenshot();
      if (!screenshotData.startsWith('data:image')) {
        console.error('Invalid screenshot format:', screenshotData.substring(0, 50));
        return '';
      }
      return screenshotData;
    } catch (error) {
      console.error('Error capturing screenshot:', error);
      return '';
    }
  };

  const handleSave = async () => {
    if (!user?.sub || !designName.trim()) {
      alert('Please log in and enter a design name to save your design');
      loginWithRedirect();
      return;
    }

    setIsSaving(true);
    try {
      console.log('1. Getting parameters...');
      const parameters = getCurrentParameters();
      
      console.log('2. Capturing screenshot...');
      const screenshotData = await captureScreenshot();
      if (!screenshotData) {
        throw new Error('Failed to capture screenshot');
      }
      console.log('Screenshot data length:', screenshotData.length);
      
      console.log('3. Getting auth token...');
      const token = await getAccessTokenSilently();
      
      const design: Omit<SavedDesign, 'id' | 'created_at'> = {
        name: designName,
        user_id: user.sub,
        description: `${configuratorType} bike configuration`,
        parameters,
        configurator_type: configuratorType as ConfiguratorType,
        thumbnail_url: screenshotData
      };
      
      console.log('4. Saving design...');
      const savedDesign = await DesignStorageService.saveDesign(design, token);
      console.log('5. Design saved:', savedDesign);
      
      setIsModalOpen(false);
      setDesignName('');
    } catch (error) {
      console.error('Save error:', error);
      alert('Failed to save design. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <AuthenticatedFeature
      fallback={
        <div className="save-container">
          <div className="save-button-container">
            <button
              className="save-button"
              onClick={() => loginWithRedirect()}
              aria-label="Save design"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16L21 8V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 21V13H7V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 3V8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="save-button-text">Save</span>
            </button>
          </div>
        </div>
      }
    >
      <div className={`save-container ${isModalOpen ? 'menu-open' : ''}`}>
        <div className="save-button-container">
          <button
            ref={buttonRef}
            onClick={handleButtonClick}
            className="save-button"
            aria-label="Save design"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16L21 8V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 21V13H7V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 3V8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="save-button-text">Save</span>
          </button>
        </div>

        {isModalOpen && (
          <div className="save-menu" ref={menuRef}>
            <h3 className="save-title">Save Your Design</h3>
            <div className="save-form">
              <input
                type="text"
                className="save-input"
                value={designName}
                onChange={(e) => setDesignName(e.currentTarget.value)}
                placeholder="Enter a name for your design"
                disabled={isSaving}
              />
              <div className="save-button-container">
                <button
                  onClick={handleSave}
                  className="save-option-button"
                  disabled={!designName.trim() || isSaving}
                >
                  {isSaving ? 'Saving...' : 'Save Design'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AuthenticatedFeature>
  );
};