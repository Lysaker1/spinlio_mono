import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Cancel = () => {
  const navigate = useNavigate();
  
  return (
    <div className="checkout-result">
      <h2>Payment Cancelled</h2>
      <p>Your payment was cancelled. No charges were made.</p>
      <button onClick={() => navigate('/')}>
        Return to Designer
      </button>
    </div>
  );
}; 