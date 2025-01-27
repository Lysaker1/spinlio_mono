import React, { useState } from 'react';
import { SimpleGrid } from '@mantine/core';
import PageLayout from '../../components/PageLayout/PageLayout';

const Uploads: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <PageLayout
      title="My Uploads"
      totalPages={10}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      onSearch={handleSearch}
    >
      <SimpleGrid
        cols={3}
        spacing="lg"
      >
      </SimpleGrid>
    </PageLayout>
  );
};

export default Uploads; 