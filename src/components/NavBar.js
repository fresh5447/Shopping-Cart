import React from 'react'
import { NavLink } from 'react-router-dom'

const style = {
  nav: {
    backgroundColor: '#ecf0f1',
    height: '10vh',
    width: '100vw',
    fontSize: '34px'
  },
  itemContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  cart: {
    fontSize: '20px',
    color: 'red'
  }
}

const Navigation = ({cartCount}) => {
  return (
    <div style={style.nav}>
      <ul style={style.itemContainer}>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/about"> about </NavLink>
        <NavLink to="/cart"> cart <span style={style.cart}> {cartCount} </span> </NavLink>
        <NavLink to="/products"> products </NavLink>
      </ul>
    </div>
  )
}

export default Navigation;
