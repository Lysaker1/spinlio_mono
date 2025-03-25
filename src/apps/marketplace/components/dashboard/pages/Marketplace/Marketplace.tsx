import React, { useEffect, useState, useRef } from 'react';
import { SimpleGrid, Text, Button, Loader, TextInput, Select, Tabs, Title, Divider } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import { BikeTemplate, bikeTemplates } from '@shared/constants/bikeTemplates';
import { PrefabModal } from '../../components/PrefabModal/PrefabModal';
import { ComponentModal } from '../../components/ComponentModal/ComponentModal';
import { getModels, ModelMetadata } from '@shared/services/modelService';
import { ProfileStorageService } from '@shared/services/profileStorage';
import { Profile } from '@shared/types/Profile';
import ProductCard from './components/ProductCard';
import { componentGroups } from '../Uploads/components/UploadModal/constants';

// Bike categories
const BIKE_CATEGORIES = {
  ALL: 'all',
  EBIKE: 'ebike',
  ROAD: 'road',
  URBAN: 'urban'
};

// Component categories
const COMPONENT_CATEGORIES = {
  DRIVETRAIN: 'drivetrain-components',
  EBIKE: 'ebike-components',
  FRAMES: 'frames',
  WHEELS: 'wheels',
  ACCESSORIES: 'accessories'
};

/**
 * Enhanced Marketplace component with search and filtering
 */
