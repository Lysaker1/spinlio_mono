import { describe, expect, test } from '@jest/globals';
import { parameterDefinitions } from '../parameterDefinitionsST';
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

// Helper function to extract all parameters including commented ones
function getAllParameterDefinitions(filePath: string): ParameterDefinition[] {
  const content = fs.readFileSync(filePath, 'utf8');
  const parameterBlocks = content.match(/\/\/ \{[\s\S]*?\}|{[\s\S]*?}/g) || [];
  
  return parameterBlocks
    .map(block => {
      // Remove comment markers if present
      const cleanBlock = block.replace(/\/\/ /g, '');
      try {
        return JSON.parse(cleanBlock);
      } catch (e) {
        return null;
      }
    })
    .filter((param): param is ParameterDefinition => 
      param !== null && 
      typeof param === 'object' &&
      'id' in param &&
      'name' in param
    );
}

describe('Stepthru Parameter Validation', () => {
  test('Compare external stepthru parameters with definitions', () => {
    // Read and parse the external JSON file
    const externalJson = JSON.parse(
      fs.readFileSync(
        path.join(__dirname, '../__fixtures__/stepthru3.json'),
        'utf8'
      )
    ) as ExternalConfig;

    // Get all parameter definitions including commented ones
    const allParameterDefinitions = getAllParameterDefinitions(
      path.join(__dirname, '../parameterDefinitionsST.ts')
    );

    const output: string[] = [];
    output.push('\n🔍 Stepthru Parameter Analysis');
    output.push('============================');

    // Create maps for easier lookup
    const definedParams = new Map(
      allParameterDefinitions.map(p => [p.id, p])
    );
    
    const externalParams = new Map(
      externalJson.parameters.map(p => [p.id, p])
    );

    // Statistics
    const stats = {
      totalExternalParams: externalJson.parameters.length,
      totalDefinedParams: allParameterDefinitions.length,
      activeDefinedParams: parameterDefinitions.length,
      commentedOutParams: allParameterDefinitions.length - parameterDefinitions.length,
      nameMismatches: 0,
      valueMismatches: 0,
      missingInDefinitions: 0,
      missingInJson: 0
    };

    // Check parameters in JSON against definitions
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
        output.push(`\n❌ Parameter in JSON but missing in definitions:`);
        output.push(`   Name: "${externalParam.name}"`);
        output.push(`   ID: ${externalParam.id}`);
        output.push(`   Value: ${externalParam.value}`);
      }
    });

    // Check for parameters in definitions but not in JSON
    allParameterDefinitions.forEach(definedParam => {
      if (!externalParams.has(definedParam.id)) {
        stats.missingInJson++;
        output.push(`\n⚠️ Parameter in definitions but missing in JSON:`);
        output.push(`   Name: "${definedParam.name}"`);
        output.push(`   ID: ${definedParam.id}`);
        output.push(`   Default value: ${definedParam.value}`);
        output.push(`   Status: ${parameterDefinitions.some(p => p.id === definedParam.id) ? 'Active' : 'Commented Out'}`);
      }
    });

    // Output summary
    output.push('\n📈 Summary:');
    output.push(`Total parameters in JSON: ${stats.totalExternalParams}`);
    output.push(`Total parameters in definitions: ${stats.totalDefinedParams}`);
    output.push(`Active parameters: ${stats.activeDefinedParams}`);
    output.push(`Commented out parameters: ${stats.commentedOutParams}`);
    output.push(`Name mismatches: ${stats.nameMismatches}`);
    output.push(`Value mismatches: ${stats.valueMismatches}`);
    output.push(`Missing in definitions: ${stats.missingInDefinitions}`);
    output.push(`Missing in JSON: ${stats.missingInJson}`);

    // Print all output
    console.log(output.join('\n'));

    // Basic assertions to ensure test runs properly
    expect(stats.totalExternalParams).toBeGreaterThan(0);
    expect(stats.totalDefinedParams).toBeGreaterThan(0);
  });
}); 