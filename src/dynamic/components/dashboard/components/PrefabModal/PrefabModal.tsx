import { BikeTemplate } from "@dynamic/components/ConfiguratorPage/components/Sidebar/bikeTemplates";
import { Title, Text } from "@mantine/core";
import { CONFIGURATOR_PATHS } from "@shared/constants/configuratorTypes";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  prefab: BikeTemplate;
}

export const PrefabModal: React.FC<Props> = ({ prefab }) => {
  
  const navigate = useNavigate();

  const handleConfigurate = () => {
      const path = CONFIGURATOR_PATHS[prefab.type as keyof typeof CONFIGURATOR_PATHS] || '/';
      navigate(path, {
        state: { designParameters: prefab.parameters }
      });
  }

  return (
    <div className="prefab-modal">
      <Title>{prefab.name}</Title>
      <img src={prefab.image || '/placeholder-image.png'} className="prefab-modal-image"/>
      <button className="configurator-button" onClick={handleConfigurate}>Customize</button>
    </div>
   )
}
