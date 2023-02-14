import React from "react";
import './Navbar.styles.css';
import {ReactComponent as Logo} from './../../images/logo.svg';
import { ReactComponent as ArrowUp } from './../../images/icon-arrow-up.svg';
import { ReactComponent as ArrowDown } from './../../images/icon-arrow-down.svg';
import { ReactComponent as IconCloseMenu } from './../../images/icon-close-menu.svg';
import { ReactComponent as IconMenu } from './../../images/icon-menu.svg';

class Navbar extends React.Component{
    render() {
        return(
            <React.Fragment>
                <nav id='navbar'>
                    <Logo />
                    <div id='links'>
                        <div className="dropdown-menu">
                            <span>Features </span>
                            <ArrowUp className='arrow-up'/>
                            <ArrowDown className='arrow-down'/>
                        </div>
                        <div className="dropdown-menu">
                            <span>Company </span>
                            <ArrowUp className='arrow-up'/>
                            <ArrowDown className='arrow-down'/>
                        </div>
                        <div className="link">
                            <span>Careers </span>
                        </div>
                        <div className="link">
                            <span>About </span>
                        </div>
                    </div>
                    <div id="profile-links">
                        <div id="login-link">
                            Login
                        </div>
                        <div id="register-link">
                            Register
                        </div>
                    </div>
                    <div className="offcanvas-menu">
                        <IconMenu id='icon-menu'/>
                        <IconCloseMenu id='icon-close-menu'/>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;


// TODO Add responsiveness to the mobile-view menu toggling