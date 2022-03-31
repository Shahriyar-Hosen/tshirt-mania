import React from "react";
import "./Cart.css";

const Cart = ({ tShirt, handleRemoveFromCart }) => {
  return (
    <div className="select-items">
      <p>
        Name: {tShirt.name} <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
      </p>
    </div>
  );
};

export default Cart;
