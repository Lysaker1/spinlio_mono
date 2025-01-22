import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../Dashboard';

const Prefabs = lazy(() => import('../pages/Prefabs/Prefabs'));
const Designs = lazy(() => import('../pages/Designs/Designs'));
const Uploads = lazy(() => import('../pages/Uploads/Uploads'));
const Orders = lazy(() => import('../pages/Orders/Orders'));

const DashboardRoutes: React.FC = () => {
  return (
    <Dashboard>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/designs" replace />} />
        <Route path="prefabs" element={<Prefabs />} />
        <Route path="designs" element={<Designs />} />
        <Route path="uploads" element={<Uploads />} />
        <Route path="orders" element={<Orders />} />
      </Routes>
    </Dashboard>
  );
};

export default DashboardRoutes; 