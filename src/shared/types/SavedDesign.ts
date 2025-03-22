import { ConfiguratorType } from '../constants/configuratorTypes';

export interface SavedDesign {
  id: string;
  user_id: string;
  name: string;
  description: string;
  parameters: Record<string, any>;
  configurator_type: ConfiguratorType;
  thumbnail_url: string;
  is_public: boolean;
  created_at?: string;
}

// Add a type for creating a new design
export type NewDesign = Omit<SavedDesign, 'id' | 'created_at'> & {
  thumbnail_url?: string | null;
}; 