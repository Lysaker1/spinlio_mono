import React, { useEffect, useState } from 'react';
import { SimpleGrid, Loader } from '@mantine/core';
import { getModelsPerUser, ModelMetadata } from '@shared/services/modelService';
import { ProfileStorageService } from '@shared/services/profileStorage';
import { Profile } from '@shared/types/Profile';
import MarketplaceCard from '../MarketplaceCard/MarketplaceCard';

interface ProfileModelsProps {
  profileId?: string;
}

const ProfileModels: React.FC<ProfileModelsProps> = ({ profileId }) => {
  const [models, setModels] = useState<ModelMetadata[]>([]);
  const [user, setUser] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!profileId) return;
      setLoading(true);
      try {
        const [fetchedModels, fetchedUser] = await Promise.all([
          getModelsPerUser(profileId),
          ProfileStorageService.getProfile(profileId)
        ]);
        
        setModels(fetchedModels);
        setUser(fetchedUser);
      } catch (error) {
        console.error('Failed to fetch profile models:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [profileId]);

  if (loading) {
    return <Loader />;
  }

  return (
    <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, md: 4 }} spacing="lg" p={16}>
      {models.map((model) => (
        <MarketplaceCard
          key={model.id as string}
          image={model.thumbnail_url}
          user={user || undefined}
          name={model.name}
          price={model.price || 0}
        />
      ))}
    </SimpleGrid>
  );
};

export default ProfileModels; 