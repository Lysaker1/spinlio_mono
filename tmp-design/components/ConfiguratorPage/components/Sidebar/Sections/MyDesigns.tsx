import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { DesignStorageService } from '@shared/services/designStorage';
import { SavedDesign } from '@shared/types/SavedDesign';
import { IconBookmarks, IconCheck, IconDotsVertical, IconSearch, IconX } from '@tabler/icons-react';
import { Loader, Text, TextInput, Title } from '@mantine/core';
import { CONFIGURATOR_PATHS, ConfiguratorType } from '@shared/constants/configuratorTypes';
import { logger } from '@shared/utils/logger';
import fallback from '../../../../../assets/fallback.jpg';
import LoginModal from '../../LoginModal/LoginModal';

interface MyDesignsProps {
  onSelect: (parameters: Record<string, any>) => void;
  currentConfiguratorType: ConfiguratorType;
  showLoginModal?: boolean;
  setShowLoginModal?: (show: boolean) => void;
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

const MyDesigns: React.FC<MyDesignsProps> = ({ 
  onSelect, 
  currentConfiguratorType, 
  showLoginModal: externalShowLoginModal, 
  setShowLoginModal: externalSetShowLoginModal 
}) => {
  const { user, getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [designs, setDesigns] = useState<SavedDesign[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDesign, setSelectedDesign] = useState<SavedDesign | null>(null);
  const [isRenaming, setIsRenaming] = useState(false);
  const [renameValue, setRenameValue] = useState('');
  const [isAddingDesign, setIsAddingDesign] = useState(false);
  const [newDesignName, setNewDesignName] = useState('');
  const [showOptions, setShowOptions] = useState<string | null>(null);
  const [internalShowLoginModal, setInternalShowLoginModal] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  // Use external modal state if provided, otherwise use internal
  const showLoginModalState = typeof externalShowLoginModal === 'boolean' ? externalShowLoginModal : internalShowLoginModal;
  const setShowLoginModalState = externalSetShowLoginModal || setInternalShowLoginModal;

  // Filter designs based on search term
  const filteredDesigns = designs.filter((design) =>
    design.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle outside click to close options menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target as Node)) {
        setShowOptions(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Fetch designs when user changes
  useEffect(() => {
    const fetchDesigns = async () => {
      if (user?.sub) {
        try {
          setIsLoading(true);
          const token = await getAccessTokenSilently();
          // Use the correct method with both parameters
          const fetchedDesigns = await DesignStorageService.getDesignsByType(
            currentConfiguratorType,
            token
          );
          
          // Sort designs by date (newest first)
          const sortedDesigns = fetchedDesigns.sort((a, b) => {
            // Ensure we handle dates safely
            const dateA = a.created_at ? new Date(a.created_at).getTime() : 0;
            const dateB = b.created_at ? new Date(b.created_at).getTime() : 0;
            return dateB - dateA;
          });
          
          setDesigns(sortedDesigns);
        } catch (error) {
          logger.error('Error fetching designs:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    
    if (isAuthenticated) {
      fetchDesigns();
    }
  }, [user, currentConfiguratorType, getAccessTokenSilently, isAuthenticated]);

  const handleDesignSelect = (design: SavedDesign) => {
    setSelectedDesign(design);
    onSelect(design.parameters);
  };

  const handleRenameDesign = async () => {
    try {
      if (user && selectedDesign && renameValue) {
        const token = await getAccessTokenSilently();
        await DesignStorageService.updateDesign(
          selectedDesign.id,
          {
            name: renameValue,
            thumbnail_url: selectedDesign.thumbnail_url,
            parameters: selectedDesign.parameters,
            configurator_type: currentConfiguratorType
          },
          token
        );
        
        // Update local state with new name
        setDesigns(designs.map(d => 
          d.id === selectedDesign.id 
            ? { ...d, name: renameValue } 
            : d
        ));
        
        setIsRenaming(false);
        setRenameValue('');
      }
    } catch (error) {
      logger.error('Error renaming design:', error);
    }
  };

  const handleDuplicateDesign = async (design: SavedDesign) => {
    try {
      if (user) {
        const token = await getAccessTokenSilently();
        const duplicatedDesign = await DesignStorageService.duplicateDesign(design, token);
        setDesigns([duplicatedDesign, ...designs]);
      }
    } catch (error) {
      logger.error('Error duplicating design:', error);
    }
  };

  const handleDeleteDesign = async (designId: string) => {
    try {
      if (user) {
        const token = await getAccessTokenSilently();
        await DesignStorageService.deleteDesign(designId, token);
        setDesigns(designs.filter(d => d.id !== designId));
        setShowOptions(null);
      }
    } catch (error) {
      logger.error('Error deleting design:', error);
    }
  };

  const handleClick = () => {
    if (!isAuthenticated) {
      setShowLoginModalState(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="w-80 h-full bg-white rounded-xl overflow-y-scroll scrollbar-hide" onClick={handleClick}>
        <div className="flex justify-between items-center py-4 px-3 bg-white bg-opacity-50 w-full border-b border-gray-300">
          <Text className="flex items-center gap-2">
            <IconBookmarks size={16} />
            My Designs
          </Text>
          <button className="view-all-button" onClick={(e) => {
            e.stopPropagation();
            setShowLoginModalState(true);
          }}>
            See all
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 px-4 py-6 h-4/5">
          <div className="text-center text-gray-800 py-10">
            <Title order={3}>Login to see your designs</Title>
            <Text>Save and manage your designs by logging in</Text>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowLoginModalState(true);
              }}
              className="bg-black text-white font-medium px-6 py-2 rounded-full mt-4 hover:bg-gray-900 transition-colors"
            >
              Login
            </button>
          </div>
        </div>
        <LoginModal opened={showLoginModalState} setOpened={setShowLoginModalState} />
      </div>
    );
  }

  return (
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
      <TextInput placeholder="Search" leftSection={<IconSearch size={20} />} radius="xl" size="md" onChange={(e) => setSearchTerm(e.target.value)}/>
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
            {filteredDesigns.map((design) => {
              const isEditing = selectedDesign?.id === design.id;
              const isMenuOpen = showOptions === design.id;          
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
                    setShowOptions(isMenuOpen ? null : design.id);
                  }}
                >
                  <IconDotsVertical size={16} />
                </button>

                {isMenuOpen && (
                  <DesignMenu
                    designId={design.id}
                    cardRef={React.createRef<HTMLDivElement>()}
                    onClose={() => setShowOptions(null)}
                    onRename={() => {
                      setShowOptions(null);
                      setSelectedDesign(design);
                    }}
                    onDuplicate={() => {
                      setShowOptions(null);
                      handleDuplicateDesign(design);
                    }}
                    onDelete={() => {
                      setShowOptions(null);
                      handleDeleteDesign(design.id);
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
                      value={renameValue}
                      onChange={(e) => setRenameValue(e.target.value)}
                      placeholder="New design name"
                      className="w-full mb-2 rounded border border-black bg-white text-black p-2 box-border"
                    />
                    <div className="w-full flex justify-between items-center gap-2">
                      <button onClick={handleRenameDesign} className="rounded border-none bg-gray-bg text-black cursor-pointer h-full w-full flex items-center justify-center hover:bg-opacity-20"><IconCheck stroke='1' size={20}/></button>
                      <button onClick={() => {
                        setSelectedDesign(null);
                        setShowOptions(null);
                        setRenameValue('');
                      }} className="rounded border-none bg-gray-bg text-black cursor-pointer h-full w-full flex items-center justify-center hover:bg-opacity-20">
                        <IconX stroke='1' size={20} />
                      </button>
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
  );
};

export default MyDesigns; 