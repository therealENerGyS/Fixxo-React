import React from "react";
import CProductCard from "../components/CProductCard";

const STwoFor29 = ({products}) => {
  return (
    <section className="two-for-deal-29">
      <div className="_container">
        <div className="two-for">
          <h2>2 FOR USD $29</h2>
          <button type="button" className="btn-theme btn-white">
            FLASH SALE
          </button>
        </div>
        <div className="grid-two-for">
        {
          products.map(product => <CProductCard key={product.id} product={product} />)
        }
        </div>
      </div>
    </section>
  );
};

export default STwoFor29;
