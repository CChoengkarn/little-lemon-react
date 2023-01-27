import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
 return (
    <header>
        <nav className="main-nav">
            <ul>
            <li>
            <Link to="/">Login</Link>
            </li>
            <li>
            <Link to="/">About</Link>
            </li>
            <li>
            <Link to="/">Order Online</Link>
            </li>
            <li>
            <Link to="/booking">Reservations</Link>
            </li>
            <li>
            <Link to="/">Menu</Link>
            </li>
            <li>
            <Link to="/">Home</Link>
            </li>
        </ul>
     </nav>
    </header>
 );
};


export default Nav;