import React from 'react';
import './BuyButton.css';

interface BuyButtonProps {
  isVulz: boolean;
}

export const BuyButton: React.FC<BuyButtonProps> = ({ isVulz }) => {
  const paymentLink = isVulz 
    ? 'https://buy.stripe.com/test_3csbK516ch0Fe5y144'  // Vulz payment link
    : 'https://buy.stripe.com/test_9AQ3dz7uAeSxbXqeUV';  // 

  const handleClick = () => {
    console.log('Buy button clicked, isVulz:', isVulz); // Debug log
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