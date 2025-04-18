// Import required interfaces from ShapeDiver viewer library
import { ISessionApi, IViewportApi } from '@shapediver/viewer';
import { ConfiguratorType } from '@shared/types/SavedDesign';

// Interface defining props passed to the ParameterPanel component
export interface ParameterPanelProps {
  // Currently selected component identifier
  selectedComponent: string;
  // ShapeDiver session API instance, can be null if not initialized
  session: ISessionApi | null;
  // ShapeDiver viewport API instance, can be null if not initialized
  viewport: IViewportApi | null;
  configuratorType: 'default' | 'vulz' | 'stepthru' | 'bookshelf' | 'table' | 'sofa' | 'urban'; // Add this line

}

// Interface defining the structure of a parameter that can be configured
export interface ParameterDefinition {
    // Unique identifier for the parameter
    id: string;
    // Display name of the parameter
    name: string;
    // Type of input control to display for this parameter
    type: 'slider' | 'dropdown' | 'boolean' | 'color' | 'colorWithPalette' | 'text' | 'checkbox' | 'graphmapper' | 'fileinput' | 'grid' | 'logoUpload';
    // Category the parameter belongs to for organizational purposes
    category: 'geometry' | 'surface' | 'hardware' | 'tubing' |'accessories' | 'client information' | 'other'| 'visual'|  'sizing' | 'material';
    // Current value of the parameter as a string
    value: string;
    // Optional minimum value for numeric parameters
    configuratorTypes?: ConfiguratorType[]; // Add this instead of tags
    // Optional sub-category for the parameter
    subCategory?: string;

    min?: number;
    // Optional maximum value for numeric parameters
    max?: number;
    // Optional unit of measurement for the parameter
    tag?: string;
    // Optional tag for include/exclude in basi
    unit?: string;
    // Optional array of choices for dropdown parameters
    options?: Array<{
      // Display label for the option
      label: string;
      // Value to be used when option is selected
      value: string;
    }>;
    disabled?: boolean;
    step?: number;
  }