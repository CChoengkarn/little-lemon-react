import React from 'react';
import main from '../images/main.png';

function Main() {
    return (
        <section className="main">
            <h1>Little Lemon</h1>
            <p>Chicago
            <br/>
            <br/>
            Little Lemon is a family-owned restaurant, <br/>focused on traditional receipes served with a <br/> modern twist.
            <br/>
            <img src={main} width={400} height={400} alt="Main" />
            </p>
        </section>

)
}

export default Main;