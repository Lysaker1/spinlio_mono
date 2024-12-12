export type ConfiguratorType = 'default' | 'vulz' | 'electric';

interface ConfiguratorConfig {
  ticket: string;
  modelId: string;
  parameterTags: string[];
}

export const configuratorConfigs: Record<ConfiguratorType, ConfiguratorConfig> = {
  default: {
    ticket: 'fb56400eb88a6e3af0896d90b87ee69881c284ada493a0cc22023c7843443a1129d8e0ec8df7d6489976bae37c94b54c5fd1296134de1ea5bc52fb4fa92affa89e0c32f4e85ee71361521013e796a7679834f130144f49449a6b9d0fe2a2997b3eb1921ca2e614-3c83fa0e441a5e2c873f2b3f1cd9d237',
    modelId: '9d6043a1-538e-4c70-8ff7-977224ec7928',
    parameterTags: ['default']
  },
  vulz: {
    ticket: '4c488d243eca0c1eb7a269ac771d0657a326f72172504ae391539efead1b6cc0ca594877df95b5d085122554d81546e66c2ed89fb1832569f6bdf2e59a28b858cb0b0902c1e4a801dac05c85a868f2f74bd076cd687e9b369c0470b17ffc046b0b2ad8d6117aad-ac81909bae849bca6dae0686f244cac5',
    modelId: '9da63e22-84c4-4900-b6f4-6eea15c074dc',
    parameterTags: ['vulz']
  },
  electric: {
    ticket: 'electric-bike-ticket',
    modelId: 'electric-model-id',
    parameterTags: ['electric']
  }
};