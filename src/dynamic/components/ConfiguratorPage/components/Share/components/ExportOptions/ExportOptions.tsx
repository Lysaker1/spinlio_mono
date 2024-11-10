import React, { useState, useEffect } from 'react';
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
  const [name, setName] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!session) return;

    const updateClientInfo = async () => {
      try {
        const nameParam = session.getParameterByName('Client name')?.[0];
        if (nameParam && name) {
          nameParam.value = name;
        }

        const emailParam = session.getParameterByName('Client Email')?.[0];
        if (emailParam && email) {
          emailParam.value = email;
        }
      } catch (error) {
        console.error('Error updating client info:', error);
      }
    };

    updateClientInfo();
  }, [session, name, email]);

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
          <>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="name-input"
            />
            <button
              className="export-button"
              onClick={handleExport}
              disabled={isLoading || !name}
            >
              {isLoading ? 'Exporting...' : 'Download'}
            </button>
          </>
        )}

        {exportMethod === 'EMAIL' && (
          <div className="email-input-container">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="name-input"
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="export-button"
              onClick={handleExport}
              disabled={isLoading || !email || !name}
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