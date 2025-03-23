import { describe, expect, test } from '@jest/globals';
import { parameterDefinitions } from '../parameterDefinitionsUrban';
import { ParameterDefinition } from '../types';
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

describe('Urban Parameter Validation', () => {
  test('Compare external urban parameters with active definitions', () => {
    // Read and parse the external JSON file
    const externalJson = JSON.parse(
      fs.readFileSync(
        path.join(__dirname, '../__fixtures__/urban.json'),
        'utf8'
      )
    ) as ExternalConfig;

    const output: string[] = [];
    output.push('\n🔍 Urban Parameter Analysis');
    output.push('============================');

    // Create maps for easier lookup
    const definedParams = new Map(
      parameterDefinitions.map(p => [p.id, p])
    );
    
    const externalParams = new Map(
      externalJson.parameters.map(p => [p.id, p])
    );

    // Statistics
    const stats = {
      totalExternalParams: externalJson.parameters.length,
      totalDefinedParams: parameterDefinitions.length,
      nameMismatches: 0,
      valueMismatches: 0,
      missingInDefinitions: 0,
      missingInJson: 0
    };

    // Check parameters in JSON against active definitions
    externalJson.parameters.forEach(externalParam => {
      const definedParam = definedParams.get(externalParam.id);
      
      if (definedParam) {
        // Check for name mismatches
        if (definedParam.name !== externalParam.name) {
          stats.nameMismatches++;
          output.push(`\n⚠️ Name mismatch for ID "${externalParam.id}":`);
          output.push(`   JSON name: "${externalParam.name}"`);
          output.push(`   Definition name: "${definedParam.name}"`);
        }

        // Check for default value mismatches
        if (definedParam.value !== externalParam.value) {
          stats.valueMismatches++;
          output.push(`\n📊 Default value mismatch for "${externalParam.name}" (${externalParam.id}):`);
          output.push(`   JSON value: "${externalParam.value}"`);
          output.push(`   Definition value: "${definedParam.value}"`);
        }
      } else {
        stats.missingInDefinitions++;
        output.push(`\n❌ Parameter in JSON but missing in active definitions:`);
        output.push(`   Name: "${externalParam.name}"`);
        output.push(`   ID: ${externalParam.id}`);
        output.push(`   Value: ${externalParam.value}`);
      }
    });

    // Check for parameters in definitions but not in JSON
    parameterDefinitions.forEach(definedParam => {
      if (!externalParams.has(definedParam.id)) {
        stats.missingInJson++;
        output.push(`\n⚠️ Parameter in definitions but missing in JSON:`);
        output.push(`   Name: "${definedParam.name}"`);
        output.push(`   ID: ${definedParam.id}`);
        output.push(`   Default value: ${definedParam.value}`);
      }
    });

    // Output summary
    output.push('\n📈 Summary:');
    output.push(`Total parameters in JSON: ${stats.totalExternalParams}`);
    output.push(`Total active parameters in definitions: ${stats.totalDefinedParams}`);
    output.push(`Name mismatches: ${stats.nameMismatches}`);
    output.push(`Value mismatches: ${stats.valueMismatches}`);
    output.push(`Missing in definitions: ${stats.missingInDefinitions}`);
    output.push(`Missing in JSON: ${stats.missingInJson}`);

    // Print all output
    console.log(output.join('\n'));

    // Basic assertions
    expect(stats.totalExternalParams).toBeGreaterThan(0);
    expect(stats.totalDefinedParams).toBeGreaterThan(0);
  });
});