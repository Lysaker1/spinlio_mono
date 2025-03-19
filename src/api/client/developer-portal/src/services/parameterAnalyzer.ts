import { Parameter, ParameterType, ParameterCategory } from '../types';
import { ParameterStats } from '../components/ParameterEditor/types';

export const calculateParameterStats = (parameters: Parameter[]): ParameterStats => {
  const stats: ParameterStats = {
    total: parameters.length,
    verified: parameters.filter(p => p.verified).length,
    undefined: parameters.filter(p => !p.category || !p.type).length,
    byCategory: {},
    bySubCategory: {},
    byType: {} as Record<ParameterType, number>
  };

  // Calculate category stats
  parameters.forEach(param => {
    if (param.category) {
      stats.byCategory[param.category] = (stats.byCategory[param.category] || 0) + 1;
      
      // Calculate subcategory stats
      if (param.subCategory) {
        if (!stats.bySubCategory[param.category]) {
          stats.bySubCategory[param.category] = {};
        }
        stats.bySubCategory[param.category][param.subCategory] = 
          (stats.bySubCategory[param.category][param.subCategory] || 0) + 1;
      }
    }

    // Calculate type stats
    stats.byType[param.type] = (stats.byType[param.type] || 0) + 1;
  });

  return stats;
};

export const analyzeParameterDetails = (parameters: Parameter[]) => {
  const sliderStats = parameters
    .filter(p => p.type === 'slider')
    .reduce((acc, param) => {
      if (param.min !== undefined && param.max !== undefined) {
        acc.count++;
        acc.totalMin += param.min;
        acc.totalMax += param.max;
      }
      return acc;
    }, { count: 0, totalMin: 0, totalMax: 0 });

  const dropdownStats = parameters
    .filter(p => p.type === 'dropdown')
    .reduce((acc, param) => {
      if (param.options) {
        acc.count++;
        acc.totalOptions += param.options.length;
      }
      return acc;
    }, { count: 0, totalOptions: 0 });

  return {
    sliders: {
      count: sliderStats.count,
      avgMin: sliderStats.count ? sliderStats.totalMin / sliderStats.count : 0,
      avgMax: sliderStats.count ? sliderStats.totalMax / sliderStats.count : 0
    },
    dropdowns: {
      count: dropdownStats.count,
      avgOptionsPerDropdown: dropdownStats.count ? dropdownStats.totalOptions / dropdownStats.count : 0
    }
  };
};

export class ParameterAnalyzer {
  private static readonly GEOMETRY_KEYWORDS = ['angle', 'height', 'width', 'length', 'diameter'];
  private static readonly SURFACE_KEYWORDS = ['color', 'metallic', 'roughness'];
  private static readonly HARDWARE_KEYWORDS = ['brake', 'wheel', 'dropout', 'bottle'];

  static analyzeParameter(param: { name: string; value: string }): Partial<Parameter> {
    const name = param.name.toLowerCase();
    const value = param.value;

    // Determine category
    let category: ParameterCategory = 'other';
    if (this.GEOMETRY_KEYWORDS.some(k => name.includes(k))) category = 'geometry';
    if (this.SURFACE_KEYWORDS.some(k => name.includes(k))) category = 'visual';
    if (this.HARDWARE_KEYWORDS.some(k => name.includes(k))) category = 'accessories';

    // Determine type
    let type: ParameterType = 'text';
    if (value.startsWith('0x')) type = 'color';
    if (value === 'true' || value === 'false') type = 'checkbox';
    if (!isNaN(Number(value))) type = 'slider';
    if (name.includes('logo')) type = 'logoUpload';

    // Determine subcategory
    const subCategory = this.determineSubCategory(name);

    return {
      type,
      category,
      subCategory,
      ...(type === 'slider' ? this.determineSliderProps(value) : {})
    };
  }

  private static determineSubCategory(name: string): string | undefined {
    const parts = name.split(' ');
    if (parts.length > 1) {
      return parts[0];
    }
    return undefined;
  }

  private static determineSliderProps(value: string) {
    const num = Number(value);
    return {
      min: Math.floor(num * 0.5),
      max: Math.ceil(num * 1.5),
      step: num < 1 ? 0.1 : 1
    };
  }
} 