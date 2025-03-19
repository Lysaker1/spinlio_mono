import { ComponentAnalyzer } from './core/ComponentAnalyzer';
import * as GeometryAnalyzer from './core/GeometryAnalyzer';
import { HandlebarAnalyzer } from './HandlebarAnalyzer';

export {
  ComponentAnalyzer,
  GeometryAnalyzer,
  HandlebarAnalyzer
};

// Factory function to create the appropriate analyzer based on the component type
export function createAnalyzer(componentType: string): ComponentAnalyzer {
  switch (componentType.toLowerCase()) {
    case 'handlebar':
      return new HandlebarAnalyzer();
    // Future analyzers can be added here
    // case 'wheel':
    //   return new WheelAnalyzer();
    // case 'pedal':
    //   return new PedalAnalyzer();
    default:
      console.warn(`No specific analyzer found for component type: ${componentType}, using HandlebarAnalyzer as fallback`);
      return new HandlebarAnalyzer();
  }
} 