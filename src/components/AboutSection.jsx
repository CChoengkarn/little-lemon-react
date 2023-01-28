import React from "react";
import mario from '../images/mario.png';
import adrian from '../images/adrian.png';

const AboutSection = () => {
    return (
        <section id="aboutsection">
            <div className="container">
                <div className="content">
                    <h2>Little Lemon <br />
                        Chicago
                    </h2>
                    <p>
                    We are a family-owned restaurant, focused on traditional receipes served with a modern twist. We are two brothers, Mario and Adrian and we grew up eating our
                     grandparent's cooking. Our dishes are made from the finest ingredients and sourced from local farms. You can count on us for delicious and quality food. We opened our doors at our first location in Chicago, Illinois and
                     have been proudly serving the community since 2018. 
                     
                    </p>
                    <div className="img-container">
                    <img src={mario} width={178} alt="Mario" />
                    <img src={adrian} className="top" height={228} width={235}alt="Adrian" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;