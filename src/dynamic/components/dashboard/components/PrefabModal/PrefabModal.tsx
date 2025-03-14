import { BikeTemplate } from "@dynamic/components/ConfiguratorPage/components/Sidebar/bikeTemplates";
import { Title, Text } from "@mantine/core";
import { CONFIGURATOR_PATHS } from "@shared/constants/configuratorTypes";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  prefab: BikeTemplate;
  onClose: () => void;
}

export const PrefabModal: React.FC<Props> = ({ prefab, onClose }) => {
  
  const navigate = useNavigate();

  const handleConfigurate = () => {
      const path = CONFIGURATOR_PATHS[prefab.type as keyof typeof CONFIGURATOR_PATHS] || '/';
      navigate(path, {
        state: { designParameters: prefab.parameters }
      });
  }

  return (
    <div className="w-screen h-screen absolute top-0 left-0 bg-black/50 z-[102]" onClick={onClose}>
      <div className="z-[103] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg bg-white max-w-80vw flex flex-col">
        <Title>{prefab.name}</Title>
        <img src={prefab.image || '/placeholder-image.png'} className="prefab-modal-image"/>
        <button className="w-full bg-black text-white p-2 mt-2 rounded-full" onClick={handleConfigurate}>Customize</button>
      </div>
    </div>
   )
}
