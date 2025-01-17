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

  useEffect(() => {
    const fetchDesigns = async () => {
      if (user?.sub) {
        try {
          const token = await getAccessTokenSilently();
          const fetchedDesigns = await DesignStorageService.getDesignsByUser(user.sub, token);
          
          // Debug logging
          console.log('Fetched designs:', fetchedDesigns);
          console.log('Designs with thumbnails:', fetchedDesigns.filter(d => d.thumbnail_url));
          
          setDesigns(fetchedDesigns);
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

  const handleDuplicate = (design: SavedDesign) => {
    // Duplicate logic placeholder
    console.log('Duplicating design', design.id);
  };

  const handleDelete = (designId: string) => {
    // Delete logic placeholder
    console.log('Deleting design', designId);
  };

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
                    <button onClick={() => setEditingDesign(design)}>Rename</button>
                    <button onClick={() => handleDuplicate(design)}>Duplicate</button>
                    <button onClick={() => handleDelete(design.id)}>Delete</button>
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
              </div>
            );
          })}
        </div>
      </div>
    </AuthenticatedFeature>
  );
}; 