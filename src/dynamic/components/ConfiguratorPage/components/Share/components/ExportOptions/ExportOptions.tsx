import React, { useState } from 'react';
import { ISessionApi, IViewportApi } from '@shapediver/viewer';
import { fetchFileWithToken, sendNotification } from '../../../../../../utils/exportUtils';
import FileTypeSelect from './FileTypeSelect';
import './ExportOptions.css';

type FileFormat = 'OBJ' | 'STEP' | 'STL' | '3DM' | 'PNG';

interface ExportOptionsProps {
  onBack: () => void;
  session: ISessionApi | null;
  viewport: IViewportApi | null;
}

const ExportOptions: React.FC<ExportOptionsProps> = ({ onBack, session, viewport }) => {
  const [selectedFormat, setSelectedFormat] = useState<FileFormat>('STL');
  const [isLoading, setIsLoading] = useState(false);

  const handleExport = async () => {
    if (!session) {
      sendNotification('Export Error', 'No active session');
      return;
    }

    setIsLoading(true);
    try {
      const exportObject = session.getExportByName(`Export${selectedFormat}`)[0];
      const result = await exportObject.request();

      if (result.content && result.content[0]) {
        const filename = `${result.filename || 'export'}.${result.content[0].format.toLowerCase()}`;
        await fetchFileWithToken(result.content[0].href, filename, session.jwtToken);
        sendNotification('Export Success', `${selectedFormat} file downloaded successfully`);
      } else {
        sendNotification('Export Failed', result.msg || 'Unknown error');
      }
    } catch (error) {
      sendNotification('Export Error', 'Failed to export model');
      console.error(error);
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
        <button 
          className="export-button" 
          onClick={handleExport}
          disabled={isLoading}
        >
          {isLoading ? 'Exporting...' : 'Download'}
        </button>
      </div>
    </div>
  );
};

export default ExportOptions;