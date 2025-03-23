import React from 'react';
import { ParameterStats } from '../types';
import { ParameterCategory } from '../../../types';

interface ToolbarProps {
  filterCategory: string;
  filterType: string;
  showId: boolean;
  stats: ParameterStats;
  setFilterCategory: (category: string) => void;
  setFilterType: (type: string) => void;
  setShowId: (show: boolean) => void;
  onAddCategory: (category: ParameterCategory, subCategory: string) => void;
}

export const ParameterToolbar: React.FC<ToolbarProps> = ({
  filterCategory,
  filterType,
  showId,
  stats,
  setFilterCategory,
  setFilterType,
  setShowId,
  onAddCategory
}) => {
  return (
    <div className="toolbar">
      <div className="filters">
        <select 
          value={filterCategory} 
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {Object.keys(stats.byCategory).map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select 
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="">All Types</option>
          {Object.keys(stats.byType).map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        <label className="show-id-toggle">
          <input
            type="checkbox"
            checked={showId}
            onChange={(e) => setShowId(e.target.checked)}
          />
          Show IDs
        </label>
      </div>

      <button 
        onClick={() => filterCategory && onAddCategory(filterCategory as ParameterCategory, '')} 
        className="add-category-btn"
        disabled={!filterCategory}
      >
        Add Category
      </button>
    </div>
  );
}; 