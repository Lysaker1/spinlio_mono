import React, { useEffect, useState } from 'react';
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
                  <div
                    className="design-menu"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button onClick={() => {
                      setActiveMenu(null);  // Close the menu first
                      setEditingDesign(design);  // Then open rename modal
                    }}>
                      Rename
                    </button>
                    <button onClick={() => handleDuplicate(design)}>Duplicate</button>
                    <button onClick={() => handleDeleteClick(design.id)}>Delete</button>
                  </div>
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