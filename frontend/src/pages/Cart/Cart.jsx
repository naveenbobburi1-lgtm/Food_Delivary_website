import React from 'react'
import './Cart.css'
import {Storecontext} from '../../context/StoreContext'

const Cart = () => {
  const {cartItems,food_list,removeFromCart} = React.useContext(Storecontext)
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
        <br/>
        <hr/>
      </div>
      
    </div>
  )
}

export default Cart
