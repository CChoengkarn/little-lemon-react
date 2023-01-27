import React from 'react';
import salad from '../images/salad.png';
import bruschetta from '../images/bruschetta.png';
import cake from '../images/cake.png';
import FoodInfo from './FoodInfo';

const FoodSection = () => {
    return (
        
        <div className="foodsection">
            <FoodInfo
            image={salad}
            itemname="Greek Salad"
            price="$12.99"
            description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons."
            />
            <FoodInfo
            image={bruschetta}
            itemname="Bruschetta"
            price="$5.99"
            description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
            />
            <FoodInfo
            image={cake}
            itemname="Lemon Cake"
            price="$5.00"
            description="This comes straight from grandma’s recipe book, every last ingredients has been sourced and is as authentic as can be imagined."
            />
             </div>

    );
}

export default FoodSection;