import React from 'react'
import main from '../images/main.png';
import { Link } from 'react-router-dom'



const Hero = () => {
    return (
        <section id="hero">
            <div className = "container">
            <div className="content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
            We are a family-owned restaurant, focused on traditional Mediterrean receipes served with a modern twist. 
            </p>
            <button>
                <Link to="/booking">Reserve a Table</Link>
            </button>
            </div>
            <img src={main} alt="Main" />
            </div>
        </section>
    );
};

export default Hero;