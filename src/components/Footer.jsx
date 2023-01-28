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
                <li>
                    <Link to="/home">Home
                    </Link>
                </li>
                <li>
                <Link to="/about">About
                    </Link>
                </li>
                <li>
                <Link to="/menu">Menu
                    </Link>
                </li>
                <li>
                    <Link to="/booking">Reservations
                    </Link>
                </li>
                <li>
                <Link to="/order online">Order Online
                    </Link>
                    </li>
                <li>
                <Link to="/login">Login
                    </Link>
                </li>
            </ul>
            <ul>
                <li>Contact</li>
                <li>1111 Ocean Ave Chicago, Illinois</li>
                <li>555-555-5555</li>
                <li>Little.Lemon@gmail.com</li>
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