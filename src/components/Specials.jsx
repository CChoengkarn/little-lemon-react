import React from 'react';
import FoodSection from './FoodSection'

const Specials = () => {
    return (
        <section id="specials">
            <div className="container">
                <div className="content">
                    <h2>This Week's Specials</h2>
                    <button>Order Online</button>
                </div>
                <FoodSection />
            </div>
        </section>
    )
}

export default Specials;