export const CONFIGURATOR_TYPES = {
  DEFAULT: 'default',
  VULZ: 'vulz',
  STEPTHRU: 'stepthru',
  BOOKSHELF: 'bookshelf',
  TABLE: 'table',
  SOFA: 'sofa',
  URBAN: 'urban'
} as const;

export type ConfiguratorType = typeof CONFIGURATOR_TYPES[keyof typeof CONFIGURATOR_TYPES]; 