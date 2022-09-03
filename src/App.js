import React from 'react';
import Home from './Components/Home/Home';
import { Routes, Route } from "react-router-dom";
import BestEmployee from './Components/BestEmployee/BestEmployee';
import BestBranches from './Components/BestBranches/BestBranches';
import Login from './Components/LoginSignUp/Login/Login';
import SignUp from './Components/LoginSignUp/SignUp/SignUp';
import TermsAndCondition from './Components/TermsAndCondition/TermsAndCondition';

function App() {
  return (
    <>
    <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='bestEmployee' element={<BestEmployee/>}/>
        <Route path='bestBranch' element={<BestBranches/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='termsCondition' element={<TermsAndCondition/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
