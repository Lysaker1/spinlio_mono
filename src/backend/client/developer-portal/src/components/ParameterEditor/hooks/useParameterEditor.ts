import { useState, useEffect } from 'react';
import { Parameter, ParameterCategory } from '../../../types';
import { calculateParameterStats } from '../../../services/parameterAnalyzer';
import { defaultCategories } from '../../../constants';

export const useParameterEditor = (parameters: Parameter[], onChange: (params: Parameter[]) => void) => {
  const [stats, setStats] = useState(calculateParameterStats(parameters));
  const [filterCategory, setFilterCategory] = useState<string>('');
  const [filterType, setFilterType] = useState<string>('');
  const [showId, setShowId] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ParameterCategory>('tubing');

  useEffect(() => {
    setStats(calculateParameterStats(parameters));
  }, [parameters]);

  const handleChange = (index: number, updates: Partial<Parameter>) => {
    const updatedParams = [...parameters];
    updatedParams[index] = { ...updatedParams[index], ...updates };
    onChange(updatedParams);
  };

  const handleAddSubCategory = (category: ParameterCategory, newSubCategory: string) => {
    if (newSubCategory && category) {
      defaultCategories[category].subcategories.push(newSubCategory);
    }
  };

  const filteredParameters = parameters.filter(param => {
    if (filterCategory && param.category !== filterCategory) return false;
    if (filterType && param.type !== filterType) return false;
    return true;
  });

  return {
    stats,
    filterCategory,
    filterType,
    showId,
    showCategoryModal,
    selectedCategory,
    handleChange,
    handleAddSubCategory,
    setFilterCategory,
    setFilterType,
    setShowId,
    setShowCategoryModal,
    setSelectedCategory,
    filteredParameters,
  };
}; 