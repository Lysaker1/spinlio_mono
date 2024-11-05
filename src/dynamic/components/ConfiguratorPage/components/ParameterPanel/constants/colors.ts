// Define our standard color palette
export const colorPalette: Record<string, { hex: string; label: string }> = {
    // Basic colors
    '0': { hex: '#0D0D0D', label: 'Black' }, // 0
    '1': { hex: '#2A3439', label: 'Gunmetal Grey' }, // 1
    '2': { hex: '#D3D3D3', label: 'Light Grey' }, // 2
    '3': { hex: '#4B5320', label: 'Army Green' }, // 3
    '4': { hex: '#008080', label: 'Teal' }, // 4
    '5': { hex: '#D50000', label: 'Racing Red' }, // 5
    '6': { hex: '#A1CAF1', label: 'Baby Blue' }, // 6
    '7': { hex: '#F5F5F5', label: 'White' }, // 7
    '8': { hex: '#A9ACB6', label: 'Raw Aluminium' } // 8
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