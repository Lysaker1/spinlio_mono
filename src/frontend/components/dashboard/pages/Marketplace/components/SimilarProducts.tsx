import React from 'react';
import { SimpleGrid } from '@mantine/core';
import { BikeTemplate } from '@frontend/components/ConfiguratorPage/components/Sidebar/bikeTemplates';
import { ModelMetadata } from '@frontend/services/modelService';
import { Profile } from '@frontend/types/Profile';
import ProductCard from './ProductCard';

interface SimilarProductsProps {
  products: (BikeTemplate | ModelMetadata)[];
  users: Map<string, Profile>;
  productType: 'prefab' | 'component';
}

/**
 * A component for displaying similar products in a grid
 */
const SimilarProducts: React.FC<SimilarProductsProps> = ({ 
  products, 
  users, 
  productType 
}) => {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, md: 4, lg: 5 }} spacing="lg">
      {products.map((product) => {
        // Handle both BikeTemplate and ModelMetadata
        const isPrefab = 'manufacturer_id' in product;
        const userId = isPrefab ? product.manufacturer_id : (product as ModelMetadata).user_id;
        const user = userId ? users.get(userId) : undefined;
        
        if (isPrefab && productType === 'prefab') {
          const prefab = product as BikeTemplate;
          return (
            <ProductCard
              key={prefab.id}
              id={prefab.id}
              type="prefab"
              image={prefab.image}
              name={prefab.name}
              price={prefab.price}
              user={user}
              rating={4 + Math.random()}
            />
          );
        } else if (!isPrefab && productType === 'component') {
          const component = product as ModelMetadata;
          return (
            <ProductCard
              key={component.id as string}
              id={component.id as string}
              type="component"
              image={component.thumbnail_url}
              name={component.name}
              price={component.price || null}
              priceOnRequest={component.price_on_request}
              user={user}
              rating={4 + Math.random()}
            />
          );
        }
        
        return null;
      }).filter(Boolean)}
    </SimpleGrid>
  );
};

export default SimilarProducts; 