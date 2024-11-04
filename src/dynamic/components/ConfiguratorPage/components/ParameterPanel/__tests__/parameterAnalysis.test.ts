import { describe, expect, test } from '@jest/globals';
import { parameterDefinitions } from '../parameterDefinitions4';
import { ParameterDefinition } from '../types';

interface ParameterAnalysis {
  totalParameters: number;
  categoriesCount: number;
  typeDistribution: {
    [key: string]: number;
  };
  categories: {
    [key: string]: {
      count: number;
      types: {
        [key: string]: number;
      };
      hasSliders?: {
        count: number;
        avgMin: number;
        avgMax: number;
      };
      hasDropdowns?: {
        count: number;
        totalOptions: number;
        avgOptionsPerDropdown: number;
      };
    };
  };
}

describe('Parameter Definitions Analysis', () => {
  test('Comprehensive Parameter Analysis', () => {
    const analysis: ParameterAnalysis = {
      totalParameters: parameterDefinitions.length,
      categoriesCount: 0,
      typeDistribution: {},
      categories: {}
    };

    // Process each parameter
    parameterDefinitions.forEach((param: ParameterDefinition) => {
      // Update type distribution
      analysis.typeDistribution[param.type] = (analysis.typeDistribution[param.type] || 0) + 1;

      // Initialize category if not exists
      if (!analysis.categories[param.category]) {
        analysis.categories[param.category] = {
          count: 0,
          types: {}
        };
      }

      // Update category stats
      const category = analysis.categories[param.category];
      category.count++;
      category.types[param.type] = (category.types[param.type] || 0) + 1;

      // Process sliders
      if (param.type === 'slider') {
        if (!category.hasSliders) {
          category.hasSliders = { count: 0, avgMin: 0, avgMax: 0 };
        }
        if (param.min !== undefined && param.max !== undefined) {
          category.hasSliders.count++;
          category.hasSliders.avgMin += param.min;
          category.hasSliders.avgMax += param.max;
        }
      }

      // Process dropdowns
      if (param.type === 'dropdown' && param.options) {
        if (!category.hasDropdowns) {
          category.hasDropdowns = { count: 0, totalOptions: 0, avgOptionsPerDropdown: 0 };
        }
        category.hasDropdowns.count++;
        category.hasDropdowns.totalOptions += param.options.length;
      }
    });

    // Calculate averages for sliders and dropdowns
    Object.values(analysis.categories).forEach(category => {
      if (category.hasSliders && category.hasSliders.count > 0) {
        category.hasSliders.avgMin /= category.hasSliders.count;
        category.hasSliders.avgMax /= category.hasSliders.count;
      }
      if (category.hasDropdowns && category.hasDropdowns.count > 0) {
        category.hasDropdowns.avgOptionsPerDropdown = 
          category.hasDropdowns.totalOptions / category.hasDropdowns.count;
      }
    });

    analysis.categoriesCount = Object.keys(analysis.categories).length;

    // Create a string builder for the output
    const output: string[] = [];
    
    output.push('\n📊 Parameter Analysis Report');
    output.push('==========================');
    output.push('\n📌 Overview:');
    output.push(`Total Parameters: ${analysis.totalParameters}`);
    output.push(`Number of Categories: ${analysis.categoriesCount}`);
    
    output.push('\n📌 Type Distribution:');
    Object.entries(analysis.typeDistribution)
      .sort(([, a], [, b]) => b - a)
      .forEach(([type, count]) => {
        const percentage = ((count / analysis.totalParameters) * 100).toFixed(1);
        output.push(`  ${type.padEnd(10)} : ${count} (${percentage}%)`);
      });

    output.push('\n📌 Category Analysis:');
    Object.entries(analysis.categories)
      .sort(([, a], [, b]) => b.count - a.count)
      .forEach(([categoryName, data]) => {
        output.push(`\n🔹 ${categoryName.toUpperCase()} (${data.count} parameters)`);
        
        output.push('  Types:');
        Object.entries(data.types)
          .sort(([, a], [, b]) => b - a)
          .forEach(([type, count]) => {
            const percentage = ((count / data.count) * 100).toFixed(1);
            output.push(`    - ${type.padEnd(10)}: ${count} (${percentage}%)`);
            
            // Get all parameters of this type in this category
            const paramsOfType = parameterDefinitions.filter(
              param => param.category === categoryName && param.type === type
            );
            
            // Add parameter names indented
            paramsOfType.forEach(param => {
              output.push(`      • ${param.name}`);
              
              // Add additional details based on parameter type
              if (type === 'slider' && param.min !== undefined && param.max !== undefined) {
                output.push(`           Range: ${param.min} to ${param.max}${param.unit ? ` ${param.unit}` : ''}`);
              } else if (type === 'dropdown' && param.options) {
                output.push(`           Options: ${param.options.map(opt => opt.label).join(', ')}`);
              }
            });
            output.push(''); // Add empty line between types
          });

        if (data.hasSliders && data.hasSliders.count > 0) {
          output.push('  Slider Stats:');
          output.push(`    - Average Range: ${data.hasSliders.avgMin.toFixed(1)} to ${data.hasSliders.avgMax.toFixed(1)}`);
        }

        if (data.hasDropdowns && data.hasDropdowns.count > 0) {
          output.push('  Dropdown Stats:');
          output.push(`    - Average Options: ${data.hasDropdowns.avgOptionsPerDropdown.toFixed(1)} per dropdown`);
        }
      });

    // Print all output at once
    console.log(output.join('\n'));

    // Add assertions to validate the analysis
    expect(analysis.totalParameters).toBeGreaterThan(0);
    expect(analysis.categoriesCount).toBeGreaterThan(0);
    expect(Object.keys(analysis.typeDistribution).length).toBeGreaterThan(0);
  });
});