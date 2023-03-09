import React from 'react';
import navbarStyle from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Friends from "../Friends/Friends";

type NavItemType = {
    itemName: string;
    urlName: string;
}

type NavBarType = {
    friendName: Array<{id: string, name: string}>
}

const Navbar = (props: NavBarType) => {
    return (
        <nav className={navbarStyle.navs}>
            <NavItem urlName='/profile' itemName='Profile' />
            <NavItem urlName='/messages' itemName='Messages' />
            <NavItem urlName='/news' itemName='News' />
            <NavItem urlName='/music' itemName='Music' />
            <NavItem urlName='/settings' itemName='Settings' />
            <NavItem urlName='/video' itemName='Video' />
            <Friends friendName={props.friendName}/>
        </nav>
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



