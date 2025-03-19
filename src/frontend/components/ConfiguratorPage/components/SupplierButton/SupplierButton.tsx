import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SupplierButton.css';

const SupplierButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Supplier button clicked');
    try {
      navigate('/supplier');
      console.log('Navigation attempted to /supplier');
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  return (
    <button 
      className="supplier-button"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      Supplier Access
    </button>
  );
};

export default SupplierButton;