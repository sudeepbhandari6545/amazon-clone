import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';

const Subtotal = () => {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>subtotal(0 items)</p>
            <strong>0</strong>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This Order Contain a Gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prefex={''}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
