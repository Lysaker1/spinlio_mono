import React, { useEffect, useState } from 'react';
import { ActionIcon, Card, Image, Menu, Overlay, SimpleGrid, Text, TextInput } from '@mantine/core';
import PageLayout from '../../components/PageLayout/PageLayout';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { SavedDesign } from '@shared/types/SavedDesign';
import { DesignStorageService } from '@shared/services/designStorage';
import { IconCheck, IconX, IconDotsVertical, IconDownload, IconEdit, IconTrash, IconLock, IconLockOpen, IconNetwork } from '@tabler/icons-react';
import './DesignCard.css'
import { DesignModal } from './DesignModal';

interface Props {
  design: SavedDesign;
  onRename: (newName: string ) => void;
  onDelete: () => void;
  onChangeVisibility: () => void;
}

const DesignCard: React.FC<Props> = ({design, onRename, onDelete, onChangeVisibility}) => {
  const [newName, setNewName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isOwnDesign, setIsOwnDesign] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();
  const [deleteConfirmation, setDeleteConfirmation] = useState<string | null>(null);

  useEffect(() => {
    if (isEditing) {
      setNewName(design.name);
    }
  }, [isEditing]);

  useEffect(()=>{
    if (!user) return setIsOwnDesign(false);
    if (design?.user_id === user?.sub) {
      return setIsOwnDesign(true);
    }
    setIsOwnDesign(design?.user_id === user?.sub)
  }, [design, user])

  const handleRename = async () => {
    if (!newName.trim()) return;
    try {
      const token = await getAccessTokenSilently();
      await DesignStorageService.updateDesign(design.id, { name: newName.trim() }, token);

      onRename(newName)
      setIsEditing(false)
    } catch (error) {
      console.error('Error renaming design:', error);
    }
  };

  const handleDeleteClick = () => {
    setDeleteConfirmation(design.id);
  };

  const handleDeleteConfirm = async () => {
    try {
      const token = await getAccessTokenSilently();
      await DesignStorageService.deleteDesign(design.id, token);
      
      // Remove from local state after successful deletion
      onDelete();
      setDeleteConfirmation(null);
    } catch (error) {
      console.error('Error deleting design:', error);
    }
  };

  const handleDownload = async () => {
    try {
      const token = await getAccessTokenSilently();
      // TODO: Implementer nedlastingslogikk her
      console.log('Downloading design', design.id);
    } catch (error) {
      console.error('Error downloading design', error);
    }
  };

  const handleVisibility = async () => {
    try {
      const token = await getAccessTokenSilently();
      await DesignStorageService.updateDesign(design.id, { is_public: !design.is_public }, token);

      onChangeVisibility();
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

  return (
    <>
      <Card key={design.id} shadow="sm" padding="lg" radius="md" withBorder onClick={() => setIsOpen(true)}>
        {deleteConfirmation === design.id && (
          <DeleteConfirmation
            onConfirm={() => handleDeleteConfirm()}
            onCancel={() => setDeleteConfirmation(null)}
          />
        )}
        <Card.Section>
          <div style={{ position: 'relative' }}>
            <div className='design-image-container'>
              <Image
                className='design-image'
                src={design.thumbnail_url || '/placeholder-image.png'} 
                height={160}
                alt={design.name}
              />
            </div>
            { isOwnDesign && (
              <>
                <ActionIcon
                  className='visibility-icon'
                  variant="light"
                  title={design.is_public ? "Public" : "Private"}
                  color='grey'
                >
                  {design.is_public ? <IconNetwork size="1rem" /> : <IconLock size="1rem" />}
                </ActionIcon>
                    
                <Menu position="bottom-end" withinPortal>
                  <Menu.Target>
                    <ActionIcon
                      style={{
                        position: 'absolute',
                        top: 8,
                        right: 8
                      }}
                      variant="subtle"
                      color="grey"
                    >
                      <IconDotsVertical size="1rem" />
                    </ActionIcon>
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Item 
                      leftSection={<IconEdit size="1rem" />}
                      onClick={() => setIsEditing(true)}
                    >
                      Edit name
                    </Menu.Item>
                    <Menu.Item
                      leftSection={<IconDownload size="1rem" />}
                      onClick={() => handleDownload()}
                    >
                      Download
                    </Menu.Item>
                    <Menu.Item 
                      leftSection={design.is_public ? <IconLock size="1rem" /> : <IconLockOpen size="1rem" />}
                      onClick={() => handleVisibility()}
                    >
                      {design.is_public ? "Make private" : "Make public"}
                    </Menu.Item>
                    <Menu.Item
                      leftSection={<IconTrash size="1rem" />}
                      color="red"
                      onClick={() => handleDeleteClick()}
                    >
                      Delete
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </>
            )}
          </div>
        </Card.Section>
              
        {isEditing ? (
          <div className='edit-name-container'>
            <TextInput
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              style={{ flex: 1 }}
            />
            <ActionIcon
              onClick={() => handleRename()}
              disabled={newName === ''}
            >
              <IconCheck />
            </ActionIcon>
            <ActionIcon
              variant="subtle"
              onClick={() => {
                setIsEditing(false);
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
      { 
        isOpen &&
         <>
           <Overlay className='design-overlay' onClick={()=> setIsOpen(false)}/>
           <DesignModal design={design}/>
         </>
      } 
    </>
  );
};

export default DesignCard; 