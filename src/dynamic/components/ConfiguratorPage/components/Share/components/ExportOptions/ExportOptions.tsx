import React, { useState } from 'react';
import { ISessionApi, IViewportApi } from '@shapediver/viewer';
import { fetchFileWithToken } from '../../../../../../utils/exportUtils';
import FileTypeSelect from './FileTypeSelect';
import './ExportOptions.css';

type FileFormat = 'OBJ' | 'STEP' | 'STL' | '3DM' | 'PNG';

interface ExportOptionsProps {
  onBack: () => void;
  session: ISessionApi | null;
  viewport: IViewportApi | null;
}

const ExportOptions: React.FC<ExportOptionsProps> = ({ onBack, session, viewport }) => {
  const [selectedFormat, setSelectedFormat] = useState<FileFormat>('OBJ');

  const handleExport = async (action: 'download' | 'email') => {
    if (!session) return;

    try {
      const exportName = `Export${selectedFormat}Model`;
      const exportObject = session.getExportByName(exportName)[0];

      if (!exportObject) {
        console.error(`No export found for ${selectedFormat}`);
        return;
      }

      const result = await exportObject.request();

      if (result.content?.[0]) {
        const filename = `${result.filename}.${result.content[0].format}`;
        
        if (action === 'download') {
          await fetchFileWithToken(
            result.content[0].href, 
            filename, 
            session.jwtToken
          );
        } else {
          // Implement email logic here
          console.log('Email export:', filename);
        }
      }
    } catch (error) {
      console.error('Export error:', error);
    }
  };

  return (
    <div className="export-options">
      <button className="back-button" onClick={onBack}>
        ← Back
      </button>
      <div className="export-content">
        <h3>Export Model</h3>
        <FileTypeSelect
          value={selectedFormat}
          onChange={setSelectedFormat}
        />
        <div className="export-actions">
          <button 
            className="export-button"
            onClick={() => handleExport('download')}
          >
            Download
          </button>
          <button 
            className="export-button"
            onClick={() => handleExport('email')}
          >
            Send via Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportOptions;