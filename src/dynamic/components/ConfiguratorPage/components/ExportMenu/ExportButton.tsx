import React from 'react';
import { Button } from '@mantine/core';

interface ExportButtonProps {
  onClick: () => void;
}

const ExportButton: React.FC<ExportButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      Export
    </Button>
  );
};

export default ExportButton;