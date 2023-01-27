import React from "react";
import mario from '../images/mario.png';
import adrian from '../images/adrian.png';

const AboutSection = () => {
    return (
        <section id="aboutsection">
            <div className="container">
                <div className="content">
                    <h2>About Us</h2>
                    <p>
                    We are a family-owned restaurant, focused on traditional receipes served with a modern twist. We are two brothers, Mario and Adrian and we grew up eating our
                     grandparent's cooking. Our dishes are made from the finest ingredients and sourced from local farms.
                    </p>
                    <div className="image-container">
                    <img src={mario}  alt="Mario" />
                    <img src={adrian} alt="Adrian" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;