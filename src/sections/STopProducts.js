import React from 'react'
import CProductCard from '../components/CProductCard'

const STopProducts = ({products}) => {
  return (
    <section className="top-products">
    <div className="my-container">
      <div className="top-products-container">
        <div className="top-products-flex">
          <h2>Latest Product</h2>
          <div className="products">
            {
                products.map(product => <CProductCard key={product.id} product={product} />)
            }
          </div>
        </div>
        <div className="top-products-flex">
          <h2>Best Selling Product</h2>
          <div className="products">
            <div className="card-product">
              <div className="product-main">
                <div className="product-background">
                  <button
                    type="button"
                    className="btn-theme btn-red btn-theme-product"
                  >
                    QUICK VIEW
                  </button>
                </div>
                <ul className="product-menu">
                  <li><i className="fa-regular fa-heart"></i></li>
                  <li>
                    <i
                      className="fa-regular fa-code-compare fa-flip-horizontal"
                    ></i>
                  </li>
                  <li><i className="fa-regular fa-bag-shopping"></i></li>
                </ul>
              </div>
              <div className="product-info">
                <h3>Category</h3>
                <h2>Modern Black Blouse</h2>
                <div className="product-rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="price">
                  <p className="current-price">$35.00</p>
                </div>
              </div>
            </div>
            <div className="card-product">
              <div className="product-main">
                <div className="product-background">
                  <button
                    type="button"
                    className="btn-theme btn-red btn-theme-product"
                  >
                    QUICK VIEW
                  </button>
                </div>
                <ul className="product-menu">
                  <li><i className="fa-regular fa-heart"></i></li>
                  <li>
                    <i
                      className="fa-regular fa-code-compare fa-flip-horizontal"
                    ></i>
                  </li>
                  <li><i className="fa-regular fa-bag-shopping"></i></li>
                </ul>
              </div>
              <div className="product-info">
                <h3>Category</h3>
                <h2>Modern Black Blouse</h2>
                <div className="product-rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="price">
                  <p className="current-price">$35.00</p>
                </div>
              </div>
            </div>
            <div className="card-product">
              <div className="product-main">
                <div className="product-background">
                  <button
                    type="button"
                    className="btn-theme btn-red btn-theme-product"
                  >
                    QUICK VIEW
                  </button>
                </div>
                <ul className="product-menu">
                  <li><i className="fa-regular fa-heart"></i></li>
                  <li>
                    <i
                      className="fa-regular fa-code-compare fa-flip-horizontal"
                    ></i>
                  </li>
                  <li><i className="fa-regular fa-bag-shopping"></i></li>
                </ul>
              </div>
              <div className="product-info">
                <h3>Category</h3>
                <h2>Modern Black Blouse</h2>
                <div className="product-rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="price">
                  <p className="current-price">$35.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="top-products-flex padding-change">
          <h2>Top Reacted Product</h2>
          <div className="products">
            <div className="card-product padding-change">
              <div className="product-main">
                <div className="product-background">
                  <button
                    type="button"
                    className="btn-theme btn-red btn-theme-product"
                  >
                    QUICK VIEW
                  </button>
                </div>
                <ul className="product-menu">
                  <li><i className="fa-regular fa-heart"></i></li>
                  <li>
                    <i
                      className="fa-regular fa-code-compare fa-flip-horizontal"
                    ></i>
                  </li>
                  <li><i className="fa-regular fa-bag-shopping"></i></li>
                </ul>
              </div>
              <div className="product-info">
                <h3>Category</h3>
                <h2>Modern Black Blouse</h2>
                <div className="product-rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="price">
                  <p className="current-price">$35.00</p>
                </div>
              </div>
            </div>
            <div className="card-product padding-change">
              <div className="product-main">
                <div className="product-background">
                  <button
                    type="button"
                    className="btn-theme btn-red btn-theme-product"
                  >
                    QUICK VIEW
                  </button>
                </div>
                <ul className="product-menu">
                  <li><i className="fa-regular fa-heart"></i></li>
                  <li>
                    <i
                      className="fa-regular fa-code-compare fa-flip-horizontal"
                    ></i>
                  </li>
                  <li><i className="fa-regular fa-bag-shopping"></i></li>
                </ul>
              </div>
              <div className="product-info">
                <h3>Category</h3>
                <h2>Modern Black Blouse</h2>
                <div className="product-rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="price">
                  <p className="current-price">$35.00</p>
                </div>
              </div>
            </div>
            <div className="card-product padding-change">
              <div className="product-main">
                <div className="product-background">
                  <button
                    type="button"
                    className="btn-theme btn-red btn-theme-product"
                  >
                    QUICK VIEW
                  </button>
                </div>
                <ul className="product-menu">
                  <li><i className="fa-regular fa-heart"></i></li>
                  <li>
                    <i
                      className="fa-regular fa-code-compare fa-flip-horizontal"
                    ></i>
                  </li>
                  <li><i className="fa-regular fa-bag-shopping"></i></li>
                </ul>
              </div>
              <div className="product-info">
                <h3>Category</h3>
                <h2>Modern Black Blouse</h2>
                <div className="product-rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="price">
                  <p className="current-price">$35.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default STopProducts