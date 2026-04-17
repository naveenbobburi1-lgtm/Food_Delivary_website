import React from 'react'
import './Cart.css'
import { StoreContext } from '../../context/store-context'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = React.useContext(StoreContext)
  const navigate = useNavigate();
  const subtotal = getTotalCartAmount()
  const deliveryFee = subtotal === 0 ? 0 : 2

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className='cart-items-item cart-items-title'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${cartItems[item._id] * item.price}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
       
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${deliveryFee}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${subtotal + deliveryFee}</b>
            </div>
            <button onClick={()=>navigate('/order')}>Proceed to Checkout</button>
          </div>
        </div>
         <div className="cart-promocode">
          <h3>Have a Promo Code?</h3>
          <p>If you have a promo code, enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder='Enter promo code' />
            <button onClick={()=>navigate('/order')}>Apply</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
