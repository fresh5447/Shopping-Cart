import React from 'react'
import { spring, Motion } from 'react-motion'
//
// <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(props.opacity) }}>
// { (style) => <div style={style}>Can you see me?</div> }
// </Motion>


const Products = ({products, addItemToCart, opacity}) => {
  return (
    <div>
      <div className="product-flex-container">
        {
          products.map(p =>
            <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(opacity) }}>
              {(style) => (
                <div style={style} key={p.id}>
                  <h5>{p.name}</h5>
                  <p>$ {p.price}</p>
                  <img src={p.img} />
                  <button onClick={() => addItemToCart(p) }> Add To Cart </button>
                </div>
              )}
            </Motion>
        )}
      </div>
    </div>
  )
}

export default Products
