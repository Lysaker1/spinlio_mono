import { Text, TextInput } from "@mantine/core";
import { IconBike, IconSearch } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { BikeTemplate, bikeTemplates } from "../bikeTemplates";
import { CONFIGURATOR_PATHS, ConfiguratorType } from "@shared/constants/configuratorTypes";
import { ISessionApi, IViewportApi } from "@shapediver/viewer";
import { useState } from "react";


interface PrefabSectionProps {
  onTemplateSelect: (template: BikeTemplate) => void;
  configuratorType: ConfiguratorType;
  session: ISessionApi | null;
  setSession: (session: ISessionApi | null) => void;
  viewport: IViewportApi | null;
  setViewport: (viewport: IViewportApi | null) => void;
}

const PrefabSection = ({ onTemplateSelect, configuratorType, session, setSession, viewport, setViewport }: PrefabSectionProps) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleTemplateSelect = (template: BikeTemplate, e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (template.type !== configuratorType) {
      // First, cleanup existing session
      if (session) {
        session.close();
        setSession(null);
      }
      if (viewport) {
        viewport.close();
        setViewport(null);
      }
      
      // Then navigate based on template type
      const path = CONFIGURATOR_PATHS[template.type as keyof typeof CONFIGURATOR_PATHS] || '/';
      navigate(path, {
        state: { designParameters: template.parameters }
      });
    } else {
      onTemplateSelect(template);
    }
  };

  return (
    <div className="w-80 h-full bg-white rounded-xl overflow-y-scroll scrollbar-hide">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center py-4 px-3 bg-white bg-opacity-50 w-full border-b border-gray-300">
          <Text className="flex items-center gap-2">
            <IconBike size={16} />
            Prefabs
          </Text>
          <button className="view-all-button" onClick={() => navigate('/dashboard/marketplace/prefabs')}>
            See all
          </button>
        </div>
        <div className="flex flex-col gap-6 p-4">
          <div>
            <TextInput placeholder="Search" leftSection={<IconSearch size={20} />} radius="xl" size="md" onChange={(e) => setSearch(e.target.value)}/>
          </div>
          <div className="grid grid-cols-2 gap-1">
            {bikeTemplates.filter((template) => template.name.toLowerCase().includes(search.toLowerCase())).map((template) => {
               const isSelected = CONFIGURATOR_PATHS[template.type as keyof typeof CONFIGURATOR_PATHS] === window.location.pathname;
               return (
               <div
                key={template.name}
                className={`w-full aspect-square p-2 bg-gray-bg rounded-lg cursor-pointer flex flex-col items-center justify-center border-2 ${isSelected ? 'border-black' : 'border-gray-bg'}`}
                onClick={(e) => handleTemplateSelect(template, e)}
              >
                <img 
                  src={template.image} 
                  alt={template.name} 
                  className="w-3/4 h-3/4 object-contain rounded-md" 
                />
                <Text className="text-center mt-2 text-sm overflow-ellipsis overflow-hidden whitespace-nowrap">{template.name}</Text>
              </div>
            )})}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrefabSection;
