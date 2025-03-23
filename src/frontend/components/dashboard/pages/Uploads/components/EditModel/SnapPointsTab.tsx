import React from 'react';
import { NumberInput, Button, Text } from '@mantine/core';
import { AttachmentPoint } from '../../../../../../types/attachment-points';

interface SnapPointsTabProps {
  fileFormat?: string;
  conversionStatus?: 'pending' | 'processing' | 'completed' | 'failed';
  attachmentPoints: AttachmentPoint[];
  onAttachmentPointUpdated: (point: AttachmentPoint) => void;
  onAddAttachmentPoint: () => void;
  onRemoveAttachmentPoint: (id: string) => void;
  selectedPoint: string | null;
  onSelectPoint: (id: string | null) => void;
}

/**
 * SnapPointsTab component for managing attachment points
 * This component only contains the controls for snap points
 * The actual 3D visualization happens in the main ModelViewer
 */
const SnapPointsTab: React.FC<SnapPointsTabProps> = ({
  fileFormat,
  attachmentPoints,
  onAttachmentPointUpdated,
  onAddAttachmentPoint,
  onRemoveAttachmentPoint,
  selectedPoint,
  onSelectPoint
}) => {
  const isSupported = fileFormat?.toLowerCase() === 'glb' || fileFormat?.toLowerCase() === 'gltf';
  
  return (
    <div className="flex flex-col h-full">
      {!isSupported ? (
        <div className="flex flex-col items-center justify-center p-6 text-center">
          <Text size="lg" className="mb-2">
            Snap point functionality is not available for {fileFormat?.toUpperCase() || 'this file format'} yet.
          </Text>
          <Text size="md" color="dimmed">
            We'll update you when it is.
          </Text>
        </div>
      ) : (
        <div className="p-4">
          <p className="mb-4">Add and adjust snap points for your model:</p>
          <div className="flex flex-wrap gap-2 mb-4 bg-black">
            <Button 
              onClick={onAddAttachmentPoint}
              className="bg-blue-500"
            >
              Add Snap Point
            </Button>
            {attachmentPoints.map((point, index) => (
              <div 
                key={point.id} 
                className={`p-2 rounded border cursor-pointer ${
                  selectedPoint === point.id ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                }`}
                onClick={() => onSelectPoint(point.id)}
              >
                Point {index + 1}
                <button 
                  className="ml-2 text-red-500" 
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveAttachmentPoint(point.id);
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          
          {/* Show parameter controls for selected point */}
          {selectedPoint && (
            <div className="p-2 border rounded border-gray-300">
              <h3 className="font-semibold">
                Edit Snap Point {attachmentPoints.findIndex(p => p.id === selectedPoint) + 1}
              </h3>
              <div className="mt-2 grid grid-cols-3 gap-2">
                <NumberInput 
                  label="X Position" 
                  step={0.01}
                  value={attachmentPoints.find(p => p.id === selectedPoint)?.position[0]} 
                  onChange={(value) => {
                    const point = attachmentPoints.find(p => p.id === selectedPoint);
                    if (point && value !== undefined) {
                      const newPoint = {
                        ...point,
                        position: [value, point.position[1], point.position[2]] as [number, number, number]
                      };
                      onAttachmentPointUpdated(newPoint);
                    }
                  }}
                />
                <NumberInput 
                  label="Y Position" 
                  step={0.01}
                  value={attachmentPoints.find(p => p.id === selectedPoint)?.position[1]} 
                  onChange={(value) => {
                    const point = attachmentPoints.find(p => p.id === selectedPoint);
                    if (point && value !== undefined) {
                      const newPoint = {
                        ...point,
                        position: [point.position[0], value, point.position[2]] as [number, number, number]
                      };
                      onAttachmentPointUpdated(newPoint);
                    }
                  }}
                />
                <NumberInput 
                  label="Z Position" 
                  step={0.01}
                  value={attachmentPoints.find(p => p.id === selectedPoint)?.position[2]} 
                  onChange={(value) => {
                    const point = attachmentPoints.find(p => p.id === selectedPoint);
                    if (point && value !== undefined) {
                      const newPoint = {
                        ...point,
                        position: [point.position[0], point.position[1], value] as [number, number, number]
                      };
                      onAttachmentPointUpdated(newPoint);
                    }
                  }}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SnapPointsTab; 