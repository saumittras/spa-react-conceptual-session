import React from "react";
import "./Cartcontainer.css";
const Cardcontainer = ({ handleIsActiveState }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Cart Container.jsx</h1>
      <div className="toggle flex justify-between">
        <div
          className="cart-btn btn text-xl font-bold"
          onClick={() => handleIsActiveState("cart")}
        >
          Cart
        </div>
        <div
          onClick={() => handleIsActiveState("about")}
          className="about text-xl btn font-bold"
        >
          About
        </div>
      </div>
    </div>
  );
};

export default Cardcontainer;
