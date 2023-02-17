import React from "react";
import './Navbar.styles.css';
import {ReactComponent as Logo} from './../../images/logo.svg';
import { ReactComponent as ArrowUp } from './../../images/icon-arrow-up.svg';
import { ReactComponent as ArrowDown } from './../../images/icon-arrow-down.svg';
import { ReactComponent as IconCloseMenu } from './../../images/icon-close-menu.svg';
import { ReactComponent as IconMenu } from './../../images/icon-menu.svg';

class Navbar extends React.Component{
    openMenu(e) {
        // const icon = document.getElementById('icon-menu');
        // icon.style.display = 'none';
        // const iconClose = document.getElementById('icon-close-menu');
        // iconClose.style.display = 'block';
    }

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
                        <div className="login-link">
                            Login
                        </div>
                        <div className="register-link">
                            Register
                        </div>
                    </div>
                    <div className="offcanvas-menu">
                        <IconMenu id='icon-menu' onClick={this.openMenu}/>
                        {/* <IconCloseMenu id='icon-close-menu'/> */}
                    </div>
                </nav>
                {/* <div className="fill-page">

                </div> */}
            </React.Fragment>
        );
    }
}

export default Navbar;