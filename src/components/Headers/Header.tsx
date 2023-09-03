import React from 'react';
import s from './Header.module.scss';
import {NavLink} from "react-router-dom";
import {PropsType} from "./HeaderContainer";

const Header = (props: PropsType) => {
    return (
        <header className={s.headerContainer}>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>
                          <button className={s.logout} onClick={props.logoutTC}>Logout</button>
                          {props.login}
                      </div>
                    : <NavLink to={'/login'} className={s.login}>Login</NavLink>}
            </div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrBK-eMr3u6DP0wzI2zNVrOGDizdwug_pNA&usqp=CAU' alt="miniAva" className={s.miniAva}/>
        </header>
    );
}

export default Header;