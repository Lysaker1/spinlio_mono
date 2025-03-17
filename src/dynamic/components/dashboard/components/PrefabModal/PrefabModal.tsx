import { BikeTemplate } from "@dynamic/components/ConfiguratorPage/components/Sidebar/bikeTemplates";
import { Title, Text, Modal } from "@mantine/core";
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
    <Modal opened={true} onClose={onClose} withOverlay radius="lg" centered withCloseButton={false}>
        <Title>{prefab.name}</Title>
        <img src={prefab.image || '/placeholder-image.png'} className="my-2 rounded-lg"/>
        <button className="w-full bg-black text-white p-2 mt-2 rounded-full" onClick={handleConfigurate}>Customize</button>
    </Modal>
   )
}
