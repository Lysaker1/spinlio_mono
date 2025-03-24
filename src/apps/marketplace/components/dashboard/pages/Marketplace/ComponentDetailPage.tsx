import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Loader, Text, Table, Group, Badge, Rating } from '@mantine/core';
import { IconShoppingCart, IconUser, IconTruck, IconCertificate, IconMapPin } from '@tabler/icons-react';
import { getModelParameterValues, getModels, ModelMetadata, ParameterDefinition } from '@shared/services/modelService';
import { ProfileStorageService } from '@shared/services/profileStorage';
import { Profile } from '@shared/types/Profile';
import ProductDetailLayout from './components/ProductDetailLayout';
import SimilarProducts from './components/SimilarProducts';
import ProductFeatureBadge from './components/ProductFeatureBadge';
import ProductSpecification from './components/ProductSpecification';

const ComponentDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [component, setComponent] = useState<ModelMetadata | null>(null);
  const [parameterValues, setParameterValues] = useState<ParameterDefinition[]>([]);
  const [loading, setLoading] = useState(true);
  const [manufacturer, setManufacturer] = useState<Profile | null>(null);
  const [users, setUsers] = useState<Map<string, Profile>>(new Map());
  const [similarComponents, setSimilarComponents] = useState<ModelMetadata[]>([]);

  useEffect(() => {
    const fetchComponentData = async () => {
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        // Fetch all components to find the one with matching id
        const components = await getModels();
        const foundComponent = components.find(c => c.id === id);

        if (!foundComponent) {
          setLoading(false);
          return;
        }

        setComponent(foundComponent);

        // Fetch parameter values
        if (foundComponent.id) {
          const values = await getModelParameterValues(foundComponent.id);
          setParameterValues(values);
        }

        // Fetch manufacturer profile
        if (foundComponent.user_id) {
          try {
            const profile = await ProfileStorageService.getProfile(foundComponent.user_id);
            setManufacturer(profile);
            setUsers(prev => new Map(prev.set(foundComponent.user_id as string, profile)));
          } catch (error) {
            console.error('Failed to fetch manufacturer profile:', error);
          }
        }

        // Find similar components based on category
        const similar = components
          .filter(c => 
            c.id !== id && 
            c.category === foundComponent.category &&
            c.is_public
          )
          .slice(0, 5);

        setSimilarComponents(similar);

        // Fetch users for similar components
        similar.forEach(async (c) => {
          if (c.user_id && !users.has(c.user_id)) {
            try {
              const profile = await ProfileStorageService.getProfile(c.user_id);
              setUsers(prev => new Map(prev.set(c.user_id as string, profile)));
            } catch (error) {
              console.error(`Failed to fetch profile for ${c.user_id}:`, error);
            }
          }
        });
      } catch (error) {
        console.error('Failed to load component data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchComponentData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader size="xl" />
      </div>
    );
  }

  if (!component) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Text size="xl">Component not found</Text>
        <Button onClick={() => navigate('/dashboard/marketplace')} className="mt-4">
          Back to Marketplace
        </Button>
      </div>
    );
  }

  // Extract features from parameter values (boolean parameters)
  const features = parameterValues
    .filter(param => param.type === "boolean" && param.value === "true")
    .map(param => param.name);

  // Product specifications to display
  const specifications = [
    { name: "Part Type", value: component.part_type || "Component" },
    { name: "Material", value: component.material || "Multiple" },
    ...(component.dimensions ? [{ name: "Dimensions", value: component.dimensions }] : []),
    ...(component.weight_kg ? [{ name: "Weight", value: `${component.weight_kg} kg` }] : []),
    ...(component.lead_time ? [{ name: "Lead Time", value: `${component.lead_time} days` }] : []),
    ...(component.minimum_order_quantity ? [{ name: "Min. Order Quantity", value: component.minimum_order_quantity.toString() }] : []),
  ];

  // About content tab
  const aboutContent = (
    <div className="p-4 space-y-4">
      <Text className="text-gray-700 mb-4">
        {component.description || "This component doesn't have a description provided by the manufacturer."}
      </Text>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-3">Manufacturing Details</h3>
          <div className="space-y-2">
            <Group>
              <IconMapPin size={18} className="text-gray-500" />
              <Text size="sm">Manufactured in Taiwan</Text>
            </Group>
            <Group>
              <IconTruck size={18} className="text-gray-500" />
              <Text size="sm">Ships within {component.lead_time || 7} days</Text>
            </Group>
            <Group>
              <IconCertificate size={18} className="text-gray-500" />
              <Text size="sm">ISO 9001 Certified</Text>
            </Group>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-3">Supplier Info</h3>
          <div className="space-y-2">
            <Group>
              <IconUser size={18} className="text-gray-500" />
              <Text size="sm">{manufacturer?.name || component.manufacturer || 'Unknown Manufacturer'}</Text>
            </Group>
            <Text size="sm">Supplier Rating:</Text>
            <Rating value={4.5} fractions={2} readOnly size="sm" />
            <Text size="xs" c="dimmed">98% Assurance Rate</Text>
          </div>
        </div>
      </div>
    </div>
  );

  // Specifications content tab
  const specificationsContent = (
    <div className="p-4">
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Technical Specifications</h3>
            <div className="space-y-2">
              {specifications.map((spec, index) => (
                <ProductSpecification key={index} name={spec.name} value={spec.value} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Additional Parameters</h3>
            <div className="space-y-2">
              {parameterValues
                .filter(param => param.type !== "boolean" && param.value)
                .map(param => (
                  <ProductSpecification 
                    key={param.id} 
                    name={param.name} 
                    value={`${param.value}${param.suffix ? ' ' + param.suffix : ''}`} 
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Components content tab - show compatibility information
  const componentsContent = (
    <div className="p-4">
      <Text className="mb-4">This component is compatible with the following bike models:</Text>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {['Urban E-Bike', 'Mountain Trail', 'Road Racer', 'City Commuter'].map((bike, index) => (
          <div key={index} className="bg-gray-50 p-3 rounded-lg flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <Text>{bike}</Text>
          </div>
        ))}
      </div>
    </div>
  );

  // Shipping content tab
  const shippingContent = (
    <div className="p-4 space-y-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium mb-3">Shipping Information</h3>
        <Text className="mb-3">Standard shipping is available worldwide.</Text>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Estimated Delivery</h4>
            <Text size="sm">• Europe: 7-10 business days</Text>
            <Text size="sm">• North America: 10-14 business days</Text>
            <Text size="sm">• Asia Pacific: 5-7 business days</Text>
            <Text size="sm">• Rest of World: 14-21 business days</Text>
          </div>
          <div>
            <h4 className="font-medium mb-2">Shipping Options</h4>
            <Text size="sm">• Standard Shipping</Text>
            <Text size="sm">• Express Shipping (additional fee)</Text>
            <Text size="sm">• Bulk Orders (contact for quote)</Text>
          </div>
        </div>
      </div>
    </div>
  );

  // Warranty content tab
  const warrantyContent = (
    <div className="p-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium mb-3">Warranty Information</h3>
        <Text className="mb-3">All components come with a standard warranty against manufacturing defects.</Text>
        <div className="space-y-2">
          <Text size="sm">• 1-year limited warranty on structural components</Text>
          <Text size="sm">• 6-month warranty on mechanical parts</Text>
          <Text size="sm">• Warranty void if improperly installed or modified</Text>
          <Text size="sm" className="mt-4">Contact the manufacturer for details on warranty coverage and claims process.</Text>
        </div>
      </div>
    </div>
  );

  // Reviews content tab
  const reviewsContent = (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <div className="flex items-center mr-4">
          <Rating value={4.2} fractions={1} readOnly />
          <Text className="ml-2 font-medium">4.2</Text>
        </div>
        <Text className="text-gray-600">Based on 184 reviews</Text>
      </div>
      
      <div className="space-y-4">
        {[
          { name: "John D.", rating: 5, comment: "Excellent quality and perfect fit for my bike project." },
          { name: "Maria S.", rating: 4, comment: "Good component, shipping was a bit slow but arrived in perfect condition." },
          { name: "Alex T.", rating: 4, comment: "Sturdy construction, works as expected. Would buy again." }
        ].map((review, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <div className="flex items-center mb-2">
              <Rating value={review.rating} readOnly size="sm" />
              <Text className="ml-2 font-medium">{review.name}</Text>
            </div>
            <Text size="sm">{review.comment}</Text>
          </div>
        ))}
      </div>
    </div>
  );

  // Action buttons for product
  const actionButtons = (
    <Group className="mt-4">
      <Button
        variant="filled"
        color="dark"
        size="md"
        radius="xl"
        leftSection={<IconShoppingCart size={18} />}
        onClick={() => {
          // Add to cart functionality
          alert('Item added to cart!');
        }}
      >
        Buy Now
      </Button>
      
      <Button
        variant="outline"
        color="dark"
        size="md"
        radius="xl"
        onClick={() => {
          // Contact supplier functionality
          window.open(`mailto:${manufacturer?.email || 'contact@bazaar.it'}?subject=Inquiry about ${component.name}`, '_blank');
        }}
      >
        Contact Supplier
      </Button>
      
      <Button
        variant="light"
        color="dark"
        size="md"
        radius="xl"
        onClick={() => {
          // Redirect to design app with the component
          const designAppUrl = process.env.NODE_ENV === 'production' 
            ? 'https://design.bazaar.it' 
            : 'http://localhost:3001';
          
          window.open(`${designAppUrl}/component/${component.id}`, '_blank');
        }}
      >
        Customize
      </Button>
    </Group>
  );

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <ProductDetailLayout
        name={component.name}
        image={component.url || component.thumbnail_url || '/placeholder-image.png'}
        manufacturer={manufacturer?.name || component.manufacturer || 'Unknown Manufacturer'}
        manufacturerId={component.user_id}
        price={component.price_on_request ? null : component.price || null}
        priceOnRequest={component.price_on_request}
        rating={4.2}
        reviews={184}
        description={component.description || undefined}
        features={features}
        specificationsContent={specificationsContent}
        aboutContent={aboutContent}
        componentsContent={componentsContent}
        shippingContent={shippingContent}
        warrantyContent={warrantyContent}
        reviewsContent={reviewsContent}
        similarItems={
          <SimilarProducts 
            products={similarComponents} 
            users={users} 
            productType="component" 
          />
        }
        onAddToCart={() => alert('Item added to cart!')}
      >
        {actionButtons}
      </ProductDetailLayout>
    </div>
  );
};

export default ComponentDetailPage; 