import { FaBars, FaTimes } from "react-icons/fa";

import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './..\\Images\\cash-in-hand-icon.png';

import login_svg from './..\\Images\\profile-circle.svg';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


import Sidebar from './sidebar';

import React from 'react';
import ReactDOM from 'react-dom/client';

import "../Styles/navbar.css";


import { BrowserRouter, Route, Link } from "react-router-dom";


class MyNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showSideNav: false};
    }


    handleClick() {
        this.setState({showSideNav: !this.state.showSideNav});
    }

    render() {
        return (
            <div className="Navbar">
                <Navbar bg="mainColor" variant="dark" expand="md" fixed="top">


                        <div className="logo">
                            <img src={logo}/>
                            <h3> Logo </h3>
                        </div>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            
                            <Link to="/sign-up">
                                <Button>Sign Up</Button>
                            </Link>

                            
                        </Nav>

                        <div className="login-button" onClick={() => this.handleClick()}>
                            <img src={login_svg}/>
                        </div>
                        </Navbar.Collapse>
                </Navbar>


                <Sidebar
                    showSideNav={this.state.showSideNav}
                />
            </div>
        );
    }
}

export default MyNavbar;



