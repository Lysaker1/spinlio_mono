const fileSystem = require('fs');
const pathModule = require('path');
const { parameterDefinitions: existingDefs } = require('../parameterDefinitions4');

// Read the new model JSON
const modelPath = pathModule.join(__dirname, '../__fixtures__/spinlio-v08.json');
const modelData = JSON.parse(fileSystem.readFileSync(modelPath, 'utf8'));

// Create a map of existing definitions for easy lookup
const existingDefsMap = new Map(
  existingDefs.map((def: any) => [def.id, def])
);

// Track new parameters
const newParameters: Array<{id: string, name: string}> = [];

// Generate new parameter definitions
const newParameterDefinitions = modelData.parameters.map((param: any) => {
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

// Generate the new file content
const fileContent = `module.exports = {
  parameterDefinitions: ${JSON.stringify(newParameterDefinitions, null, 2)}
};
`;

// Write the new parameter definitions
const outputPath = pathModule.join(__dirname, '../parameterDefinitions5.js');
fileSystem.writeFileSync(outputPath, fileContent);

// Write the list of new parameters
const newParamsContent = `New Parameters Added:\n${newParameters.map(p => `${p.name} (${p.id})`).join('\n')}`;
const newParamsPath = pathModule.join(__dirname, '../new_parameters.txt');
fileSystem.writeFileSync(newParamsPath, newParamsContent);

console.log('Generated new parameter definitions file: parameterDefinitions5.js');
console.log('Generated list of new parameters: new_parameters.txt');