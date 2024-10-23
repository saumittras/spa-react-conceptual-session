import React from "react";

import Cart from "../Cart/Cart";
import About from "../About/About";
import "./Cartcontainer.css";

const Cardcontainer = ({ handleIsActiveState, isActive }) => {
  const { cart } = isActive;
  return (
    <div>
      <h1 className="text-2xl font-bold">Cart Container.jsx</h1>
      <div className="toggle flex justify-between">
        <div
          className={`${
            cart
              ? "cart-btn btn text-xl active font-bold"
              : "cart-btn btn font-bold"
          }`}
          onClick={() => handleIsActiveState("cart")}
        >
          Cart
        </div>
        <div
          className={`${
            cart
              ? "cart-btn btn text-xl  font-bold"
              : "cart-btn btn font-bold active"
          }`}
          onClick={() => handleIsActiveState("about")}
        >
          About
        </div>
      </div>
      {cart ? <Cart></Cart> : <About></About>}
    </div>
  );
};

export default Cardcontainer;
