import React from 'react'

const Cart = ({products}) => {
  return (
    <div>
      <h4>Cart</h4>
      <ul>
        {
          products.length === 0
          ? <h1> Your Cart Is Empty </h1>
          : products.map(item => <li>{item.title}</li> )}
      </ul>
    </div>
  )
}

export default Cart
