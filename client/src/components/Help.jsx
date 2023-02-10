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
            </h1>
        </div>
    )

}

export default Help;