import { Title, Text, Overlay } from "@mantine/core";
import { SavedDesign } from "@frontend/types/SavedDesign";
import { useNavigate } from "react-router-dom";
import "./DesignCard.css"
import React from "react";
import { CONFIGURATOR_PATHS } from "@frontend/constants/configuratorTypes";

interface Props {
  design: SavedDesign;
}

export const DesignModal: React.FC<Props> = ({ design }) => {
  
  const navigate = useNavigate();

  const handleConfigurate = () => {
      const path = CONFIGURATOR_PATHS[design.configurator_type] || '/'
      navigate(path, {
        state: { designParameters: design.parameters }
      });
  }

  return (
    <div className={`design-modal`}>
      <Title>{design.name}</Title>
      <img src={design.thumbnail_url || '/placeholder-image.png'} className="design-modal-image"/>
      <button className="configurator-button" onClick={handleConfigurate}>Customize</button>
    </div>
   )
}
