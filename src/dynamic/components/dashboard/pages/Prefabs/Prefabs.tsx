import React, { useEffect, useState } from 'react';
import { Badge, Card, Image, SimpleGrid, Text, Button, Overlay } from '@mantine/core';
import PageLayout from '../../components/PageLayout/PageLayout';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { IconStarFilled } from '@tabler/icons-react';
import { BikeTemplate, bikeTemplates } from '@dynamic/components/ConfiguratorPage/components/Sidebar/bikeTemplates';
import "./Prefabs.css"
import { PrefabModal } from '../../components/PrefabModal/PrefabModal';

const COLUMNS = 4;
const ROWS = 3;
const Prefabs: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const [filteredPrefabs, setFilteredPrefabs] = useState<BikeTemplate[]>(bikeTemplates);
  const navigate = useNavigate();
  const [selectedPrefab, setSelectedPrefab] = useState<BikeTemplate | null>(null);

  useEffect(() => {
    const itemsPerPage = ROWS * COLUMNS;
    const maxPage = Math.ceil(filteredPrefabs.length / itemsPerPage);

    if (currentPage > maxPage) {
      setCurrentPage(maxPage || 1);
    } else if (currentPage < 1) {
      setCurrentPage(1);
    }
  }, [searchQuery]);

  useEffect(() => {
    const itemsPerPage = ROWS * COLUMNS;
    const filteredPrefabs = bikeTemplates.filter(prefab => 
      prefab.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    setFilteredPrefabs(filteredPrefabs.slice(startIndex, endIndex));
  }, [currentPage, searchQuery, bikeTemplates]);

  const handleCardClick = (prefab: BikeTemplate) => {
    setSelectedPrefab(prefab);
  };

  const handleNavigateToConfigurator = () => {
    if (selectedPrefab) {
      navigate(`/configurator/${selectedPrefab.id}`);
    }
  };

  return (
    <PageLayout
      title="Prefabs"
      totalPages={Math.ceil(
        filteredPrefabs.length / (ROWS * COLUMNS)
      )}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      onSearch={handleSearch}
    >
      {selectedPrefab && (
        <>
          <Overlay className='prefabs-overlay' onClick={()=>setSelectedPrefab(null)}/>
          <PrefabModal prefab={selectedPrefab} />
        </>
      )}
      <SimpleGrid
        cols={4}
        spacing="lg"
      >
        {filteredPrefabs.map((prefab) => (
          <Card 
            key={prefab.id} 
            shadow="sm" 
            padding="lg" 
            radius="md" 
            withBorder 
            onClick={() => handleCardClick(prefab)}
            className={`prefab-card`}
          >
            <Card.Section>
              <div style={{ position: 'relative' }}>
                <Image
                  src={prefab.image || '/placeholder-image.png'} 
                  height={160}
                  alt={prefab.name}
                />
              {/*   <Badge 
                  leftSection={<IconStarFilled size="12" />}
                  variant="filled"
                  color="var(--mantine-color-gray-7)"
                  style={{
                    padding: '0px 5px',
                    position: 'absolute',
                    top: 8,
                    right: 8
                  }}>
                  3,9
                </Badge> */}
              </div>
            </Card.Section>
              <Text fw={500} size="lg" mt="md">
                {prefab.name}
              </Text>
          </Card>
        ))}
      </SimpleGrid>
    </PageLayout>
  );
};

export default Prefabs; 