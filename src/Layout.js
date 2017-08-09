import React from 'react'
import {Switch, Route} from 'react-router-dom'
import About from './components/pages/About'
import CartDetails from './components/pages/CartDetails'
import Home from './components/pages/Home'
import NavBar from './NavBar'
import ProductList from './components/pages/ProductList'

const Layout = (props) => {
  const database = props.database

  return (
    <div id="layout">
      <header id="header">
        <NavBar cartCount={props.database.cart.length} />
      </header>

      <main id="content">
        <Switch>
          <Route path='/' component={Home} exact />

          <Route path='/about' component={About} />

          <Route
            path='/products'
            render={
              () =>
                <ProductList
                  products={database.products}
                  addProductToCart={database.addProductToCart}
                />
            }
          />

          <Route
            path='/cart'
            render={
              () =>
                <CartDetails
                  cart={database.cart}
                  removeProductFromCartById={database.removeProductFromCartById}
                />
            }
          />
        </Switch>
      </main>
    </div>
  )
}

export default Layout
