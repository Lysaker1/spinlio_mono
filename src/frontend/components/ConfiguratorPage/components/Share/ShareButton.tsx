import React, { useState, useRef, useEffect } from 'react';
import { ISessionApi, IViewportApi } from '@shapediver/viewer';
import ARPreview from './components/ARPreview/ARPreview';
import ExportOptions from './components/ExportOptions/ExportOptions';
import ARIcon from './icons/ARIcon';
import ExportIcon from './icons/ExportIcon';
import { Menu } from '@mantine/core';

interface ShareButtonProps {
  session: ISessionApi | null;
  viewport: IViewportApi | null;
}

const ShareButton: React.FC<ShareButtonProps> = ({ session, viewport }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [activeView, setActiveView] = useState<'main' | 'ar' | 'export'>('main');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen) {
        const shareMenu = menuRef.current;
        const shareButton = buttonRef.current;
        const clickTarget = event.target as Node;

        const clickedInsideMenu = shareMenu?.contains(clickTarget);
        const clickedInsideButton = shareButton?.contains(clickTarget);

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

  return (
    <>
    <Menu opened={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
      <Menu.Target>
        <button className="bg-black text-white rounded-full px-12 py-2 h-12 cursor-pointer" ref={buttonRef} onClick={() => setIsMenuOpen(true)}>Share</button>
      </Menu.Target>
      <Menu.Dropdown className="bg-white rounded-lg text-black p-6 mt-2 w-64 min-w-64 max-w-64" ref={menuRef}>
        <div ref={menuRef}>
          {activeView === 'main' && (
            <>
              <h3 className="text-black text-2xl font-medium mb-2 text-left">Share this bike</h3>
              <button className="text-black bg-none cursor-pointer opacity-80 absolute top-0 right-2 text-2xl" onClick={() => setIsMenuOpen(false)}>×</button>
              <div className="flex justify-between gap-2">
                <div className="w-1/2">
                  <button
                    className="w-full flex items-center justify-center gap-2 outline-none relative px-6 rounded-full p-2 text-white text-sm bg-black transition-colors duration-200 ease-in-out hover:bg-gray-800"
                    onClick={() => setActiveView('ar')}
                  >
                    <ARIcon/>
                    AR
                  </button>
                </div>
                <div className="w-1/2">
                  <button
                    className="w-full flex items-center justify-center gap-2 outline-none relative rounded-full py-2 px-3 text-white text-sm bg-black transition-colors duration-200 ease-in-out hover:bg-gray-800"
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
      </Menu.Dropdown>
    </Menu>
    
    </>
  );
};

export default ShareButton;
