import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from './components/ui/toaster.jsx';

const Layout = () => {
  return (
    <div>
      <Toaster />
      <Outlet />
    </div>
  );
};

export default Layout;
