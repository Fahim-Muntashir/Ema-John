import React from "react";
import "./Header.css";
import Logo from "../../../src/images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <a href="/">
        <img src={Logo} alt="" />
      </a>
      <ul>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
        <li>
          <Link to="/inventory"> Inventory</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
