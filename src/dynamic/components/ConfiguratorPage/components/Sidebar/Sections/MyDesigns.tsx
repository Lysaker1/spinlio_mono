import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { DesignStorageService } from '../../../../../../shared/services/designStorage';
import { SavedDesign } from '../../../../../../shared/types/SavedDesign';
import { AuthenticatedFeature } from '../../../../../../shared/components/AuthenticatedFeature/AuthenticatedFeature';
import { IconArrowRight, IconBookmarks, IconCheck, IconDotsVertical, IconSearch, IconX } from '@tabler/icons-react';
import { Loader, Text, TextInput, Title } from '@mantine/core';
import { CONFIGURATOR_PATHS } from '@shared/constants/configuratorTypes';
import { logger } from '../../../../../../shared/utils/logger';
import fallback from '@dynamic/assets/fallback.jpg';

interface MyDesignsProps {
  onSelect: (parameters: Record<string, any>) => void;
  currentConfiguratorType: 'default' | 'vulz' | 'stepthru' | 'bookshelf' | 'table' | 'sofa' | 'urban';
}

interface DesignMenuProps {
  designId: string;
  cardRef: React.RefObject<HTMLDivElement>;
  onClose: () => void;
  onRename: () => void;
  onDuplicate: () => void;
  onDelete: () => void;
}

const DesignMenu: React.FC<DesignMenuProps> = ({
  designId,
  cardRef,
  onClose,
  onRename,
  onDuplicate,
  onDelete
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is on the configurator canvas
      const isConfiguratorClick = (event.target as Element)?.closest('#configurator-container');
      
      if (menuRef.current && 
          !menuRef.current.contains(event.target as Node) && 
          cardRef.current && 
          !cardRef.current.contains(event.target as Node) ||
          isConfiguratorClick) {
        onClose();
      }
    };

    // Use capture phase to ensure we get the event before ConfiguratorComponent
    document.addEventListener('mousedown', handleClickOutside, true);
    return () => document.removeEventListener('mousedown', handleClickOutside, true);
  }, [onClose, cardRef]);

  const handleRename = () => {
    onRename();
    onClose(); // Close menu after rename action
  };

  return (
    <div 
      ref={menuRef}
      className="absolute top-0 left-0 backdrop-blur-lg z-50 flex flex-col w-full h-full border bg-white border-gray-800 rounded-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <button onClick={handleRename} className="border-none rounded-t-xl bg-white border-b-gray-400 text-black cursor-pointer transition ease-in-out duration-200 h-1/3 hover:bg-gray-bg">Rename</button>
      <button onClick={onDuplicate} className="border-none bg-white text-black cursor-pointer transition ease-in-out duration-200 h-1/3 hover:bg-gray-bg">Duplicate</button>
      <button onClick={onDelete} className="border-none rounded-b-xl bg-red-600 text-white cursor-pointer transition ease-in-out duration-200 h-1/3 hover:bg-red-700">Delete</button>
    </div>
  );
};

