import React, { useState } from "react";
import useTShirts from "../../hooks/useTShirts";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";
import "./Home.css";

const Home = () => {
  const [tShirts] = useTShirts();
  const [cart, setCart] = useState([]);

  /*   
    Conditional rendering===> 
    1. Element variable
    2. Ternary operator
    3. && (shorthand)
    4. || (shorthand)
*/

  // // 1. Element variable
  // let command;
  // if (cart.length === 0) {
  //     command = <p>Please add to cart</p>
  // }

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
        {/* {command} */}
        {/* 2. Ternary operator */}
        {cart.length <= 5 && cart.length !== 0 ? (
          <p>Add More items</p>
        ) : (
          <p></p>
        )}
        {/* 3. && (shorthand)*/}
        {cart.length === 0 && <p>Please add to cart</p>}
        {cart.map((tShirt) => (
          <Cart
            key={tShirt._id}
            tShirt={tShirt}
            handleRemoveFromCart={handleRemoveFromCart}
          ></Cart>
        ))}
        {/* 4. || (shorthand)  */}
        {cart.length < 5 || <button>Remove All</button>}
      </div>
    </div>
  );
};

export default Home;
