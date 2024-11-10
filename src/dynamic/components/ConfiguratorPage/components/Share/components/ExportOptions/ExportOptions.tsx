import React, { useState } from 'react';
import { ISessionApi, IViewportApi } from '@shapediver/viewer';
import { sendNotification } from '../../../../../../utils/exportUtils';
import FileTypeSelect from './FileTypeSelect';
import './ExportOptions.css';

type FileFormat = 'OBJ' | 'STL' | '3DM';
type ExportMethod = 'DOWNLOAD' | 'EMAIL';

interface ExportOptionsProps {
  onBack: () => void;
  session: ISessionApi | null;
  viewport: IViewportApi | null;
}

const ExportOptions: React.FC<ExportOptionsProps> = ({ onBack, session }) => {
  const [selectedFormat, setSelectedFormat] = useState<FileFormat>('OBJ');
  const [exportMethod, setExportMethod] = useState<ExportMethod>('DOWNLOAD');
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleExport = async () => {
    if (!session) {
      sendNotification('Export Error', 'No active session');
      return;
    }

    setIsLoading(true);
    try {
      const exportName = exportMethod === 'DOWNLOAD'
        ? `Download ${selectedFormat} File`
        : `Email ${selectedFormat} File`;

      const exportObject = session.getExportByName(exportName)[0];
      if (!exportObject) {
        sendNotification('Export Error', 'Export format not available');
        return;
      }

      const exportParams = exportMethod === 'EMAIL' ? { email } : {};
      const result = await exportObject.request(exportParams);

      if (exportMethod === 'DOWNLOAD') {
        if (result.content && result.content[0]) {
          const { href, format } = result.content[0];
          const filename = `${result.filename || 'model'}.${format}`;

          const link = document.createElement('a');
          link.href = href;
          link.download = filename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          sendNotification('Export Success', `${selectedFormat} file downloaded successfully`);
        } else {
          sendNotification('Export Failed', 'No download URL received');
        }
      } else if (exportMethod === 'EMAIL') {
        if (result.msg === 'success') {
          sendNotification('Export Success', `The ${selectedFormat} file will be sent to ${email}`);
        } else {
          sendNotification('Export Failed', 'Failed to send email');
        }
      }
    } catch (error) {
      console.error('Error during export:', error);
      sendNotification('Export Error', 'Failed to export model');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="export-options">
      <button className="back-button" onClick={onBack}>
        ← Back
      </button>
      <div className="export-content">
        <h3>Export Model</h3>
        <FileTypeSelect value={selectedFormat} onChange={setSelectedFormat} />
        <div className="export-method-select">
          <button
            className={`method-button ${exportMethod === 'DOWNLOAD' ? 'active' : ''}`}
            onClick={() => setExportMethod('DOWNLOAD')}
          >
            Download
          </button>
          <button
            className={`method-button ${exportMethod === 'EMAIL' ? 'active' : ''}`}
            onClick={() => setExportMethod('EMAIL')}
          >
            Email
          </button>
        </div>
        {exportMethod === 'DOWNLOAD' && (
          <button
            className="export-button"
            onClick={handleExport}
            disabled={isLoading}
          >
            {isLoading ? 'Exporting...' : 'Download'}
          </button>
        )}
        {exportMethod === 'EMAIL' && (
          <div className="email-input-container">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="export-button"
              onClick={handleExport}
              disabled={isLoading || !email}
            >
              {isLoading ? '...' : 'Export'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExportOptions;