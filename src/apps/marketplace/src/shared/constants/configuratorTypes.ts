export type ConfiguratorType = 'table' | 'chair' | 'sofa' | 'bike' | 'default' | 'vulz' | 'urban' | 'stepthru' | 'bookshelf';

export const CONFIGURATOR_TYPES = {
  TABLE: 'table' as ConfiguratorType,
  CHAIR: 'chair' as ConfiguratorType,
  SOFA: 'sofa' as ConfiguratorType,
  BIKE: 'bike' as ConfiguratorType,
  DEFAULT: 'default' as ConfiguratorType,
  VULZ: 'vulz' as ConfiguratorType,
  URBAN: 'urban' as ConfiguratorType,
  STEPTHRU: 'stepthru' as ConfiguratorType,
  BOOKSHELF: 'bookshelf' as ConfiguratorType
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