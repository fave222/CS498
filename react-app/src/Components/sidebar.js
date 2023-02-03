import ListGroup from "react-bootstrap/ListGroup";
import logo from './..\\Images\\cash-in-hand-icon.png';
import login_svg from './..\\Images\\profile-circle.svg';

import Container from "react-bootstrap/Container";

import "./../Styles/sidebar.css";

import { BrowserRouter, Route, Link } from "react-router-dom";

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

                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <a href=""> Inbox </a>
                    <a href=""> Dashboard </a>
                    <a href=""> Balance </a>
                    <a href=""> Investing </a>
                    <a href=""> Seek Funds </a>
                    

                </div>
            </div>


            
        </div>
    );


}

export default Sidebar;
