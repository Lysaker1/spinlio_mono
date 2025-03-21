export type ConfiguratorType = 'default' | 'vulz' | 'stepthru' | 'bookshelf' | 'table' | 'sofa' | 'urban';

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
  stepthru: {
    ticket: '6b9c62a57b1d24dcc956f2b3733e7db753fbf961c86514338ac15873315ff081e9a3256a78ec7c03fc1a4f2de17cda33187e31b382e85dce84819896f14b62ee2bc39de188a31aae85b7e0d82f50436343d89ffda094683663a7eea2b9789f267fa6a853f7f559-5faea00e7f3b3a3665292bfa121a2f1c',
    modelId: '9e104901-9480-4aaf-913a-fd34ee379ab6',
    parameterTags: ['stepthru']
  },
  bookshelf: {
    ticket: 'cf96bc46b4616bcc373645ed2592532d77eebf8b6b9a104f69bd6b3255fa0a87eeb2fd53adef8f87ec4cc98ff73ac6331f3b7eb3df4b0e1e6b1b44e4fc73a5df86ff2ef200708d60aa0e2c51b27e802ecb14b0aab39d80e4f57f0d98ba124bff71401af1a36e3a-ec7098175ae4edce5f88d647a95500f8',
    modelId: '9e0b3863-79b0-4a51-ac0a-bf734fe4050d',
    parameterTags: ['bookshelf']
  },
  table: {
    ticket: '683519dc2b6733a535598760a4c8321970c7d7904a2674f345e6b5b2368507a2fb647382e7a96ab4420230c5f9e7747bc86f01918a72aaf667d1d2ab51ec47d94f45042ae71a1cadf3d113f92902d3e58e89bfef96cb3c6d848912d561f4a9448aeb3b51482ea2-5fb1d45ac92f78e28f82953597ee6dd4',
    modelId: '9e0b9ab0-aed7-43be-aa24-fba91c44af84',
    parameterTags: ['table']
  },
  sofa: {
    ticket: '73a3382e74c89650ec9b50fce62f0b25d2e9fd43018408ffbc6fd27dbc660977b0d0d12b81f27feaea653245b245a4ea3d0f7615b30afde4609f36244cc48076ab10dc5fa4497eceff79f7cfdf6fde3ae5e92d6a7632570f11114ce327be64608fea2d18d10b4d-14a78ea56bdfe568feb57d026e823787',
    modelId: '9e0ba608-ba8e-4dbb-a84a-7792ee6c6e3d',
    parameterTags: ['sofa']
  },
  urban: {
    ticket: '54802e883dddc2fd95edfadd1366ac14da9682254c53715a2cad611bd6bbb15317ecfd2d777f9631ebfa67fac70e551253adbe76f319acc3ac960f338dab1457ce01076a139223baf2dc1ae202ebb6ee34e2a448dd3ad1f6305c3d6983980bde049afaad0daab4-45dcd5a7b5c984a0500c004811e78395',
    modelId: '9e1114ae-d356-4cf2-94a6-d8021bdf32f5',
    parameterTags: ['urban']
  }



};
