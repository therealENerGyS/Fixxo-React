import React from "react";
import { NavLink } from "react-router-dom";

const CMenuIcon = ({ link, icon, quantity }) => {
  return (
    <NavLink className="product-icon" to={link} end>
      <span className="product-qty">{quantity}</span>
      <i className={icon}></i>
    </NavLink>
  );
};

export default CMenuIcon;
