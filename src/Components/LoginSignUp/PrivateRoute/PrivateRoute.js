import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "./../../../Hooks/useAuth";
import loadergif from "../../../assets/img/loader.gif";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation()

  if (loading) {
    return (
      <div className="loader-container d-flex justify-content-center" role="status" style={{marginTop: "40vh"}}>
        <img src={loadergif} alt="" />
      </div>
    );
  }

  if(!user.email){
    return <Navigate to="/login" state={{from: location}} replace/>
  }

  return children;
};

export default PrivateRoute;
