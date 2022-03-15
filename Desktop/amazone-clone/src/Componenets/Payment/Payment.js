import React from 'react'
import { Link } from 'react-router-dom'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { useStateValue } from '../StateProvider/StateProvider'
import './Payment.css'
function Payment() {

  const [{ basket, user }, dispatch] = useStateValue()
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(
          <Link to="/checkout"> {basket?.length} items</Link>
          )
        </h1>
        {/*Payment section - delivery address */}
        <div className="payment__section">
          <h3 className="payment__section-title ">{user?.email}</h3>
          <div className="payment__section-address">
            <p>6 Đ. số 3, P. Bình An, Quận 2, Thành phố Hồ Chí Minh </p>
            <p>Các giờ: Đang mở cửa   Thêm giờ đầy đủ </p>
          </div>
        </div>
        {/* Payment section - review items */}
        <div className="payment__section">
          <h3 className="payment__section-title">
            Review items and delivery </h3>
          <div className="payment__section-item">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>

          {/* CHeckoutproduct */}
        </div>
        {/* Payment section -payment method */}
        <div className="payment__section">
          <div className="payment__section-title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__section-cart">
            {/* cart detail */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment