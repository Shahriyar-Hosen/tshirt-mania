import React, { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./GrandPa.css";

/**
 * context api
 * 1. call createContext with a default value
 * 2. set a variable of the context with uppercase
 * 3. Make sure you export the context to use it in other places
 * 4. Wrap you child content using RingContext.Provider
 * 5. Provide a value
 * 6. to consume the context from child component
 * 7. useContext hook and you will you need to pass the contextName
 * 8. Make sure you take notes...
 *  */

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
