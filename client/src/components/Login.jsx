import React from "react";
import Header from "../components/Header"
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";
import{ useEffect, useState } from "react"

function Login (){


    return (

        <div>

        
            <h1>Login Page</h1>
            <Header></Header>
        


        </div>


    )//end of return
    };//end of Login Function
export default Login;