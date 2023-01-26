import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
 return (
    <nav className="main-nav">
            <ul>
            <Link to="/bookingpage">Booking Page</Link>
            <Link to="/login">Login</Link>
            <Link to="/orderonline">Order Online</Link>
            <Link to="/reservation">Reservation</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/home">Home</Link>
        </ul>
    </nav>
 )
}
export default Nav;