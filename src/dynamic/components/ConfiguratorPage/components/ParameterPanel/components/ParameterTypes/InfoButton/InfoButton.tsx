import React, { useState } from 'react';
import './InfoButton.css';

interface InfoButtonProps {
  content: React.ReactNode;
}

export const InfoButton: React.FC<InfoButtonProps> = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        className="info-button"
        onClick={() => setIsOpen(true)}
        aria-label="Show information"
      >
        i
      </button>

      {isOpen && (
        <div className="info-popup-overlay" onClick={() => setIsOpen(false)}>
          <div 
            className="info-popup-content"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="close-button"
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