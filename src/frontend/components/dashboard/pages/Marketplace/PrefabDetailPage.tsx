import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Loader, Text, Table } from '@mantine/core';
import { BikeTemplate, bikeTemplates } from '@frontend/components/ConfiguratorPage/components/Sidebar/bikeTemplates';
import { CONFIGURATOR_PATHS } from '@frontend/constants/configuratorTypes';
import { ProfileStorageService } from '@frontend/services/profileStorage';
import { Profile } from '@frontend/types/Profile';
import ProductDetailLayout from './components/ProductDetailLayout';
import ProductSpecification from './components/ProductSpecification';
import SimilarProducts from './components/SimilarProducts';
import ProductFeatureBadge from './components/ProductFeatureBadge';
import { getPrefabComponents } from './data/prefabComponents';

// Sample features for demonstration purposes
const FEATURES = [
  { name: "Handlebar Display", value: true },
  { name: "Integrated Lighting", value: true },
  { name: "Hydraulic Brakes", value: true },
  { name: "700C", value: true },
  { name: "15Ah Battery", value: true },
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
  
  useEffect(() => {
    // Find the prefab with the matching id
    const foundPrefab = bikeTemplates.find(p => p.id === id);
    
    if (foundPrefab) {
      setPrefab(foundPrefab);
      
      // Find similar prefabs (same type or similar price range)
      const similar = bikeTemplates
        .filter(p => p.id !== id && (p.type === foundPrefab.type || Math.abs(p.price - foundPrefab.price) < 100))
        .slice(0, 5);
      
      setSimilarPrefabs(similar);
      
      // Fetch manufacturer
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
        setLoading(false);
      };
      
      fetchManufacturer();
      
      // Fetch users for similar prefabs
      similar.forEach(async (p) => {
        if (p.manufacturer_id && !users.has(p.manufacturer_id)) {
          try {
            const profile = await ProfileStorageService.getProfile(p.manufacturer_id);
            setUsers(prev => new Map(prev.set(p.manufacturer_id, profile)));
          } catch (error) {
            console.error(`Failed to fetch profile for ${p.manufacturer_id}:`, error);
          }
        }
      });
    } else {
      setLoading(false);
    }
  }, [id]);
  
  const handleConfigurate = () => {
    if (prefab) {
      const path = CONFIGURATOR_PATHS[prefab.type as keyof typeof CONFIGURATOR_PATHS] || '/';
      navigate(path, {
        state: { designParameters: prefab.parameters }
      });
    }
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
  
  const aboutContent = (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-1/3">
        <img
          src={prefab.image || '/placeholder-image.png'}
          className="w-full h-auto rounded-lg object-cover mb-4"
          alt={prefab.name}
        />
      </div>
      <div className="md:w-2/3">
        <ul className="list-disc pl-5 space-y-2">
          <li>9-speed gearing for versatility across city streets and open roads</li>
          <li>Disc brakes for powerful stopping in all weather conditions</li>
          <li>Lightweight alloy frame for a smooth, agile ride</li>
          <li>Comfortable geometry designed for daily commutes and long rides</li>
          <li>Wide tire clearance for riding on varied terrain</li>
          <li>Internal cable routing for a clean, sleek look</li>
          <li>Wide handlebars for better control and stability</li>
          <li>Hydraulic disc brakes for reliable stopping power</li>
          <li>Customizable color options to match your style</li>
          <li>Low-maintenance drivetrain keeps things simple and efficient</li>
          <li>Perfect balance of speed, comfort, and control for urban riders</li>
        </ul>
      </div>
    </div>
  );
  
  const componentsContent = (
    <div>
      {id && getPrefabComponents(id).length > 0 ? (
        <div>
          <Text size="lg" fw={600} className="mb-4">{prefab?.name} Components</Text>
          <Table 
            striped 
            highlightOnHover 
            withTableBorder={false} 
            className="border-collapse rounded-lg overflow-hidden"
          >
            <Table.Thead className="bg-gray-50">
              <Table.Tr>
                <Table.Th className="font-semibold py-3 px-4 border-b border-gray-200 text-gray-600 text-sm">Component</Table.Th>
                <Table.Th className="font-semibold py-3 px-4 border-b border-gray-200 text-gray-600 text-sm">Manufacturer</Table.Th>
                <Table.Th className="font-semibold py-3 px-4 border-b border-gray-200 text-gray-600 text-sm">Model</Table.Th>
                <Table.Th className="font-semibold py-3 px-4 border-b border-gray-200 text-gray-600 text-sm">Production Time</Table.Th>
                <Table.Th className="font-semibold py-3 px-4 border-b border-gray-200 text-gray-600 text-sm">Country</Table.Th>
                <Table.Th className="font-semibold py-3 px-4 border-b border-gray-200 text-gray-600 text-sm">Price</Table.Th>
                {getPrefabComponents(id).some(c => c.productionTimeDays) && (
                  <Table.Th className="font-semibold py-3 px-4 border-b border-gray-200 text-gray-600 text-sm">Production Time (days)</Table.Th>
                )}
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {getPrefabComponents(id).map((component, index) => (
                <Table.Tr key={index} className="hover:bg-gray-50">
                  <Table.Td className="py-3 px-4 border-b border-gray-200 font-medium">{component.component}</Table.Td>
                  <Table.Td className="py-3 px-4 border-b border-gray-200">{component.manufacturer}</Table.Td>
                  <Table.Td className="py-3 px-4 border-b border-gray-200">{component.model}</Table.Td>
                  <Table.Td className="py-3 px-4 border-b border-gray-200">{component.productionTime}</Table.Td>
                  <Table.Td className="py-3 px-4 border-b border-gray-200">{component.country}</Table.Td>
                  <Table.Td className="py-3 px-4 border-b border-gray-200 font-medium">${component.price}</Table.Td>
                  {getPrefabComponents(id).some(c => c.productionTimeDays) && (
                    <Table.Td className="py-3 px-4 border-b border-gray-200">{component.productionTimeDays}</Table.Td>
                  )}
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Text fw={600} className="mb-2">Frame</Text>
            <ul className="list-disc pl-5 space-y-1">
              <li>Carbon fiber construction</li>
              <li>Internal cable routing</li>
              <li>Disc brake mounts</li>
            </ul>
          </div>
          <div>
            <Text fw={600} className="mb-2">Groupset</Text>
            <ul className="list-disc pl-5 space-y-1">
              <li>Shimano 11-speed</li>
              <li>Hydraulic disc brakes</li>
              <li>Electronic shifting</li>
            </ul>
          </div>
          <div>
            <Text fw={600} className="mb-2">Wheels</Text>
            <ul className="list-disc pl-5 space-y-1">
              <li>700c carbon rims</li>
              <li>Tubeless ready</li>
              <li>Thru-axle hubs</li>
            </ul>
          </div>
          <div>
            <Text fw={600} className="mb-2">Cockpit</Text>
            <ul className="list-disc pl-5 space-y-1">
              <li>Carbon handlebars</li>
              <li>Ergonomic grips</li>
              <li>Adjustable stem</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
  
  const shippingContent = (
    <div>
      <Text>Free shipping worldwide on all orders over $100. Standard delivery takes 3-5 business days.</Text>
      <Text className="mt-4">Expedited shipping options are available at checkout.</Text>
    </div>
  );
  
  const warrantyContent = (
    <div>
      <Text>All bikes come with a 2-year manufacturer's warranty covering defects in materials and workmanship.</Text>
      <Text className="mt-4">Extended warranty options available for purchase.</Text>
    </div>
  );
  
  const actionButtons = (
    <>
      <Button
        variant="filled"
        color="dark"
        className="w-full sm:w-auto"
        radius="xl"
        onClick={handleConfigurate}
      >
        Customize
      </Button>
      <Button
        variant="outline"
        color="dark"
        className="w-full sm:w-auto"
        radius="xl"
      >
        Contact Supplier
      </Button>
    </>
  );
  
  const featureBadges = (
    <div className="flex flex-wrap gap-2 my-3">
      {FEATURES.map(feature => (
        <ProductFeatureBadge key={feature.name} feature={feature.name} />
      ))}
    </div>
  );
  
  return (
    <ProductDetailLayout
      name={prefab.name}
      manufacturer={manufacturer?.name || prefab.manufacturer_id || 'Vulz'}
      manufacturerId={prefab.manufacturer_id}
      price={prefab.price}
      rating={4.5}
      reviews={392}
      image={prefab.image || '/placeholder-image.png'}
      specificationsContent={SPECS.map(spec => (
        <ProductSpecification key={spec.name} name={spec.name} value={spec.value} />
      ))}
      aboutContent={aboutContent}
      componentsContent={componentsContent}
      shippingContent={shippingContent}
      warrantyContent={warrantyContent}
      similarItems={
        <SimilarProducts 
          products={similarPrefabs} 
          users={users} 
          productType="prefab" 
        />
      }
    />
  );
};

export default PrefabDetailPage; 