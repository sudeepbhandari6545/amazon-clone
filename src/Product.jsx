import React from 'react';
import './Product.css';

const Product = () => {
  return (
    <div className="product">
      <div className="product_info">
        <p>The lean startup</p>
        <p className="product_price">
          <small>$</small>
          <strong>20</strong>
        </p>
        <div className="product_rating">
          <p>⭐</p>
        </div>
      </div>
      <img src="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg" />
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
