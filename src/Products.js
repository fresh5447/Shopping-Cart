import React from 'react'

const Products = ({products, addItemToCart}) => {
  return (
    <div>
      <div className="product-flex-container">
        {
          products.map(p =>
            (
              <div key={p.id}>
                <h5>{p.name}</h5>
                <p>$ {p.price}</p>
                <img src={p.img} />
                <button onClick={() => addItemToCart(p) }> Add To Cart </button>
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default Products
