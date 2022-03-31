import React from "react";
import "./TShirt.css";

const TShirt = ({ tShirt }) => {
  const { name, picture, price, gender } = tShirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <div className="tShirt-info">
        <h2>{name}</h2>
        <p>Price: $ {price}</p>
        <p>Category: {gender}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default TShirt;
