import React, { useState, useRef, useEffect } from 'react';
import { ISessionApi, IViewportApi } from '@shapediver/viewer';
import ShareMenu from './ShareMenu';
import ShareIcon from './icons/ShareIcon';

interface ShareButtonProps {
  session: ISessionApi | null;
  viewport: IViewportApi | null;
}

const ShareButton: React.FC<ShareButtonProps> = ({ session, viewport }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="share-container" ref={containerRef}>
      <button 
        className="share-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <ShareIcon />
        Share
      </button>
      {isMenuOpen && (
        <ShareMenu 
          onClose={() => setIsMenuOpen(false)}
          session={session}
          viewport={viewport}
        />
      )}
    </div>
  );
};

export default ShareButton;