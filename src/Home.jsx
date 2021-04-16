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
            title="Get fit at home"
            price="9.99"
            image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
            rating={5}
          />
          <Product
            title="Computers & Accessories"
            price="19.99"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
            rating={5}
          />

          {/* product */}
        </div>
        <div className="home_row">
          {/* product */}
          <Product
            title="Beauty picks"
            price="29.99"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
            rating={5}
          />
          <Product
            title="Find your ideal TV"
            price="99.99"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
            rating={5}
          />
          <Product
            title="Explore home bedding"
            price="59.99"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          {/* product */}
          <Product
            title="Create with strip lights"
            price="159.99"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
