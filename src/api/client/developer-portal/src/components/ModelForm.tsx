import React from 'react';

interface Props {
  modelDetails: any;
  setModelDetails: (details: any) => void;
  onJsonUpload: (file: File) => void;
}

export const ModelForm: React.FC<Props> = ({ modelDetails, setModelDetails, onJsonUpload }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (e.target.name === 'parametersJson') {
        onJsonUpload(file);
      }
      setModelDetails({
        ...modelDetails,
        [e.target.name]: file
      });
    }
  };

  return (
    <div className="model-form">
      <div className="form-group">
        <label>Model Name</label>
        <input
          type="text"
          name="modelName"
          value={modelDetails.modelName}
          onChange={(e) => setModelDetails({...modelDetails, modelName: e.target.value})}
        />
      </div>

      <div className="form-group">
        <label>Model Type</label>
        <select
          name="modelType"
          value={modelDetails.modelType}
          onChange={(e) => setModelDetails({...modelDetails, modelType: e.target.value})}
        >
          <option value="ShapeDiver">ShapeDiver</option>
        </select>
      </div>

      <div className="form-group">
        <label>Ticket ID</label>
        <input
          type="text"
          name="ticketId"
          value={modelDetails.ticketId}
          onChange={(e) => setModelDetails({...modelDetails, ticketId: e.target.value})}
        />
      </div>

      <div className="form-group">
        <label>URL</label>
        <input
          type="text"
          name="url"
          value={modelDetails.url}
          onChange={(e) => setModelDetails({...modelDetails, url: e.target.value})}
        />
      </div>

      <div className="form-group">
        <label>Model Image</label>
        <input
          type="file"
          name="modelImage"
          onChange={handleFileChange}
          accept="image/*"
        />
      </div>

      <div className="form-group">
        <label>Parameters JSON</label>
        <input
          type="file"
          name="parametersJson"
          onChange={handleFileChange}
          accept=".json"
        />
      </div>

      <div className="form-group">
        <label>Configurator Type</label>
        <select
          name="configuratorType"
          value={modelDetails.configuratorType}
          onChange={(e) => setModelDetails({...modelDetails, configuratorType: e.target.value})}
        >
          <option value="default">Default</option>
        </select>
      </div>
    </div>
  );
}; 