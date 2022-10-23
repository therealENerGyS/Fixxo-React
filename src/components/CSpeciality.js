import React from "react";
import { NavLink } from 'react-router-dom'

const CSpeciality = (specials) => {
  return (
    <div className="specials-div">
      <div className="specials-text">
        <h4 className="specials-title">{specials.title}</h4>
        <NavLink className="specials-link">Get Started &gt;</NavLink>
      </div>
      <div className="specials-graybox"></div>
    </div>
  );
};

export default CSpeciality;
