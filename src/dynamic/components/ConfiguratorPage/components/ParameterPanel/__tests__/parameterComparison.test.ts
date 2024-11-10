import { describe, expect, test } from '@jest/globals';
import { parameterDefinitions } from '../parameterDefinitions6';
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

describe('Parameter Comparison Analysis', () => {
  test('Compare external parameters with parameter definitions', () => {
    // Read and parse the external JSON file
    const externalJson = JSON.parse(
      fs.readFileSync(
        path.join(__dirname, '../__fixtures__/spinlio-v091.json'),
        'utf8'
      )
    ) as ExternalConfig;

    const output: string[] = [];
    output.push('\n📊 Parameter Comparison Analysis');
    output.push('==============================');

    // Create maps for easier lookup
    const definedParams = new Map(
      parameterDefinitions.map(p => [p.id, p])
    );
    
    const definedNames = new Map(
      parameterDefinitions.map(p => [p.name.toLowerCase(), p])
    );

    const externalParams = new Map(
      externalJson.parameters.map(p => [p.id, p])
    );

    // Statistics
    const stats = {
      totalExternalParams: externalJson.parameters.length,
      totalDefinedParams: parameterDefinitions.length,
      matchingIds: 0,
      missingParams: [] as ExternalParameter[],
      nameConflicts: [] as {
        externalParam: ExternalParameter;
        definedParam: ParameterDefinition;
      }[]
    };

    // Analyze each external parameter
    externalJson.parameters.forEach(externalParam => {
      const definedParam = definedParams.get(externalParam.id);
      
      if (definedParam) {
        stats.matchingIds++;
        
        // Check if names match (case insensitive)
        if (definedParam.name.toLowerCase() !== externalParam.name.toLowerCase()) {
          output.push(`\n⚠️ Name mismatch for ID ${externalParam.id}:`);
          output.push(`   External name: "${externalParam.name}"`);
          output.push(`   Defined name:  "${definedParam.name}"`);
        }
      } else {
        // Check if we have a parameter with the same name but different ID
        const matchByName = definedNames.get(externalParam.name.toLowerCase());
        
        if (matchByName) {
          stats.nameConflicts.push({
            externalParam,
            definedParam: matchByName
          });
        } else {
          stats.missingParams.push(externalParam);
        }
      }
    });

    // Output Results
    output.push('\n📌 Overview:');
    output.push(`Total External Parameters: ${stats.totalExternalParams}`);
    output.push(`Total Defined Parameters: ${stats.totalDefinedParams}`);
    output.push(`Matching IDs: ${stats.matchingIds}`);
    
    if (stats.nameConflicts.length > 0) {
      output.push('\n🔸 Parameters with Matching Names but Different IDs:');
      stats.nameConflicts.forEach(conflict => {
        output.push(`\n  Parameter: "${conflict.externalParam.name}"`);
        output.push(`   External ID: ${conflict.externalParam.id}`);
        output.push(`   Defined ID:  ${conflict.definedParam.id}`);
        output.push(`   Current Value: ${conflict.externalParam.value}`);
      });
    }

    if (stats.missingParams.length > 0) {
      output.push('\n🔸 Missing Parameters (not in definitions):');
      stats.missingParams.forEach(param => {
        output.push(`  • ${param.name}`);
        output.push(`    ID: ${param.id}`);
        output.push(`    Value: ${param.value}`);
      });
    }

    // Print all output at once
    console.log(output.join('\n'));

    // Assertions
    expect(stats.totalExternalParams).toBeGreaterThan(0);
    expect(stats.matchingIds).toBeGreaterThan(0);
  });
});
