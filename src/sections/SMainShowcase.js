import React from "react";
import img_1 from "../assets/images/header-img-l.svg";
import img_2 from "../assets/images/header-img-r.svg";

const SMainShowcase = () => {
  return (
    <section className="showcase">
    <div className="_container">
        <img src={img_1} />
        <div className="showcase-text">
        <h1 className="showcase-header">Sale Up</h1>
        <h2 className="showcase-header">To 50% Off</h2>
        <p className="showcase-p">Online shopping free home delivery over $100</p>
        <button type="button" className="btn-theme btn-red">SHOP NOW</button>
        </div>
        <img src={img_2} />
    </div>
    </section>
  );
};

export default SMainShowcase;