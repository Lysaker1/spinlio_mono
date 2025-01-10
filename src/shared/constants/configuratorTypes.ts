export const CONFIGURATOR_TYPES = {
  DEFAULT: 'default',
  VULZ: 'vulz'
} as const;

export type ConfiguratorType = typeof CONFIGURATOR_TYPES[keyof typeof CONFIGURATOR_TYPES]; 