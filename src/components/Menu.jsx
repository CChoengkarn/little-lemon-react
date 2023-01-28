import React from "react";
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import menu from '../images/menu.png'

const Menu = () => {
    return (
        <div className="menu">
             <Header />
             <Nav />
          <div className="wraparound">
          <h1>Menu</h1>
          <img src={menu} alt="menu" className="menuofdishes"/>
          </div>
            <Footer />
        </div>
    );
};


export default Menu;