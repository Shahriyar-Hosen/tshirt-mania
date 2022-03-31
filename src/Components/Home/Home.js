import React from "react";
import useTShirts from "../../hooks/useTShirts";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";
import "./Home.css";

const Home = () => {
    const [tShirts] = useTShirts()
  return (
    <div className="home-container">
      <div className="tShirts-container">
        {
            tShirts.map((tShirt) => <TShirt key={tShirt._id} tShirt={tShirt}></TShirt>)
        }
      </div>
      <div className="cart-container">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
