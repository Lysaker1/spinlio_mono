export type ConfiguratorType = 'table' | 'chair' | 'sofa' | 'default' | 'vulz' | 'bike' | 'stepthru' | 'bookshelf' | 'urban';

interface IConfiguratorConfig {
  ticket: string;
  modelId?: string;
  name: string;
  description?: string;
}

interface IConfiguratorConfigs {
  [key: string]: IConfiguratorConfig;
}

// This is a basic placeholder configuration
export const configuratorConfigs: IConfiguratorConfigs = {
  table: {
    ticket: 'your-table-ticket-here',
    modelId: 'table-model-id',
    name: 'Table Configurator'
  },
  chair: {
    ticket: 'your-chair-ticket-here',
    modelId: 'chair-model-id',
    name: 'Chair Configurator'
  },
  sofa: {
    ticket: 'your-sofa-ticket-here',
    modelId: 'sofa-model-id',
    name: 'Sofa Configurator'
  },
  default: {
    ticket: 'default-ticket',
    modelId: 'default-model-id',
    name: 'Default Configurator'
  },
  vulz: {
    ticket: 'vulz-ticket',
    modelId: 'vulz-model-id',
    name: 'Vulz Configurator'
  },
  bike: {
    ticket: 'bike-ticket',
    modelId: 'bike-model-id',
    name: 'Bike Configurator'
  },
  stepthru: {
    ticket: 'stepthru-ticket',
    modelId: 'stepthru-model-id',
    name: 'Stepthru Configurator'
  },
  bookshelf: {
    ticket: 'bookshelf-ticket',
    modelId: 'bookshelf-model-id',
    name: 'Bookshelf Configurator'
  },
  urban: {
    ticket: 'urban-ticket',
    modelId: 'urban-model-id',
    name: 'Urban Configurator'
  }
}; 