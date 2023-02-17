import React from "react";
import Header from "../components/Header"
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";

function Help  (){
    return (
        <div>
            <h1>
                Help Page
                <Header>
                </Header>
                <h1>
                    About The Site
                </h1>
                <p>
                    This site is a tool for Western University professors to create course outlines to use in their courses. 
                    Professors will be able to see previous course outlines and tweak them to make them suitable for their year.
                    
                </p>

                <h1>
                    Commonly asked Questions:
                </h1>
                <p>Q: What is this website used for? <br></br>
                    A: This website is used by western staff and admin to create, edit, and approve course outlines<br></br>
                    <br></br>
                    Q: Can students use this website?<br></br>
                    A: No, this website cannot be used by students<br></br>
                    <br></br>
                    Q: Do I need to upload documents to this site?<br></br>
                    A: No, you will create and edit documents right here on your site in your web browser<br></br>
                    <br></br>

                </p>
            </h1>
        </div>
    )

}

export default Help;