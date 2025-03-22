import React, { useState } from 'react';

interface InfoButtonProps {
  content: React.ReactNode;
}

export const InfoButton: React.FC<InfoButtonProps> = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        className="w-6 h-6 rounded-full border border-black/50 bg-transparent text-black/90 text-sm font-italic cursor-pointer flex items-center justify-center transition-all duration-200 ease-in-out ml-auto"
        onClick={() => setIsOpen(true)}
        aria-label="Show information"
      >
        i
      </button>

      {isOpen && (
        <div className="rounded-3xl fixed top-0 left-0 right-0 bottom-0 bg-white/50 backdrop-blur-4 flex items-center justify-center z-1000 p-4" onClick={() => setIsOpen(false)}>
          <div 
            className="w-full bg-white/95 border border-black/10 backdrop-blur-sm rounded-lg p-4 relative text-black/90"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-2 right-2 w-7 h-7 rounded-full border border-black/20 bg-transparent text-black/80 text-lg font-bold cursor-pointer flex items-center justify-center transition-all duration-200 ease-in-out"
              onClick={() => setIsOpen(false)}
              aria-label="Close information"
            >
              ×
            </button>
            {content}
          </div>
        </div>
      )}
    </>
  );
};