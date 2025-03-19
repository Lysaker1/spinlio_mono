/**
 * This test suite validates the parameter definitions used in the configurator.
 * It ensures that all parameters are properly structured and contain valid values
 * for their respective types (sliders, dropdowns, etc).
 */

import { describe, expect, test } from '@jest/globals';
import { parameterDefinitions } from '../parameterDefinitions6';
import { ParameterDefinition } from '../types';

describe('Parameter Definitions Validation', () => {
  // Test that all parameters have the basic required fields
  test('All parameters have required fields and valid values', () => {
    parameterDefinitions.forEach((param: ParameterDefinition) => {
      // Check required properties existence
      expect(param).toHaveProperty('id');
      expect(param).toHaveProperty('name');
      expect(param).toHaveProperty('category');
      expect(param).toHaveProperty('type');
      expect(param).toHaveProperty('value');

      // Additional validation for property values
      expect(param.id).not.toBe(''); // ID should not be empty
      expect(param.name.length).toBeGreaterThan(0); // Name should not be empty
      expect(['geometry', 'surface', 'hardware', 'tubing', 'accessories', 'client information', 'other', 'visual'])
        .toContain(param.category); // Category should be from predefined list
    });
  });

  // Test slider parameters for proper numeric constraints
  test('Slider parameters have valid min and max values', () => {
    const sliders = parameterDefinitions.filter(param => param.type === 'slider');
    expect(sliders.length).toBeGreaterThan(0); // Ensure we have slider parameters
    
    sliders.forEach(slider => {
      expect(slider.min).toBeDefined();
      expect(slider.max).toBeDefined();
      
      if (slider.min !== undefined && slider.max !== undefined) {
        expect(slider.min).toBeLessThan(slider.max);
        expect(typeof slider.min).toBe('number');
        expect(typeof slider.max).toBe('number');
        
        // Validate current value is within bounds
        const currentValue = parseFloat(slider.value);
        expect(currentValue).toBeGreaterThanOrEqual(slider.min);
        expect(currentValue).toBeLessThanOrEqual(slider.max);
      }
    });
  });

  // Test dropdown parameters for proper options configuration
  test('Dropdown parameters have valid options array', () => {
    const dropdowns = parameterDefinitions.filter(param => param.type === 'dropdown');
    expect(dropdowns.length).toBeGreaterThan(0); // Ensure we have dropdown parameters
    
    dropdowns.forEach(dropdown => {
      expect(dropdown.options).toBeDefined();
      if (dropdown.options) {
        expect(Array.isArray(dropdown.options)).toBeTruthy();
        expect(dropdown.options.length).toBeGreaterThan(0);
        
        // Validate option structure
        dropdown.options.forEach(option => {
          expect(option).toHaveProperty('label');
          expect(option).toHaveProperty('value');
          expect(option.label.length).toBeGreaterThan(0);
          expect(option.value.length).toBeGreaterThan(0);
        });

        // Verify current value matches one of the options
        const validValues = dropdown.options.map(opt => opt.value);
        expect(validValues).toContain(dropdown.value);
      }
    });
  });
});