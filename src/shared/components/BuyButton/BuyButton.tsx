import React from 'react';
import './BuyButton.css';
import { CONFIGURATOR_TYPES, ConfiguratorType } from '../../../shared/constants/configuratorTypes';

interface BuyButtonProps {
  configuratorType: ConfiguratorType;
}

export const BuyButton: React.FC<BuyButtonProps> = ({ configuratorType }) => {
  const paymentLink = configuratorType === CONFIGURATOR_TYPES.VULZ 
    ? 'https://buy.stripe.com/test_3csbK516ch0Fe5y144'  // Vulz payment link
    : 'https://buy.stripe.com/test_9AQ3dz7uAeSxbXqeUV';  // 

  const handleClick = () => {
    console.log('Buy button clicked, configuratorType:', configuratorType); // Debug log
    window.open(paymentLink, '_blank');
  };

  return (
    <div className="buy-container">
      <div className="buy-button-container">
        <button 
          className="buy-button"
          onClick={handleClick}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}; 