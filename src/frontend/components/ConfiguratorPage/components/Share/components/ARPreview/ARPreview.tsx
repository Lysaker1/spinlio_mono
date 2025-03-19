import React, { useEffect, useState } from 'react';
import { IViewportApi } from '@shapediver/viewer';
import QRModal from './QRModal';

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
                try {
                    const qr = await viewport.createArSessionLink(undefined, true);
                    if (!qr) {
                        throw new Error('Failed to generate QR code');
                    }
                    setQrCodeUrl(qr);
                    localStorage.setItem('arQrCodeUrl', qr);
                    setShowQRModal(true);
                } catch (conversionError) {
                    console.error('Error converting model:', conversionError);
                    throw new Error('Unable to prepare model for AR view');
                }
            }
        } catch (error) {
            console.error('Error in AR view:', error);
        }
    };

    useEffect(() => {
        const cachedQr = localStorage.getItem('arQrCodeUrl');
        if (cachedQr) {
            setQrCodeUrl(cachedQr);
            setShowQRModal(true);
        } else {
            const timeout = setTimeout(() => {
                handleARView();
            }, 200);

            return () => clearTimeout(timeout);
        }
    }, [viewport]);


    return (
        <div className="w-full flex flex-col items-center relative">
            <button className="self-start mb-2" onClick={onBack}>
                ← Back
            </button>
            <div className="w-full flex flex-col items-center gap-4 pb-2">
                <h3 className="text-lg font-medium text-center text-black">View in AR</h3>
            </div>
            {showQRModal && qrCodeUrl && (
                <QRModal
                    qrCodeUrl={qrCodeUrl}
                    onClose={() => {
                        setShowQRModal(false)
                        onBack()
                    }}
                />
            )}
        </div>
    );
};

export default ARPreview;
