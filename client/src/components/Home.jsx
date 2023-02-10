import React from "react";
import Header from "../components/Header"
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";
import{ useEffect, useState } from "react"




    
function Home  (){
    return (
        <div>
            <h1>
                Home Page
                <Header>

                </Header>
            </h1>
        </div>
    )

}
export default Home;