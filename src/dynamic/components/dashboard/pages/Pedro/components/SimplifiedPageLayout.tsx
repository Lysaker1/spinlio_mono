import React from 'react';
import { Text } from '@mantine/core';

interface SimplifiedPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const SimplifiedPageLayout: React.FC<SimplifiedPageLayoutProps> = ({
  title,
  children,
}) => {
  return (
    <div className="page-container">
      <div className="page-header">
        <Text size="xl" fw={600}>{title}</Text>
      </div>

      <div className="page-content">
        {children}
      </div>
    </div>
  );
};

export default SimplifiedPageLayout; 