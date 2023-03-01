import React from "react";
import ReactDOM from 'react-dom/client';

import { FaEye } from "react-icons/fa";

import { useRef, useState } from "react";

import styles from '@/styles/Login.module.css';

function Login() {
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
      <div className={styles.loginContainer}>
        <div className={styles.loginPanel}>
          <form onSubmit={handleSubmit}>
            <h2 className={styles.title}>Website Name</h2>
            <div className={styles.inputGroup}>

              <input type="text" 
                id="username" 
                ref={usernameRef}
                placeholder="Example@email.com"
                required
                />

            </div>

            <div className={styles.inputGroup}>

              <input 
                type={showPassword ? 'text' : 'password'} 
                id="password" ref={passwordRef}
                required
                placeholder="Password"
                />
              <i onClick={togglePasswordVisibility} ><FaEye size={25}/></i>
            </div>
            <a className={styles.forgotPassword} href="#forgot password">Forgot password?</a>
            <button id="login" type="submit">Log In</button>
          </form>

          <div className="border"/>

          <p>Don't have an account?</p> 
          <button id="new-account" type="submit">Create new account</button>
          
        </div>
      </div>
    );
}

export default Login;