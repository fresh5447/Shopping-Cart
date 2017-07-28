import React from 'react'
import { spring, Motion } from 'react-motion'

const Products = ({products, addItemToCart, opacity}) => {
  return (
    <div>
      <div className="product-flex-container">
        {
          products.map(p =>
            <div key={p.id}>
              <h5>{p.name}</h5>
              <p>$ {p.price}</p>
              <img src={p.img} />
              <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(opacity) }}>
                {(style) => (
                    <button style={style} onClick={() => addItemToCart(p) }> Add To Cart </button>
                )}
              </Motion>
            </div>
        )}
      </div>
    </div>
  )
}

export default Products
