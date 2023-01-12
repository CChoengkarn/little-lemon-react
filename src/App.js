import React from 'react';
import './App.css';
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main';
import Footer from './Footer.js';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Menu from './pages/Menu';
import orderOnline from './pages/orderOnline';
import Reservation from './pages/Reservation';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <React.Fragment>
    <div>
     <Header />
     <div className="Header">
      <img src="..\images\photo1.png" alt="little lemon logo"></img>
      </div>
     <Nav />
     <div className="container">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Menu />} />
        <Route path="/" element={<orderOnline />} />
        <Route path="/" element={<Reservation />} />
      </Routes>
     </div>
     <Main />
     <section>
     <div class="main">
      <div class="col-5">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p1>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p1>
          <br>
          <button class="button1" type="button" onclick = "alert('Reserve a table')">Reserve a table </button>
          </br>
      </div>
      <div class="col-6">
          <img src=".../images/main.png" alt="main"></img>
      </div>
      </div>
      </section>
      <section className="Specials">
          <h3>Specials</h3>
          <button class="button2" type="button" onclick = "alert('Order Online')">Order Online </button>
      </section>
      <section>
      <div>class="row1"</div>
      <div class="column1">
      <img src=".../images/Greek salad.PNG" alt="greek salad"></img>
      <h4>Greek Salad <span style="color:red;">$12.99</span></h4>
      <p2>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons. </p2>
      <br>Order a delivery</br>
  </div>
  <div class="column2">
      <img src=".../images/Bruschetta.png"alt="bruschetta"></img>
      <h5>Bruschetta <span style="color:red;">$5.99</span></h5>
      <p3>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p3>
      <br>Order a delivery</br>
  </div>
  <div class="column3">
      <img src=".../images/Lemon Cake.png" alt="lemon cake"></img>
      <h6>Lemon Cake <span style="color:red;">$5.00</span></h6>
      <p4>This comes straight from grandma’s recipe book, every last ingredients has been sourced and is as authentic as can be imagined. </p4>
      <br>Order a delivery</br>
  </div>
</section>
<section class="Testimonials">
    <h7>Testimonials</h7>
  </section>
  <section class="testimonials">

<div class="column-4-left">
  <p><span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
  </p>
  <p>David S.</p>
  <img src=".../images/David.PNG" width="100px" alt="David"></img>
  <p>Wonderful experience, food was amazing!!!</p>
</div>
<div class="column-4-middle">
  <p><span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
  </p>
  <p>Sarah R.</p>
  <img src=".../images/Sarah.PNG"></img>
  <p>Best restaurant in town! If you're looking for great Mediterranean food with a twist, come here!</p>
</div>
<div class="column-4-middle">
  <p><span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
  </p>
  <p>Katie P.</p>
  <img src=".../images/Katie.PNG"></img>
  <p>I couldn't have asked for better service. Server was attentive and the food was excellent.</p>
</div>
<div class="column-4-right">
  <p><span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
  </p>
  <p>Bobby V.</p>
  <img src=".../images/Bobby.PNG"></img>
  <p>I came upon this place accidently and decided to give it a try. Food was amazing! I'll be coming back again.</p>
</div>
</section>
<section>

    <div className="col-5">
      <h8>Little Lemon</h8>
      <p>Chicago
        <br></br>
        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
      </p>
    <div class="col-6">
      <img src=".../images/Adrian.PNG" alt="Adrian"></img>
      <img src=".../images/Mario.png" alt="Mario"></img>
    </div>
    </div>

  </section>
     <Footer />
     <div class="footer">
      <div class="col-1">
      <img src=".../images/Asset 9@4x.png" alt="bottom logo"></img>
      </div>
      <div class="col-2">
      <h9>Links</h9>
      <br></br>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Menu</a>
      <a href="#">Reservation</a>
      <a href="#">Order Online</a>
      <a href="#">Login</a>
    </div>

    <div class="col-3">
      <h10>Contact</h10>
      <p>1111 Ocean drive San Diego, CA</p>
        <br>555-555-5555</br>
        <br>little.lemon@gmail.com</br>
    </div>
    </div>
    <div class="col-4">
      <h11>Social Media</h11>
      <ul class="socials">
        <li><i href="#"><i class="fa fa-facebook"></i></i></li>
        <li><i href="#"><i class="fa fa-twitter"></i></i></li>
        <li><i href="#"><i class="fa fa-instagram"></i></i></li>
      </ul>
    </div>
    </div>
    </React.Fragment>
  );
  }

export default App;
