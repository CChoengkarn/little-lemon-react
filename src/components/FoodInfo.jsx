import React from 'react'

const FoodInfo = (props) => {
    return (
      <div className="foodinfo">
        <img src={props.image} alt={props.itemname} />
        <div>
          <h4>{props.itemname}</h4>
          <h4 className="price">{props.price}</h4>
        </div>
        <p>{props.description}</p>
        <button>
          <p>Order for delivery</p>
        </button>
      </div>
    );
  };

  export default FoodInfo;