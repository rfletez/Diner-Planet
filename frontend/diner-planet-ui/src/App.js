import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import { axios } from 'axios';
import { useNavigate } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route index element={ <Home /> } />
            <Route path='/about' element={ <AboutUs/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;