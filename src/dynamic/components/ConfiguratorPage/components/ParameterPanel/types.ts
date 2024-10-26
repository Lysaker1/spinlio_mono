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
    value: string;
    min?: number;
    max?: number;
    unit?: string;
    options?: Array<{
      label: string;
      value: string;
    }>;
  }