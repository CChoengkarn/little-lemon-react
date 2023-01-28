import React from "react";
import david from '../images/david.png';
import sarah from '../images/sarah.png';
import katie from '../images/katie.png';
import Testimonial from "./Testimonial";
import stars from '../images/stars.png';


const Testimonials = () => {
    return (
        <section id="testimonials">
            <div className="container">
                <h2>Testimonials</h2>
                <div>
                    <Testimonial
                    photo={david}
                    name="David S."
                    stars={stars}
                    content="Wonderful experience, customer serivce was great, and food was amazing!"
                    />
                    <Testimonial
                    photo={sarah}
                    name="Sarah R."
                    stars={stars}
                    content="Best restaurant in town! If you're looking for great Mediterranean food, come here!"
                    />
                    <Testimonial
                    photo={katie}
                    name="Katie P."
                    stars={stars}
                    content="I couldn't have asked for better service. Server was attentive and the food was excellent."
                    />
                </div>
            </div>
        </section>
    )
}

export default Testimonials;