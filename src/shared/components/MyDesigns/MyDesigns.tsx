import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { DesignStorageService } from '../../services/designStorage';
import { SavedDesign } from '../../types/SavedDesign';
import './MyDesigns.css';
import { AuthenticatedFeature } from '../../components/AuthenticatedFeature/AuthenticatedFeature';

interface MyDesignsProps {
  onSelect: (parameters: Record<string, any>) => void;
  currentConfiguratorType: 'default' | 'vulz';
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
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const updatePosition = useCallback(() => {
    if (cardRef.current && menuRef.current) {
      const cardRect = cardRef.current.getBoundingClientRect();
      const menuRect = menuRef.current.getBoundingClientRect();
      
      // Calculate centered position
      let left = cardRect.left + (cardRect.width - menuRect.width) / 2;
      let top = cardRect.top + (cardRect.height - menuRect.height) / 2;
      
      // Adjust if menu goes outside viewport
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Prevent right overflow
      if (left + menuRect.width > viewportWidth) {
        left = viewportWidth - menuRect.width - 16; // 16px padding from viewport edge
      }
      
      // Prevent left overflow
      if (left < 16) {
        left = 16;
      }
      
      // Prevent bottom overflow
      if (top + menuRect.height > viewportHeight) {
        top = viewportHeight - menuRect.height - 16;
      }
      
      // Prevent top overflow
      if (top < 16) {
        top = 16;
      }
      
      setPosition({ top, left });
    }
  }, [cardRef]);

  // Update position on mount and window resize
  useEffect(() => {
    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [updatePosition]);

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
      style={{ 
        top: `${position.top}px`, 
        left: `${position.left}px`,
        position: 'fixed' // Change to fixed positioning
      }}
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
    <AuthenticatedFeature>
      <div className="designs-container">
        <div className="designs-grid">
          {designs.map((design) => {
            const isEditing = editingDesign?.id === design.id;
            const isMenuOpen = activeMenu === design.id;

            return (
              <div 
                key={design.id} 
                className="design-card" 
                onClick={() => handleDesignSelect(design)}
              >
                <div className="design-thumbnail">
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
                  <div className="design-name">
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
                  ⋮
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
                      <button onClick={() => handleRename(design.id)}>Save</button>
                      <button onClick={() => {
                        setEditingDesign(null);
                        setActiveMenu(null);
                        setNewName('');
                      }}>
                        Cancel
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
        </div>
      </div>
    </AuthenticatedFeature>
  );
}; 