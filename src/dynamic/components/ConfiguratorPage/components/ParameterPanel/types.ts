import { ISessionApi, IViewportApi } from '@shapediver/viewer';

export interface ParameterPanelProps {
  selectedComponent: string;
  session: ISessionApi | null;
  viewport: IViewportApi | null;
}

export interface ParameterDefinition {
  id: string;
  name: string;
  type: 'slider' | 'dropdown' | 'boolean' | 'color';
  value: string | number;
  min?: number;
  max?: number;
  options?: Array<{ label: string; value: string | number }>;
}