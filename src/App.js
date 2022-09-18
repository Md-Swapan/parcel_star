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
import DashboardHome from "./Components/Dashboard/DashboardHome/DashboardHome";
import OrderHistory from "./Components/Dashboard/OrderHistory/OrderHistory";
import TakeService from "./Components/Dashboard/TakeService/TakeService";
import TrackProduct from "./Components/Dashboard/TrackProduct/TrackProduct";
import Offers from "./Components/Dashboard/Offers/Offers";
import Support from "./Components/Dashboard/Support/Support";
import CoverageArea from "./Components/Dashboard/CoverageArea/CoverageArea";
import CreateShopForm from "./Components/Dashboard/CreateShopForm/CreateShopForm";
import TakeServiceForm from "./Components/Dashboard/TakeService/TakeServiceForm";
import TrackProductModal from './Components/Dashboard/TrackProduct/TrackProductModal';
import ProductTracker from './Components/Header/Showcase/ProductTracker';
import TakeServiceAll from './Components/Dashboard/TakeService/TakeServiceall';
import Settings from './Components/Settings/Settings';
import Help from './Components/Help/Help';
import Faq from './Components/Faq/Faq';

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
            <Route
              path="dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route index element={<DashboardHome />}></Route>
              <Route path="order-history" element={<OrderHistory />}></Route>
              <Route path="take-service" element={<TakeService />}></Route>
              <Route path="track-product" element={<TrackProduct />}></Route>
              <Route path="offers" element={<Offers />}></Route>
              <Route path="support" element={<Support />}></Route>
              <Route path="coverage-area" element={<CoverageArea />}></Route>
              <Route path="create-shop" element={<CreateShopForm />}></Route>
            </Route>
            <Route path="take-service" element={<PrivateRoute> <TakeServiceAll /> </PrivateRoute>} />
            <Route path="track-products" element={<PrivateRoute> <TrackProductModal /> </PrivateRoute>} />
            <Route path="settings" element={<PrivateRoute> <Settings /> </PrivateRoute>} />
            <Route path="help" element={<PrivateRoute> <Help /> </PrivateRoute>} />
            <Route path="faq" element={<PrivateRoute> <Faq /> </PrivateRoute>} />
            <Route path="terms-condition" element={<PrivateRoute> <TermsAndCondition /> </PrivateRoute>} />
          </Routes>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
