import { ModelMetadata } from "@dynamic/services/modelService";
import { Title } from "@mantine/core";
import React from "react";
import fallback from "../MarketplaceCard/fallback.jpg"

interface Props {
  component: ModelMetadata;
  onClose: () => void;
}

  export const ComponentModal: React.FC<Props> = ({ component, onClose }) => {  
  return (
    <div className="w-screen h-screen absolute top-0 left-0 bg-black/50 z-[102]" onClick={onClose}>
      <div className="z-[103] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg bg-white max-w-80vw flex flex-col">
      <Title>{component.name}</Title>
        <img src={component.thumbnail_url || fallback} className="prefab-modal-image"/>
        <button className="w-full bg-black text-white p-2 mt-2 rounded-full">Customize</button>
      </div>
    </div>
   )
}
