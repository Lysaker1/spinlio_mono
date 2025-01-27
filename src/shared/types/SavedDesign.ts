export type ConfiguratorType = 'default' | 'vulz' | 'stepthru' | 'bookshelf' | 'table' | 'sofa';

export interface SavedDesign {
  id: string;
  name: string;
  user_id: string;
  description: string;
  parameters: Record<string, any>;
  configurator_type: ConfiguratorType;
  thumbnail_url: string | null;
  created_at: string;
  is_deleted?: boolean;
}

// Add a type for creating a new design
export type NewDesign = Omit<SavedDesign, 'id' | 'created_at'> & {
  thumbnail_url?: string | null;
}; 