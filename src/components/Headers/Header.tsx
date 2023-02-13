import React from 'react';
import HeaderStyle from './Header.module.css';

const Header = () => {
    return (
        <header className={HeaderStyle.headers}>
            <img src='https://w7.pngwing.com/pngs/307/98/png-transparent-web-development-react-github-angularjs-javascript-science-and-technology-leaf-text-logo.png' alt='logo'/>
        </header>
    );
}

export default Header;