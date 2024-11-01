// Define our standard color palette
export const colorPalette: Record<string, { hex: string; label: string }> = {
    // Basic colors
    '0x0D0D0Dff': { hex: '#0D0D0D', label: 'Black' },
    '0x2A3439ff': { hex: '#2A3439', label: 'Gunmetal Grey' },
    '0xD3D3D3ff': { hex: '#D3D3D3', label: 'Light Grey' },
    '0x4B5320ff': { hex: '#4B5320', label: 'Army Green' },
    '0x008080ff': { hex: '#008080', label: 'Teal' },
    '0xD50000ff': { hex: '#D50000', label: 'Racing Red' },
    '0xA1CAF1ff': { hex: '#A1CAF1', label: 'Baby Blue' },
    '0xF5F5F5ff': { hex: '#F5F5F5', label: 'White' },
    '0xA9ACB6ff': { hex: '#A9ACB6', label: 'Raw Aluminium' },
    
    // Material specific colors
    '0x2b2b2bff': { hex: '#2B2B2B', label: 'Carbon Black' },
    '0x878787ff': { hex: '#878787', label: 'Brushed Metal' },
};
  
  // Helper functions
export const formatColor = (hexColor: string): string => {
    return colorPalette[hexColor]?.hex || '#' + hexColor.replace('0x', '').slice(0, 6);
};
  
export const getColorLabel = (hexColor: string): string => {
  return colorPalette[hexColor]?.label || 'Custom';
};