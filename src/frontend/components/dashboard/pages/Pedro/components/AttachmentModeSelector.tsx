import React from 'react';
import { Select, Text, Box } from '@mantine/core';

export type AttachmentMode = 'manual' | 'automatic' | 'mesh';

interface AttachmentModeSelectorProps {
  value: AttachmentMode;
  onChange: (mode: AttachmentMode) => void;
}

/**
 * A consistent component for selecting attachment modes
 */
const AttachmentModeSelector: React.FC<AttachmentModeSelectorProps> = ({
  value,
  onChange
}) => {
  return (
    <Box>
      <Text size="sm" fw={500} mb={4} c="dimmed" tt="uppercase">
        Attachment Mode
      </Text>
      <Select
        data={[
          { value: 'manual', label: 'Manual Placement' },
          { value: 'automatic', label: 'Automatic Detection' },
          { value: 'mesh', label: 'Mesh Selection' }
        ]}
        value={value}
        onChange={(newValue) => newValue && onChange(newValue as AttachmentMode)}
        style={{ marginBottom: 10 }}
      />
    </Box>
  );
};

export default AttachmentModeSelector; 