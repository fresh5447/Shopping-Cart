import React from 'react'

const Products = ({products, addItemToCart}) => {
  return (
    <div>
      <h4>Products</h4>
      <ul>
        { products.map(item => (
          <li onClick={() => addItemToCart(item)}>{item.title}</li>
        ) )}
      </ul>
    </div>
  )
}

export default Products
