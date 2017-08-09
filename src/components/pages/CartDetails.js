import React from 'react'
import {Link} from 'react-router-dom'
import CartLineItem from '../presentation/CartLineItem'

const CartDetails = (props) => {
  const cart = props.cart
  const removeProductFromCartById = props.removeProductFromCartById

  if (cart.length === 0) {
    return (
      <div>
        <h3>Cart Is Empty!</h3>
        <Link to="/products">Keep Shopping!</Link>
      </div>
    )
  }

  const total = cart.reduce((memo, p) => memo + Number(p.price), 0).toFixed(2)

  return (
    <ol>
      {
        cart.map(product => {
          const onRemoveFromCart = () => {
            removeProductFromCartById(product.id)
            alert(`${product.name} has been removed!`)
          }

          return (
            <CartLineItem
              key={product.id}
              product={product}
              onRemoveFromCart={onRemoveFromCart}
            />
          )
        })
      }

      <li>
        Total: {total}
      </li>
    </ol>
  )
}

export default CartDetails
