import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../Dashboard';
import EditModel from '../pages/Uploads/components/EditModel/EditModel';
const Marketplace = lazy(() => import('../pages/Marketplace/Marketplace'));
const Prefabs = lazy(() => import('../pages/Prefabs/Prefabs'));
const Components = lazy(() => import('../pages/Components/Components'));
const PrefabDetailPage = lazy(() => import('../pages/Marketplace/PrefabDetailPage'));
const ComponentDetailPage = lazy(() => import('../pages/Marketplace/ComponentDetailPage'));
const Designs = lazy(() => import('../pages/Designs/Designs'));
const Uploads = lazy(() => import('../pages/Uploads/Uploads'));
const Orders = lazy(() => import('../pages/Orders/Orders'));
const ProfilePage = lazy(() => import('../pages/ProfilePage/ProfilePage'));
const Pedro = lazy(() => import('../pages/Pedro/Pedro'));

const DashboardRoutes: React.FC = () => {
  return (
    <Dashboard>
      <Routes>
        <Route path="/" element={<Marketplace />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/marketplace/prefabs" element={<Prefabs />} />
        <Route path="/marketplace/components" element={<Components />} />
        <Route path="/prefab/:id" element={<PrefabDetailPage />} />
        <Route path="/marketplace/prefab/:id" element={<PrefabDetailPage />} />
        <Route path="/component/:id" element={<ComponentDetailPage />} />
        <Route path="/marketplace/component/:id" element={<ComponentDetailPage />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/uploads" element={<Uploads />} />
        <Route path="/uploads/:id" element={<EditModel />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/pedro" element={<Pedro />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Dashboard>
  );
};

export default DashboardRoutes; 