import { describe, test } from '@jest/globals';
import { parameterDefinitions } from '../parameterDefinitions4';
import * as fs from 'fs';
import * as path from 'path';

const extractTemplateParameters = (modelFileName: string) => {
  // Read and parse the model JSON file
  const modelPath = path.join(__dirname, '../__fixtures__', modelFileName);
  const modelData = JSON.parse(fs.readFileSync(modelPath, 'utf8'));

  // Create a map of parameter definitions for easier lookup
  const paramDefMap = new Map(
    parameterDefinitions.map(p => [p.id, p])
  );

  // Filter and format matching parameters
  const matchingParameters = modelData.parameters
    .filter((param: any) => paramDefMap.has(param.id))
    .reduce((acc: any, param: any) => {
      acc[param.id] = param.value;
      return acc;
    }, {} as Record<string, string>);

  // Return formatted output
  return `
📋 Template Parameters for ${modelFileName}
================================

export const ${modelFileName.replace(/[^a-zA-Z0-9]/g, '')}Parameters = {
${Object.entries(matchingParameters)
  .map(([id, value]) => `  "${id}": "${value}",`)
  .join('\n')}
};

Stats: ${Object.keys(matchingParameters).length} parameters matched
`;
}

describe('Template Parameter Extraction', () => {
  test('Extract matching parameters from model_c', () => {
    console.log(extractTemplateParameters('model_c'));
  });

  test('Extract matching parameters from model_b', () => {
    console.log(extractTemplateParameters('model_b'));
  });

  test('Extract matching parameters from model_a', () => {
    console.log(extractTemplateParameters('model_a'));
  });

  // You can now easily add more models by adding new test cases:
  // test('Extract matching parameters from model_x', () => {
  //   console.log(extractTemplateParameters('model_x'));
  // });
});