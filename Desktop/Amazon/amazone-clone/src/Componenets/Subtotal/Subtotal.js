import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../StateProvider/StateProvider'


function Subtotal() {
  const [{ basket }, dispatch] = useStateValue()
  const sum = basket.reduce((total, basket) => total + basket.price, 0)

  return (
    <div className="subtotal">

      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal( {basket.length} items )):

              <strong>{sum}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              <p>This order contains a gift </p>
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="subtotal__btn">Procecced to Checkout</button>
    </div>
  )
}

export default Subtotal