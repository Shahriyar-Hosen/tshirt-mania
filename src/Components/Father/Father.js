import React from "react";
import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";
import "./Father.css";

const Father = ({ house }) => {
  return (
    <div>
      <h1>Father</h1>
      <p>
        <small>{house}</small>
      </p>
        <MySelf  house={house}></MySelf>
        <Brother  house={house}></Brother>
        <Sister  house={house}></Sister>
    </div>
  );
};

export default Father;
