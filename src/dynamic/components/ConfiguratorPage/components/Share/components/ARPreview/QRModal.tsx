import React from 'react';
import './ARPreview.css';

interface QRModalProps {
  qrCodeUrl: string;
  onClose: () => void;
}

const QRModal: React.FC<QRModalProps> = ({ qrCodeUrl, onClose }) => {
  return (
    <div className="qr-modal-overlay" onClick={onClose}>
      <div className="qr-modal" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h3>Scan QR Code</h3>
        <img src={qrCodeUrl} alt="AR QR Code" className="qr-code" />
        <p>Scan this code with your mobile device to view in AR</p>
      </div>
    </div>
  );
};

export default QRModal;