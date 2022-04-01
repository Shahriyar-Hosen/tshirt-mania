import React from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./GrandPa.css";

const GrandPa = () => {
  const house = 7;
  return (
      <div  className="grand-pa">
        <h2>Grand pa</h2>
        <p>
          <small>{house}</small>
        </p>
        <div  style={{ display: "flex" }}>
          <Father house={house}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </div>
      </div>
  );
};

export default GrandPa;
