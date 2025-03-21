import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Loader, Text, Table } from '@mantine/core';
import { getModelParameterValues, getModels, ModelMetadata, ParameterDefinition } from '@shared/services/modelService';
import { ProfileStorageService } from '@shared/services/profileStorage';
import { Profile } from '@shared/types/Profile';
import ProductDetailLayout from './components/ProductDetailLayout';
import SimilarProducts from './components/SimilarProducts';
import ProductFeatureBadge from './components/ProductFeatureBadge';

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

        // Find similar components
        const similar = components
          .filter(c => c.id !== id && 
            Math.abs((c.price || 0) - (foundComponent.price || 0)) < 50
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
    .map(param => ({ name: param.name, value: true }));

  // Create specifications from component metadata
  const specifications = [
    ...(component.lead_time ? [{ name: "Lead Time", value: `${component.lead_time} days` }] : []),
    ...(component.minimum_order_quantity ? [{ name: "MOQ", value: component.minimum_order_quantity.toString() }] : []),
    ...(component.payment_terms ? [{ name: "Payment Terms", value: component.payment_terms }] : []),
  ];

  const aboutContent = (
    <div>
      <Text className="mb-4">
        {component.description || "This component doesn't have a description provided by the manufacturer."}
      </Text>
      {component.material && (
        <Text className="mb-2">
          <span className="font-semibold">Material:</span> {component.material}
        </Text>
      )}
    </div>
  );

  const specificationsContent = (
    <div className="p-2">
      <div className="bg-white rounded-lg overflow-hidden">
        <Table 
          striped 
          highlightOnHover 
          withTableBorder={false} 
          className="border-collapse rounded-lg overflow-hidden"
        >
          <Table.Thead className="bg-gray-50">
            <Table.Tr>
              <Table.Th className="font-semibold py-3 px-4 border-b border-gray-200 text-gray-600 text-sm">Parameter</Table.Th>
              <Table.Th className="font-semibold py-3 px-4 border-b border-gray-200 text-gray-600 text-sm">Value</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {parameterValues.map(parameter => (
              <Table.Tr key={parameter.id} className="hover:bg-gray-50">
                <Table.Td className="py-3 px-4 border-b border-gray-200 font-medium">
                  {parameter.name}
                </Table.Td>
                <Table.Td className="py-3 px-4 border-b border-gray-200">
                  {
                    parameter.type === "boolean" ? (parameter.value === "true" ? "Yes" : "No") :
                    parameter.value || "N/A"
                  }
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>
    </div>
  );

  const shippingContent = (
    <div>
      <Text>Standard shipping is available worldwide. Please contact the manufacturer for specific shipping details and costs.</Text>
    </div>
  );

  const warrantyContent = (
    <div>
      <Text>All components come with a standard warranty against manufacturing defects. Please contact the manufacturer for details on warranty coverage and duration.</Text>
    </div>
  );

  const actionButtons = (
    <>
      <Button
        variant="filled"
        color="dark"
        className="w-full sm:w-auto"
        radius="xl"
      >
        Buy Now
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
      {features.slice(0, 5).map(feature => (
        <ProductFeatureBadge key={feature.name} feature={feature.name} />
      ))}
    </div>
  );

  return (
    <ProductDetailLayout
      name={component.name}
      manufacturer={manufacturer?.name || component.manufacturer || 'Unknown Manufacturer'}
      manufacturerId={component.user_id}
      price={component.price_on_request ? null : component.price || null}
      priceOnRequest={component.price_on_request}
      rating={4.2}
      reviews={184}
      image={component.thumbnail_url || '/placeholder-image.png'}
      specificationsContent={specificationsContent}
      componentsContent={undefined}
      reviewsContent={undefined}
      description={component.description || undefined}
      features={features.slice(0, 5).map(feature => feature.name)}
    />
  );
};

export default ComponentDetailPage; 