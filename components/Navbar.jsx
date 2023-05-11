import React from "react";
import Link from "next/link";
import logo from "../images/RB.png";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <div className="logo">
        <Link href="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
