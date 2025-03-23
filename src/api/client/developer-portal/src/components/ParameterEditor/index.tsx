import React from 'react';
import { Parameter, ParameterType, ParameterCategory } from '../../types';
import { StatsPanel } from '../StatsPanel';
import { DropdownEditor } from './components/DropdownEditor';
import { SubCategorySelect } from './components/SubCategorySelect';
import { calculateParameterStats } from '../../services/parameterAnalyzer';
import './ParameterEditor.css';
import { useParameterEditor } from './hooks/useParameterEditor';
import { ParameterToolbar } from './components/ParameterToolbar';
import { ParameterGrid } from './components/ParameterGrid';

interface Props {
  parameters: Parameter[];
  onChange: (parameters: Parameter[]) => void;
}

// This is just the container component that composes all the other components
export const ParameterEditor: React.FC<Props> = ({ parameters, onChange }) => {
  // Move all the state and handlers to a custom hook
  const {
    stats,
    filterCategory,
    filterType,
    showId,
    handleChange,
    handleAddSubCategory,
    filteredParameters,
    ...handlers
  } = useParameterEditor(parameters, onChange);

  return (
    <div className="parameter-editor">
      <StatsPanel parameters={parameters} />
      <ParameterToolbar 
        filterCategory={filterCategory}
        filterType={filterType}
        showId={showId}
        stats={stats}
        {...handlers}
        onAddCategory={handleAddSubCategory}
      />
      <ParameterGrid 
        parameters={filteredParameters}
        showId={showId}
        onParameterChange={handleChange}
        onAddSubCategory={handleAddSubCategory}
      />
    </div>
  );
}; 