import './App.css';

//importing react
import React from 'react'

import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import { Link } from 'react-router-dom';
/*
import {BrowserRouter as Router} from "react-router-dom"
*/
import { redirect } from 'react-router-dom';

import { Navigate } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login';

import Header from './components/Header';
import Help from './components/Help';
import Signup from './components/Sign-Up';


function App() {
  return (
    <div className = "App">
    {/* This is the alias of BrowserRouter i.e. Router */}
    <BrowserRouter>

    
    <div className = "container">

   
      <Routes>


      <Route path="/" element={<Login/>} />
        {/* This route is for about component 
        with exact path "/about", in component 
        props we passes the imported component*/}
        <Route path="/Home" element={<Home/>} />
          
        {/* This route is for contactus component
        with exact path "/contactus", in 
        component props we passes the imported component*/}
        <Route path="/Help" element={<Help/>} />

        <Route path="/Login" element={<Login/>} />
   
        <Route path="/Sign-up" element={<Signup/>} />
        {/* If any route mismatches the upper 
        route endpoints then, redirect triggers 
        and redirects app to home component with to="/" */}
      </Routes>
      </div>
    </BrowserRouter>
    
  </div>
  );
}

export default App;
