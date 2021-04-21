import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkoutproduct.css';

const Checkoutproduct = ({ id, image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  //  remove from basket
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
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
          {Array(rating)
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
