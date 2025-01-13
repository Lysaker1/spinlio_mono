import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { AuthTest } from '../AuthTest/AuthTest';
import './Welcome.css';

export const Welcome: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      const timer = setTimeout(() => {
        navigate('/configurator');
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <div className="text-container">
          <h1>Welcome to Spinlio</h1>
          {!isAuthenticated ? (
            <>
              <p>Please log in to access the bike configurator</p>
              <AuthTest />
            </>
          ) : (
            <p>Redirecting to configurator...</p>
          )}
        </div>
      </div>
    </div>
  );
};