import React from 'react';
import './Checkoutproduct.css';

const Checkoutproduct = ({ image, title, price, ratting }) => {
  return (
    <div className="checkout_product">
      <img className="checkoutproduct_image" src={image} />
      <div className="checkoutproduct_info">
        <p className="checkoutproduct_title">{title}</p>
        <p className="checkoutproduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct_rating">
          {Array(ratting)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default Checkoutproduct;
