import React from 'react';
import { Parameter, ParameterCategory } from '../../../types';
import { DropdownEditor } from './DropdownEditor';
import { SubCategorySelect } from './SubCategorySelect';

interface GridProps {
  parameters: Parameter[];
  showId: boolean;
  onParameterChange: (index: number, updates: Partial<Parameter>) => void;
  onAddSubCategory: (category: ParameterCategory, subCategory: string) => void;
}

export const ParameterGrid: React.FC<GridProps> = ({
  parameters,
  showId,
  onParameterChange,
  onAddSubCategory
}) => {
  return (
    <div className="parameters-grid">
      {parameters.map((param, index) => (
        <div key={param.id} className={`parameter-card ${param.verified ? 'verified' : ''}`}>
          {showId && <div className="parameter-id">{param.id}</div>}
          
          <div className="parameter-fields">
            <input
              value={param.name}
              onChange={(e) => onParameterChange(index, { name: e.target.value })}
              placeholder="Parameter Name"
            />
            
            <select
              value={param.category || ''}
              onChange={(e) => onParameterChange(index, { 
                category: e.target.value as ParameterCategory 
              })}
            >
              <option value="">Select Category</option>
              {/* Add options based on ParameterCategory type */}
            </select>

            {param.category && (
              <SubCategorySelect
                category={param.category}
                value={param.subCategory || ''}
                options={[]} // This should come from a constant or prop
                onAddNew={(newSub) => onAddSubCategory(param.category!, newSub)}
                onChange={(value) => onParameterChange(index, { subCategory: value })}
              />
            )}

            {param.type === 'dropdown' && (
              <DropdownEditor
                value={param.value}
                options={param.options || []}
                onChange={(options) => onParameterChange(index, { options })}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}; 