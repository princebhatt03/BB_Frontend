import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAdminLoggedIn = sessionStorage.getItem('admin'); 

  if (!isAdminLoggedIn) {
    return (
      <Navigate
        to="/adminLogin"
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;
