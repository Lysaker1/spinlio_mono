import { getModelParameterValues, ModelMetadata, ParameterDefinition } from "@dynamic/services/modelService";
import { Loader, Text, Title, Modal, Group, Badge, Button, Rating, Avatar, Tabs } from "@mantine/core";
import React, { useState, useEffect } from "react";
import fallback from "../MarketplaceCard/fallback.jpg";
import { IconChevronLeft, IconShoppingCart, IconToolsKitchen, IconTruckDelivery, IconShield } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

interface Props {
  component: ModelMetadata;
  onClose: () => void;
}

export const ComponentModal: React.FC<Props> = ({ component, onClose }) => {
  const [parameterValues, setParameterValues] = useState<ParameterDefinition[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [expandedDetails, setExpandedDetails] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>("about");
  const navigate = useNavigate();
  
  // Simulated data - in a real implementation, these would come from API or better property structure
  const rating = 4.2;
  const reviewCount = 184;
  const features = parameterValues
    .filter(param => param.type === "boolean" && param.value === "true")
    .slice(0, 5)
    .map(param => ({ name: param.name, value: true }));

  useEffect(() => {
    const fetchValues = async () => {
      if (!component.id) return;
      setLoading(true);
      const values = await getModelParameterValues(component.id);
      setParameterValues(values);
      setLoading(false);
    };
    fetchValues();
  }, [component.id]);

  const toggleDetails = () => {
    onClose();
    navigate(`/dashboard/marketplace/component/${component.id}`);
  };

  // Quick preview modal
  if (!expandedDetails) {
    return (
      <Modal
        opened={true}
        onClose={onClose}
        withOverlay
        radius="lg"
        centered
        withCloseButton={false}
        size="xl"
      >
        <div className="p-6">
          <Group mb="xs" className="flex items-center">
            <Button 
              component="a" 
              href="#" 
              variant="subtle" 
              color="gray"
              leftSection={<IconChevronLeft size={16} />}
              onClick={(e) => {
                e.preventDefault();
                onClose();
              }}
              className="pl-0"
            >
              Back
            </Button>
          </Group>

          <div className="flex flex-col items-start md:flex-row gap-8 mt-4">
            {/* Component image section */}
            <div className="w-full md:w-1/2">
              <img
                src={component.thumbnail_url || fallback}
                className="w-full h-auto rounded-md object-cover max-h-[400px]"
                alt={component.name}
              />
            </div>

            {/* Component details section */}
            <div className="w-full md:w-1/2 flex flex-col min-h-[400px] justify-between">
              <div>
                <div className="text-sm text-gray-500 mb-1">Components / {component.manufacturer || 'Manufacturer'}</div>
                <Title order={2} className="mb-2">{component.name}</Title>

                {!loading && (
                  <>
                    <Group mb="sm" gap="xs">
                      <Rating value={rating} fractions={2} readOnly />
                      <Text size="sm" c="gray">
                        {rating} · based on <span className="underline">{reviewCount} reviews</span>
                      </Text>
                    </Group>

                    <div className="flex flex-wrap gap-2 my-4">
                      {features.slice(0, 5).map((feature, index) => (
                        <Badge key={index} variant="outline" size="md" className="px-3 py-1">
                          {feature.name}
                        </Badge>
                      ))}
                    </div>
                  </>
                )}

                <Text size="xl" className="font-bold mb-6 mt-4">
                  {component.price_on_request ? "Price on request" : `$${component.price}`}
                </Text>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <Text>Produced by: {component.manufacturer || 'Manufacturer'}</Text>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <Text>
                      Lead Time: {component.lead_time_on_request
                        ? "On request"
                        : `${component.lead_time} days`}
                    </Text>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <Text>
                      MOQ: {component.moq_on_request
                        ? "On request"
                        : component.minimum_order_quantity}
                    </Text>
                  </div>
                </div>
              </div>

              <div className="w-full mt-8">
                <Group gap="md" className="w-full flex">
                  <Button
                    variant="filled"
                    color="dark"
                    className="flex-1"
                    radius="xl"
                    size="md"
                  >
                    Buy Now
                  </Button>

                  <Button
                    variant="outline"
                    color="dark"
                    className="flex-1"
                    radius="xl"
                    onClick={toggleDetails}
                    size="md"
                  >
                    View Details
                  </Button>
                </Group>
              </div>
            </div>
          </div>

          {loading && (
            <div className="flex justify-center p-4">
              <Loader />
            </div>
          )}
        </div>
      </Modal>
    );
  }

  // Expanded detailed component view
  return (
    <Modal
      opened={true}
      onClose={onClose}
      withOverlay
      fullScreen
      withCloseButton={false}
    >
      <div className="p-4 max-w-6xl mx-auto">
        <div className="mb-6">
          <Button
            variant="subtle"
            leftSection={<IconChevronLeft size={18} />}
            onClick={toggleDetails}
            className="pl-0"
          >
            Back
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Left column with images */}
          <div className="w-full lg:w-1/2">
            <img
              src={component.thumbnail_url || fallback}
              className="w-full h-auto rounded-lg object-cover mb-4"
              alt={component.name}
            />
            {/* If we had multiple component images we would show them here */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              <img
                src={component.thumbnail_url || fallback}
                className="w-24 h-24 rounded-lg object-cover cursor-pointer border border-gray-300"
                alt={component.name}
              />
            </div>
          </div>

          {/* Right column with details */}
          <div className="w-full lg:w-1/2">
            <Title order={2} className="mb-2">{component.name}</Title>
            <Text size="sm" className="mb-4">
              Produced by: {component.manufacturer || 'Manufacturer'}
            </Text>

            <Group className="mb-4" gap="xs">
              <Rating value={rating} fractions={2} readOnly />
              <Text size="sm" c="gray" className="font-medium">
                {rating} Supplier Rating
              </Text>
            </Group>

            <Text size="xl" className="font-bold mb-6">
              {component.price_on_request ? "Price on request" : `$${component.price}`}
            </Text>

            {!loading ? (
              <>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <Text size="sm">
                    Lead Time: {component.lead_time_on_request
                      ? "On Request"
                      : `${component.lead_time} days`}
                  </Text>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <Text size="sm">
                    MOQ: {component.moq_on_request
                      ? "On Request"
                      : component.minimum_order_quantity}
                  </Text>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <Text size="sm">
                    Payment Terms: {component.payment_terms_on_request
                      ? "On Request"
                      : component.payment_terms}
                  </Text>
                </div>
              </>
            ) : (
              <Loader />
            )}

            <Group className="mt-6" gap="md">
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
            </Group>

            <div className="mt-8">
              <Tabs value={activeTab} onChange={setActiveTab}>
                <Tabs.List>
                  <Tabs.Tab value="about">About</Tabs.Tab>
                  <Tabs.Tab value="specifications">Specifications</Tabs.Tab>
                  <Tabs.Tab value="shipping">Shipping</Tabs.Tab>
                  <Tabs.Tab value="warranty">Warranty</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="about" pt="md">
                  <Text className="mb-4">
                    Component details and description would go here.
                  </Text>
                </Tabs.Panel>

                <Tabs.Panel value="specifications" pt="md">
                  {!loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {parameterValues.map(parameter => (
                        <div key={parameter.id} className="flex gap-2">
                          <Text size="sm" className="font-semibold">
                            {parameter.name}:
                          </Text>
                          <Text size="sm">
                            {
                              parameter.type === "boolean" ? (parameter.value === "true" ? "Yes" : "No") :
                              parameter.type === "number" ? parameter.value ? (`${parameter.value}`) : "N/A" :
                              parameter.value || "N/A"
                            }
                          </Text>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Loader />
                  )}
                </Tabs.Panel>

                <Tabs.Panel value="shipping" pt="md">
                  <Text>Shipping information would go here.</Text>
                </Tabs.Panel>

                <Tabs.Panel value="warranty" pt="md">
                  <Text>Warranty information would go here.</Text>
                </Tabs.Panel>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Similar Components Section */}
        <div className="mt-12">
          <div className="flex justify-between items-center mb-4">
            <Title order={3}>Similar Components</Title>
            <Button
              variant="subtle"
              rightSection={<IconChevronLeft size={16} className="transform rotate-180" />}
            >
              See all
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* These would be populated with actual similar components */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="border rounded-lg overflow-hidden">
                <img
                  src={fallback}
                  className="w-full h-32 object-cover"
                  alt={`Similar component ${i}`}
                />
                <div className="p-2">
                  <Text size="sm" className="font-medium truncate">
                    {i % 2 === 0 ? 'Handlebar' : 'Frame Component'}
                  </Text>
                  <Text size="xs" c="dimmed" className="mb-1">
                    {i % 2 === 0 ? 'Premium Quality' : 'Standard'}
                  </Text>
                  <div className="flex justify-between items-center">
                    <Text size="sm" className="font-bold">
                      ${Math.floor(Math.random() * 200) + 50}
                    </Text>
                    <Rating value={4 + Math.random() * 0.9} size="xs" fractions={1} readOnly />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};
