// Import React for JSX support
import React, { useState, useRef } from 'react';
// Import hook to detect mobile screen sizes
import { useMediaQuery } from '@mantine/hooks';
// Import type definition for parameter objects
import { ParameterDefinition } from '../../../types';
// Import component-specific styles
import './BasePanel.css';

// Define props interface for BasePanel component
interface BasePanelProps {
  // Array of parameter objects to display
  parameters: ParameterDefinition[];
  // Whether panel is currently selected/active
  isActive?: boolean;
  // Optional CSS class name
  className?: string;
  // Optional function to render custom desktop layout (used by SurfacePanel)
  renderDesktopContent?: () => React.ReactNode;
  // Required function to render individual parameter UI
  renderParameter: (param: ParameterDefinition) => React.ReactNode;
}

// Main panel component that handles both mobile and desktop layouts
export const BasePanel: React.FC<BasePanelProps> = ({
  parameters,
  isActive = false,
  className = '',
  renderDesktopContent,
  renderParameter
}) => {
  const [activeParamIndex, setActiveParamIndex] = useState(0);
  // Check if viewport is mobile sized
  const isMobile = useMediaQuery('(max-width: 768px)');
  // Sort parameters alphabetically by name
  const sortedParameters = parameters.sort((a, b) => a.name.localeCompare(b.name));
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleParameterClick = (index: number) => {
    setActiveParamIndex(index);
    
    const container = scrollContainerRef.current;
    if (!container) return;
    
    // Get all cards and calculate the scroll position
    const cards = container.getElementsByClassName('parameter-card');
    if (cards.length <= index) return;

    // Calculate the exact scroll position
    const card = cards[index] as HTMLElement;
    const containerWidth = container.offsetWidth;
    const cardWidth = card.offsetWidth;
    
    // Center the card in the container
    const scrollPosition = card.offsetLeft - (containerWidth - cardWidth) / 2;
    
    // Smooth scroll to the position
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  };

  const renderMobileParameter = (param: ParameterDefinition) => (
    <div className="parameter-container">
      {renderParameter(param)}
      <div className="parameter-navigation">
        {sortedParameters.map((p, index) => (
          <div
            key={p.id}
            className={`parameter-name ${p.id === param.id ? 'active' : ''}`}
            onClick={() => handleParameterClick(index)}
          >
            {p.name}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    // Main container with dynamic classes for mobile/active states
    <div className={`panel ${className} ${isMobile ? 'mobile' : ''} ${isActive ? 'active' : ''}`}>
      {isMobile ? (
        // Mobile layout: scrollable list of parameter cards
        <div className="parameter-scroll" ref={scrollContainerRef}>
          {sortedParameters.map(param => (
            // Container for each parameter with unique key
            <div key={param.id} className="parameter-card">
              {renderMobileParameter(param)}
            </div>
          ))}
        </div>
      ) : (
        // Desktop layout: either custom content or standard parameter list
        <div className="parameter-list">
          {renderDesktopContent ? renderDesktopContent() : 
            sortedParameters.map(param => (
              // Container for each parameter with unique key
              <div key={param.id} className="parameter-item">
                {renderParameter(param)}
              </div>
            ))
          }
        </div>
      )}
    </div>
  );
};