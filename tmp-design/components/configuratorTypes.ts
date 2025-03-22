export type ConfiguratorType = 'table' | 'chair' | 'sofa' | 'bike' | 'default' | 'vulz';

export const CONFIGURATOR_TYPES = {
  TABLE: 'table' as ConfiguratorType,
  CHAIR: 'chair' as ConfiguratorType,
  SOFA: 'sofa' as ConfiguratorType,
  BIKE: 'bike' as ConfiguratorType,
  DEFAULT: 'default' as ConfiguratorType,
  VULZ: 'vulz' as ConfiguratorType
};

export const CONFIGURATOR_PATHS = {
  default: '/',
  vulz: '/vulz',
  stepthru: '/vulz/stepthru',
  urban: '/vulz/urban',
  sofa: '/sofa',
  table: 'table',
  bookshelf: '/bookshelf'
}; 