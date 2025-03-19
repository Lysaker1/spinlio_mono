import React, { useState } from 'react';
import { ParameterCategory } from '../../../types';

interface Props {
  category: ParameterCategory;
  value: string;
  options: string[];
  onAddNew: (newSubCategory: string) => void;
  onChange: (value: string) => void;
}

export const SubCategorySelect: React.FC<Props> = ({ 
  category, 
  value, 
  options, 
  onAddNew, 
  onChange 
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newValue, setNewValue] = useState('');

  const handleAddNew = () => {
    if (newValue) {
      onAddNew(newValue);
      onChange(newValue);
      setNewValue('');
      setIsAdding(false);
    }
  };

  return (
    <div className="subcategory-select">
      {!isAdding ? (
        <select
          value={value}
          onChange={(e) => {
            if (e.target.value === 'add_new') {
              setIsAdding(true);
            } else {
              onChange(e.target.value);
            }
          }}
        >
          <option value="">Select Sub Category</option>
          {options.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
          <option value="add_new">+ Add New</option>
        </select>
      ) : (
        <div className="add-new-subcategory">
          <input
            autoFocus
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            placeholder="New subcategory name"
          />
          <button onClick={handleAddNew}>Add</button>
          <button onClick={() => setIsAdding(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
}; 