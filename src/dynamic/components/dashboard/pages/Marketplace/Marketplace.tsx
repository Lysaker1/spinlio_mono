import React, { useEffect, useState } from 'react';
import { Card, Image, SimpleGrid, Text, Button, Overlay, Loader, Group, Avatar } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { IconArrowRight } from '@tabler/icons-react';
import { BikeTemplate, bikeTemplates } from '@dynamic/components/ConfiguratorPage/components/Sidebar/bikeTemplates';
import { PrefabModal } from '../../components/PrefabModal/PrefabModal';
import { ComponentModal } from '../../components/ComponentModal/ComponentModal';
import { getModels, ModelMetadata } from '@dynamic/services/modelService';
import { ProfileStorageService } from '@shared/services/profileStorage';
import { Profile } from '@shared/types/Profile';
import MarketplaceCard from '../../components/MarketplaceCard/MarketplaceCard';

const Marketplace: React.FC = () => {
  const prefabs = bikeTemplates.slice(0, 4);
  const [components, setComponents] = useState<ModelMetadata[]>([]);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Map<string, Profile>>(new Map());
  const [selectedPrefab, setSelectedPrefab] = useState<BikeTemplate | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<ModelMetadata | null>(null);

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
    const fetchComponents = async () => {
      setLoading(true);
      try {
        const fetchedComponents = await getModels();
        setComponents(fetchedComponents.slice(0, 4));
      } catch (error) {
        console.error('Failed to load components:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchComponents();
  }, []);

  useEffect(() => {
    const uniqueComponentUserIds = Array.from(new Set(components.map(c => c.user_id).filter((id): id is string => Boolean(id))));
    const uniquePrefabManufacturerIds = Array.from(new Set(prefabs.map(p => p.manufacturer_id).filter((id): id is string => Boolean(id))));

    const uniqueUserIds = Array.from(new Set([...uniqueComponentUserIds, ...uniquePrefabManufacturerIds]));

    uniqueUserIds.forEach(async (userId) => {
      console.log('fetching user', userId);
      const user = await fetchUser(userId);
      console.log('user', user);
      if (user) {
        setUsers(prev => new Map(prev.set(userId, user)));
      }
    });
  }, [components]);

  const navigate = useNavigate();

  return (
    <div className='bg-white p-6 min-h-[calc(100vh-60px)]'>
      <div className='pb-7 pt-1 text-xl flex justify-between items-center'>
        <h1 className='text-xl font-semibold'>Complete Bikes</h1>
        <Button 
          variant='transparent' 
          color='black' 
          className='text-sm'
          rightSection={<IconArrowRight size={16}/>}
          onClick={() => navigate('/dashboard/marketplace/prefabs')}
        >
          View all
        </Button>
      </div>
      {selectedPrefab && (
        <>
          <PrefabModal prefab={selectedPrefab} onClose={() => setSelectedPrefab(null)} />
        </>
      )}
      {selectedComponent && (
        <>
          <ComponentModal component={selectedComponent} onClose={() => setSelectedComponent(null)} />
        </>
      )}
      <SimpleGrid cols={4} spacing='lg'>
        {prefabs.map(prefab => {
          const user = users.get(prefab.manufacturer_id || '');
          return (
            <MarketplaceCard key={prefab.id} image={prefab.image} user={user} name={prefab.name} price={prefab.price} onClick={()=>setSelectedPrefab(prefab)}/>
          );
        })}
      </SimpleGrid>
      <div className='pb-7 pt-4 text-xl flex justify-between items-center'>
        <h1 className='text-xl font-semibold'>Components</h1>
        <Button variant='transparent' color='black' className='text-sm' rightSection={<IconArrowRight size={16} />} onClick={() => navigate('/dashboard/marketplace/components')}>
          View all
        </Button>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <SimpleGrid cols={4} spacing='lg'>
          {components.map(component => {
            const user = users.get(component.user_id || '');
            return (
              <MarketplaceCard key={component.id} image={component.thumbnail_url} user={user} name={component.name} price={component.price || 0} onClick={()=>setSelectedComponent(component)}/>
            );
          })}
        </SimpleGrid>
      )}
    </div>
  );
};

export default Marketplace;