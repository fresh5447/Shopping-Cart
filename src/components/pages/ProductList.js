import React from 'react'
import ProductListItem from '../presentation/ProductListItem'

const ProductList = (props) => {
  const products = props.products
  const addProductToCart = props.addProductToCart

  return (
    <div>
      {
        products.map(product => {
          const onAddToCart = () => {
            addProductToCart(product)
            alert(`${product.name} added to cart!`)
          }

          return (
            <ProductListItem
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          )
        })
      }
    </div>
  )
}

export default ProductList
