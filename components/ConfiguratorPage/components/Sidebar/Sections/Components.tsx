import { Button, Table, Text, TextInput } from "@mantine/core";
import { IconComponents, IconSearch } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { PREFAB_COMPONENTS, PrefabComponent } from "@shared/components/Marketplace/data/prefabComponents";


interface ComponentsSectionProps {
  prefabId?: string;
}


const ComponentsSection = ({ prefabId }: ComponentsSectionProps) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedTab, setSelectedTab] = useState<'details' | 'browse'>('details');
  const [filteredComponents, setFilteredComponents] = useState<PrefabComponent[]>([]);

  useEffect(() => {
    let components = PREFAB_COMPONENTS[prefabId || ''];
    if (components) {
      components = components.filter(
        (component) => component.component.toLowerCase().includes(search.toLowerCase()) ||
        component.manufacturer.toLowerCase().includes(search.toLowerCase()) ||
        component.model.toLowerCase().includes(search.toLowerCase()) ||
        component.country.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredComponents(components);
  }, [prefabId, search]);
  

  return (
    <div className="w-[50vw] h-full bg-white rounded-xl overflow-y-scroll scrollbar-hide">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-6 py-4 px-3 border-b border-gray-300 mb-4">
          <div className="flex justify-between items-center w-full ">
            <Text className="flex items-center gap-2">
              <IconComponents size={16} />
              Components
            </Text>
            <button className="view-all-button" onClick={() => navigate('/dashboard/marketplace/components')}>
              See all
            </button>
          </div>
          <div className="flex justify-between items-center">
            <TextInput placeholder="Search" leftSection={<IconSearch size={20} />} radius="xl" size="md" onChange={(e) => setSearch(e.target.value)}/>
            <div className="flex items-center gap-2">
              <Button variant="filled" className={`rounded-full hover:bg-black hover:text-white ${selectedTab === 'details' ? 'bg-black text-white' : 'bg-gray-bg text-black'}`} onClick={() => setSelectedTab('details')}>
                Details
              </Button>
              <Button variant="filled" className={`rounded-full hover:bg-black hover:text-white ${selectedTab === 'browse' ? 'bg-black text-white' : 'bg-gray-bg text-black'}`} onClick={() => setSelectedTab('browse')}>
                Browse
              </Button>
            </div>
          </div>
        </div>
        {selectedTab === 'details' && <div className="flex flex-col gap-4 px-3">
          <Table>
            <thead>
              <tr className="h-10 border-b border-gray-300 text-gray-500">
                <th className="text-left w-1/4 font-light">Component</th>
                <th className="text-left w-1/6 font-light">Manufacturer</th>
                <th className="text-left w-1/6 font-light">Model</th>
                <th className="text-left w-1/6 font-light">Production Time</th>
                <th className="text-left w-1/6 font-light">Country</th>
                <th className="text-left w-1/6 font-light">Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredComponents.length === 0 ? (
                <tr>
                  <td colSpan={6} className="h-20 text-center text-2xl">No components found</td>
                </tr>
              ) : (
                filteredComponents.map((component) => (
                  <tr key={component.component} className="h-14 border-b border-gray-300">
                    <td>{component.component.charAt(0).toUpperCase() + component.component.slice(1)}</td>
                    <td>{component.manufacturer}</td>
                    <td>{component.model}</td>
                    <td>{component.productionTime}</td>
                    <td>{component.country}</td>
                    <td>${component.price}</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>}
        {selectedTab === 'browse' && <div className="flex flex-col gap-4 px-3">
          <div className="flex flex-col gap-2 w-full items-center justify-center">
            <Text className="text-2xl font-bold">Coming soon</Text>
            <Text className="text-gray-500">This feature is coming soon. Please check back later.</Text>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default ComponentsSection;
