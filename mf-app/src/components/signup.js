import React from "react";
import { FaEye } from "react-icons/fa";
import { useRef, useState } from "react";
import Link from 'next/link';
import { supabase } from './../lib/supabaseClient';
import { useRouter } from 'next/router';




import styles from '@/styles/SignUp.module.css';




function SignUp() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();



    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);

    async function handleSubmit(event) {
      event.preventDefault();

      console.log({
          username: usernameRef.current.value,
          password: passwordRef.current.value,
      });
      
      const email = usernameRef.current.value;
      const password = passwordRef.current.value;

      /* Uncomment to use Supabase DB

      let { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
      });

      if (error) {
        console.error('Error creating account: ', error.message);
      }
      console.log(data);

      */

      router.push("/");


    }

    function togglePasswordVisibility() {
      setShowPassword(!showPassword);
    }

    return (
      <div className={styles.loginContainer}>
        <div className={styles.signUpPanel}>

          <div className={styles.titleContainer}>
            <h2 className={styles.title} onClick={() => {router.push('/');}} >Modern Funding</h2>
          </div>

          <form className={styles.formContainer} onSubmit={handleSubmit}>

            <div className={styles.greeting}>
              <h2 id="welcome"> Welcome new user! </h2>
              <h2> Get started with your account. </h2>
            </div>
            
            <div className={styles.inputGroup}>

              <p>Email</p>
              <input type="text" 
                id="username" 
                ref={usernameRef}
                placeholder="Example@email.com"
                required
                />

            </div>

            <div className={styles.inputGroup}>
              <p>Password</p>
              <input 
                type={showPassword ? 'text' : 'password'} 
                id="password" ref={passwordRef}
                required
                placeholder="Password"
                />
              <i onClick={togglePasswordVisibility} ><FaEye size={25}/></i>
            </div>
            
            <div className={styles.inputGroup}>
              <p>Confirm Password</p>
              <input 
                type={showPassword ? 'text' : 'password'} 
                id="confirm-password" ref={confirmPasswordRef}
                required
                placeholder="Confirm Password"
                />
              <i onClick={togglePasswordVisibility} ><FaEye size={25}/></i>
            </div>




            <button id="new-account" type="submit">Create Account</button>

            <Link href="/login" className={styles.loginRedirect}>Already have an account?</Link>
          </form>
        </div>
      </div>
    );
}

export default SignUp;