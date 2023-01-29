import React from 'react';
import salad from '../images/salad.png';
import bruschetta from '../images/bruschetta.png';
import cake from '../images/cake.png';
import FoodInfo from './FoodInfo';
import bike from '../images/bike.png';

const FoodSection = () => {
    return (
        
        <div className="foodsection">
            <FoodInfo
            photo={salad}
            name="Greek Salad"
            price="$12.99"
            content="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons."
            bike={bike}
            />
            <FoodInfo
            photo={bruschetta}
            name="Bruschetta"
            price="$5.99"
            content="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
            bike={bike}
            />
            <FoodInfo
            photo={cake}
            name="Lemon Cake"
            price="$5.00"
            content="This comes straight from grandma’s recipe book, every last ingredients has been sourced and is as authentic as can be imagined."
            bike={bike}
            />
             </div>

    );
}

export default FoodSection;