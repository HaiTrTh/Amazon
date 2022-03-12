import React from 'react'
import Subtotal from '../Subtotal/Subtotal'
import "./Checkout.css"

function Checkout() {
  return (

    <div className="checkout__container">
      <div className="checkout">
        <div className="checkout__left">
          <div className="checkout__img">
            <img

              src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" />
          </div>
          <div>
            <h2 className="checkout__title"> Your shopping Basket</h2>
            {/* basketItem */}
            {/* basketItem */}
            {/* basketItem */}
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </div>
  )
}

export default Checkout