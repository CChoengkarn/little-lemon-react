import React from 'react';

function Main() {
    return(
    <div class="Main">
        <section class="Heading">
            <h2>Little Lemon</h2>
            <br>Chicago</br>
            <p>This is a Mediterranean restaurant with a modern twist.</p>
            <img src="/images/Main photo.png"></img>
            <button class="reservation" type="button">Reserve a table</button>
        </section>
        <section class="Specials">
            <h2>Specials</h2>
            <button class="Online delivery" type="button">Order online</button>
        </section>
        <div class="row">
            <div class="column">
                <img src="/images/Greek salad.png"></img>
                <h2>Greek Salad $12.99</h2>
                <p>Famous greek salad of crispy lettuce...</p>
                <br>Order Online</br>
            </div>
            <div class="column">
                <img src="/images/Bruschetta.png"></img>
                <br>Bruschetta</br>
                <p>Our bruschetta is made from grilled bread...</p>
                <br>Order Online</br>
            <div class="column">
                <img src="/images/Lemon Cake.png"></img>
                <br>Lemon Cake $5.99</br>
                <p> Our lemon cake is made with the finest ingredients...</p>
                <br>Order Online</br>
        <section class="testimonials">
                <h2>Testimonials</h2>
            <div class="row">
                <div class="column">
                    <h2>5 stars</h2>
                    <p>Wonderful experience, food was amazing!!!</p>
                </div>
                <div class="column">
                    <h2> 5 stars</h2>
                    <p>Best restaurant in town! If you're looking for great Mediterranean food with a twist, come here!</p>
                </div>
                <div class="column">
                    <h2> 5 stars</h2>
                    <p>I couldn't have asked for better service. Server was attentive and the food was excellent.</p>
                <div class="column">
                    <h2> 5 stars</h2>
                    <p>I came upon this place accidently and decided to give it a try and i'm so glad I did! Food was amazing! I'll be coming back again.</p>
                <section class="main bottom section">
                <img src="/images/Asset 9@4x.png" alt="little lemon logo for bottom of webpage"></img>
                    <h2>About Us</h2>
                    <p>Little Lemon</p>
                    <br>Chicago</br>
                    <p>This is a Mediterranean restaurant with a modern twist</p>
                    <img src="/images/Adrian.png" alt="profile picture of Adrian">Adrian</img>
                    <img scr="/images.Mario.png" alt="profile picture of Mario">Mario</img>
                </section>
                </div>
                </div>
                </div>
            </section>
            </div>
            </div>
         </div>
    </div>
)};

export default Main;