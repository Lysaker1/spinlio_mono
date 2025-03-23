import React, { useState } from 'react';
import { Parameter, ParameterType, ParameterCategory } from '../types';
import './ParameterEditor.css';

interface Props {
  parameters: Parameter[];
  onChange: (parameters: Parameter[]) => void;
}

const defaultCategories: Record<ParameterCategory, string[]> = {
  tubing: ['Frame', 'Top Tube', 'Down Tube', 'Head Tube'],
  geometry: ['Top Tube', 'Seat Tube', 'Head Tube', 'Rear Triangle'],
  accessories: ['Fittings', 'Wheels', 'Forks', 'Water Bottles'],
  'client information': ['Basic Info', 'Contact'],
  visual: ['Colors', 'Finishes'],
  sizing: ['Measurements', 'Adjustments'],
  material: ['Type', 'Finish'],
  other: []
};

export const ParameterEditor: React.FC<Props> = ({ parameters, onChange }) => {
  const [filterCategory, setFilterCategory] = useState<string>('');
  const [filterType, setFilterType] = useState<string>('');
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ParameterCategory>('tubing');
  const [newSubCategory, setNewSubCategory] = useState('');
  const [showId, setShowId] = useState(false);

  const handleChange = (index: number, updates: Partial<Parameter>) => {
    const updatedParams = [...parameters];
    updatedParams[index] = { ...updatedParams[index], ...updates };
    onChange(updatedParams);
  };

  const handleAddCategory = () => {
    if (newCategory && !(newCategory in defaultCategories)) {
      defaultCategories[newCategory as ParameterCategory] = [];
      setNewCategory('');
      setShowCategoryModal(false);
    }
  };

  const handleAddSubCategory = () => {
    if (newSubCategory && !defaultCategories[selectedCategory].includes(newSubCategory)) {
      defaultCategories[selectedCategory].push(newSubCategory);
      setNewSubCategory('');
    }
  };

  const filteredParameters = parameters.filter(param => {
    if (filterCategory && param.category !== filterCategory) return false;
    if (filterType && param.type !== filterType) return false;
    return true;
  });

  return (
    <div className="parameter-editor">
      <div className="instructions">
        <p>
          Upload the JSON file of the parameters. These are educated guesses and need verification before the model goes live. Override if necessary.
        </p>
      </div>

      <div className="toolbar">
        <div className="filters">
          <select 
            value={filterCategory} 
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {Object.keys(defaultCategories).map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select 
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="slider">Slider</option>
            <option value="color">Color</option>
            <option value="dropdown">Dropdown</option>
            <option value="checkbox">Checkbox</option>
            <option value="logoUpload">Logo Upload</option>
          </select>
        </div>

        <div className="category-management">
          <button onClick={() => setShowCategoryModal(true)}>
            Add Category
          </button>
          <div className="subcategory-add">
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as ParameterCategory)}
            >
              {Object.keys(defaultCategories).map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <input
              type="text"
              value={newSubCategory}
              onChange={(e) => setNewSubCategory(e.target.value)}
              placeholder="New Subcategory"
            />
            <button onClick={handleAddSubCategory}>Add</button>
          </div>
        </div>
      </div>

      {showCategoryModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add New Category</h3>
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Category Name"
            />
            <div className="modal-actions">
              <button onClick={handleAddCategory}>Add</button>
              <button onClick={() => setShowCategoryModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <div className="parameters-grid">
        {filteredParameters.map((param, index) => (
          <div key={param.id} 
            className={`parameter-card ${param.verified ? 'verified' : ''} ${param.hidden ? 'hidden' : ''}`}
          >
            <button 
              className="verify-button"
              onClick={() => handleChange(index, { verified: !param.verified })}
            >
              {param.verified ? 'Verified' : 'Verify'}
            </button>

            <div className="parameter-fields">
              {showId && (
                <div className="param-field">
                  <label>ID</label>
                  <input
                    value={param.id}
                    readOnly
                  />
                </div>
              )}
              <div className="param-field">
                <label>Name</label>
                <input
                  value={param.name}
                  onChange={(e) => handleChange(index, { name: e.target.value })}
                />
              </div>

              <div className="param-field">
                <label>Category</label>
                <select
                  value={param.category}
                  onChange={(e) => handleChange(index, { category: e.target.value as ParameterCategory })}
                >
                  {Object.keys(defaultCategories).map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="param-field">
                <label>Sub Category</label>
                <select
                  value={param.subCategory || ''}
                  onChange={(e) => handleChange(index, { subCategory: e.target.value })}
                >
                  <option value="">Select Sub Category</option>
                  {param.category && defaultCategories[param.category as ParameterCategory]?.map(sub => (
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>

              <div className="param-field">
                <label>Type</label>
                <select
                  value={param.type}
                  onChange={(e) => handleChange(index, { type: e.target.value as ParameterType })}
                >
                  <option value="slider">Slider</option>
                  <option value="color">Color</option>
                  <option value="dropdown">Dropdown</option>
                  <option value="checkbox">Checkbox</option>
                  <option value="logoUpload">Logo Upload</option>
                </select>
              </div>

              {param.type === 'slider' && (
                <>
                  <div className="param-field">
                    <label>Min</label>
                    <input
                      type="number"
                      value={param.min}
                      onChange={(e) => handleChange(index, { min: Number(e.target.value) })}
                    />
                  </div>
                  <div className="param-field">
                    <label>Max</label>
                    <input
                      type="number"
                      value={param.max}
                      onChange={(e) => handleChange(index, { max: Number(e.target.value) })}
                    />
                  </div>
                  <div className="param-field">
                    <label>Unit</label>
                    <input
                      value={param.unit || ''}
                      onChange={(e) => handleChange(index, { unit: e.target.value })}
                    />
                  </div>
                </>
              )}

              {param.type === 'dropdown' && (
                <div className="param-field">
                  <label>Options</label>
                  <textarea
                    value={param.options?.map(opt => `${opt.label}:${opt.value}`).join('\n') || ''}
                    onChange={(e) => {
                      const options = e.target.value.split('\n').map(line => {
                        const [label, value] = line.split(':');
                        return { label, value };
                      });
                      const values = options.map(opt => opt.label);
                      const orderedOptions = values.map((value, index) => ({
                        label: value,
                        value: value,
                        order: index
                      }));
                      handleChange(index, { options: orderedOptions });
                    }}
                  />
                </div>
              )}

              {param.type === 'checkbox' && (
                <div className="param-field">
                  <label>Checked</label>
                  <input
                    type="checkbox"
                    checked={param.value === 'true'}
                    onChange={(e) => handleChange(index, { value: e.target.checked ? 'true' : 'false' })}
                  />
                </div>
              )}

              <div className="param-field">
                <label>Default Value</label>
                <input
                  value={param.value}
                  onChange={(e) => handleChange(index, { value: e.target.value })}
                />
              </div>

              <div className="param-field">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={param.hidden}
                    onChange={(e) => handleChange(index, { hidden: e.target.checked })}
                  />
                  Hidden
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};