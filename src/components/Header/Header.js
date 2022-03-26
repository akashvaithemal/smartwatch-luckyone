import React from 'react';
import logo from '../../logo.svg'
import './Header.css';


const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt='' />
         <h1>Smart Watch Zone</h1>
        </nav>
    );
};

export default Header;