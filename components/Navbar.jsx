import React from "react";
import Link from "next/link";
import logo from "../images/RB.png";
import Image from "next/image";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <div className="logo">
        <Link href="/">
          <Image src={logo} alt="Logo" width={50} height={50} />
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
