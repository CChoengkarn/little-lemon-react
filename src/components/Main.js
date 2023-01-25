import React from 'react';
import main from '../images/main.png';
import salad from '../images/salad.png';
import bruschetta from '../images/bruschetta.png';
import cake from '../images/cake.png';
import david from '../images/david.png';
import sarah from '../images/sarah.png';
import katie from '../images/katie.png';
import bobby from '../images/bobby.png';
import mario from '../images/mario.png';
import adrian from '../images/adrian.png'; 




function Main() {
    return (
        <section>
            <div className="main">
            <h1>Little Lemon</h1>
            <p>Chicago
            <br/>
            <br/>
            We are a family-owned restaurant, <br/>focused on traditional receipes served with a <br/> modern twist.
            <br/>
            <img src={main} width={400} height={400} alt="Main" />
            </p>
            <button className="button1" type="button" onClick = "alert('Reserve a table')">Reserve a table </button>
            </div>
            <div className="specials">
                <h1>Specials
                <button className="button2" type="button" onClick = "alert('Order Online')"> Order Online</button>
                </h1>
            </div>
            <div className="row">
                <div className="column">
                    <img src={salad} alt="Salad" />
                    <h1>Greek Salad <span style={{color: 'red'}}>$12.99</span></h1>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons. 
                    </p>
                    <button className="button3" type="button" onClick= "alert('Order a Delivery')">Order a Delivery</button>
                </div>
                <div className="column">
                <img src={bruschetta} alt="Bruschetta" />
                   <h1>Bruschetta <span style={{color: 'red'}}>$5.99</span></h1>
                   <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. 
                   </p>
                   <p1>
                   <button className="button3" type="button" onClick= "alert('Order a Delivery')">Order a Delivery</button>
                   </p1>
                </div>
                <div className="column">
                    <img src={cake} alt="Cake" />
                    <h1>Lemon Cake <span style={{color: 'red'}}>$5.00</span></h1>
                    <p>This comes straight from grandma’s recipe book, every last ingredients has been sourced and is as authentic as can be imagined.
                    </p>
                    <button className="button3" type="button" onClick= "alert('Order a Delivery')">Order a Delivery</button>
                    <br/>

                </div>

                <div className="row">
                <h1>Testimonials</h1>

                <div className="column1">
                <p>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </p>
                <h2>David S.</h2>
                <img src={david} width={65} height={90} alt="David" />
                <p>Wonderful experience, customer serivce was great, and food was amazing!</p>
                </div>
               
                <div className="column1">
                <p>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </p>
               <h2>Sarah R.</h2>
               <img src={sarah} width={65} height={90} alt="Sarah" />
                <p>Best restaurant in town! If you're looking for great Mediterranean food, come here!</p>
                </div>

                <div className="column1">
                <p>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </p>
                <h2>Katie P.</h2>
                <img src={katie} width={65} height={90} alt="Katie" />
                <p>I couldn't have asked for better service. Server was attentive and the food was excellent.</p>
                </div>

                <div className="column1">
                <p>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </p>
                <h2>Bobby V.</h2>
                <img src={bobby} width={65} height={90} alt="Bobby" />
                <p>I came upon this place accidently and decided to give it a try. Food was amazing!</p>
                </div>

                <div className="about">
                     <h3>Little Lemon</h3>
                     <h3>Chicago</h3>
                     <p>
                     We are a family-owned restaurant, focused on traditional receipes served with a modern twist. We are two brothers, <br /> Mario and Adrian and we grew up eating our 
                     grandparent's cooking. Our dishes are made from the finest ingredients <br />and sourced from local farms. 
                     </p>
                    <br />
                    <img src={mario} width={200} height={210} alt="Mario" />
                    <img src={adrian} width={220} height={200} alt="Adrian" />
                </div>
                </div>
             </div>
        </section>



)
}

export default Main;