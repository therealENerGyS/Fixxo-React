import React from 'react'

const CShoppingBenefit = ({icon, title}) => {
    return (
        <div className="benefits">
            <i className={icon}></i>
            <h2 className="benefits-h2">{title}</h2>
            <p className="benefits-p">Village did removed enjoyed explain talking.</p>
        </div>
    )
}

export default CShoppingBenefit