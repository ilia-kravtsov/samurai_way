import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.headerContainer}>
            <img alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png' className={s.logo}/>
        </header>
    );
}

export default Header;