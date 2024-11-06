import React, { useState, useRef, useEffect } from 'react';
import { ISessionApi, IViewportApi } from '@shapediver/viewer';
import ARPreview from './components/ARPreview/ARPreview';
import ExportOptions from './components/ExportOptions/ExportOptions';
import ARIcon from './icons/ARIcon';
import ExportIcon from './icons/ExportIcon';
import './ShareMenu.css';

interface ShareMenuProps {
  onClose: () => void;
  session: ISessionApi | null;
  viewport: IViewportApi | null;
  onHeightChange?: (height: number) => void;
}

const ShareMenu: React.FC<ShareMenuProps> = ({ onClose, session, viewport, onHeightChange }) => {
  const [activeView, setActiveView] = useState<'main' | 'ar' | 'export'>('main');
  const menuRef = useRef<HTMLDivElement>(null);
  const [shareMenuHeight, setShareMenuHeight] = useState<number>(0);

  useEffect(() => {
    if (menuRef.current) {
      const height = menuRef.current.getBoundingClientRect().height;
      const viewportHeight = window.innerHeight;
      setShareMenuHeight((height / viewportHeight) * 100); // Convert to vh units
    }
  }, [activeView]);

  useEffect(() => {
    if (menuRef.current && onHeightChange) {
      const height = menuRef.current.getBoundingClientRect().height;
      onHeightChange(height);
    }
  }, [activeView, onHeightChange]);

  return (
    <div className="share-menu" ref={menuRef}>
      {activeView === 'main' && (
        <>
          <h3 className="share-title">Share this bike</h3>
          <div className="share-options">
            <button 
              className="share-option-button"
              onClick={() => setActiveView('ar')}
            >
              <ARIcon />
              AR
            </button>
            <button 
              className="share-option-button"
              onClick={() => setActiveView('export')}
            >
              <ExportIcon />
              Export
            </button>
          </div>
        </>
      )}
      
      {activeView === 'ar' && (
        <ARPreview 
          onBack={() => setActiveView('main')} 
          viewport={viewport}
        />
      )}
      
      {activeView === 'export' && (
        <ExportOptions 
          onBack={() => setActiveView('main')}
          session={session}
          viewport={viewport}
        />
      )}
    </div>
  );
};

export default ShareMenu;