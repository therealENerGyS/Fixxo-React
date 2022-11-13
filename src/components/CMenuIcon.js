import React from "react";
import { NavLink } from "react-router-dom";

const CMenuIcon = ({ link, icon }) => {
  return (
    <NavLink className={`product-icon`} to={link} end>
      <i className={icon}></i>
    </NavLink>
  );
};

export default CMenuIcon;
