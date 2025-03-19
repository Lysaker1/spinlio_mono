import { useAuth0 } from '@auth0/auth0-react';
import { Loader, SimpleGrid } from '@mantine/core';
import { DesignStorageService } from '@frontend/services/designStorage';
import { SavedDesign } from '@frontend/types/SavedDesign';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DesignCard from '../../components/DesignCard/DesignCard';
import PageLayout from '../../components/PageLayout/PageLayout';
import { logger } from '../../../../utils/logger';

const COLUMNS = 4;
const ROWS = 3;

const Designs: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const [designs, setDesigns] = useState<SavedDesign[]>([]);
  const [filteredDesigns, setFilteredDesigns] = useState<SavedDesign[]>([]);
  const { user, getAccessTokenSilently } = useAuth0();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchDesigns = async () => {
      if (user?.sub) {
        setLoading(true);
        try {
          const token = await getAccessTokenSilently();
          logger.debug('Authentication completed for Designs');
          const fetchedDesigns = await DesignStorageService.getDesignsByUser(user.sub, token);
          
          // Sort designs by date (newest first)
          const sortedDesigns = fetchedDesigns.sort((a, b) => {
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
          });
          
          setDesigns(sortedDesigns);
        } catch (error) {
          console.error('Error fetching designs:', error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchDesigns();
  }, [user, getAccessTokenSilently]);

  useEffect(() => {
    const itemsPerPage = ROWS * COLUMNS;
    const maxPage = Math.ceil(filteredDesigns.length / itemsPerPage);

    if (currentPage > maxPage) {
      setCurrentPage(maxPage || 1);
    } else if (currentPage < 1) {
      setCurrentPage(1);
    }
  }, [searchQuery, designs]);

  useEffect(() => {
    const itemsPerPage = ROWS * COLUMNS;
    const filteredDesigns = designs.filter(design => 
      design.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    setFilteredDesigns(filteredDesigns.slice(startIndex, endIndex));
  }, [currentPage, searchQuery, designs]);

  return (
    <PageLayout
      title="My Designs"
      totalPages={Math.ceil(
        filteredDesigns.length / (ROWS * COLUMNS)
      )}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      onSearch={handleSearch}
    >
      {loading ? (
        <Loader />
      ) : (
        <SimpleGrid
          cols={4}
          spacing="lg"
      >
        {filteredDesigns.map((design) => (
          <DesignCard
            design={design}
            key={design.id}
            onRename={(newName) => setDesigns((prev) => prev.map((d) => d.id === design.id ? { ...d, name: newName.trim() } : d))}
            onDelete={() => setDesigns((prev)=>prev.filter((d) => d.id !== design.id))}
            onChangeVisibility={() => setDesigns((prev) => prev.map((d) => d.id === design.id ? { ...d, is_public: !design.is_public } : d ))}
          />
        ))}
        </SimpleGrid>
      )}
    </PageLayout>
  );
};

export default Designs; 