import { describe, test } from '@jest/globals';
import { parameterDefinitions } from '../parameterDefinitions6';
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
  test('Extract matching parameters from canyon bike', () => {
    console.log(extractTemplateParameters('Canyon-bike.json')); // Add .json extension here
  });
});

describe('Template Parameter Extraction', () => {
  test('Extract matching parameters from classic road bike', () => {
    console.log(extractTemplateParameters('Classic-road-bike.json')); // Add .json extension here
  });
});

describe('Template Parameter Extraction', () => {
  test('Extract matching parameters from girls bike', () => {
    console.log(extractTemplateParameters('girls-bike.json')); // Add .json extension here
  });
});

describe('Template Parameter Extraction', () => {
  test('Extract matching parameters from canyon endurance 7', () => {
    console.log(extractTemplateParameters('canyon-endurance-7.json')); // Add .json extension here
  });
});

  // You can now easily add more models by adding new test cases:
  // test('Extract matching parameters from model_x', () => {
  //   console.log(extractTemplateParameters('model_x'));
  // });
