import { describe, expect, test } from '@jest/globals';
import { parameterDefinitions as parameterDefinitions5 } from '../parameterDefinitions5';
import { parameterDefinitions as parameterDefinitions6 } from '../parameterDefinitions6';

describe('Parameter Definitions Comparison', () => {
  test('Compare parameter names between v5 and v6', () => {
    const output: string[] = [];
    output.push('\n🔍 Parameter Definition Comparison (v5 vs v6)');
    output.push('==========================================');

    // Create maps for easier lookup
    const v5Map = new Map(
      parameterDefinitions5.map(p => [p.id, p])
    );
    
    const v6Map = new Map(
      parameterDefinitions6.map(p => [p.id, p])
    );

    // Track statistics
    const stats = {
      totalV5Parameters: parameterDefinitions5.length,
      totalV6Parameters: parameterDefinitions6.length,
      nameConflicts: 0,
      sharedIds: 0
    };

    // Check all v5 parameters against v6
    v5Map.forEach((v5Param, id) => {
      const v6Param = v6Map.get(id);
      if (v6Param) {
        stats.sharedIds++;
        if (v5Param.name !== v6Param.name) {
          stats.nameConflicts++;
          output.push(`\n🔸 ID "${id}" has different names:`);
          output.push(`   v5: "${v5Param.name}"`);
          output.push(`   v6: "${v6Param.name}"`);
        }
      }
    });

    // Output summary
    output.push('\n📊 Summary:');
    output.push(`Total parameters in v5: ${stats.totalV5Parameters}`);
    output.push(`Total parameters in v6: ${stats.totalV6Parameters}`);
    output.push(`Shared IDs: ${stats.sharedIds}`);
    output.push(`Name conflicts: ${stats.nameConflicts}`);

    // Print all output
    console.log(output.join('\n'));

    // Basic assertions to ensure the test is meaningful
    expect(stats.totalV5Parameters).toBeGreaterThan(0);
    expect(stats.totalV6Parameters).toBeGreaterThan(0);
    expect(stats.sharedIds).toBeGreaterThan(0);
  });
});