import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
 return (
    <header>
        <nav className="main-nav">
            <ul>
            <li>
            <Link to="/login">Login</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/order online">Order Online</Link>
            </li>
            <li>
            <Link to="/booking">Reservations</Link>
            </li>
            <li>
            <Link to="/menu">Menu</Link>
            </li>
            <li>
            <Link to="/home">Home</Link>
            </li>
        </ul>
     </nav>
    </header>
 );
};


export default Nav;