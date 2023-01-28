import React from 'react'

const FoodInfo = (props) => {
    return (
      <div className="foodinfo">
        <img src={props.photo} alt="food" />
        <div>
          <h4>{props.name}</h4>
          <h4 className="price">{props.price}</h4>
        </div>
        <p>{props.content}</p>
        <button>
          <p>Order for delivery</p>
          <img src={props.bike} alt="bike" className="bike" />
        </button>
      </div>
    );
  };

  export default FoodInfo;