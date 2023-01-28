import React from "react";
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import AboutSection from './AboutSection';

const About = () => {
    return (
        <div className="aboutus">
            <Header />
            <Nav />
            <div className="Aboutpage">
            <h1>About Us</h1>
            <AboutSection />
          </div>
    <Footer />

        </div>
    );
};


export default About;