import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { DesignStorageService } from '../../services/designStorage';
import { SavedDesign } from '../../types/SavedDesign';
import { AuthenticatedFeature } from '../../components/AuthenticatedFeature/AuthenticatedFeature';
import { IconArrowRight, IconCheck, IconDotsVertical, IconX } from '@tabler/icons-react';
import { Text, Title } from '@mantine/core';

interface MyDesignsProps {
  onSelect: (parameters: Record<string, any>) => void;
  currentConfiguratorType: 'default' | 'vulz' | 'stepthru' | 'bookshelf' | 'table' | 'sofa';
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
      className="design-menu"
    >
      <button onClick={handleRename}>Rename</button>
      <button onClick={onDuplicate}>Duplicate</button>
      <button onClick={onDelete} className="delete">Delete</button>
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
          console.log('Auth Token:', token);
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
      const path = design.configurator_type === 'vulz' ? '/vulz' : '/';
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
      <div className="template-container">
        {isLoading ? (
          <div className="designs-loading">
            <img 
              src="https://res.cloudinary.com/da8qnqmmh/image/upload/e_bgremoval/WhatsApp_GIF_2025-01-15_at_12.36.33_tupvgo.gif"
              alt="Loading designs"
              className="loading-gif"
            />
          </div>
        ) : (
          designs.length === 0 ? (
            <div className="no-designs">
              <Title order={3}>No designs found</Title>
              <Text>Create your first design by clicking the save button</Text>
            </div>
          ) : (
          <>
            <div className="template-container-header">
              <Text className="template-container-title">My Designs</Text>
              <button className="view-all-button" onClick={() => navigate('/dashboard/designs')}>
                View All
                <IconArrowRight size={20} />
              </button>
            </div>
            {designs.map((design) => {
              const isEditing = editingDesign?.id === design.id;
              const isMenuOpen = activeMenu === design.id;          
            return (
              <div 
                key={design.id} 
                className="template-button" 
                onClick={() => handleDesignSelect(design)}
              >
                <div className="template-image-container">
                  {design.thumbnail_url ? (
                    <img
                      src={design.thumbnail_url}
                      alt={design.name}
                      className="template-image"
                    />
                  ) : (
                    <div className="no-thumbnail">{design.name}</div>
                  )}
                </div>

                {design.thumbnail_url && (
                  <div className="template-name">
                    {design.name}
                  </div>
                )}

                <button
                  className="menu-trigger"
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
                    className="rename-modal"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <input
                      type="text"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="New design name"
                    />
                    <div className="rename-actions">
                      <button onClick={() => handleRename(design.id)}><IconCheck stroke='1' size={20}/></button>
                      <button onClick={() => {
                        setEditingDesign(null);
                        setActiveMenu(null);
                        setNewName('');
                      }}>
                        <IconX stroke='1' size={20} />
                      </button>
                    </div>
                  </div>
                )}

                {deleteConfirmation === design.id && (
                  <div
                    className="delete-confirmation"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <p>Are you sure you want to delete this design?</p>
                    <div className="delete-actions">
                      <button onClick={() => handleDeleteConfirm(design.id)}>Yes</button>
                      <button onClick={() => {
                        setDeleteConfirmation(null);
                        setActiveMenu(design.id); // Return to main menu if canceled
                      }}>No</button>
                    </div>
                  </div>
                )}
              </div>
            );
            })}
          </>
          )
        )}
      </div>
    </AuthenticatedFeature>
  );
}; 