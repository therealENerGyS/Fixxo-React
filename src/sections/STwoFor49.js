import React from "react";
import CProductCard from "../components/CProductCard";

const STwoFor49 = ({products}) => {
  return (
    <section className="two-for-deal-49">
      <div className="_container">
        <div className="grid-two-for">
        {
          products.map(product => <CProductCard key={product.id} product={product} />)
        }
        </div>
        <div className="two-for">
          <h2>2 FOR USD $49</h2>
          <button type="button" className="btn-theme btn-white">
            FLASH SALE
          </button>
        </div>
      </div>
    </section>
  );
};

export default STwoFor49;
