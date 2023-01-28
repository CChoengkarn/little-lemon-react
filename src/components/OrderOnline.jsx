import React from "react";
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import orderonline from '../images/orderonline.png';

const OrderOnline = () => {
    return (
        <div className="orderonline">
            <Header />
            <Nav />
            <div className="order">
            <h1>Order Online</h1>
            <img src={orderonline} alt="mediterranean food" className="mediterraneanfood"/>
            </div>
            <Footer />
        </div>
    );
};


export default OrderOnline;