import React, { ReactNode } from 'react';
import { Tabs, Text, Button, Group, Badge } from '@mantine/core';
import { IconStar, IconHeart, IconShoppingCart } from '@tabler/icons-react';

export interface ProductDetailLayoutProps {
  name: string;
  image?: string;
  price: number | null;
  priceOnRequest?: boolean;
  description?: string;
  rating?: number;
  reviews?: number;
  onAddToCart?: () => void;
  children?: ReactNode;
  specificationsContent?: ReactNode;
  componentsContent?: ReactNode;
  reviewsContent?: ReactNode;
  features?: string[];
  manufacturer?: string;
  manufacturerId?: string;
  shippingContent?: ReactNode;
  warrantyContent?: ReactNode;
  similarItems?: ReactNode;
  aboutContent?: ReactNode;
}

/**
 * Layout component for product detail pages
 * Used for both prefab bikes and components
 */
const ProductDetailLayout: React.FC<ProductDetailLayoutProps> = ({
  name,
  image,
  price,
  priceOnRequest,
  description,
  rating,
  reviews,
  onAddToCart,
  children,
  specificationsContent,
  componentsContent,
  reviewsContent,
  features = [],
  manufacturer,
  manufacturerId,
}) => {
  const fallbackImage = '/placeholder-image.png';

  return (
    <div className="w-full max-w-7xl mx-auto px-4 pb-12 bg-white rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
        {/* Left column - Product Image */}
        <div className="relative bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
          <img
            src={image || fallbackImage}
            alt={name}
            className="w-full h-96 object-cover object-center"
          />
          
          {features.length > 0 && (
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {features.map((feature) => (
                <Badge
                  key={feature}
                  variant="filled"
                  size="md"
                  radius="sm"
                  className="bg-primary-600 text-white"
                >
                  {feature}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Right column - Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <Text className="text-3xl font-bold text-gray-900 mb-4">{name}</Text>
            
            {manufacturer && (
              <Text className="text-gray-700 mb-2">
                Produced by: {manufacturerId ? (
                  <a 
                    href={`/dashboard/profile/${manufacturerId}`}
                    className="text-primary-600 hover:underline"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    {manufacturer}
                  </a>
                ) : manufacturer}
              </Text>
            )}
            
            {rating !== undefined && (
              <Group className="mb-4">
                <div className="flex items-center gap-1">
                  <IconStar className="text-yellow-500" size={20} />
                  <Text className="font-medium">{rating.toFixed(1)}</Text>
                </div>
                
                {reviews !== undefined && (
                  <Text className="text-gray-600 text-sm">
                    ({reviews} {reviews === 1 ? 'review' : 'reviews'})
                  </Text>
                )}
              </Group>
            )}
            
            <Text className="text-2xl font-bold text-gray-900 mb-6">
              {priceOnRequest ? "Price on request" : price ? `$${price}` : "Free"}
            </Text>
            
            {description && (
              <div className="mb-6">
                <Text className="text-gray-700 leading-relaxed">
                  {description}
                </Text>
              </div>
            )}
            
            {children}
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-100">
            <Group>
              {onAddToCart && (
                <Button 
                  size="lg" 
                  className="bg-primary-600 hover:bg-primary-700"
                  leftSection={<IconShoppingCart size={20} />}
                  onClick={onAddToCart}
                >
                  Add to Cart
                </Button>
              )}
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-300 text-gray-700"
                leftSection={<IconHeart size={20} />}
              >
                Save
              </Button>
            </Group>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="w-full mt-6 mb-8">
        <Tabs defaultValue="specifications" className="border-b-0">
          <Tabs.List className="border-b-0">
            <Tabs.Tab 
              value="specifications" 
              className="font-semibold px-4 py-3 transition-colors"
            >
              Specifications
            </Tabs.Tab>
            
            {componentsContent && (
              <Tabs.Tab 
                value="components" 
                className="font-semibold px-4 py-3 transition-colors"
              >
                Components
              </Tabs.Tab>
            )}
            
            {reviewsContent && (
              <Tabs.Tab 
                value="reviews" 
                className="font-semibold px-4 py-3 transition-colors"
              >
                Reviews
              </Tabs.Tab>
            )}
          </Tabs.List>
          
          <div className="mt-4 p-2 border border-gray-100 rounded-lg bg-white">
            <Tabs.Panel value="specifications">
              {specificationsContent || <Text>No specifications available</Text>}
            </Tabs.Panel>
            
            {componentsContent && (
              <Tabs.Panel value="components">
                {componentsContent}
              </Tabs.Panel>
            )}
            
            {reviewsContent && (
              <Tabs.Panel value="reviews">
                {reviewsContent}
              </Tabs.Panel>
            )}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetailLayout; 