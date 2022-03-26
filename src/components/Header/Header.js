import React from 'react';
import logo from '../../logo.svg'
import './Header.css';


const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt='' />
            
        <div>
         
           <h1>Smart Watch Zone</h1>
        </div>
        </nav>
    );
};

export default Header;