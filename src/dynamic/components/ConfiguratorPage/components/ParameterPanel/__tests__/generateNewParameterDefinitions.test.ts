import { describe, expect, test } from '@jest/globals';
import { parameterDefinitions as existingDefs } from '../parameterDefinitions5';
import * as fs from 'fs';
import * as path from 'path';

interface ExternalParameter {
  id: string;
  value: string;
  name: string;
}

interface ExternalConfig {
  model_id: string;
  parameters: ExternalParameter[];
}

describe('Generate New Parameter Definitions', () => {
  test('Generate parameter definitions from spinlio-v091.json and write to TypeScript file', () => {
    // Read the new model JSON
    const modelPath = path.join(__dirname, '../__fixtures__/spinlio-v091.json');
    const modelData = JSON.parse(fs.readFileSync(modelPath, 'utf8')) as ExternalConfig;

    // Create a map of existing definitions for easy lookup
    const existingDefsMap = new Map(
      existingDefs.map(def => [def.id, def])
    );

    // Track new parameters
    const newParameters: Array<{ id: string; name: string }> = [];

    // Generate new parameter definitions
    const newParameterDefinitions = modelData.parameters.map(param => {
      const existingDef = existingDefsMap.get(param.id);

      if (existingDef) {
        // Parameter exists - merge with new data, keeping existing metadata
        return {
          ...existingDef,
          name: param.name, // Use new name if changed
          value: param.value, // Use new default value
        };
      } else {
        // Track new parameter
        newParameters.push({
          id: param.id,
          name: param.name
        });

        // New parameter - create basic definition
        return {
          id: param.id,
          name: param.name,
          value: param.value,
          category: 'other', // Default category
          type: 'text', // Default type
        };
      }
    });

    // Validate the new parameter definitions
    expect(newParameterDefinitions.length).toBeGreaterThan(0);
    expect(newParameters.length).toBeGreaterThan(0);

    // Write the new parameter definitions to a TypeScript file
    const outputPath = path.join(__dirname, '../parameterDefinitions6.ts');
    const fileContent = `import { ParameterDefinition } from './types';\n\n` +
      `export const parameterDefinitions: ParameterDefinition[] = ${JSON.stringify(newParameterDefinitions, null, 2)};\n`;

    fs.writeFileSync(outputPath, fileContent);

    // Log the new parameters added for verification
    console.log('New Parameters Added:', newParameters);
    console.log(`Generated new parameter definitions file: ${outputPath}`);
  });
});