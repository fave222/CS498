import Head from 'next/head'

import Topbar from '@/components/topbar'
import LoginModule from '@/components/login'

import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import logo from '@/images/cash-in-hand-icon.png';






export default function LoginPage() {
    return (
      <>
        <Head>
          <title>Login</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href={logo} />
        </Head>
        <main className={styles.main}>
  
            <LoginModule/>
  
        </main>
      </>
    )
}