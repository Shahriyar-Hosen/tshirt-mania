import React from "react";
import "./MySelf.css";

const MySelf = ({ house }) => {
  return (
    <div>
      <h1>My Self</h1>
      <p>
        <small>{house}</small>
      </p>
    </div>
  );
};

export default MySelf;
