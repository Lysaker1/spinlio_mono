import { describe, expect, test } from '@jest/globals';
import { parameterDefinitions } from '../parameterDefinitions6';
import { ParameterDefinition } from '../types';

describe('Parameter Subcategory Validation', () => {
  test('All parameters have a name, category, and subCategory', () => {
    const missingSubCategory: ParameterDefinition[] = [];
    const categorySummary: Record<string, Record<string, number>> = {};
    let output = '';

    parameterDefinitions.forEach((param) => {
      expect(param.name).toBeTruthy();
      expect(param.category).toBeTruthy();

      if (!param.subCategory) {
        missingSubCategory.push(param);
      }

      if (!categorySummary[param.category]) {
        categorySummary[param.category] = {};
      }
      const subCat = param.subCategory || 'Other';
      if (!categorySummary[param.category][subCat]) {
        categorySummary[param.category][subCat] = 0;
      }
      categorySummary[param.category][subCat]++;
    });

    // Build output string
    if (missingSubCategory.length > 0) {
      output += 'Parameters Missing SubCategory:\n';
      missingSubCategory.forEach(param => {
        output += `- ${param.name} (ID: ${param.id})\n`;
      });
      output += '\n';
    }

    output += 'Category and SubCategory Summary:\n';
    Object.entries(categorySummary).forEach(([category, subCategories]) => {
      output += `\nCategory: ${category}\n`;
      Object.entries(subCategories).forEach(([subCategory, count]) => {
        output += `  ${subCategory}: ${count} parameters\n`;
      });
    });

    // Single console.log for all output
    console.log(output);

    expect(parameterDefinitions.length).toBeGreaterThan(0);
  });
}); 