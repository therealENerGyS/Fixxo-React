import React from 'react'
import CProductCard from '../components/CProductCard'

const CTopProducts = ({ title, items = [] }) => {
    return (
        <>
            <div className="grid">
                <h1 className="product-h1">{title}</h1>
                {
                    items.map(product => <CProductCard key={product.articleNumber} item={product} />)
                }
            </div>
        </>
    )
}

export default CTopProducts