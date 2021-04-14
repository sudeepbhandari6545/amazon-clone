import React from 'react';
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
        <input type="text" placeholder="it's working" />
      </div>
      {/* header navs */}
      <div className="header_nav">
        {/* nav first */}
        <div className="header_nav">
          <span className="header_nav_one">Hello guest</span>
          <span className="header_nav_two">Sign In</span>
        </div>
        {/* nav second */}
        <div className="header_nav">
          <span className="header_nav_one">Return</span>
          <span className="header_nav_two">& Order</span>
        </div>
        {/* nav third */}
        <div className="header_nav">
          <span className="header_nav_one">your</span>
          <span className="header_nav_two">Prime</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
