import React, { useState } from 'react';
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
}

const ShareMenu: React.FC<ShareMenuProps> = ({ onClose, session, viewport }) => {
  const [activeView, setActiveView] = useState<'main' | 'ar' | 'export'>('main');

  return (
    <div className="share-menu">
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