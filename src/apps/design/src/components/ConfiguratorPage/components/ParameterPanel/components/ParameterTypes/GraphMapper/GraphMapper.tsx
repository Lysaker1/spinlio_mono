import React, { useState, useRef, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import { ParameterDefinition } from '../../../types';
import './GraphMapper.css';
import { InfoButton } from '../InfoButton/InfoButton';

interface Point {
  x: number;
  y: number;
}

interface GraphMapperProps {
  definition: ParameterDefinition;
  value: string;
  onChange: (value: any, definition: ParameterDefinition) => void;
}

export const GraphMapper: React.FC<GraphMapperProps> = ({
  definition,
  value,
  onChange
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [points, setPoints] = useState<Point[]>([]);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const defaultValue = useRef(value);

  // Debounced onChange to prevent too many updates
  const debouncedOnChange = useCallback(
    debounce((newValue: string, def: ParameterDefinition) => {
      onChange(newValue, def);
    }, 100),
    [onChange]
  );

  // Parse points only when value changes
  useEffect(() => {
    const parsePoints = (value: string): Point[] => {
      try {
        return value.split(';').map(pair => {
          const [x, y] = pair.split(',').map(Number);
          return { x, y };
        });
      } catch (error) {
        console.error('Error parsing points:', error);
        return [{ x: 0, y: 0 }, { x: 1, y: 1 }];
      }
    };
    
    setPoints(parsePoints(value));
  }, [value]);

  // Draw function
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.beginPath();
    for (let i = 0; i <= 10; i++) {
      const x = (i / 10) * canvas.width;
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      const y = (i / 10) * canvas.height;
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
    }
    ctx.stroke();

    // Draw curve
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    points.forEach((point, i) => {
      const x = point.x * canvas.width;
      const y = (1 - point.y) * canvas.height;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Draw points
    points.forEach(point => {
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(
        point.x * canvas.width,
        (1 - point.y) * canvas.height,
        4,
        0,
        Math.PI * 2
      );
      ctx.fill();
    });
  }, [points]);

  // Update canvas when points change
  useEffect(() => {
    draw();
  }, [draw]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) / canvas.width;
    const y = 1 - (e.clientY - rect.top) / canvas.height;

    const pointIndex = points.findIndex(point => 
      Math.sqrt(Math.pow(point.x - x, 2) + Math.pow(point.y - y, 2)) < 0.05
    );

    if (pointIndex !== -1) {
      setDraggingIndex(pointIndex);
    }
  };

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (draggingIndex === null) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / canvas.width));
    const y = Math.max(0, Math.min(1, 1 - (e.clientY - rect.top) / canvas.height));

    const newPoints = [...points];
    newPoints[draggingIndex] = { x, y };
    newPoints.sort((a, b) => a.x - b.x);
    
    setPoints(newPoints);

    // Use debounced onChange
    const newValue = newPoints
      .map(p => `${p.x.toFixed(2)},${p.y.toFixed(2)}`)
      .join(';');
    debouncedOnChange(newValue, definition);
  }, [draggingIndex, points, debouncedOnChange, definition]);

  const handleMouseUp = () => {
    setDraggingIndex(null);
  };

  const graphMapperInfo = (
    <div>
      <h4>Graph Mapper Guide</h4>
      <p>The Graph Mapper allows you to create custom curves that control how values change along a path:</p>
      <ul>
        <li>Drag points up and down to adjust values</li>
        <li>Points automatically stay ordered left to right</li>
        <li>X-axis represents position (0-100%)</li>
        <li>Y-axis represents the value at that position</li>
      </ul>
      <p>Use this to create smooth transitions and custom profiles for your design.</p>
    </div>
  );

  return (
    <div className="parameter-card graph-mapper-container">
      <div className="parameter-header">
        <span className="parameter-name">{definition.name}</span>
        <div className="parameter-controls">
          <InfoButton content={graphMapperInfo} />
          <button className="reset-button" onClick={() => {
            if (defaultValue.current) {
              onChange(defaultValue.current, definition);
            }
          }}>
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path 
                fill="currentColor" 
                d="M8 3a5 5 0 0 0-5 5h2L2 11 0 8h2a6 6 0 1 1 1.8 4.2l1.4-1.4A4 4 0 1 0 8 3z"
              />
            </svg>
          </button>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        width={300}
        height={200}
        className="graph-canvas"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />
    </div>
  );
};