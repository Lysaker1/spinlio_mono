import React, { useState } from 'react';
import { IViewportApi } from '@shapediver/viewer';
import QRModal from './QRModal';
import './ARPreview.css';

interface ARPreviewProps {
  onBack: () => void;
  viewport: IViewportApi | null;
}

const ARPreview: React.FC<ARPreviewProps> = ({ onBack, viewport }) => {
  const [showQRModal, setShowQRModal] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);

  const handleARView = async () => {
    if (!viewport) return;

    try {
      if (viewport.viewableInAR()) {
        await viewport.viewInAR();
      } else {
        const qr = await viewport.createArSessionLink(undefined, true);
        setQrCodeUrl(qr);
        setShowQRModal(true);
      }
    } catch (error) {
      console.error('Error in AR view:', error);
    }
  };

  return (
    <div className="ar-preview">
      <button className="back-button" onClick={onBack}>
        ← Back
      </button>
      <div className="ar-content">
        <h3>View in AR</h3>
        <p>Scan the QR code with your mobile device to view the bike in AR</p>
        <button className="ar-button" onClick={handleARView}>
          Generate QR Code
        </button>
      </div>
      {showQRModal && qrCodeUrl && (
        <QRModal 
          qrCodeUrl={qrCodeUrl} 
          onClose={() => setShowQRModal(false)} 
        />
      )}
    </div>
  );
};

export default ARPreview;