import React from "react";
import './Navbar.styles.css';
import {ReactComponent as Logo} from './../../images/logo.svg';
import { ReactComponent as ArrowUp } from './../../images/icon-arrow-up.svg';
import { ReactComponent as ArrowDown } from './../../images/icon-arrow-down.svg';
import { ReactComponent as IconCloseMenu } from './../../images/icon-close-menu.svg';
import { ReactComponent as IconMenu } from './../../images/icon-menu.svg';
import OffcanvasMenu from "../offcanvas-menu-component/OffcanvasMenu.component";

class Navbar extends React.Component{
    toggleMenu(e) {
        const offcanvasMenu = document.querySelector('#mobile-view-menu');
        offcanvasMenu.classList.toggle('hidden');
    }

    render() {
        return(
            <React.Fragment>
                <div id='mobile-view-menu' className='hidden'>
                    <OffcanvasMenu closeMenu={this.toggleMenu} />
                </div>
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
                        <IconMenu id='icon-menu' onClick={this.toggleMenu}/>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;

//TODO: Add some left and right margin for mobile view to look like specification image
//      fix the margins in desktop view