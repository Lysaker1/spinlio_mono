import { getModels, ModelMetadata } from '@frontend/services/modelService';
import { Loader, SimpleGrid } from '@mantine/core';
import { ProfileStorageService } from '@frontend/services/profileStorage';
import { Profile } from '@frontend/types/Profile';
import React, { useEffect, useState } from 'react';
import { ComponentModal } from '../../components/ComponentModal/ComponentModal';
import MarketplaceCard from '../../components/MarketplaceCard/MarketplaceCard';
import PageLayout from '../../components/PageLayout/PageLayout';

const COLUMNS = 4;
const ROWS = 3;
const Components: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [components, setComponents] = useState<ModelMetadata[]>([]);
  const [users, setUsers] = useState<Map<string, Profile>>(new Map());
  const [loading, setLoading] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const [filteredComponents, setFilteredComponents] = useState<ModelMetadata[]>([]);

  const [selectedPrefab, setSelectedPrefab] = useState<ModelMetadata | null>(null);

  useEffect(()=>{
    
    const fetchComponents = async () => {
      setLoading(true);
      const components = await getModels();
      setComponents(components);
      console.log("length", components.length)
      setLoading(false);
    }
    fetchComponents();
  }, []);

  const fetchUser = async (userId: string): Promise<Profile | null> => {
    if (!userId) return null;
    if (users.has(userId)) return users.get(userId) || null;
    try {
      const user = await ProfileStorageService.getProfile(userId);
      setUsers(prev => new Map(prev.set(userId, user)));
      return user;
    } catch (error) {
      console.error(`Failed to fetch user ${userId}:`, error);
      return null;
    }
  };
  
  useEffect(() => {
    if (loading) return;
  
    const uniqueUserIds = Array.from(new Set(components.map(c => c.user_id).filter((id): id is string => Boolean(id))));
    uniqueUserIds.forEach(async (userId) => {
      const user = await fetchUser(userId);
      if (user) {
        setUsers(prev => new Map(prev.set(userId, user)));
      }
    });
  }, [components]);
  

  useEffect(() => {
    const itemsPerPage = ROWS * COLUMNS;
    const maxPage = Math.ceil(filteredComponents.length / itemsPerPage);

    if (currentPage > maxPage) {
      setCurrentPage(maxPage || 1);
    } else if (currentPage < 1) {
      setCurrentPage(1);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (loading) return;
    const itemsPerPage = ROWS * COLUMNS;
    const filteredComponents = components.filter(component => 
      component.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    setFilteredComponents(filteredComponents.slice(startIndex, endIndex));
  }, [currentPage, searchQuery, components]);

    const handleCardClick = (component: ModelMetadata) => {
      setSelectedPrefab(component);
    };

  return (
    <PageLayout
      title="All Components"
      totalPages={Math.ceil(
        components.filter(component => 
          component.name.toLowerCase().includes(searchQuery.toLowerCase())
        ).length / (ROWS * COLUMNS)
      )}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      onSearch={handleSearch}
    >
      {selectedPrefab && (
        <>
          <ComponentModal component={selectedPrefab} onClose={()=>setSelectedPrefab(null)}/>
        </>
      )}

      {loading ? (
        <Loader />
      ) : (
        <SimpleGrid
          cols={4}
          spacing="lg"
      >
        {filteredComponents.map((component) => {
          const user = users.get(component.user_id || '');
          console.log("user", user)
          return (
            <MarketplaceCard key={component.id} image={component.thumbnail_url} user={user} name={component.name} price={component.price || 0} onClick={()=>handleCardClick(component)}/>
          );
        })}
      </SimpleGrid>
      )}
    </PageLayout>
  );
};

export default Components; 