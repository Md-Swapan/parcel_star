import React from "react";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import BestEmployee from "./Components/BestEmployee/BestEmployee";
import BestBranches from "./Components/BestBranches/BestBranches";
import Login from "./Components/LoginSignUp/Login/Login";
import SignUp from "./Components/LoginSignUp/SignUp/SignUp";
import TermsAndCondition from "./Components/TermsAndCondition/TermsAndCondition";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./Components/LoginSignUp/PrivateRoute/PrivateRoute";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <div className="App">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="best-employee" element={<BestEmployee />} />
            <Route path="best-branch" element={<BestBranches />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="terms-condition" element={<TermsAndCondition />} />
            <Route
              path="dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          
          </Routes>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
