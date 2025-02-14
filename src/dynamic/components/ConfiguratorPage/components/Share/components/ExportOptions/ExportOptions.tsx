import React, { useState, useEffect } from 'react';
import { ISessionApi, IParameterApi, IViewportApi, IExportApi } from '@shapediver/viewer';
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

const ExportOptions: React.FC<ExportOptionsProps> = ({ onBack, session,viewport }) => {
  const [selectedFormat, setSelectedFormat] = useState<FileFormat>('OBJ');
  const [exportMethod, setExportMethod] = useState<ExportMethod>('DOWNLOAD');
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);

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

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    validateEmail(value);
  };

  const handleExport = async () => {
    if (!session) {
      sendNotification('Export Error', 'No active session');
      return;
    }

    setIsLoading(true);
    try {
      console.log('Starting export process...');
      console.log('Name:', name);
      console.log('Email:', email);

      // Update client info parameters
      await session.customize({
        "8620773c-238b-4627-ba8e-2d1c0995b089": name,
        "95dcfa93-c88e-4804-a541-3e441d4f4d63": email
      });

      // Get the correct export based on method and format
      if (exportMethod === 'DOWNLOAD') {
        const exportName = `Download ${selectedFormat} File`;
        console.log('Requesting download export:', exportName);

        const exportObject = Object.values(session.exports).find(
          (exp: IExportApi) => exp.name === exportName
        );

        if (!exportObject) {
          console.error('Available export names:',
            Object.values(session.exports).map((exp: IExportApi) => exp.name)
          );
          sendNotification('Export Error', 'Export format not available');
          return;
        }

        const result = await exportObject.request({
          parameters: {
            filename: `bike_${name.replace(/\s+/g, '_')}`
          }
        });

        if (result.content?.[0]) {
          const { href, format } = result.content[0];
          const link = document.createElement('a');
          link.href = href;
          link.download = `bike_${name.replace(/\s+/g, '_')}.${format.toLowerCase()}`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          sendNotification('Export Success', `${selectedFormat} file downloaded successfully`);
        }
      } else {
        // For email exports, we don't need to match the format name
        // We just use the specific export names defined in ShapeDiver
        console.log('Requesting email exports...');

        const clientExport = Object.values(session.exports).find(
          (exp: IExportApi) => exp.name === "Client Email Export"
        );
        const ownerExport = Object.values(session.exports).find(
          (exp: IExportApi) => exp.name === "EmailExport"
        );

        if (!clientExport || !ownerExport) {
          console.error('Available export names:',
            Object.values(session.exports).map((exp: IExportApi) => exp.name)
          );
          sendNotification('Export Error', 'Email export not available');
          return;
        }

        console.log('Sending client email...');
        await clientExport.request({
          parameters: {
            email: email,
            subject: `Your Custom Bike ${selectedFormat} Export`,
            filename: `bike_${name.replace(/\s+/g, '_')}`,
            __PARAMS__: true
          }
        });

        console.log('Sending owner notification...');
        await ownerExport.request({
          parameters: {
            __PARAMS__: true
          }
        });

        sendNotification('Export Success', `The ${selectedFormat} file will be sent to ${email}`);
      }
    } catch (error) {
      console.error('Export error:', error);
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
              onChange={(e) => handleEmailChange(e.target.value)}
            />
            <button
              className="export-button"
              onClick={handleExport}
              disabled={isLoading || !email || !!emailError || !name}
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
