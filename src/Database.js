import faker from 'faker'
import React, {Component} from 'react'
import Layout from './Layout'

const NUMBER_OF_PRODUCTS = 25

class Database extends Component {
  state = {
    products: [],
    cart: []
  }

  componentDidMount () {
    const products = []
    for (let i = 0; i < NUMBER_OF_PRODUCTS; i++) {
      const prod = {
        id: i,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        img: faker.image.image()
      }
      console.log(prod.price)
      products.push(prod)
    }

    this.setState({products})
  }

  addProduct = (product) => {
    if (product == null || typeof product !== 'object') {
      throw new Error(`addProduct(): product param is invalid: ${product}`)
    }

    const newProduct = {
      ...product,
      id: this.state.products.length
    }

    const products = [
      ...this.state.products,
      newProduct
    ]

    this.setState({products})
    return newProduct
  }

  removeProductById = (productId) => {
    if (productId == null || typeof productId !== 'number') {
      throw new Error(`removeProductById(): productId param is invalid: ${productId}`)
    }

    const index = this.state.products.findIndex(p => p.id === productId)

    if (index === -1) {
      throw new Error(`removeProductById(): no product found with productId: ${productId}`)
    }

    const products = [
      ...this.state.products.slice(0, index),
      ...this.state.products.slice(index + 1, this.state.products.length)
    ]

    this.setState({products})
  }

  addProductToCart = (product) => {
    if (product == null || typeof product !== 'object') {
      throw new Error(`addProductToCart(): product param is invalid: ${product}`)
    }

    const cart = [
      ...this.state.cart,
      product
    ]

    this.setState({cart})
  }

  removeProductFromCartById = (productId) => {
    if (productId == null || typeof productId !== 'number') {
      throw new Error(`removeProductFromCartById(): productId param is invalid: ${productId}`)
    }

    const index = this.state.cart.findIndex(p => p.id === productId)

    if (index === -1) {
      throw new Error(`removeProductFromCartById(): no product found with productId: ${productId}`)
    }

    const cart = [
      ...this.state.cart.slice(0, index),
      ...this.state.cart.slice(index + 1, this.state.cart.length)
    ]

    this.setState({cart})
  }

  render () {
    const database = {
      products: this.state.products,
      addProduct: this.addProduct,
      removeProductById: this.removeProductById,

      cart: this.state.cart,
      addProductToCart: this.addProductToCart,
      removeProductFromCartById: this.removeProductFromCartById
    }

    return (
      <Layout
        database={database}
      />
    )
  }
}

export default Database