const Marketplace: React.FC = () => {
  // State for data
  const [prefabs, setPrefabs] = useState<BikeTemplate[]>(bikeTemplates.slice(0, 8));
  const [components, setComponents] = useState<ModelMetadata[]>([]);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Map<string, Profile>>(new Map());
  
  // Keep track of users we've attempted to fetch to prevent loops
  const fetchedUserIdsRef = useRef<Set<string>>(new Set());
  // Track if profile batch fetching is already in progress
  const isFetchingProfilesRef = useRef<boolean>(false);
  
  // State for modals
  const [selectedPrefab, setSelectedPrefab] = useState<BikeTemplate | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<ModelMetadata | null>(null);
  
  // State for filtering and search
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>('all');
  
  const navigate = useNavigate();

  const fetchUser = async (userId: string): Promise<Profile | null> => {
    if (!userId) return null;
    if (users.has(userId)) return users.get(userId) || null;
    if (fetchedUserIdsRef.current.has(userId)) return null; // Skip already attempted fetches
    
    // Skip likely non-user IDs (e.g., bike template IDs)
    if (userId.includes(' ') || userId.includes('_')) {
      console.warn(`Skipping profile fetch for likely non-user ID: ${userId}`);
      fetchedUserIdsRef.current.add(userId);
      return null;
    }
    
    // Mark this user as attempted even before the fetch completes
    fetchedUserIdsRef.current.add(userId);
    
    try {
      const user = await ProfileStorageService.getProfile(userId);
      setUsers(prev => new Map(prev.set(userId, user)));
      return user;
    } catch (error) {
      console.error(`Failed to fetch user ${userId}:`, error);
      return null;
    }
  };

  // Fetch components data 
  useEffect(() => {
    const fetchComponents = async () => {
      setLoading(true);
      try {
        const fetchedComponents = await getModels();
        setComponents(fetchedComponents);
      } catch (error) {
        console.error('Failed to load components:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchComponents();
  }, []);

  // Fetch user profiles
  useEffect(() => {
    if (isFetchingProfilesRef.current) return;

    const fetchUserProfiles = async () => {
      isFetchingProfilesRef.current = true;

      // Collect manufacturer_ids from prefabs and user_ids from components
      const userIds = Array.from(
        new Set([
          ...components.map(c => c.user_id).filter((id): id is string => Boolean(id)),
          ...prefabs
            .map(p => p.manufacturer_id)
            .filter((id): id is string => Boolean(id))
        ])
      );

      // Filter out likely non-user IDs (bike names, template IDs, etc.)
      const validUserIds = userIds.filter(id => {
        // Skip IDs with spaces or underscores (likely bike names)
        if (id.includes(' ') || id.includes('_')) {
          console.warn(`Skipping likely non-user ID: ${id}`);
          return false;
        }
        
        // Only keep IDs that look like auth0 IDs or have a reasonable length for UUIDs
        if (!id.startsWith('auth0|') && id.length < 20) {
          console.warn(`Skipping unlikely user ID format: ${id}`);
          return false;
        }
        
        return true;
      });

      const idsToFetch = validUserIds.filter(
        id => !users.has(id) && !fetchedUserIdsRef.current.has(id)
      );

      if (idsToFetch.length === 0) {
        isFetchingProfilesRef.current = false;
        return;
      }

      console.log(`Fetching ${idsToFetch.length} user profiles in batches`);

      // Log the IDs we're about to fetch to aid in debugging
      if (idsToFetch.length > 0) {
        console.log('User IDs to fetch:', idsToFetch);
      }

      const batchSize = 2;
      const updatedUsers = new Map(users);
      let updated = false;

      for (let i = 0; i < idsToFetch.length; i += batchSize) {
        const batch = idsToFetch.slice(i, i + batchSize);

        if (i > 0) await new Promise(resolve => setTimeout(resolve, 1000));

        for (const userId of batch) {
          fetchedUserIdsRef.current.add(userId);
          try {
            const profile = await ProfileStorageService.getProfile(userId);
            if (profile) {
              updatedUsers.set(userId, profile);
              updated = true;
            }
          } catch (error) {
            console.error(`Failed to fetch user ${userId}:`, error);
          }
        }
      }

      if (updated) setUsers(updatedUsers);
      isFetchingProfilesRef.current = false;
    };

    fetchUserProfiles().catch(err => {
      console.error('Error fetching user profiles:', err);
      isFetchingProfilesRef.current = false;
    });
  }, [components]);

  // Filtered bike data based on search and category
  const filteredPrefabs = prefabs.filter(prefab => {
    const matchesSearch = searchQuery === '' || 
      prefab.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Use activeCategory for broad filtering
    const matchesCategory = activeCategory === BIKE_CATEGORIES.ALL || 
      prefab.category === activeCategory || 
      // For subcategories, check if the bike type matches the category
      (activeCategory === BIKE_CATEGORIES.EBIKE && prefab.name.toLowerCase().includes('e-bike')) ||
      (activeCategory === BIKE_CATEGORIES.ROAD && prefab.name.toLowerCase().includes('road'));
    
    return matchesSearch && matchesCategory;
  });

  // Get E-bikes
  const eBikes = filteredPrefabs.filter(prefab => 
    prefab.name.toLowerCase().includes('e-') || 
    prefab.category === BIKE_CATEGORIES.EBIKE
  );

  // Get road bikes
  const roadBikes = filteredPrefabs.filter(prefab => 
    prefab.name.toLowerCase().includes('road') || 
    prefab.category === BIKE_CATEGORIES.ROAD
  );

  // Get other bikes (those not in e-bikes or road bikes)
  const otherBikes = filteredPrefabs.filter(prefab => 
    !eBikes.includes(prefab) && !roadBikes.includes(prefab)
  );

  // Filtered component data based on search and category
  const filteredComponents = components.filter(component => {
    const matchesSearch = searchQuery === '' || 
      component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (component.description || '').toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === BIKE_CATEGORIES.ALL || 
      (component.category && component.category.toString() === activeCategory);
    
    return matchesSearch && matchesCategory;
  });

  // Group components by category
  const drivetrainComponents = filteredComponents.filter(component => 
    (component.category && component.category.toString().toLowerCase().includes('drivetrain')) || 
    (component.name && component.name.toLowerCase().includes('drivetrain'))
  );

  const eBikeComponents = filteredComponents.filter(component => 
    (component.category && component.category.toString().toLowerCase().includes('ebike')) || 
    (component.name && component.name.toLowerCase().includes('e-bike'))
  );

  const frameComponents = filteredComponents.filter(component => 
    (component.category && component.category.toString().toLowerCase().includes('frame')) || 
    (component.name && component.name.toLowerCase().includes('frame'))
  );

  const wheelComponents = filteredComponents.filter(component => 
    (component.category && component.category.toString().toLowerCase().includes('wheel')) || 
    (component.name && component.name.toLowerCase().includes('wheel'))
  );

  const otherComponents = filteredComponents.filter(component => 
    !drivetrainComponents.includes(component) && 
    !eBikeComponents.includes(component) &&
    !frameComponents.includes(component) &&
    !wheelComponents.includes(component)
  );

  // Event handlers
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handlePrefabClick = (prefab: BikeTemplate) => {
    setSelectedPrefab(prefab);
  };

  const handleComponentClick = (component: ModelMetadata) => {
    setSelectedComponent(component);
  };

  const handleViewAllPrefabs = () => {
    navigate('/marketplace/prefabs');
  };

  const handleViewAllComponents = () => {
    navigate('/marketplace/components');
  };

  const handleViewCategoryBikes = (category: string) => {
    setActiveCategory(category);
  };

  const handleViewCategoryComponents = (category: string) => {
    setActiveCategory(category);
  };

  // Render a bike category section
  const renderBikeSection = (title: string, bikes: BikeTemplate[], category?: string) => {
    if (bikes.length === 0) return null;
    
    return (
      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <Title order={3} className="text-xl font-bold">{title}</Title>
          <Button 
            variant="subtle" 
            color="dark" 
            className="text-sm"
            rightSection={<IconArrowRight size={16}/>}
            onClick={() => category ? handleViewCategoryBikes(category) : handleViewAllPrefabs()}
          >
            View all
          </Button>
        </div>
        
        <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, md: 5 }} spacing="lg">
          {bikes.slice(0, 5).map(prefab => {
            const user = users.get(prefab.manufacturer_id || '');
            return (
              <ProductCard
                key={prefab.id}
                id={prefab.id}
                type="prefab"
                image={prefab.imageUrl}
                name={prefab.name}
                price={prefab.price || 0}
                user={user}
                rating={4.5}
                features={["Handlebar Display", "Integrated Lighting"].filter(Boolean)}
                onClick={() => handlePrefabClick(prefab)}
              />
            );
          })}
        </SimpleGrid>
      </div>
    );
  };

  // Render a component category section
  const renderComponentSection = (title: string, components: ModelMetadata[], category?: string) => {
    if (components.length === 0) return null;
    
    return (
      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <Title order={3} className="text-xl font-bold">{title}</Title>
          <Button 
            variant="subtle" 
            color="dark" 
            className="text-sm"
            rightSection={<IconArrowRight size={16}/>}
            onClick={() => category ? handleViewCategoryComponents(category) : handleViewAllComponents()}
          >
            View all
          </Button>
        </div>
        
        <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, md: 5 }} spacing="lg">
          {components.slice(0, 5).map(component => {
            const user = users.get(component.user_id || '');
            return (
              <ProductCard
                key={component.id as string}
                id={component.id as string}
                type="component"
                image={component.thumbnail_url}
                name={component.name}
                price={component.price || null}
                priceOnRequest={component.price_on_request}
                user={user}
                rating={4.2}
                onClick={() => handleComponentClick(component)}
              />
            );
          })}
        </SimpleGrid>
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full bg-white p-6">
      {/* Search and filter section */}
      <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-grow relative">
            <TextInput
              placeholder="Search for bikes and components"
              value={searchQuery}
              onChange={handleSearch}
              leftSection={<IconSearch size={18} />}
              className="w-full"
            />
          </div>
          <Select
            placeholder="All Categories"
            data={[
              { value: BIKE_CATEGORIES.ALL, label: 'All Categories' },
              { value: BIKE_CATEGORIES.EBIKE, label: 'E-Bikes' },
              { value: BIKE_CATEGORIES.ROAD, label: 'Road Bikes' },
              { value: BIKE_CATEGORIES.URBAN, label: 'Urban Bikes' },
              ...componentGroups.map(group => ({ 
                value: group.toLowerCase().replace(/\s+/g, '-'), 
                label: group 
              }))
            ]}
            value={activeCategory}
            onChange={setActiveCategory}
            className="w-full sm:w-48"
          />
          <Button type="submit" className="bg-gray-800 text-white">Search</Button>
        </div>
      </div>

      {/* Modals */}
      {selectedPrefab && (
        <PrefabModal prefab={selectedPrefab} onClose={() => setSelectedPrefab(null)} />
      )}
      
      {selectedComponent && (
        <ComponentModal component={selectedComponent} onClose={() => setSelectedComponent(null)} />
      )}

      {/* eBikes Section */}
      {renderBikeSection('eBikes', eBikes, BIKE_CATEGORIES.EBIKE)}
      
      {/* Road Bikes Section */}
      {renderBikeSection('Road Bikes', roadBikes, BIKE_CATEGORIES.ROAD)}
      
      {/* Urban Bikes or Other Bikes Section if needed */}
      {otherBikes.length > 0 && renderBikeSection('Urban Bikes', otherBikes, BIKE_CATEGORIES.URBAN)}
      
      {/* Show message if no bikes match the criteria */}
      {filteredPrefabs.length === 0 && (
        <div className="text-center py-8">
          <Text size="lg" c="dimmed">No bikes match your search criteria</Text>
        </div>
      )}

      {/* Components Sections */}
      {/* Drivetrain Components */}
      {renderComponentSection('Drivetrain Components', drivetrainComponents, COMPONENT_CATEGORIES.DRIVETRAIN)}
      
      {/* eBike Components */}
      {renderComponentSection('eBike Components', eBikeComponents, COMPONENT_CATEGORIES.EBIKE)}
      
      {/* Frame Components */}
      {renderComponentSection('Frames', frameComponents, COMPONENT_CATEGORIES.FRAMES)}
      
      {/* Wheel Components */}
      {renderComponentSection('Wheels', wheelComponents, COMPONENT_CATEGORIES.WHEELS)}
      
      {/* Other Components */}
      {otherComponents.length > 0 && renderComponentSection('Other Components', otherComponents)}
      
      {/* Show message if no components match the criteria */}
      {filteredComponents.length === 0 && (
        <div className="text-center py-8">
          <Text size="lg" c="dimmed">No components match your search criteria</Text>
        </div>
      )}
    </div>
  );
};

export default Marketplace;