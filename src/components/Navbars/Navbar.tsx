import React from 'react';
import navbarStyle from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Friends from "../Friends/Friends";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";

type NavItemType = {
    itemName: string;
    urlName: string;
}

const Navbar = () => {
    return (
        <nav className={navbarStyle.navs}>
            <NavItem urlName='/profile' itemName='Profile'/>
            <NavItem urlName='/messages' itemName='Messages'/>
            <NavItem urlName='/news' itemName='News'/>
            <NavItem urlName='/music' itemName='Music'/>
            <NavItem urlName='/settings' itemName='Settings'/>
            <NavItem urlName='/video' itemName='Video'/>
            <NavItem urlName='/users' itemName='Users'/>
            <FriendsContainer/>
        </nav>
        )
}

const NavItem = (props: NavItemType) => {
    return (
        <div className={navbarStyle.item}>
            <NavLink to={props.urlName}
                     activeClassName={navbarStyle.activeLink}
            >{props.itemName}</NavLink>
        </div>
    )
}

export default Navbar;

type MapStatePropsType = {
    friendName: Array<{ id: string, name: string }>
}

type MapDispatchToPropsType = {}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        friendName: state.messagesPage.companionsData
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {}
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);



