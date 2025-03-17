import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { DesignStorageService } from '../../services/designStorage';
import { SavedDesign } from '../../types/SavedDesign';
import { AuthenticatedFeature } from '../AuthenticatedFeature/AuthenticatedFeature';
import { ISessionApi, IViewportApi } from '@shapediver/viewer';
import { ConfiguratorType } from '../../../dynamic/components/ConfiguratorPage/config/configuratorConfig';
import { logger } from '../../../shared/utils/logger';
import { Menu } from '@mantine/core';

interface SaveDesignButtonProps {
  getCurrentParameters: () => Record<string, any>;
  configuratorType: ConfiguratorType;
  viewport: IViewportApi | null;
  session: ISessionApi | null;
}


export const SaveDesignButton: React.FC<SaveDesignButtonProps> = ({
  getCurrentParameters,
  configuratorType,
  viewport,
  session
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [designName, setDesignName] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const { user, loginWithRedirect, getAccessTokenSilently } = useAuth0();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isModalOpen) {
        const saveMenu = document.querySelector('.save-menu');
        const saveButton = buttonRef.current;
        const clickTarget = event.target as Node;

        const clickedInsideMenu = saveMenu?.contains(clickTarget);
        const clickedInsideButton = saveButton?.contains(clickTarget);
        const clickedInsideInput = inputRef.current?.contains(clickTarget);

        if (!clickedInsideMenu && !clickedInsideButton && !clickedInsideInput) {
          setIsModalOpen(false);
        }
      }
    };

    if (isModalOpen) {
      window.addEventListener('click', handleClickOutside, true);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside, true);
    };
  }, [isModalOpen]);

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

      logger.debug('3. Getting auth token...');
      const token = await getAccessTokenSilently();

      const design: Omit<SavedDesign, 'id' | 'created_at'> = {
        name: designName,
        user_id: user.sub,
        description: `${configuratorType} bike configuration`,
        parameters,
        configurator_type: configuratorType as ConfiguratorType,
        thumbnail_url: screenshotData,
        is_public: true,
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
        <button
          className="bg-gray-200 text-black rounded-full px-12 py-2 h-12 cursor-pointer"
          onClick={() => loginWithRedirect()}
        >
          Save
        </button>
      }
    >
      <div>
        <div>
          <Menu opened={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <Menu.Target>
              <button
                ref={buttonRef}
                onClick={handleButtonClick}
                className="bg-gray-200 text-black rounded-full px-12 py-2 h-12 cursor-pointer"
              >
                Save
              </button>
            </Menu.Target>
            <Menu.Dropdown className="bg-white rounded-xl p-2 text-center mt-2" ref={menuRef}>
                <button className="absolute top-0 right-1 text-2xl" onClick={() => setIsModalOpen(false)} aria-label="Close">
                  &times;
                </button>
                <h3 className="text-center">Save Your Design</h3>
                <div className="save-form">
                  <input
                    ref={inputRef}
                    type="text"
                    className="bg-gray-bg rounded-full w-full px-4 py-2 my-4"
                    value={designName}
                    onChange={(e) => setDesignName(e.currentTarget.value)}
                    placeholder="Name your design"
                    disabled={isSaving}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && designName.trim() && !isSaving) {
                        handleSave();
                      }
                    }}
                  />
                  <div>
                    <button
                      onClick={handleSave}
                      className={`rounded-full w-full h-8 ${designName.trim() ? 'bg-black text-white' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                      disabled={!designName.trim() || isSaving}
                    >
                      {isSaving ? 'Saving...' : 'Save Design'}
                    </button>
                  </div>
                </div>  
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
    </AuthenticatedFeature>
  );
};