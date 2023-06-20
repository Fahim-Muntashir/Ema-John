import React from "react";
import "./Header.css";
import Logo from "../../../src/images/Logo.svg";

const Header = () => {
  return (
    <nav>
      <a href="">
        <img src={Logo} alt="" />
      </a>
      <ul>
        <li>
          <a href="/">Shop</a>
        </li>
        <li>
          <a href="/orders">Orders</a>
        </li>
        <li>
          <a href="/inventory"> Inventory</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
