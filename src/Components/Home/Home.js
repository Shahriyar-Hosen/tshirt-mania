import React from "react";
import Cart from "../Cart/Cart";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="tShirts-container">
        <h1>tShirts</h1>
      </div>
      <div className="cart-container">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
