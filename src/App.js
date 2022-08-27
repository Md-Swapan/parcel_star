import React from 'react';
import Home from './Components/Home/Home';
import { Routes, Route } from "react-router-dom";
import BestEmployee from './Components/BestEmployee/BestEmployee';

function App() {
  return (
    <>
    <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='bestEmployee' element={<BestEmployee/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
