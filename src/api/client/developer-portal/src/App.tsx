import React, { useState } from 'react';
import { ModelForm } from './components/ModelForm';
import { StatsPanel } from './components/StatsPanel';
import './App.css';

interface ModelDetails {
  modelName: string;
  modelType: string;
  ticketId: string;
  url: string;
  modelImage: File | null;
  parametersJson: File | null;
  configuratorType: string;
}

const App: React.FC = () => {
  const [parameters, setParameters] = useState<any[]>([]);
  const [modelDetails, setModelDetails] = useState<ModelDetails>({
    modelName: '',
    modelType: 'ShapeDiver',
    ticketId: '',
    url: '',
    modelImage: null,
    parametersJson: null,
    configuratorType: 'default'
  });

  const handleJsonUpload = (jsonFile: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        if (typeof event.target?.result === 'string') {
          const jsonData = JSON.parse(event.target.result);
          console.log('Parsed JSON data:', jsonData);
          // Assuming the JSON structure has a parameters array
          const parameterArray = Array.isArray(jsonData) ? jsonData : jsonData.parameters || [];
          setParameters(parameterArray);
        }
      } catch (error) {
        console.error('Error parsing JSON:', error);
        alert('Error parsing JSON file. Please check the file format.');
      }
    };
    reader.readAsText(jsonFile);
  };

  return (
    <div className="app">
      <h1>Spinlio Developer Portal</h1>
      
      <ModelForm 
        modelDetails={modelDetails}
        setModelDetails={setModelDetails}
        onJsonUpload={handleJsonUpload}
      />

      {parameters.length > 0 && (
        <StatsPanel parameters={parameters} />
      )}
    </div>
  );
};

export default App;