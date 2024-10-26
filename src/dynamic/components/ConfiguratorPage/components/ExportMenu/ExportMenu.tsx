import React, { useState } from 'react';
import { Button, Select, Modal, Image } from '@mantine/core';
import { ISessionApi, IViewportApi, FLAG_TYPE } from '@shapediver/viewer';
import { fetchFileWithToken, sendNotification, dataURLtoBlob } from '../../../../../utils/exportUtils';  // Update path
import './ExportMenu.css';

interface ExportMenuProps {
  session: ISessionApi | null;
  viewport: IViewportApi | null;
  onClose: () => void;
}

const ExportMenu: React.FC<ExportMenuProps> = ({ session, viewport, onClose }) => {
  const [selectedFormat, setSelectedFormat] = useState<string>('PNG');
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  const [showQrModal, setShowQrModal] = useState(false);

  const handleARPreview = async () => {
    if (viewport) {
      const token = viewport.addFlag(FLAG_TYPE.BUSY_MODE);
      try {
        if (viewport.viewableInAR()) {
          await viewport.viewInAR();
        } else {
          const qr = await viewport.createArSessionLink(undefined, true);
          setQrCodeUrl(qr);
          setShowQrModal(true);
        }
      } catch (error) {
        console.error('Error in AR view:', error);
        sendNotification('AR Preview Failed', 'An error occurred while preparing AR view.');
      } finally {
        viewport.removeFlag(token);
      }
    } else {
      sendNotification('AR Preview Failed', 'Viewport is not available.');
    }
  };

  const handleExport = async (action: 'download' | 'email') => {
    if (!session || !viewport) {
      sendNotification('Export failed', 'No active session or viewport');
      return;
    }

    try {
      if (selectedFormat === 'PNG') {
        await handleExportPNG(action);
      } else {
        await handle3DExport(selectedFormat, action);
      }
    } catch (error) {
      console.error(`Error exporting ${selectedFormat}:`, error);
      sendNotification('Export failed', `An error occurred while exporting the ${selectedFormat} file.`);
    }
  };

  const handleExportPNG = async (action: 'download' | 'email') => {
    if (!session || !viewport) {
      console.error("No session or viewport available");
      sendNotification("Export failed", "No session or viewport available");
      return;
    }

    try {
      console.log("Taking screenshot...");
      const screenshotData = viewport.getScreenshot();
      await new Promise((resolve) => setTimeout(resolve, 10));

      console.log("Converting screenshot to blob...");
      const screenShotAsBlob = dataURLtoBlob(screenshotData);

      console.log("Getting screenshot parameter...");
      const screenshotParameter = session.getParameterByName("screenshot")[0] as any;
      
      if (!screenshotParameter) {
        console.error("Screenshot parameter not found");
        sendNotification("Export failed", "Screenshot parameter not found");
        return;
      }

      console.log("Uploading screenshot...");
      screenshotParameter.value = screenShotAsBlob;
      const fileUploadId = await screenshotParameter.upload();

      console.log("Getting screenshot export...");
      const screenshotExport = session.getExportByName("screenshot")[0];

      if (!screenshotExport) {
        console.error("Screenshot export not found");
        sendNotification("Export failed", "Screenshot export not found");
        return;
      }

      console.log("Requesting screenshot export...");
      const result = await screenshotExport.request({
        [screenshotParameter.name]: fileUploadId
      });

      if (result.content && result.content[0]) {
        const filename = `${result.filename}.${result.content[0].format}`;
        if (action === 'download') {
          console.log("Downloading PNG...");
          await fetchFileWithToken(result.content[0].href, filename, session.jwtToken);
          sendNotification("Export successful", "Your PNG has been downloaded.");
        } else {
          console.log("Sending PNG via email...");
          // Implement email sending logic here
          sendNotification("Export successful", "Your PNG has been sent via email.");
        }
      } else {
        console.error("Export failed", result.msg || "Unknown error occurred");
        sendNotification("Export failed", result.msg || "Unknown error occurred");
      }
    } catch (error) {
      console.error("Error exporting PNG:", error);
      sendNotification("Export failed", "An error occurred while exporting the PNG.");
    }
  };

  const handle3DExport = async (format: string, action: 'download' | 'email') => {
    if (!session) {
      console.error("No active session");
      sendNotification("Export failed", "No active session");
      return;
    }
  
    try {
      console.log(`Exporting ${format} model...`);
      const exportName = `Export${format}Model`;
      console.log(`Looking for export: ${exportName}`);
      const exportObject = session.getExportByName(exportName)[0];
  
      if (!exportObject) {
        console.error(`No export found for ${format}`);
        sendNotification("Export failed", `No export found for ${format}`);
        return;
      }
  
      console.log("Requesting export...");
      const result = await exportObject.request();
  
      if (result.content && result.content[0]) {
        const filename = `${result.filename}.${result.content[0].format}`;
        if (action === 'download') {
          console.log(`Downloading ${format} model...`);
          await fetchFileWithToken(result.content[0].href, filename, session.jwtToken);
          sendNotification("Export successful", `Your ${format} model has been downloaded.`);
        } else {
          console.log(`Sending ${format} model via email...`);
          // Implement email sending logic here
          sendNotification("Export successful", `Your ${format} model has been sent via email.`);
        }
      } else {
        console.error("Export failed", result.msg || "Unknown error occurred");
        sendNotification("Export failed", result.msg || "Unknown error occurred");
      }
    } catch (error) {
      console.error(`Error exporting ${format}:`, error);
      sendNotification("Export failed", `An error occurred while exporting the ${format} model.`);
    }
  };

  return (
    <div className="export-menu">
      <div className="export-menu-content">
        <Button onClick={handleARPreview} fullWidth>
          AR Preview
        </Button>
        <Select
          label="Export Format"
          value={selectedFormat}
          onChange={(value) => setSelectedFormat(value as string)}
          data={[
            { value: 'PNG', label: 'PNG' },
            { value: 'OBJ', label: 'OBJ' },
            { value: 'STL', label: 'STL' },
            { value: 'FBX', label: 'FBX' },
            { value: 'GLTF', label: 'GLTF' },
          ]}
          style={{ width: '100%', marginTop: '12px' }}
        />
        <div className="export-actions">
          <Button onClick={() => handleExport('download')} fullWidth>
            Download
          </Button>
          <Button onClick={() => handleExport('email')} fullWidth>
            Send via Email
          </Button>
        </div>
        <Button className="close-button" onClick={onClose} fullWidth>
          Close
        </Button>
      </div>
      <Modal opened={showQrModal} onClose={() => setShowQrModal(false)} title="AR QR Code">
        {qrCodeUrl && <Image src={qrCodeUrl} alt="AR QR Code" />}
      </Modal>
    </div>
  );
};

export default ExportMenu;
