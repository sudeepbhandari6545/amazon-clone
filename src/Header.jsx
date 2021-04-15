import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://logo-logos.com/wp-content/uploads/2016/12/Amazon_logo.png"
      />
      {/* Header search */}
      <div className="header_search">
        <input
          className="header_input"
          type="text"
          placeholder="it's working"
        />
        <SearchIcon className="header_searchicon" />
      </div>
      {/* header navs */}
      <div className="header_nav">
        {/* nav first */}
        <div className="header_nav_option">
          <span className="header_nav_one">Hello guest</span>
          <span className="header_nav_two">Sign In</span>
        </div>
        {/* nav second */}
        <div className="header_nav_option">
          <span className="header_nav_one">Return</span>
          <span className="header_nav_two">& Order</span>
        </div>
        {/* nav third */}
        <div className="header_nav_option">
          <span className="header_nav_one">your</span>
          <span className="header_nav_two">Prime</span>
        </div>
        <div className="header_basket">
          <ShoppingBasketIcon />
          <span className="header_nav_two header_basket_count">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
