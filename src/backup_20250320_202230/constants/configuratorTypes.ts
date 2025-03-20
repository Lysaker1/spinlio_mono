export const CONFIGURATOR_TYPES = {
  DEFAULT: 'default',
  VULZ: 'vulz',
  STEPTHRU: 'stepthru',
  BOOKSHELF: 'bookshelf',
  TABLE: 'table',
  SOFA: 'sofa',
  URBAN: 'urban'
} as const;

export const CONFIGURATOR_PATHS = {
  default: '/',
  vulz: '/vulz',
  stepthru: '/vulz/stepthru',
  urban: '/vulz/urban',
  
  sofa: '/sofa',
  table: 'table',
  bookshelf: '/bookshelf'
};

export type ConfiguratorType = typeof CONFIGURATOR_TYPES[keyof typeof CONFIGURATOR_TYPES]; 