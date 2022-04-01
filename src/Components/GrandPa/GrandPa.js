import React, { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./GrandPa.css";

export const Spacial = createContext("7");

const GrandPa = () => {
  const house = "House: " + 7;
  const gift = "Quran";
  return (
    <Spacial.Provider value={gift}>
      <div className="grand-pa">
        <h2>Grand pa</h2>
        <p>
          <small>{house}</small>
        </p>
        <div style={{ display: "flex" }}>
          <Father house={house}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </div>
      </div>
    </Spacial.Provider>
  );
};

export default GrandPa;
