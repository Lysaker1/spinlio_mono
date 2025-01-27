import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  IconTruck, 
  IconBike, 
  IconUpload, 
  IconShoppingCart
} from '@tabler/icons-react';
import '../../Dashboard.css'

const menuItems = [
  { 
    icon: <IconTruck size={32} stroke={1}/>, 
    label: 'Prefabs', 
    path: '/dashboard/prefabs' 
  },
  { 
    icon: <IconBike size={32} stroke={1}/>, 
    label: 'My Designs', 
    path: '/dashboard/designs' 
  },
  { 
    icon: <IconUpload size={32} stroke={1}/>, 
    label: 'My Uploads', 
    path: '/dashboard/uploads' 
  },
  { 
    icon: <IconShoppingCart size={32} stroke={1}/>, 
    label: 'My Orders', 
    path: '/dashboard/orders' 
  },
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