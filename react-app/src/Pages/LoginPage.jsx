import React from "react";
import MyNavbar from "../Components/navbar";
import Login from "../Components/login";


import "./PageStyles/loginpage.css";

function LoginPage() {
    return (
        <div className="Loginpage">
            <Login/>
        </div>
    )
}

// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}


export default LoginPage;