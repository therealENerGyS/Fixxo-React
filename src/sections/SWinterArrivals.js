import React from 'react'

const SWinterArrivals = () => {
  return (
    <section className="winter-arrivals">
    <div className="_container">
      <div className="winter-clearance">
        <div className="winter-text">
          <h2>Winter Clearance Up to 70% Off!</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem apriam eaque ipsa quae
            ab illo inventore.
          </p>
          <button type="button" className="btn-theme btn-black">
            <div className="border-test"></div>
            SHOP NOW
          </button>
        </div>
        <div className="hidden"></div>
      </div>
      <div className="new-arrivals">
        <div className="new-arrivals-text">
          <h2>New Arrivals</h2>
          <button type="button" className="btn-theme btn-black">
            <div className="border-test"></div>
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SWinterArrivals