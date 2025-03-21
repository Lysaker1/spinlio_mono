import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
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

const menuItems = [
  { 
    icon: <IconHomeHeart style={{ width: '1.5rem', height: '1.5rem' }} stroke={1.5} />, 
    label: 'Marketplace', 
    path: '/marketplace' 
  },
  { 
    icon: <IconCode style={{ width: '1.5rem', height: '1.5rem' }} stroke={1.5} />, 
    label: 'My Designs', 
    path: '/designs' 
  },
  { 
    icon: <IconUpload style={{ width: '1.5rem', height: '1.5rem' }} stroke={1.5} />, 
    label: 'My Uploads', 
    path: '/uploads' 
  },
  { 
    icon: <IconBox style={{ width: '1.5rem', height: '1.5rem' }} stroke={1.5} />, 
    label: 'My Orders', 
    path: '/orders' 
  },
  // { 
  //   icon: <IconTools size={32} stroke={1}/>, 
  //   label: 'Pedro', 
  //   path: '/dashboard/pedro' 
  // },
];

const DashboardSidebar: React.FC = () => {
  return (
    <div>
      {menuItems.map((item) => (
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
    </div>
  );
};

export default DashboardSidebar; 