import React, { useState } from 'react';
import { callRhinoCompute } from '../../api/rhinoCompute';
import ModelViewer from '../ModelViewer/ModelViewer';

const RhinoTest: React.FC = () => {
  const [modelBlob, setModelBlob] = useState<Blob | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const testRhinoCompute = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await callRhinoCompute({
        definitionId: 'test_definition',
        parameters: {
          radius: 10,
          height: 20
        }
      });
      
      // Convert ArrayBuffer to Blob
      const blob = new Blob([result], { type: 'application/octet-stream' });
      setModelBlob(blob);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rhino-test">
      <div className="controls">
        <button 
          onClick={testRhinoCompute}
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Test Rhino Compute'}
        </button>
        {error && <div className="error">{error}</div>}
      </div>
      <div className="viewer">
        {modelBlob && <ModelViewer modelUrl={URL.createObjectURL(modelBlob)} />}
      </div>
    </div>
  );
};

export default RhinoTest; 