import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Loader, Text, Table, Group, Badge, Rating } from '@mantine/core';
import { IconBike, IconUser, IconTruck, IconCertificate, IconMapPin, IconTools } from '@tabler/icons-react';
import { bikeTemplates, BikeTemplate } from '@shared/constants/bikeTemplates';
import { CONFIGURATOR_PATHS } from '@shared/constants/configuratorTypes';
import { ProfileStorageService } from '@shared/services/profileStorage';
import { Profile } from '@shared/types/Profile';
import ProductDetailLayout from './components/ProductDetailLayout';
import ProductSpecification from './components/ProductSpecification';
import SimilarProducts from './components/SimilarProducts';
import ProductFeatureBadge from './components/ProductFeatureBadge';
import { getPrefabComponents } from './data/prefabComponents';

// Sample features for demonstration purposes
const FEATURES = [
  "Handlebar Display",
  "Integrated Lighting",
  "Hydraulic Brakes",
  "700C",
  "15Ah Battery"
];

// Sample specifications for demonstration purposes
const SPECS = [
  { name: "Manufactured in", value: "Taiwan" },
  { name: "Shimano Components", value: true },
  { name: "European Service Centre", value: true },
  { name: "Ships 75% Assembled", value: true },
];

const PrefabDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [prefab, setPrefab] = useState<BikeTemplate | null>(null);
  const [loading, setLoading] = useState(true);
  const [manufacturer, setManufacturer] = useState<Profile | null>(null);
  const [users, setUsers] = useState<Map<string, Profile>>(new Map());
  const [similarPrefabs, setSimilarPrefabs] = useState<BikeTemplate[]>([]);
  const [components, setComponents] = useState<any[]>([]);
  
  useEffect(() => {
    // Find the prefab with the matching id
    const foundPrefab = bikeTemplates.find(p => p.id === id);
    
    if (foundPrefab) {
      setPrefab(foundPrefab);
      
      // Find similar prefabs (same type or similar price range)
      const similar = bikeTemplates
        .filter(p => p.id !== id && (p.type === foundPrefab.type || Math.abs((p.price || 0) - (foundPrefab.price || 0)) < 100))
        .slice(0, 5);
      
      setSimilarPrefabs(similar);
      
      // Load component data
      setComponents(getPrefabComponents());

      // Fetch manufacturer profile
      const fetchManufacturer = async () => {
        if (foundPrefab.manufacturer_id) {
          try {
            const profile = await ProfileStorageService.getProfile(foundPrefab.manufacturer_id);
            setManufacturer(profile);
            setUsers(prev => new Map(prev.set(foundPrefab.manufacturer_id, profile)));
          } catch (error) {
            console.error('Failed to fetch manufacturer profile:', error);
          }
        }
        
        // Fetch profiles for similar prefabs
        for (const p of similar) {
          if (p.manufacturer_id && !users.has(p.manufacturer_id)) {
            try {
              const profile = await ProfileStorageService.getProfile(p.manufacturer_id);
              setUsers(prev => new Map(prev.set(p.manufacturer_id, profile)));
            } catch (error) {
              console.error(`Failed to fetch profile for ${p.manufacturer_id}:`, error);
            }
          }
        }
        
        setLoading(false);
      };
      
      fetchManufacturer();
    } else {
      setLoading(false);
    }
  }, [id]);
  
  const handleConfigurate = () => {
    if (!prefab) return;
    
    const path = CONFIGURATOR_PATHS[prefab.type as keyof typeof CONFIGURATOR_PATHS] || '/';
    navigate(path, {
      state: { designParameters: prefab.parameters }
    });
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader size="xl" />
      </div>
    );
  }
  
  if (!prefab) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Text size="xl">Prefab not found</Text>
        <Button onClick={() => navigate('/dashboard/marketplace')} className="mt-4">
          Back to Marketplace
        </Button>
      </div>
    );
  }
  
  // About content tab
  const aboutContent = (
    <div className="p-4 space-y-4">
      <Text className="text-gray-700 mb-4">
        {prefab.description || "This premium bike is designed for urban commuting and recreational riding, combining style and functionality."}
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
              <Text size="sm">Ships 75% Assembled</Text>
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
              <Text size="sm">{manufacturer?.name || prefab.manufacturer || 'Unknown Manufacturer'}</Text>
            </Group>
            <Text size="sm">Supplier Rating:</Text>
            <Rating value={4.5} fractions={2} readOnly size="sm" />
            <Text size="xs" c="dimmed">5+ years in business</Text>
          </div>
        </div>
      </div>
    </div>
  );
  
  // Specifications content tab with enhanced layout
  const specificationsContent = (
    <div className="p-4">
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Technical Specifications</h3>
            <div className="space-y-2">
              {[
                { name: "Frame Type", value: prefab.type },
                { name: "Frame Material", value: "Aluminum Alloy" },
                { name: "Motor", value: "250W Mid-Drive" },
                { name: "Battery", value: "36V 15Ah Lithium-ion" },
                { name: "Range", value: "80-100km" },
                { name: "Weight", value: "22kg" }
              ].map((spec, index) => (
                <ProductSpecification key={index} name={spec.name} value={spec.value} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Features</h3>
            <div className="space-y-2">
              {SPECS.map((spec, index) => (
                <ProductSpecification 
                  key={index} 
                  name={typeof spec.value === 'boolean' ? spec.name : spec.name}
                  value={typeof spec.value === 'boolean' ? true : spec.value}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  // Components tab showing the bike's parts
  const componentsContent = (
    <div className="p-4">
      <Text className="mb-4">This bike includes the following premium components:</Text>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {components.map((component, index) => (
          <div key={index} className="bg-gray-50 p-3 rounded-lg flex items-center gap-2">
            <IconTools size={16} className="text-gray-500" />
            <div>
              <Text size="sm" fw={500}>{component.name}</Text>
              <Text size="xs" c="dimmed">{component.manufacturer}</Text>
            </div>
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
        <Text className="mb-3">This bike ships 75% assembled to reduce shipping damage and ensure proper setup.</Text>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Estimated Delivery</h4>
            <Text size="sm">• Europe: 2-3 weeks</Text>
            <Text size="sm">• North America: 3-4 weeks</Text>
            <Text size="sm">• Asia Pacific: 1-2 weeks</Text>
            <Text size="sm">• Rest of World: 4-6 weeks</Text>
          </div>
          <div>
            <h4 className="font-medium mb-2">Shipping Notes</h4>
            <Text size="sm">• Requires assembly upon arrival</Text>
            <Text size="sm">• Includes detailed assembly instructions</Text>
            <Text size="sm">• Assembly service available upon request</Text>
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
        <Text className="mb-3">All bikes come with comprehensive warranty coverage.</Text>
        <div className="space-y-2">
          <Text size="sm">• 5-year warranty on frame</Text>
          <Text size="sm">• 2-year warranty on electrical components</Text>
          <Text size="sm">• 1-year warranty on mechanical components</Text>
          <Text size="sm" className="mt-4">For warranty claims, please contact the service center in your region.</Text>
        </div>
      </div>
    </div>
  );
  
  // Reviews content tab
  const reviewsContent = (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <div className="flex items-center mr-4">
          <Rating value={4.5} fractions={1} readOnly />
          <Text className="ml-2 font-medium">4.5</Text>
        </div>
        <Text className="text-gray-600">Based on 127 reviews</Text>
      </div>
      
      <div className="space-y-4">
        {[
          { name: "Thomas K.", rating: 5, comment: "Beautiful bike, smooth ride, and the battery lasts even longer than advertised!" },
          { name: "Sarah L.", rating: 4, comment: "Assembly was straightforward. Great value for the price, though the seat could be more comfortable." },
          { name: "Michael B.", rating: 5, comment: "Perfect for my commute. The integrated lights are a great safety feature." }
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
  
  // Action buttons for the product
  const actionButtons = (
    <Group className="mt-4">
      <Button
        variant="filled"
        color="dark"
        size="md"
        radius="xl"
        onClick={() => {
          alert('Added to cart!');
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
          window.open(`mailto:${manufacturer?.email || 'sales@bazaar.it'}?subject=Inquiry about ${prefab.name}`, '_blank');
        }}
      >
        Contact Supplier
      </Button>
      
      <Button
        variant="light"
        color="dark"
        size="md"
        radius="xl"
        leftSection={<IconBike size={18} />}
        onClick={handleConfigurate}
      >
        Customize
      </Button>
    </Group>
  );
  
  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <ProductDetailLayout
        name={prefab.name}
        image={prefab.image}
        manufacturer={manufacturer?.name || prefab.manufacturer || 'Unknown Manufacturer'}
        manufacturerId={prefab.manufacturer_id}
        price={prefab.price_on_request ? null : prefab.price}
        priceOnRequest={prefab.price_on_request || false}
        rating={4.5}
        reviews={127}
        description={prefab.description}
        features={FEATURES}
        specificationsContent={specificationsContent}
        aboutContent={aboutContent}
        componentsContent={componentsContent}
        shippingContent={shippingContent}
        warrantyContent={warrantyContent}
        reviewsContent={reviewsContent}
        similarItems={
          <SimilarProducts 
            products={similarPrefabs} 
            users={users} 
            productType="prefab" 
          />
        }
        onAddToCart={() => alert('Item added to cart!')}
      >
        {actionButtons}
      </ProductDetailLayout>
    </div>
  );
};

export default PrefabDetailPage; 