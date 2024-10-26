import React from 'react';
import './ActionButton.css';

interface ARButtonProps {
  onARView: () => void;
}

const ARButton: React.FC<ARButtonProps> = ({ onARView }) => {
  return (
    <button className="action-button" onClick={onARView}>
      AR Preview
    </button>
  );
};

export default ARButton;
