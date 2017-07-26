import React from 'react'

const Product = ({name, img, price}) => {
  return (
    <div>
    <div>
      <h4>{name}</h4>
      <img src={img} />
      <p> {price} </p>
    </div>
    </div>
  )
}

export default Product
