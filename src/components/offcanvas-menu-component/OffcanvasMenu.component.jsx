import React from "react";
import { ReactComponent as ArrowUp} from './../../images/icon-arrow-up.svg';
import {ReactComponent as ArrowDown} from './../../images/icon-arrow-down.svg';
import { ReactComponent as IconCloseMenu } from './../../images/icon-close-menu.svg';
import "./OffcanvasMenu.styles.css"

class OffcanvasMenu extends React.Component {

    render() {
        return(
            <div id='offcanvas-menu'>
                <IconCloseMenu id='icon-close-menu' onClick={this.props.closeMenu}/>
                <div id='background' />
                <div id='menu'>
                    <div id="offcanvas-links">
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
                    <div id="offcanvas-profile-links">
                        <div className="login-link">
                            Login
                        </div>
                        <div className="register-link">
                            Register
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OffcanvasMenu