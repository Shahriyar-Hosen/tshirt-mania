import React, { useState } from "react";
import useTShirts from "../../hooks/useTShirts";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";
import "./Home.css";

const Home = () => {
  const [tShirts] = useTShirts();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    const exists = cart.find((tShirt) => tShirt._id === item._id);
    if (!exists) {
      const newCart = [...cart, item];
      setCart(newCart);
    } else {
      alert("This item is already exists");
    }
  };

  const handleRemoveFromCart = (selectItem) => {
    const rest = cart.filter((tShirt) => tShirt._id !== selectItem._id);
    setCart(rest);
  };
  return (
    <div className="home-container">
      <div className="tShirts-container">
        {tShirts.map((tShirt) => (
          <TShirt
            key={tShirt._id}
            tShirt={tShirt}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <h1>Selected Items: {cart.length}</h1>
        {cart.map((tShirt) => (
          <Cart
            key={tShirt._id}
            tShirt={tShirt}
            handleRemoveFromCart={handleRemoveFromCart}
          ></Cart>
        ))}
      </div>
    </div>
  );
};

export default Home;
