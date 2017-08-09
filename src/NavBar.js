import React from 'react'
import { NavLink } from 'react-router-dom'
import CartIcon from 'react-icons/lib/fa/cart-arrow-down'

const style = {
  nav: {
    backgroundColor: '#ecf0f1',
    fontSize: '17px'
  },
  itemContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  cart: {
    fontSize: '12px',
    color: 'red'
  }
}

const Navigation = (props) => {
  const cartCount = props.cartCount

  return (
    <nav style={style.nav}>
      <ul style={style.itemContainer}>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink to="/products">Products</NavLink>

        <NavLink to="/cart">
          <CartIcon />
          <span style={style.cart}>Cart: {cartCount}</span>
        </NavLink>
      </ul>
    </nav>
  )
}

export default Navigation;
