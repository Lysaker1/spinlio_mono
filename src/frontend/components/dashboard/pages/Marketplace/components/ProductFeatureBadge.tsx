import React from 'react';
import { Badge, BadgeProps } from '@mantine/core';

interface ProductFeatureBadgeProps extends Omit<BadgeProps, 'children'> {
  feature: string;
}

/**
 * A reusable component for displaying feature badges
 * Used in product cards and detail pages
 */
const ProductFeatureBadge: React.FC<ProductFeatureBadgeProps> = ({ 
  feature, 
  variant = 'outline', 
  size = 'md',
  ...props 
}) => {
  return (
    <Badge 
      variant={variant} 
      size={size} 
      className="px-3 py-1" 
      {...props}
    >
      {feature}
    </Badge>
  );
};

export default ProductFeatureBadge; 