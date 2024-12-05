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
    ticket: '5db2f417d9886d671ee4de30433d484cd3cd1efd251da8f222fc259618c6c3c70eb1174323bd9b5c14efda7a7db405b62e45a08237afb227b6b757320894e4d3e0ab7b369241ff8070a08e0c729a7b6e8bb3effae47df980a0decc268d6ce86d608b6d2d73e933-a9a9083f2ad6e62574bbf57a41c252ea',
    modelId: '9da63e22-84c4-4900-b6f4-6eea15c074dc',
    parameterTags: ['vulz']
  },
  electric: {
    ticket: 'electric-bike-ticket',
    modelId: 'electric-model-id',
    parameterTags: ['electric']
  }
};