import Head from 'next/head'

import SignUpModule from '@/components/signup'

import styles from '@/styles/Home.module.css'

import logo from '@/images/cash-in-hand-icon.png';






export default function SignUpPage() {
    return (
      <>
        <Head>
          <title>Sign Up</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href='favicon.png' />
        </Head>
        <main className={styles.main}>
  
            <SignUpModule/>
  
        </main>
      </>
    )
}