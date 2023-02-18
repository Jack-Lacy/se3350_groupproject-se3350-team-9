import React from "react";
import Header from "../components/Header"
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";
import{ useEffect, useState } from "react"

//importing CSS file
import "./Login.css";
import "../index.css"
function Login (){
 // React States
 const [errorMessages, setErrorMessages] = useState({});
 const [isSubmitted, setIsSubmitted] = useState(false);

 // User Login info - changing to MONGODB later, just a placeholder
 const database = [
   {
     username: "user1",
     password: "pass1"
   },
   {
     username: "user2",
     password: "pass2"
   }
 ];

 const errors = {
   uname: "invalid username",
   pass: "invalid password"
 };

 const handleSubmit = (event) => {
   //Prevent page reload
   event.preventDefault();

   var { uname, pass } = document.forms[0];

   // Find user login info
   const userData = database.find((user) => user.username === uname.value);

   // Compare user info
   //password SUCCESS or FAIL
   if (userData) {
     if (userData.password !== pass.value) {
       // Invalid password
       setErrorMessages({ name: "pass", message: errors.pass });
     } else {
       setIsSubmitted(true);
     }
   } else {
     // Username not found
     setErrorMessages({ name: "uname", message: errors.uname });
   }
 };

 // Generate JSX code for error message
 const renderErrorMessage = (name) =>
   name === errorMessages.name && (
     <div className="error">{errorMessages.message}</div>
   );

 // JSX code for login form
 const renderForm = (
   <div className="form">
     <form onSubmit={handleSubmit}>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required />
         {renderErrorMessage("uname")}
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
         {renderErrorMessage("pass")}
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
   </div>
 );

    return (

        <div>

        

            <h1>Sign-Up Page

            <Header></Header>
            </h1>
  
            <div className="login-form">
        <div className="title">Sign Up</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>

      <Link to = "/login">Already have an account? Log in</Link> |{"  "}


        </div>


    )//end of return
    };//end of Login Function
export default Login;