import React, { useEffect, useState } from 'react';
import { ActionIcon, Card, Image, Menu, SimpleGrid, Text, TextInput } from '@mantine/core';
import PageLayout from '../../components/PageLayout/PageLayout';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { SavedDesign } from '@shared/types/SavedDesign';
import { DesignStorageService } from '@shared/services/designStorage';
import { IconCheck, IconX, IconDotsVertical, IconDownload, IconEdit, IconTrash, IconLock, IconLockOpen, IconNetwork } from '@tabler/icons-react';
import './Design.css'

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
  const [editingDesign, setEditingDesign] = useState<SavedDesign | null>(null);
  const [newName, setNewName] = useState('');
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();
  const [deleteConfirmation, setDeleteConfirmation] = useState<string | null>(null);

  useEffect(() => {
    const fetchDesigns = async () => {
      if (user?.sub) {
        try {
          const token = await getAccessTokenSilently();
          console.log('Auth Token:', token);
          const fetchedDesigns = await DesignStorageService.getDesignsByUser(user.sub, token);
          
          // Sort designs by date (newest first)
          const sortedDesigns = fetchedDesigns.sort((a, b) => {
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
          });
          
          setDesigns(sortedDesigns);
        } catch (error) {
          console.error('Error fetching designs:', error);
        }
      }
    };
    fetchDesigns();
  }, [user, getAccessTokenSilently]);

  useEffect(() => {
    if (editingDesign) {
      setNewName(editingDesign.name);
    }
  }, [editingDesign]);

  const handleRename = async (designId: string) => {
    if (!newName.trim()) return;
    try {
      const token = await getAccessTokenSilently();
      await DesignStorageService.updateDesign(designId, { name: newName.trim() }, token);

      // Update local state so new name is shown
      setDesigns((prev) =>
        prev.map((d) =>
          d.id === designId ? { ...d, name: newName.trim() } : d
        )
      );

      setEditingDesign(null);
      setNewName('');
    } catch (error) {
      console.error('Error renaming design:', error);
    }
  };

  const handleDeleteClick = (designId: string) => {
    setDeleteConfirmation(designId);
  };

  const handleDeleteConfirm = async (designId: string) => {
    try {
      const token = await getAccessTokenSilently();
      await DesignStorageService.deleteDesign(designId, token);
      
      // Remove from local state after successful deletion
      setDesigns(prev => prev.filter(d => d.id !== designId));
      setDeleteConfirmation(null);
    } catch (error) {
      console.error('Error deleting design:', error);
    }
  };

  const handleDownload = async (designId: string) => {
    try {
      const token = await getAccessTokenSilently();
      // TODO: Implementer nedlastingslogikk her
      console.log('Downloading design', designId);
    } catch (error) {
      console.error('Error downloading design', error);
    }
  };

  const handleVisibility = async (design: SavedDesign) => {
    try {
      const token = await getAccessTokenSilently();
      await DesignStorageService.updateDesign(design.id, { is_public: !design.is_public }, token);

      // Update local so correct visibility setting is shown
      setDesigns((prev) =>
        prev.map((d) =>
          d.id === design.id ? { ...d, is_public: !design.is_public } : d
        )
      );
    } catch (error) {
      console.error('Error changing design visibility:', error);
    }
  };

  const DeleteConfirmation: React.FC<{
    onConfirm: () => void;
    onCancel: () => void;
  }> = ({ onConfirm, onCancel }) => (
    <div className="delete-confirmation">
      <p>Are you sure you want to delete this design?</p>
      <div className="delete-actions">
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onCancel}>No</button>
      </div>
    </div>
  );

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
      <SimpleGrid
        cols={4}
        spacing="lg"
      >
        {filteredDesigns.map((design) => (
          <Card key={design.id} shadow="sm" padding="lg" radius="md" withBorder>
            {deleteConfirmation === design.id && (
              <DeleteConfirmation
                onConfirm={() => handleDeleteConfirm(design.id)}
                onCancel={() => setDeleteConfirmation(null)}
              />
            )}
            <Card.Section>
              <div style={{ position: 'relative' }}>
                <ActionIcon
                    className='visibility-icon'
                    variant="light"
                    title={design.is_public ? "Public" : "Private"}
                  >
                  {design.is_public ? <IconNetwork size="1rem" /> : <IconLock size="1rem" />}
                </ActionIcon>
                <Image
                  src={design.thumbnail_url || '/placeholder-image.png'} 
                  height={160}
                  alt={design.name}
                />
                <Menu position="bottom-end" withinPortal>
                  <Menu.Target>
                    <ActionIcon
                      style={{
                        position: 'absolute',
                        top: 8,
                        right: 8
                      }}
                      variant="subtle"
                    >
                      <IconDotsVertical size="1rem" />
                    </ActionIcon>
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Item 
                      leftSection={<IconEdit size="1rem" />}
                      onClick={() => setEditingDesign(design)}
                    >
                      Edit name
                    </Menu.Item>
                    <Menu.Item
                      leftSection={<IconDownload size="1rem" />}
                      onClick={() => handleDownload(design.id)}
                    >
                      Download
                    </Menu.Item>
                    <Menu.Item 
                      leftSection={design.is_public ? <IconLock size="1rem" /> : <IconLockOpen size="1rem" />}
                      onClick={() => handleVisibility(design)}
                    >
                      {design.is_public ? "Make private" : "Make public"}
                    </Menu.Item>
                    <Menu.Item
                      leftSection={<IconTrash size="1rem" />}
                      color="red"
                      onClick={() => handleDeleteClick(design.id)}
                    >
                      Delete
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </div>
            </Card.Section>
            
            {editingDesign === design ? (
              <div className='edit-name-container'>
                <TextInput
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  style={{ flex: 1 }}
                />
                <ActionIcon
                  onClick={() => handleRename(design.id)}
                  disabled={newName === ''}
                >
                  <IconCheck />
                </ActionIcon>
                <ActionIcon
                  variant="subtle"
                  onClick={() => {
                    setEditingDesign(null);
                    setNewName('');
                  }}
                >
                  <IconX />
                </ActionIcon>
              </div>
            ) : (
              <Text fw={500} size="lg" mt="md">
                {design.name}
              </Text>
            )}
          </Card>
        ))}
      </SimpleGrid>
    </PageLayout>
  );
};

export default Designs; 