import { getModelParameterValues, ParameterDefinition, ModelParameterValue } from "@frontend/services/modelService";
import { Switch, NumberInput, TextInput, Loader } from "@mantine/core";
import { useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import { useDebouncedValue } from '@mantine/hooks';

const Parameters = ({ modelId, onParameterChange }: { modelId: string | undefined, onParameterChange: (parameterValues: ModelParameterValue[]) => void }) => {
  const [parameterValues, setParameterValues] = useState<ParameterDefinition[]>([]);
  const [loading, setLoading] = useState(true);

  const handleParameterChange = () => {
    if (!modelId) return;
    const mappedValues = parameterValues.map((parameter) => {
      const value = debouncedValues.parameters[parameter.id];
      return {
        model_id: modelId as string,
        parameter_id: parameter.id,
        numeric_value: parameter.type === 'number' ? value : null,
        string_value: parameter.type === 'string' ? value : null,
        boolean_value: parameter.type === 'boolean' ? value : null,
      };
    });
    onParameterChange(mappedValues);
  };

  const form = useForm({
    initialValues: {
      parameters: parameterValues.reduce((acc, parameter) => {
        acc[parameter.id] = parameter.value;
        return acc;
      }, {} as Record<number, any>),
    },
  });

  const [debouncedValues] = useDebouncedValue(form.values, 200);

  useEffect(() => {
    if (!modelId) return;
    const fetchParameterValues = async () => {
      const parameterValues = await getModelParameterValues(modelId);
      form.setValues({
        parameters: parameterValues.reduce((acc, parameter) => {
          acc[parameter.id] = parameter.value;
          return acc;
        }, {} as Record<number, any>),
      });
      console.log("FRESH PARAMETER VALUES:", parameterValues);
      setParameterValues(parameterValues);
      setLoading(false);
    };
    fetchParameterValues();
  }, [modelId]);

  useEffect(() => {
    handleParameterChange();
  }, [debouncedValues]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {parameterValues.map((parameter: ParameterDefinition) => {
            if (parameter.type === "number") {
              return (
                <NumberInput
                  key={`parameter-${parameter.id}`}
                  label={parameter.name}
                  placeholder={parameter.name}
                  suffix={parameter.suffix}
                  {...form.getInputProps(`parameters.${parameter.id}`)}
                />
              );
            }
            if (parameter.type === "boolean") {
              return (
                <Switch
                  key={`parameter-${parameter.id}`}
                  label={parameter.name}
                  {...form.getInputProps(`parameters.${parameter.id}`, { type: 'checkbox' })}
                />
              );
            }
            if (parameter.type === "string") {
              return (
                <TextInput
                  key={`parameter-${parameter.id}`}
                  label={parameter.name}
                  placeholder={parameter.name}
                  {...form.getInputProps(`parameters.${parameter.id}`)}
                />
              );
            }
            return null;
          })}
        </>
      )}
    </>
  );
};

export default Parameters;