import React from 'react';
import { Text, Box } from '@mantine/core';

export const TestComponent: React.FC = () => {
  return (
    <Box p="md">
      <Text size="xl" fw={700}>Test Component</Text>
      <Text>If you can see this, React and Mantine are working correctly</Text>
    </Box>
  );
};

export default TestComponent; 