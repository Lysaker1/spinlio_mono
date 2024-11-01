import React, { useState } from 'react';
import { ISessionApi, IViewportApi } from '@shapediver/viewer';
import ExportMenu from '../ExportMenu/ExportMenu';
import './ShareButton.css';

interface ShareButtonProps {
  session: ISessionApi | null;
  viewport: IViewportApi | null;
}

const ShareButton: React.FC<ShareButtonProps> = ({ session, viewport }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showExportMenu, setShowExportMenu] = useState(false);

  const handleARClick = async () => {
    if (viewport) {
      if (viewport.viewableInAR()) {
        await viewport.viewInAR();
      } else {
        const qr = await viewport.createArSessionLink(undefined, true);
        // Handle QR code display
      }
    }
  };

  return (
    <div className="share-button-wrapper">
      {!isExpanded ? (
        <button 
          className="share-button" 
          onClick={() => setIsExpanded(true)}
        >
          Share
        </button>
      ) : (
        <div className="share-options">
          <button 
            className="share-option-button"
            onClick={handleARClick}
          >
            AR Preview
          </button>
          <button 
            className="share-option-button"
            onClick={() => setShowExportMenu(true)}
          >
            Export
          </button>
        </div>
      )}

      {showExportMenu && (
        <ExportMenu
          session={session}
          viewport={viewport}
          onClose={() => {
            setShowExportMenu(false);
            setIsExpanded(false);
          }}
        />
      )}
    </div>
  );
};

export default ShareButton;