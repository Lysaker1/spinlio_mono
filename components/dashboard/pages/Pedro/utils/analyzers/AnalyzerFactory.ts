import * as THREE from 'three';
import { ComponentAnalyzer } from './core/ComponentAnalyzer';
import { HandlebarAnalyzer } from './HandlebarAnalyzer';
import { AttachmentPoint } from '../../components/AttachmentPointHelper';
import { ComponentTypeConfig } from '../../constants/ComponentAttachmentOptions';

/**
 * Factory class for creating and managing component analyzers
 */
export class AnalyzerFactory {
  // Map of analyzer IDs to analyzer instances
  private static analyzers: Map<string, ComponentAnalyzer> = new Map();
  
  /**
   * Initialize the analyzer factory with all available analyzers
   */
  public static initialize(): void {
    // Register all available analyzers
    this.registerAnalyzer('handlebar', new HandlebarAnalyzer());
    
    console.log(`AnalyzerFactory initialized with ${this.analyzers.size} analyzers`);
  }
  
  /**
   * Register a component analyzer
   * @param id Unique identifier for the analyzer
   * @param analyzer The analyzer instance
   */
  public static registerAnalyzer(id: string, analyzer: ComponentAnalyzer): void {
    this.analyzers.set(id, analyzer);
  }
  
  /**
   * Get an analyzer by ID
   * @param id Analyzer identifier
   * @returns The analyzer instance or null if not found
   */
  public static getAnalyzer(id: string): ComponentAnalyzer | null {
    return this.analyzers.get(id) || null;
  }
  
  /**
   * Get an analyzer for a component configuration
   * @param config Component configuration
   * @returns The analyzer instance or null if not found
   */
  public static getAnalyzerForComponent(config: ComponentTypeConfig): ComponentAnalyzer | null {
    return this.getAnalyzer(config.analyzerId);
  }
  
  /**
   * Analyze a model using the appropriate analyzer
   * @param componentType Type of component
   * @param meshes All meshes in the model
   * @param boundingBox The overall bounding box of the model
   * @returns Array of attachment points
   */
  public static analyzeModel(
    componentType: string,
    meshes: Record<string, THREE.Mesh>,
    boundingBox: THREE.Box3
  ): AttachmentPoint[] {
    // Get the analyzer for the component type
    const analyzer = this.getAnalyzer(componentType);
    
    if (!analyzer) {
      console.warn(`No analyzer found for component type: ${componentType}`);
      return [];
    }
    
    console.log(`Analyzing model as ${componentType}...`);
    
    // Run the analyzer
    try {
      return analyzer.analyze(meshes, boundingBox);
    } catch (error) {
      console.error(`Error analyzing model as ${componentType}:`, error);
      return [];
    }
  }
} 