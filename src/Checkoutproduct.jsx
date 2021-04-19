import React from 'react';

const Checkoutproduct = () => {
  return (
    <div className="checkout_product">
      <img className="checkoutproduct_image" src={image} />
      <div className="checkoutproduct_info">
        <p className="checkoutproduct_title">{title}</p>
        <p className="checkoutproduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
    </div>
  );
};

export default Checkoutproduct;
