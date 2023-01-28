import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import facebookicon from '../images/facebookicon.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import addressicon from '../images/addressicon.png';
import phoneicon from '../images/phoneicon.png';
import emailicon from '../images/emailicon.png';


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
                <li><img src={addressicon} className="addressicon" alt="addressicon" />1111 Ocean Ave Chicago, Illinois</li>
                <li><img src={phoneicon} className="phoneicon" alt="phoneicon" />555-555-5555</li>
                <li><img src={emailicon} className="emailicon" alt="emailicon" />Little.Lemon@gmail.com</li>
            </ul>
            <ul>
            <li>Social Media</li>
            <li>Facebook <img src={facebookicon} className="facebook" alt="facebook" /></li>
            <li>Instagram <img src={instagram} className="instagram" alt="instragram" /></li>
            <li>Twitter <img src={twitter} className="twitter" alt="twitter" /></li>
            </ul>
            </div>
            </section>
    );
};

export default Footer;