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
  isMenuOpen: boolean;
}

const ShareMenu: React.FC<ShareMenuProps> = ({ onClose, session, viewport,isMenuOpen, onHeightChange }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [activeView, setActiveView] = useState<'main' | 'ar' | 'export'>('main');
  const [shareMenuHeight, setShareMenuHeight] = useState<number>(0);

  useEffect(() => {
    if (menuRef.current && onHeightChange) {
      const height = menuRef.current.getBoundingClientRect().height;
      const heightInVh = (height / window.innerHeight) * 100;
      onHeightChange(Math.max(15, heightInVh)); // Never less than 15vh
    }
  }, [onHeightChange, activeView]);

  useEffect(() => {
    if (activeView === 'ar' && onHeightChange) {
        onHeightChange(30)
    }
  }, [activeView]);

  return (
    <div className="share-menu" ref={menuRef}>
      {activeView === 'main' && (
        <>
          <h3 className="share-title">Share this bike</h3>
          <button className="close-button" onClick={onClose}>×</button>
          <div className="share-options">
            <div className="share-option-button-container-ar">
              <button
                  className="share-option-button share-button-ar"
                  onClick={() => setActiveView('ar')}
              >
                <ARIcon/>
                AR
              </button>
            </div>
            <div className="share-option-button-container-export">
            <button
                className="share-option-button share-button-export"
                onClick={() => setActiveView('export')}
            >
              <ExportIcon/>
              Export
            </button>
            </div>
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
