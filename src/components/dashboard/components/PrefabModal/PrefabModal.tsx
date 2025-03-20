import { BikeTemplate } from "@shared/constants/bikeTemplates";
import { Badge, Group, Modal, Text, Title, Tabs, Button, Rating, Avatar } from "@mantine/core";
import { CONFIGURATOR_PATHS } from "@shared/constants/configuratorTypes";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconChevronLeft, IconShoppingCart, IconSettings, IconToolsKitchen, IconTruckDelivery, IconShield } from "@tabler/icons-react";

interface Props {
  prefab: BikeTemplate;
  onClose: () => void;
}

export const PrefabModal: React.FC<Props> = ({ prefab, onClose }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string | null>("about");
  const [expandedDetails, setExpandedDetails] = useState(false);

  // Simulated data - in a real implementation, these would come from the prefab object
  // or from API calls
  const rating = 4.5;
  const reviewCount = 392;
  const features = [
    { name: "Handlebar Display", value: true },
    { name: "Integrated Lighting", value: true },
    { name: "Hydraulic Brakes", value: true },
    { name: "700C", value: true },
    { name: "15Ah Battery", value: true },
  ];
  const specifications = [
    { name: "Manufactured in", value: "Taiwan" },
    { name: "Shimano Components", value: true },
    { name: "European Service Centre", value: true },
    { name: "Ships 75% Assembled", value: true },
  ];
  const leadTime = "90 Day";
  const minOrder = 100;

  const handleConfigurate = () => {
    const path = CONFIGURATOR_PATHS[prefab.type as keyof typeof CONFIGURATOR_PATHS] || '/';
    navigate(path, {
      state: { designParameters: prefab.parameters }
    });
  }

  const toggleDetails = () => {
    onClose();
    navigate(`/dashboard/marketplace/prefab/${prefab.id}`);
  }

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
            {/* Product image section */}
            <div className="w-full md:w-1/2">
              <img 
                src={prefab.image || '/placeholder-image.png'} 
                className="w-full h-auto rounded-md object-cover max-h-[400px]"
                alt={prefab.name}
              />
            </div>
            
            {/* Product details section */}
            <div className="w-full md:w-1/2 flex flex-col min-h-[400px] justify-between">
              <div>
                <div className="text-sm text-gray-500 mb-1">eBikes / Vulz</div>
                <Title order={2} className="mb-2">{prefab.name}</Title>
                
                <Group mb="sm" gap="xs">
                  <Rating value={rating} fractions={2} readOnly />
                  <Text size="sm" c="gray">
                    {rating} · based on <span className="underline">{reviewCount} reviews</span>
                  </Text>
                </Group>
                
                <div className="flex flex-wrap gap-2 my-4">
                  <Badge variant="outline" size="md" className="px-3 py-1">Handlebar Display</Badge>
                  <Badge variant="outline" size="md" className="px-3 py-1">Integrated Lighting</Badge>
                  <Badge variant="outline" size="md" className="px-3 py-1">Hydraulic Brakes</Badge>
                  <Badge variant="outline" size="md" className="px-3 py-1">700C</Badge>
                  <Badge variant="outline" size="md" className="px-3 py-1">15Ah Battery</Badge>
                </div>

                <Text size="xl" className="font-bold mb-6 mt-4">
                  ${prefab.price}
                </Text>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <Text>Produced by: vulz</Text>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <Text>Manufactured in Taiwan</Text>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <Text>{leadTime} Lead Time</Text>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <Text>MOQ: {minOrder}</Text>
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
                    onClick={handleConfigurate}
                    size="md"
                  >
                    Customize
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
        </div>
      </Modal>
    );
  }

  // Expanded detailed product view
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
              src={prefab.image || '/placeholder-image.png'} 
              className="w-full h-auto rounded-lg object-cover mb-4"
              alt={prefab.name}
            />
            <div className="flex gap-2 overflow-x-auto pb-2">
              {/* Thumbnail gallery - would be populated from actual images */}
              {[1, 2, 3].map((i) => (
                <img 
                  key={i}
                  src={prefab.image || '/placeholder-image.png'} 
                  className="w-24 h-24 rounded-lg object-cover cursor-pointer border border-gray-300"
                  alt={`${prefab.name} view ${i}`}
                />
              ))}
            </div>
          </div>

          {/* Right column with details */}
          <div className="w-full lg:w-1/2">
            <Title order={2} className="mb-2">{prefab.name}</Title>
            <Text size="sm" className="mb-4">Produced by: {prefab.manufacturer_id || 'Vulz'}</Text>
            
            <Group className="mb-4" gap="xs">
              <Rating value={rating} fractions={2} readOnly />
              <Text size="sm" c="gray" className="font-medium">
                {rating} Supplier Rating
              </Text>
            </Group>

            <Text size="xl" className="font-bold mb-6">
              ${prefab.price}
            </Text>

            {specifications.map((spec, i) => (
              <div key={i} className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <Text size="sm">{typeof spec.value === 'boolean' ? spec.name : `${spec.name} ${spec.value}`}</Text>
              </div>
            ))}

            <Group className="mt-6" gap="md">
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
            </Group>

            <div className="mt-8">
              <Tabs value={activeTab} onChange={setActiveTab}>
                <Tabs.List>
                  <Tabs.Tab value="about">About</Tabs.Tab>
                  <Tabs.Tab value="components">Components</Tabs.Tab>
                  <Tabs.Tab value="shipping">Shipping</Tabs.Tab>
                  <Tabs.Tab value="warranty">Warranty</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="about" pt="md">
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
                </Tabs.Panel>

                <Tabs.Panel value="components" pt="md">
                  <Text>Components information would go here.</Text>
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

        {/* Similar Items Section */}
        <div className="mt-12">
          <div className="flex justify-between items-center mb-4">
            <Title order={3}>Similar Items</Title>
            <Button 
              variant="subtle" 
              rightSection={<IconChevronLeft size={16} className="transform rotate-180" />}
            >
              See all
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* These would be populated with actual similar bikes */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="border rounded-lg overflow-hidden">
                <img 
                  src={prefab.image || '/placeholder-image.png'} 
                  className="w-full h-32 object-cover"
                  alt={`Similar bike ${i}`}
                />
                <div className="p-2">
                  <Text size="sm" className="font-medium truncate">
                    {i % 2 === 0 ? 'Road Bike' : 'eGravel Bike'}
                  </Text>
                  <Text size="xs" c="dimmed" className="mb-1">
                    {i % 2 === 0 ? 'Kestmove' : 'Golden Wheel'}
                  </Text>
                  <div className="flex justify-between items-center">
                    <Text size="sm" className="font-bold">
                      ${Math.floor(Math.random() * 1000) + 200}
                    </Text>
                    <Rating value={4 + Math.random()} size="xs" fractions={1} readOnly />
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
