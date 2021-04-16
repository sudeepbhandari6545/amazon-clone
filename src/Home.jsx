import React from 'react';
import Product from './Product';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            title="sudeep bhandari"
            price="39.99"
            image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
            rating={5}
          />
          <Product />

          {/* product */}
        </div>
        <div className="home_row">
          {/* product */}
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home_row">
          {/* product */}
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Home;
