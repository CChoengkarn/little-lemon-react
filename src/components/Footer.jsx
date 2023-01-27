import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom'



const Footer =() => {
    return  (
            <section id="footer">
            <div className="container">
            <img src={logo} alt="Logo" />
            <ul>
                <li>Links</li>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>
                    <Link to="/booking">Reservations
                    </Link>
                </li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
            <ul>
                <li>Contact</li>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            <ul>
            <li>Social Media</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            </ul>
            </div>
            </section>
    );
};

export default Footer;