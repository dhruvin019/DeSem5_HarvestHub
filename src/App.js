import React from 'react'
import './App.css';

import Login from './component/Login';
import Signup from './component/Signup';
import Home from './component/Home';
import Farmer from './component/Farmer';
import Trader from './component/Trader';

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  return (
   <div>    
    <Routes>
      <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/farmer" element= {<Farmer/>}/>
      <Route path="/trader" element= {<Trader/>}/>
      
    </Routes>
   </div> 
   
  );
}

export default App;
