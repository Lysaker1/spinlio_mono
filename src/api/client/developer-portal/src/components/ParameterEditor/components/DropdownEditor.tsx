import React, { useState } from 'react';
import { DropdownOption } from '../types';

interface Props {
  value: string;
  options: DropdownOption[];
  onChange: (options: DropdownOption[]) => void;
}

export const DropdownEditor: React.FC<Props> = ({ value, options, onChange }) => {
  const [optionCount, setOptionCount] = useState(options.length || 2);
  
  const handleOptionCountChange = (count: number) => {
    if (count >= 2 && count <= 20) {
      setOptionCount(count);
      // Adjust options array size
      const newOptions = Array(count).fill(null).map((_, i) => ({
        value: i.toString(),
        label: options[i]?.label || '',
        order: i
      }));
      onChange(newOptions);
    }
  };

  return (
    <div className="dropdown-editor">
      <div className="option-count">
        <label>Number of Options (2-20)</label>
        <input 
          type="number"
          min={2}
          max={20}
          value={optionCount}
          onChange={(e) => handleOptionCountChange(Number(e.target.value))}
        />
      </div>

      <div className="options-grid">
        {Array(optionCount).fill(null).map((_, i) => (
          <div key={i} className="option-row">
            <span className="option-value">{i}</span>
            <input
              value={options[i]?.label || ''}
              onChange={(e) => {
                const newOptions = [...options];
                newOptions[i] = { ...newOptions[i], value: i.toString(), label: e.target.value };
                onChange(newOptions);
              }}
              placeholder={`Option ${i + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}; 