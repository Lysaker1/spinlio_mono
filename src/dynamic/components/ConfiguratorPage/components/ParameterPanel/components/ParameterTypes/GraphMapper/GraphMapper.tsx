import React, { useState, useEffect, useRef } from 'react';
import { ParameterDefinition } from '../../../types';
import './GraphMapper.css';

interface Point {
  x: number;
  y: number;
}

interface GraphMapperProps {
  definition: ParameterDefinition;
  value: string;
  onChange: (value: string, definition: ParameterDefinition) => void;
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

  // Parse points from value string
  const parsePoints = (valueStr: string): Point[] => {
    return valueStr.split(';').map(pair => {
      const [x, y] = pair.split(',').map(Number);
      return { x, y };
    });
  };

  useEffect(() => {
    setPoints(parsePoints(value));
    // Only update defaultValue if it's empty or undefined
    if (!defaultValue.current) {
      defaultValue.current = value;
    }
  }, [value]);

  const drawGraph = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    for (let i = 0; i <= 10; i++) {
      const x = (canvas.width / 10) * i;
      const y = (canvas.height / 10) * i;
      
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Draw curve
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.lineWidth = 2;
    points.forEach((point, index) => {
      const x = point.x * canvas.width;
      const y = (1 - point.y) * canvas.height;
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();

    // Draw points
    points.forEach(point => {
      ctx.beginPath();
      ctx.fillStyle = 'white';
      ctx.arc(
        point.x * canvas.width,
        (1 - point.y) * canvas.height,
        5,
        0,
        2 * Math.PI
      );
      ctx.fill();
    });
  };

  useEffect(() => {
    drawGraph();
  }, [points]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) / canvas.width;
    const y = 1 - (e.clientY - rect.top) / canvas.height;

    // Find if we're clicking near any point
    const pointIndex = points.findIndex(point => 
      Math.sqrt(Math.pow(point.x - x, 2) + Math.pow(point.y - y, 2)) < 0.05
    );

    if (pointIndex !== -1) {
      setDraggingIndex(pointIndex);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggingIndex === null) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / canvas.width));
    const y = Math.max(0, Math.min(1, 1 - (e.clientY - rect.top) / canvas.height));

    const newPoints = [...points];
    newPoints[draggingIndex] = { x, y };
    
    // Sort points by x coordinate to maintain left-to-right order
    newPoints.sort((a, b) => a.x - b.x);
    
    setPoints(newPoints);

    // Update value
    const newValue = newPoints
      .map(p => `${p.x.toFixed(2)},${p.y.toFixed(2)}`)
      .join(';');
    onChange(newValue, definition);
  };

  const handleMouseUp = () => {
    setDraggingIndex(null);
  };

  const handleReset = () => {
    if (defaultValue.current) {
      const resetPoints = parsePoints(defaultValue.current);
      setPoints(resetPoints);
      onChange(defaultValue.current, definition);
    }
  };

  return (
    <div className="parameter-card graph-mapper-container">
      <div className="parameter-header">
        <span className="parameter-name">{definition.name}</span>
        <button className="reset-button" onClick={handleReset}>
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path 
              fill="currentColor" 
              d="M8 3a5 5 0 0 0-5 5h2L2 11 0 8h2a6 6 0 1 1 1.8 4.2l1.4-1.4A4 4 0 1 0 8 3z"
            />
          </svg>
        </button>
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