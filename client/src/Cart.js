import React from 'react'
import {Link} from 'react-router-dom'

const Cart = ({addItem, products, removeItemFromCart}) => {
  return (
      <div className="product-flex-container">
        {
          products.length > 0
          ? products.map(p =>
            (
              <div key={p.id}>
                <h5>{p.name}</h5>
                <p>$ {p.price}</p>
                <img src={p.img} />
                <button onClick={() => removeItemFromCart(p.id) }> Remove From Cart </button>
              </div>
            )
        ) : (
          <div className="jumbotron">
            <h3> Cart Is Empty </h3>
            <Link to="/products">Keep Shopping</Link>
          </div>
        )
      }
    </div>

  )
}

export default Cart
