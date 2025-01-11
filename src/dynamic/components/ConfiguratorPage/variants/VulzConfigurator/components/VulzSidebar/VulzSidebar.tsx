import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ISessionApi } from '@shapediver/viewer';
import { Checkbox } from '../../../../components/ParameterPanel/components/ParameterTypes/Checkbox/Checkbox';
import { MyDesigns } from '@shared/components/MyDesigns/MyDesigns';
import './VulzSidebar.css';

interface VulzSidebarProps {
  onDesignSelect: (parameters: Record<string, any>) => void;
  session: ISessionApi | null;
  showOnlyFrame: boolean;
  showDimensions: boolean;
  onShowOnlyFrameChange: (value: boolean) => void;
  onShowDimensionsChange: (value: boolean) => void;
}

const VulzSidebar: React.FC<VulzSidebarProps> = ({
  onDesignSelect,
  session,
  showOnlyFrame,
  showDimensions,
  onShowOnlyFrameChange,
  onShowDimensionsChange,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState<'none' | 'settings' | 'myDesigns'>('none');
  const navigate = useNavigate();

  const handleClickOutside = useCallback((e: MouseEvent) => {
    const sidebar = document.querySelector('.vulz-sidebar');
    if (sidebar && !sidebar.contains(e.target as Node)) {
      setIsExpanded(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const handleSettingsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSection(activeSection === 'settings' ? 'none' : 'settings');
  };

  const handleShowOnlyFrameChange = (_: any, definition: any) => {
    if (session) {
      session.customize({
        'b5bf6f12-a078-4417-a4ae-d2049807178c': (!showOnlyFrame).toString()
      });
      onShowOnlyFrameChange(!showOnlyFrame);
    }
  };

  const handleBackToMain = () => {
    navigate('/');
  };

  const handleMyDesignsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSection(activeSection === 'myDesigns' ? 'none' : 'myDesigns');
  };

  return (
    <div className={`vulz-sidebar ${isExpanded ? 'expanded' : ''}`}>
      {!isExpanded && (
        <button className="menu-button" onClick={handleMenuClick}>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </button>
      )}

      {isExpanded && (
        <>
          <button
            className="sidebar-button vulz-sidebar-button"
            onClick={handleBackToMain}
          >
            Back to Main
          </button>

          <button
            className={`sidebar-button ${activeSection === 'settings' ? 'active' : ''} vulz-sidebar-button`}
            onClick={handleSettingsClick}
          >
            Settings
          </button>

          <button
            className={`sidebar-button ${activeSection === 'myDesigns' ? 'active' : ''} vulz-sidebar-button`}
            onClick={handleMyDesignsClick}
          >
            My Designs
          </button>

          {activeSection === 'settings' && (
            <div className="settings-container visible">
              <Checkbox
                definition={{
                  id: 'b5bf6f12-a078-4417-a4ae-d2049807178c',
                  name: 'Show Only Frame',
                  type: 'checkbox',
                  category: 'geometry',
                  value: showOnlyFrame.toString()
                }}
                value={showOnlyFrame.toString()}
                onChange={handleShowOnlyFrameChange}
              />
            </div>
          )}

          {activeSection === 'myDesigns' && (
            <div className="template-container visible">
              <MyDesigns 
                onSelect={onDesignSelect}
                currentConfiguratorType="vulz"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default VulzSidebar;
