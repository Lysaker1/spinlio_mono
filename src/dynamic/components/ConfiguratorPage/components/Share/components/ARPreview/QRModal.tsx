import React, {useEffect, useState} from 'react';

interface QRModalProps {
  qrCodeUrl: string;
  onClose: () => void;
}

const QRModal: React.FC<QRModalProps> = ({ qrCodeUrl, onClose }) => {
  const [browserClass, setBrowserClass] = useState<string>('');

  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
      setBrowserClass('safari');
    }
  }, []);

  return (
    <div className={`flex items-center justify-center ${browserClass}`} onClick={onClose}>
        <div className="text-center text-black w-full rounded-lg" onClick={e => e.stopPropagation()}>
            <img src={qrCodeUrl} alt="AR QR Code" className="w-36 h-36 m-auto" />
            <p className="text-md text-black/80 text-center m-0 leading-6">Scan this code with your mobile device to view in AR</p>
        </div>
    </div>
);
};

export default QRModal;
