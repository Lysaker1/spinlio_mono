export type ConfiguratorType = 'default' | 'vulz';

export interface SavedDesign {
  id: string;
  user_id: string;
  name: string;
  description?: string;
  parameters: Record<string, unknown>;
  thumbnail_url?: string;
  created_at: string;
  configurator_type: ConfiguratorType;
} 