export const MyDesigns: React.FC<MyDesignsProps> = ({ onSelect, currentConfiguratorType }) => {
  const [designs, setDesigns] = useState<SavedDesign[]>([]);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [editingDesign, setEditingDesign] = useState<SavedDesign | null>(null);
  const [newName, setNewName] = useState('');
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();
  const [deleteConfirmation, setDeleteConfirmation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickedCard = target.closest('.design-card');
      
      if (activeMenu && (
        // Lukk hvis klikket er utenfor alle kort
        !clickedCard || 
        // Eller hvis klikket er på et annet kort enn det aktive
        (clickedCard && clickedCard.getAttribute('key') !== activeMenu)
      )) {
        setActiveMenu(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeMenu]);

  useEffect(() => {
    const fetchDesigns = async () => {
      if (user?.sub) {
        try {
          setIsLoading(true);
          const token = await getAccessTokenSilently();
          logger.debug('Authentication completed for MyDesigns');
          const fetchedDesigns = await DesignStorageService.getDesignsByUser(user.sub, token);
          
          // Sort designs by date (newest first)
          const sortedDesigns = fetchedDesigns.sort((a, b) => {
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
          });
          
          setDesigns(sortedDesigns);
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching designs:', error);
          setIsLoading(false);
        }
      }
    };
    fetchDesigns();
  }, [user, getAccessTokenSilently]);

  const handleDesignSelect = (design: SavedDesign) => {
    if (design.configurator_type !== currentConfiguratorType) {
      const path = CONFIGURATOR_PATHS[design.configurator_type] || '/';
      navigate(path, {
        state: { designParameters: design.parameters }
      });
    } else {
      onSelect(design.parameters);
    }
  };


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

      // Close the rename modal + the 3-dot menu
      setEditingDesign(null);
      setActiveMenu(null);
      setNewName('');
    } catch (error) {
      console.error('Error renaming design:', error);
    }
  };

  const handleDuplicate = async (design: SavedDesign) => {
    try {
      const token = await getAccessTokenSilently();
      const duplicatedDesign = await DesignStorageService.duplicateDesign(design, token);
      
      setDesigns(prev => {
        const index = prev.findIndex(d => d.id === design.id);
        const newDesigns = [...prev];
        newDesigns.splice(index + 1, 0, duplicatedDesign);
        return newDesigns;
      });
      
      setActiveMenu(null);
    } catch (error) {
      console.error('Error duplicating design:', error);
    }
  };

  const handleDeleteClick = (designId: string) => {
    setActiveMenu(null); // Close the three-dot menu
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

  return (
    <AuthenticatedFeature>
      <div className="w-80 h-full bg-white rounded-xl overflow-y-scroll scrollbar-hide">
        <div className="flex justify-between items-center py-4 px-3 bg-white bg-opacity-50 w-full border-b border-gray-300">
          <Text className="flex items-center gap-2">
            <IconBookmarks size={16} />
            My Designs
          </Text>
          <button className="view-all-button" onClick={() => navigate('/dashboard/designs')}>
            See all
          </button>
        </div>
        <div className="flex flex-col gap-6 px-4 py-6">
        <TextInput placeholder="Search" leftSection={<IconSearch size={20} />} radius="xl" size="md" onChange={(e) => setSearch(e.target.value)}/>
        {isLoading ? (
          <Loader />
        ) : (
          designs.length === 0 ? (
            <div className="text-center text-gray-800 py-10">
              <Title order={3}>No designs found</Title>
              <Text>Create your first design by clicking the save button</Text>
            </div>
          ) : (
          <>
            <div className="grid grid-cols-2 gap-1">
              {designs.filter((design) => design.name.toLowerCase().includes(search.toLowerCase())).map((design) => {
                const isEditing = editingDesign?.id === design.id;
                const isMenuOpen = activeMenu === design.id;          
              return (
                <div
                  key={design.id}
                  className={`w-full aspect-square p-2 bg-gray-bg rounded-lg cursor-pointer flex flex-col items-center justify-center border-2 border-gray-bg`}
                  onClick={() => handleDesignSelect(design)}
                >
                  <img 
                    src={design.thumbnail_url || fallback } 
                    alt={design.name} 
                    className="w-3/4 h-3/4 object-contain rounded-md" 
                  />
                  <Text className="text-center mt-2 text-sm overflow-ellipsis overflow-hidden whitespace-nowrap">{design.name}</Text>

                  <button
                    className="absolute top-2 right-2 bg-gray-500 bg-opacity-70 border-none w-8 h-8 cursor-pointer text-white rounded-full flex items-center justify-center opacity-90 hover:opacity-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveMenu(isMenuOpen ? null : design.id);
                    }}
                  >
                    <IconDotsVertical size={16} />
                  </button>

                  {isMenuOpen && (
                    <DesignMenu
                      designId={design.id}
                      cardRef={React.createRef<HTMLDivElement>()}
                      onClose={() => setActiveMenu(null)}
                      onRename={() => {
                        setActiveMenu(null);
                        setEditingDesign(design);
                      }}
                      onDuplicate={() => {
                        setActiveMenu(null);
                        handleDuplicate(design);
                      }}
                      onDelete={() => {
                        setActiveMenu(null);
                        handleDeleteClick(design.id);
                      }}
                    />
                  )}

                  {isEditing && (
                    <div
                      className="absolute top-0 left-0 h-full w-full m-auto border border-black rounded-xl bg-white p-4 z-50 shadow-lg text-black max-w-xs flex flex-col items-center box-border"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        placeholder="New design name"
                        className="w-full mb-2 rounded border border-black bg-white text-black p-2 box-border"
                      />
                      <div className="w-full flex justify-between items-center gap-2">
                        <button onClick={() => handleRename(design.id)} className="rounded border-none bg-gray-bg text-black cursor-pointer h-full w-full flex items-center justify-center hover:bg-opacity-20"><IconCheck stroke='1' size={20}/></button>
                        <button onClick={() => {
                          setEditingDesign(null);
                          setActiveMenu(null);
                          setNewName('');
                        }} className="rounded border-none bg-gray-bg text-black cursor-pointer h-full w-full flex items-center justify-center hover:bg-opacity-20">
                          <IconX stroke='1' size={20} />
                        </button>
                      </div>
                    </div>
                  )}

                  {deleteConfirmation === design.id && (
                    <div
                      className="absolute top-0 left-0 h-full w-full bg-white p-1 z-50 shadow-lg border border-black rounded-xl text-black text-center flex justify-center items-center flex-col box-border gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <p className="text-sm m-0">Are you sure you want to delete this design?</p>
                      <div className="flex gap-2 justify-end">
                        <button onClick={() => handleDeleteConfirm(design.id)} className="py-1 px-3 rounded bg-red-600 text-white text-sm">Yes</button>
                        <button onClick={() => {
                          setDeleteConfirmation(null);
                          setActiveMenu(design.id); // Return to main menu if canceled
                        }} className="py-1 px-3 rounded bg-gray-bg text-black text-sm">No</button>
                      </div>
                    </div>
                  )}
                </div>
              );
              })}
            </div>
          </>
          )
        )}
        </div>
      </div>
    </AuthenticatedFeature>
  );
}; 