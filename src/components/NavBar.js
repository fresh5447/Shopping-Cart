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

const Navigation = ({cartCount}) => {
  return (
    <div style={style.nav}>
      <ul style={style.itemContainer}>
        <NavLink to="/"> home </NavLink>
        <NavLink to="/about"> about </NavLink>
        <NavLink to="/products"> products </NavLink>
        <NavLink to="/cart"> <CartIcon/> <span style={style.cart}> {cartCount} </span> </NavLink>
      </ul>
    </div>
  )
}

export default Navigation;
