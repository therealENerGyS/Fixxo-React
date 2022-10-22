import React from "react";
import { NavLink } from "react-router-dom";
import CMenuIcon from "../components/CMenuIcon";

const SMainMenu = () => {
  return (
    <nav className="top-menu">
      <div className="_container">
        <NavLink className="logo" to="/" end>
          Fixxo.
        </NavLink>
        <div className="menu-links d-flex">
          <NavLink className="menu-link" to="/" end>
            Home
          </NavLink>
          <NavLink className="menu-link" to="/categories" end>
            Categories
          </NavLink>
          <NavLink className="menu-link" to="/products">
            Products
          </NavLink>
          <NavLink className="menu-link" to="/contacts" end>
            Contacts
          </NavLink>
        </div>
        <div className="product-links d-flex">
          <CMenuIcon link="/search" icon="fa-regular fa-magnifying-glass" />
          <CMenuIcon link="/compare" icon="fa-regular fa-code-compare" />
          <CMenuIcon quantity="1" link="/wishlist" icon="fa-regular fa-heart" />
          <CMenuIcon quantity="3" link="/shopping-cart" icon="fa-regular fa-bag-shopping" />
        </div>
      </div>
    </nav>
  );
};

export default SMainMenu;
