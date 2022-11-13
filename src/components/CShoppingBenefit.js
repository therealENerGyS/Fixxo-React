import React from 'react'

const CShoppingBenefit = ({icon, title}) => {
    return (
        <div class="benefits">
            <i class={icon}></i>
            <h2 class="benefits-h2">{title}</h2>
            <p class="benefits-p">Village did removed enjoyed explain talking.</p>
        </div>
    )
}

export default CShoppingBenefit