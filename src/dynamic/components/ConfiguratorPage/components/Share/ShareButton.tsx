import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ISessionApi, IViewportApi } from '@shapediver/viewer';
import ShareMenu from './ShareMenu';
import ShareIcon from './icons/ShareIcon';
import './ShareButton.css';
import QRCode from 'qrcode';

interface ShareButtonProps {
  session: ISessionApi | null;
  viewport: IViewportApi | null;
  onMenuOpen: (isOpen: boolean) => void;
  onMenuHeightChange?: (height: number) => void;
}

const ShareButton: React.FC<ShareButtonProps> = ({ session, viewport, onMenuOpen, onMenuHeightChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [qrCodeCache, setQrCodeCache] = useState<string | null>(null);

  useEffect(() => {
    onMenuOpen(isMenuOpen);
    console.log('Menu state changed:', isMenuOpen);
  }, [isMenuOpen, onMenuOpen]);

  const handleClick = () => {
    console.log('Share button clicked');
    setIsMenuOpen(!isMenuOpen);
  };

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

  const generateQRCode = useCallback(async () => {
    if (qrCodeCache) return qrCodeCache;
    
    // Generate QR code only when needed
    const qrCode = await QRCode.toDataURL(window.location.href);
    setQrCodeCache(qrCode);
    return qrCode;
  }, [qrCodeCache]);

  return (
    <div className={`share-container ${isMenuOpen ? 'menu-open' : ''}`} ref={containerRef}>
      <button 
        className="share-button"
        onClick={handleClick}
      >
        <ShareIcon />
        Share
      </button>
      {isMenuOpen && (
        <ShareMenu 
          onClose={() => setIsMenuOpen(false)}
          session={session}
          viewport={viewport}
          onHeightChange={onMenuHeightChange}
        />
      )}
    </div>
  );
};

export default ShareButton;