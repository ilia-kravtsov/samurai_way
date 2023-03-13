import React from 'react';
import HeaderStyle from './Header.module.css';

const Header = () => {
    return (
        <header className={HeaderStyle.headers}>
            <img src='https://knackforge.com/wp-content/uploads/2022/11/Benefits-of-ReactJS.jpg' alt='logo'/>
        </header>
    );
}

export default Header;