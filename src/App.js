import React from 'react';
import Home from './Components/Home/Home';
import { Routes, Route } from "react-router-dom";
import BestEmployee from './Components/BestEmployee/BestEmployee';
import BestBranches from './Components/BestBranches/BestBranches';

function App() {
  return (
    <>
    <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='bestEmployee' element={<BestEmployee/>}/>
        <Route path='bestBranch' element={<BestBranches/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
