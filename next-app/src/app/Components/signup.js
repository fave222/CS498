import React from "react";

import { FaEye } from "react-icons/fa";

import { useRef, useState } from "react";

import "../Styles/login.css";

import "../Styles/signup.css";

import Link from 'next/link';

function SignUp() {
    const usernameRef = useRef()
    const passwordRef = useRef()

    const [showPassword, setShowPassword] = useState(false);

    function handleSubmit(event) {
      event.preventDefault();

      console.log({
          username: usernameRef.current.value,
          password: passwordRef.current.value,
      })
    }

    function togglePasswordVisibility() {
      setShowPassword(!showPassword);
    }

    return (
      <div className="login-container">
        <div className="login-panel">
          <form onSubmit={handleSubmit}>
            <h2 className="title">Website Name</h2>
            <div className="input-group">

              <input type="text" 
                id="username" 
                ref={usernameRef}
                placeholder="Username"
                required
                />

            </div>

            <div className="input-group">

              <input 
                type={showPassword ? 'text' : 'password'} 
                id="password" ref={passwordRef}
                required
                placeholder="Password"
                />
              <i onClick={togglePasswordVisibility} ><FaEye size={25}/></i>
            </div>
            <a className="forgot-password" href="#forgot password">Forgot password?</a>


            <button id="new-account" type="submit">Create Account</button>

            <Link className="login-redirect" to="/login">Already have an account?</Link>
          </form>
        </div>
      </div>
    );
}

export default SignUp;