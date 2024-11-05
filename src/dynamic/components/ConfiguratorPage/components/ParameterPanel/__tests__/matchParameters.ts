const fs = require('fs');
const path = require('path');

// Import the parameter definitions
const { parameterDefinitions } = require('../parameterDefinitions4');

// Read and parse the model_c JSON file
const modelCPath = path.join(__dirname, '../__fixtures__/model_c');
const modelCRaw = fs.readFileSync(modelCPath, 'utf8');
const modelCData = JSON.parse(modelCRaw);

// Create a map of parameter definitions for easier lookup
const paramDefMap = new Map(
  parameterDefinitions.map((def: any) => [def.id, def])
);

// Filter and format matching parameters
const matchingParameters = modelCData.parameters
  .filter((param: any) => paramDefMap.has(param.id))
  .map((param: any) => {
    const def = paramDefMap.get(param.id);
    return {
      id: param.id,
      value: param.value,
      name: param.name // For reference
    };
  });

// Format output for bikeTemplates.ts
const templateOutput = `
// Add this to bikeTemplates.ts
export const modelCParameters = {
${matchingParameters
  .map((p: any) => `  "${p.id}": "${p.value}", // ${p.name}`)
  .join('\n')}
};

// Then update your template:
{ 
  id: 'bike1',
  image: 'https://res.cloudinary.com/da8qnqmmh/image/upload/v1730769376/bike1_gflojr.png',
  name: 'Racing Bike',
  parameters: modelCParameters
}
`;

console.log(templateOutput);

// Output stats
console.log('\n// Stats:');
console.log(`Total parameters in model_c: ${modelCData.parameters.length}`);
console.log(`Total parameters in definitions: ${parameterDefinitions.length}`);
console.log(`Matching parameters: ${matchingParameters.length}`);