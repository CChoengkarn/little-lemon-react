import React from "react";
import david from '../images/david.png';
import sarah from '../images/sarah.png';
import katie from '../images/katie.png';
import Testimonial from "./Testimonial";

const Testimonials = () => {
    return (
        <section id="testimonials">
            <div className="container">
                <h2>Testimonials</h2>
                <div>
                    <Testimonial
                    image={david}
                    name="David S."
                    rating="5.0"
                    testimonial="Wonderful experience, customer serivce was great, and food was amazing!"
                    />
                    <Testimonial
                    image={sarah}
                    name="Sarah R."
                    rating="5.0"
                    testimonial="Best restaurant in town! If you're looking for great Mediterranean food, come here!"
                    />
                    <Testimonial
                    image={katie}
                    name="Katie P."
                    rating="5.0"
                    testimonial="I couldn't have asked for better service. Server was attentive and the food was excellent."
                    />
                </div>
            </div>
        </section>
    )
}

export default Testimonials;