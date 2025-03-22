import React from 'react';
import { CONFIGURATOR_TYPES, ConfiguratorType } from '@shared/constants/configuratorTypes';

interface BuyButtonProps {
  configuratorType: ConfiguratorType;
}

export const BuyButton: React.FC<BuyButtonProps> = ({ configuratorType }) => {
  const PAYMENT_LINKS: Partial<Record<ConfiguratorType, string>> = {
    [CONFIGURATOR_TYPES.VULZ]: 'https://buy.stripe.com/00g9AT08d3Hng2k9AA',
    [CONFIGURATOR_TYPES.URBAN]: 'https://buy.stripe.com/9AQ14n4ot0vb2bu3cf',
    [CONFIGURATOR_TYPES.STEPTHRU]: 'https://buy.stripe.com/00g5kD08d5PvcQ83ce',
    [CONFIGURATOR_TYPES.DEFAULT]: 'https://buy.stripe.com/eVadR908d2DjaI0aEF'
  };

  const paymentLink = PAYMENT_LINKS[configuratorType] ?? PAYMENT_LINKS[CONFIGURATOR_TYPES.DEFAULT];


  const handleClick = () => {
    console.log('Buy button clicked, configuratorType:', configuratorType); // Debug log
    window.open(paymentLink, '_blank');
  };

  return (
    <button 
      className="w-full h-12 rounded-full bg-black text-white"
      onClick={handleClick}
    >
      Buy Now
    </button>
  );
}; 