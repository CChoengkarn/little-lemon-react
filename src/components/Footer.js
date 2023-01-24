import React from 'react';
import logo2 from '../images/logo2.png';

function Footer() {
    return  (
        <div className="row">

            <div className="column2">
            <img src={logo2} width={200} height={70} alt="logo2" />
            </div>

            <div className="column2">
                <h4>Links</h4>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Menu</a>
                <a href="#">Reservation</a>
                <a href="#">Order Online</a>
                <a href="#">Login</a>
            </div>

            <div className="column2">
                <h4>Contacts</h4>
                <p>
                    1111 Ocean Drive San Diego, Cake <br /> 555-555-5555 <br />little.lemon@gmail.com
                </p>
            </div>

            <div className="column2">
                <h4>Social Media</h4>
                <ul className="socials">
                <a href="#" class="fa fa-instagram"></a>
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter"></a>
                </ul>
            </div>
            
        </div>
    )


}

export default Footer;