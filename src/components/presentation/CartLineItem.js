import React from 'react'

const CartLineItem = (props) => {
  const product = props.product
  const onRemoveFromCart = props.onRemoveFromCart

  return (
    <li>
      {product.name}

      {product.price}

      <button onClick={onRemoveFromCart} >
        Remove
      </button>
    </li>
  )
}

export default CartLineItem
