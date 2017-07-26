import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,
        Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import About from './About'
import Products from './Products'
import Cart from './Cart'


class App extends Component {
  state = {
    products: [
      { title: "toothpaste" },
      { title: "deodorant" },
      { title: "shampoo" },
      { title: "mouth wash" },
      { title: "soap" }
    ],
    cart: [],
    cartCount: 0,
  }

  addItemToCart = (item) => {
    let newState = this.state.cart.concat(item)
    this.setState({cart: newState, cartCount: newState.length})
    alert(`${item.title} added to cart`)
  }

  render(){
    return (
      <Router>
      <div>
        <NavBar cartCount={this.state.cartCount}/>
        <Route exact path="/" render={() => (
              <div>
                <h1> Direct Render Example </h1>
              </div>
            )}/>
        <Route path="/about" component={About}/>
        <Route path="/products" render={() => (
          <Products
            addItemToCart={this.addItemToCart}
            products={this.state.products}
          />
        )}/>
        <Route path="/cart" render={() => (
          <Cart
            products={this.state.cart}
          />
        )}/>

      </div>
      </Router>
    )
  }
}

export default App;


// <Route path="/shop" render={() => (
//       <h1> Explore the shopping cart </h1>
//     )}/>
// <Route path="/shop/cart" render={() => (
//       <h1> Hello Cart Two </h1>
//     )}/>
// <Route path="/shop/products" render={() => (
//     <Products products={this.state.products} />
//   )}/>
