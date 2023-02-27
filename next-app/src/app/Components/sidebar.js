'use client';
import ListGroup from "react-bootstrap/ListGroup";
import logo from "../Images/cash-in-hand-icon.png";
import login_svg from '../Images/profile-circle.svg';

import Link from 'next/link';

import "./../Styles/sidebar.css";

function Sidebar(props) {

    const computedClassName = props.showSideNav ? 'nav-container' : 'nav-container-hidden';

    return (
        <div className={computedClassName}>
            <div className="nav-upper">
                <div className="nav-heading">
                    <div className="nav-brand">
                        <img src={logo}/>
                        <h2>Profile</h2>
                    </div>
                </div>
            </div>
            <div className="list-container">
                <div className="side-nav-list">

                    <Link href="/">Home</Link>
                    <Link href="/login">Login</Link>
                    <a href="#inbox"> Inbox </a>
                    <a href="#dashboard"> Dashboard </a>
                    <a href="#investers"> Investers </a>
                    <a href="#borrowers"> Borrowers </a>

                </div>
            </div>


            
        </div>
    );


}

export default Sidebar;
