/**
 * This test suite validates the uniqueness of parameter IDs in the configurator.
 * Having duplicate IDs could cause issues with parameter identification and updates,
 * so we need to ensure all parameters have unique identifiers.
 */

import { describe, expect, test } from '@jest/globals';
import { parameterDefinitions } from "../parameterDefinitions5";

describe('Parameter Definitions Uniqueness', () => {
    test('All parameter IDs are unique and properly formatted', () => {
      // Extract all parameter IDs into an array
      const ids = parameterDefinitions.map(param => param.id);
      
      // Find duplicates
      const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
      
      // If duplicates exist, log detailed information about them
      if (duplicateIds.length > 0) {
        console.log('\nDuplicate Parameter IDs Found:');
        console.log('============================');
        
        // Group parameters by ID to show duplicates
        const duplicateParams = duplicateIds.map(id => {
          const params = parameterDefinitions.filter(p => p.id === id);
          return {
            id,
            count: params.length,
            params: params.map(p => ({
              name: p.name,
              category: p.category,
              type: p.type
            }))
          };
        });

        // Log detailed information about each duplicate
        duplicateParams.forEach(dup => {
          console.log(`\nID "${dup.id}" appears ${dup.count} times:`);
          dup.params.forEach((p, i) => {
            console.log(`  ${i + 1}. Name: "${p.name}", Category: ${p.category}, Type: ${p.type}`);
          });
        });

        // Fail the test with a clear message
        fail(`Found ${duplicateIds.length} duplicate parameter IDs. Check console output for details.`);
      }

      // Check for invalid ID formats
      const invalidFormattedIds = ids.filter(id => !id.match(/^[a-zA-Z0-9_-]+$/));
      if (invalidFormattedIds.length > 0) {
        console.log('\nInvalid Formatted IDs:');
        console.log('=====================');
        invalidFormattedIds.forEach(id => {
          const param = parameterDefinitions.find(p => p.id === id);
          console.log(`ID: "${id}" (Parameter: "${param?.name}")`);
        });
        
        fail(`Found ${invalidFormattedIds.length} invalidly formatted IDs. Check console output for details.`);
      }
    });
});