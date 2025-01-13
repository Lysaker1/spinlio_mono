import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ISessionApi, IViewportApi } from '@shapediver/viewer';
import ShareMenu from './ShareMenu';
import ShareIcon from './icons/ShareIcon';
import './ShareButton.css';
import QRCode from 'qrcode';
import ARIcon from "@dynamic/components/ConfiguratorPage/components/Share/icons/ARIcon";

interface ShareButtonProps {
  session: ISessionApi | null;
  viewport: IViewportApi | null;
  onMenuOpen: (isOpen: boolean) => void;
  onMenuHeightChange?: (height: number) => void;
}

const ShareButton: React.FC<ShareButtonProps> = ({ session, viewport, onMenuOpen, onMenuHeightChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);

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
      if (isMenuOpen && containerRef.current) {
        const shareMenu = document.querySelector('.share-menu');
        const shareButton = containerRef.current.querySelector('.share-button');
        
        const clickedInsideMenu = shareMenu?.contains(event.target as Node);
        const clickedInsideButton = shareButton?.contains(event.target as Node);
        
        if (!clickedInsideMenu && !clickedInsideButton) {
          setIsMenuOpen(false);
        }
      }
    };

    if (isMenuOpen) {
      window.addEventListener('click', handleClickOutside, true);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside, true);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!viewport) return;

    const cachedQr = localStorage.getItem('arQrCodeUrl');
    const canViewInAR = viewport.viewableInAR();

    if (!cachedQr && !canViewInAR && !isRequestInProgress) {
      const timeoutId = setTimeout(() => {
        const generateQr = async () => {
          try {
            setIsRequestInProgress(true);
            const qr = await viewport.createArSessionLink(undefined, true);
            localStorage.setItem('arQrCodeUrl', qr);
          } catch (error) {
            console.error('Error generating QR code:', error);
          }
        };
        generateQr();
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [viewport, isRequestInProgress]);


  return (
      <div className={`share-container ${isMenuOpen ? 'menu-open' : ''}`} ref={containerRef}>

        <div className="share-button-container">
          <button
              className="share-button"
              onClick={handleClick}
          >
            <p className="share-button-text">Share</p>
            <ShareIcon/>
          </button>
        </div>


        {isMenuOpen && (
            <ShareMenu
                onClose={() => setIsMenuOpen(false)}
                isMenuOpen={isMenuOpen}
                session={session}
                viewport={viewport}
                onHeightChange={onMenuHeightChange}
            />
        )}
      </div>
  );
};

export default ShareButton;
