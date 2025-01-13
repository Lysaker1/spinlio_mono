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
  const { user, isAuthenticated, getAccessTokenSilently, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    const loadDesigns = async () => {
      console.log('Auth state:', { isAuthenticated, userId: user?.sub });
      if (isAuthenticated && user?.sub) {
        try {
          const token = await getAccessTokenSilently();
          const userDesigns = await DesignStorageService.getDesignsByUser(user.sub, token);
          console.log('Loaded designs:', userDesigns);
          setDesigns(userDesigns || []);
        } catch (error) {
          console.error('Error loading designs:', error);
        }
      }
    };
    loadDesigns();
  }, [user, isAuthenticated, getAccessTokenSilently]);

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

  return (
    <AuthenticatedFeature
      fallback={
        <div className="my-designs-login-prompt">
          <p>Login to view your saved designs</p>
        </div>
      }
    >
      {designs.length > 0 ? (
        designs.map((design) => (
          <button
            key={design.id}
            className="template-button"
            onClick={() => handleDesignSelect(design)}
          >
            <span className="template-name">
              {design.name}
              <small className="configurator-type">
                ({design.configurator_type === 'vulz' ? 'Vulz' : 'Default'})
              </small>
            </span>
            <p className="template-date">
              {new Date(design.created_at).toLocaleDateString()}
            </p>
          </button>
        ))
      ) : (
        <p style={{ color: 'white', padding: '0.5rem' }}>
          No saved designs yet
        </p>
      )}
    </AuthenticatedFeature>
  );
}; 