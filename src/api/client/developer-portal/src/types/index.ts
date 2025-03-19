export type ParameterType = 'slider' | 'color' | 'dropdown' | 'checkbox' | 'logoUpload' | 'text';

export type ParameterCategory = 'tubing' | 'geometry' | 'accessories' | 'client information' | 'other' | 'visual' | 'sizing' | 'material';

export interface Parameter {
  id: string;
  name: string;
  value: string;
  category?: ParameterCategory;
  subCategory?: string;
  type: ParameterType;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  options?: DropdownOption[];
  verified?: boolean;
  hidden?: boolean;
  configuratorTypes?: string[];
}

export interface DropdownOption {
  value: string;
  label: string;
  order: number;
}

export interface CategoryConfig {
  subcategories: string[];
  defaultValues?: Record<string, any>;
}

export type CategoryManagement = Record<ParameterCategory, CategoryConfig>;

export interface ParameterOption {
  label: string;
  value: string;
}

export interface ModelUpload {
  name: string;
  type: 'shapediver' | 'grasshopper' | 'other';
  image?: File;
  ticketId?: string;
  url?: string;
  parameters: Parameter[];
  configuratorType: string;
} 