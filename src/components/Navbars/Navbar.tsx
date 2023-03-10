import React from 'react';
import navbarStyle from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Friends from "../Friends/Friends";
import StoreContext from "../../StoreContext";

type NavItemType = {
    itemName: string;
    urlName: string;
}

const Navbar = () => {
    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState();

                return (
                    <nav className={navbarStyle.navs}>
                        <NavItem urlName='/profile' itemName='Profile'/>
                        <NavItem urlName='/messages' itemName='Messages'/>
                        <NavItem urlName='/news' itemName='News'/>
                        <NavItem urlName='/music' itemName='Music'/>
                        <NavItem urlName='/settings' itemName='Settings'/>
                        <NavItem urlName='/video' itemName='Video'/>
                        <Friends friendName={state.messagesPage.companionsData}/>
                    </nav>
                )
            }

        }
        </StoreContext.Consumer>
    );
}

const NavItem = (props: NavItemType) => {
    return (
        <div className={navbarStyle.item}>
            <NavLink to={props.urlName} activeClassName={navbarStyle.activeLink}>{props.itemName}</NavLink>
        </div>
    )
}

export default Navbar;



