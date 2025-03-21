import React from 'react';
import { Text } from '@mantine/core';

export interface ProductSpecificationProps {
  name: string;
  value: string | boolean;
}

/**
 * A reusable component for displaying product specifications
 * Used in product detail pages
 */
const ProductSpecification: React.FC<ProductSpecificationProps> = ({ name, value }) => {
  const displayValue = typeof value === 'boolean' ? name : `${name}: ${value}`;
  
  return (
    <div className="flex items-center gap-2 mb-2">
      <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
      <Text size="sm">{displayValue}</Text>
    </div>
  );
};

export default ProductSpecification; 