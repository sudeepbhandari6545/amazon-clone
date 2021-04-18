import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

      {/* Header search */}
      <div className="header_search">
        <input className="header_input" type="text" />
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
        <Link to="/checkout">
          <div className="header_basket">
            <ShoppingBasketIcon />
            <span className="header_nav_two header_basket_count">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
