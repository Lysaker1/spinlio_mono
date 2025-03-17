import { getModelParameterValues, ModelMetadata, ParameterDefinition } from "@dynamic/services/modelService";
import { Loader, Text, Title, Modal } from "@mantine/core";
import React, { useState, useEffect } from "react";
import fallback from "../MarketplaceCard/fallback.jpg"

interface Props {
  component: ModelMetadata;
  onClose: () => void;
}

export const ComponentModal: React.FC<Props> = ({ component, onClose }) => {
  const [parameterValues, setParameterValues] = useState<ParameterDefinition[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchValues = async () => {
      if (!component.id) return;
      setLoading(true);
      const values = await getModelParameterValues(component.id);
      setParameterValues(values);
      setLoading(false);
      console.log(values);
    };
    fetchValues();
  }, [component.id]);

  return (
    <Modal opened={true} onClose={onClose} withOverlay size="80vw" radius="lg" centered withCloseButton={false}>
      <div className="flex w-full gap-4 mb-4">
        <div className="w-1/2">
          <Title>{component.name}</Title>
        </div>
        <div className="w-1/2">
          <Title>Details</Title>
        </div>
      </div>
      <div className="flex w-full gap-4">
        <div className="flex flex-col w-1/2 gap-2">
          <img src={component.thumbnail_url || fallback} className="prefab-modal-image"/>
          <button className="w-full bg-black text-white p-2 mt-2 rounded-full">Buy Now</button>
        </div>
        <div className="flex flex-col w-1/2 gap-1">
          {loading ? (
            <Loader />
          ) : (
            <>
              <div className="flex gap-1">
                <Text>
                  Price:
                </Text>
                <Text>
                  {component.price_on_request ? "On Request" : `$${component.price}`}
                </Text>
              </div>
              <div className="flex gap-1">
                <Text>
                  Minimum Order Quantity:
                </Text>
                <Text>
                  {component.moq_on_request ? "On Request" : `${component.minimum_order_quantity}`}
                </Text>
              </div>
              <div className="flex gap-1">
                <Text>
                  Lead Time:
                </Text>
                <Text>
                  {component.lead_time_on_request ? "On Request" : `${component.lead_time} days`}
                </Text>
              </div>
              <div className="flex gap-1">
                <Text>
                  Payment Terms:
                </Text>
                <Text>
                  {component.payment_terms_on_request ? "On Request" : `${component.payment_terms}`}
                </Text>
              </div>
              {parameterValues.map(parameter => (
                <div className="flex gap-1">
                  <Text>{parameter.name}:</Text>
                  <Text>
                    {
                      parameter.type === "boolean" ? (parameter.value ? "Yes" : "No") :
                      parameter.type === "number" ? parameter.value ? (`${parameter.value} ${parameter.suffix}`) : "N/A" :
                      parameter.value || "N/A"
                    }
                  </Text>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </Modal>
  );
};
