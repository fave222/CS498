'use client';

import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../images/cash-in-hand-icon.png';

import login_svg from '../images/profile-circle.svg';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


import Sidebar from './sidebar';

import React from 'react';

import styles from '@/styles/Topbar.module.css';

import Link from 'next/link';
import Image from 'next/image';




class Topbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showSideNav: false};
    }


    handleClick() {
        this.setState({showSideNav: !this.state.showSideNav});
    }

    render() {
        return (
            <div className='Navbar'>
                <Navbar className={styles.navContainer} bg="mainColor" variant="dark" expand="md" fixed="top">


                        <div className={styles.logo}>
                            <Image src={logo} alt="logo" />
                            <h3> Modern<br/>Funding </h3>
                        </div>

                        <Navbar.Toggle id="mobile-collapse-btn" aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className={styles.middleNav} id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link className={styles.navLink} href="#home">Home</Nav.Link>
                            
                            <Link href="/sign-up">
                                <Button className={styles.signUpBtn} id="sign-up-btn">Sign Up</Button>
                            </Link>

                            
                        </Nav>

                        
                        </Navbar.Collapse>

                        <div className={styles.loginContainer}>
                            <div className={styles.loginButton} onClick={() => this.handleClick()}>
                                <Image src={login_svg} alt="logo"/>
                            </div>
                        </div>
                </Navbar>


                <Sidebar
                    showSideNav={this.state.showSideNav}
                />
            </div>
        );
    }
}

export default Topbar;



