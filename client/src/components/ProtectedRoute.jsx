import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
  return Boolean(localStorage.getItem("token"));
};

export default function ProtectedRoute() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/signup" replace />;
}
