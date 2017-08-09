import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => (
  <div className="jumbotron">
    <h3>Bamazon. Worlds largest collection of online goods.</h3>

    <p>Go ahead and try not to buy something.</p>

    <Link to="/products">Shop Now</Link>
  </div>
)

export default Home
