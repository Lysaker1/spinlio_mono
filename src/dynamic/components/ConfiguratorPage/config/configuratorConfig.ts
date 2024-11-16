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
    ticket: '7670d81b5c5f5fcf850b395d55b283fc5703a4d49a674f9ad359923377dc556219bc75a18fd0c6faf260dce89e3936981ed93773034f6e44202f1cb218f9cc91c85c6af3c0cd599bfeeb0d898d2108b480398c463f49ae273660d6b5a021c80f7f803ac6f426d6-3a3d3f9911517198b0d998836a3e7684',
    modelId: 'vulz-model-id',
    parameterTags: ['vulz']
  },
  electric: {
    ticket: 'electric-bike-ticket',
    modelId: 'electric-model-id',
    parameterTags: ['electric']
  }
};