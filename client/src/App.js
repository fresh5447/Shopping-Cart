import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,
        Route, Switch, Link } from 'react-router-dom'
import faker from 'faker'

import NavBar from './components/NavBar'
import About from './About'
import Products from './Products'
import Cart from './Cart'

class App extends Component {
  state = {
    products: undefined,
    cart: [],
    cartCount: 0,
    opacity: 1
  }

  componentDidMount() {
    this.makeProducts()
  }

  makeProducts(){
    let tempProducts = [];
    for (var i = 0; i < 25; i++) {
      let prod = {
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        img: faker.image.image(),
        id: i
      }
      tempProducts.push(prod)
    }
    this.setState({ products: tempProducts })
  }

  addItemToCart = (item) => {
    let newState = this.state.cart.concat(item)
    this.setState({cart: newState, cartCount: newState.length})
    alert(`${item.name} added to cart`)
  }

  removeItemFromCart = (itemId) => {
    console.log(`About to remove item ${itemId} from cart`)
    let newState = this.state.cart.filter(item => {
      return itemId !== item.id
    })
    this.setState({cart: newState, cartCount: newState.length})
  }

  render(){
    return (
      <Router>
        <div>
          <NavBar cartCount={this.state.cartCount}/>
          <Route exact path="/" render={() => (
                <div className="jumbotron">
                  <h3> Bamazon. Worlds largest collection of online goods. </h3>
                  <p> Go ahead and try not to buy something. </p>
                  <Link to="/products"> Shop Now </Link>
                </div>
              )}/>
          <Route path="/about" component={About}/>
          {
            this.state.products
            ? <Route path="/products" render={() => (
                <Products
                  addItem={true}
                  addItemToCart={this.addItemToCart}
                  products={this.state.products}
                  opacity={this.state.opacity}
                />
              )}/>
            : <h3>Still creating products...</h3>
          }
          {
            this.state.cart
            ? <Route path="/cart" render={() => (
                <Cart
                  addItem={false}
                  removeItemFromCart={this.removeItemFromCart}
                  products={this.state.cart}
                />
            )}/> : <h1>Cart Is Empty</h1>
          }

        </div>
      </Router>
    )
  }
}

export default App;
