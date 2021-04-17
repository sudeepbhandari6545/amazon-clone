import React from 'react';
import './Checkout.css';

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div className="checkout_title">add to the basket</div>
      </div>
      <div className="checkout_right">subtotal is here</div>
    </div>
  );
};

export default Checkout;