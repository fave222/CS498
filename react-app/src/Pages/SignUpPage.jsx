import React from "react";

import SignUp from "../Components/signup";

import "./PageStyles/signuppage.css";

function SignUpPage() {
    return (
        <div className="Signup-page">
            <SignUp/>
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

export default SignUpPage;