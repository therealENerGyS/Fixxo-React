import React from "react";
import { NavLink } from 'react-router-dom'

const CProductCard = ({product}) => {

  const addToWishList = (e) => {
    console.log(`Added to Wishlist`)
  }
  const addToCompare = (e) => {
    console.log("Added to Compare")
  }
  const addToShoppingCart = (e) => {
    console.log("Added to Shopping Cart")
  }

  return (
    <div className="product">
      <div className="product-img">
        <img src={product.img} alt={product.title} />
        <div className="product-menu">
          <button onClick={addToWishList} className="menu-link"><i className="fa-regular fa-heart"></i></button>
          <button onClick={addToCompare} className="menu-link"><i className="fa-regular fa-code-compare fa-flip-horizontal"></i></button>
          <button onClick={addToShoppingCart} className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button>
        </div>
        <NavLink to={`/products/${product.title.toLowerCase().replaceAll(" ", "-")}`} className="btn-theme btn-red btn-theme-product quick-view-btn">
          QUICK VIEW
        </NavLink>
      </div>
      <div className="product-info">
        <h3 className="product-category">{product.category}</h3>
        <h2 className="product-title">{product.title}</h2>
        <div className="product-rating">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <div className="price">
          <p className="discount-price">{product.originalprice}
            <span className="current-price">{product.currentprice}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CProductCard;
