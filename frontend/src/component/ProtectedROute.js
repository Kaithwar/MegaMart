import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, element: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  if (loading) {
    // Show a loading spinner or a message while the auth status is being checked
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (isAdmin && user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return <Component {...rest} />;
};

export default ProtectedRoute;
