import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Loading from "../pages/shared/Loading/Loading";

const AdminRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const {isAdmin, isAdminLoading} = useAdmin(user.email)
  const location = useLocation();
  if(isAdminLoading) {
    return <Loading></Loading>
  }
  if (user?.uid && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;