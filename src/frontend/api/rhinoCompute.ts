export interface RhinoComputePayload {
  definitionId: string;
  parameters: Record<string, any>;
}

export const callRhinoCompute = async (payload: RhinoComputePayload): Promise<ArrayBuffer> => {
  const response = await fetch(`${process.env.REACT_APP_RHINO_COMPUTE_URL}/grasshopper`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'RhinoComputeKey': process.env.REACT_APP_RHINO_COMPUTE_KEY!
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Rhino Compute Error: ${error}`);
  }

  return response.arrayBuffer();
}; 