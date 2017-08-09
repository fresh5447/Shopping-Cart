import React from 'react'

const ProductListItem = (props) => {
  const product = props.product
  const onAddToCart = props.onAddToCart

  return (
    <div>
      <h5>{product.name}</h5>

      <p>$ {product.price}</p>

      <img src={product.img} alt={product.name} />

      <button onClick={onAddToCart}>
        Add To Cart
      </button>
    </div>
  )
}

export default ProductListItem