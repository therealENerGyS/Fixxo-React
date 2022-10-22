import React from 'react'
import ProductCard from '../components/SProductCard'

const SProductGrid = ({title, products}) => {
  
  return (
    <section className="product-grid">
    <div className="_container">
      <h1 className="product-h1">{title}</h1>
      <div className="grid">
        {
          products.map(product => <ProductCard key={product.id} product={product} />)
        }
      </div>
    </div>
  </section>
  )
}

export default SProductGrid