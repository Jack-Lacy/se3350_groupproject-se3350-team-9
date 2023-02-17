import {Link} from "react-router-dom"
//importing react
import React from 'react'
function Header (){
    return (
        <div>
            <h1>
                ECE Course Outline Web-App
            </h1>

            <h4> Options </h4>
            <nav>
                <Link to = "/login">Login</Link> |{"  "}
                <Link to = "/home">Home</Link>|{"  "}
                <Link to = "/help"> Help</Link> | {" "}
            </nav>
        
        </div>
    )
};

export default Header;

