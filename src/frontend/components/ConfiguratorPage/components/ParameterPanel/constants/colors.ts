// Define our standard color palette
export const colorPalette: Record<string, { hex: string; label: string }> = {
    // Colors in specified order
    '0': { hex: '#2B2B2B', label: 'Black' },
    '1': { hex: '#F5F5F5', label: 'White' },
    '2': { hex: '#008080', label: 'Teal' },
    '3': { hex: '#D50000', label: 'Racing Red' },
    '4': { hex: '#A1CAF1', label: 'Baby Blue' },
    '5': { hex: '#0892d0', label: 'Electric Blue' },
    '6': { hex: '#2b4f2e', label: 'Forest Green' },
    '7': { hex: '#414141', label: 'Gun Metal Gray' },
    '8': { hex: '#ff3503', label: 'Mango Orange' },
    '9': { hex: '#888982', label: 'Light Grey' },
    '10': { hex: '#e7d6b5', label: 'Sand' },
    '11': { hex: '#4d5760', label: 'Glue' }
};


// Function to get the hex color based on the value
export const getColorFromValue = (value: string): string => {
    return colorPalette[value]?.hex || '#FFFFFF'; // Default to white if not found
};

// Helper functions
export const formatColor = (hexColor: string): string => {
    return colorPalette[hexColor]?.hex || '#' + hexColor.replace('0x', '').slice(0, 6);
};
  
export const getColorLabel = (hexColor: string): string => {
  return colorPalette[hexColor]?.label || 'Custom';
};