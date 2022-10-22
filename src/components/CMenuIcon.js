import React from "react";
import { NavLink } from "react-router-dom";

const CMenuIcon = ({ link, icon, quantity, hideMobile }) => {
  return (
    <NavLink
      className={`product-icon ${hideMobile ? "hidden" : ""}`}
      to={link}
      end
    >
      <span className="product-qty">{quantity}</span>
      <i className={icon}></i>
    </NavLink>
  );
};

export default CMenuIcon;
