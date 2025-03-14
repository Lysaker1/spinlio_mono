import { BikeTemplate, bikeTemplates } from '@dynamic/components/ConfiguratorPage/components/Sidebar/bikeTemplates';
import { Overlay, SimpleGrid } from '@mantine/core';
import { Profile } from '@shared/types/Profile';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MarketplaceCard from '../../components/MarketplaceCard/MarketplaceCard';
import PageLayout from '../../components/PageLayout/PageLayout';
import { PrefabModal } from '../../components/PrefabModal/PrefabModal';
import { ProfileStorageService } from '@shared/services/profileStorage';

const COLUMNS = 4;
const ROWS = 3;
const Prefabs: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState<Map<string, Profile>>(new Map());

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

  useEffect(()=>{
    const uniqueUserIds = new Set<string>();
    bikeTemplates.forEach((prefab) => {
      if (prefab.manufacturer_id) {
        uniqueUserIds.add(prefab.manufacturer_id);
      }
    });
    
    uniqueUserIds.forEach(async (userId) => {
      const user = await ProfileStorageService.getProfile(userId);

      if (user) {
        setUsers(prev => new Map(prev.set(userId, user)));
      }
    });
  }, []);

  return (
    <PageLayout
      title="All Prefabs"
      totalPages={Math.ceil(
        filteredPrefabs.length / (ROWS * COLUMNS)
      )}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      onSearch={handleSearch}
    >
      {selectedPrefab && (
        <>
          <PrefabModal prefab={selectedPrefab} onClose={()=>setSelectedPrefab(null)}/>
        </>
      )}
      <SimpleGrid
        cols={4}
        spacing="lg"
      >
        {filteredPrefabs.map((prefab) => {
          const user = users.get(prefab.manufacturer_id || '');
          return (
            <MarketplaceCard key={prefab.id} image={prefab.image} user={user} name={prefab.name} price={prefab.price} onClick={()=>handleCardClick(prefab)}/>
          );
        })}
      </SimpleGrid>
    </PageLayout>
  );
};

export default Prefabs; 