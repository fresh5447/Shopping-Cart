import React from 'react'
import Product from './Product'

const Products = ({products, addItemToCart}) => {
  return (
    <div>
      <h4>Products</h4>
        <div>
          {
            products.map(p => <Product name={p.name} img={p.img} price={p.price} />)
          }
        </div>
    </div>
  )
}

export default Products
