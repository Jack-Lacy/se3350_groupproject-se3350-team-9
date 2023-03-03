import React from "react";
import Header from "../components/Header"
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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
            <ReactQuill
            
            />
        </div>
    )

}
export default Home;