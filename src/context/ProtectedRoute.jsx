import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext'; 

const ProtectedRoute = ({ children }) => {
 const { token, user } = useContext(AuthContext);

 // Consider a user authenticated if the token exists and the user object is not null
 const isAuthenticated = token && user;

 return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute
