import React from 'react';
import logo from '../images/logo.png';


const Header = () => {
    return (
        <header>
        <div className="container">
        <img src={logo} width={100} height={150} alt="Logo" />
        </div>
        </header>
 );
};

export default Header;


