import React from 'react';
import { Card, Image, Text, Group, Avatar, Badge, Rating } from '@mantine/core';
import { Link } from 'react-router-dom';
import { Profile } from '@frontend/types/Profile';

export interface ProductCardProps {
  id: string;
  type: 'prefab' | 'component';
  image?: string;
  name: string;
  price: number | null;
  priceOnRequest?: boolean;
  user?: Profile;
  rating?: number;
  features?: string[];
  onClick?: () => void; // Optional click handler for component preview
}

/**
 * A reusable card component for displaying products in the marketplace
 * Used for both prefab bikes and components
 */
const ProductCard: React.FC<ProductCardProps> = ({
  id,
  type,
  image,
  name,
  price,
  priceOnRequest,
  user,
  rating = 0,
  features = [],
  onClick,
}) => {
  // Generate the detail page URL based on product type
  const detailUrl = `/dashboard/marketplace/${type}/${id}`;
  const fallbackImage = '/placeholder-image.png';

  const handleCardClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <Card 
      p={0}
      radius="md" 
      withBorder={false}
      component={Link} 
      to={detailUrl}
      className="cursor-pointer hover:shadow-lg transition-shadow duration-200 relative group bg-white overflow-hidden"
      onClick={handleCardClick}
    >
      {onClick && (
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClick();
            }}
          >
          </button>
        </div>
      )}
      <Card.Section className="h-48">
        <Image 
          src={image || fallbackImage} 
          alt={name} 
          className="w-full h-full object-cover object-center"
        />
      </Card.Section>

      <div className="p-4">
        <Text fw={600} lineClamp={1} className="mb-2 text-gray-800">{name}</Text>
        
        {features.length > 0 && (
          <div className="flex flex-wrap gap-1 my-2">
            {features.slice(0, 2).map((feature) => (
              <Badge key={feature} variant="outline" size="xs" className="bg-gray-50 text-gray-700 border-gray-200">
                {feature}
              </Badge>
            ))}
          </div>
        )}
        
        <Group className="flex items-center gap-2 py-2">
          {user && (
            <div 
              className="flex items-center gap-2 cursor-pointer" 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = `/dashboard/profile/${user.id}`;
              }}
            >
              <Avatar src={user.avatar_url} alt={user.name} radius="xl" size="sm">
                {user?.name?.charAt(0)}
              </Avatar>
              <Text size="sm" className="text-gray-600">Produced by {user?.name || 'Unknown'}</Text>
            </div>
          )}
        </Group>
        
        <div className="flex justify-between items-center mt-2">
          <Text size="lg" className="font-bold text-gray-900">
            {priceOnRequest ? "Price on request" : price ? `$${price}` : "Free"}
          </Text>
          
          {rating > 0 && (
            <Rating value={rating} size="sm" fractions={1} readOnly />
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProductCard; 