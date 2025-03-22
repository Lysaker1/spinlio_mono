import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'; 
import { 
  IconTruck, 
  IconBike, 
  IconUpload, 
  IconShoppingCart,
  IconTools,
  IconBuildingStore,
  IconHomeHeart,
  IconCode,
  IconBox
} from '@tabler/icons-react';
import '../../Dashboard.css'
import LoginModal from './LoginModal';

interface DashboardSidebarProps {
  isAuthenticated: boolean;
}

// Define menu items with authentication requirement flag
const publicMenuItems = [
  { 
    icon: <IconHomeHeart style={{ width: '1.5rem', height: '1.5rem' }} stroke={1.5} />, 
    label: 'Marketplace', 
    path: '/',
    requiresAuth: false
  },
];

const privateMenuItems = [
  { 
    icon: <IconCode style={{ width: '1.5rem', height: '1.5rem' }} stroke={1.5} />, 
    label: 'My Designs', 
    path: '/designs',
    requiresAuth: true
  },
  { 
    icon: <IconUpload style={{ width: '1.5rem', height: '1.5rem' }} stroke={1.5} />, 
    label: 'My Uploads', 
    path: '/uploads',
    requiresAuth: true
  },
  { 
    icon: <IconBox style={{ width: '1.5rem', height: '1.5rem' }} stroke={1.5} />, 
    label: 'My Orders', 
    path: '/orders',
    requiresAuth: true
  },
  // { 
  //   icon: <IconTools size={32} stroke={1}/>, 
  //   label: 'Pedro', 
  //   path: '/dashboard/pedro' 
  // },
];

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();
  const [showLoginModal, setShowLoginModal] = useState(false);
  
  // Handle click on protected items when not authenticated
  const handleNavClick = (e: React.MouseEvent, item: { path: string, requiresAuth: boolean }) => {
    if (item.requiresAuth && !isAuthenticated) {
      e.preventDefault();
      
      // Store redirect path for post-login navigation
      localStorage.setItem('redirectPath', item.path);
      
      // Show login modal instead of redirecting
      setShowLoginModal(true);
    }
  };

  // Render all menu items, but handle authentication on click
  return (
    <div>
      {/* Public menu items - always visible */}
      {publicMenuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => 
            `menu-item ${isActive && "active"}`
          }
        >
          <div className="menu-item-content">
            <div className="menu-item-icon">{item.icon}</div>
            <span>{item.label}</span>
          </div>
        </NavLink>
      ))}

      {/* Private menu items - always visible but login required when clicked */}
      {privateMenuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={(e) => handleNavClick(e, item)}
          className={({ isActive }) => 
            `menu-item ${isActive && "active"}`
          }
        >
          <div className="menu-item-content">
            <div className="menu-item-icon">{item.icon}</div>
            <span>{item.label}</span>
          </div>
        </NavLink>
      ))}

      {/* Login Modal */}
      <LoginModal opened={showLoginModal} setOpened={setShowLoginModal} />
    </div>
  );
};

export default DashboardSidebar; 